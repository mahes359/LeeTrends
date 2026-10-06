import Footer from "../components/Footer/Footer";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FiClock, FiArrowRight } from "react-icons/fi";
import config from "../config";

function Contact() {
  const contactInfo = [
    { icon: FaPhoneAlt, label: "Direct Phone", value: config.phone, href: config.phoneLink },
    { icon: FaEnvelope, label: "Studio Email", value: config.email, href: `mailto:${config.email}` },
    { icon: FaMapMarkerAlt, label: "Boutique Location", value: config.address, href: null },
    { icon: FiClock, label: "Consultation Hours", value: "Mon – Sat, 10:00 AM – 8:00 PM", href: null },
  ];

  return (
    <div className="bg-[#fdf8f5] min-h-screen flex flex-col justify-between">
      <div>
        {/* Page Header */}
        <div className="pt-32 sm:pt-40 pb-16 text-center px-6">
          <span className="inline-block px-3.5 py-1 bg-rose-100/70 text-rose-700 border border-rose-200/60 text-[10px] tracking-[0.3em] uppercase font-semibold rounded-full mb-3">
            Get In Touch
          </span>
          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-bold text-gray-900 tracking-wide"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Visit & Contact Us
          </h1>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-10 h-px bg-rose-200" />
            <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            <div className="w-10 h-px bg-rose-200" />
          </div>
          <p className="text-gray-500 text-sm mt-3 font-light max-w-md mx-auto leading-relaxed">
            Reach out for bridal consultations, bespoke fittings, or inquiries about customized couture.
          </p>
        </div>

        {/* Main Content Showcase */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 pb-24 md:pb-36">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

            {/* Left Column: Contact Cards Box */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl shadow-rose-950/5 border border-rose-100/70 space-y-6">
                <div>
                  <h2
                    className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    Let's Create Your Dream Outfit
                  </h2>
                  <p className="text-gray-500 text-sm mt-2 font-light">
                    Visit our bespoke studio or book a remote video fitting session.
                  </p>
                </div>

                {/* Info List with Boxing */}
                <div className="space-y-3.5">
                  {contactInfo.map((c, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50/70 border border-gray-150 hover:bg-rose-50/30 hover:border-rose-200 transition-all duration-200"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white text-rose-600 flex items-center justify-center shrink-0 shadow-xs border border-rose-100/60 mt-0.5">
                        <c.icon size={15} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-semibold mb-0.5">
                          {c.label}
                        </p>
                        {c.href ? (
                          <a
                            href={c.href}
                            className="text-gray-800 font-medium text-sm hover:text-rose-700 transition-colors block truncate"
                          >
                            {c.value}
                          </a>
                        ) : (
                          <p className="text-gray-800 font-medium text-sm leading-relaxed">
                            {c.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Connect Pills */}
                <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-3">
                  <a
                    href={config.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200/80 text-xs tracking-wider uppercase font-semibold transition-all shadow-xs"
                  >
                    <FaInstagram size={14} />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={config.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200/80 text-xs tracking-wider uppercase font-semibold transition-all shadow-xs"
                  >
                    <FaWhatsapp size={14} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Luxury Consultation Card */}
            <div className="lg:col-span-6 bg-gradient-to-br from-gray-950 via-gray-900 to-rose-950 text-white p-8 sm:p-12 rounded-3xl shadow-xl shadow-gray-950/20 border border-gray-800 flex flex-col justify-between relative overflow-hidden">
              {/* Decorative Blur Orbs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-rose-700/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/15 text-rose-300 text-[10px] tracking-[0.3em] uppercase font-semibold rounded-full mb-3">
                    Fast Track Consultation
                  </span>
                  <h3
                    className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-wide"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    Plan Your Perfect Fit
                  </h3>
                  <p className="text-gray-300 text-sm mt-3 font-light leading-relaxed">
                    Message us directly on WhatsApp for real-time fabric previews, price estimates, and trial bookings.
                  </p>
                </div>

                {/* 4 Steps Pills */}
                <div className="space-y-3 pt-2">
                  {[
                    "Share your event date & style vision",
                    "Receive custom sketches & fabric swatches",
                    "Schedule trials & measurement fitting",
                    "Take home your bespoke couture creation",
                  ].map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/10"
                    >
                      <span className="w-6 h-6 rounded-full bg-rose-700 text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-gray-200 text-xs sm:text-sm font-light">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="relative z-10 pt-8 mt-6 border-t border-white/10">
                <a
                  href={config.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-glow-green w-full inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white py-4 px-6 rounded-2xl text-xs tracking-[0.2em] uppercase font-semibold shadow-xl transition-all duration-300"
                >
                  <FaWhatsapp size={18} />
                  <span>Start WhatsApp Consultation</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
