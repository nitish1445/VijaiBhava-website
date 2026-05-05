import { useState, useEffect } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";

export default function ApplyModal({ open, onClose, job }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    exp: "",
    cover: "",
  });
  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const prev = document.body.style.overflow;
    function preventTouch(e) {
      e.preventDefault();
    }

    if (open) {
      document.body.style.overflow = "hidden";
      document.addEventListener("touchmove", preventTouch, { passive: false });
    }

    return () => {
      document.body.style.overflow = prev || "";
      document.removeEventListener("touchmove", preventTouch);
    };
  }, [open]);

  if (!open) return null;

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleFile(e) {
    const f = e.target.files?.[0];
    if (f) setFileName(f.name);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Apply submit", { job: job?.slug, ...form, fileName });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 5000);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 ">
      {/* MODAL */}
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl p-6 sm:p-8 relative animate-fadeIn">
        {/* HEADER */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#0a1628]">
                {submitted ? "Applied for" : "Apply for"}
              </h3>

              <p className="text-[#c9a84c] text-sm tracking-wide mt-1">
                {job?.title}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 text-2xl hover:text-[#0a1628] transition"
          >
            <FaTimes />
          </button>
        </div>

        {/* SUCCESS */}
        {submitted ? (
          <div className="text-center py-10 flex flex-col items-center">
            {/* ICON */}
            <div className="w-16 h-16 flex items-center justify-center rounded-full mb-5">
              <BsCheckCircle className="text-5xl text-[#c9a84c]" />
            </div>

            {/* TITLE */}
            <h3 className="font-serif text-2xl sm:text-3xl text-[#0a1628] mb-2">
              Application Submitted
            </h3>

            {/* SUBTEXT */}
            <p className="text-slate-600 text-sm max-w-md leading-relaxed">
              Thank you for applying. Our team will review your application and
              get back to you shortly.
            </p>

            {/* OPTIONAL DIVIDER */}
            <div className="w-10 h-[2px] bg-[#c9a84c] mt-6" />
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
            role="dialog"
            aria-modal="true"
          >
            {/* INPUTS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="input-field"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="input-field"
              />
              <input
                name="exp"
                placeholder="Years of Experience"
                value={form.exp}
                onChange={handleChange}
                className="input-field"
              />
            </div>

            {/* FILE */}
            <div>
              <label className="text-xs tracking-widest uppercase text-slate-500">
                Resume
              </label>

              <label
                htmlFor="resumeUpload"
                className="mt-2 flex flex-col items-center justify-center border border-dashed border-slate-300 rounded-lg p-4 text-center cursor-pointer hover:border-[#c9a84c] transition"
              >
                <input
                  type="file"
                  onChange={handleFile}
                  className="hidden"
                  id="resumeUpload"
                />

                {fileName ? (
                  <span className="text-[#0a1628] font-medium text-sm">
                    {fileName}
                  </span>
                ) : (
                  <span className="text-slate-600 text-sm">
                    Click to upload your resume
                  </span>
                )}
              </label>
            </div>

            {/* TEXTAREA */}
            <textarea
              name="cover"
              placeholder="Cover Letter (optional)"
              value={form.cover}
              onChange={handleChange}
              rows={4}
              className="input-field resize-none"
            />

            {/* ACTIONS */}
            <div className="flex flex-col sm:flex-row gap-3 sm:justify-end pt-2">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 border border-dotted border-red-500 text-red-500 text-xs tracking-widest uppercase font-semibold hover:bg-red-500 hover:text-white transition"
              >
                Cancel
              </button>

              <button type="submit" className="btn-gold-solid w-full sm:w-auto">
                Submit Application
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
