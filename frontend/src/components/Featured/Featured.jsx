import { useEffect, useState } from "react";
import { getFeaturedDresses } from "../../services/dressService";
import { Link } from "react-router-dom";

function Featured() {
  const [dresses, setDresses] = useState([]);

  useEffect(() => {
    getFeaturedDresses().then(setDresses).catch(console.error);
  }, []);

  if (dresses.length === 0) return null;

  return (
    <section className="py-28 md:py-40 bg-[#fdf8f5]">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-18 md:mb-24 gap-6">
          <div>
            <p className="text-rose-500 text-xs tracking-[0.5em] uppercase mb-4 font-medium">
              Handpicked
            </p>
            <h2
              className="text-5xl md:text-6xl font-bold text-gray-900"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Featured Pieces
            </h2>
          </div>
          <Link
            to="/collections"
            className="text-sm tracking-widest uppercase text-rose-600 border-b border-rose-300 pb-1 hover:border-rose-600 transition-all duration-300 self-start md:self-auto whitespace-nowrap hover:tracking-[0.2em]"
          >
            View All →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {dresses.map((dress) => (
            <Link to={`/dress/${dress.id}`} key={dress.id} className="group block">
              <div className="relative overflow-hidden bg-white shadow-sm rounded-sm hover:shadow-xl transition-shadow duration-500">
                <div className="overflow-hidden aspect-[3/4]">
                  <img
                    src={dress.imageUrl}
                    alt={dress.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {dress.featured && (
                    <span className="bg-rose-600 text-white text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-sm shadow-sm">
                      Featured
                    </span>
                  )}
                  {!dress.available && (
                    <span className="bg-gray-800 text-white text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-sm shadow-sm">
                      Sold Out
                    </span>
                  )}
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-400 flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100">
                  <span className="bg-white text-gray-900 text-xs tracking-widest uppercase px-8 py-3 shadow-lg rounded-sm hover:bg-rose-600 hover:text-white transition-colors">
                    View Details
                  </span>
                </div>
              </div>
              <div className="pt-6 pb-3">
                <p className="text-rose-400 text-[10px] tracking-[0.3em] uppercase mb-2">{dress.category}</p>
                <h3
                  className="text-gray-900 text-xl font-semibold group-hover:text-rose-700 transition-colors duration-300"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {dress.name}
                </h3>
                <p className="text-rose-600 font-semibold mt-2.5 text-sm tracking-wide">₹ {dress.price?.toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Featured;
