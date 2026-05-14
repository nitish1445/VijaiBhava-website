import JobApplication from "../models/jobModel.js";

// Controller: handle job application submission
export const submitApplication = async (req, res, next) => {
  try {
    const file = req.file;

    const { firstName, lastName, email, phone, experience, coverLetter } = req.body;

    if (!firstName || !lastName || !email || !phone || !experience) {
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
      experience: experience.trim(),
      coverLetter: (coverLetter || "").trim(),
      resume: file.filename,
    });

    const saved = await newApplication.save();

    res.status(201).json({
      id: saved._id,
      name: saved.name,
      email: saved.email,
      phone: saved.phone,
      experience: saved.experience,
      coverLetter: saved.coverLetter,
      resumeUrl: `/uploads/${saved.resume}`,
      createdAt: saved.createdAt,
    });

  } catch (error) {
    next(error);
  }
};
