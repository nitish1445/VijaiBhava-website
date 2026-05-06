import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { BiCopyright } from "react-icons/bi";
import { services } from "../assets/serviceData";

// Use `services` from data for practice area links

const quickLinks = [
  { label: "About the Firm", path: "/about" },
  { label: "Our People", path: "/people" },
  { label: "Practice Areas", path: "/services" },
  { label: "Awards & Recognition", path: "/awards" },
  { label: "Insights & Articles", path: "/insights" },
  { label: "Careers", path: "/careers" },
  { label: "Contact Us", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white">
      {/* Top divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6 flex items-center gap-2">
              <img src={logo} alt="Vijai Bhava Logo" className="h-12 w-auto" />

              <div className="flex flex-col leading-tight">
                <span className="text-white font-serif text-2xl sm:text-3xl font-light tracking-wide uppercase">
                  Vijai Bhava
                </span>
                <span className="pl-1 text-[#c9a84c] text-[9px] sm:text-[10px] tracking-[0.3em] uppercase font-medium mt-1">
                  Law Firm
                </span>
              </div>
            </div>
            <div className="w-[95%] h-px bg-[#c9a84c] mb-6" />
            <p className="text-white/50 text-xs leading-relaxed font-light">
              Providing exceptional legal counsel since 1985. We combine decades
              of experience with innovative strategies to deliver results.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: <FaFacebookF />, href: "#" },
                { icon: <FaLinkedinIn />, href: "#" },
                { icon: <FaInstagram />, href: "#" },
                { icon: <FaXTwitter />, href: "#" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="group w-9 h-9 flex items-center justify-center border border-white/10 text-white/60 rounded transition-all duration-300 hover:border-[#c9a84c] hover:text-[#c9a84c] hover:bg-white/5"
                >
                  <span className="text-sm group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                </a>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-6 h-px bg-[#c9a84c]" />
              <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase">
                Follow Us
              </span>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-[14px] tracking-[0.3em] uppercase text-[#c9a84c] font-semibold mb-6">
              Practice Areas
            </h4>
            <ul className="space-y-2">
              {services.map((area) => (
                <li key={area.slug}>
                  <Link
                    to={`/services/${area.slug}`}
                    className="group flex items-center gap-5 text-white/60 text-xs font-light tracking-wide transition-all duration-300 hover:text-[#c9a84c]"
                  >
                    <span>{area.title}</span>
                    <span className="opacity-0 translate-x-[-4px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#c9a84c]">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[14px] tracking-[0.3em] uppercase text-[#c9a84c] font-semibold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-5 text-white/60 text-xs font-light tracking-wide transition-all duration-300 hover:text-[#c9a84c]"
                  >
                    <span>{link.label}</span>
                    <span className="opacity-0 translate-x-[-4px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#c9a84c]">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h4 className="text-[14px] tracking-[0.28em] uppercase text-[#c9a84c] font-semibold mb-6">
              Contact
            </h4>

            <ul className="space-y-2">
              {/* Address */}
              <li className="flex items-start gap-3 group">
                <FaMapMarkerAlt className="text-[#c9a84c] mt-1 text-sm shrink-0" />
                <span className="text-white/60 text-xs leading-relaxed group-hover:text-white transition-colors">
                  C12/12 1st Floor MIG Flat Sec 03
                  <br />
                  Rohini Delhi, 110085
                </span>
              </li>

              {/* Phone */}
              <li className="flex flex-col gap-1 group">
                <span className="pl-8 text-[10px] uppercase tracking-[0.2em] text-white/40">
                  Office
                </span>

                <div className="flex items-start gap-3">
                  <FaPhoneAlt className="text-[#c9a84c] text-xs shrink-0" />

                  <div className="flex flex-col text-xs">
                    <a
                      href="tel:+917070054113"
                      className="text-white/60 hover:text-[#c9a84c] transition-colors"
                    >
                      +91 1135783931
                    </a>
                  </div>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3 group">
                <FaEnvelope className="text-[#c9a84c] text-xs shrink-0" />
                <a
                  href="mailto:india@vijaibhavalawfirm.com"
                  className="text-white/60 text-xs hover:text-[#c9a84c] transition-colors break-all"
                >
                  india@vijaibhavalawfirm.com
                </a>
              </li>

              {/* Timing */}
              <li className="flex items-start gap-3 group">
                <FaClock className="text-[#c9a84c] mt-1 text-xs shrink-0" />
                <span className="text-white/60 text-xs leading-relaxed">
                  Mon to Fri : 9 : 00 am - 6 : 00 pm
                  <br />
                  <span className="text-white/40 text-[10px]">
                    Emergency: 24/7
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-[12px] flex items-center gap-1">
            <BiCopyright />
            <span>
              {new Date().getFullYear()} Vijai Bhava Law Firm. All rights
              reserved.
            </span>
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Use", "Disclaimer"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/30 text-[10px] hover:text-[#c9a84c] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
