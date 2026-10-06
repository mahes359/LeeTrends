import { FaTshirt, FaCut, FaHeart, FaClock } from "react-icons/fa";

const services = [
  { icon: FaTshirt, title: "Customized Designs", desc: "Every dress is crafted to your exact style, measurements, and vision.", num: "01" },
  { icon: FaCut, title: "Perfect Stitching", desc: "Professional finishing with premium quality fabrics and expert tailoring.", num: "02" },
  { icon: FaHeart, title: "Bridal Specialists", desc: "Wedding, Reception, Engagement and exclusive Designer Wear.", num: "03" },
  { icon: FaClock, title: "On-Time Delivery", desc: "We value your time and ensure every order is delivered promptly.", num: "04" },
];

function Services() {
  return (
    <section className="py-28 md:py-40 bg-[#fdf8f5]">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        <div className="text-center mb-18 md:mb-28">
          <p className="text-rose-500 text-xs tracking-[0.5em] uppercase mb-4 font-medium">
            Why Choose Us
          </p>
          <h2
            className="text-5xl md:text-6xl font-bold text-gray-900"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            The Lee Trends Promise
          </h2>
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="w-8 h-px bg-rose-300" />
            <div className="w-2 h-2 rounded-full bg-rose-400" />
            <div className="w-8 h-px bg-rose-300" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative bg-white border border-rose-100/80 p-10 lg:p-11 rounded-sm hover:border-rose-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              <span
                className="absolute top-5 right-6 text-8xl font-bold text-rose-50 group-hover:text-rose-100 transition-colors duration-300 select-none leading-none"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {s.num}
              </span>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-rose-50 group-hover:bg-rose-100 rounded-lg flex items-center justify-center mb-8 transition-all duration-300 group-hover:scale-105">
                  <s.icon className="text-rose-600" size={26} />
                </div>
                <h3
                  className="text-2xl font-semibold text-gray-900 mb-4"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-8">{s.desc}</p>
              </div>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-rose-400 to-rose-600 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;
