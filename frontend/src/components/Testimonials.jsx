import { useState } from "react";

const testimonials = [
  {
    quote:
      "Vijai Bhava Law Firm handled our company's complex merger with extraordinary skill and attention to detail. Their team was available around the clock and the outcome exceeded our expectations.",
    name: "Richard Thornton",
    title: "CEO, Thornton Capital Group",
    initials: "RT",
  },
  {
    quote:
      "I faced a serious criminal charge that threatened everything I'd built. The defense team at Vijai Bhava secured a complete dismissal. I cannot thank them enough for their relentless dedication.",
    name: "Sarah M.",
    title: "Private Client",
    initials: "SM",
  },
  {
    quote:
      "Their intellectual property team protected our portfolio of 200+ patents with remarkable efficiency. They understand the business implications, not just the legal ones.",
    name: "Dr. James Whitfield",
    title: "CTO, NexTech Innovations",
    initials: "JW",
  },
  {
    quote:
      "When our real estate deal nearly collapsed, Vijai Bhava's team stepped in and saved a $50M transaction. Their expertise and calm under pressure is second to none.",
    name: "Linda Chen",
    title: "Managing Director, Chen Properties",
    initials: "LC",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="bg-[#0a1628] py-28 relative overflow-hidden">
      {/* Background detail */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #c9a84c 0%, transparent 50%), radial-gradient(circle at 80% 50%, #c9a84c 0%, transparent 50%)`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Label */}
        <div className="text-center mb-16">
          <span className="section-label">Client Testimonials</span>
          <h2 className="section-title-white">
            What Our Clients Say
          </h2>
          <div className="gold-divider mx-auto" />
        </div>

        {/* Large quote */}
        <div className="text-center">
          <div className="text-[#c9a84c] text-7xl font-serif leading-none mb-6 opacity-40">
            "
          </div>
          <blockquote className="font-serif text-white text-xl md:text-2xl font-light italic leading-relaxed max-w-3xl mx-auto mb-10 min-h-[100px]">
            {t.quote}
          </blockquote>

          {/* Author */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/40 flex items-center justify-center mb-1">
              <span className="text-[#c9a84c] font-serif text-sm font-medium">
                {t.initials}
              </span>
            </div>
            <p className="text-white font-medium text-sm tracking-wide">{t.name}</p>
            <p className="text-white/40 text-[10px] tracking-widest uppercase">{t.title}</p>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 ${
                  i === active
                    ? "w-8 h-1 bg-[#c9a84c]"
                    : "w-2 h-1 bg-white/25 hover:bg-white/50"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
