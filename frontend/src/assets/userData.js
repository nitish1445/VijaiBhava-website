import manishImg from "./lawyerImages/manish.png";
import vickyImg from "./lawyerImages/vicky.png";
import rSharmaImg from "./lawyerImages/rssharna.png";
import jyotiImg from "./lawyerImages/jyoti.png";
import khushbuImg from "./lawyerImages/khusbu.png";
import gauravImg from "./lawyerImages/gaurav.png";
import avinashImg from "./lawyerImages/avinash.png";
import prathamImg from "./lawyerImages/pratham.jpeg";

export const teamMembers = [
  {
    id: "manish-sharma",
    name: "Manish Sharma",
    title: "Founder",
    specialty: "Corporate Law",
    practiceAreas: [
      "Corporate Law",
      "Litigation",
      "White-Collar Crime",
      "Aviation Law",
    ],
    bio: `Manish Sharma founded Vijai Bhava Law Firm and brings over 15 years of focused experience advising companies, boards, and investors on high-stakes corporate matters. He has led cross-border M&A transactions, guided complex restructurings, and supported private equity investments through every stage of negotiation and execution.

  Manish's practice blends transactional precision with regulatory insight — advising on securities compliance, corporate governance, and industry-specific regulatory regimes. He regularly counsels founders and C-suite clients on risk allocation, contractual strategy, and litigation avoidance.

  He holds a B.A. LL.B. (Hons.) from I M E Law College, Gaziabad. Manish is admitted to the Bar Council of Delhi and appears before the Delhi High Court and the Supreme Court of India.`,
    email: "india@vijaibhavalawfirm.com",
    education: [
      {
        institution: "I M E Law College, Gaziabad",
        degree: "B.A. LL.B. (Hons.)",
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
    experience: {
      years: 15,
      summary:
        "Brings 15+ years of corporate advisory experience across M&A, restructurings, governance, and investor work.",
      highlights: [
        "Cross-border M&A and transaction leadership",
        "Corporate governance and regulatory compliance",
        "Private equity and restructuring support",
      ],
    },
    notableMatters: [
      "Advised a cross-border M&A involving an India-based target and multinational acquirer, managing regulatory approvals and purchase agreement negotiations.",
      "Led a multi-layered corporate restructuring for a family-owned conglomerate to separate business lines and optimize tax and governance outcomes.",
      "Structured and negotiated private equity growth financing for a technology startup, including shareholder protections and exit mechanics.",
    ],
  },
  {
    id: "vicky-kumar-maurya",
    name: "Vicky Kumar Maurya",
    title: "Managing Partner & Co-Founder",
    specialty: "Intellectual Property & Technology Law",
    practiceAreas: [
      "Intellectual Property Rights",
      "Cyber Law",
      "Alternative Dispute Resolution",
      "White-Collar Crime",
      "Aviation & Maritime Law",
    ],
    bio: `Vicky Kumar Maurya is a technology and intellectual property specialist who advises startups, established tech firms, and creative businesses on protection and monetization of IP assets. His work spans patent, trademark and trade secret strategy, licensing, and enforcement across jurisdictions.

  He also counsels clients on cyber law, data protection compliance, and technology-related commercial disputes — marrying legal strategy with practical product considerations. Vicky frequently leads cross-border coordination on complex infringement and licensing matters.

  Vicky holds a B.A. LL.B. (Hons.) from Dr. B.R. Ambedkar Bihar University.`,
    email: "india@vijaibhavalawfirm.com",
    education: [
      {
        institution: "Dr. B.R. Ambedkar Bihar University, Muzaffarpur",
        degree: "B.A. LL.B. (Hons.)",
      },
      // {
      //   institution: "Campus Law Center (CLC), University of Delhi",
      //   degree: "LL.M. (Corporate Law)",
      // },
    ],
    barAdmissions: null,
    gender: "male",
    image: vickyImg || null,
    notableMatters: [
      "Successfully defended a technology client in a cross-border trademark enforcement action, securing an early injunction.",
      "Led a software licensing negotiation and drafting for a SaaS provider, including data protection clauses and reseller terms.",
      "Managed a coordinated cyber-incident response for a corporate client, advising on regulatory notifications and mitigation measures.",
    ],
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
      "Alternative Dispute Resolution",
    ],
    bio: `R S Sharma is a seasoned litigator with over four decades of courtroom experience. He has led landmark civil and commercial matters at every level of the Indian judiciary, including High Courts and the Supreme Court, and is known for strategic case framing and persuasive appellate advocacy.

  Mr. Sharma's practice covers large commercial disputes, enforcement of complex contracts, and multiparty litigation. He is often retained for high-value matters where procedural mastery and appellate insight are critical to client outcomes.

  He graduated from Campus Law Centre (CLC), University of Delhi and is admitted to the Bar Council of Delhi, regularly appearing before the Delhi High Court and the Supreme Court of India.`,
    email: "india@vijaibhavalawfirm.com",
    education: [
      {
        institution: "Campus Law Centre (CLC), University of Delhi",
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
    experience: {
      years: 41,
      summary:
        "Brings over four decades of courtroom experience in civil, commercial, and appellate litigation.",
      highlights: [
        "High Court and Supreme Court advocacy",
        "Commercial disputes and contract enforcement",
        "Appellate strategy and procedural mastery",
      ],
    },
    notableMatters: [
      "Obtained a landmark appellate judgment in a commercial dispute on contract interpretation before the Supreme Court.",
      "Successfully argued a complex civil enforcement matter involving multi-jurisdictional parties and injunctive relief.",
      "Led representation in a high-value contractual dispute resolved favorably at the Delhi High Court.",
    ],
  },
  {
    id: "jyoti-sharma",
    name: "Jyoti Sharma",
    experience: {
      years: 7,
      summary:
        "Has more than seven years of experience handling family disputes, custody matters, and negotiated settlements.",
      highlights: [
        "Custody and child welfare litigation",
        "Matrimonial settlements and mediation",
        "Sensitive client counselling and negotiation",
      ],
    },
    title: "Partner",
    specialty: "Matrimonial & Family Law",
    practiceAreas: [
      "Matrimonial Law",
      "Family Disputes",
      "Child Custody",
      "Settlement Negotiation",
    ],
    bio: `Jyoti Sharma is a partner who focuses on matrimonial and family law, guiding clients through sensitive separations, custody matters, and negotiated settlements. With more than seven years of experience, she combines empathetic client counselling with firm litigation skills when needed.

  Her practice includes complex custody disputes, financial settlements, and alternative dispute resolution for family matters. She prioritizes tailored solutions that protect client interests while seeking durable outcomes for families.

  Jyoti earned her B.A. LL.B. (Hons.) from C P J School of Law and an LL.M. in Family Law from IP University, Delhi. She is admitted to the Bar Council of Delhi and practices in the Delhi High Court.`,
    email: "india@vijaibhavalawfirm.com",
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
    notableMatters: [
      "Negotiated a confidential financial settlement in a high-net-worth matrimonial matter, protecting client interests while minimizing court time.",
      "Secured primary custody arrangements and supervised visitation plans in a complex cross-border custody case.",
      "Conducted successful mediation leading to a durable settlement in a high-conflict family dispute.",
    ],
  },
  {
    id: "gaurav-gulati",
    name: "Gaurav Gulati",
    experience: {
      years: 10,
      summary:
        "Brings 10+ years of experience in aviation, maritime, employment, and regulated-entity dispute work.",
      highlights: [
        "Aviation and maritime compliance",
        "Employment disputes and service matters",
        "Arbitration and operational risk management",
      ],
    },
    title: "Senior Associate",
    specialty: "Cyber Law ",
    practiceAreas: [
      "Cyber Law",
      "Commercial Contracts",
      "GST Advisory",
      "Transaction Advisory",
      "Regulatory Matters",
    ],
    bio: `Gaurav Gulati advises corporate clients and high-net-worth individuals on commercial contracts, transaction structuring, and regulatory compliance. His work emphasizes practical commercial terms and risk allocation that align with business objectives.

  He regularly supports contract negotiations, vendor and partner agreements, and regulatory sign-offs for growth-stage companies and established enterprises. Gaurav's approach is solution-oriented, focusing on streamlining deals while protecting client value.

  Gaurav holds a B.A. LL.B. from the C C S, Meerut and brings a business-minded perspective to legal problems.`,
    email: "india@vijaibhavalawfirm.com",
    education: [
      {
        institution: "C C S, Meerut",
        degree: "B.A LL.B.",
      },
    ],
    barAdmissions: null,
    gender: "male",
    image: gauravImg || null,
    notableMatters: [
      "Drafted and negotiated complex commercial vendor agreements for a national retailer, tightening liability and service-level provisions.",
      "Advised a fintech client on regulatory compliance and licensing strategy ahead of market launch.",
      "Conducted due diligence and transactional support on multiple corporate acquisitions and joint ventures.",
    ],
  },
  {
    id: "pratham-verma",
    name: "Pratham Verma",
    experience: {
      years: 7,
      summary:
        "Has 7+ years of experience in commercial litigation, technology disputes, and alternative dispute resolution.",
      highlights: [
        "Led clients to successful outcomes in commercial litigation and arbitration",
        "Managed complex cyber-related disputes and enforcement actions",
        " Negotiated high-stakes settlements in technology and IP matters",
      ],
    },
    title: "Senior Associate",
    specialty: "Litigation & Dispute Resolution",
    practiceAreas: [
      "Litigation",
      "Cyber Law",
      "Alternative Dispute Resolution",
      "Dispute Resolution",
    ],
    bio: `Pratham Verma is a dispute resolution partner with a focus on commercial litigation, technology disputes and alternative dispute resolution. He combines courtroom experience with negotiated settlement strategies to resolve complex commercial conflicts.

  Pratham frequently handles IP enforcement, cyber-related disputes and contractual disagreements where technical and legal issues intersect. He is comfortable managing multi-jurisdictional coordination and fast-moving injunction matters.

  He holds a B.A. LL.B. (Hons.) from IME Law College and has represented corporate clients in trial and appellate forums.`,
    email: "india@vijaibhavalawfirm.com",
    education: [
      {
        institution: "IME Law College, Uttar Pradesh",
        degree: "B.A. LL.B. (Hons.)",
      },
    ],
    barAdmissions: null,
    gender: "male",
    image: prathamImg || null,
    notableMatters: [
      "Won interim relief in an IP injunction matter protecting client software assets.",
      "Resolved a cross-border technology dispute through arbitration, securing a commercially favorable settlement.",
      "Advised on brand protection strategy for a series of product launches in multiple jurisdictions.",
    ],
  },
  {
    id: "avinash-singh",
    name: "Avinash Singh",
    title: "Associate",
    specialty: "Aviation & Maritime Law",
    practiceAreas: [
      "Employment Law",
      "Service Matters",
      "Arbitration",
      "Dispute Resolution",
    ],
    bio: `Avinash Singh focuses on aviation, maritime and employment law, advising carriers, operators and corporate employers on regulatory compliance, service matters and dispute resolution. His practice spans contentious and advisory work, with an emphasis on minimizing operational disruption.

  He handles employment disputes, arbitration and policy reviews for regulated entities, combining sector knowledge with a pragmatic legal approach. Avinash also regularly participates in industry-led compliance initiatives and risk assessments.

  Avinash earned his B.A. LL.B. (Hons.) from Dr. B.R. Ambedkar Bihar University. He is admitted to practice before several tribunals and courts.`,
    email: "india@vijaibhavalawfirm.com",
    education: [
      {
        institution: "Dr. B.R. Ambedkar Bihar University, Muzaffarpur",
        degree: "B.A. LL.B. (Hons.)",
      },
      // {
      //   institution: "Campus Law Center (CLC), University of Delhi",
      //   degree: "LL.M. (Corporate Law)",
      // },
    ],
    barAdmissions: ["Bar Council of Delhi", "Delhi High Court", "NCLT"],
    gender: "male",
    image: avinashImg || null,
    notableMatters: [
      "Advised an airline on a complex aircraft leasing dispute and negotiated a settlement reducing client liability.",
      "Represented a shipping operator in charter party arbitration with a successful award enforcement.",
      "Developed employment policy and compliance program for a large carrier following regulatory review.",
    ],
  },
  {
    id: "khusbu-kumari",
    name: "Khushbu Kumari",
    title: "Associate",
    specialty: "Matrimonial & Family Law",
    practiceAreas: [
      "Matrimonial Law",
      "Family Disputes",
      "Child Custody",
      "Settlement Negotiation",
    ],
    bio: `Khushbu Kumari is a partner advising on family and matrimonial disputes with a strong grounding in courtroom advocacy and negotiated settlements. Her practice blends trial experience with sensitive client counselling for family-related matters.

  She handles complex custody cases, financial settlements, and related relief proceedings, prioritizing practical, client-centered solutions and where necessary robust litigation strategy.

  Khushbu holds a B.A. LL.B. (Hons.) from Dr. B.R. Ambedkar Bihar University .`,
    email: "india@vijaibhavalawfirm.com",
    education: [
      {
        institution: "Dr. B.R. Ambedkar Bihar University, Muzaffarpur",
        degree: "B.A. LL.B. (Hons.)",
      },
      // {
      //   institution: "Campus Law Center (CLC), University of Delhi",
      //   degree: "LL.M. (Corporate Law)",
      // },
    ],
    barAdmissions: ["Bar Council of Delhi", "Delhi High Court"],
    gender: "female",
    image: khushbuImg || null,
    notableMatters: [
      "Secured a favorable custody arrangement through strategic negotiation and targeted litigation techniques.",
      "Achieved an advantageous financial settlement for a client in a contested matrimonial matter.",
      "Led successful protective relief proceedings resulting in client safety and effective enforcement measures.",
    ],
  },
];
