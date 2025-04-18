// /api/contact.js
import { connectToDatabase, FormModel } from "./db.js";
import { transporter } from "./email.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { fullname, email, message } = req.body;

    if (!fullname || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    await connectToDatabase();

    const formData = new FormModel({ fullname, email, message });
    await formData.save();

    // Send email to user
    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: email,
      subject: "Thanks for contacting me!",
      text: `Hi ${fullname},\n\nThanks for reaching out! I'll get back to you soon.\n\nThank You,\nSabeeh Uddin"`,
    });

    // Send email to admin
    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: process.env.SMTP_EMAIL,
      subject: "New Portfolio Contact Form Submission",
      text: `New message:\nName: ${fullname}\nEmail: ${email}\nMessage:\n${message}`,
    });

    return res.status(201).json({ message: "Submitted successfully!" });
  } catch (error) {
    console.error("API Error:", error);

    return res.status(500).json({
      error: "Server error. Please try again later.",
      details: error.message,
    });
  }
}
