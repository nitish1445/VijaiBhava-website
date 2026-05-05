import { useState } from "react";
import TeamCard from "../components/TeamCard";
import { teamMembers } from "../assets/userData";

const specialties = ["All", "Corporate Law", "Litigation", "Real Estate", "IP Law", "Employment", "Family Law", "Criminal Defense", "Tax Law",];

export default function People() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? teamMembers
    : teamMembers.filter((m) => m.specialty === filter);

  return (
    <main className="">
      {/* Header */}
      <section className="bg-[#0a1628] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `radial-gradient(circle at 80% 30%, #c9a84c 0%, transparent 60%)` }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10 pt-16">
          <span className="section-label">Our Attorneys</span>
          <h1 className="section-title-white text-4xl md:text-6xl max-w-2xl">
            Meet the People Behind the Practice
          </h1>
          <div className="gold-divider" />
          <p className="text-white/50 max-w-xl text-sm leading-relaxed">
            Our team of 48 attorneys brings together decades of combined
            experience across every major area of the law.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-[#faf8f3] border-b border-slate-200 sticky top-[60px] z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap gap-2 overflow-x-auto">
          {specialties.map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-5 py-2 text-[10px] tracking-widest uppercase font-semibold transition-all duration-200 whitespace-nowrap ${
                filter === s
                  ? "bg-[#0a1628] text-[#c9a84c]"
                  : "bg-white text-slate-500 border border-slate-200 hover:border-[#c9a84c] hover:text-[#c9a84c]"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-slate-400">
              No attorneys found in this specialty.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Diversity & Culture */}
      <section className="bg-[#0a1628] py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label">Our Culture</span>
            <h2 className="section-title-white">
              Diversity, Inclusion &<br />
              <em className="not-italic text-[#c9a84c]">Excellence</em>
            </h2>
            <div className="gold-divider" />
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              We believe a diverse team of legal minds produces the strongest
              outcomes for our clients. Our firm actively recruits talent from
              all backgrounds and has been recognized as a top employer for
              diversity in law.
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              From our mentorship programs to our pro bono commitments, we invest
              in our people and our communities with equal dedication.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              { label: "Women Partners", value: "42%" },
              { label: "Minority Attorneys", value: "38%" },
              { label: "Pro Bono Hours (2023)", value: "12,400+" },
              { label: "Avg. Attorney Tenure", value: "11 yrs" },
            ].map((stat) => (
              <div key={stat.label} className="border border-white/10 p-8 text-center hover:border-[#c9a84c]/40 transition-colors duration-300">
                <div className="font-serif text-3xl text-[#c9a84c] font-light mb-2">{stat.value}</div>
                <div className="text-white/50 text-[10px] tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
