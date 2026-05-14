import Contact from "../models/contactModel.js";

export const createContact = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      practiceArea,
      praticeArea,
      message,
      agree,
    } = req.body;

    const selectedPracticeArea = practiceArea ?? praticeArea;

    console.log("Received contact data:", {
      firstName,
      lastName,
      email,
      phone,
      company,
      practiceArea: selectedPracticeArea,
      message,
      agree,
    }); 

    

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !selectedPracticeArea ||
      !message ||
      agree === undefined
    ) {
      return res.status(400).json({
        message: "All required fields must be filled",
      });
    }

    const newContact = new Contact({
      name: `${firstName} ${lastName}`,
      email,
      phone,
      company,
      practiceArea: selectedPracticeArea.trim(),
      message,
      agree,
    });

    const savedContact = await newContact.save();

    res.status(201).json(savedContact);
  } catch (error) {
    next(error);
  }
};