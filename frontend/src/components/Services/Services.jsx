import { FaTshirt, FaCut, FaHeart, FaClock } from "react-icons/fa";

const services = [
  {
    icon: FaTshirt,
    title: "Customized Designs",
    desc: "Every bridal and couture piece is sketched and tailored to your exact measurements, style, and persona.",
    num: "01",
  },
  {
    icon: FaCut,
    title: "Perfect Stitching",
    desc: "Master craftsmanship with reinforced seams, luxury inner lining, and impeccable hand-finishing.",
    num: "02",
  },
  {
    icon: FaHeart,
    title: "Bridal Specialists",
    desc: "Bespoke bridal lehengas, reception gowns, and muhurtham ensembles designed for your unforgettable day.",
    num: "03",
  },
  {
    icon: FaClock,
    title: "On-Time Handover",
    desc: "Reliable production scheduling with timely fitting trials and punctual delivery well before your occasion.",
    num: "04",
  },
];

function Services() {
  return (
    <section className="py-24 md:py-32 bg-[#fdf8f5] relative overflow-hidden border-b border-rose-100/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="inline-block px-3.5 py-1 bg-rose-100/60 text-rose-700 border border-rose-200/50 text-[10px] tracking-[0.3em] uppercase font-semibold rounded-full mb-3">
            Why Choose Us
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-wide"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            The Lee Trends Promise
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-10 h-px bg-rose-200" />
            <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            <div className="w-10 h-px bg-rose-200" />
          </div>
          <p className="text-gray-500 text-sm mt-4 font-light leading-relaxed">
            Every stitch reflects our passion for couture excellence, precision tailoring, and client joy.
          </p>
        </div>

        {/* Structured Services Boxing Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 lg:p-9 border border-rose-100/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Card Header & Number */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-rose-50 to-rose-100/60 text-rose-700 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300">
                    <s.icon size={22} />
                  </div>
                  <span
                    className="text-3xl font-bold text-rose-200/80 group-hover:text-rose-400 transition-colors duration-300"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {s.num}
                  </span>
                </div>

                <h3
                  className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-rose-800 transition-colors"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  {s.desc}
                </p>
              </div>

              {/* Card Footer Micro-Detail */}
              <div className="pt-6 mt-6 border-t border-rose-50 flex items-center justify-between text-rose-600 text-xs font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                <span className="tracking-wider uppercase text-[11px]">Bespoke Care</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">✦</span>
              </div>

              {/* Bottom Glow Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;
