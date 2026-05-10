// api/db.js

import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  },
);

export const FormModel =
  mongoose.models.Form || mongoose.model("Form", formSchema);

export async function connectToDatabase() {
  try {
    if (mongoose.connection.readyState >= 1) {
      return;
    }

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Error:", error);

    throw error;
  }
}
