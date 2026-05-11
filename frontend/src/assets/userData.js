import manishImg from "./lawyerImages/manish.png";
import vickyImg from "./lawyerImages/vicky.png";
import rSharmaImg from "./lawyerImages/rssharna.png";
import jyotiImg from "./lawyerImages/jyoti.png";
import khushbuImg from "./lawyerImages/khusbu.png";
import gauravImg from "./lawyerImages/gaurav.png";
import avinashImg from "./lawyerImages/avinash.png";

export const teamMembers = [
  {
    id: "manish-sharma",
    name: "Manish Sharma",
    title: "Founder",
    specialty: "Corporate Law",
    practiceAreas: [
      "Corporate Law",
      "Mergers & Acquisitions",
      "Regulatory Compliance",
      "Startup Advisory",
    ],
    bio: "Manish Sharma founded Vijai Bhava Law Firm and brings over 15 years of experience in corporate advisory, mergers & acquisitions, and regulatory compliance for startups and established enterprises across India.",
    email: "manish.sharma@vijaibhavalawfirm.com",
    education: [
      {
        institution: "National Law University, Delhi",
        degree: "B.A. LL.B. (Hons.)",
      },
      {
        institution: "University of Delhi",
        degree: "LL.M. (Corporate Law)",
      },
    ],
    barAdmissions: [
      "Bar Council of Delhi",
      "Delhi High Court",
      "Supreme Court of India",
      "NCLT",
    ],
    gender: "male",
    image: manishImg || null,
  },
  {
    id: "vicky-kumar-maurya",
    name: "Vicky Kumar Maurya",
    title: "Managing Partner & Co-Founder",
    specialty: "Intellectual Property & Technology Law",
    practiceAreas: [
      "Intellectual Property Law",
      "Cyber Law",
      "Technology Law",
      "IP Disputes",
    ],
    bio: "Vicky specializes in intellectual property, cyber law, and technology-related disputes, helping clients protect innovations and resolve cross-border IP matters.",
    email: "vicky.kumar.maurya@vijaibhavalawfirm.com",
    education: null,
    barAdmissions: null,
    gender: "male",
    image: vickyImg || null,
  },
  {
    id: "rs-sharma",
    name: "R S Sharma",
    title: "Senior Partner",
    specialty: "Litigation",
    practiceAreas: [
      "Litigation",
      "Civil Disputes",
      "Commercial Disputes",
      "Supreme Court Practice",
    ],
    bio: "R S Sharma has over four decades of litigation experience, representing clients before High Courts and the Supreme Court of India in complex civil and commercial disputes.",
    email: "r.s.sharma@vijaibhavalawfirm.com",
    education: [
      {
        institution: "National Law School of India University",
        degree: "B.A. LL.B. (Hons.)",
      },
    ],
    barAdmissions: [
      "Bar Council of Delhi",
      "Delhi High Court",
      "Supreme Court of India",
    ],
    gender: "male",
    image: rSharmaImg || null,
  },
  {
    id: "jyoti-sharma",
    name: "Jyoti Sharma",
    title: "Partner",
    specialty: "Matrimonial & Family Law",
    practiceAreas: [
      "Matrimonial Law",
      "Family Disputes",
      "Child Custody",
      "Settlement Negotiation",
    ],
    bio: "Jyoti advises individuals on matrimonial matters, family disputes, and related counselling, with practical experience in negotiation and courtroom advocacy.",
    email: "advjyotisharma94@gmail.com",
    education: [
      {
        institution: "C P J School of Law, Delhi",
        degree: "B.A. LL.B. (Hons.)",
      },
      {
        institution: "IP University, Delhi",
        degree: "LL.M. (Family Law)",
      },
    ],
    barAdmissions: ["Bar Council of Delhi", "Delhi High Court"],
    gender: "female",
    image: jyotiImg || null,
  },
  {
    id: "khusbu-kumari",
    name: "Khushbu Kumari",
    title: "Partner",
    specialty: "Criminal Law",
    practiceAreas: [
      "Criminal Law",
      "Bail Matters",
      "Trial Advocacy",
      "White-Collar Crime",
    ],
    bio: "Khushbu is a criminal law specialist with strong courtroom experience in trial advocacy, bail matters, and white-collar crime defense across trial courts and High Courts.",
    email: "khushbu.kumari@vijaibhavalawfirm.com",
    education: null,
    barAdmissions: ["Bar Council of Delhi", "Delhi High Court"],
    gender: "female",
    image: khushbuImg || null,
  },
  {
    id: "gaurav-gulati",
    name: "Gaurav Gulati",
    title: "Partner",
    specialty: "Corporate & Commercial Law",
    practiceAreas: [
      "Corporate Law",
      "Commercial Contracts",
      "Transaction Advisory",
      "Regulatory Matters",
    ],
    bio: "Gaurav advises corporates and HNW individuals on corporate transactions, commercial contracts, and regulatory matters with a practical, business-focused approach.",
    email: "gaurav.gulati@vijaibhavalawfirm.com",
    education: [
      {
        institution: "University of Delhi",
        degree: "B.Com. LL.B.",
      },
    ],
    barAdmissions: null,
    gender: "male",
    image: gauravImg || null,
  },
  {
    id: "avinash-singh",
    name: "Avinash Singh",
    title: "Partner",
    specialty: "Employment, Service & ADR",
    practiceAreas: [
      "Employment Law",
      "Service Matters",
      "Arbitration",
      "Dispute Resolution",
    ],
    bio: "Avinash focuses on employment and service law, dispute resolution, and arbitration, advising employers and employees on policy, compliance, and litigation strategy.",
    email: "avinash.singh@vijaibhavalawfirm.com",
    education: null,
    barAdmissions: ["Bar Council of Delhi", "Delhi High Court", "NCLT"],
    gender: "male",
    image: avinashImg || null,
  },
];
