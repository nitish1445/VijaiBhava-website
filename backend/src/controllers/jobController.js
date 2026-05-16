import JobApplication from "../models/jobModel.js";

// Controller: handle job application submission
export const submitApplication = async (req, res, next) => {
  try {
    const file = req.file;

    const { firstName, lastName, email, phone, experience, coverLetter } =
      req.body;

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
      resume:
        `http://localhost:4500/uploads/${file.filename}` ||
        `https://vijaibhavalawfirm.com/uploads/${file.filename}`,
    });

    console.log("Saving application:", newApplication);

    const saved = await newApplication.save();

    res.status(201).json(newApplication);
  } catch (error) {
    next(error);
  }
};
