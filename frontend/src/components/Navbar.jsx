import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "People", path: "/people" },
  { label: "Awards", path: "/awards" },
  { label: "Insights", path: "/insights" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-amber-300/30 ${
        scrolled ? "bg-[var(--navy)] shadow-xl py-3 " : "bg-[var(--navy)] py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 group">
          <img src={Logo} alt="Vijai Bhava Logo" className="h-11 w-auto" />

          <div className="flex flex-col leading-tight">
            <span className="text-white font-serif sm:text-xl font-semibold tracking-wide">
              VIJAI BHAVA
            </span>
            <span className="text-[#c9a84c] pl-1 text-[9px] sm:text-[10px] tracking-[0.3em] uppercase font-medium">
              Law Firm
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `nav-link ${isActive ? "text-[#c9a84c]" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link to="/contact" className="btn-gold text-[11px] py-2.5 px-6">
            Free Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0a1628] border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `group nav-link flex items-center gap-2 transition-colors duration-300 ${
                  isActive ? "text-[#c9a84c]" : "text-white/70 hover:text-white"
                }`
              }
            >
              <span className="text-[#c9a84c] text-sm transition-transform duration-300 group-hover:translate-x-1">
                <MdOutlineKeyboardArrowRight />
              </span>

              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="btn-gold text-[11px] py-2.5 px-6 text-center mt-2"
          >
            Free Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
}
