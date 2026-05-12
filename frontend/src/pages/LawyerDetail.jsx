import { useParams, Link } from "react-router-dom";
import { teamMembers } from "../assets/userData";
import { FaEnvelope, FaLinkedin} from "react-icons/fa";
// images are provided per-team-member in `userData`

const actions = [
  { label: "Email", icon: FaEnvelope },
  { label: "LinkedIn", icon: FaLinkedin },
];

export default function LawyerDetail() {
  const { id } = useParams();
  const lawyer = teamMembers.find((m) => m.id === id);
  const email = lawyer?.email || `${lawyer?.name?.toLowerCase().replace(/\s+/g, ".")}@vijaibhavalawfirm.com`;
  const education = lawyer?.education ?? [
    {
      institution: "National Law University, Delhi",
      degree: "B.A. LL.B. (Hons.)",
    },
    {
      institution: "University of Delhi",
      degree: "LL.M. (Corporate Law)",
    },
  ];
  const barAdmissions = lawyer?.barAdmissions ?? [
    "Bar Council of Delhi",
    "Delhi High Court",
    "Supreme Court of India",
    "NCLT",
  ];

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
              const avatar = lawyer.image || null;

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
                Adv. {lawyer.name}
              </h1>

              <p className="text-white/50 text-sm">{lawyer.title}</p>

              <div className="flex gap-3 mt-5 flex-wrap">
                {actions.map((btn) => {
                  const Icon = btn.icon;
                  const isEmail = btn.label === "Email";
                  return (
                    <a
                      href={isEmail ? `mailto:${email}` : "https://www.linkedin.com"}
                      key={btn.label}
                      className="btn-gold text-[10px] py-2 px-4 flex items-center gap-2"
                      target={isEmail ? undefined : "_blank"}
                      rel={isEmail ? undefined : "noreferrer"}
                    >
                      <Icon className="text-[12px]" />
                      {btn.label}
                    </a>
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

              {(lawyer.bio || "").split(/\n\s*\n/).filter(Boolean).map((para, i) => (
                <p key={i} className="text-slate-600 text-sm mt-3">
                  {para}
                </p>
              ))}
            </div>

            {/* Matters */}
            <div>
              <span className="section-label">Notable Matters</span>

              <div className="border mt-4">
                {(lawyer.notableMatters || []).map((m, i) => (
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
                {(lawyer.practiceAreas || [lawyer.specialty]).map((area) => (
                  <li key={area}>• {area}</li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div className="bg-[#faf8f3] p-7 border">
              <span className="section-label">Education</span>
              <ul className="mt-3 space-y-3">
                {education.map((item) => (
                  <li key={`${item.institution}-${item.degree}`}>
                    {item.institution}
                    <br />
                    <span className="text-xs text-slate-500">{item.degree}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bar */}
            <div className="bg-[#faf8f3] p-7 border">
              <span className="section-label">Bar Admissions</span>
              <ul className="mt-3 space-y-2 text-sm">
                {barAdmissions.map((bar) => (
                  <li key={bar}>{bar}</li>
                ))}
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



