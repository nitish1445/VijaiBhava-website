import Counters from "../components/Counters";

const awards = [
  { year: "2024", title: "Law Firm of the Year", org: "Chambers USA", category: "Corporate Law" },
  { year: "2024", title: "Top 10 Litigation Firm", org: "The Legal 500", category: "Litigation" },
  { year: "2023", title: "Best Law Firm — NY", org: "Super Lawyers", category: "Multiple Practice Areas" },
  { year: "2023", title: "AmLaw 100 Ranking", org: "The American Lawyer", category: "Revenue & Growth" },
  { year: "2023", title: "Diversity Leader Award", org: "Minority Corporate Counsel", category: "Culture & Inclusion" },
  { year: "2022", title: "Pro Bono Award", org: "New York State Bar", category: "Community Service" },
  { year: "2022", title: "Top M&A Counsel", org: "Bloomberg Law", category: "Corporate Law" },
  { year: "2021", title: "IP Litigation Firm of the Year", org: "Managing IP", category: "Intellectual Property" },
  { year: "2021", title: "Employer of Choice", org: "National Law Journal", category: "Culture" },
  { year: "2020", title: "Real Estate Practice Excellence", org: "Real Estate Alert", category: "Real Estate" },
];

const rankings = [
  { source: "Chambers USA", rank: "Band 1", area: "Corporate/M&A" },
  { source: "The Legal 500", rank: "Top Tier", area: "Dispute Resolution" },
  { source: "Super Lawyers", rank: "Top 10", area: "New York" },
  { source: "U.S. News Best Lawyers", rank: "Tier 1", area: "7 Practice Areas" },
  { source: "Martindale-Hubbell", rank: "AV Preeminent", area: "Firm Rating" },
  { source: "Best Lawyers in America", rank: "40 Attorneys Listed", area: "Multiple Disciplines" },
];

export default function Awards() {
  return (
    <main className="">
      {/* Header */}
      <section className="bg-[#0a1628] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `radial-gradient(circle at 50% 50%, #c9a84c 0%, transparent 70%)` }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center pt-16">
          <span className="section-label">Recognition</span>
          <h1 className="section-title-white text-5xl md:text-6xl">
            Awards & Achievements
          </h1>
          <div className="gold-divider mx-auto" />
          <p className="text-white/50 max-w-xl mx-auto text-sm leading-relaxed">
            A track record of excellence recognized by the most prestigious legal
            publications and bar organizations in the nation.
          </p>
        </div>
      </section>

      {/* Counters */}
      <Counters />

      {/* Rankings */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label">Current Rankings</span>
            <h2 className="section-title">Industry Rankings</h2>
            <div className="gold-divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-slate-200">
            {rankings.map((r) => (
              <div key={r.source} className="border-r border-b border-slate-200 p-8 group hover:bg-[#0a1628] transition-colors duration-500">
                <div className="font-serif text-3xl text-[#c9a84c] font-light mb-3">{r.rank}</div>
                <h3 className="text-[#0a1628] group-hover:text-white font-medium text-sm mb-1 transition-colors duration-300">{r.source}</h3>
                <p className="text-slate-500 group-hover:text-white/50 text-xs transition-colors duration-300">{r.area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Award Timeline */}
      <section className="py-24 bg-[#faf8f3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label">Award History</span>
            <h2 className="section-title">Recent Recognition</h2>
            <div className="gold-divider mx-auto" />
          </div>

          <div className="space-y-0 border-l border-t border-slate-200">
            {awards.map((award, i) => (
              <div
                key={i}
                className="border-r border-b border-slate-200 p-8 grid grid-cols-1 md:grid-cols-5 gap-4 items-center bg-white group hover:bg-[#0a1628] transition-colors duration-500"
              >
                <div className="font-serif text-3xl text-[#c9a84c] font-light">{award.year}</div>
                <div className="md:col-span-2">
                  <h3 className="font-serif text-xl text-[#0a1628] group-hover:text-white transition-colors duration-300">{award.title}</h3>
                </div>
                <div>
                  <p className="text-[#c9a84c] text-[10px] tracking-widest uppercase font-semibold">{award.org}</p>
                </div>
                <div>
                  <span className="inline-block border border-slate-200 group-hover:border-white/20 text-slate-500 group-hover:text-white/50 text-[10px] tracking-widest uppercase px-3 py-1 transition-colors duration-300">
                    {award.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Wins Highlight */}
      <section className="py-24 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label">Landmark Cases</span>
            <h2 className="section-title-white">
              Notable Case Outcomes
            </h2>
            <div className="gold-divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                amount: "$180M",
                desc: "Verdict secured for client in complex commercial real estate dispute, one of the largest in New York state history.",
                year: "2023",
                type: "Commercial Litigation",
              },
              {
                amount: "$2.3B",
                desc: "Cross-border acquisition successfully completed for pharmaceutical client, navigating regulatory hurdles in 6 jurisdictions.",
                year: "2022",
                type: "Corporate M&A",
              },
              {
                amount: "100%",
                desc: "Patent portfolio protection rate achieved for tech startup, successfully defending 200+ patents in infringement proceedings.",
                year: "2023",
                type: "Intellectual Property",
              },
            ].map((c) => (
              <div key={c.amount} className="border border-white/10 p-8 hover:border-[#c9a84c]/40 transition-all duration-300">
                <div className="font-serif text-5xl text-[#c9a84c] font-light mb-4">{c.amount}</div>
                <p className="text-white/60 text-sm leading-relaxed mb-6">{c.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#c9a84c] text-[10px] tracking-widest uppercase font-semibold">{c.type}</span>
                  <span className="text-white/30 text-[11px]">{c.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
