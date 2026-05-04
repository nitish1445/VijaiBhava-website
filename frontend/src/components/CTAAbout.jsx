import { Link } from "react-router-dom";
import { FaBullseye, FaLock, FaClock, FaGlobe } from "react-icons/fa";

export default function CTAAbout() {
  return (
    <section className="relative py-28 bg-[#faf8f3] overflow-hidden">
      {/* Decorative left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#c9a84c] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <span className="section-label">Why Choose Us</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#0a1628] font-light leading-tight mb-6">
              A Firm Built on
              <br />
              <em className="not-italic text-[#c9a84c]">Integrity & Results</em>
            </h2>
            <div className="w-12 h-px bg-[#c9a84c] mb-8" />
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              For over four decades, Vijai Bhava Law Firm has been the legal
              partner of choice for clients who expect strategic counsel and
              measured results. Our attorneys combine deep expertise with a
              practical focus on outcomes.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mb-10">
              We don't just practice law — we build relationships, understand
              your goals, and fight tirelessly to protect your interests.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about" className="btn-gold">
                Our Story
              </Link>
              <Link to="/people" className="btn-gold-solid">
                Meet the Team
              </Link>
            </div>
          </div>

          {/* Right: Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                icon: FaBullseye,
                title: "Results-Driven",
                desc: "Every strategy is built around achieving the best possible outcome for your specific situation.",
              },
              {
                icon: FaLock,
                title: "Confidential",
                desc: "Attorney-client privilege is sacred to us. Your information stays protected at all times.",
              },
              {
                icon: FaClock,
                title: "Responsive",
                desc: "We respond within hours, not days. Your legal matters deserve immediate attention.",
              },
              {
                icon: FaGlobe,
                title: "National Reach",
                desc: "With partners across nation, we handle every state matters with ease and expertise.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-white p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-[#c9a84c]/30 transition-all duration-300 group"
              >
                <div className="text-2xl mb-3">
                  {(() => {
                    const Icon = f.icon;
                    return (
                      <Icon className="text-[#c9a84c] group-hover:scale-110 transition-transform duration-300" />
                    );
                  })()}
                </div>

                <h4 className="font-serif text-lg text-[#0a1628] mb-2 group-hover:text-[#c9a84c] transition-colors duration-300">
                  {f.title}
                </h4>

                <p className="text-slate-500 text-xs leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
