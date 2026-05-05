import TeamCard from "../components/TeamCard";
import { teamMembers } from "../assets/userData";

export default function About() {
  return (
    <main className="">
      {/* Page Header */}
      <section className="bg-[#0a1628] py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 70% 50%, #c9a84c 0%, transparent 60%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg, transparent, transparent 80px,
              rgba(201,168,76,0.15) 80px, rgba(201,168,76,0.15) 81px
            ), repeating-linear-gradient(
              90deg, transparent, transparent 80px,
              rgba(201,168,76,0.15) 80px, rgba(201,168,76,0.15) 81px
            )`,
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10 pt-16">
          <span className="text-[11px] tracking-[0.35em] uppercase text-[#c9a84c] font-semibold block mb-4">
            About the Firm
          </span>
          <h1 className="font-serif text-white text-4xl md:text-6xl lg:text-7xl font-light leading-tight max-w-3xl mb-6">
            Vijai Bhava Law Firm
          </h1>
          <div className="w-12 h-px bg-[#c9a84c] mb-8" />
          <p className="text-white/70 max-w-2xl text-sm leading-relaxed">
            For over four decades, Vijai Bhava Law Firm has provided premium,
            strategically focused legal counsel to a selective roster of
            individuals, startups, and enterprises.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[11px] tracking-[0.35em] uppercase text-[#c9a84c] font-semibold block mb-4">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#0a1628] font-light mb-6 leading-tight">
              Four Decades of
              <br />
              <em className="not-italic text-[#c9a84c]">Strategic Counsel</em>
            </h2>
            <div className="w-12 h-px bg-[#c9a84c] mb-8" />
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Vijai Bhava Law Firm was founded with a commitment to deliver
              sophisticated, outcome-driven counsel. Over 41 years, we have
              evolved into a trusted partner for clients who require both
              strategic foresight and rigorous advocacy.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our practice serves a diverse client base — from emerging
              technology companies to global enterprises and private individuals
              — always with a focus on clarity, integrity, and measurable
              results.
            </p>
          </div>

          {/* Stats block */}
          <div className="grid grid-cols-2 gap-0 border border-slate-100 bg-[#faf8f3] shadow-sm">
            {[
              { num: "1985", label: "Year Founded" },
              { num: "2,400+", label: "Cases Won" },
              { num: "48+", label: "Attorneys" },
              { num: "12", label: "Office Locations" },
            ].map((s) => (
              <div
                key={s.label}
                className="border-r border-b border-slate-100 p-12 text-center last:border-r-0 even:border-r-0"
              >
                <div className="font-serif text-4xl md:text-5xl text-[#c9a84c] font-light mb-3">
                  {s.num}
                </div>
                <div className="text-slate-600 text-[8px] md:text-[10px] tracking-widest uppercase font-semibold">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise (About) */}
      <section className="py-24 bg-[#0a1628] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #c9a84c 0%, transparent 50%), radial-gradient(circle at 80% 50%, #c9a84c 0%, transparent 50%)`,
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <span className="text-[11px] tracking-[0.35em] uppercase text-[#c9a84c] font-semibold block mb-4">
              Our Promise
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light">
              How We Deliver Results
            </h2>
            <div className="w-12 h-px bg-[#c9a84c] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Strategic Precision",
                text: "Tailored strategies focused on clear commercial outcomes.",
              },
              {
                title: "Absolute Transparency",
                text: "Open advice, clear billing, and direct communication.",
              },
              {
                title: "Relentless Advocacy",
                text: "Assertive representation both in negotiations and in court.",
              },
              {
                title: "Future-Proof Counsel",
                text: "Advice built to withstand regulatory and market change.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="group p-8 border border-white/10 hover:border-[#c9a84c] transition-all duration-300 hover:-translate-y-1"
              >
                <h4 className="font-serif text-lg font-semibold mb-3 text-white group-hover:text-[#c9a84c] transition-colors">
                  {p.title}
                </h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Golden Rule Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="border-l-4 border-[#c9a84c] pl-8 py-10 bg-[#faf8f3]">
            {/* Title */}
            <div className="text-[11px] tracking-[0.3em] uppercase text-[#c9a84c] font-semibold mb-4">
              Our Golden Rule
            </div>

            {/* Quote */}
            <p className="font-serif italic text-xl md:text-2xl text-[#0a1628] mb-4 leading-relaxed">
              "We treat your legal challenges as our own. We provide the
              sophistication of a global firm with the personal attention of a
              dedicated partner."
            </p>

            {/* Caption */}
            <div className="text-slate-600 text-sm font-semibold tracking-wide">
              A promise from every partner at Vijai Bhava Law Firm.
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[16px] tracking-[0.35em] uppercase text-[#c9a84c] font-semibold block mb-4">
              Our Foundation
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-[#0a1628]">
              Mission & Vision
            </h2>
            <div className="w-12 h-px bg-[#c9a84c] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="col-span-1 md:col-span-2 p-10 bg-[#faf8f3] border border-slate-100">
              <h3 className="font-serif text-2xl text-[#0a1628] mb-4 font-semibold">
                Our Mission
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We deliver precise, commercially minded legal advice that helps
                clients make confident decisions. Our approach pairs rigorous
                preparation with a practical focus on risk mitigation and value.
              </p>
            </div>

            <div className="group p-10 bg-white border border-slate-100 hover:border-[#c9a84c]/30 hover:shadow-md transition-all duration-300">
              <h3 className="font-serif text-xl text-[#0a1628] mb-4 font-semibold group-hover:text-[#c9a84c] transition-colors">
                Strategic Excellence
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Litigation-ready and transaction-savvy counsel crafted to meet
                both immediate needs and long-term objectives.
              </p>
            </div>

            <div className="group p-10 bg-white border border-slate-100 hover:border-[#c9a84c]/30 hover:shadow-md transition-all duration-300">
              <h3 className="font-serif text-xl text-[#0a1628] mb-4 font-semibold group-hover:text-[#c9a84c] transition-colors">
                Integrity & Transparency
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Open communication, clear fee structures, and principled
                guidance at every step of the engagement.
              </p>
            </div>

            <div className="group p-10 bg-white border border-slate-100 hover:border-[#c9a84c]/30 hover:shadow-md transition-all duration-300">
              <h3 className="font-serif text-xl text-[#0a1628] mb-4 font-semibold group-hover:text-[#c9a84c] transition-colors">
                Future-Ready Advocacy
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Proactive counsel designed for emerging industries and the
                evolving regulatory landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-28 bg-[#faf8f3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[0.35em] uppercase text-[#c9a84c] font-semibold block mb-4">
              Our People
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-[#0a1628]">
              Leadership Team
            </h2>
            <div className="w-12 h-px bg-[#c9a84c] mx-auto mt-6" />
            <p className="text-slate-600 text-sm max-w-2xl mx-auto mt-6 leading-relaxed">
              Meet the attorneys who lead our firm — each a distinguished leader
              in their field.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.slice(0, 4).map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
