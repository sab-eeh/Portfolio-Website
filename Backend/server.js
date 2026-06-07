import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./config/db.js";

import contactRoutes from "./routes/contactRoutes.js";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://sabeeh-portfolio.vercel.app/"],
  }),
);

app.use(express.json());

connectDB();

app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
