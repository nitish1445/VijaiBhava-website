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
      <section className="relative overflow-hidden py-28 bg-[#f8f6f1]">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#c9a84c]/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[#0a1628]/5 blur-3xl rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="inline-flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.35em] text-[#c9a84c] font-semibold mb-5">
              Our Approach
            </span>

            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-[#0a1628]">
              The Principles Behind
              <br />
              <span className="text-[#c9a84c] italic">
                Every Legal Strategy
              </span>
            </h2>

            <p className="mt-6 text-slate-600 leading-relaxed text-sm sm:text-base">
              Our practice is built on precision, trust, and forward-thinking
              advocacy—ensuring every client engagement reflects excellence at
              every stage.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />

            {/* PILLAR 1 */}
            <article className="group relative bg-white/80 backdrop-blur-xl border border-white/40 p-10 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#c9a84c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Top */}
                <div className="flex items-center justify-between mb-10">
                  <div className="w-14 h-14 rounded-full bg-[#c9a84c]/10 flex items-center justify-center group-hover:bg-[#c9a84c] transition-all duration-500">
                    <FaBalanceScale className="text-[#c9a84c] text-2xl group-hover:text-[#0a1628] transition-colors duration-500" />
                  </div>

                  <span className="text-5xl font-serif text-[#c9a84c]/15 group-hover:text-[#c9a84c]/30 transition-colors duration-500">
                    01
                  </span>
                </div>

                {/* Divider */}
                <div className="w-8 h-px bg-[#c9a84c] mb-8 transition-all duration-500 group-hover:w-14" />

                {/* Content */}
                <h3 className="font-serif text-2xl text-[#0a1628] mb-5 font-semibold italic tracking-wide transition-colors duration-300 group-hover:text-[#c9a84c]">
                  Strategic Excellence
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm">
                  We go beyond legal guidance by crafting strategic legal
                  frameworks—ensuring every decision supports your broader
                  business and personal objectives.
                </p>
              </div>
            </article>

            {/* PILLAR 2 */}
            <article className="group relative bg-[#0a1628] text-white p-10 shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#c9a84c]/20 blur-3xl rounded-full" />

              <div className="relative z-10">
                {/* Top */}
                <div className="flex items-center justify-between mb-10">
                  <div className="w-14 h-14 rounded-full bg-[#c9a84c] flex items-center justify-center transition-all duration-500">
                    <FaShieldAlt className="text-[#0a1628] text-2xl group-hover:text-white transition-colors duration-500" />
                  </div>

                  <span className="text-5xl font-serif text-white/10">02</span>
                </div>

                {/* Divider */}
                <div className="w-8 h-px bg-[#c9a84c] mb-8 transition-all duration-500 group-hover:w-14" />

                {/* Content */}
                <h3 className="font-serif text-2xl mb-5 text-[#f8f6f1] font-semibold italic tracking-wide transition-colors duration-300 group-hover:text-[#c9a84c]">
                  Integrity & Transparency
                </h3>

                <p className="text-slate-300 leading-relaxed text-sm">
                  We believe trust is built through clarity, honesty, and
                  ethical advocacy—creating long-term relationships grounded in
                  confidence and transparency.
                </p>
              </div>
            </article>

            {/* PILLAR 3 */}
            <article className="group relative bg-white/80 backdrop-blur-xl border border-white/40 p-10 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#c9a84c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Top */}
                <div className="flex items-center justify-between mb-10">
                  <div className="w-14 h-14 rounded-full bg-[#c9a84c]/10 flex items-center justify-center group-hover:bg-[#c9a84c] transition-all duration-500">
                    <FaLightbulb className="text-[#c9a84c] text-2xl group-hover:text-[#0a1628] transition-colors duration-500" />
                  </div>

                  <span className="text-5xl font-serif text-[#c9a84c]/15 group-hover:text-[#c9a84c]/30 transition-colors duration-500">
                    03
                  </span>
                </div>

                {/* Divider */}
                <div className="w-8 h-px bg-[#c9a84c] mb-8 transition-all duration-500 group-hover:w-14" />

                {/* Content */}
                <h3 className="font-serif text-2xl text-[#0a1628] mb-5 font-semibold italic tracking-wide transition-colors duration-300 group-hover:text-[#c9a84c]">
                  Future-Ready Advocacy
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm">
                  We stay ahead of emerging regulations and evolving legal
                  landscapes—helping clients remain protected, adaptive, and
                  prepared for tomorrow’s challenges.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
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
      <section className="relative overflow-hidden py-28 bg-[#f8f6f1]">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#c9a84c]/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[#0a1628]/5 blur-3xl rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-[#c9a84c] font-semibold mb-5">
                {/* <span className="w-10 h-px bg-[#c9a84c]" /> */}
                Client Experience
              </span>

              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-[#0a1628]">
                How We Create
                <br />
                <span className="text-[#c9a84c] italic">
                  Powerful Legal Results
                </span>
              </h2>

              <p className="mt-6 text-slate-600 leading-relaxed max-w-xl">
                Every engagement is built on trust, strategic planning, and
                relentless execution tailored to your legal objectives.
              </p>
            </div>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-[#0a1628] hover:bg-[#c9a84c] text-white px-7 py-4 text-sm tracking-[0.15em] uppercase transition-all duration-500 shadow-xl hover:shadow-[#c9a84c]/30"
            >
              Start a Consultation
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Timeline Connector */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />

            {/* CARD 1 */}
            <article className="group relative bg-white/80 backdrop-blur-xl border border-white/40 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#c9a84c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-full bg-[#c9a84c]/10 flex items-center justify-center group-hover:bg-[#c9a84c] transition-all duration-500">
                    <FaUsers className="text-[#c9a84c] text-2xl group-hover:text-[#0a1628] transition-colors duration-500 group-hover:scale-105" />
                  </div>

                  <span className="text-5xl font-serif text-[#c9a84c]/15 group-hover:text-[#c9a84c]/30 transition-colors duration-500">
                    01
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#0a1628] mb-4 transition-all duration-300 font-semibold italic tracking-wide group-hover:text-[#c9a84c]">
                  Understand Your Goals
                </h3>

                <p className="text-slate-600 leading-relaxed mb-8 text-sm">
                  We begin with deep listening to understand your priorities,
                  business concerns, legal exposure, and long-term objectives.
                </p>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#0a1628] hover:text-[#c9a84c] transition-colors"
                >
                  Our Philosophy
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </article>

            {/* CARD 2 */}
            <article className="group relative bg-[#0a1628] text-white p-8 shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#c9a84c]/20 blur-3xl rounded-full" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-full bg-[#c9a84c] flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                    <FaBalanceScale className="text-[#0a1628] text-2xl group-hover:text-white transition-colors duration-300" />
                  </div>

                  <span className="text-5xl font-serif text-white/10">02</span>
                </div>

                <h3 className="font-serif text-2xl mb-4 text-[#f8f6f1] transition-all duration-300 font-semibold italic tracking-wide group-hover:text-[#c9a84c]">
                  Build a Tailored Strategy
                </h3>

                <p className="text-slate-300 leading-relaxed mb-8 text-sm">
                  We design a precise legal roadmap aligned with negotiation,
                  compliance, litigation, and risk mitigation priorities.
                </p>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-sm text-[#c9a84c] hover:text-white transition-colors"
                >
                  Explore Services
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </article>

            {/* CARD 3 */}
            <article className="group relative bg-white/80 backdrop-blur-xl border border-white/40 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#c9a84c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-full bg-[#c9a84c]/10 flex items-center justify-center group-hover:bg-[#c9a84c] transition-all duration-500">
                    <FaGavel className="text-[#c9a84c] text-2xl group-hover:text-[#0a1628] transition-colors duration-500 group-hover:scale-105" />
                  </div>

                  <span className="text-5xl font-serif text-[#c9a84c]/15 group-hover:text-[#c9a84c]/30 transition-colors duration-500">
                    03
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#0a1628] mb-4 transition-all duration-300 font-semibold italic tracking-wide group-hover:text-[#c9a84c]">
                  Execute With Precision
                </h3>

                <p className="text-slate-600 leading-relaxed mb-8 text-sm">
                  From first filing to final resolution, we focus on decisive
                  execution, proactive communication, and measurable outcomes.
                </p>

                <Link
                  to="/people"
                  className="inline-flex items-center gap-3 text-sm font-medium text-[#0a1628] hover:text-[#c9a84c] transition-colors"
                >
                  Meet the Team
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
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
