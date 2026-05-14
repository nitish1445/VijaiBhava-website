import express from "express";
import upload from "../config/multer.js";
import { submitApplication } from "../controllers/jobController.js";

const router = express.Router();

router.post("/submit", upload.single("resume"), submitApplication);

export default router;
