import { FaBriefcase, FaMapMarkerAlt, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  return (
    <Link
      to={`/careers/${job.slug}`}
      className="block border-r border-b border-slate-200 p-7 grid-cols-1 md:grid-cols-5 gap-4 items-center hover:bg-[#faf8f3] transition-colors duration-300 group space-y-1"
    >
      <div className="md:col-span-2">
        <h3 className="font-serif text-lg font-semibold text-[#0a1628] group-hover:font-bold transition-colors duration-300">
          {job.title}
        </h3>
        <span className="text-[#c9a84c] text-[10px] tracking-widest uppercase font-semibold">
          {job.dept}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <FaMapMarkerAlt className="text-[#c9a84c] text-sm" />
        <p className="text-slate-500 text-xs">{job.location}</p>
      </div>

      <div className="flex items-center gap-2">
        <FaBriefcase className="text-[#c9a84c] text-xs" />

        <span
          className={`inline-block text-[10px] tracking-widest uppercase px-3 py-1 font-semibold ${
            job.type === "Full-Time"
              ? "bg-[#0a1628]/10 text-[#0a1628]"
              : job.type === "Internship"
                ? "bg-[#c9a84c]/20 text-[#8a6820]"
                : "bg-[#c9a84c] text-[#0a1628]"
          }`}
        >
          {job.type}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FaUserTie className="text-[#c9a84c] text-xs" />
          <p className="text-slate-500 text-xs">{job.exp}</p>
        </div>

        <span className="text-[#c9a84c] text-lg transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}
