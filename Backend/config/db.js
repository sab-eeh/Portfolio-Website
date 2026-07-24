import mongoose from "mongoose";

let connectionState = "disconnected";

export const getMongoConnectionStatus = () => connectionState;

export const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    connectionState = "connected";
    return true;
  }

  try {
    const mongoUri = process.env.MONGODB_URI || "mongodb://localhost:27017/portfolioDB";

    if (!mongoUri) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }

    console.log("Attempting to connect to MongoDB...");
    console.log(`Connecting to: ${mongoUri.replace(/:.*@/, ":****@")}`);

    await mongoose.connect(mongoUri, {
      connectTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      retryWrites: true,
      w: "majority",
    });

    connectionState = "connected";
    console.log("✓ MongoDB Connected Successfully");
    console.log(`Database: ${mongoose.connection.name}`);
    console.log(`Host: ${mongoose.connection.host}`);
    return true;
  } catch (error) {
    connectionState = "disconnected";
    console.error("✗ MongoDB Connection Error:");
    console.error(`Error Message: ${error.message}`);

    if (error.message.includes("ECONNREFUSED")) {
      console.error("\n⚠️  Connection Refused - Make sure MongoDB is running locally!");
      console.error("   For local development, either:");
      console.error("   1. Start MongoDB: mongod (Windows) or brew services start mongodb-community (Mac)");
      console.error("   2. Or use MongoDB Atlas and whitelist your IP: https://www.mongodb.com/docs/atlas/security/ip-access-list/");
    } else if (error.message.includes("ENOTFOUND")) {
      console.error("\n⚠️  DNS Resolution Failed - Check your MongoDB URI is correct");
    } else if (error.message.includes("authentication failed")) {
      console.error("\n⚠️  Authentication Failed - Check your credentials");
    }

    console.error("\nFull Error:", error);
    return false;
  }
};
