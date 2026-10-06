import Footer from "../components/Footer/Footer";
import hero from "../assets/images/hero.jpg";
import bridal1 from "../assets/images/bridal1.jpg";
import { FaWhatsapp } from "react-icons/fa";
import config from "../config";

const stats = [
  { num: "500+", label: "Happy Clients" },
  { num: "8+", label: "Years Experience" },
  { num: "1000+", label: "Designs Created" },
  { num: "4.9★", label: "Customer Rating" },
];

const values = [
  { title: "Premium Quality", desc: "We source only the finest fabrics — silks, georgettes, and handloom weaves." },
  { title: "Custom Fit", desc: "Every piece is tailored to your exact measurements for a perfect silhouette." },
  { title: "Personal Service", desc: "One-on-one styling consultations to bring your vision to life." },
  { title: "Timely Delivery", desc: "We respect your timeline and deliver every order on schedule." },
];

function About() {
  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[65vh] overflow-hidden">
        <img src={hero} alt="About" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-black/30 flex items-center">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <p className="text-rose-300 text-xs tracking-[0.5em] uppercase mb-5 font-medium">Our Story</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-lg" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              About {config.businessName}
            </h1>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-gradient-to-r from-rose-700 via-rose-600 to-rose-700 py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)" }} />
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-10 text-center text-white relative z-10">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center group">
              <p className="text-4xl md:text-6xl font-bold group-hover:scale-105 transition-transform duration-300" style={{ fontFamily: "Cormorant Garamond, serif" }}>{s.num}</p>
              <div className="w-8 h-px bg-rose-300/70 my-4 group-hover:w-12 transition-all duration-300" />
              <p className="text-rose-200 text-xs tracking-[0.3em] uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Who We Are */}
      <section className="py-28 md:py-40 bg-[#fdf8f5]">
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div>
            <p className="text-rose-500 text-xs tracking-[0.5em] uppercase mb-5 font-medium">Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-10" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              Crafting elegance for every special moment
            </h2>
            <p className="text-gray-500 leading-9 text-sm mb-6">
              {config.businessName} is a boutique fashion studio based in {config.address}, known for designer collections that blend timeless charm with modern styling. From bridal wear to festive ensembles, every piece is curated to make celebrations feel unforgettable.
            </p>
            <p className="text-gray-500 leading-9 text-sm mb-12">
              Our team focuses on premium fabrics, flattering silhouettes, and personalized service so every customer feels confident and beautifully dressed for their most important moments.
            </p>
            <a href={config.whatsappLink} target="_blank" rel="noreferrer"
              className="btn-glow-green inline-flex items-center gap-3 bg-green-600 text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-green-700 transition-all duration-300 rounded-sm">
              <FaWhatsapp size={16} /> Chat With Us
            </a>
          </div>

          <div className="relative">
            <div className="img-zoom rounded-sm overflow-hidden shadow-2xl">
              <img src={bridal1} alt="Our Work" className="w-full aspect-[4/5] object-cover" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-rose-700 to-rose-800 text-white p-10 hidden md:block rounded-sm shadow-xl">
              <p className="text-5xl font-bold" style={{ fontFamily: "Cormorant Garamond, serif" }}>8+</p>
              <div className="w-8 h-px bg-rose-300/60 my-3" />
              <p className="text-rose-200 text-xs tracking-widest uppercase">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center mb-18 md:mb-28">
            <p className="text-rose-500 text-xs tracking-[0.5em] uppercase mb-4 font-medium">Our Values</p>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              Why Clients Love Us
            </h2>
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="w-8 h-px bg-rose-300" />
              <div className="w-2 h-2 rounded-full bg-rose-400" />
              <div className="w-8 h-px bg-rose-300" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((v, i) => (
              <div key={i} className="border border-rose-100/80 rounded-sm p-10 hover:border-rose-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-400 group overflow-hidden relative">
                <div className="w-12 h-12 bg-rose-50 group-hover:bg-rose-100 rounded-lg flex items-center justify-center mb-7 transition-all duration-300 group-hover:scale-105">
                  <span className="text-rose-600 font-bold text-sm">0{i + 1}</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4" style={{ fontFamily: "Cormorant Garamond, serif" }}>{v.title}</h3>
                <p className="text-gray-500 text-sm leading-8">{v.desc}</p>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-rose-400 to-rose-600 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
