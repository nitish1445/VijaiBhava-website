import { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

export default function DisclaimerModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("disclaimer_dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
  if (visible) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [visible]);

  const dismiss = () => {
    sessionStorage.setItem("disclaimer_dismissed", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center sm:items-center justify-center px-4 pb-4 sm:pb-0">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={dismiss}
      />

      {/* Modal */}
      <div className="relative z-10 bg-white max-w-lg w-full shadow-2xl animate-fade-in-up">
        {/* Header */}
        <div className="bg-[#0a1628] px-8 py-5 flex items-center justify-between">
          <div>
            <span className="text-[#c9a84c] text-[9px] tracking-[0.3em] uppercase block mb-1">
              Important Notice
            </span>
            <h3 className="text-white font-serif text-xl font-light">
              Legal Disclaimer
            </h3>
          </div>
          <button
            onClick={dismiss}
            className="text-white/40 hover:text-white transition-colors text-xl leading-none"
          >
            <RxCross2 />
          </button>
        </div>

        {/* Body */}
        <div className="px-8 py-7">
          <div className="w-8 h-px bg-[#c9a84c] mb-5" />
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            The information contained on this website is provided for general
            informational purposes only and does not constitute legal advice.
            Viewing this website or contacting Vijai Bhava Law Firm does not
            create an attorney-client relationship.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            Do not send confidential or sensitive information through this
            website. Past results do not guarantee future outcomes. Please
            consult with a qualified attorney for advice specific to your
            situation.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={dismiss}
              className="btn-gold-solid flex-1 text-center text-xs py-3"
            >
              I Understand & Agree
            </button>
            <button
              onClick={dismiss}
              className="btn-gold flex-1 text-center text-xs py-3"
            >
              Decline & Leave
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
