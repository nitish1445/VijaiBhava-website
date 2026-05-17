import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import Counters from "../components/Counters";
import Testimonials from "../components/Testimonials";
import CTAAbout from "../components/CTAAbout";
import { Link } from "react-router-dom";
import {
  FaBalanceScale,
  FaShieldAlt,
  FaLightbulb,
  FaChessKnight,
  FaEye,
  FaGavel,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

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
            <div className="group flex flex-col justify-between p-8 border border-black/5 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="w-10 h-10 flex items-center justify-center bg-[#c9a84c]/10 rounded-full mb-6 transition-all duration-300 group-hover:bg-[#c9a84c]">
                <FaBalanceScale className="text-[#c9a84c] text-lg transition-all duration-300 group-hover:text-black" />
              </div>

              <div className="w-6 h-px bg-[#c9a84c] mb-6 transition-all duration-300 group-hover:w-10" />

              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#0a1628] mb-4">
                Strategic Excellence
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                We don't just provide legal opinions; we deliver strategic
                roadmaps—ensuring every legal decision aligns with your
                long-term objectives.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="group flex flex-col justify-between p-8 border border-black/5 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="w-10 h-10 flex items-center justify-center bg-[#c9a84c]/10 rounded-full mb-6 transition-all duration-300 group-hover:bg-[#c9a84c]">
                <FaShieldAlt className="text-[#c9a84c] text-lg transition-all duration-300 group-hover:text-black" />
              </div>

              <div className="w-6 h-px bg-[#c9a84c] mb-6 transition-all duration-300 group-hover:w-10" />

              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#0a1628] mb-4">
                Integrity & Transparency
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                We prioritize clarity and honesty—building long-term
                relationships through ethical practice and transparent
                communication.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="group flex flex-col justify-between p-8 border border-black/5 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="w-10 h-10 flex items-center justify-center bg-[#c9a84c]/10 rounded-full mb-6 transition-all duration-300 group-hover:bg-[#c9a84c]">
                <FaLightbulb className="text-[#c9a84c] text-lg transition-all duration-300 group-hover:text-black" />
              </div>

              <div className="w-6 h-px bg-[#c9a84c] mb-6 transition-all duration-300 group-hover:w-10" />

              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#0a1628] mb-4">
                Future-Ready Advocacy
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
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
              person, a family, or a business that has placed its trust in us...
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="group p-8 border border-white/10 hover:border-[#c9a84c] transition-all duration-300 hover:-translate-y-1">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#c9a84c]/10 mb-5 transition-all duration-300 group-hover:bg-[#c9a84c]">
                <FaChessKnight className="text-[#c9a84c] group-hover:text-black transition-all duration-300" />
              </div>

              <h3 className="font-serif text-lg font-semibold mb-3 group-hover:text-[#c9a84c] transition-colors">
                Strategic Precision
              </h3>

              <p className="text-white/60 text-sm leading-relaxed">
                We look beyond the surface of legal issues—applying the law
                strategically...
              </p>
            </div>

            {/* Card 2 */}
            <div className="group p-8 border border-white/10 hover:border-[#c9a84c] transition-all duration-300 hover:-translate-y-1">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#c9a84c]/10 mb-5 transition-all duration-300 group-hover:bg-[#c9a84c]">
                <FaEye className="text-[#c9a84c] group-hover:text-black transition-all duration-300" />
              </div>

              <h3 className="font-serif text-lg font-semibold mb-3 group-hover:text-[#c9a84c] transition-colors">
                Absolute Transparency
              </h3>

              <p className="text-white/60 text-sm leading-relaxed">
                No hidden agendas, no unnecessary complexity...
              </p>
            </div>

            {/* Card 3 */}
            <div className="group p-8 border border-white/10 hover:border-[#c9a84c] transition-all duration-300 hover:-translate-y-1">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#c9a84c]/10 mb-5 transition-all duration-300 group-hover:bg-[#c9a84c]">
                <FaGavel className="text-[#c9a84c] group-hover:text-black transition-all duration-300" />
              </div>

              <h3 className="font-serif text-lg font-semibold mb-3 group-hover:text-[#c9a84c] transition-colors">
                Relentless Advocacy
              </h3>

              <p className="text-white/60 text-sm leading-relaxed">
                From high-stakes disputes to complex regulatory matters...
              </p>
            </div>

            {/* Card 4 */}
            <div className="group p-8 border border-white/10 hover:border-[#c9a84c] transition-all duration-300 hover:-translate-y-1">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#c9a84c]/10 mb-5 transition-all duration-300 group-hover:bg-[#c9a84c]">
                <FaLightbulb className="text-[#c9a84c] group-hover:text-black transition-all duration-300" />
              </div>

              <h3 className="font-serif text-lg font-semibold mb-3 group-hover:text-[#c9a84c] transition-colors">
                Future-Proof Counsel
              </h3>

              <p className="text-white/60 text-sm leading-relaxed">
                We stay ahead of evolving regulations...
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

      {/* How We Work */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="section-label">Client Experience</span>
              <h2 className="section-title">
                How We Build Strong <br />
                <em className="not-italic text-[#c9a84c]">Legal Outcomes</em>
              </h2>
            </div>
            <Link
              to="/contact"
              className="btn-gold self-start md:self-auto shrink-0"
            >
              Start a Consultation →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="group border border-slate-100 p-8 hover:border-[#c9a84c]/40 hover:shadow-lg transition-all duration-300">
              <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#c9a84c]/10 mb-5 group-hover:bg-[#c9a84c] transition-all duration-300">
                <FaUsers className="text-[#c9a84c] group-hover:text-[#0a1628] transition-colors duration-300" />
              </div>
              <span className="text-[#c9a84c] text-[10px] tracking-[0.3em] uppercase font-semibold group-hover:text-[#0a1628]">
                Step 01
              </span>
              <h3 className="font-serif text-xl text-[#0a1628] mt-3 mb-4 leading-snug group-hover:text-[#c9a84c] transition-colors duration-300">
                Understand Your Goals
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                We begin with deep listening to map your legal risk, priorities,
                and business context before recommending a direction.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[#0a1628] hover:text-[#c9a84c] transition-colors"
              >
                Our Philosophy <FaArrowRight className="text-[10px]" />
              </Link>
            </article>

            <article className="group border border-slate-100 p-8 hover:border-[#c9a84c]/40 hover:shadow-lg transition-all duration-300">
              <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#c9a84c]/10 mb-5 group-hover:bg-[#c9a84c] transition-all duration-300">
                <FaBalanceScale className="text-[#c9a84c] group-hover:text-[#0a1628] transition-colors duration-300" />
              </div>
              <span className="text-[#c9a84c] text-[10px] tracking-[0.3em] uppercase font-semibold group-hover:text-[#0a1628]">
                Step 02
              </span>
              <h3 className="font-serif text-xl text-[#0a1628] mt-3 mb-4 leading-snug group-hover:text-[#c9a84c] transition-colors duration-300">
                Build a Tailored Strategy
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Every matter gets a custom legal roadmap, combining negotiation,
                compliance, and litigation planning where needed.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[#0a1628] hover:text-[#c9a84c] transition-colors"
              >
                Explore Services <FaArrowRight className="text-[10px]" />
              </Link>
            </article>

            <article className="group border border-slate-100 p-8 hover:border-[#c9a84c]/40 hover:shadow-lg transition-all duration-300">
              <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#c9a84c]/10 mb-5 group-hover:bg-[#c9a84c] transition-all duration-300">
                <FaGavel className="text-[#c9a84c] group-hover:text-[#0a1628] transition-colors duration-300" />
              </div>
              <span className="text-[#c9a84c] text-[10px] tracking-[0.3em] uppercase font-semibold group-hover:text-[#0a1628]">
                Step 03
              </span>
              <h3 className="font-serif text-xl text-[#0a1628] mt-3 mb-4 leading-snug group-hover:text-[#c9a84c] transition-colors duration-300">
                Execute With Precision
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Our team drives timely execution and clear communication from
                first filing to final resolution.
              </p>
              <Link
                to="/people"
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[#0a1628] hover:text-[#c9a84c] transition-colors"
              >
                Meet the Team <FaArrowRight className="text-[10px]" />
              </Link>
            </article>
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
