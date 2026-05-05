import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import TeamCard from "../components/TeamCard";
import { services } from "../assets/serviceData";
import {
  FaBalanceScale,
  FaGavel,
  FaUsers,
  FaHandshake,
  FaLightbulb,
  FaShieldAlt,
  FaLaptopCode,
  FaPlane,
  FaFileAlt,
} from "react-icons/fa";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <main className="min-h-screen bg-white">
        <section className="bg-[#0a1628] py-28 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 40%, #c9a84c 0%, transparent 60%)",
            }}
          />
          <div className="max-w-4xl mx-auto px-6 relative z-10 pt-16 text-center">
            <span className="section-label">Service Detail</span>
            <h1 className="section-title-white text-5xl md:text-6xl">
              Service Not Found
            </h1>
            <div className="gold-divider mx-auto" />
            <p className="text-white/50 max-w-xl mx-auto text-sm leading-relaxed">
              The service you are looking for does not exist or has been moved.
            </p>
            <div className="mt-10">
              <Link to="/services" className="btn-white-outline">
                Back to Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const lawyerCards = service.lawyers.map((lawyer) => ({
    id: lawyer.id,
    name: lawyer.name,
    title: lawyer.role,
    specialty: service.title,
    image: lawyer.image,
    bio: lawyer.bio,
  }));

  const relatedServices = (service.relatedServices || [])
    .map((relatedSlug) => services.find((item) => item.slug === relatedSlug))
    .filter(Boolean);

  const [openIndex, setOpenIndex] = useState(-1);

  function getCaseTypeIcon(title) {
    const t = title.toLowerCase();
    if (
      t.includes("merger") ||
      t.includes("acquisit") ||
      t.includes("capital") ||
      t.includes("corporat")
    )
      return FaBalanceScale;
    if (
      t.includes("litig") ||
      t.includes("appeal") ||
      t.includes("injunct") ||
      t.includes("criminal") ||
      t.includes("civil")
    )
      return FaGavel;
    if (
      t.includes("custod") ||
      t.includes("marriag") ||
      t.includes("divorc") ||
      t.includes("child")
    )
      return FaUsers;
    if (
      t.includes("arbitrat") ||
      t.includes("mediat") ||
      t.includes("conciliation") ||
      t.includes("adr")
    )
      return FaHandshake;
    if (
      t.includes("patent") ||
      t.includes("trademark") ||
      t.includes("copyright") ||
      t.includes("trade secret")
    )
      return FaLightbulb;
    if (
      t.includes("pmla") ||
      t.includes("fraud") ||
      t.includes("regulat") ||
      t.includes("crime")
    )
      return FaShieldAlt;
    if (
      t.includes("data") ||
      t.includes("cyber") ||
      t.includes("incident") ||
      t.includes("platform")
    )
      return FaLaptopCode;
    if (
      t.includes("aircraft") ||
      t.includes("ship") ||
      t.includes("cargo") ||
      t.includes("aviation") ||
      t.includes("marine")
    )
      return FaPlane;
    return FaFileAlt;
  }

  return (
    <main className="bg-white">
      <section className="bg-[#0a1628] py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 75% 20%, #c9a84c 0%, transparent 55%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10 pt-16">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-white/40 text-[11px] tracking-widest uppercase hover:text-slate-400 transition-colors mb-8"
          >
            ← Back to Services
          </Link>
          <span className="section-label">Practice Area</span>
          <h1 className="section-title-white text-5xl md:text-7xl max-w-4xl">
            {service.title}
          </h1>
          <div className="gold-divider" />
          <p className="text-white/55 max-w-2xl text-sm md:text-base leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="section-label">Overview</span>
            <h2 className="section-title text-3xl md:text-4xl mb-6">
              Strategic counsel tailored to your matter
            </h2>
            <div className="gold-divider" />
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl">
              {service.longDescription}
            </p>
          </div>

          <div className="bg-[#faf8f3] border border-slate-200 p-8 md:p-10">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c] font-semibold mb-5">
              Key Services
            </p>
            <ul className="space-y-4">
              {service.features.map((feature) => (
                <li key={feature.title} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#c9a84c] shrink-0" />
                  <div>
                    <h3 className="text-[#0a1628] text-sm font-semibold tracking-wide uppercase">
                      {feature.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mt-1">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#faf8f3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="section-label">Sub-Services</span>
            <h2 className="section-title">Case Types & Advisory Scope</h2>
            <div className="gold-divider" />
            <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
              Each practice area is structured around the matters clients most
              often need help with.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-t border-slate-200">
            {(service.caseTypes || []).map((ct, i) => {
              const isOpen = openIndex === i;
              const preview =
                ct.description.length > 160
                  ? ct.description.slice(0, 160) + "..."
                  : ct.description;
              const full = ct.details || ct.description;
              return (
                <div
                  key={ct.title}
                  className="group border-r border-b border-slate-200 bg-white p-8 transition-all duration-500 hover:bg-[#0a1628]"
                >
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-10 h-10  rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/10 flex items-center justify-center text-[#c9a84c] text-lg font-serif transition-transform duration-300 group-hover:scale-110">
                      {(() => {
                        const Icon = getCaseTypeIcon(ct.title);
                        return <Icon className="text-xl" />;
                      })()}
                    </div>
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c] font-semibold group-hover:text-white/70 transition-colors"
                    >
                      {isOpen ? "Learn less" : "Learn more"}
                    </button>
                  </div>

                  <h3 className="font-serif text-2xl text-[#0a1628] group-hover:text-white transition-colors mb-3">
                    {ct.title}
                  </h3>

                  <div className="text-slate-500 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                    <p>{isOpen ? full : preview}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="section-label">Lawyers</span>
            <h2 className="section-title">Our Team for This Matter</h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {lawyerCards.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="py-24 bg-[#faf8f3]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-14">
              <span className="section-label">Related Services</span>
              <h2 className="section-title">Connected Practice Areas</h2>
              <div className="gold-divider" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t border-slate-200">
              {relatedServices.map((related) =>
                (() => {
                  const RelatedIcon = related.icon;

                  return (
                    <Link
                      key={related.slug}
                      to={`/services/${related.slug}`}
                      className="group border-r border-b border-slate-200 bg-white p-8 transition-all duration-500 hover:bg-[#0a1628]"
                    >
                      <div className="text-3xl mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:text-white">
                        <RelatedIcon />
                      </div>
                      <h3 className="font-serif text-2xl text-[#0a1628] group-hover:text-white transition-colors mb-3">
                        {related.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                        {related.description}
                      </p>
                    </Link>
                  );
                })(),
              )}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#c9a84c] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl text-[#0a1628] font-light mb-4">
            Ready to discuss your matter?
          </h2>
          <p className="text-[#0a1628]/75 text-sm mb-8 leading-relaxed">
            Speak with our team about the right strategy, timeline, and next
            steps for your case.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#0a1628] text-white px-10 py-4 text-xs tracking-widest uppercase font-semibold hover:bg-[#122040] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
