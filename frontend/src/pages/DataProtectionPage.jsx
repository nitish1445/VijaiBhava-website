import LegalPage from "../components/LegalPage";

const sections = [
  {
    id: "information-collection",
    kicker: "1. Data We Collect",
    title: "Information Collection",
    intro:
      "We collect information only to the extent reasonably necessary to respond to inquiries, deliver legal services, and improve the experience of visiting our website.",
    paragraphs: [
      "The information we may collect includes details you submit through contact forms, consultation requests, email correspondence, and any documents you voluntarily provide in connection with an inquiry or engagement.",
      "We may also collect limited technical information automatically when you visit the site, such as browser type, device identifiers, referring pages, and general usage patterns. This information helps us keep the website functioning properly and understand how visitors interact with our content.",
    ],
    note:
      "Please do not submit confidential, privileged, or highly sensitive information through the website unless and until our firm confirms a formal engagement and advises you to do so.",
  },
  {
    id: "use-of-information",
    kicker: "2. Purpose",
    title: "How We Use Information",
    paragraphs: [
      "We use personal information to respond to questions, evaluate potential matters, communicate with clients and prospective clients, administer our business operations, and fulfill legal or regulatory obligations.",
      "We may also use aggregated or de-identified information to monitor website performance, identify technical issues, and improve the clarity of our content and services.",
    ],
    bullets: [
      "Responding to contact requests and consultation submissions.",
      "Managing client relationships and internal matter administration.",
      "Operating, maintaining, and improving the website and related systems.",
      "Protecting the security, integrity, and legal compliance of our practice.",
    ],
  },
  {
    id: "cookies",
    kicker: "3. Website Technology",
    title: "Cookies Policy",
    paragraphs: [
      "Our website may use cookies, pixels, or similar technologies to remember preferences, improve page performance, and measure visitor activity. These tools help us provide a more efficient experience and understand which content is most useful.",
      "You may adjust your browser settings to limit or block cookies. Some features of the website may not function as intended if cookies are disabled.",
    ],
    note:
      "By continuing to use the website, you consent to the use of cookies and similar technologies to the extent permitted by your browser settings and applicable law.",
  },
  {
    id: "data-protection",
    kicker: "4. Security",
    title: "Data Protection",
    paragraphs: [
      "We maintain administrative, technical, and physical safeguards designed to protect personal information from unauthorized access, misuse, alteration, or disclosure.",
      "While we take reasonable precautions, no method of transmission over the internet or method of electronic storage is completely secure. We cannot guarantee absolute security, and users should exercise judgment before sending sensitive material online.",
    ],
  },
  {
    id: "third-party-services",
    kicker: "5. Service Providers",
    title: "Third-Party Services",
    paragraphs: [
      "We may use trusted third-party vendors for website hosting, analytics, communications, and maintenance. These providers may process limited information on our behalf and are expected to protect data in line with their contractual obligations.",
      "If you access external websites linked from our site, those sites operate under their own privacy and security practices. We are not responsible for the content, policies, or practices of third-party services.",
    ],
  },
  {
    id: "user-rights",
    kicker: "6. Your Choices",
    title: "User Rights",
    paragraphs: [
      "Subject to applicable law, you may request access to, correction of, or deletion of personal information that we hold about you. You may also object to certain forms of processing or request additional information about how your data is used.",
      "To exercise a privacy request, contact us using the details below. We may need to verify your identity before completing a request, and some records may be retained where required by law, professional obligations, or legitimate business purposes.",
    ],
  },
];

export default function DataProtectionPage() {
  return (
    <LegalPage
      pageLabel="Privacy Policy"
      title="Privacy Policy"
      subtitle="This Privacy Policy explains how Vijai Bhava Law Firm collects, uses, protects, and shares information when you visit our website or contact our team."
      lastUpdated="7 May 2026"
      metaDescription="Read the Privacy Policy for Vijai Bhava Law Firm, including data collection, cookies, security, third-party services, and user rights."
      intro="This policy is designed to provide a clear overview of the personal information we collect online and how we handle that information in a professional law-firm environment."
      sections={sections}
    />
  );
}