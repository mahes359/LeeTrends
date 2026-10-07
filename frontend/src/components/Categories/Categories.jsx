import { Link } from "react-router-dom";
import bridal from "../../assets/images/bridal1.jpg";
import party from "../../assets/images/party1.jpg";
import ethnic from "../../assets/images/ethnic1.jpg";
import kids from "../../assets/images/kids1.jpg";
import bridal2 from "../../assets/images/bridal2.jpg";
import { FiArrowUpRight } from "react-icons/fi";

const categories = [
  {
    title: "Bridal Wear",
    subtitle: "Wedding & Reception",
    image: bridal,
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Party Wear",
    subtitle: "Glamour & Chic",
    image: party,
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    title: "Ethnic Wear",
    subtitle: "Tradition & Grace",
    image: ethnic,
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    title: "Kids Wear",
    subtitle: "Whimsical & Cute",
    image: kids,
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    title: "Designer Blouses",
    subtitle: "Maggam & Zardozi",
    image: bridal2,
    span: "lg:col-span-1 lg:row-span-1",
  },
];

function Categories() {
  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <span className="inline-block px-3.5 py-1 bg-rose-50 text-rose-700 border border-rose-200/60 text-[10px] tracking-[0.3em] uppercase font-semibold rounded-full mb-3">
            Explore Collections
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-wide"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Curated Categories
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-10 h-px bg-rose-200" />
            <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            <div className="w-10 h-px bg-rose-200" />
          </div>
          <p className="text-gray-500 text-xs sm:text-sm mt-3.5 font-light leading-relaxed">
            Discover bespoke silhouettes handcrafted for grand celebrations and intimate festivities.
          </p>
        </div>

        {/* Category Grid with Balanced Boxing & Padding */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 auto-rows-[250px] sm:auto-rows-[270px] lg:auto-rows-[290px]">
          {categories.map((item, i) => (
            <Link
              key={i}
              to="/collections"
              className={`group relative rounded-3xl overflow-hidden border border-rose-100/60 shadow-md hover:shadow-2xl transition-all duration-500 ${item.span}`}
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
              />

              {/* Multi-stage Contrast Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-950/30 to-transparent group-hover:from-gray-950/95 transition-all duration-500" />

              {/* Floating Top Arrow Pill */}
              <div className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center group-hover:bg-rose-700 group-hover:border-rose-600 transition-all duration-300 shadow-md group-hover:scale-110">
                <FiArrowUpRight size={17} />
              </div>

              {/* Bottom Content Card / Plaque */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <span className="inline-block px-3 py-0.5 bg-white/20 backdrop-blur-md text-rose-200 text-[10px] tracking-[0.2em] uppercase font-medium rounded-full mb-2">
                  {item.subtitle}
                </span>
                <h3
                  className={`text-white font-bold leading-tight drop-shadow-md group-hover:text-rose-100 transition-colors ${
                    i === 0 ? "text-2xl sm:text-3xl md:text-4xl" : "text-lg sm:text-xl md:text-2xl"
                  }`}
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-300 text-xs mt-1.5 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                  <span>Explore designs</span>
                  <span>→</span>
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Categories;
