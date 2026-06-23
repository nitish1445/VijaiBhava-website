import JobApplication from "../models/jobModel.js";
import { adminCareerEmail, careerEmail } from "../utils/emailService.js";

console.log("Job application controller is running on top");
// Controller: handle job application submission
export const submitApplication = async (req, res, next) => {
  try {
    const file = req.file;

    const { firstName, lastName, email, phone, experience, coverLetter, title } =
      req.body;

    if (!firstName || !lastName || !email || !phone || !experience || !title) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    if (!file) {
      return res.status(400).json({ message: "Resume upload is required" });
    }

    // Combine names before saving to DB
    const name = `${firstName.trim()} ${lastName.trim()}`;

    const newApplication = new JobApplication({
      name,
      email: email.trim(),
      phone: phone.trim(),
      job: title.trim(),
      experience: experience.trim(),
      coverLetter: (coverLetter || "").trim(),
      resume:
        `http://localhost:4500/uploads/${file.filename}` ||
        `https://vijaibhavalawfirm.com/uploads/${file.filename}`,
    });

    const saved = await newApplication.save();

    adminCareerEmail(newApplication);
    careerEmail(newApplication);

    res.status(201).json(newApplication);
  } catch (error) {
    next(error);
  }
};

console.log("Job application controller is running");
