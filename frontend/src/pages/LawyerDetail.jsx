import { useParams, Link } from "react-router-dom";
import { teamMembers } from "../assets/data";

export default function LawyerDetail() {
  const { id } = useParams();
  const lawyer = teamMembers.find((m) => m.id === id);

  if (!lawyer) {
    return (
      <main className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-3xl text-[#0a1628] mb-4">Attorney Not Found</h1>
        <Link to="/people" className="btn-gold">Back to Our People</Link>
      </main>
    );
  }

  return (
    <main className="">
      {/* Header band */}
      <section className="bg-[#0a1628] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `radial-gradient(circle at 60% 40%, #c9a84c 0%, transparent 60%)` }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10 pt-16">
          <Link to="/people" className="inline-flex items-center gap-2 text-white/40 text-[11px] tracking-widest uppercase hover:text-[#c9a84c] transition-colors mb-8">
            ← Back to Our People
          </Link>
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Avatar */}
            <div className="w-36 h-36 rounded-full bg-[#c9a84c]/20 border-2 border-[#c9a84c]/40 flex items-center justify-center shrink-0">
              <span className="font-serif text-5xl text-[#c9a84c]/80 font-light">
                {lawyer.name.charAt(0)}
              </span>
            </div>
            {/* Name */}
            <div>
              <span className="text-[#c9a84c] text-[10px] tracking-[0.4em] uppercase font-semibold">
                {lawyer.specialty}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl text-white font-light mt-2 mb-2">
                {lawyer.name}
              </h1>
              <p className="text-white/50 text-sm">{lawyer.title}</p>
              <div className="flex gap-3 mt-5">
                {["Email", "LinkedIn", "vCard"].map((btn) => (
                  <button key={btn} className="btn-gold text-[10px] py-2 px-4">{btn}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left: Bio */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <span className="section-label">Biography</span>
              <p className="text-slate-600 text-sm leading-relaxed mt-3">
                {lawyer.bio}
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mt-4">
                {lawyer.name} has represented clients in landmark cases that
                have shaped legal precedent across the nation. Known for
                meticulous preparation and innovative legal arguments,{" "}
                {lawyer.name.split(" ")[0]} consistently delivers exceptional
                results for clients facing the most complex legal challenges.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mt-4">
                Prior to joining Harrington & Associates, {lawyer.name.split(" ")[0]} clerked
                for the U.S. Court of Appeals and practiced at two leading
                national firms. {lawyer.name.split(" ")[0]} holds a J.D. from Harvard Law
                School, where they graduated magna cum laude, and a B.A. from
                Yale University.
              </p>
            </div>

            {/* Notable Matters */}
            <div>
              <span className="section-label">Notable Matters</span>
              <div className="space-y-0 border-l border-t border-slate-200 mt-4">
                {[
                  "Secured $180M verdict for client in complex commercial dispute against Fortune 50 company.",
                  "Led cross-border M&A transaction valued at $2.3B involving parties in 6 jurisdictions.",
                  "Successfully defended tech startup in high-profile IP infringement lawsuit, preserving core product.",
                  "Negotiated landmark collective bargaining agreement affecting 12,000 workers nationally.",
                ].map((matter, i) => (
                  <div key={i} className="border-r border-b border-slate-200 p-5 flex gap-4 group hover:bg-[#faf8f3] transition-colors">
                    <span className="text-[#c9a84c] font-serif text-lg shrink-0 mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-slate-600 text-sm leading-relaxed">{matter}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Sidebar */}
          <div className="space-y-8">
            {/* Practice Areas */}
            <div className="bg-[#faf8f3] p-7 border border-slate-200">
              <span className="section-label">Practice Areas</span>
              <ul className="space-y-2 mt-3">
                {[lawyer.specialty, "General Litigation", "Appellate", "Regulatory"].map((area) => (
                  <li key={area} className="flex items-center gap-2 text-slate-600 text-xs">
                    <span className="w-1 h-1 rounded-full bg-[#c9a84c]" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div className="bg-[#faf8f3] p-7 border border-slate-200">
              <span className="section-label">Education</span>
              <ul className="space-y-4 mt-3">
                {[
                  { school: "Harvard Law School", degree: "J.D., Magna Cum Laude" },
                  { school: "Yale University", degree: "B.A., Political Science" },
                ].map((e) => (
                  <li key={e.school}>
                    <p className="text-[#0a1628] text-sm font-medium">{e.school}</p>
                    <p className="text-slate-500 text-[11px]">{e.degree}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Admissions */}
            <div className="bg-[#faf8f3] p-7 border border-slate-200">
              <span className="section-label">Bar Admissions</span>
              <ul className="space-y-2 mt-3">
                {["New York", "California", "U.S. Supreme Court", "U.S. Court of Appeals"].map((bar) => (
                  <li key={bar} className="text-slate-600 text-xs flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#c9a84c]" />
                    {bar}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact CTA */}
            <div className="bg-[#0a1628] p-7">
              <h4 className="font-serif text-white text-xl mb-3">
                Work with {lawyer.name.split(" ")[0]}
              </h4>
              <p className="text-white/50 text-xs leading-relaxed mb-5">
                Schedule a confidential consultation to discuss your legal matter.
              </p>
              <Link to="/contact" className="btn-gold block text-center text-[11px]">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
