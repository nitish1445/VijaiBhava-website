import { useParams, Link } from "react-router-dom";
import { teamMembers } from "../assets/userData";
import { FaEnvelope, FaLinkedin, FaIdCard } from "react-icons/fa";
import maleAvatar from "../assets/maleLawyer.png";
import femaleAvatar from "../assets/femaleLawyer.png";

const actions = [
  { label: "Email", icon: FaEnvelope },
  { label: "LinkedIn", icon: FaLinkedin },
  { label: "vCard", icon: FaIdCard },
];

export default function LawyerDetail() {
  const { id } = useParams();
  const lawyer = teamMembers.find((m) => m.id === id);

  if (!lawyer) {
    return (
      <main className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-3xl text-[#0a1628] mb-4">
          Advocate Not Found
        </h1>
        <Link to="/people" className="btn-gold">
          Back to Our People
        </Link>
      </main>
    );
  }

  return (
    <main>
      {/* Header */}
      <section className="bg-[#0a1628] py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 60% 40%, #c9a84c 0%, transparent 60%)`,
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10 pt-16">
          <Link
            to="/people"
            className="inline-flex items-center gap-2 text-white/40 text-[11px] tracking-widest uppercase hover:text-slate-400 transition-colors mb-8"
          >
            ← Back to Our People
          </Link>

          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Avatar */}
            {(() => {
              const avatar =
                lawyer.image ||
                (lawyer.gender === "male"
                  ? maleAvatar
                  : lawyer.gender === "female"
                    ? femaleAvatar
                    : null);

              const initials = lawyer.name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")
                .toUpperCase();

              return avatar ? (
                <img
                  src={avatar}
                  alt={lawyer.name}
                  className="w-36 h-36 rounded-full object-cover border-2 border-[#c9a84c]/40"
                />
              ) : (
                <div className="w-36 h-36 rounded-full bg-[#c9a84c]/20 border-2 border-[#c9a84c]/40 flex items-center justify-center">
                  <span className="font-serif text-5xl text-[#c9a84c]/80">
                    {initials}
                  </span>
                </div>
              );
            })()}

            {/* Info */}
            <div>
              <span className="text-[#c9a84c] text-[10px] tracking-[0.4em] uppercase font-semibold">
                {lawyer.specialty}
              </span>

              <h1 className="font-serif text-4xl md:text-5xl text-white font-light mt-2 mb-2">
                {lawyer.name}
              </h1>

              <p className="text-white/50 text-sm">{lawyer.title}</p>

              <div className="flex gap-3 mt-5 flex-wrap">
                {actions.map((btn) => {
                  const Icon = btn.icon;
                  return (
                    <button
                      key={btn.label}
                      className="btn-gold text-[10px] py-2 px-4 flex items-center gap-2"
                    >
                      <Icon className="text-[12px]" />
                      {btn.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-10">
            {/* Bio */}
            <div>
              <span className="section-label">Biography</span>

              <p className="text-slate-600 text-sm mt-3">{lawyer.bio}</p>

              <p className="text-slate-600 text-sm mt-4">
                {lawyer.name} has represented clients in complex legal matters
                across various courts and tribunals in India. Known for
                strategic thinking and meticulous preparation,{" "}
                {lawyer.name.split(" ")[0]} delivers practical and result-driven
                legal solutions.
              </p>

              <p className="text-slate-600 text-sm mt-4">
                Prior to joining Vijai Bhava Law Firm,{" "}
                {lawyer.name.split(" ")[0]} worked with reputed law firms and
                has appeared before High Courts and the Supreme Court of India.
              </p>
            </div>

            {/* Matters */}
            <div>
              <span className="section-label">Notable Matters</span>

              <div className="border mt-4">
                {[
                  "Represented client in high-value commercial dispute before Delhi High Court.",
                  "Advised on multi-crore real estate transaction ensuring compliance.",
                  "Handled complex criminal litigation with favorable outcome.",
                  "Advised startups on funding agreements and legal structuring.",
                ].map((m, i) => (
                  <div key={i} className="p-5 border-b flex gap-4">
                    <span className="text-[#c9a84c]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-slate-600">{m}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-8">
            {/* Practice */}
            <div className="bg-[#faf8f3] p-7 border">
              <span className="section-label">Practice Areas</span>
              <ul className="mt-3 space-y-2 text-sm">
                {[
                  lawyer.specialty,
                  "Civil Litigation",
                  "Corporate Law",
                  "Regulatory Compliance",
                ].map((area) => (
                  <li key={area}>• {area}</li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div className="bg-[#faf8f3] p-7 border">
              <span className="section-label">Education</span>
              <ul className="mt-3 space-y-3">
                <li>
                  National Law University, Delhi
                  <br />
                  <span className="text-xs text-slate-500">
                    B.A. LL.B. (Hons.)
                  </span>
                </li>
                <li>
                  University of Delhi
                  <br />
                  <span className="text-xs text-slate-500">
                    LL.M. (Corporate Law)
                  </span>
                </li>
              </ul>
            </div>

            {/* Bar */}
            <div className="bg-[#faf8f3] p-7 border">
              <span className="section-label">Bar Admissions</span>
              <ul className="mt-3 space-y-2 text-sm">
                <li>Bar Council of Delhi</li>
                <li>Delhi High Court</li>
                <li>Supreme Court of India</li>
                <li>NCLT</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-[#0a1628] p-7 text-white">
              <h4 className="font-serif text-xl mb-3">
                Work with {lawyer.name.split(" ")[0]}
              </h4>
              <Link
                to="/contact"
                className="btn-gold block text-center text-xs"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
