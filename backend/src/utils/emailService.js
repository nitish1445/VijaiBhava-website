import { sendEmail } from "../config/email.js";

export const contactEmail = async (contact) => {
  try {
    const subject = "Thank You for Contacting Vijai Bhava Law Firm";

    const message = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <style>
        body {
          margin: 0;
          padding: 0;
          background-color: #f4f6f9;
          font-family: Arial, sans-serif;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }

        table {
          border-spacing: 0;
          width: 100%;
        }

        img {
          border: 0;
          display: block;
        }

        .wrapper {
          width: 100%;
          table-layout: fixed;
          background-color: #f4f6f9;
          padding: 30px 0;
        }

        .main {
          background-color: #ffffff;
          margin: 0 auto;
          width: 100%;
          max-width: 680px;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0,0,0,0.08);
        }

        .header {
          background: #0f172a;
          padding: 40px 25px;
          text-align: center;
        }

        .header h1 {
          margin: 0;
          color: #ffffff;
          font-size: 34px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .header p {
          margin-top: 12px;
          color: #cbd5e1;
          font-size: 15px;
          line-height: 1.7;
        }

        .content {
          padding: 45px 38px;
        }

        .title {
          margin: 0 0 20px;
          font-size: 30px;
          color: #0f172a;
          line-height: 1.3;
        }

        .paragraph {
          font-size: 16px;
          line-height: 1.9;
          color: #475569;
          margin-bottom: 18px;
        }

        .highlight-box {
          background: #f8fafc;
          border-left: 4px solid #0f172a;
          padding: 22px;
          border-radius: 8px;
          margin: 35px 0;
        }

        .highlight-box p {
          margin: 0;
          color: #334155;
          font-size: 15px;
          line-height: 1.8;
        }

        .info-table {
          width: 100%;
          margin-top: 28px;
          border-collapse: collapse;
        }

        .info-table td {
          padding: 12px 0;
          border-bottom: 1px solid #e5e7eb;
          font-size: 15px;
        }

        .label {
          color: #64748b;
          width: 160px;
        }

        .value {
          color: #0f172a;
          font-weight: 600;
        }

        .footer {
          background: #f8fafc;
          padding: 24px;
          text-align: center;
          border-top: 1px solid #e5e7eb;
        }

        .footer p {
          margin: 0;
          color: #64748b;
          font-size: 13px;
          line-height: 1.8;
        }

        @media only screen and (max-width: 600px) {

          .content {
            padding: 30px 22px !important;
          }

          .header {
            padding: 35px 20px !important;
          }

          .header h1 {
            font-size: 26px !important;
          }

          .title {
            font-size: 24px !important;
          }

          .paragraph {
            font-size: 15px !important;
            line-height: 1.8 !important;
          }

          .info-table td {
            display: block;
            width: 100% !important;
            padding: 8px 0 !important;
            border-bottom: none !important;
          }

          .label {
            font-size: 13px !important;
            color: #94a3b8 !important;
            padding-bottom: 2px !important;
          }

          .value {
            font-size: 15px !important;
            padding-bottom: 12px !important;
            border-bottom: 1px solid #e5e7eb !important;
          }

          .highlight-box {
            padding: 18px !important;
          }
        }
      </style>
    </head>

    <body>

      <div class="wrapper">

        <table role="presentation">
          <tr>
            <td align="center">

              <table class="main" role="presentation">

                <!-- Header -->
                <tr>
                  <td class="header">

                    <h1>Vijai Bhava Law Firm</h1>

                    <p>
                      Professional Legal Services & Trusted Representation
                    </p>

                  </td>
                </tr>

                <!-- Content -->
                <tr>
                  <td class="content">

                    <h2 class="title">
                      Thank You, ${contact.name || "Client"}
                    </h2>

                    <p class="paragraph">
                      We sincerely appreciate you reaching out to
                      <strong>Vijai Bhava Law Firm</strong>.
                    </p>

                    <p class="paragraph">
                      Your inquiry has been successfully received by our legal team.
                      We are currently reviewing your message and one of our
                      representatives will get in touch with you shortly.
                    </p>

                    <div class="highlight-box">
                      <p>
                        We value your trust and are committed to providing
                        professional legal guidance with complete confidentiality
                        and dedication.
                      </p>
                    </div>

                    <p class="paragraph" style="margin-top:35px;">
                      If your matter is urgent, please feel free to contact us directly.
                    </p>

                    <div style="margin-top:30px;">

                      <p style="
                        margin:0;
                        color:#475569;
                        font-size:15px;
                        line-height:1.8;
                      ">
                        Warm Regards,
                      </p>

                      <h3 style="
                        margin:8px 0 0;
                        color:#0f172a;
                        font-size:22px;
                      ">
                        Vijai Bhava Law Firm
                      </h3>

                    </div>

                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td class="footer">

                    <p>
                      © ${new Date().getFullYear()} Vijai Bhava Law Firm.
                      All Rights Reserved.
                    </p>

                  </td>
                </tr>

              </table>

            </td>
          </tr>
        </table>

      </div>

    </body>
    </html>
    `;

    await sendEmail(contact.email, subject, message);

  } catch (error) {
    console.log("Error sending email", error);
  }
};

export const careerEmail = async (career) => {
  try {
    const subject = `Your Application for ${career.job} Has Been Received`;

    const message = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <style>
        body {
          margin: 0;
          padding: 0;
          background-color: #f4f6f9;
          font-family: Arial, sans-serif;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }

        table {
          border-spacing: 0;
          width: 100%;
        }

        .wrapper {
          width: 100%;
          table-layout: fixed;
          background-color: #f4f6f9;
          padding: 30px 0;
        }

        .main {
          background-color: #ffffff;
          margin: 0 auto;
          width: 100%;
          max-width: 680px;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0,0,0,0.08);
        }

        .header {
          background: #0f172a;
          padding: 40px 25px;
          text-align: center;
        }

        .header h1 {
          margin: 0;
          color: #ffffff;
          font-size: 34px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .header p {
          margin-top: 12px;
          color: #cbd5e1;
          font-size: 15px;
          line-height: 1.7;
        }

        .content {
          padding: 45px 38px;
        }

        .title {
          margin: 0 0 20px;
          font-size: 30px;
          color: #0f172a;
          line-height: 1.3;
        }

        .paragraph {
          font-size: 16px;
          line-height: 1.9;
          color: #475569;
          margin-bottom: 18px;
        }

        .highlight-box {
          background: #f8fafc;
          border-left: 4px solid #0f172a;
          padding: 22px;
          border-radius: 8px;
          margin: 35px 0;
        }

        .highlight-box p {
          margin: 0;
          color: #334155;
          font-size: 15px;
          line-height: 1.8;
        }

        .info-table {
          width: 100%;
          margin-top: 28px;
          border-collapse: collapse;
        }

        .info-table td {
          padding: 12px 0;
          border-bottom: 1px solid #e5e7eb;
          font-size: 15px;
        }

        .label {
          color: #64748b;
          width: 160px;
        }

        .value {
          color: #0f172a;
          font-weight: 600;
        }

        .button {
          display: inline-block;
          margin-top: 20px;
          background: #0f172a;
          color: #ffffff !important;
          text-decoration: none;
          padding: 14px 24px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
        }

        .footer {
          background: #f8fafc;
          padding: 24px;
          text-align: center;
          border-top: 1px solid #e5e7eb;
        }

        .footer p {
          margin: 0;
          color: #64748b;
          font-size: 13px;
          line-height: 1.8;
        }

        @media only screen and (max-width: 600px) {

          .content {
            padding: 30px 22px !important;
          }

          .header {
            padding: 35px 20px !important;
          }

          .header h1 {
            font-size: 26px !important;
          }

          .title {
            font-size: 24px !important;
          }

          .paragraph {
            font-size: 15px !important;
            line-height: 1.8 !important;
          }

          .info-table td {
            display: block;
            width: 100% !important;
            padding: 8px 0 !important;
            border-bottom: none !important;
          }

          .label {
            font-size: 13px !important;
            color: #94a3b8 !important;
            padding-bottom: 2px !important;
          }

          .value {
            font-size: 15px !important;
            padding-bottom: 12px !important;
            border-bottom: 1px solid #e5e7eb !important;
          }

          .highlight-box {
            padding: 18px !important;
          }

          .button {
            display: block !important;
            text-align: center !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }
        }
      </style>
    </head>

    <body>

      <div class="wrapper">

        <table role="presentation">
          <tr>
            <td align="center">

              <table class="main" role="presentation">

                <!-- Header -->
                <tr>
                  <td class="header">

                    <h1>Vijai Bhava Law Firm</h1>

                    <p>
                      Careers & Professional Opportunities
                    </p>

                  </td>
                </tr>

                <!-- Content -->
                <tr>
                  <td class="content">

                    <h2 class="title">
                      Thank You, ${career.name || "Applicant"}
                    </h2>

                    <p class="paragraph">
                      We appreciate your interest in becoming a part of
                      <strong>Vijai Bhava Law Firm</strong>.
                    </p>

                    <p class="paragraph">
                      Your application has been successfully received by our
                      recruitment team and is currently under review.
                    </p>

                    <p class="paragraph">
                      We carefully evaluate every application based on
                      qualifications, experience, and current opportunities
                      within our organization.
                    </p>

                    <div class="highlight-box">
                      <p>
                        We value professionals who are committed to integrity,
                        excellence, and the pursuit of justice.
                      </p>
                    </div>

                    <!-- Applicant Details -->
                    <table class="info-table">

                      <tr>
                        <td class="label">Applicant Name</td>
                        <td class="value">
                          ${career.name || "-"}
                        </td>
                      </tr>

                      <tr>
                        <td class="label">Email Address</td>
                        <td class="value">
                          ${career.email || "-"}
                        </td>
                      </tr>

                      <tr>
                        <td class="label">Phone Number</td>
                        <td class="value">
                          ${career.phone || "-"}
                        </td>
                      </tr>

                      <tr>
                        <td class="label">Practice Area</td>
                        <td class="value">
                          ${career.job || "-"}
                        </td>
                      </tr>

                      <tr>
                        <td class="label">Experience</td>
                        <td class="value">
                          ${`${career.experience} yrs` || "-"}
                        </td>
                      </tr>

                    </table>

                    ${
                      career.resume
                        ? `
                        <a 
                          href="${career.resume}" 
                          target="_blank"
                          class="button"
                        >
                          View Submitted Resume
                        </a>
                      `
                        : ""
                    }

                    <p class="paragraph" style="margin-top:35px;">
                      If your profile matches our current hiring requirements,
                      our HR team will contact you regarding the next steps.
                    </p>

                    <div style="margin-top:40px;">

                      <p style="
                        margin:0;
                        color:#475569;
                        font-size:15px;
                        line-height:1.8;
                      ">
                        Best Regards,
                      </p>

                      <h3 style="
                        margin:8px 0 0;
                        color:#0f172a;
                        font-size:22px;
                      ">
                        HR Team
                      </h3>

                      <p style="
                        margin-top:6px;
                        color:#64748b;
                        font-size:15px;
                      ">
                        Vijai Bhava Law Firm
                      </p>

                    </div>

                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td class="footer">

                    <p>
                      © ${new Date().getFullYear()} Vijai Bhava Law Firm.
                      All Rights Reserved.
                    </p>

                  </td>
                </tr>

              </table>

            </td>
          </tr>
        </table>

      </div>

    </body>
    </html>
    `;

    await sendEmail(career.email, subject, message);

  } catch (error) {
    console.log("Error sending career email", error);
  }
};

