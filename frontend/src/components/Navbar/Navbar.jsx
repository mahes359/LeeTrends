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
    const onScroll = () => setScrolled(window.scrollY > 40);
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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      transparent ? "bg-transparent" : "bg-white/95 backdrop-blur-xl shadow-sm border-b border-rose-100/60"
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-16 py-5">

        <Link to="/" className="flex flex-col leading-none group">
          <span
            className={`text-2xl md:text-3xl font-bold tracking-widest transition-colors duration-300 ${transparent ? "text-white" : "text-rose-700"}`}
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            LEE TRENDS
          </span>
          <span className={`text-[10px] tracking-[0.35em] uppercase transition-colors duration-300 ${transparent ? "text-rose-200" : "text-rose-400"}`}>
            Designer Boutique
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm tracking-widest uppercase font-medium transition-colors duration-300 relative group ${
                transparent ? "text-white/90 hover:text-white" : "text-gray-700 hover:text-rose-600"
              } ${location.pathname === to ? (transparent ? "text-white" : "text-rose-600") : ""}`}
            >
              {label}
              <span className={`absolute -bottom-1.5 left-0 h-px transition-all duration-300 ${
                location.pathname === to ? "w-full" : "w-0 group-hover:w-full"
              } ${transparent ? "bg-white" : "bg-rose-500"}`} />
            </Link>
          ))}

          <div className={`flex items-center gap-4 ml-3 ${transparent ? "text-white" : "text-gray-600"}`}>
            <a href={config.instagram} target="_blank" rel="noreferrer" className="hover:text-rose-500 transition-colors duration-300 hover:scale-110 transform">
              <FaInstagram size={18} />
            </a>
            <a href={config.whatsappLink} target="_blank" rel="noreferrer" className="hover:text-green-500 transition-colors duration-300 hover:scale-110 transform">
              <FaWhatsapp size={18} />
            </a>
          </div>

          <Link
            to="/contact"
            className={`btn-glow text-xs tracking-widest uppercase px-6 py-2.5 border transition-all duration-300 ${
              transparent
                ? "border-white text-white hover:bg-white hover:text-rose-700"
                : "border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white"
            }`}
          >
            Book Now
          </Link>
        </div>

        <button
          className={`md:hidden transition-all duration-300 ${transparent ? "text-white" : "text-gray-800"} ${open ? "rotate-90" : "rotate-0"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiOutlineXMark size={28} /> : <HiOutlineBars3 size={28} />}
        </button>
      </div>

      {/* Mobile menu with glassmorphism */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white/98 backdrop-blur-xl border-t border-rose-100/80 ${open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-6 py-6 flex flex-col gap-1">
          {links.map(({ to, label }, i) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={`mobile-nav-link py-3.5 text-sm tracking-widest uppercase border-b border-gray-100/80 transition-colors ${
                location.pathname === to ? "text-rose-600 font-semibold" : "text-gray-700 hover:text-rose-600"
              }`}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {label}
            </Link>
          ))}
          <div className="flex items-center gap-5 pt-4 pb-2">
            <a href={config.instagram} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-rose-500 transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href={config.whatsappLink} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-green-500 transition-colors">
              <FaWhatsapp size={20} />
            </a>
          </div>
          <Link to="/contact" onClick={() => setOpen(false)} className="btn-glow mt-2 text-center bg-rose-600 text-white py-3.5 text-sm tracking-widest uppercase hover:bg-rose-700 transition">
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
