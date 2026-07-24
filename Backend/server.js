import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

// Load environment variables
// Priority: .env.local (development) > .env (production)
if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: ".env", override: false });
} else {
  dotenv.config({ path: ".env.local", override: true });
  dotenv.config({ path: ".env", override: false });
}

const app = express();

// CORS Configuration
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "http://localhost:5000",
  "https://sabeeh-portfolio.vercel.app",
  "https://portfolio-website-production-1869.up.railway.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = `The CORS policy for this site does not allow access from the specified origin: ${origin}`;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
  })
);

app.use(express.json());

let dbConnected = false;

// Connect to MongoDB without crashing the server if the database is unavailable.
connectDB()
  .then((connected) => {
    dbConnected = connected;
  })
  .catch(() => {
    dbConnected = false;
  });

// Routes
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.get("/health", (req, res) => {
  res.json({
    status: dbConnected ? "ok" : "degraded",
    database: dbConnected ? "connected" : "disconnected",
    environment: process.env.NODE_ENV || "development",
    timestamp: new Date().toISOString(),
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`\n${"=".repeat(50)}`);
  console.log("🚀 Portfolio Backend Server");
  console.log(`${"=".repeat(50)}`);
  console.log(`✓ Server running on port ${PORT}`);
  console.log(`✓ Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`✓ Allowed Origins: ${allowedOrigins.join(", ")}`);
  console.log(`${"=".repeat(50)}\n`);
});
