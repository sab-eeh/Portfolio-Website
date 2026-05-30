import validator from "validator";

import { connectToDatabase, FormModel } from "./db.js";

import { transporter } from "./email.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const { fullname, email, message } = req.body;

    /* VALIDATION */

    if (!fullname || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address",
      });
    }

    if (fullname.length > 100) {
      return res.status(400).json({
        success: false,
        message: "Name is too long",
      });
    }

    if (message.length > 2000) {
      return res.status(400).json({
        success: false,
        message: "Message is too long",
      });
    }

    const cleanName = validator.escape(fullname.trim());

    const cleanEmail = validator.normalizeEmail(email.trim());

    const cleanMessage = validator.escape(message.trim());

    /* DATABASE */

    await connectToDatabase();

    const savedMessage = await FormModel.create({
      fullname: cleanName,
      email: cleanEmail,
      message: cleanMessage,
    });

    /* EMAIL TO USER */

    await transporter.sendMail({
      from: `"Sabeeh Uddin" <${process.env.GMAIL_USER}>`,

      to: cleanEmail,

      subject: "Thank you for contacting me",

      html: `
  <div style="font-family:Arial,sans-serif;padding:20px;">
    <h2>Hi ${cleanName},</h2>

    <p>
      Thank you for contacting me.
      I have received your message and
      will get back to you soon.
    </p>

    <br/>

    <p>
      Regards,<br/>
      Sabeeh Uddin
    </p>
  </div>
  `,
    });

    /* ADMIN EMAIL */

    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.GMAIL_USER}>`,

      to: process.env.GMAIL_USER,

      subject: "New Portfolio Contact Submission",

      html: `
  <div style="font-family:Arial,sans-serif;padding:20px;">
    <h2>New Contact Form Submission</h2>

    <p>
      <strong>Name:</strong>
      ${cleanName}
    </p>

    <p>
      <strong>Email:</strong>
      ${cleanEmail}
    </p>

    <p>
      <strong>Message:</strong>
    </p>

    <p>
      ${cleanMessage}
    </p>

    <hr/>

    <p>
      Submitted:
      ${new Date().toLocaleString()}
    </p>
  </div>
  `,
    });

    return res.status(200).json({
      success: true,

      message: "Message sent successfully",

      data: savedMessage,
    });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
