import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import connectDB from "./src/config/db.js";
import contactRoutes from "./src/routers/contactRouter.js";
import jobRoutes from "./src/routers/jobRouter.js";

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173" || "https://vijaibhavalawfirm.com",
    credentials: true,
  }),
);
app.use(express.json());

// ensure uploads directory exists and serve it statically
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadsDir = path.join(__dirname, "src", "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}
app.use("/uploads", express.static(uploadsDir));

app.use("/contact", contactRoutes);
app.use("/applications", jobRoutes);

// runs only when the routes is being hit
app.get("/", (req, res) => {
  console.log("Route hit !");
  res.send("Server is working");
});

//global error handler
app.use((err, req, res, next) => {
  const ErrorMessage = err.message || "Internal Server Error";
  const StatusCode = err.statusCode || 500;
  console.log("Error found : ", { ErrorMessage, StatusCode });
  res.status(StatusCode).json({ message: ErrorMessage });
});

const port = process.env.PORT || 5000;
app.listen(port, async () => {
  try {
    await connectDB();
    console.log(`🚀 Server is running on port ${port}`);
  } catch (error) {
    console.error("😬 Error starting server:", error);
  }
});
