import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import compression from "compression";

const app = express();
const port = process.env.port || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

async function ConnectDB() {
  try {
    const connect = await mongoose.connect(
      "mongodb://localhost:27017/UserCredentials"
    );
    console.log("Database Connected Successfully ! ");
  } catch (error) {
    res.send("Error Occured while Connecting !" + error);
  }
}

ConnectDB();

const FormSchema = new mongoose.Schema({
  fullname: String,
  email: { type: String, required: true, sparse: true },
  message: String,
});

const FormModel = mongoose.model("FormData", FormSchema);

app.get("/", (req, res) => {
  res.send("Portfolio website backend");
});

app.post("/", async (req, res) => {
  try {
    const formData = new FormModel(req.body);
    await formData.save();
    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
