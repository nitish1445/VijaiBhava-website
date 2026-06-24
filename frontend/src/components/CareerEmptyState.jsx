import { FaEnvelopeOpenText, FaRegFrown } from "react-icons/fa";

export default function CareerEmptyState() {
  return (
    <div className="border-r border-b border-slate-200 bg-white px-6 py-12 sm:px-10 sm:py-14">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex h-14 w-14 items-center justify-center border border-[#c9a84c]/25 bg-white text-[#c9a84c]">
            <FaRegFrown className="text-4xl" />
          </div>

          <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c9a84c]">
            Careers
          </span>

          <h3 className="mt-4 font-serif text-2xl sm:text-3xl text-[#0a1628]">
            No current positions available
          </h3>

          <p className="mt-3 max-w-xl text-sm sm:text-[15px] leading-relaxed text-slate-600">
            We are not hiring right now, but we are always interested in strong
            legal talent. Send us your resume and we will keep it on file for
            future openings.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <a
              href="mailto:india@vijaibhavalawfirm.com?subject=Career%20Enquiry%20-%20Resume%20Submission"
              className="inline-flex items-center justify-center gap-2 bg-[#0a1628] px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white transition-colors hover:bg-[#122040]"
            >
              <FaEnvelopeOpenText />
              Send Resume
            </a>
            <span className="text-xs text-slate-500">
              We review submissions for future opportunities.
            </span>
          </div>
        </div>
    </div>
  );
}