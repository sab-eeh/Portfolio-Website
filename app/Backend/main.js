import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import compression from "compression";
import nodemailer from "nodemailer";

const app = express();
const port = process.env.port || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

// MongoDB
async function ConnectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/UserCredentials");
    console.log("Database Connected Successfully!");
  } catch (error) {
    console.log("Error Occurred while Connecting!", error);
  }
}
ConnectDB();

const FormSchema = new mongoose.Schema({
  fullname: String,
  email: { type: String, required: true },
  message: String,
});
const FormModel = mongoose.model("FormData", FormSchema);

// Setup Gmail SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "usabeeh72@gmail.com", // replace with your Gmail
    pass: "jnxwbkmqojhxclsq",    // Gmail App Password
  },
});

// Routes
app.get("/", (req, res) => {
  res.send("Backend is running! 🚀");
});

app.post("/", async (req, res) => {
  try {
    const { fullname, email, message } = req.body;

    // Save to DB
    const formData = new FormModel({ fullname, email, message });
    await formData.save();

    // Email to user
    const userMailOptions = {
      from: "usabeeh72@gmail.com",
      to: email,
      subject: "Thanks for contacting me!",
      text: `Hi ${fullname},\n\nThanks for reaching out! I'll get back to you soon.\n\nYour Message:\n"${message}"`,
    };

    // Email to you (admin)
    const adminMailOptions = {
      from: email,
      to: "usabeeh72@gmail.com", // Your email
      subject: "New Portfolio Contact Form Submission",
      text: `You received a new message:\n\nName: ${fullname}\nEmail: ${email}\nMessage:\n${message}`,
    };

    // Send both emails
    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(adminMailOptions);

    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error saving form data or sending email:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
