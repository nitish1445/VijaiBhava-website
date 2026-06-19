import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

import { connectDB, isDBConnected } from "./src/config/db.js";
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

// Middleware: return 503 for API calls if DB not connected
app.use((req, res, next) => {
  const isApiCall = req.path.startsWith("/api") || req.path.startsWith("/contact") || req.path.startsWith("/applications");
  if (isApiCall && !isDBConnected()) {
    return res.status(503).json({ message: "Service temporarily unavailable - database not connected" });
  }
  next();
});

// API Routes
app.get(["/", "/api"], (req, res) => {
  res.json({ message: "Vijai Bhava Law Firm API is running" });
});

app.use("/api/contact", contactRoutes);
app.use("/api/applications", jobRoutes);

app.use("/contact", contactRoutes);
app.use("/applications", jobRoutes);

// React Build Folder
const distDir = path.join(__dirname, "dist");

app.use(express.static(distDir));

// React Routes - SPA fallback (Express 5 compatible)
app.use((req, res) => {
  res.sendFile(path.join(distDir, "index.html"));
});

// Global Error Handler
app.use((err, req, res, next) => {
  const ErrorMessage = err.message || "Internal Server Error";
  const StatusCode = err.statusCode || 500;

  const logEntry = `${new Date().toISOString()} - Error: ${ErrorMessage} - Status: ${StatusCode} - Path: ${req.method} ${req.originalUrl}\n${err.stack || ''}\n`;
  console.error(logEntry);
  try {
    fs.appendFileSync(path.join(__dirname, 'logs', 'error.log'), logEntry + '\n');
  } catch (e) {
    // ignore file write errors
  }

  res.status(StatusCode).json({ message: ErrorMessage });
});

// Global process handlers
process.on('unhandledRejection', (reason) => {
  const msg = `${new Date().toISOString()} - UnhandledRejection: ${reason && reason.stack ? reason.stack : reason}`;
  console.error(msg);
  try { fs.appendFileSync(path.join(__dirname, 'logs', 'error.log'), msg + '\n'); } catch (e) {}
});

process.on('uncaughtException', (err) => {
  const msg = `${new Date().toISOString()} - UncaughtException: ${err && err.stack ? err.stack : err}`;
  console.error(msg);
  try { fs.appendFileSync(path.join(__dirname, 'logs', 'error.log'), msg + '\n'); } catch (e) {}
  // optionally exit to allow process manager to restart
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