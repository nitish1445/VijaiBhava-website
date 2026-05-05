import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a1628] py-36 md:py-48">
      {/* Background pattern */}
      <div className="absolute inset-0">
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
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#1a2f5a]/60 blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#c9a84c]/5 blur-3xl" />
      </div>

      {/* Decorative vertical line left */}
      <div className="absolute left-16 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#c9a84c]/30 to-transparent hidden xl:block" />
      <div className="absolute right-16 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#c9a84c]/30 to-transparent hidden xl:block" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
          <div className="h-px w-12 bg-[#c9a84c]" />
          <span className="text-[#c9a84c] text-[10px] tracking-[0.5em] uppercase font-semibold">
            Established 1985 <br className="sm:hidden" />
            <span className="hidden sm:inline"> · </span>
            New Delhi
          </span>
          <div className="h-px w-12 bg-[#c9a84c]" />
        </div>

        {/* Main headline */}
        <h1
          className="font-serif text-white text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          Strategic Legal Excellence
          <br />
          <em className="text-[#c9a84c] not-italic">
            Backed by 41 Years of Experience
          </em>
        </h1>

        {/* Subheading */}
        <p
          className="text-white/60 text-sm md:text-base tracking-wide leading-relaxed max-w-2xl mx-auto mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.25s", opacity: 0 }}
        >
          Delivering high-impact legal solutions for individuals, startups, and
          enterprises.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          <Link to="/contact" className="btn-gold-solid">
            Schedule Consultation
          </Link>
          <Link to="/services" className="btn-white-outline">
            Explore Services
          </Link>
        </div>

        {/* Stats row */}
        <div
          className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up"
          style={{ animationDelay: "0.55s", opacity: 0 }}
        >
          {[
            { value: "41+", label: "Years of Excellence" },
            { value: "2,400+", label: "Cases Won" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "48", label: "Expert Attorneys" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-3xl md:text-4xl text-[#c9a84c] font-light">
                {stat.value}
              </div>
              <div className="text-white/40 text-[10px] tracking-widest uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/30 text-[9px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[#c9a84c]/50 to-transparent" />
      </div>
    </section>
  );
}
