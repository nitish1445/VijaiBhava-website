import { sendEmail } from "../config/email.js";

export const contactEmail = async (to) => {
  try {
    const subject = "Thank You for Contacting Vijai Bhava Law Firm";

    const message = `
    <div style="margin:0; padding:0; background:#faf8f3; font-family:Arial, sans-serif;">
      
      <div style="max-width:650px; margin:auto; background:#ffffff; overflow:hidden; border-radius:12px;">

        <!-- Header -->
        <div style="background:#0a1628; padding:35px 20px; text-align:center;">
          <h1 style="
            color:#c9a84c;
            margin:0;
            font-size:32px;
            font-weight:700;
            letter-spacing:1px;
          ">
            Vijai Bhava Law Firm
          </h1>

          <p style="
            color:#f5e6c0;
            margin-top:10px;
            font-size:15px;
            line-height:1.6;
          ">
            Trusted Legal Excellence & Professional Representation
          </p>
        </div>

        <!-- Body -->
        <div style="padding:40px 28px; color:#122040;">

          <h2 style="
            margin-top:0;
            color:#0a1628;
            font-size:28px;
          ">
            Thank You for Reaching Out
          </h2>

          <p style="
            font-size:16px;
            line-height:1.9;
            color:#122040;
          ">
            We appreciate you contacting 
            <strong style="color:#c9a84c;">
              Vijai Bhava Law Firm
            </strong>.
          </p>

          <p style="
            font-size:16px;
            line-height:1.9;
            color:#122040;
          ">
            Our legal team has successfully received your inquiry and will review your message carefully.
          </p>

          <p style="
            font-size:16px;
            line-height:1.9;
            color:#122040;
          ">
            We will get back to you as soon as possible regarding your concern.
          </p>

          <!-- Quote Box -->
          <div style="
            margin:35px 0;
            background:#f5e6c0;
            border-left:5px solid #c9a84c;
            padding:22px;
            border-radius:8px;
          ">
            <p style="
              margin:0;
              color:#0a1628;
              font-size:15px;
              line-height:1.8;
              font-style:italic;
            ">
              “Committed to Justice, Dedicated to Excellence.”
            </p>
          </div>

          <p style="
            font-size:16px;
            line-height:1.9;
            color:#122040;
          ">
            If your matter is urgent, please feel free to contact us directly.
          </p>

          <!-- Footer Signature -->
          <div style="margin-top:45px;">
            <p style="
              margin:0;
              color:#122040;
              font-size:16px;
            ">
              Warm Regards,
            </p>

            <h3 style="
              margin:10px 0 0;
              color:#0a1628;
              font-size:22px;
            ">
              Vijai Bhava Law Firm
            </h3>
          </div>
        </div>

        <!-- Bottom -->
        <div style="
          background:#122040;
          text-align:center;
          padding:20px;
        ">
          <p style="
            margin:0;
            color:#f5e6c0;
            font-size:13px;
            line-height:1.7;
          ">
            © ${new Date().getFullYear()} Vijai Bhava Law Firm. All Rights Reserved.
          </p>
        </div>

      </div>

      <!-- Mobile Responsive -->
      <style>
        @media only screen and (max-width:600px) {
          h1 {
            font-size:24px !important;
          }

          h2 {
            font-size:22px !important;
          }

          h3 {
            font-size:18px !important;
          }

          p {
            font-size:14px !important;
            line-height:1.7 !important;
          }

          div[style*="padding:40px 28px"] {
            padding:28px 18px !important;
          }
        }
      </style>

    </div>
    `;

    await sendEmail(to, subject, message);
  } catch (error) {
    console.log("Error sending email", error);
  }
};

