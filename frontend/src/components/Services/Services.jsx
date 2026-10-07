import { FaTshirt, FaCut, FaHeart, FaClock } from "react-icons/fa";

const services = [
  {
    icon: FaTshirt,
    title: "Customized Designs",
    desc: "Bespoke bridal and couture pieces sketched and tailored to your exact measurements and style.",
    num: "01",
  },
  {
    icon: FaCut,
    title: "Perfect Stitching",
    desc: "Master craftsmanship with reinforced seams, luxury lining, and immaculate hand-embroidery.",
    num: "02",
  },
  {
    icon: FaHeart,
    title: "Bridal Specialists",
    desc: "Royal lehengas, reception gowns, and festive sarees designed for your unforgettable moments.",
    num: "03",
  },
  {
    icon: FaClock,
    title: "On-Time Handover",
    desc: "Reliable tailoring timelines with scheduled fitting trials well before your celebration.",
    num: "04",
  },
];

function Services() {
  return (
    <section className="py-20 md:py-28 bg-[#fdf8f5] relative border-b border-rose-100/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <span className="inline-block px-3.5 py-1 bg-rose-100/70 text-rose-700 border border-rose-200/60 text-[10px] tracking-[0.3em] uppercase font-semibold rounded-full mb-3">
            Why Choose Us
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-wide"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            The Lee Trends Promise
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-10 h-px bg-rose-200" />
            <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            <div className="w-10 h-px bg-rose-200" />
          </div>
          <p className="text-gray-500 text-sm mt-3.5 font-light leading-relaxed">
            Every stitch reflects our dedication to couture excellence, precision tailoring, and timeless grace.
          </p>
        </div>

        {/* Services Boxing Grid - Generous width and comfortable internal padding */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-rose-100/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-50 to-rose-100/70 text-rose-700 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    <s.icon size={20} />
                  </div>
                  <span
                    className="text-2xl font-bold text-rose-300/80 group-hover:text-rose-500 transition-colors"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {s.num}
                  </span>
                </div>

                <h3
                  className="text-xl sm:text-2xl font-bold text-gray-900 mb-2.5 group-hover:text-rose-800 transition-colors"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-light">
                  {s.desc}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 mt-5 border-t border-rose-50 flex items-center justify-between text-rose-600 text-xs font-medium">
                <span className="tracking-wider uppercase text-[10px] text-gray-400 group-hover:text-rose-600 transition-colors">
                  Bespoke Atelier
                </span>
                <span className="text-rose-400 group-hover:translate-x-1 transition-transform">✦</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;
