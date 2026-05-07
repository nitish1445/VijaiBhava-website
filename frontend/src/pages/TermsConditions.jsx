import LegalPage from "../components/LegalPage";

const sections = [
  {
    id: "acceptance",
    kicker: "1. Agreement",
    title: "Acceptance of Terms",
    paragraphs: [
      "By accessing or using this website, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any part of these terms, you should discontinue use of the site.",
      "We may update these terms from time to time. The revised version becomes effective once posted on the website, and continued use of the website after that point constitutes acceptance of the updated terms.",
    ],
  },
  {
    id: "responsibilities",
    kicker: "2. Conduct",
    title: "User Responsibilities",
    paragraphs: [
      "You agree to use the website only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit any other user from enjoying the site.",
      "You must not attempt to interfere with the security, availability, or functionality of the website, including by introducing malicious code, attempting unauthorized access, or using automated tools in a way that disrupts normal use.",
    ],
    bullets: [
      "Provide accurate and complete information when submitting requests.",
      "Do not upload unlawful, defamatory, or infringing content.",
      "Do not misuse consultation forms or contact channels.",
      "Follow all applicable local, national, and international laws.",
    ],
  },
  {
    id: "ip",
    kicker: "3. Ownership",
    title: "Intellectual Property",
    paragraphs: [
      "All website content, including text, graphics, logos, page layouts, images, designs, and other materials, is owned by or licensed to Vijai Bhava Law Firm unless stated otherwise.",
      "You may view, download, and print content for personal, non-commercial reference only, provided that you do not modify the material or remove any copyright, trademark, or proprietary notices.",
    ],
  },
  {
    id: "liability",
    kicker: "4. Risk Allocation",
    title: "Limitation of Liability",
    paragraphs: [
      "The website and its content are provided on an 'as is' and 'as available' basis. To the fullest extent permitted by law, Vijai Bhava Law Firm disclaims liability for any direct, indirect, incidental, consequential, or special damages arising from your use of the website or reliance on its content.",
      "We do not guarantee that the website will always be uninterrupted, error-free, or free from harmful components. Your use of the website is at your own risk.",
    ],
    note:
      "Nothing in these terms excludes liability that cannot be excluded under applicable law, including liability for fraud or any other liability that may not lawfully be limited.",
  },
  {
    id: "payments",
    kicker: "5. Fees",
    title: "Payment and Refund Terms",
    paragraphs: [
      "Any legal fees, retainers, or invoice terms for professional services are governed by the separate engagement agreement, fee letter, or invoice issued for the specific matter. Website content alone does not create a fee arrangement.",
      "If a consultation fee or other prepayment is required for a particular service, the applicable refund policy will be set out at the time of booking. Unless otherwise stated in writing, completed consultations and services already delivered are non-refundable.",
    ],
  },
  {
    id: "governing-law",
    kicker: "6. Legal Framework",
    title: "Governing Law",
    paragraphs: [
      "These Terms and Conditions are governed by and construed in accordance with the laws in force in India, without regard to conflict of law principles.",
      "Any dispute arising from the website or these terms shall be subject to the exclusive jurisdiction of the competent courts in Delhi, unless otherwise required by mandatory law or a signed engagement agreement.",
    ],
  },
  {
    id: "termination",
    kicker: "7. Access Control",
    title: "Termination Clause",
    paragraphs: [
      "We reserve the right to suspend, restrict, or terminate access to the website at any time, with or without notice, if we believe these terms have been violated or if necessary to protect the integrity of the website or our users.",
      "Upon termination, provisions relating to intellectual property, limitation of liability, governing law, and any other clauses that by their nature should survive termination shall remain in effect.",
    ],
  },
];

export default function TermsConditions() {
  return (
    <LegalPage
      pageLabel="Terms & Conditions"
      title="Terms & Conditions"
      subtitle="These Terms and Conditions govern your use of the Vijai Bhava Law Firm website and outline the responsibilities, rights, and limitations that apply to visitors and users."
      lastUpdated="7 May 2026"
      metaDescription="Terms and Conditions for Vijai Bhava Law Firm covering acceptance of terms, user responsibilities, intellectual property, liability, payments, governing law, and termination."
      intro="These terms are intended to set clear expectations for website use and to preserve the professional standards of the firm."
      sections={sections}
    />
  );
}