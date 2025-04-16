import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

export async function connectToDatabase() {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("DB connection error:", error);
  }
}

const FormSchema = new mongoose.Schema({
  fullname: String,
  email: { type: String, required: true },
  message: String,
});

export const FormModel = mongoose.models.FormData || mongoose.model("FormData", FormSchema);
