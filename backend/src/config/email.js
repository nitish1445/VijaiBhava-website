// import nodemailer from "nodemailer";

// import dotenv from "dotenv";
// dotenv.config();

// export const sendEmail = async (to, subject, message) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.GMAIL_ID,
//         pass: process.env.GMAIL_PASSKEY,
//       },
//     });

//     const mailOption = {
//       from: process.env.GMAIL_ID,
//       to,
//       subject,
//       html: message,
//     };

//     const res = await transporter.sendMail(mailOption);
//   } catch (error) {
//     console.log(error);
//   }
// };

import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const sendEmail = async (to, subject, message) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_ID,
        pass: process.env.GMAIL_PASSKEY,
      },
    });

    await transporter.verify();
    console.log("SMTP Connected");

    const info = await transporter.sendMail({
      from: process.env.GMAIL_ID,
      to,
      subject,
      html: message,
    });

    console.log("Email sent:", info.messageId);

    return info;
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    throw error;
  }
};