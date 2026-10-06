import { useEffect, useMemo, useState } from "react";
import { getAllDresses } from "../services/dressService";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { FiSearch } from "react-icons/fi";

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
    <>
      {/* Page Header */}
      <div className="pt-44 pb-20 bg-[#fdf8f5] text-center px-6">
        <p className="text-rose-500 text-xs tracking-[0.5em] uppercase mb-4 font-medium">Browse</p>
        <h1
          className="text-6xl md:text-7xl font-bold text-gray-900"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Our Collections
        </h1>
        <div className="flex items-center justify-center gap-3 mt-8">
          <div className="w-8 h-px bg-rose-300" />
          <div className="w-2 h-2 rounded-full bg-rose-400" />
          <div className="w-8 h-px bg-rose-300" />
        </div>
      </div>

      <div className="bg-[#fdf8f5] pb-28 md:pb-40 px-6">
        <div className="max-w-7xl mx-auto px-0 md:px-10">

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-5 items-center justify-between mb-14">
            <div className="flex flex-wrap gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-6 py-2.5 text-xs tracking-widest uppercase border rounded-sm transition-all duration-300 ${
                    category === cat
                      ? "bg-rose-600 border-rose-600 text-white shadow-md shadow-rose-600/20"
                      : "border-gray-300 text-gray-600 hover:border-rose-400 hover:text-rose-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-80">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                className="w-full border border-gray-200 bg-white pl-12 pr-4 py-3.5 text-sm rounded-sm focus:outline-none focus:border-rose-400 focus:shadow-sm focus:shadow-rose-100 transition-all duration-300"
                placeholder="Search dresses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Results count */}
          {!loading && (
            <p className="text-gray-400 text-sm mb-10 tracking-wide">
              {filtered.length} {filtered.length === 1 ? "piece" : "pieces"} found
            </p>
          )}

          {/* Grid */}
          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i}>
                  <div className="skeleton-shimmer aspect-[3/4] w-full rounded-sm" />
                  <div className="mt-5 h-3 skeleton-shimmer w-1/3 rounded" />
                  <div className="mt-3 h-5 skeleton-shimmer w-2/3 rounded" />
                  <div className="mt-2 h-4 skeleton-shimmer w-1/4 rounded" />
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-32">
              <p className="text-5xl mb-6">🌸</p>
              <p className="text-gray-400 text-lg">No dresses found for your search.</p>
              <button
                onClick={() => { setSearch(""); setCategory("All"); }}
                className="mt-8 text-rose-600 text-sm tracking-widest uppercase border-b border-rose-300 hover:border-rose-600 transition-colors pb-1"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {filtered.map((dress) => (
                <Link to={`/dress/${dress.id}`} key={dress.id} className="group block">
                  <div className="relative overflow-hidden bg-white shadow-sm rounded-sm hover:shadow-xl transition-shadow duration-500">
                    <div className="overflow-hidden aspect-[3/4]">
                      <img
                        src={dress.imageUrl}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        alt={dress.name}
                      />
                    </div>
                    {!dress.available && (
                      <span className="absolute top-4 left-4 bg-gray-800 text-white text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-sm">
                        Sold Out
                      </span>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-400 flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100">
                      <span className="bg-white text-gray-900 text-xs tracking-widest uppercase px-8 py-3 shadow-lg rounded-sm hover:bg-rose-600 hover:text-white transition-colors">
                        View Details
                      </span>
                    </div>
                  </div>
                  <div className="pt-6">
                    <p className="text-rose-400 text-[10px] tracking-[0.3em] uppercase mb-2">{dress.category}</p>
                    <h2
                      className="text-gray-900 text-xl font-semibold group-hover:text-rose-700 transition-colors duration-300"
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      {dress.name}
                    </h2>
                    <p className="text-rose-600 font-semibold mt-2.5 text-sm">₹ {dress.price?.toLocaleString()}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}

        </div>
      </div>
      <Footer />
    </>
  );
}

export default Collections;
