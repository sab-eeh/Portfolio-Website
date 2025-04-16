import { connectToDatabase, FormModel } from "../db";
import { transporter } from "../email";
import dotenv from 'dotenv';
dotenv.config();

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { fullname, email, message } = req.body;

      await connectToDatabase();

      const formData = new FormModel({ fullname, email, message });
      await formData.save();

      // Send email to user
      await transporter.sendMail({
        from: process.env.SMTP_EMAIL,
        to: email,
        subject: "Thanks for contacting me!",
        text: `Hi ${fullname},\n\nThanks for reaching out! I'll get back to you soon.\n\nYour Message:\n"${message}"`,
      });

      // Send email to admin
      await transporter.sendMail({
        from: email,
        to: process.env.SMTP_EMAIL,
        subject: "New Portfolio Contact Form Submission",
        text: `New message:\nName: ${fullname}\nEmail: ${email}\nMessage:\n${message}`,
      });

      return res.status(201).json({ message: "Submitted successfully!" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Something went wrong." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
