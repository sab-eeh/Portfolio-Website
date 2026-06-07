import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer";

console.log("EMAIL:", process.env.GMAIL_USER);
console.log("PASS:", process.env.GMAIL_PASS ? "Loaded" : "Missing");

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});