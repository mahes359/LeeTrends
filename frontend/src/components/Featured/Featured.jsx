import { useEffect, useState } from "react";
import { getFeaturedDresses } from "../../services/dressService";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

function Featured() {
  const [dresses, setDresses] = useState([]);

  useEffect(() => {
    getFeaturedDresses().then(setDresses).catch(console.error);
  }, []);

  if (dresses.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-[#fdf8f5] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 md:mb-20 gap-6">
          <div>
            <span className="inline-block px-3.5 py-1 bg-rose-100/70 text-rose-700 border border-rose-200/60 text-[10px] tracking-[0.3em] uppercase font-semibold rounded-full mb-3">
              Curated Showcase
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 tracking-wide"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Featured Masterpieces
            </h2>
          </div>
          <Link
            to="/collections"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-rose-700 hover:text-rose-900 bg-white hover:bg-rose-50 px-5 py-2.5 rounded-full border border-rose-200/70 shadow-xs transition-all duration-300 self-start sm:self-auto group"
          >
            <span>View All Pieces</span>
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Unified Luxury Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {dresses.map((dress) => (
            <Link
              to={`/dress/${dress.id}`}
              key={dress.id}
              className="bg-white rounded-3xl p-3.5 border border-rose-100/70 shadow-xs hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-400 flex flex-col justify-between group"
            >
              {/* Product Image Box */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-50 mb-4">
                <img
                  src={dress.imageUrl}
                  alt={dress.name}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                />

                {/* Status Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  {dress.featured && (
                    <span className="bg-rose-700 text-white text-[9px] tracking-[0.25em] uppercase font-semibold px-2.5 py-1 rounded-full shadow-xs">
                      Featured
                    </span>
                  )}
                  {!dress.available && (
                    <span className="bg-gray-900/90 text-white text-[9px] tracking-[0.2em] uppercase font-semibold px-2.5 py-1 rounded-full backdrop-blur-xs">
                      Sold Out
                    </span>
                  )}
                </div>

                {/* Hover Quick Action */}
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <span className="bg-white/95 backdrop-blur-sm text-gray-900 text-[11px] tracking-widest uppercase font-semibold px-5 py-2.5 rounded-full shadow-lg">
                    View Creation
                  </span>
                </div>
              </div>

              {/* Product Info Box */}
              <div className="p-3 pt-0 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-rose-500 text-[10px] tracking-[0.25em] uppercase font-semibold">
                    {dress.category}
                  </span>
                  <h3
                    className="text-gray-900 text-xl font-bold mt-1 line-clamp-1 group-hover:text-rose-700 transition-colors"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {dress.name}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <p className="text-rose-700 font-bold text-base">
                    ₹ {dress.price?.toLocaleString()}
                  </p>
                  <span className="text-[11px] tracking-wider uppercase font-medium text-gray-400 group-hover:text-rose-600 transition-colors">
                    Details →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Featured;
