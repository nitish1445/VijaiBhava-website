import { useParams, Link } from "react-router-dom";
import jobs from "../assets/careerData";
import Logo from "../assets/Logo.png";

export default function CareerDetail() {
  const { slug } = useParams();
  const job = jobs.find((j) => j.slug === slug);

  if (!job) {
    return (
      <main className="min-h-screen bg-white">
        <section className="bg-[#0a1628] py-28 text-center text-white">
          <div className="max-w-4xl mx-auto px-6">
            <span className="section-label">Careers</span>
            <h1 className="section-title-white">Role Not Found</h1>
            <p className="text-white/60 mt-4">
              The role you requested does not exist or has been filled.
            </p>
            <div className="mt-8">
              <Link to="/careers" className="btn-white-outline">
                Back to Careers
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-white">
      <section className="bg-[#0a1628] py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 text-white">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            {/* LEFT CONTENT */}
            <div>
              <Link
                to="/careers"
                className="inline-flex items-center gap-2 text-white/40 text-[11px] tracking-widest uppercase hover:text-slate-400 transition-colors mb-8"
              >
                ← Back to Career
              </Link>
              <span className="section-label">Make Your Dream with Us</span>

              <h1 className="section-title-white text-3xl sm:text-4xl md:text-5xl max-w-2xl leading-tight">
                {job.title}
              </h1>

              <div className="gold-divider" />

              <div className="text-white/70 text-xs sm:text-sm mt-3 flex flex-wrap gap-x-2 gap-y-1">
                <span>{job.dept}</span>
                <span>•</span>
                <span>{job.location}</span>
                <span>•</span>
                <span>{job.type}</span>
              </div>
            </div>

            {/* RIGHT BUTTON */}
            <div className="flex md:items-start">
              <Link
                to={`/careers/${job.slug}/apply`}
                className="btn-gold-solid md:w-auto text-center"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-white overflow-hidden">
        {/* LOGO BACKGROUND */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.08] pointer-events-none">
          <img src={Logo} alt="logo-bg" className="w-[500px] md:w-[700px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl md:text-3xl text-[#0a1628] mb-4">
              About the Role
            </h3>

            <div className="w-10 h-[2px] bg-[#c9a84c] mb-6" />

            <p className="text-slate-600 text-sm leading-relaxed mb-8 max-w-2xl">
              {job.description}
            </p>

            {/* RESPONSIBILITIES */}
            <div className="mb-8">
              <h4 className="text-[#0a1628] font-semibold mb-3 tracking-wide">
                Responsibilities
              </h4>
              <ul className="space-y-2 text-slate-600">
                {job.responsibilities.map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-[#c9a84c] mt-2 rounded-full shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* REQUIREMENTS */}
            <div className="mb-8">
              <h4 className="text-[#0a1628] font-semibold mb-3 tracking-wide">
                Requirements
              </h4>
              <ul className="space-y-2 text-slate-600">
                {job.requirements.map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-[#c9a84c] mt-2 rounded-full shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* PERKS */}
            {job.perks && (
              <div>
                <h4 className="text-[#0a1628] font-semibold mb-3 tracking-wide">
                  Perks & Benefits
                </h4>
                <ul className="space-y-2 text-slate-600">
                  {job.perks.map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-[#c9a84c] mt-2 rounded-full shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="h-fit sticky top-24">
            <div className="relative overflow-hidden rounded-t-3xl border border-slate-200 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.08)]">
              {/* Top Accent */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#c9a227] via-[#f4d06f] to-[#c9a227]" />

              <div className="p-7">
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-1">
                      Career Opportunity
                    </p>

                    <h4 className="text-2xl font-bold text-[#0a1628] leading-tight">
                      Role Snapshot
                    </h4>
                  </div>

                  <span className="shrink-0 rounded-full border border-[#e7d39f] bg-[#fff8e7] px-3 py-1 text-xs font-semibold text-[#8a6a12] shadow-sm">
                    {job.type}
                  </span>
                </div>

                {/* Stats Card */}
                <div className="space-y-4 mb-7">
                  <div className=" border border-slate-100 bg-[#fafaf7] p-4 transition-all duration-300 hover:shadow-md">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                      Department
                    </p>
                    <h5 className="text-[#0a1628] font-semibold text-base">
                      {job.dept}
                    </h5>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className=" border border-slate-100 bg-[#fafaf7] p-4 hover:shadow-md transition-all duration-300">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                        Location
                      </p>
                      <h5 className="text-[#0a1628] font-medium">
                        {job.location}
                      </h5>
                    </div>

                    <div className=" border border-slate-100 bg-[#fafaf7] p-4 hover:shadow-md transition-all duration-300">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                        Experience
                      </p>
                      <h5 className="text-[#0a1628] font-medium">{job.exp}</h5>
                    </div>
                  </div>

                  <div className=" border border-slate-100 bg-[#fafaf7] p-4 hover:shadow-md transition-all duration-300">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                      Employment Type
                    </p>
                    <h5 className="text-[#0a1628] font-medium">{job.type}</h5>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  to={`/careers/${job.slug}/apply`}
                  className="group relative flex w-full items-center justify-center overflow-hidden bg-[#0a1628] px-5 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#13233d] hover:shadow-xl"
                >
                  <span className="relative z-10">Apply Now</span>

                  <div className="absolute inset-0 translate-y-full bg-gradient-to-r from-[#c9a227] to-[#f4d06f] transition-transform duration-500 group-hover:translate-y-0" />

                  <span className="absolute z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Apply Now
                  </span>
                </Link>

                {/* Footer Note */}
                <div className="mt-5 border border-[#f3ead2] bg-[#fffaf0] px-4 py-3 text-center">
                  <p className="text-xs leading-relaxed text-slate-600">
                    We review applications on a rolling basis and usually
                    respond within a few business days.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[#c9a84c] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="font-serif text-3xl text-[#0a1628] mb-3">
            Interested in joining?
          </h3>
          <p className="text-[#0a1628]/80 mb-6">
            Click apply to start your application — we review submissions on a
            rolling basis.
          </p>
          <Link
            to={`/careers/${job.slug}/apply`}
            className="btn-white-outline inline-block"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </main>
  );
}
