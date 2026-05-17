import jobs from "../assets/careerData";
import JobCard from "../components/JobCard";
import {
  FaBriefcase,
  FaHeartbeat,
  FaBookOpen,
  FaGlobe,
  FaHome,
  FaGraduationCap,
  FaStar,
} from "react-icons/fa";

const benefits = [
  {
    icon: FaBriefcase,
    title: "Competitive Compensation",
    desc: "Market-leading salaries, performance bonuses, and profit sharing for senior attorneys.",
  },
  {
    icon: FaHeartbeat,
    title: "Premium Healthcare",
    desc: "Comprehensive medical, dental, and vision coverage for you and your family.",
  },
  {
    icon: FaBookOpen,
    title: "CLE & Development",
    desc: "Generous CLE budget, conference attendance, and internal mentorship programs.",
  },
  {
    icon: FaGlobe,
    title: "Pro Bono Program",
    desc: "50 hours of paid pro bono work annually with dedicated pro bono counsel.",
  },
  {
    icon: FaHome,
    title: "Flexible Work",
    desc: "Hybrid remote options with modern, fully-equipped office spaces.",
  },
  {
    icon: FaGraduationCap,
    title: "Law School Loan Assistance",
    desc: "Student loan repayment assistance program for associates.",
  },
];

export default function Career() {
  return (
    <main>
      {/* Header */}
      <section className="bg-[#0a1628] py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 75% 40%, #c9a84c 0%, transparent 60%)`,
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10 pt-16">
          <span className="section-label">Join Our Team</span>
          <h1 className="section-title-white text-4xl md:text-6xl max-w-2xl">
            Build Your Career at <br /> Viaji Bhava
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
      <section className="py-24 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #c9a84c 0%, transparent 32%), radial-gradient(circle at 80% 80%, #0a1628 0%, transparent 28%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label">Why Vijai Bhava</span>
            <h2 className="section-title">
              A Place to Thrive,
              <br />
              <em className="not-italic text-[#c9a84c]">Not Just Survive</em>
            </h2>
            <div className="gold-divider mx-auto" />
            <p className="text-slate-500 text-sm max-w-xl mx-auto mt-4">
              We invest in our people because we know that great attorneys
              produce great outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="group relative flex flex-col justify-between p-8 border border-black/5 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="w-12 h-12 rounded-full border border-[#c9a84c]/25 bg-[#c9a84c]/10 flex items-center justify-center text-[#c9a84c] mb-6 transition-all duration-300 group-hover:bg-[#c9a84c] group-hover:text-[#0a1628] group-hover:scale-105">
                  {(() => {
                    const Icon = b.icon;
                    return <Icon className="text-xl" />;
                  })()}
                </div>

                <div className="w-6 h-px bg-[#c9a84c] mb-5 transition-all duration-300 group-hover:w-10" />

                <h3 className="font-serif text-xl text-[#0a1628] mb-3 group-hover:text-[#c9a84c] transition-colors duration-300">
                  {b.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {b.desc}
                </p>
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
              At Vijai Bhava Law Firm, we don't just hire attorneys — we develop
              legal leaders. Our structured mentorship program pairs junior
              associates with senior partners who are invested in your long-term
              success.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              We foster a culture of intellectual rigor, collaborative
              excellence, and genuine camaraderie. Our associates consistently
              rank us as one of the best places to practice law in the country.
            </p>
            <div className="flex gap-8 mt-8">
              {[
                {
                  val: "#1",
                  label: "Best New Delhi Law Firm to Work At - High Court 2023",
                },
                { val: "92%", label: "Associate Retention Rate" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-3xl text-[#c9a84c] font-light">
                    {s.val}
                  </div>
                  <div className="text-slate-500 text-[10px] leading-snug mt-1 max-w-[120px]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0a1628] p-10 space-y-6">
            <h3 className="font-serif text-2xl text-white font-light">
              What Associates Say
            </h3>

            <div className="w-8 h-px bg-[#c9a84c]" />

            {[
              {
                quote:
                  "The mentorship I've received here has accelerated my career by years.",
                name: "Jyoti Sharma, Partner",
                rating: 5,
              },
              {
                quote:
                  "Vijai Bhava gives you real responsibility from day one. I was in a courtroom in my first month.",
                name: "Pratham Verma, Partner",
                rating: 5,
              },
            ].map((q) => (
              <div key={q.name} className="border-l-2 border-[#c9a84c]/40 pl-5">
                {/* ⭐ Stars */}
                <div className="flex gap-1 mb-2">
                  {[...Array(q.rating)].map((_, i) => (
                    <FaStar key={i} className="text-[#c9a84c] text-xs" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/70 text-sm italic leading-relaxed mb-2">
                  "{q.quote}"
                </p>

                {/* Name */}
                <p className="text-[#c9a84c] text-[10px] tracking-widest uppercase">
                  {q.name}
                </p>
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
            {jobs.map((job) => (
              <JobCard key={job.slug} job={job} />
            ))}
          </div>

          <p className="text-slate-500 text-sm text-center mt-8">
            Don't see the right fit?{" "}
            <a
              href="mailto:india@vijaibhavalawfirm.com"
              className="text-[#c9a84c] hover:underline"
            >
              Send us your resume
            </a>{" "}
            and we'll keep it on file.
          </p>
        </div>
      </section>
    </main>
  );
}
