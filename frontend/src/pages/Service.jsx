import ServicesGrid from "../components/ServicesGrid";
import { Link } from "react-router-dom";

const detailedServices = [
  {
    icon: "⚖️",
    title: "Corporate Law",
    desc: "Our corporate practice covers the full lifecycle of business legal needs — from formation and governance through complex M&A transactions and regulatory compliance. We advise boards, executives, and investors on their most consequential decisions.",
    features: ["Mergers & Acquisitions", "Corporate Governance", "Securities Law", "Venture Capital", "Private Equity", "Regulatory Compliance"],
  },
  {
    icon: "🏛️",
    title: "Litigation & Dispute Resolution",
    desc: "Our trial attorneys are among the most experienced in the nation. We handle complex commercial litigation, class actions, arbitration, and all forms of alternative dispute resolution with an uncompromising commitment to winning.",
    features: ["Commercial Litigation", "Class Actions", "Arbitration", "Appeals", "Mediation", "International Disputes"],
  },
  {
    icon: "🏢",
    title: "Real Estate",
    desc: "From high-rise acquisitions to complex leasing structures, our real estate team handles transactions of every size and complexity. We represent developers, investors, REITs, and tenants across all asset classes.",
    features: ["Acquisitions & Dispositions", "Commercial Leasing", "Construction Law", "Land Use & Zoning", "Real Estate Finance", "REIT Transactions"],
  },
  {
    icon: "💡",
    title: "Intellectual Property",
    desc: "Innovation is your most valuable asset. Our IP team protects it through comprehensive patent prosecution, trademark registration, copyright enforcement, and trade secret litigation.",
    features: ["Patent Prosecution", "Trademark Registration", "Copyright Law", "Trade Secrets", "IP Licensing", "Brand Protection"],
  },
  {
    icon: "👥",
    title: "Employment Law",
    desc: "Navigating today's complex employment landscape requires deep expertise. We advise employers on compliance, represent employees in discrimination claims, and handle executive compensation matters.",
    features: ["Wrongful Termination", "Discrimination Claims", "Employment Contracts", "Non-Compete Agreements", "OSHA Compliance", "Executive Compensation"],
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family Law",
    desc: "We approach family law matters with both legal rigor and human compassion. Our family law attorneys guide clients through divorce, custody disputes, adoption, and estate planning with sensitivity and skill.",
    features: ["Divorce & Separation", "Child Custody", "Alimony & Support", "Adoption", "Prenuptial Agreements", "Domestic Violence"],
  },
  {
    icon: "🛡️",
    title: "Criminal Defense",
    desc: "When your freedom is at stake, you need the most skilled defense available. Our criminal defense team has successfully defended clients against the most serious charges, from white-collar crime to violent offenses.",
    features: ["White Collar Crime", "DUI Defense", "Drug Offenses", "Federal Charges", "Appeals", "Expungements"],
  },
  {
    icon: "📊",
    title: "Tax Law",
    desc: "Our tax lawyers help businesses and individuals minimize liability, resolve disputes with tax authorities, and navigate international tax planning. We work seamlessly with your financial advisors to deliver holistic solutions.",
    features: ["Tax Planning", "IRS Disputes", "International Tax", "Estate Tax", "Corporate Tax", "Tax-Exempt Organizations"],
  },
];

export default function Service() {
  return (
    <main className="">
      {/* Header */}
      <section className="bg-[#0a1628] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `radial-gradient(circle at 30% 50%, #c9a84c 0%, transparent 60%)` }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10 pt-16">
          <span className="section-label">What We Do</span>
          <h1 className="section-title-white text-5xl md:text-6xl max-w-2xl">
            Practice Areas
          </h1>
          <div className="gold-divider" />
          <p className="text-white/50 max-w-xl text-sm leading-relaxed">
            Expert legal counsel across a comprehensive range of practice areas.
            Whatever your legal challenge, our attorneys have the expertise to guide you.
          </p>
        </div>
      </section>

      {/* Quick grid */}
      <section className="py-16 bg-[#faf8f3]">
        <div className="max-w-7xl mx-auto px-6">
          <ServicesGrid />
        </div>
      </section>

      {/* Detailed services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label">In Depth</span>
            <h2 className="section-title">Our Practice Areas</h2>
            <div className="gold-divider mx-auto" />
          </div>

          <div className="space-y-0 border-l border-t border-slate-200">
            {detailedServices.map((svc, i) => (
              <div
                key={svc.title}
                className={`border-r border-b border-slate-200 p-10 grid grid-cols-1 lg:grid-cols-3 gap-8 group hover:bg-[#faf8f3] transition-colors duration-300 ${
                  i % 2 === 1 ? "bg-[#faf8f3]/50" : "bg-white"
                }`}
              >
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl">{svc.icon}</span>
                    <h3 className="font-serif text-2xl text-[#0a1628]">{svc.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{svc.desc}</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c] font-semibold mb-4">
                    Key Services
                  </p>
                  <ul className="space-y-2">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-slate-600 text-xs">
                        <span className="w-1 h-1 rounded-full bg-[#c9a84c] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#c9a84c] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl text-[#0a1628] font-light mb-4">
            Don't See Your Issue?
          </h2>
          <p className="text-[#0a1628]/70 text-sm mb-8">
            Our attorneys handle a wide range of matters. Contact us for a
            complimentary consultation to discuss your specific needs.
          </p>
          <Link to="/contact" className="inline-block bg-[#0a1628] text-white px-10 py-4 text-xs tracking-widest uppercase font-semibold hover:bg-[#122040] transition-colors">
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  );
}