export const careerEmail = async (to) => {
  try {
    const subject = "Application Received | Vijai Bhava Law Firm";

    const message = `
    <div style="margin:0; padding:0; background:#faf8f3; font-family:Arial, sans-serif;">
      
      <div style="max-width:650px; margin:auto; background:#ffffff; overflow:hidden; border-radius:12px;">

        <!-- Header -->
        <div style="background:#0a1628; padding:35px 20px; text-align:center;">
          <h1 style="
            color:#c9a84c;
            margin:0;
            font-size:32px;
            font-weight:700;
            letter-spacing:1px;
          ">
            Vijai Bhava Law Firm
          </h1>

          <p style="
            color:#f5e6c0;
            margin-top:10px;
            font-size:15px;
            line-height:1.6;
          ">
            Careers & Professional Opportunities
          </p>
        </div>

        <!-- Body -->
        <div style="padding:40px 28px; color:#122040;">

          <h2 style="
            margin-top:0;
            color:#0a1628;
            font-size:28px;
          ">
            Thank You for Applying
          </h2>

          <p style="
            font-size:16px;
            line-height:1.9;
            color:#122040;
          ">
            Thank you for your interest in joining 
            <strong style="color:#c9a84c;">
              Vijai Bhava Law Firm
            </strong>.
          </p>

          <p style="
            font-size:16px;
            line-height:1.9;
            color:#122040;
          ">
            Your application has been received successfully by our recruitment team.
          </p>

          <p style="
            font-size:16px;
            line-height:1.9;
            color:#122040;
          ">
            We will carefully review your profile, qualifications, and experience.
          </p>

          <p style="
            font-size:16px;
            line-height:1.9;
            color:#122040;
          ">
            If your profile matches our current opportunities, our HR team will contact you regarding the next steps.
          </p>

          <!-- Quote -->
          <div style="
            margin:35px 0;
            background:#f5e6c0;
            border-left:5px solid #c9a84c;
            padding:22px;
            border-radius:8px;
          ">
            <p style="
              margin:0;
              color:#0a1628;
              font-size:15px;
              line-height:1.8;
              font-style:italic;
            ">
              “Building a team committed to integrity, justice, and excellence.”
            </p>
          </div>

          <p style="
            font-size:16px;
            line-height:1.9;
            color:#122040;
          ">
            We appreciate your time and interest in becoming a part of our legal team.
          </p>

          <!-- Signature -->
          <div style="margin-top:45px;">
            <p style="
              margin:0;
              color:#122040;
              font-size:16px;
            ">
              Best Regards,
            </p>

            <h3 style="
              margin:10px 0 0;
              color:#0a1628;
              font-size:22px;
            ">
              HR Team
            </h3>

            <p style="
              margin-top:6px;
              color:#8a9bb5;
              font-size:15px;
            ">
              Vijai Bhava Law Firm
            </p>
          </div>
        </div>

        <!-- Footer -->
        <div style="
          background:#122040;
          text-align:center;
          padding:20px;
        ">
          <p style="
            margin:0;
            color:#f5e6c0;
            font-size:13px;
            line-height:1.7;
          ">
            © ${new Date().getFullYear()} Vijai Bhava Law Firm. All Rights Reserved.
          </p>
        </div>

      </div>

      <!-- Responsive -->
      <style>
        @media only screen and (max-width:600px) {
          h1 {
            font-size:24px !important;
          }

          h2 {
            font-size:22px !important;
          }

          h3 {
            font-size:18px !important;
          }

          p {
            font-size:14px !important;
            line-height:1.7 !important;
          }

          div[style*="padding:40px 28px"] {
            padding:28px 18px !important;
          }
        }
      </style>

    </div>
    `;

    await sendEmail(to, subject, message);
  } catch (error) {
    console.log("Error sending career email", error);
  }
};

export const adminContactEmail = async (contact) => {
  const to = "nitishroy.dz@gmail.com";
  const subject = "Received New Contact Form";
  const message = `
    <h2>New Contact Form Submission</h2>

    <table border="1" cellpadding="10" cellspacing="0" 
      style="border-collapse: collapse; width: 100%; font-family: Arial;">

      <tr style="background-color: #f2f2f2;">
        <th align="left">Field</th>
        <th align="left">Value</th>
      </tr>

      <tr>
        <td><strong>Name</strong></td>
        <td>${contact.name}</td>
      </tr>

      <tr>
        <td><strong>Email</strong></td>
        <td>${contact.email}</td>
      </tr>

      <tr>
        <td><strong>Phone</strong></td>
        <td>${contact.phone}</td>
      </tr>

      <tr>
        <td><strong>Company</strong></td>
        <td>${contact.company}</td>
      </tr>

      <tr>
        <td><strong>Practice Area</strong></td>
        <td>${contact.practiceArea}</td>
      </tr>

      <tr>
        <td><strong>Message</strong></td>
        <td>${contact.message}</td>
      </tr>

      <tr>
        <td><strong>Agreement Accepted</strong></td>
        <td>${contact.agree ? "Yes" : "No"}</td>
      </tr>

    </table>
  `;

  sendEmail(to, subject, message);
};

export const adminCareerEmail = async (career) => {
  const to = "nitishroy.dz@gmail.com";
  const subject = "Received New Career Application";
  const message = `
    <h2>New Career Application</h2>

    <table border="1" cellpadding="10" cellspacing="0"
      style="border-collapse: collapse; width: 100%; font-family: Arial;">

      <tr style="background:#f2f2f2;">
        <th align="left">Field</th>
        <th align="left">Value</th>
      </tr>

      <tr>
        <td><strong>Name</strong></td>
        <td>${career.name}</td>
      </tr>

      <tr>
        <td><strong>Email</strong></td>
        <td>${career.email}</td>
      </tr>

      <tr>
        <td><strong>Phone</strong></td>
        <td>${career.phone}</td>
      </tr>

      <tr>
        <td><strong>Job Position</strong></td>
        <td>${career.job}</td>
      </tr>

      <tr>
        <td><strong>Experience</strong></td>
        <td>${career.experience}</td>
      </tr>

      <tr>
        <td><strong>Cover Letter</strong></td>
        <td>${career.coverLetter}</td>
      </tr>

      <tr>
        <td><strong>Resume URL</strong></td>
        <td>
          <a href="${career.resume}" target="_blank">
            View Resume
          </a>
        </td>
      </tr>

    </table>
  `;

  sendEmail(to, subject, message);
};
