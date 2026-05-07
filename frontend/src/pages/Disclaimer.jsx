import LegalPage from "../components/LegalPage";

const sections = [
  {
    id: "no-legal-advice",
    kicker: "1. Scope",
    title: "No Legal Advice Disclaimer",
    paragraphs: [
      "The information on this website is provided for general informational purposes only and does not constitute legal advice, legal opinion, or a substitute for consultation with a qualified attorney.",
      "You should not rely on any website content as a basis for making legal decisions without obtaining advice tailored to your specific facts and jurisdiction.",
    ],
  },
  {
    id: "informational",
    kicker: "2. Use of Content",
    title: "Informational Purposes Only",
    paragraphs: [
      "All articles, summaries, descriptions, and other materials on the website are intended to inform visitors about the firm and general legal topics. They are not exhaustive and may not reflect the latest legal developments at the time you read them.",
      "Legal outcomes can vary significantly based on facts, evidence, jurisdiction, and procedural posture. Similar matters may require different strategies and produce different results.",
    ],
  },
  {
    id: "no-relationship",
    kicker: "3. Engagement",
    title: "No Attorney-Client Relationship",
    paragraphs: [
      "Viewing this website, submitting a contact form, or sending an email to the firm does not create an attorney-client relationship.",
      "An attorney-client relationship arises only after the firm has confirmed acceptance of the matter and the parties have completed the appropriate engagement process. Until that time, do not send sensitive or confidential information unless specifically requested by our team.",
    ],
    note:
      "Communications sent through the website are not automatically protected by attorney-client privilege unless and until a formal engagement exists and privilege applies under law.",
  },
  {
    id: "external-links",
    kicker: "4. Third Parties",
    title: "External Links Disclaimer",
    paragraphs: [
      "The website may include links to third-party websites or resources for convenience only. These links do not constitute an endorsement, recommendation, or guarantee by Vijai Bhava Law Firm.",
      "We do not control and are not responsible for the content, policies, security, or availability of external websites. Visitors should review the terms and privacy policies of any third-party site they choose to access.",
    ],
  },
  {
    id: "liability-limit",
    kicker: "5. Reliance",
    title: "Limitation of Liability",
    paragraphs: [
      "To the fullest extent permitted by law, the firm will not be liable for any loss or damage arising from your reliance on website content, your inability to access the website, or the actions of third parties linked to or from the website.",
      "This limitation applies whether the claim is based in contract, tort, negligence, strict liability, or any other legal theory.",
    ],
  },
  {
    id: "jurisdiction",
    kicker: "6. Location",
    title: "Jurisdiction Notice",
    paragraphs: [
      "The firm practices law in accordance with applicable Indian law, and any legal guidance provided through the website should be understood in that context unless stated otherwise.",
      "Materials on the website may not be appropriate for use in every jurisdiction, and local laws, procedural rules, and professional obligations may differ significantly from one forum to another.",
    ],
  },
];

export default function Disclaimer() {
  return (
    <LegalPage
      pageLabel="Disclaimer"
      title="Disclaimer"
      subtitle="Please read this disclaimer carefully before relying on any content on the Vijai Bhava Law Firm website."
      lastUpdated="7 May 2026"
      metaDescription="Disclaimer for Vijai Bhava Law Firm covering no legal advice, informational purposes, no attorney-client relationship, external links, liability, and jurisdiction."
      intro="This disclaimer explains the limits of the information provided on the website and the boundaries of using the site for legal reference."
      sections={sections}
    />
  );
}