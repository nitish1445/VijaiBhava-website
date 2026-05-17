import mongoose from "mongoose";

// Job application schema
const jobApplicationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    job: { type: String, required: true },
    experience: { type: String, required: true },
    coverLetter: { type: String },

    // store resume filename (accessible via /uploads/<filename>)
    resume: { type: String, required: true },
  },
  { timestamps: true },
);

const JobApplication = mongoose.model("JobApplication", jobApplicationSchema);
export default JobApplication;
