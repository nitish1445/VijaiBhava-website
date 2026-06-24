import { Link } from "react-router-dom";
import { services } from "../assets/serviceData";

export default function ServicesGrid({ limit }) {
  const displayed = limit ? services.slice(0, limit) : services;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-slate-200">
      {displayed.map((service) => (
        (() => {
          const ServiceIcon = service.icon;

          return (
        <Link
          to={`/services/${service.slug}`}
          key={service.slug}
          className="group border-r border-b border-slate-200 p-6 sm:p-8 bg-white hover:bg-[#0a1628] transition-all duration-500 cursor-pointer"
        >
          <div className="text-2xl sm:text-3xl mb-5 group-hover:scale-110 group-hover:text-white transition-transform duration-300">
            <ServiceIcon />
          </div>
          <h3 className="font-serif text-lg sm:text-xl text-[#0a1628] group-hover:text-white font-medium mb-3 transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed group-hover:text-white/60 transition-colors duration-300">
            {service.desc}
          </p>
          <div className="mt-6 flex items-center gap-2 text-[#c9a84c] text-[10px] tracking-widest uppercase font-semibold">
            <span>Learn More</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </Link>
          );
        })()
      ))}
    </div>
  );
}
