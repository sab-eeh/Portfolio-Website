import dotenv from "dotenv";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import validator from "validator";

dotenv.config();

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

const contactSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { collection: "contacts" }
);

let cachedContactModel = null;

async function getContactModel() {
  if (cachedContactModel) {
    return cachedContactModel;
  }

  if (!process.env.MONGODB_URI) {
    return null;
  }

  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 10000,
    });
  }

  cachedContactModel = mongoose.models.Contact || mongoose.model("Contact", contactSchema);
  return cachedContactModel;
}

function parseJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      if (!body) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(error);
      }
    });

    req.on("error", reject);
  });
}

async function sendEmail({ fullname, email, message }) {
  const user = process.env.GMAIL_USER || process.env.SMTP_EMAIL;
  const pass = process.env.GMAIL_PASS;

  if (!user || !pass) {
    return { ok: false, reason: "missing-credentials" };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });

  await transporter.sendMail({
    from: user,
    to: user,
    replyTo: email,
    subject: `New portfolio contact from ${fullname}`,
    html: `
      <h2>New message from your portfolio site</h2>
      <p><strong>Name:</strong> ${fullname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    `,
  });

  return { ok: true };
}

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.set(corsHeaders);
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    res.set(corsHeaders);
    res.status(405).json({ success: false, message: "Method not allowed" });
    return;
  }

  res.set(corsHeaders);

  try {
    const body = req.body || (await parseJsonBody(req));
    const { fullname, email, message } = body;

    if (!fullname || !email || !message) {
      res.status(400).json({ success: false, message: "Please fill all fields" });
      return;
    }

    if (!validator.isEmail(email)) {
      res.status(400).json({ success: false, message: "Invalid email" });
      return;
    }

    let savedContact = null;
    let dbError = null;

    try {
      const Contact = await getContactModel();
      if (Contact) {
        savedContact = await Contact.create({ fullname, email, message });
      }
    } catch (error) {
      dbError = error;
      console.error("Database save failed:", error.message || error);
    }

    let emailResult = null;
    try {
      emailResult = await sendEmail({ fullname, email, message });
    } catch (error) {
      emailResult = { ok: false, reason: "send-failed" };
      console.error("Email send failed:", error.message || error);
    }

    if (!emailResult?.ok) {
      res.status(500).json({
        success: false,
        message: "Your message could not be sent right now. Please try again later.",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: dbError
        ? "Message sent, but saving to database failed."
        : "Message sent successfully",
      data: savedContact,
      warning: dbError ? "database_save_failed" : undefined,
    });
  } catch (error) {
    console.error("Contact handler failed:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
}
