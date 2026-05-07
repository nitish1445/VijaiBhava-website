import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaBalanceScale,
  FaChevronRight,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

function upsertMeta(name, content) {
  if (typeof document === "undefined") return;

  let tag = document.head.querySelector(`meta[name="${name}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

export default function LegalPage({
  pageLabel,
  title,
  subtitle,
  lastUpdated,
  metaDescription,
  sections,
  intro,
}) {
  useEffect(() => {
    document.title = `${title} | Vijai Bhava Law Firm`;
    if (metaDescription) {
      upsertMeta("description", metaDescription);
    }
  }, [title, metaDescription]);

  return (
    <main className="bg-white">
      <section className="bg-[#0a1628] py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 40%, #c9a84c 0%, transparent 60%)",
          }}
        />
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

        <div className="max-w-7xl mx-auto px-6 relative z-10 pt-16">
          <span className="section-label">{pageLabel}</span>
          <h1 className="section-title-white text-4xl md:text-6xl max-w-3xl">
            {title}
          </h1>
          <div className="gold-divider" />
          <p className="text-white/60 max-w-2xl text-sm md:text-base leading-relaxed">
            {subtitle}
          </p>

          <div className="mt-10 inline-flex flex-wrap items-center gap-3 border border-white/10 bg-white/5 px-4 py-3 text-white/70 text-[11px] tracking-[0.3em] uppercase">
            <span className="text-[#c9a84c]">Last Updated</span>
            <span className="hidden sm:inline text-white/25">|</span>
            <span>{lastUpdated}</span>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-12 xl:gap-16">
          <aside className="lg:sticky lg:top-28 h-fit space-y-6">
            <div className="border border-slate-100 bg-[#faf8f3] p-6 shadow-sm">
              <span className="section-label">Overview</span>
              <p className="text-slate-600 text-sm leading-relaxed">
                {intro}
              </p>
            </div>

            <div className="border border-slate-100 p-6">
              <span className="section-label">On This Page</span>
              <nav aria-label={`${title} table of contents`}>
                <ul className="space-y-3">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="group flex items-start gap-3 text-slate-600 text-sm leading-snug hover:text-[#c9a84c] transition-colors"
                      >
                        <FaChevronRight className="mt-1 text-[10px] text-[#c9a84c] shrink-0" />
                        <span>{section.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="border border-[#c9a84c]/25 bg-[#0a1628] p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#c9a84c]/15 flex items-center justify-center text-[#c9a84c]">
                  <FaBalanceScale />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-light">
                    Need Guidance?
                  </h2>
                </div>
              </div>
              <p className="text-white/65 text-sm leading-relaxed mb-5">
                For questions about these terms or a confidential matter, speak
                with our team directly.
              </p>
              <Link to="/contact" className="btn-gold-solid w-full text-center">
                Contact the Firm
              </Link>
            </div>
          </aside>

          <article className="max-w-4xl">
            <div className="space-y-14 md:space-y-16">
              {sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-32">
                  <div className="flex items-start gap-4">
                    <div className="w-5 h-px bg-[#c9a84c] mt-4 shrink-0" />
                    <div>
                      <span className="section-label mb-2">{section.kicker}</span>
                      
                    </div>
                  </div>

                  <h2 className="mb-5 pl-2 font-serif text-2xl md:text-4xl text-[#0a1628] font-medium leading-tight">
                        {section.title}
                      </h2>

                  {section.intro ? (
                    <p className="text-slate-600 text-sm md:text-[15px] leading-7 mb-5">
                      {section.intro}
                    </p>
                  ) : null}

                  <div className="space-y-4 text-slate-600 text-sm md:text-[15px] leading-7">
                    {section.paragraphs?.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  {section.bullets?.length ? (
                    <ul className="mt-6 space-y-3 border-l border-[#c9a84c]/25 pl-5">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="text-slate-600 text-sm md:text-[15px] leading-7 flex gap-3">
                          <span className="text-[#c9a84c] mt-1">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {section.note ? (
                    <div className="mt-6 border border-[#c9a84c]/25 bg-[#faf8f3] p-5 md:p-6 text-slate-600 text-sm md:text-[15px] leading-7">
                      {section.note}
                    </div>
                  ) : null}
                </section>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="py-20 bg-[#faf8f3] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="section-label">Contact</span>
              <h2 className="section-title text-3xl md:text-4xl mb-5">
                Reach the Firm
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed max-w-xl">
                If you would like clarification on any provision or need advice
                tailored to your situation, our team is available to discuss
                the right next step.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border border-slate-100 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <FaMapMarkerAlt className="text-[#c9a84c]" />
                  <h3 className="font-semibold text-[#0a1628]">Office</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  C12/12 1st Floor MIG Flat Sec 03
                  <br />
                  Rohini Delhi, 110085
                </p>
              </div>

              <div className="bg-white border border-slate-100 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <FaPhoneAlt className="text-[#c9a84c]" />
                  <h3 className="font-semibold text-[#0a1628]">Phone</h3>
                </div>
                <a
                  href="tel:+911135783931"
                  className="text-slate-600 text-sm leading-relaxed hover:text-[#c9a84c] transition-colors"
                >
                  +91 1135783931
                </a>
                <div className="mt-4 flex items-center gap-3">
                  <FaEnvelope className="text-[#c9a84c] text-sm" />
                  <a
                    href="mailto:india@vijaibhavalawfirm.com"
                    className="text-slate-600 text-sm hover:text-[#c9a84c] transition-colors break-all"
                  >
                    india@vijaibhavalawfirm.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}