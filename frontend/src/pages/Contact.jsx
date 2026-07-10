import Footer from "../components/Footer/Footer";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import config from "../config";

function Contact() {
  const contactInfo = [
    { icon: FaPhoneAlt, label: "Phone", value: config.phone, href: config.phoneLink },
    { icon: FaEnvelope, label: "Email", value: config.email, href: `mailto:${config.email}` },
    { icon: FaMapMarkerAlt, label: "Location", value: config.address, href: null },
    { icon: FiClock, label: "Hours", value: "Mon – Sat, 10 AM – 7 PM", href: null },
  ];

  return (
    <>
      <div className="pt-40 pb-20 bg-[#fdf8f5] text-center px-6">
        <p className="text-rose-500 text-xs tracking-[0.5em] uppercase mb-4 font-medium">Get In Touch</p>
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900" style={{ fontFamily: "Cormorant Garamond, serif" }}>
          Contact Us
        </h1>
        <div className="w-20 h-px bg-rose-400 mx-auto mt-8" />
        <p className="text-gray-500 mt-6 text-sm max-w-lg mx-auto leading-8">
          Reach out for styling consultations, dress bookings, or questions about our latest collection.
        </p>
      </div>

      <section className="bg-[#fdf8f5] pb-24 md:pb-36 px-6">
        <div className="max-w-6xl mx-auto px-0 md:px-10 grid lg:grid-cols-2 gap-14">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              Let's create something beautiful together
            </h2>

            <div className="space-y-4 mb-12">
              {contactInfo.map((c, i) => (
                <div key={i} className="flex items-start gap-6 p-6 bg-white border border-rose-100 hover:border-rose-300 transition-colors group">
                  <div className="w-12 h-12 bg-rose-50 group-hover:bg-rose-100 flex items-center justify-center shrink-0 transition-colors">
                    <c.icon className="text-rose-600" size={16} />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-2">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-gray-800 font-medium text-sm hover:text-rose-600 transition-colors">{c.value}</a>
                    ) : (
                      <p className="text-gray-800 font-medium text-sm">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <a href={config.instagram} target="_blank" rel="noreferrer"
                className="flex items-center gap-3 border border-gray-200 text-gray-600 hover:border-rose-400 hover:text-rose-600 px-6 py-3.5 text-sm transition-all duration-300">
                <FaInstagram /> Instagram
              </a>
              <a href={config.whatsappLink} target="_blank" rel="noreferrer"
                className="flex items-center gap-3 border border-gray-200 text-gray-600 hover:border-green-400 hover:text-green-600 px-6 py-3.5 text-sm transition-all duration-300">
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-rose-950 text-white p-12 flex flex-col justify-between">
            <div>
              <p className="text-rose-300 text-xs tracking-[0.5em] uppercase mb-5 font-medium">Book a Consultation</p>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                Ready to find your perfect outfit?
              </h3>
              <p className="text-gray-400 text-sm leading-9 mb-10">
                Chat with us directly on WhatsApp for the fastest response. Share your occasion, preferred style, and budget — we'll take care of the rest.
              </p>
              <div className="space-y-4 mb-12">
                {["Share your occasion & style", "Get personalized recommendations", "Book your fitting appointment", "Receive your dream outfit"].map((step, i) => (
                  <div key={i} className="flex items-center gap-4 text-sm text-gray-300">
                    <span className="w-7 h-7 bg-rose-700 text-white text-xs flex items-center justify-center shrink-0 font-bold">{i + 1}</span>
                    {step}
                  </div>
                ))}
              </div>
            </div>
            <a href={config.whatsappLink} target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white py-5 text-sm tracking-widest uppercase transition-all duration-300 font-semibold">
              <FaWhatsapp size={18} /> Start on WhatsApp
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
