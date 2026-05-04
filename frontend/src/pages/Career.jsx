import { useState } from "react";

const openings = [
  { title: "Associate Attorney – Corporate", dept: "Corporate Law", location: "New York, NY", type: "Full-Time", exp: "2–4 years" },
  { title: "Senior Associate – Litigation", dept: "Litigation", location: "Los Angeles, CA", type: "Full-Time", exp: "4–7 years" },
  { title: "Partner-Track Attorney – IP", dept: "Intellectual Property", location: "New York, NY", type: "Full-Time", exp: "6+ years" },
  { title: "Paralegal – Real Estate", dept: "Real Estate", location: "New York, NY", type: "Full-Time", exp: "1–3 years" },
  { title: "Legal Intern – Summer Program", dept: "Multiple", location: "New York, NY", type: "Internship", exp: "Law Student" },
  { title: "Associate Attorney – Employment", dept: "Employment Law", location: "Chicago, IL", type: "Full-Time", exp: "2–5 years" },
  { title: "Lateral Partner – Tax", dept: "Tax Law", location: "New York, NY", type: "Partnership", exp: "10+ years" },
];

const benefits = [
  { icon: "💼", title: "Competitive Compensation", desc: "Market-leading salaries, performance bonuses, and profit sharing for senior attorneys." },
  { icon: "🏥", title: "Premium Healthcare", desc: "Comprehensive medical, dental, and vision coverage for you and your family." },
  { icon: "📚", title: "CLE & Development", desc: "Generous CLE budget, conference attendance, and internal mentorship programs." },
  { icon: "🌍", title: "Pro Bono Program", desc: "50 hours of paid pro bono work annually with dedicated pro bono counsel." },
  { icon: "🏡", title: "Flexible Work", desc: "Hybrid remote options with modern, fully-equipped office spaces." },
  { icon: "🎓", title: "Law School Loan Assistance", desc: "Student loan repayment assistance program for associates." },
];

export default function Career() {
  const [selected, setSelected] = useState(null);

  return (
    <main className="">
      {/* Header */}
      <section className="bg-[#0a1628] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `radial-gradient(circle at 75% 40%, #c9a84c 0%, transparent 60%)` }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10 pt-16">
          <span className="section-label">Join Our Team</span>
          <h1 className="section-title-white text-5xl md:text-6xl max-w-2xl">
            Build Your Career at Harrington
          </h1>
          <div className="gold-divider" />
          <p className="text-white/50 max-w-xl text-sm leading-relaxed">
            We recruit exceptional legal talent who share our commitment to
            excellence, integrity, and client service. Explore opportunities to
            grow with one of the nation's most respected law firms.
          </p>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label">Why Harrington</span>
            <h2 className="section-title">
              A Place to Thrive,<br />
              <em className="not-italic text-[#c9a84c]">Not Just Survive</em>
            </h2>
            <div className="gold-divider mx-auto" />
            <p className="text-slate-500 text-sm max-w-xl mx-auto mt-4">
              We invest in our people because we know that great attorneys produce great outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="p-8 border border-slate-100 hover:border-[#c9a84c]/40 hover:shadow-md transition-all duration-300 group">
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="font-serif text-xl text-[#0a1628] mb-3 group-hover:text-[#c9a84c] transition-colors duration-300">{b.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="bg-[#faf8f3] py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label">Our Culture</span>
            <h2 className="section-title mb-6">
              Where Ambition Meets
              <br />
              <em className="not-italic text-[#c9a84c]">Opportunity</em>
            </h2>
            <div className="gold-divider" />
            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              At Harrington & Associates, we don't just hire attorneys — we
              develop legal leaders. Our structured mentorship program pairs
              junior associates with senior partners who are invested in your
              long-term success.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              We foster a culture of intellectual rigor, collaborative
              excellence, and genuine camaraderie. Our associates consistently
              rank us as one of the best places to practice law in the country.
            </p>
            <div className="flex gap-8 mt-8">
              {[
                { val: "#1", label: "Best NY Law Firm to Work At — NLJ 2023" },
                { val: "92%", label: "Associate Retention Rate" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-3xl text-[#c9a84c] font-light">{s.val}</div>
                  <div className="text-slate-500 text-[10px] leading-snug mt-1 max-w-[120px]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0a1628] p-10 space-y-6">
            <h3 className="font-serif text-2xl text-white font-light">What Associates Say</h3>
            <div className="w-8 h-px bg-[#c9a84c]" />
            {[
              { quote: "The mentorship I've received here has accelerated my career by years.", name: "Emily R., Associate" },
              { quote: "Harrington gives you real responsibility from day one. I was in a courtroom in my first month.", name: "David L., Litigation" },
            ].map((q) => (
              <div key={q.name} className="border-l-2 border-[#c9a84c]/40 pl-5">
                <p className="text-white/70 text-sm italic leading-relaxed mb-2">"{q.quote}"</p>
                <p className="text-[#c9a84c] text-[10px] tracking-widest uppercase">{q.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label">Open Positions</span>
            <h2 className="section-title">Current Opportunities</h2>
            <div className="gold-divider mx-auto" />
          </div>

          <div className="space-y-0 border-l border-t border-slate-200">
            {openings.map((job, i) => (
              <div
                key={i}
                className="border-r border-b border-slate-200 p-7 grid grid-cols-1 md:grid-cols-5 gap-4 items-center cursor-pointer group hover:bg-[#faf8f3] transition-colors duration-300"
                onClick={() => setSelected(selected === i ? null : i)}
              >
                <div className="md:col-span-2">
                  <h3 className="font-serif text-lg text-[#0a1628] group-hover:text-[#c9a84c] transition-colors duration-300">
                    {job.title}
                  </h3>
                  <span className="text-[#c9a84c] text-[10px] tracking-widest uppercase font-semibold">{job.dept}</span>
                </div>
                <div>
                  <p className="text-slate-500 text-xs">📍 {job.location}</p>
                </div>
                <div>
                  <span className={`inline-block text-[10px] tracking-widest uppercase px-3 py-1 font-semibold ${
                    job.type === "Full-Time" ? "bg-[#0a1628]/10 text-[#0a1628]" :
                    job.type === "Internship" ? "bg-[#c9a84c]/20 text-[#8a6820]" :
                    "bg-[#c9a84c] text-[#0a1628]"
                  }`}>
                    {job.type}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-slate-500 text-xs">{job.exp}</p>
                  <span className="text-[#c9a84c] text-lg transition-transform duration-300 group-hover:translate-x-1">
                    {selected === i ? "−" : "+"}
                  </span>
                </div>

                {/* Expand */}
                {selected === i && (
                  <div className="md:col-span-5 pt-4 border-t border-slate-100 mt-2">
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      We are seeking a talented and motivated {job.title} to join our {job.dept} practice
                      in {job.location}. The ideal candidate will have {job.exp} of relevant experience
                      and a passion for delivering exceptional client service.
                    </p>
                    <button className="btn-gold-solid text-[11px] py-2.5 px-6">
                      Apply Now
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-slate-500 text-sm text-center mt-8">
            Don't see the right fit?{" "}
            <a href="mailto:careers@harringtonlaw.com" className="text-[#c9a84c] hover:underline">
              Send us your resume
            </a>{" "}
            and we'll keep it on file.
          </p>
        </div>
      </section>
    </main>
  );
}
