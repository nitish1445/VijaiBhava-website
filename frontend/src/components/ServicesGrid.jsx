import { Link } from "react-router-dom";
import {
  FaBalanceScale,
  FaGavel,
  FaUsers,
  FaLightbulb,
  FaShieldAlt,
  FaHandshake,
  FaLaptopCode,
  FaPlane,
} from "react-icons/fa";

const services = [
  {
    icon: <FaBalanceScale />,
    title: "Corporate Law",
    desc: "Advising on mergers & acquisitions, corporate governance, capital markets, and insolvency & restructuring under evolving regulatory frameworks.",
    slug: "corporate-law",
  },
  {
    icon: <FaGavel />,
    title: "Litigation & Dispute Resolution",
    desc: "Handling criminal defense, civil disputes, constitutional writs, and regulatory matters before courts and tribunals including NCLT and DRT.",
    slug: "litigation",
  },
  {
    icon: <FaUsers />,
    title: "Matrimonial & Family Law",
    desc: "Expert guidance in divorce, custody, alimony, domestic violence protection, and marriage laws with a focus on client sensitivity.",
    slug: "family-law",
  },
  {
    icon: <FaHandshake />,
    title: "Alternative Dispute Resolution",
    desc: "Efficient resolution through arbitration, mediation, conciliation, and negotiation under modern legal frameworks.",
    slug: "adr",
  },
  {
    icon: <FaLightbulb />,
    title: "Intellectual Property Rights",
    desc: "Protection of trademarks, patents, copyrights, and trade secrets to safeguard innovation and business identity.",
    slug: "intellectual-property",
  },
  {
    icon: <FaShieldAlt />,
    title: "White-Collar Crime",
    desc: "Defense and advisory under PMLA, PCA, Companies Act fraud provisions, and economic offence regulations.",
    slug: "white-collar-crime",
  },
  {
    icon: <FaLaptopCode />,
    title: "Cyber Law & Data Protection",
    desc: "Advising on data privacy, digital compliance, cybercrime defense, and intermediary liability under evolving IT laws.",
    slug: "cyber-law",
  },
  {
    icon: <FaPlane />,
    title: "Aviation & Maritime Law",
    desc: "Legal services in aircraft leasing, DGCA regulations, drone law, ship arrest, cargo disputes, and marine insurance.",
    slug: "aviation-maritime",
  },
];

export default function ServicesGrid({ limit }) {
  const displayed = limit ? services.slice(0, limit) : services;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-slate-200">
      {displayed.map((service) => (
        <Link
          to="/services"
          key={service.slug}
          className="group border-r border-b border-slate-200 p-8 bg-white hover:bg-[#0a1628] transition-all duration-500 cursor-pointer"
        >
          <div className="text-3xl mb-5 group-hover:scale-110 group-hover:text-white transition-transform duration-300">
            {service.icon}
          </div>
          <h3 className="font-serif text-xl text-[#0a1628] group-hover:text-white font-medium mb-3 transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-slate-500 text-xs leading-relaxed group-hover:text-white/60 transition-colors duration-300">
            {service.desc}
          </p>
          <div className="mt-6 flex items-center gap-2 text-[#c9a84c] text-[10px] tracking-widest uppercase font-semibold">
            <span>Learn More</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
