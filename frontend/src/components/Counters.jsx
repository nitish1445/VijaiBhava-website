import { useEffect, useRef, useState } from "react";

const stats = [
  { end: 41, suffix: "+", label: "Years of Excellence", desc: "Serving clients since 1987" },
  { end: 2400, suffix: "+", label: "Cases Successfully Closed", desc: "Across all practice areas" },
  { end: 98, suffix: "%", label: "Client Satisfaction Rate", desc: "Based on annual surveys" },
  { end: 48, suffix: "", label: "Expert Attorneys", desc: "Across 12 specializations" },
  { end: 180, suffix: "M+", label: "Settlements Recovered", desc: "For our clients in 2023" },
  { end: 12, suffix: "", label: "Office Locations", desc: "Nationally & internationally" },
];

function useCountUp(end, duration = 2000, shouldStart = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, shouldStart]);

  return count;
}

function Counter({ stat, shouldStart }) {
  const count = useCountUp(stat.end, 2000, shouldStart);
  return (
    <div className="text-center p-8 border-b border-r border-white/10 group hover:bg-[#c9a84c]/5 transition-colors duration-300">
      <div className="font-serif text-4xl md:text-5xl text-[#c9a84c] font-light mb-2">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div className="text-white text-sm font-medium tracking-wide mb-1">{stat.label}</div>
      <div className="text-white/40 text-[10px] tracking-wide">{stat.desc}</div>
    </div>
  );
}

export default function Counters() {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#122040] py-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-l border-t border-white/10">
          {stats.map((stat) => (
            <Counter key={stat.label} stat={stat} shouldStart={started} />
          ))}
        </div>
      </div>
    </section>
  );
}
