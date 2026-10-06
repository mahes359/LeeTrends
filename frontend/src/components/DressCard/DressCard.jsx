import { Link } from "react-router-dom";

function DressCard({ dress }) {
  if (!dress) return null;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col h-full">
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
        <img
          src={dress.imageUrl}
          alt={dress.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {dress.featured && (
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-rose-700 text-[10px] tracking-[0.25em] uppercase px-2.5 py-1 rounded-full font-semibold shadow-xs">
            Featured
          </span>
        )}
        {!dress.available && (
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center">
            <span className="bg-white text-gray-900 text-xs tracking-widest uppercase font-semibold px-3 py-1.5 rounded-full shadow-md">
              Sold Out
            </span>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          {dress.category && (
            <p className="text-rose-500 text-[10px] tracking-[0.25em] uppercase font-semibold mb-1">
              {dress.category}
            </p>
          )}
          <h3
            className="text-xl font-bold text-gray-900 line-clamp-1 group-hover:text-rose-700 transition-colors"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            {dress.name}
          </h3>
          {dress.description && (
            <p className="text-gray-500 text-xs mt-1.5 line-clamp-2 font-light leading-relaxed">
              {dress.description}
            </p>
          )}
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
          <p className="text-rose-700 font-semibold text-base">
            ₹ {dress.price?.toLocaleString()}
          </p>
          <Link
            to={`/dress/${dress.id}`}
            className="text-xs tracking-wider uppercase font-medium text-gray-700 hover:text-rose-700 transition-colors"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DressCard;