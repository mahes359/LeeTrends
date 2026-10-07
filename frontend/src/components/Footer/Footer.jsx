import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import config from "../../config";

function Footer() {
  return (
    <footer className="bg-gray-950 text-white relative">

      {/* Prominent CTA Section - Proper Spacing, Zero Negative Margin Overlap */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 pt-16 md:pt-20 pb-10">
        <div className="bg-gradient-to-r from-rose-800 via-rose-700 to-rose-900 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl shadow-rose-950/40 border border-rose-500/20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center md:text-left max-w-2xl">
            <span className="inline-block px-3.5 py-1 bg-white/15 backdrop-blur-md text-rose-100 text-[10px] tracking-[0.3em] uppercase font-semibold rounded-full mb-3 border border-white/20">
              Personalized Consultations
            </span>
            <h3
              className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-wide"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Ready to Look Truly Stunning?
            </h3>
            <p className="text-rose-100/90 mt-2 text-xs sm:text-sm md:text-base font-light tracking-wide">
              Book a bespoke design consultation with our master couturiers in Rasipuram or online.
            </p>
          </div>

          <div className="relative z-10 shrink-0 w-full sm:w-auto flex justify-center">
            <a
              href={config.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-rose-50 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-xs tracking-[0.2em] uppercase font-bold shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 shrink-0"
              style={{ color: "#881337", textDecoration: "none" }}
            >
              <FaWhatsapp size={19} className="text-emerald-600 shrink-0" />
              <span className="font-bold whitespace-nowrap text-rose-900" style={{ color: "#881337" }}>
                Connect on WhatsApp
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">

        {/* Boutique Brand Info */}
        <div className="space-y-4">
          <div>
            <h2
              className="text-3xl font-bold text-white tracking-widest leading-none"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              LEE TRENDS
            </h2>
            <p className="text-rose-400 text-[10px] tracking-[0.35em] uppercase font-semibold mt-1">
              Designer Boutique
            </p>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
            Custom designer studio specializing in Bridal Lehengas, Reception Gowns, Ethnic Sarees, and Bespoke Kids Wear in {config.address}.
          </p>
          <div className="flex gap-3 pt-2">
            <a
              href={config.instagram}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-xl bg-gray-900 hover:bg-rose-600 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-105"
              title="Instagram"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href={config.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-xl bg-gray-900 hover:bg-emerald-600 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-105"
              title="WhatsApp"
            >
              <FaWhatsapp size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-gray-300 mb-5 font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            Quick Navigation
          </h4>
          <div className="flex flex-col space-y-2.5">
            {[
              { path: "/", label: "Home Showcase" },
              { path: "/collections", label: "All Collections" },
              { path: "/about", label: "About Our Studio" },
              { path: "/contact", label: "Visit & Contact" },
            ].map((link, i) => (
              <Link
                key={i}
                to={link.path}
                className="text-gray-400 hover:text-rose-300 text-xs sm:text-sm font-light transition-all duration-200 hover:translate-x-1 inline-block w-fit"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Signature Categories */}
        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-gray-300 mb-5 font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            Collections
          </h4>
          <div className="flex flex-col space-y-2.5">
            {["Bridal Wear", "Party Wear", "Ethnic Wear", "Kids Wear", "Designer Blouses"].map((c, i) => (
              <Link
                key={i}
                to="/collections"
                className="text-gray-400 hover:text-rose-300 text-xs sm:text-sm font-light transition-all duration-200 hover:translate-x-1 inline-block w-fit"
              >
                {c}
              </Link>
            ))}
          </div>
        </div>

        {/* Studio Contact */}
        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-gray-300 mb-5 font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            Studio Information
          </h4>
          <div className="space-y-3.5">
            <a
              href={config.phoneLink}
              className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm group"
            >
              <div className="w-8 h-8 bg-gray-900 group-hover:bg-rose-950 text-rose-400 rounded-lg flex items-center justify-center shrink-0 border border-gray-800">
                <FaPhoneAlt size={11} />
              </div>
              <span className="pt-1.5 font-light">{config.phone}</span>
            </a>

            <a
              href={`mailto:${config.email}`}
              className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm group"
            >
              <div className="w-8 h-8 bg-gray-900 group-hover:bg-rose-950 text-rose-400 rounded-lg flex items-center justify-center shrink-0 border border-gray-800">
                <FaEnvelope size={11} />
              </div>
              <span className="pt-1.5 font-light truncate">{config.email}</span>
            </a>

            <div className="flex items-start gap-3 text-gray-400 text-xs sm:text-sm group">
              <div className="w-8 h-8 bg-gray-900 text-rose-400 rounded-lg flex items-center justify-center shrink-0 border border-gray-800">
                <FaMapMarkerAlt size={11} />
              </div>
              <span className="pt-1.5 font-light leading-relaxed">{config.address}</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-900 py-6 px-6">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-3 text-gray-500 text-xs tracking-wider">
          <p>© {new Date().getFullYear()} {config.businessName}. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <span className="text-rose-500">♥</span>
            <span>for bespoke elegance</span>
          </p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
