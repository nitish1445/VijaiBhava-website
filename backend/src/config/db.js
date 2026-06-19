import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      console.error("Missing MONGODB_URI environment variable. Aborting connection.");
      process.exit(1);
    }

    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 30000,
    });

    console.log(`✅ MongoDB Connected at : ${conn.connection.host}`);
    console.log(`🌐 Database Name : ${conn.connection.name}`);
  } catch (error) {
    console.error("Error while connecting to DB:", error && error.message ? error.message : error);
    if (error && error.stack) console.error(error.stack);
    process.exit(1);
  }
};

export default connectDB;