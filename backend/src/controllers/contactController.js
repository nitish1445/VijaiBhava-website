// import { sendEmail } from "../config/email.js";
// import Contact from "../models/contactModel.js";
// import { adminContactEmail, contactEmail } from "../utils/emailService.js";

// console.log("Contact is running on /contact controller");
// export const createContact = async (req, res, next) => {
//   try {
//     const {
//       firstName,
//       lastName,
//       email,
//       phone,
//       company,
//       practiceArea,
//       praticeArea,
//       message,
//       agree,
//     } = req.body;

//     const selectedPracticeArea = practiceArea ?? praticeArea;

//     if (
//       !firstName ||
//       !lastName ||
//       !email ||
//       !phone ||
//       !selectedPracticeArea ||
//       !message ||
//       agree === undefined
//     ) {
//       return res.status(400).json({
//         message: "All required fields must be filled",
//       });
//     }

//     const newContact = new Contact({
//       name: `${firstName} ${lastName}`,
//       email,
//       phone,
//       company,
//       practiceArea: selectedPracticeArea.trim(),
//       message,
//       agree,
//     });

//     const savedContact = await newContact.save();

//     adminContactEmail(newContact);
//     contactEmail(newContact);

//     res.status(201).json(savedContact);
//   } catch (error) {
//     next(error);
//   }
// };

// console.log("form submission controller is running");

import Contact from "../models/contactModel.js";
import {
  adminContactEmail,
  contactEmail,
} from "../utils/emailService.js";

export const createContact = async (req, res) => {
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
        success: false,
        message: "All required fields are required",
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

    console.log("✅ Contact saved:", savedContact._id);
    // send emails
    await adminContactEmail(savedContact);
    console.log("✅ Admin email sent");
    await contactEmail(savedContact);

    console.log("✅ User email sent");
    return res.status(201).json({
      success: true,
      message: "Form submitted successfully",
      data: savedContact,
    });
  } catch (error) {
    console.error("CONTACT ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};