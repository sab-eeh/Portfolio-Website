// email.js or inside your route handler
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'usabeeh72@gmail.com',      
    pass: 'jnxwbkmqojhxclsq',
  },
});

async function sendEmail(to, subject, html) {
  await transporter.sendMail({
    from: '"Your Portfolio" <your_email@gmail.com>',
    to,
    subject,
    html,
  });
}

module.exports = sendEmail;
