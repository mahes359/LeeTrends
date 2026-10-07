import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import config from "../../config";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled && !open;

  const links = [
    { to: "/", label: "Home" },
    { to: "/collections", label: "Collections" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ${
        transparent
          ? "bg-transparent py-6"
          : "bg-white/95 backdrop-blur-xl shadow-xs border-b border-rose-100/70 py-4"
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-5 sm:px-8 md:px-12">

        {/* Brand Logo */}
        <Link to="/" className="flex flex-col leading-none group">
          <span
            className={`text-2xl md:text-3xl font-bold tracking-widest transition-colors duration-300 ${
              transparent ? "text-white" : "text-rose-800"
            }`}
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            LEE TRENDS
          </span>
          <span
            className={`text-[9px] md:text-[10px] tracking-[0.35em] uppercase font-medium mt-0.5 transition-colors duration-300 ${
              transparent ? "text-rose-200" : "text-rose-500"
            }`}
          >
            Designer Boutique
          </span>
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-7 lg:gap-9">
          {links.map(({ to, label }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`text-xs tracking-[0.2em] uppercase font-medium transition-colors duration-200 relative py-1 ${
                  transparent
                    ? isActive ? "text-white font-semibold" : "text-white/80 hover:text-white"
                    : isActive ? "text-rose-700 font-semibold" : "text-gray-600 hover:text-rose-700"
                }`}
              >
                {label}
                {isActive && (
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                      transparent ? "bg-white" : "bg-rose-600"
                    }`}
                  />
                )}
              </Link>
            );
          })}

          {/* Social Icons */}
          <div className={`flex items-center gap-3.5 pl-2 border-l ${transparent ? "border-white/20 text-white" : "border-gray-200 text-gray-500"}`}>
            <a
              href={config.instagram}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-full hover:text-rose-500 transition-all hover:scale-110"
              title="Instagram"
            >
              <FaInstagram size={17} />
            </a>
            <a
              href={config.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-full hover:text-emerald-500 transition-all hover:scale-110"
              title="WhatsApp"
            >
              <FaWhatsapp size={17} />
            </a>
          </div>

          {/* Luxury CTA Button */}
          <Link
            to="/contact"
            className={`btn-glow text-xs tracking-widest uppercase font-semibold px-6 py-2.5 rounded-full transition-all duration-300 ${
              transparent
                ? "bg-white/20 hover:bg-white text-white hover:text-rose-800 border border-white/40 backdrop-blur-md shadow-sm"
                : "bg-rose-700 hover:bg-rose-800 active:bg-rose-900 text-white shadow-md shadow-rose-900/15"
            }`}
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className={`md:hidden p-2 rounded-xl transition-colors ${
            transparent ? "text-white hover:bg-white/10" : "text-gray-800 hover:bg-rose-50"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          {open ? <HiOutlineXMark size={26} /> : <HiOutlineBars3 size={26} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {open && (
        <div className="md:hidden bg-white/98 backdrop-blur-2xl border-b border-rose-100 shadow-xl px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-2">
            {links.map(({ to, label }) => {
              const isActive = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-xl text-xs tracking-widest uppercase font-medium transition-colors ${
                    isActive
                      ? "bg-rose-50 text-rose-700 font-semibold"
                      : "text-gray-700 hover:bg-gray-50 hover:text-rose-600"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-4 text-gray-500">
              <a href={config.instagram} target="_blank" rel="noreferrer" className="hover:text-rose-600">
                <FaInstagram size={19} />
              </a>
              <a href={config.whatsappLink} target="_blank" rel="noreferrer" className="hover:text-emerald-600">
                <FaWhatsapp size={19} />
              </a>
            </div>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="bg-rose-700 text-white px-6 py-2.5 rounded-full text-xs tracking-widest uppercase font-semibold shadow-sm"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
