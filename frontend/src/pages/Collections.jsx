import { useEffect, useState } from "react";
import { getAllDresses } from "../services/dressService";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { FiSearch } from "react-icons/fi";

const CATEGORIES = ["All", "Bridal", "Party Wear", "Ethnic", "Kids Wear"];

function Collections() {
  const [dresses, setDresses] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    getAllDresses()
      .then((data) => { setDresses(data); setFiltered(data); })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    let result = dresses;
    if (category !== "All") result = result.filter(d => d.category.toLowerCase() === category.toLowerCase());
    if (search) result = result.filter(d => d.name.toLowerCase().includes(search.toLowerCase()));
    setFiltered(result);
  }, [search, category, dresses]);

  return (
    <>
      {/* Page Header */}
      <div className="pt-40 pb-20 bg-[#fdf8f5] text-center px-6">
        <p className="text-rose-500 text-xs tracking-[0.5em] uppercase mb-4 font-medium">Browse</p>
        <h1
          className="text-6xl md:text-7xl font-bold text-gray-900"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Our Collections
        </h1>
        <div className="w-20 h-px bg-rose-400 mx-auto mt-8" />
      </div>

      <div className="bg-[#fdf8f5] pb-24 md:pb-36 px-6">
        <div className="max-w-7xl mx-auto px-0 md:px-10">

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-5 items-center justify-between mb-14">
            <div className="flex flex-wrap gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-6 py-2.5 text-xs tracking-widest uppercase border transition-all duration-300 ${
                    category === cat
                      ? "bg-rose-600 border-rose-600 text-white"
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
                className="w-full border border-gray-200 bg-white pl-12 pr-4 py-3.5 text-sm focus:outline-none focus:border-rose-400 transition-colors"
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 aspect-[3/4] w-full" />
                  <div className="mt-4 h-3 bg-gray-200 w-1/3 rounded" />
                  <div className="mt-3 h-5 bg-gray-200 w-2/3 rounded" />
                  <div className="mt-2 h-4 bg-gray-200 w-1/4 rounded" />
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-32">
              <p className="text-5xl mb-6">🌸</p>
              <p className="text-gray-400 text-lg">No dresses found for your search.</p>
              <button
                onClick={() => { setSearch(""); setCategory("All"); }}
                className="mt-8 text-rose-600 text-sm tracking-widest uppercase border-b border-rose-300 hover:border-rose-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filtered.map((dress) => (
                <Link to={`/dress/${dress.id}`} key={dress.id} className="group block">
                  <div className="relative overflow-hidden bg-white shadow-sm">
                    <div className="overflow-hidden aspect-[3/4]">
                      <img
                        src={dress.imageUrl}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        alt={dress.name}
                      />
                    </div>
                    {!dress.available && (
                      <span className="absolute top-4 left-4 bg-gray-800 text-white text-[10px] tracking-widest uppercase px-3 py-1">
                        Sold Out
                      </span>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-400 flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100">
                      <span className="bg-white text-gray-900 text-xs tracking-widest uppercase px-8 py-3 shadow">
                        View Details
                      </span>
                    </div>
                  </div>
                  <div className="pt-5">
                    <p className="text-rose-400 text-[10px] tracking-[0.3em] uppercase mb-2">{dress.category}</p>
                    <h2
                      className="text-gray-900 text-xl font-semibold group-hover:text-rose-700 transition-colors"
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      {dress.name}
                    </h2>
                    <p className="text-rose-600 font-semibold mt-2 text-sm">₹ {dress.price?.toLocaleString()}</p>
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
