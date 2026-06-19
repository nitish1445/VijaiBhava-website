import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      console.error("Missing MONGODB_URI environment variable. Cannot connect to MongoDB.");
      connected = false;
      return;
    }

    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 30000,
    });

    connected = true;
    console.log(`✅ MongoDB Connected at : ${conn.connection.host}`);
    console.log(`🌐 Database Name : ${conn.connection.name}`);
  } catch (error) {
    connected = false;
    console.error("Error while connecting to DB:", error && error.message ? error.message : error);
    if (error && error.stack) console.error(error.stack);
    // don't exit process; allow server to start and return 503 for API calls
  }
};

const isDBConnected = () => connected && mongoose.connection && mongoose.connection.readyState === 1;

export { connectDB, isDBConnected };