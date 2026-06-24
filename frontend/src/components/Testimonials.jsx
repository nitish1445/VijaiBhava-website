import { useState, useEffect } from "react";

const testimonials = [
{
quote:
"I was dealing with a complicated family property dispute that had been pending for years. The team explained every step clearly and helped us reach a fair resolution without unnecessary delays.",
name: "Rakesh Tiwari",
title: "Property Owner",
initials: "RT",
},
{
quote:
"Their guidance during my GST notice proceedings was exceptional. They prepared a detailed response, represented me before the authorities, and helped resolve the matter professionally.",
name: "Pankaj Agrawal",
title: "Business Owner",
initials: "PA",
},
{
quote:
"Buying my first home came with several legal concerns regarding documentation and title verification. Vijai Bhava Law Firm handled everything carefully and gave me complete peace of mind.",
name: "Neha Singh",
title: "Software Professional",
initials: "NS",
},
{
quote:
"I approached the firm regarding an employment dispute and was impressed by their responsiveness and practical advice. They helped me understand my rights and secure a favorable outcome.",
name: "Amit Mishra",
title: "Senior Engineer",
initials: "AM",
},
{
quote:
"Their team assisted us with startup agreements, founder documentation, and investor negotiations. The advice was practical, timely, and aligned with our business goals.",
name: "Karan Mehta",
title: "Startup Founder",
initials: "KM",
},
{
quote:
"From legal consultation to court representation, the entire process was handled with professionalism and transparency. I always felt informed and supported throughout my case.",
name: "Sunita Verma",
title: "Educator",
initials: "SV",
},
];


export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [paused]);

  const t = testimonials[active];

  return (
    <section className="bg-[#0a1628] py-28 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #c9a84c 0%, transparent 50%), radial-gradient(circle at 80% 50%, #c9a84c 0%, transparent 50%)`,
        }}
      />

      <div
        className="relative z-10 max-w-5xl mx-auto px-6"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[11px] tracking-[0.35em] uppercase text-[#c9a84c]">
            Client Testimonials
          </span>

          <h2 className="text-2xl sm:text-3xl font-serif font-light mt-4 text-white">
            What Our Clients Say
          </h2>

          <div className="w-10 h-px bg-[#c9a84c] mx-auto mt-6" />
        </div>

        {/* Content */}
        <div className="text-center">
          <div className="text-[#c9a84c] text-7xl font-serif leading-none mb-6 opacity-40">
            "
          </div>

          {/* Quote with animation */}
          <blockquote
            key={active}
            className="font-serif text-white text-xl md:text-2xl font-light italic leading-relaxed max-w-3xl mx-auto mb-10 min-h-[100px] animate-fade"
          >
            {t.quote}
          </blockquote>

          {/* Author */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/40 flex items-center justify-center mb-1">
              <span className="text-[#c9a84c] font-serif text-sm font-medium">
                {t.initials}
              </span>
            </div>

            <p className="text-white font-medium text-sm tracking-wide">
              {t.name}
            </p>

            <p className="text-white/40 text-[10px] tracking-widest uppercase">
              {t.title}
            </p>
          </div>

          {/* Dots */}
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
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          .animate-fade {
            animation: fadeIn 0.7s ease-in-out;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
}
