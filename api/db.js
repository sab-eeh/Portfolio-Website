// /api/db.js
import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  message: String,
});

export const FormModel =
  mongoose.models.Form || mongoose.model("Form", formSchema);

export const connectToDatabase = async () => {
  if (mongoose.connections[0].readyState) return;

  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