export const adminContactEmail = async (contact) => {
  const to = "nitishroy.dz@gmail.com";
  const subject = "A new Contact Form Recieved from Website";

  const message = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <style>

      body{
        margin:0;
        padding:0;
        background:#f4f6f9;
        font-family:Arial,sans-serif;
        -webkit-text-size-adjust:100%;
        -ms-text-size-adjust:100%;
      }

      table{
        border-spacing:0;
        width:100%;
      }

      .wrapper{
        width:100%;
        background:#f4f6f9;
        padding:30px 14px;
        box-sizing:border-box;
      }

      .container{
        width:100%;
        max-width:700px;
        margin:auto;
        background:#ffffff;
        border-radius:14px;
        overflow:hidden;
        box-shadow:0 6px 22px rgba(0,0,0,0.08);
      }

      .header{
        background:#0f172a;
        padding:34px 30px;
      }

      .header h1{
        margin:0;
        color:#ffffff;
        font-size:28px;
        line-height:1.4;
        font-weight:700;
      }

      .header p{
        margin-top:10px;
        color:#cbd5e1;
        font-size:15px;
        line-height:1.8;
      }

      .content{
        padding:36px 32px;
      }

      .section-title{
        margin:0 0 18px;
        color:#0f172a;
        font-size:20px;
        font-weight:700;
        border-bottom:1px solid #e5e7eb;
        padding-bottom:10px;
      }

      .details-table{
        width:100%;
        border-collapse:collapse;
      }

      .details-table td{
        padding:14px 0;
        border-bottom:1px solid #f1f5f9;
        vertical-align:top;
      }

      .label{
        width:180px;
        color:#64748b;
        font-size:15px;
      }

      .value{
        color:#0f172a;
        font-size:15px;
        font-weight:600;
        word-break:break-word;
      }

      .message-box{
        background:#f8fafc;
        border-left:4px solid #0f172a;
        padding:22px;
        border-radius:8px;
        color:#334155;
        line-height:1.9;
        font-size:15px;
        word-break:break-word;
      }

      .footer{
        background:#f8fafc;
        padding:22px 28px;
        border-top:1px solid #e5e7eb;
        color:#64748b;
        font-size:13px;
        line-height:1.8;
      }

      /* MOBILE RESPONSIVE */

      @media only screen and (max-width:600px){

        .wrapper{
          padding:10px !important;
        }

        .container{
          border-radius:12px !important;
        }

        .header{
          padding:28px 22px !important;
        }

        .header h1{
          font-size:22px !important;
          line-height:1.4 !important;
        }

        .header p{
          font-size:14px !important;
          line-height:1.7 !important;
        }

        .content{
          padding:24px 18px !important;
        }

        .section-title{
          font-size:18px !important;
          padding-bottom:8px !important;
        }

        .details-table,
        .details-table tbody,
        .details-table tr,
        .details-table td{
          display:block !important;
          width:100% !important;
        }

        .details-table tr{
          padding:12px 0;
          border-bottom:1px solid #e5e7eb;
        }

        .details-table td{
          border:none !important;
          padding:4px 0 !important;
        }

        .label{
          width:100% !important;
          font-size:13px !important;
          color:#94a3b8 !important;
          margin-bottom:4px;
        }

        .value{
          width:100% !important;
          font-size:15px !important;
          line-height:1.7 !important;
        }

        .message-box{
          padding:18px !important;
          font-size:14px !important;
          line-height:1.8 !important;
          border-radius:10px !important;
        }

        .footer{
          padding:18px !important;
          font-size:12px !important;
          text-align:center !important;
        }
      }

    </style>
  </head>

  <body>

    <div class="wrapper">

      <div class="container">

        <!-- HEADER -->
        <div class="header">

          <h1>
            New Contact Submission
          </h1>

          <p>
            A new inquiry has been submitted through the website.
          </p>

        </div>

        <!-- CONTENT -->
        <div class="content">

          <!-- CONTACT DETAILS -->
          <h2 class="section-title">
            Contact Details
          </h2>

          <table class="details-table">

            <tr>
              <td class="label">Full Name</td>

              <td class="value">
                ${contact.name || "-"}
              </td>
            </tr>

            <tr>
              <td class="label">Email Address</td>

              <td class="value">
                ${contact.email || "-"}
              </td>
            </tr>

            <tr>
              <td class="label">Phone Number</td>

              <td class="value">
                ${contact.phone || "-"}
              </td>
            </tr>

            <tr>
              <td class="label">Company</td>

              <td class="value">
                ${contact.company || "-"}
              </td>
            </tr>

            <tr>
              <td class="label">Practice Area</td>

              <td class="value">
                ${contact.practiceArea || "-"}
              </td>
            </tr>

          </table>

          <!-- CLIENT MESSAGE -->
          <div style="margin-top:36px;">

            <h2 class="section-title">
              Client Message
            </h2>

            <div class="message-box">
              ${contact.message || "No message provided"}
            </div>

          </div>

        </div>

        <!-- FOOTER -->
        <div class="footer">

          This email was automatically generated from the website contact form.

        </div>

      </div>

    </div>

  </body>
  </html>
  `;

 await sendEmail(to, subject, message);
};

export const adminCareerEmail = async (career) => {
  const to = "nitishroy.dz@gmail.com";

  const subject = `A New Career Application Received for ${career.job}`;

  const message = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <style>

      body{
        margin:0;
        padding:0;
        background:#f4f6f9;
        font-family:Arial,sans-serif;
        -webkit-text-size-adjust:100%;
        -ms-text-size-adjust:100%;
      }

      table{
        border-spacing:0;
        width:100%;
      }

      .wrapper{
        width:100%;
        background:#f4f6f9;
        padding:30px 14px;
        box-sizing:border-box;
      }

      .container{
        width:100%;
        max-width:700px;
        margin:auto;
        background:#ffffff;
        border-radius:12px;
        overflow:hidden;
        box-shadow:0 4px 18px rgba(0,0,0,0.08);
      }

      .header{
        background:#0f172a;
        padding:32px 28px;
      }

      .header h1{
        margin:0;
        color:#ffffff;
        font-size:28px;
        line-height:1.4;
      }

      .header p{
        margin-top:10px;
        color:#cbd5e1;
        font-size:15px;
        line-height:1.7;
      }

      .content{
        padding:36px 32px;
      }

      .section-title{
        margin:0 0 18px;
        font-size:20px;
        color:#0f172a;
        border-bottom:1px solid #e5e7eb;
        padding-bottom:10px;
      }

      .details-table{
        width:100%;
        border-collapse:collapse;
      }

      .details-table td{
        padding:14px 0;
        border-bottom:1px solid #f1f5f9;
        vertical-align:top;
      }

      .label{
        width:180px;
        color:#64748b;
        font-size:15px;
      }

      .value{
        color:#0f172a;
        font-size:15px;
        font-weight:600;
        word-break:break-word;
      }

      .cover-letter{
        background:#f8fafc;
        border-left:4px solid #0f172a;
        padding:20px;
        border-radius:8px;
        color:#334155;
        line-height:1.8;
        font-size:15px;
        word-break:break-word;
      }

      .resume-btn{
        display:inline-block;
        background:#0f172a;
        color:#ffffff !important;
        text-decoration:none;
        padding:14px 24px;
        border-radius:8px;
        font-size:14px;
        font-weight:600;
        margin-top:8px;
      }

      .footer{
        background:#f8fafc;
        padding:22px 28px;
        border-top:1px solid #e5e7eb;
        color:#64748b;
        font-size:13px;
        line-height:1.8;
      }

      /* MOBILE RESPONSIVE */

      @media only screen and (max-width:600px){

        .wrapper{
          padding:12px !important;
        }

        .header{
          padding:26px 20px !important;
        }

        .header h1{
          font-size:22px !important;
          line-height:1.4 !important;
        }

        .header p{
          font-size:14px !important;
        }

        .content{
          padding:24px 18px !important;
        }

        .section-title{
          font-size:18px !important;
        }

        .details-table,
        .details-table tbody,
        .details-table tr,
        .details-table td{
          display:block !important;
          width:100% !important;
        }

        .details-table tr{
          padding:10px 0;
          border-bottom:1px solid #e5e7eb;
        }

        .details-table td{
          border:none !important;
          padding:4px 0 !important;
        }

        .label{
          width:100% !important;
          font-size:13px !important;
          color:#94a3b8 !important;
          margin-bottom:4px;
        }

        .value{
          width:100% !important;
          font-size:15px !important;
          line-height:1.7 !important;
        }

        .cover-letter{
          padding:16px !important;
          font-size:14px !important;
          line-height:1.8 !important;
        }

        .resume-btn{
          display:block !important;
          width:100% !important;
          text-align:center !important;
          box-sizing:border-box !important;
          padding:14px 18px !important;
        }

        .footer{
          padding:18px !important;
          font-size:12px !important;
        }
      }

    </style>
  </head>

  <body>

    <div class="wrapper">

      <div class="container">

        <!-- HEADER -->
        <div class="header">

          <h1>
            New Career Application
          </h1>

          <p>
            A new career application has been submitted through the website.
          </p>

        </div>

        <!-- CONTENT -->
        <div class="content">

          <!-- Applicant Details -->
          <h2 class="section-title">
            Applicant Details
          </h2>

          <table class="details-table">

            <tr>
              <td class="label">Full Name</td>

              <td class="value">
                ${career.name || "-"}
              </td>
            </tr>

            <tr>
              <td class="label">Email Address</td>

              <td class="value">
                ${career.email || "-"}
              </td>
            </tr>

            <tr>
              <td class="label">Phone Number</td>

              <td class="value">
                ${career.phone || "-"}
              </td>
            </tr>

            <tr>
              <td class="label">Practice Area</td>

              <td class="value">
                ${career.job || "-"}
              </td>
            </tr>

            <tr>
              <td class="label">Experience</td>

              <td class="value">
                ${career.experience ? `${career.experience} Years` : "-"}
              </td>
            </tr>

          </table>

          <!-- Cover Letter -->
          <div style="margin-top:36px;">

            <h2 class="section-title">
              Cover Letter
            </h2>

            <div class="cover-letter">
              ${career.coverLetter || "No cover letter provided"}
            </div>

          </div>

          <!-- Resume -->
          <div style="margin-top:36px;">

            <h2 class="section-title">
              Resume
            </h2>

            <a
              href="${career.resume}"
              target="_blank"
              class="resume-btn"
            >
              View Resume
            </a>

          </div>

        </div>

        <!-- FOOTER -->
        <div class="footer">

          This email was automatically generated from the website career
          application form.

        </div>

      </div>

    </div>

  </body>
  </html>
  `;

  await sendEmail(to, subject, message);
};