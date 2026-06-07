import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    fullname: String,
    email: String,
    message: String,
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Contact", contactSchema);
