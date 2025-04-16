import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  message: String,
});

export const FormModel = mongoose.models.Form || mongoose.model("Form", formSchema);

export const connectToDatabase = async () => {
  if (mongoose.connection.readyState === 1) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Atlas");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err;
  }
};
