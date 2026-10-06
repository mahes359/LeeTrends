import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import config from "../../config";

function Footer() {
  return (
    <footer className="bg-gray-950 text-white">

      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-rose-700 via-rose-600 to-rose-700 py-16 px-6 relative overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div>
            <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              Ready to look stunning?
            </h3>
            <p className="text-rose-200 mt-4 text-sm tracking-wide">Book a consultation with our designers today.</p>
          </div>
          <a href={config.whatsappLink} target="_blank" rel="noreferrer"
            className="btn-glow-green bg-white text-rose-700 px-10 py-4 text-sm tracking-widest uppercase font-semibold hover:bg-rose-50 transition-all duration-300 whitespace-nowrap shrink-0 rounded-sm shadow-lg">
            💬 WhatsApp Us
          </a>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 lg:py-24 grid md:grid-cols-4 gap-14 lg:gap-16">

        <div className="md:col-span-1">
          <h2 className="text-3xl font-bold text-white tracking-widest" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            LEE TRENDS
          </h2>
          <p className="text-rose-400 text-[10px] tracking-[0.35em] uppercase mt-2 mb-7">Designer Boutique</p>
          <p className="text-gray-400 text-sm leading-8">
            Customized Designer Boutique specializing in Bridal, Party Wear, Ethnic Wear and Kids Wear. Crafted with love in {config.address}.
          </p>
          <div className="flex gap-5 mt-8 text-xl">
            <a href={config.instagram} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-rose-400 transition-all duration-300 hover:scale-110 transform">
              <FaInstagram />
            </a>
            <a href={config.whatsappLink} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-green-400 transition-all duration-300 hover:scale-110 transform">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-8 font-medium">Quick Links</h4>
          <div className="flex flex-col gap-4">
            {["/", "/collections", "/about", "/contact"].map((path, i) => (
              <Link key={i} to={path} className="link-underline text-gray-400 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 inline-block w-fit">
                {["Home", "Collections", "About", "Contact"][i]}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-8 font-medium">Collections</h4>
          <div className="flex flex-col gap-4">
            {["Bridal Wear", "Party Wear", "Ethnic Wear", "Kids Wear", "Designer Blouses"].map((c, i) => (
              <Link key={i} to="/collections" className="link-underline text-gray-400 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 inline-block w-fit">
                {c}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-8 font-medium">Contact</h4>
          <div className="space-y-6">
            <a href={config.phoneLink} className="flex items-start gap-4 text-gray-400 hover:text-white transition-colors duration-300 text-sm group">
              <div className="w-9 h-9 bg-gray-800/80 group-hover:bg-rose-600/20 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300">
                <FaPhoneAlt className="text-rose-500" size={13} />
              </div>
              <span className="pt-1.5">{config.phone}</span>
            </a>
            <a href={`mailto:${config.email}`} className="flex items-start gap-4 text-gray-400 hover:text-white transition-colors duration-300 text-sm group">
              <div className="w-9 h-9 bg-gray-800/80 group-hover:bg-rose-600/20 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300">
                <FaEnvelope className="text-rose-500" size={13} />
              </div>
              <span className="pt-1.5">{config.email}</span>
            </a>
            <div className="flex items-start gap-4 text-gray-400 text-sm group">
              <div className="w-9 h-9 bg-gray-800/80 rounded-lg flex items-center justify-center shrink-0">
                <FaMapMarkerAlt className="text-rose-500" size={13} />
              </div>
              <span className="pt-1.5">{config.address}</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800/80 py-8 px-6">
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-3 text-gray-500 text-xs tracking-wide">
          <p>© {new Date().getFullYear()} {config.businessName}. All Rights Reserved.</p>
          <p>Designed with ♥ for fashion lovers</p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
