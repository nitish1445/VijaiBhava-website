import TeamCard from "../components/TeamCard";
import { teamMembers } from "../assets/userData";
import { services } from "../assets/serviceData";

const practiceAreaCount = services.length;

export default function People() {
  const attorneysCount = teamMembers.length;

  return (
    <main className="bg-[#faf8f3]">
      <section className="relative overflow-hidden bg-[#0a1628] py-24 md:py-28">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 25%, rgba(201,168,76,0.65) 0%, transparent 28%), radial-gradient(circle at 80% 15%, rgba(201,168,76,0.28) 0%, transparent 20%), linear-gradient(135deg, rgba(255,255,255,0.04), transparent 40%)",
          }}
        />
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 pt-16 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <span className="section-label">Our Attorneys</span>
            <h1 className="section-title-white max-w-3xl text-4xl md:text-6xl">
              Meet the People Behind the Practice
            </h1>
            <div className="gold-divider" />
            <p className="max-w-2xl text-sm leading-relaxed text-white/55 md:text-base">
              A multidisciplinary team of attorneys working across the full
              spectrum of business, litigation, and advisory matters. Every
              profile here reflects a firm built on precision, judgment, and
              client-first execution.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white/80 py-14 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="section-label">The Team</span>
            <h2 className="section-title max-w-xl text-3xl md:text-4xl">
              A unified bench of specialists, counselors, and advocates.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
            Explore the full team below. Each attorney brings a distinct point
            of view, but the same standard of care: clear thinking,
            responsiveness, and deep legal judgment shaped around the client's
            objective.
          </p>
        </div>
      </section>

      <section className="bg-[#faf8f3] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a1628] py-24 md:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <span className="section-label">Our Culture</span>
            <h2 className="section-title-white">
              Diversity, Inclusion &<br />
              <em className="not-italic text-[#c9a84c]">Excellence</em>
            </h2>
            <div className="gold-divider" />
            <p className="mb-5 text-sm leading-relaxed text-white/60">
              We believe a diverse team of legal minds produces the strongest
              outcomes for our clients. Our firm actively recruits talent from
              all backgrounds and has been recognized as a top employer for
              diversity in law.
            </p>
            <p className="text-sm leading-relaxed text-white/60">
              From our mentorship programs to our pro bono commitments, we
              invest in our people and our communities with equal dedication.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              { label: "Women Partners", value: "42%" },
              { label: "Minority Attorneys", value: "38%" },
              { label: "Pro Bono Hours (2023)", value: "12,400+" },
              { label: "Avg. Attorney Tenure", value: "11 yrs" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="border border-white/10 p-8 text-center transition-colors duration-300 hover:border-[#c9a84c]/40"
              >
                <div className="font-serif text-3xl text-[#c9a84c] font-light mb-2">
                  {stat.value}
                </div>
                <div className="text-white/50 text-[10px] tracking-widest uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
