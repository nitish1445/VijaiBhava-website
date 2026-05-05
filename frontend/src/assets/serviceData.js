import {
  FaBalanceScale,
  FaGavel,
  FaUsers,
  FaHandshake,
  FaLightbulb,
  FaShieldAlt,
  FaLaptopCode,
  FaPlane,
} from "react-icons/fa";
const user = null;

export const services = [
  {
    slug: "corporate-law",
    icon: FaBalanceScale,
    title: "Corporate Law",
    description:
      "Advising boards, founders, and investors on the full spectrum of corporate matters with precision and discretion.",
    longDescription:
      "Our corporate law practice supports businesses through the entire lifecycle of growth. From entity formation and shareholder governance to acquisitions, fundraising, and restructuring, we provide practical legal guidance that aligns with commercial objectives. We work closely with leadership teams to manage risk, negotiate complex transactions, and build durable structures for long-term success.",
    features: [
      {
        title: "Mergers & Acquisitions",
        description:
          "Deal strategy, diligence, documentation, closing support, and post-closing integration.",
      },
      {
        title: "Corporate Governance",
        description:
          "Board advisory, fiduciary duties, policy frameworks, and shareholder matters.",
      },
      {
        title: "Capital Raising",
        description:
          "Private placements, venture financing, and investor-side transaction support.",
      },
      {
        title: "Regulatory Compliance",
        description:
          "Ongoing compliance programs that keep businesses aligned with changing regulations.",
      },
      {
        title: "Restructuring",
        description:
          "Workouts, insolvency strategy, and pragmatic solutions for distressed businesses.",
      },
    ],
    lawyers: [
      { id: "william-harrington" },
      { id: "priya-nair" },
      { id: "elena-vasquez" },
    ],
    relatedServices: ["litigation", "intellectual-property", "tax-law"],
    caseTypes: [
      {
        title: "Mergers & Acquisitions",
        description:
          "Comprehensive M&A counsel including sell-side and buy-side representation, transaction structuring, due diligence, SPA negotiation, escrow and indemnity arrangements, and post-closing integration support.",
        details:
          "We manage the full M&A lifecycle: strategic deal planning, target selection, commercial and legal due diligence, drafting and negotiation of sale and purchase agreements, regulatory filings, and integration. Our team focuses on allocating risk through negotiated warranties, indemnities and escrow structures, advising on antitrust or sector-specific approvals, and coordinating cross-border tax and employee-related issues to ensure a smooth closing and practical post-completion execution.",
      },
      {
        title: "Corporate Governance",
        description:
          "Board advisory, fiduciary duty compliance, shareholder agreements, board charters, and internal governance frameworks to align management and investor interests.",
        details:
          "We advise boards and senior management on governance best practices, drafting articles, bylaws, shareholder agreements, and conflict-of-interest policies. Our counsel includes director duties, meeting governance, disclosure obligations, remediation of governance failures, and implementing compliance programs to support fiduciary decision-making while balancing stakeholder interests.",
      },
      {
        title: "Capital Markets",
        description:
          "Regulatory and transactional support for equity and debt offerings, IPO readiness, disclosure obligations, and ongoing securities compliance.",
        details:
          "Our capital markets practice prepares issuers for public and private offerings, including IPO readiness reviews, drafting prospectuses or offering memoranda, liaison with regulators, and managing underwriting structures. We advise on securities law compliance, periodic reporting obligations, and secondary market considerations to ensure transactional success and sustainable market access.",
      },
      {
        title: "Insolvency & Restructuring",
        description:
          "Practical insolvency solutions, restructuring plans, creditor negotiations, and representation in insolvency tribunals and proceedings.",
        details:
          "When businesses face distress we provide pragmatic restructuring strategies—negotiating consensual workouts, advising on insolvency filings, representing clients in insolvency tribunals, and coordinating creditor and stakeholder engagements. Our aim is to preserve value, protect stakeholders’ rights, and, where possible, rehabilitate viable enterprises through negotiated or statutory restructuring processes.",
      },
    ],
  },
  {
    slug: "litigation",
    icon: FaGavel,
    title: "Litigation & Dispute Resolution",
    description:
      "Representing clients in high-stakes disputes with a trial-ready strategy and commercial focus.",
    longDescription:
      "Our litigation team handles matters that demand strategic thinking, technical command, and courtroom discipline. We advise on commercial disputes, injunctions, regulatory investigations, and arbitration proceedings. Whether the objective is a negotiated settlement or a hard-fought trial, we prepare each case to create leverage and protect client interests at every stage.",
    features: [
      {
        title: "Commercial Litigation",
        description:
          "Breach of contract, partnership disputes, and business torts.",
      },
      {
        title: "Arbitration",
        description:
          "Domestic and cross-border arbitration strategy and advocacy.",
      },
      {
        title: "Appeals",
        description: "Appellate briefing, oral argument, and error correction.",
      },
      {
        title: "Injunctions",
        description:
          "Urgent relief to protect rights, assets, and market position.",
      },
      {
        title: "Regulatory Proceedings",
        description:
          "Investigations and proceedings before tribunals and agencies.",
      },
    ],
    lawyers: [
      { id: "marcus-thompson" },
      { id: "james-whitfield" },
      { id: "robert-cunningham" },
    ],
    relatedServices: ["corporate-law", "white-collar-crime", "adr"],
    caseTypes: [
      {
        title: "Criminal Defense",
        description:
          "Representation for individuals and corporations in economic and white-collar crime matters, from investigation through trial and appeal.",
        details:
          "We represent clients at every stage of a criminal process—handling raids and investigations, advising on disclosure strategy, preparing bail and defense applications, and providing trial and appellate advocacy. Our team coordinates forensic review, engages expert witnesses where necessary, and develops mitigation strategies focused on minimizing exposure and reputational harms.",
      },
      {
        title: "Civil Disputes",
        description:
          "High-value commercial litigation, contractual disputes, and complex civil claims with courtroom and arbitration advocacy.",
        details:
          "Our litigators develop case theories grounded in commercial reality, manage discovery and evidentiary programs, and pursue efficient resolution through negotiation, arbitration or trial. We balance aggressive advocacy with pragmatic cost management to protect client rights and commercial interests.",
      },
      {
        title: "Constitutional Writs",
        description:
          "Petitions and writs for urgent public law relief, including fundamental rights matters in High Courts and the Supreme Court.",
        details:
          "We draft and argue writ petitions seeking urgent public law remedies, including habeas corpus, mandamus and certiorari. Our team excels at urgent procedural applications and framing constitutional issues to secure prompt judicial relief in matters involving state action or systemic rights violations.",
      },
      {
        title: "Administrative & Regulatory",
        description:
          "Regulatory defense and representation before tribunals such as NCLT, DRT, and specialised regulatory bodies.",
        details:
          "We act for clients in regulatory inquiries, tribunal proceedings and statutory adjudications, preparing submissions, representing clients at hearings, and negotiating settlement frameworks. Our practice covers sectoral regulators, insolvency tribunals, and specialised dispute forums where procedural precision and regulatory knowledge are vital.",
      },
    ],
  },
  {
    slug: "family-law",
    icon: FaUsers,
    title: "Matrimonial & Family Law",
    description:
      "Sensitive, strategic representation across divorce, custody, support, and family transitions.",
    longDescription:
      "Family disputes require both legal rigor and measured judgment. We guide clients through divorce, custody, support, asset division, adoption, and protection matters with confidentiality and care. Our goal is to secure practical outcomes that preserve dignity, protect children, and create a stable path forward.",
    features: [
      {
        title: "Divorce & Separation",
        description:
          "Contested and uncontested proceedings with asset protection in mind.",
      },
      {
        title: "Child Custody",
        description:
          "Parenting plans and custody arrangements centered on the child.",
      },
      {
        title: "Alimony & Support",
        description:
          "Negotiation and litigation of fair financial arrangements.",
      },
      {
        title: "Domestic Violence",
        description: "Protection orders and urgent advocacy in crisis matters.",
      },
      {
        title: "Prenuptial Agreements",
        description: "Forward-looking planning for high-net-worth families.",
      },
    ],
    lawyers: [
      { id: "olivia-park" },
      { id: "sarah-chen" },
      { id: "priya-nair" },
    ],
    relatedServices: ["adr", "tax-law", "real-estate"],
    caseTypes: [
      {
        title: "Marriage & Registration",
        description:
          "Advising on lawful registration of marriages under relevant statutes and resolving conflicts of personal law in family formation.",
        details:
          "We counsel clients on the applicable legal regime for marriage registration and advise on statutory formalities and evidentiary requirements. Where personal law conflicts arise, we provide tailored solutions that respect cultural norms while securing legal recognition and protections for family units.",
      },
      {
        title: "Divorce & Judicial Separation",
        description:
          "Negotiation and litigation of divorce, contested and uncontested settlements, and financial remedies including maintenance and asset division.",
        details:
          "Our family lawyers negotiate comprehensive separation agreements, advise on grounds for divorce, and handle contested proceedings with sensitivity. We address financial relief, property settlements and spousal support, prioritising dispute resolution where possible but prepared to litigate to protect client interests.",
      },
      {
        title: "Child Custody & Guardianship",
        description:
          "Custody, visitation, guardianship and adoption proceedings prioritising the child's welfare and legal parental rights.",
        details:
          "We craft custody arrangements focused on the child's best interests, preparing parenting plans, representing clients in custody hearings, and handling guardianship and adoption processes with attention to welfare, schooling and relocation considerations.",
      },
      {
        title: "Maintenance & Alimony",
        description:
          "Interim and permanent support claims, valuation of spousal and child support, and enforcement of maintenance orders.",
        details:
          "We evaluate income, assets and lifestyle to calculate fair maintenance awards, pursue interim relief during proceedings, and enforce or vary support orders as circumstances change. Our approach combines negotiation with decisive enforcement when necessary.",
      },
      {
        title: "Domestic Violence & Protection",
        description:
          "Protective orders, representation under domestic violence statutes, and civil remedies to secure safety and residence rights.",
        details:
          "We obtain urgent relief through protection orders, represent clients in applications under domestic violence legislation, and coordinate safety planning with social services where required. Civil remedies may include residence orders, monetary relief and enforcement measures to secure client safety.",
      },
    ],
  },
  {
    slug: "adr",
    icon: FaHandshake,
    title: "Alternative Dispute Resolution",
    description:
      "Efficient dispute resolution through arbitration, mediation, conciliation, and negotiation.",
    longDescription:
      "Alternative dispute resolution offers a faster, more private route to resolving conflict. We represent clients in mediation and arbitration with a focus on preserving value, reducing delay, and maintaining business relationships where possible. Our team structures each process with the same preparation and advocacy discipline used in court.",
    features: [
      {
        title: "Arbitration",
        description:
          "Procedural strategy, evidence management, and hearing advocacy.",
      },
      {
        title: "Mediation",
        description:
          "Outcome-driven negotiation guided by commercial priorities.",
      },
      {
        title: "Conciliation",
        description: "Structured settlement support for sensitive disputes.",
      },
      {
        title: "Drafting Clauses",
        description:
          "Strong dispute-resolution provisions for future contracts.",
      },
      {
        title: "Enforcement",
        description:
          "Recognition and enforcement of arbitral awards and settlements.",
      },
    ],
    lawyers: [
      { id: "marcus-thompson" },
      { id: "william-harrington" },
      { id: "robert-cunningham" },
    ],
    relatedServices: ["litigation", "corporate-law", "employment-law"],
    caseTypes: [
      {
        title: "Arbitration",
        description:
          "Institutional and ad-hoc arbitration, drafting arbitral clauses, seat selection, and enforcement of awards under applicable arbitration law.",
        details:
          "Our arbitration practice manages pre-dispute clause drafting, case inception, emergency relief (including interim measures), and full hearing advocacy. We handle award recognition and enforcement in domestic and international jurisdictions, advising on strategic seat selection and applicable rules.",
      },
      {
        title: "Mediation",
        description:
          "Mediation advocacy and settlement facilitation with a focus on commercially durable outcomes and cost-efficient resolution.",
        details:
          "In mediation we prepare position papers, shape negotiation narratives, and facilitate pragmatic settlements that preserve commercial relationships. We leverage mediator expertise and realistic commercial assessments to secure durable outcomes.",
      },
      {
        title: "Conciliation & Negotiation",
        description:
          "Conciliatory processes and direct negotiation strategies tailored to preserve business relationships while resolving disputes.",
        details:
          "Our conciliators propose solution frameworks, draft settlement terms and manage implementation. Negotiation services include leverage analysis, staged concession planning and drafting enforceable settlement agreements.",
      },
      {
        title: "ADR Clause Drafting",
        description:
          "Designing bespoke dispute resolution clauses that manage risk, costs, and enforceability across jurisdictions.",
        details:
          "We draft dispute resolution clauses to reduce future litigation risk—balancing arbitration, mediation and court options, specifying governing law, seat, rules, and emergency relief procedures to ensure enforceability and predictable outcomes.",
      },
    ],
  },
  {
    slug: "intellectual-property",
    icon: FaLightbulb,
    title: "Intellectual Property Rights",
    description:
      "Protecting inventions, brands, creative assets, and trade secrets across every stage of growth.",
    longDescription:
      "Innovation only creates value when it is protected. Our intellectual property practice helps clients secure, manage, and enforce patents, trademarks, copyrights, and confidential information. We combine legal strategy with commercial awareness to protect the assets that define a brand, product, or platform.",
    features: [
      {
        title: "Patents",
        description:
          "Prosecution, portfolio strategy, and enforcement planning.",
      },
      {
        title: "Trademarks",
        description:
          "Brand clearance, registration, policing, and opposition support.",
      },
      {
        title: "Copyright",
        description:
          "Protection of creative works, software, and digital content.",
      },
      {
        title: "Trade Secrets",
        description:
          "Internal controls and litigation-ready protection measures.",
      },
      {
        title: "Licensing",
        description:
          "Commercial agreements that monetize protected assets safely.",
      },
    ],
    lawyers: [
      { id: "sarah-chen" },
      { id: "william-harrington" },
      { id: "elena-vasquez" },
    ],
    relatedServices: ["corporate-law", "cyber-law", "litigation"],
    caseTypes: [
      {
        title: "Trademarks",
        description:
          "Brand clearance, registration strategy, portfolio management, and enforcement across markets.",
        details:
          "We conduct clearance searches, file and prosecute trademark applications, and enforce brand rights through oppositions, cancellation actions and enforcement programs. Our work includes watch services, portfolio management and cross-border enforcement strategies.",
      },
      {
        title: "Patents",
        description:
          "Patent drafting, prosecution, portfolio planning, and litigation support for technology-driven businesses.",
        details:
          "We draft patent specifications and claims with technical precision, manage prosecution across jurisdictions, and advise on freedom-to-operate and licensing. For disputes we coordinate technical experts and litigate or negotiate infringement and validity matters.",
      },
      {
        title: "Copyrights",
        description:
          "Copyright protection and enforcement for creative works, software, and digital content including takedown and licensing strategies.",
        details:
          "We advise on ownership and authorship issues, licensing of creative works, enforcement against online infringement, and bespoke contracts for software and content distribution. We also manage takedown procedures and negotiate settlements when appropriate.",
      },
      {
        title: "Trade Secrets & Confidentiality",
        description:
          "Protection of proprietary information through NDAs, internal controls, and litigation-ready measures for misappropriation claims.",
        details:
          "We implement confidentiality regimes including NDAs, access controls, and exit protocols, and prepare litigation strategies for trade secret misappropriation involving injunctions and damages. Our work is tailored for high-value technology and commercial secrets.",
      },
      {
        title: "Licensing & Commercialisation",
        description:
          "Negotiation and drafting of licensing, assignment, and collaboration agreements to monetise IP assets.",
        details:
          "We structure licensing deals, revenue-sharing, exclusivity terms and portfolio cross-licensing to maximise commercial value while protecting core rights and ensuring compliance with competition rules.",
      },
    ],
  },
  {
    slug: "white-collar-crime",
    icon: FaShieldAlt,
    title: "White-Collar Crime",
    description:
      "Strategic defense and pre-emptive advisory in complex economic offence matters.",
    longDescription:
      "We defend executives, founders, and companies facing scrutiny under fraud, corruption, financial misconduct, and related economic offence frameworks. Our approach is discreet, fast-moving, and evidence-driven. We work to limit exposure early, manage investigations intelligently, and mount a disciplined defense if formal proceedings follow.",
    features: [
      {
        title: "Fraud Investigations",
        description:
          "Internal reviews, document response, and witness preparation.",
      },
      {
        title: "PMLA Matters",
        description:
          "Defense strategy for money-laundering allegations and proceedings.",
      },
      {
        title: "Regulatory Defense",
        description:
          "Engagement with agencies, notices, and adjudicatory bodies.",
      },
      {
        title: "Crisis Response",
        description: "Immediate action when raids, summons, or seizures occur.",
      },
      {
        title: "Trials & Appeals",
        description: "Full-spectrum advocacy from charge to final appeal.",
      },
    ],
    lawyers: [
      { id: "james-whitfield" },
      { id: "marcus-thompson" },
      { id: "william-harrington" },
    ],
    relatedServices: ["litigation", "corporate-law", "cyber-law"],
    caseTypes: [
      {
        title: "PMLA & Money Laundering",
        description:
          "Defense and advisory in money-laundering investigations, asset attachment issues, and complex multi-jurisdictional enforcement actions.",
        details:
          "We provide urgent defense strategies in money-laundering probes, advise on asset attachment challenges, represent clients in hearings, and coordinate with international counsel. Our focus is on protecting liberty, contesting unlawful seizures, and resolving regulatory exposure.",
      },
      {
        title: "Corporate Fraud & Companies Act Matters",
        description:
          "Representation in fraud allegations, director liability matters, and proceedings under corporate statutes.",
        details:
          "We represent companies and officers facing allegations under corporate statutes, prepare robust defense records, manage internal investigations, and negotiate remediation or settlement where appropriate to mitigate regulatory and civil exposure.",
      },
      {
        title: "Regulatory Investigations",
        description:
          "Engagement with investigative agencies, witness interviews, and mitigation strategies during probes.",
        details:
          "We lead responses to regulatory inquiries—coordinating document preservation, counsel-led witness interviews, negotiated settlements, and strategic engagement with enforcement agencies to limit long-term harm.",
      },
      {
        title: "Crisis Response & Forensic Review",
        description:
          "Rapid-response teams for seizures, raids, evidence preservation, and forensic review to protect client rights and documents.",
        details:
          "Our crisis-response teams secure premises, preserve evidence, guide client communications, and instruct forensic experts to reconstruct events, enabling targeted defense and informed negotiations with investigators.",
      },
    ],
  },
  {
    slug: "cyber-law",
    icon: FaLaptopCode,
    title: "Cyber Law & Data Protection",
    description:
      "Counsel on privacy, cybercrime, platform governance, and digital compliance.",
    longDescription:
      "Digital businesses operate in a fast-changing risk environment. Our cyber law and data protection team helps clients manage privacy requirements, incident response, cybercrime allegations, intermediary issues, and data governance. We build practical compliance frameworks that support innovation without losing control of legal exposure.",
    features: [
      {
        title: "Data Privacy",
        description: "Privacy policies, governance, and compliance readiness.",
      },
      {
        title: "Incident Response",
        description:
          "Action plans for breaches, breaches of trust, and ransomware events.",
      },
      {
        title: "Cybercrime Defense",
        description:
          "Legal support when digital activity triggers criminal exposure.",
      },
      {
        title: "Platform Compliance",
        description: "Intermediary liability and online content governance.",
      },
      {
        title: "Cross-Border Data",
        description: "Transfer strategy for global operations and outsourcing.",
      },
    ],
    lawyers: [
      { id: "sarah-chen" },
      { id: "priya-nair" },
      { id: "robert-cunningham" },
    ],
    relatedServices: [
      "intellectual-property",
      "corporate-law",
      "white-collar-crime",
    ],
    caseTypes: [
      {
        title: "Data Protection & Privacy",
        description:
          "Compliance with modern data protection regimes, privacy impact assessments, data processing agreements, and cross-border transfer strategies.",
        details:
          "We assist clients with DPDP/other privacy frameworks—conducting privacy impact assessments, drafting data processing agreements, setting breach protocols, and advising on lawful cross-border transfers and record-keeping obligations.",
      },
      {
        title: "Cyber-Forensics & Incident Response",
        description:
          "Legal-led incident response for breaches, coordinating notifications, containment, and regulator engagement.",
        details:
          "We coordinate legal and technical incident response—preserving digital evidence, advising on disclosure obligations, managing regulator and customer communications, and preparing post-incident remediation and compliance programs.",
      },
      {
        title: "Intermediary Liability",
        description:
          "Advising platforms and service providers on safe-harbour rules, notice-and-takedown processes, and policy enforcement.",
        details:
          "We advise online intermediaries on compliance with intermediary liability regimes, design takedown and content moderation procedures, and defend platforms in regulatory and civil claims arising from user content.",
      },
      {
        title: "E-Commerce & Digital Contracts",
        description:
          "Drafting and enforcing digital contracts, payment gateway compliance, and fintech regulatory counselling.",
        details:
          "Our team drafts user agreements, merchant contracts, and payment terms, ensuring compliance with consumer protection and fintech regulations while managing platform liability and dispute resolution.",
      },
    ],
  },
  {
    slug: "aviation-maritime",
    icon: FaPlane,
    title: "Aviation & Maritime Law",
    description:
      "Legal support for aircraft, shipping, logistics, and cross-border transport matters.",
    longDescription:
      "Our aviation and maritime practice advises clients on transactions, regulatory compliance, disputes, and operational risk across highly regulated transport sectors. We handle ship arrests, cargo claims, aircraft leasing, insurance, and safety-related matters with speed and precision because these industries often cannot wait for slow legal answers.",
    features: [
      {
        title: "Aircraft Leasing",
        description:
          "Commercial and regulatory support for leasing structures.",
      },
      {
        title: "Ship Arrest",
        description: "Urgent remedies in vessel and cargo disputes.",
      },
      {
        title: "Cargo Claims",
        description: "Loss, delay, and damage recovery in logistics matters.",
      },
      {
        title: "Marine Insurance",
        description: "Coverage interpretation and claims strategy.",
      },
      {
        title: "DGCA Compliance",
        description: "Aviation regulatory advice and operational guidance.",
      },
    ],
    lawyers: [
      { id: "elena-vasquez" },
      { id: "william-harrington" },
      { id: "marcus-thompson" },
    ],
    relatedServices: ["litigation", "corporate-law", "adr"],
    caseTypes: [
      {
        title: "Aircraft Leasing & Finance",
        description:
          "Negotiation and documentation of lease and financing arrangements, lessor-lessee rights, and cross-border repossession strategy.",
        details:
          "We negotiate lease terms, advising on default, repossession, and cross-border enforcement, and coordinate financier protections and registry filings to protect creditors and lessors in aircraft financing.",
      },
      {
        title: "Regulatory & Licensing",
        description:
          "DGCA compliance, AOC procurement, slot and route licensing, and regulatory dispute resolution.",
        details:
          "We assist operators with DGCA compliance, AOC applications, regulatory audits, and dispute resolution regarding licensing, slots and safety compliance across jurisdictions.",
      },
      {
        title: "Drone & UAS Law",
        description:
          "Regulatory approvals, UIN/remote pilot certification guidance, and counsel on airspace and commercial drone operations.",
        details:
          "We advise on registration, UIN and remote pilot certification, use-case approvals on Digital Sky, and regulatory compliance for commercial drone operations including privacy and airspace constraints.",
      },
      {
        title: "Aviation Litigation",
        description:
          "Passenger claims, mass tort coordination, insurer disputes, and carrier contractual litigation.",
        details:
          "We handle passenger compensation claims, mass tort coordination after incidents, insurer disputes, and contractual litigation between carriers, lessors and service providers, focusing on rapid relief and liability allocation.",
      },
    ],
  },
];