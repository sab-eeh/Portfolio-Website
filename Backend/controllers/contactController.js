import validator from "validator";

import Contact from "../models/Contact.js";
import { getMongoConnectionStatus } from "../config/db.js";
import { transporter } from "../services/emailService.js";

export const submitContactForm = async (req, res) => {
  try {
    const { fullname, email, message } = req.body;

    if (!fullname || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Email",
      });
    }

    if (getMongoConnectionStatus() !== "connected") {
      return res.status(503).json({
        success: false,
        message: "The server is currently unable to save messages. Please try again later.",
      });
    }

    const savedContact = await Contact.create({
      fullname,
      email,
      message,
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Thank You For Contacting Me",
      html: `
        <h2>Hello ${fullname}</h2>
        <p>Your message has been received.</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Message Sent Successfully",
      data: savedContact,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
