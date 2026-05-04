import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import Counters from "../components/Counters";
import Testimonials from "../components/Testimonials";
import CTAAbout from "../components/CTAAbout";
import { Link } from "react-router-dom";

const insights = [
  {
    category: "Corporate Law",
    title: "Navigating M&A in a Volatile Market",
    date: "March 12, 2024",
    read: "5 min read",
  },
  {
    category: "IP Law",
    title: "Protecting Your Brand in the Digital Age",
    date: "February 28, 2024",
    read: "4 min read",
  },
  {
    category: "Employment",
    title: "New Federal Guidelines for Remote Work Compliance",
    date: "February 14, 2024",
    read: "6 min read",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <Hero />

      {/* Core Pillars */}
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[16px] tracking-[0.35em] uppercase text-[#c9a84c] font-semibold">
              Our Approach
            </span>

            <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#0a1628] mt-4">
              The Pillars That Define Our Practice
            </h2>

            <div className="w-10 h-px bg-[#c9a84c] mx-auto mt-6" />
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Pillar 1 */}
            <div className="group relative flex flex-col justify-between p-8 border border-black/5 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              {/* Top Accent */}
              <div className="w-6 h-px bg-[#c9a84c] mb-6 transition-all duration-300 group-hover:w-10" />

              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#0a1628] mb-4  transition-colors">
                Strategic Excellence
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed transition-colors">
                We don't just provide legal opinions; we deliver strategic
                roadmaps—ensuring every legal decision aligns with your
                long-term objectives.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="group relative flex flex-col justify-between p-8 border border-black/5 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="w-6 h-px bg-[#c9a84c] mb-6 transition-all duration-300 group-hover:w-10" />

              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#0a1628] mb-4  transition-colors">
                Integrity & Transparency
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed transition-colors">
                We prioritize clarity and honesty—building long-term
                relationships through ethical practice and transparent
                communication.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="group relative flex flex-col justify-between p-8 border border-black/5 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="w-6 h-px bg-[#c9a84c] mb-6 transition-all duration-300 group-hover:w-10" />

              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#0a1628] mb-4 transition-colors">
                Future-Ready Advocacy
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed transition-colors">
                We stay ahead of evolving regulations and
                technologies—protecting your interests today while preparing you
                for tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      
      <section className="py-24 bg-[#0a1628] text-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[0.35em] uppercase text-[#c9a84c]">
              Our Commitment
            </span>

            <h2 className="text-2xl sm:text-3xl font-serif font-light mt-4">
              A Promise Built on Trust & Precision
            </h2>

            <div className="w-10 h-px bg-[#c9a84c] mx-auto mt-6" />
          </div>

          {/* Intro */}
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-white/70 text-sm leading-relaxed">
              At Vijai Bhava Law Firm, we understand that behind every case is a
              person, a family, or a business that has placed its trust in us.
              Whether you engage with us in Rohini or digitally, we make a clear
              commitment—to protect your interests and deliver meaningful
              results.
            </p>
          </div>

          {/* Promise Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="group p-8 border border-white/10 hover:border-[#c9a84c] transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-serif text-lg font-semibold mb-3 text-white group-hover:text-[#c9a84c] transition-colors">
                Strategic Precision
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                We look beyond the surface of legal issues—applying the law
                strategically to protect your future and align outcomes with
                your broader goals.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group p-8 border border-white/10 hover:border-[#c9a84c] transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-serif text-lg font-semibold mb-3 text-white group-hover:text-[#c9a84c] transition-colors">
                Absolute Transparency
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                No hidden agendas, no unnecessary complexity—just clear, honest
                communication about risks, strategy, and cost at every stage.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group p-8 border border-white/10 hover:border-[#c9a84c] transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-serif text-lg font-semibold mb-3 text-white group-hover:text-[#c9a84c] transition-colors">
                Relentless Advocacy
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                From high-stakes disputes to complex regulatory matters, we
                represent your interests with focus, determination, and
                discipline.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group p-8 border border-white/10 hover:border-[#c9a84c] transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-serif text-lg font-semibold mb-3 text-white group-hover:text-[#c9a84c] transition-colors">
                Future-Proof Counsel
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                We stay ahead of evolving regulations—from compliance frameworks
                to emerging technologies—so you remain protected before risks
                arise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Quote */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="border-t border-b border-slate-100 py-12">
            <p className="font-serif italic text-2xl md:text-3xl text-[#0a1628] leading-relaxed mx-auto max-w-3xl">
              "Our mission is to ensure that whether you are a tech startup, a
              multinational corporation, or an individual, you receive
              sophisticated counsel with courtroom strength and boardroom
              strategy."
            </p>
            <div className="mt-6 w-24 h-px bg-[#c9a84c] mx-auto" />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="section-label">Practice Areas</span>
              <h2 className="section-title">
                Comprehensive Legal <br />
                <em className="not-italic text-[#c9a84c]">Services</em>
              </h2>
            </div>
            <Link
              to="/services"
              className="btn-gold self-start md:self-auto shrink-0"
            >
              All Practice Areas →
            </Link>
          </div>
          <ServicesGrid limit={8} />
        </div>
      </section>

      {/* Counters */}
      <Counters />

      {/* CTA About */}
      <CTAAbout />

      {/* Testimonials */}
      <Testimonials />

      {/* Insights Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="section-label">Latest Insights</span>
              <h2 className="section-title">
                Legal Intelligence &<br />
                <em className="not-italic text-[#c9a84c]">Perspectives</em>
              </h2>
            </div>
            <Link
              to="/insights"
              className="btn-gold self-start md:self-auto shrink-0"
            >
              All Articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((a) => (
              <Link
                to="/insights"
                key={a.title}
                className="group border border-slate-100 p-8 hover:border-[#c9a84c]/40 hover:shadow-lg transition-all duration-300"
              >
                <span className="text-[#c9a84c] text-[10px] tracking-[0.3em] uppercase font-semibold">
                  {a.category}
                </span>
                <h3 className="font-serif text-xl text-[#0a1628] mt-3 mb-4 leading-snug group-hover:text-[#c9a84c] transition-colors duration-300">
                  {a.title}
                </h3>
                <div className="w-8 h-px bg-slate-200 mb-4" />
                <div className="flex items-center gap-3 text-slate-400 text-[10px] uppercase tracking-widest">
                  <span>{a.date}</span>
                  <span>·</span>
                  <span>{a.read}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="bg-[#c9a84c] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-[#0a1628] font-light mb-4">
            Ready to Discuss Your Case?
          </h2>
          <p className="text-[#0a1628]/70 text-sm mb-10 max-w-xl mx-auto">
            Our attorneys are available for a no-obligation consultation. Let us
            help you understand your legal options today.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#0a1628] text-white px-10 py-4 text-xs tracking-widest uppercase font-semibold hover:bg-[#122040] transition-colors duration-300"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
