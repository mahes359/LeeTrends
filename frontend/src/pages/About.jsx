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
      <div className="relative h-[65vh] overflow-hidden">
        <img src={hero} alt="About" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-black/30 flex items-center">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <p className="text-rose-300 text-xs tracking-[0.5em] uppercase mb-5 font-medium">Our Story</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              About {config.businessName}
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-rose-700 py-16 px-6">
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-10 text-center text-white">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <p className="text-5xl md:text-6xl font-bold" style={{ fontFamily: "Cormorant Garamond, serif" }}>{s.num}</p>
              <div className="w-8 h-px bg-rose-300 my-3" />
              <p className="text-rose-200 text-xs tracking-[0.3em] uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="py-24 md:py-36 bg-[#fdf8f5]">
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid lg:grid-cols-2 gap-20 items-center">
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
              className="inline-flex items-center gap-3 bg-green-600 text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-green-700 transition">
              <FaWhatsapp size={16} /> Chat With Us
            </a>
          </div>

          <div className="relative">
            <img src={bridal1} alt="Our Work" className="w-full aspect-[4/5] object-cover shadow-2xl" />
            <div className="absolute -bottom-8 -left-8 bg-rose-700 text-white p-10 hidden md:block">
              <p className="text-5xl font-bold" style={{ fontFamily: "Cormorant Garamond, serif" }}>8+</p>
              <div className="w-8 h-px bg-rose-300 my-3" />
              <p className="text-rose-200 text-xs tracking-widest uppercase">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center mb-16 md:mb-24">
            <p className="text-rose-500 text-xs tracking-[0.5em] uppercase mb-4 font-medium">Our Values</p>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              Why Clients Love Us
            </h2>
            <div className="w-20 h-px bg-rose-400 mx-auto mt-8" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="border border-rose-100 p-10 hover:border-rose-300 hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-rose-50 group-hover:bg-rose-100 flex items-center justify-center mb-7 transition-colors">
                  <span className="text-rose-600 font-bold text-sm">0{i + 1}</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4" style={{ fontFamily: "Cormorant Garamond, serif" }}>{v.title}</h3>
                <p className="text-gray-500 text-sm leading-8">{v.desc}</p>
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
