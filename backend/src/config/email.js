import nodemailer from "nodemailer";

import dotenv from "dotenv";
dotenv.config();

export const sendEmail = async (to, subject, message) => {
  try {
    console.log("Started sending Email");
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_ID,
        pass: process.env.GMAIL_PASSKEY,
      },
    });

    const mailOption = {
      from: process.env.GMAIL_ID,
      to,
      subject,
      html: message,
    };

    const res = await transporter.sendMail(mailOption);
    console.log(`Email recived at ${to} and the respone is `, res);
  } catch (error) {
    console.log(error);
  }
};
