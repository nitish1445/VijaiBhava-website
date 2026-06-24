import ServicesGrid from "../components/ServicesGrid";
import { Link } from "react-router-dom";
import { services } from "../assets/serviceData";

export default function Service() {
  return (
    <main className="">
      {/* Header */}
      <section className="bg-[#0a1628] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `radial-gradient(circle at 30% 50%, #c9a84c 0%, transparent 60%)` }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10 pt-16">
          <span className="section-label">What We Do</span>
          <h1 className="section-title-white text-3xl sm:text-4xl md:text-6xl max-w-2xl">
            Practice Areas
          </h1>
          <div className="gold-divider" />
          <p className="text-white/50 max-w-xl text-sm sm:text-[15px] leading-relaxed">
            Expert legal counsel across a comprehensive range of practice areas.
            Whatever your legal challenge, our attorneys have the expertise to guide you.
          </p>
        </div>
      </section>

      {/* Quick grid */}
      <section className="py-16 bg-[#faf8f3]">
        <div className="max-w-7xl mx-auto px-6">
          <ServicesGrid />
        </div>
      </section>

      {/* Detailed services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label">In Depth</span>
            <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">
              Our Practice Areas
            </h2>
            <div className="gold-divider mx-auto" />
          </div>

          <div className="space-y-0 border-l border-t border-slate-200">
            {services.map((svc, i) => {
              const ServiceIcon = svc.icon;

              return (
                <Link
                  key={svc.slug}
                  to={`/services/${svc.slug}`}
                  className={`border-r border-b border-slate-200 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8 group hover:bg-[#faf8f3] transition-colors duration-300 text-left ${
                    i % 2 === 1 ? "bg-[#faf8f3]/50" : "bg-white"
                  }`}
                >
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-2xl sm:text-3xl transition-transform duration-300 group-hover:scale-110">
                        <ServiceIcon />
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl text-[#0a1628] group-hover:text-[#c9a84c] transition-colors">
                        {svc.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                      {svc.description}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c] font-semibold mb-4">
                      View Detail
                    </p>
                    <div className="flex items-center gap-2 text-slate-600 text-xs uppercase tracking-widest font-semibold group-hover:text-[#0a1628] transition-colors">
                      <span>Explore Service</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#c9a84c] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl text-[#0a1628] font-light mb-4">
            Don't See Your Issue?
          </h2>
          <p className="text-[#0a1628]/70 text-sm mb-8">
            Our attorneys handle a wide range of matters. Contact us for a
            complimentary consultation to discuss your specific needs.
          </p>
          <Link to="/contact" className="inline-block bg-[#0a1628] text-white px-10 py-4 text-xs tracking-widest uppercase font-semibold hover:bg-[#122040] transition-colors">
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  );
}
