import { useEffect, useMemo, useState } from "react";
import { getAllDresses } from "../services/dressService";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { FiSearch, FiArrowRight } from "react-icons/fi";

const CATEGORIES = ["All", "Bridal", "Party Wear", "Ethnic", "Kids Wear"];

function Collections() {
  const [dresses, setDresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    getAllDresses()
      .then((data) => setDresses(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    let result = dresses;
    if (category !== "All") result = result.filter(d => d.category.toLowerCase() === category.toLowerCase());
    if (search) result = result.filter(d => d.name.toLowerCase().includes(search.toLowerCase()));
    return result;
  }, [search, category, dresses]);

  return (
    <div className="bg-[#fdf8f5] min-h-screen flex flex-col justify-between">
      <div>
        {/* Page Header */}
        <div className="pt-28 sm:pt-36 pb-12 sm:pb-16 text-center px-6">
          <span className="inline-block px-3.5 py-1 bg-rose-100/70 text-rose-700 border border-rose-200/60 text-[10px] tracking-[0.3em] uppercase font-semibold rounded-full mb-3">
            Atelier Portfolio
          </span>
          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-bold text-gray-900 tracking-wide"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Our Collections
          </h1>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-10 h-px bg-rose-200" />
            <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            <div className="w-10 h-px bg-rose-200" />
          </div>
          <p className="text-gray-500 text-xs sm:text-sm mt-3 font-light max-w-md mx-auto leading-relaxed">
            Explore handcrafted bridal wear, festive lehengas, gowns, and bespoke couture tailored in Rasipuram.
          </p>
        </div>

        {/* Content Container */}
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 pb-20 md:pb-28">

          {/* Unified Filter & Search Bar Box */}
          <div className="bg-white rounded-3xl p-3.5 sm:p-5 border border-rose-100/80 shadow-xs mb-8 flex flex-col md:flex-row gap-3.5 sm:gap-4 items-center justify-between">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start w-full md:w-auto">
              {CATEGORIES.map((cat) => {
                const isActive = category === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-4 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-xs tracking-wider uppercase font-semibold rounded-full transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-rose-700 text-white shadow-md shadow-rose-900/20"
                        : "bg-gray-50 text-gray-600 hover:bg-rose-50 hover:text-rose-700 border border-rose-200/60"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input Box */}
            <div className="relative w-full md:w-80">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={15} />
              <input
                className="w-full border border-rose-200/60 bg-gray-50/70 pl-11 pr-4 py-2.5 text-xs sm:text-sm rounded-full placeholder-gray-400 focus:outline-none focus:border-rose-400 focus:bg-white focus:ring-2 focus:ring-rose-100 transition-all duration-300"
                placeholder="Search by dress name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Results count label */}
          {!loading && (
            <div className="flex items-center justify-between px-2 mb-6 text-xs tracking-wider uppercase text-gray-400 font-medium">
              <span>Showing {filtered.length} {filtered.length === 1 ? "Creation" : "Creations"}</span>
              {(category !== "All" || search) && (
                <button
                  onClick={() => { setCategory("All"); setSearch(""); }}
                  className="text-rose-600 hover:underline"
                >
                  Reset all filters
                </button>
              )}
            </div>
          )}

          {/* Product Grid - Adaptively Balanced (No empty right wasteland!) */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="bg-white rounded-3xl p-3.5 border border-gray-100 space-y-3">
                  <div className="skeleton-shimmer aspect-[3/4] w-full rounded-2xl" />
                  <div className="p-2 space-y-2">
                    <div className="h-3 skeleton-shimmer w-1/3 rounded-full" />
                    <div className="h-5 skeleton-shimmer w-3/4 rounded-full" />
                    <div className="h-4 skeleton-shimmer w-1/4 rounded-full pt-2" />
                  </div>
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 sm:p-16 text-center border border-rose-100/60 shadow-xs max-w-lg mx-auto">
              <p className="text-4xl mb-3">🌸</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                No Pieces Found
              </h3>
              <p className="text-gray-500 text-sm mb-6 font-light leading-relaxed">
                We couldn't find any designs matching "{search}". Try searching for another keyword or clear filters.
              </p>
              <button
                onClick={() => { setSearch(""); setCategory("All"); }}
                className="btn-glow px-6 py-2.5 rounded-full bg-rose-700 text-white text-xs tracking-widest uppercase font-semibold shadow-md"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div
              className={`grid gap-6 ${
                filtered.length === 1
                  ? "max-w-md mx-auto grid-cols-1"
                  : filtered.length === 2
                  ? "max-w-3xl mx-auto grid-cols-1 sm:grid-cols-2"
                  : filtered.length === 3
                  ? "max-w-5xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              }`}
            >
              {filtered.map((dress) => (
                <Link
                  to={`/dress/${dress.id}`}
                  key={dress.id}
                  className="bg-white rounded-3xl p-3.5 border border-rose-100/70 shadow-xs hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-400 flex flex-col justify-between group"
                >
                  {/* Image Box */}
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-50 mb-3.5">
                    <img
                      src={dress.imageUrl}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                      alt={dress.name}
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

                    {/* Hover Overlay Button */}
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                      <span className="bg-white/95 backdrop-blur-sm text-gray-900 text-[11px] tracking-widest uppercase font-semibold px-5 py-2.5 rounded-full shadow-lg">
                        View Details
                      </span>
                    </div>
                  </div>

                  {/* Info Box */}
                  <div className="p-2.5 pt-0 flex flex-col justify-between flex-1">
                    <div>
                      <span className="text-rose-500 text-[10px] tracking-[0.25em] uppercase font-semibold">
                        {dress.category}
                      </span>
                      <h2
                        className="text-gray-900 text-lg sm:text-xl font-bold mt-1 line-clamp-1 group-hover:text-rose-700 transition-colors"
                        style={{ fontFamily: "Cormorant Garamond, serif" }}
                      >
                        {dress.name}
                      </h2>
                    </div>

                    <div className="mt-3.5 pt-3 border-t border-gray-100 flex items-center justify-between">
                      <p className="text-rose-700 font-bold text-base sm:text-lg">
                        ₹ {dress.price?.toLocaleString()}
                      </p>
                      <span className="text-[11px] tracking-wider uppercase font-medium text-gray-400 group-hover:text-rose-600 transition-colors flex items-center gap-1">
                        <span>Details</span>
                        <FiArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Collections;
