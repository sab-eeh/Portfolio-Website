// api/contact.js

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

    /* DATABASE */
    await connectToDatabase();

    const newMessage = await FormModel.create({
      fullname,
      email,
      message,
    });

    /* EMAIL TO USER */
    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,

      to: email,

      subject: "Thank you for contacting me",

      html: `
        <div style="font-family:sans-serif;padding:20px;">
          <h2>Hi ${fullname},</h2>

          <p>
            Thank you for contacting me.
            I received your message and
            will get back to you soon.
          </p>

          <br />

          <p>
            Regards,<br/>
            Sabeeh Uddin
          </p>
        </div>
      `,
    });

    /* ADMIN EMAIL */
    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,

      to: process.env.SMTP_EMAIL,

      subject: "New Portfolio Contact Submission",

      html: `
        <div style="font-family:sans-serif;padding:20px;">
          <h2>New Contact Form Message</h2>

          <p>
            <strong>Name:</strong>
            ${fullname}
          </p>

          <p>
            <strong>Email:</strong>
            ${email}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <p>${message}</p>
        </div>
      `,
    });

    return res.status(200).json({
      success: true,

      message: "Message sent successfully",

      data: newMessage,
    });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return res.status(500).json({
      success: false,

      message: "Something went wrong",

      error: error.message,
    });
  }
}
