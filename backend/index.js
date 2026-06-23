// import dotenv from "dotenv";
// dotenv.config();

// import express from "express";
// import cors from "cors";
// import path from "path";
// import fs from "fs";
// import { fileURLToPath } from "url";

// import connectDB from "./src/config/db.js";
// import contactRoutes from "./src/routers/contactRouter.js";
// import jobRoutes from "./src/routers/jobRouter.js";

// const app = express();

// // Middleware
// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173",
//       "https://vijaibhavalawfirm.com",
//       "https://www.vijaibhavalawfirm.com",
//     ],
//     credentials: true,
//   })
// );

// app.use(express.json());

// // ES Module support
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Uploads folder
// const uploadsDir = path.join(__dirname, "src", "uploads");

// if (!fs.existsSync(uploadsDir)) {
//   fs.mkdirSync(uploadsDir, { recursive: true });
// }

// app.use("/uploads", express.static(uploadsDir));

// // API Routes
// app.use("/contact", contactRoutes);
// app.use("/applications", jobRoutes);

// console.log("Contact is running on /contact");
// // React Build Folder
// const distDir = path.join(__dirname, "dist");

// app.use(express.static(distDir));

// // React Routes - SPA fallback (Express 5 compatible)
// app.use((req, res) => {
//   res.sendFile(path.join(distDir, "index.html"));
// });

// // Global Error Handler
// app.use((err, req, res, next) => {
//   const ErrorMessage = err.message || "Internal Server Error";
//   const StatusCode = err.statusCode || 500;

//   console.log("Error found:", {
//     ErrorMessage,
//     StatusCode,
//   });

//   res.status(StatusCode).json({
//     message: ErrorMessage,
//   });
// });

// // Start Server
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, async () => {
//   try {
//     await connectDB();
//     console.log(`🚀 Server running on port ${PORT}`);
//   } catch (error) {
//     console.error("😬 Error starting server:", error);
//   }
// });

import dotenv from "dotenv";
dotenv.config();

console.log("================================");
console.log("GMAIL_ID =", process.env.GMAIL_ID);
console.log(
  "GMAIL_PASSKEY =",
  process.env.GMAIL_PASSKEY ? "FOUND" : "NOT FOUND"
);
console.log(
  "MONGO_URI =",
  process.env.MONGO_URI ? "FOUND" : "NOT FOUND"
);
console.log("================================");

import express from "express";
import cors from "cors";
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
    origin: [
      "http://localhost:5173",
      "https://vijaibhavalawfirm.com",
      "https://www.vijaibhavalawfirm.com",
    ],
    credentials: true,
  })
);

app.use(express.json());

// ES Module support
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Uploads folder
const uploadsDir = path.join(__dirname, "src", "uploads");

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

app.use("/uploads", express.static(uploadsDir));

// API Routes
app.use("/contact", contactRoutes);
app.use("/applications", jobRoutes);

console.log("Contact Router Loaded");

// React Build Folder
const distDir = path.join(__dirname, "dist");
app.use(express.static(distDir));

// Global Error Handler
app.use((err, req, res, next) => {
  const ErrorMessage = err.message || "Internal Server Error";
  const StatusCode = err.statusCode || 500;

  console.error("GLOBAL ERROR:", err);

  res.status(StatusCode).json({
    success: false,
    message: ErrorMessage,
  });
});

// React SPA fallback
app.use((req, res) => {
  res.sendFile(path.join(distDir, "index.html"));
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  try {
    await connectDB();

    console.log(`🚀 Server running on port ${PORT}`);
  } catch (error) {
    console.error("😬 Error starting server:", error);
  }
});