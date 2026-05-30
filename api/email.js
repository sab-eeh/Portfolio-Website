import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",

  port: 465,

  secure: true,

  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export async function verifyEmailConnection() {
  try {
    await transporter.verify();

    console.log("SMTP Ready");
  } catch (error) {
    console.error("SMTP Error:", error);
  }
}
