import { Link } from "react-router-dom";

export default function TeamCard({ member }) {
  const { id, name, title, specialty, image, bio } = member || {};

  const avatar = image || null;
  const initials = name
    ? name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "";

  return (
    <Link
      to={`/people/${id}`}
      className="group block bg-white overflow-hidden card-hover border border-slate-100"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-72 bg-[#1a2f5a]">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-28 h-28 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/30 flex items-center justify-center">
              <span className="text-4xl text-[#c9a84c]/60 font-serif font-light">
                {initials}
              </span>
            </div>
          </div>
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/20 to-transparent" />
        {/* Name on image */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="text-[#c9a84c] text-[9px] tracking-[0.3em] uppercase mb-1">
            {specialty}
          </div>
          <h3 className="text-white font-serif text-xl font-light">Adv. {name}</h3>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 border-t border-slate-100">
        <p className="text-[#c9a84c] text-[10px] tracking-widest uppercase font-semibold mb-2">
          {title}
        </p>
        {bio && (
          <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
            {bio}
          </p>
        )}
        <div className="mt-4 flex items-center gap-2 text-[#0a1628] text-[10px] tracking-widest uppercase font-semibold group-hover:text-[#c9a84c] transition-colors">
          <span>View Profile</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
