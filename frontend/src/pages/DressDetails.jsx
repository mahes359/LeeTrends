import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../services/api";
import Footer from "../components/Footer/Footer";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";

import config from "../config";

function DressDetails() {
  const { id } = useParams();
  const [dress, setDress] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get(`/dresses/${id}`)
      .then((r) => setDress(r.data))
      .catch(() => setDress(null))
      .finally(() => setLoading(false));
  }, [id]);

  function bookNow() {
    const phone = config.whatsapp;
    const message = `🌸 Hello Lee Trends,\n\nI'm interested in the following dress.\n\n👗 Dress Name : ${dress.name}\n📂 Category : ${dress.category}\n💰 Price : ₹${dress.price}\n🧵 Fabric : ${dress.fabric}\n🎨 Color : ${dress.color}\n📏 Size : ${dress.size}\n🎉 Occasion : ${dress.occasion}\n\nPlease share more details regarding availability and booking.\n\nThank you.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fdf8f5]">
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-rose-300 border-t-rose-600 rounded-full animate-spin mx-auto mb-5" />
          <p className="text-gray-400 text-sm tracking-widest uppercase">Loading</p>
        </div>
      </div>
    );
  }

  if (!dress) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fdf8f5] text-center px-6">
        <p className="text-6xl mb-8">🌸</p>
        <h1 className="text-4xl font-bold mb-5" style={{ fontFamily: "Cormorant Garamond, serif" }}>
          Dress Not Found
        </h1>
        <Link to="/collections" className="mt-4 bg-rose-600 text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-rose-700 transition">
          Back to Collections
        </Link>
      </div>
    );
  }

  const details = [
    { label: "Category", value: dress.category },
    { label: "Fabric", value: dress.fabric },
    { label: "Color", value: dress.color },
    { label: "Size", value: dress.size },
    { label: "Occasion", value: dress.occasion },
  ].filter((d) => d.value);

  return (
    <>
      <div className="min-h-screen bg-[#fdf8f5] pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-16">

          <Link
            to="/collections"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-rose-600 text-sm tracking-wide transition-colors mb-14 group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Collections
          </Link>

          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* Image */}
            <div className="relative group overflow-hidden bg-white shadow-xl">
              <img
                src={dress.imageUrl}
                alt={dress.name}
                className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {dress.featured && (
                <span className="absolute top-5 left-5 bg-rose-600 text-white text-[10px] tracking-widest uppercase px-3 py-1.5">
                  Featured
                </span>
              )}
            </div>

            {/* Details */}
            <div className="lg:sticky lg:top-28">
              <p className="text-rose-400 text-xs tracking-[0.4em] uppercase mb-4">{dress.category}</p>
              <h1
                className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {dress.name}
              </h1>

              <div className="flex items-center gap-5 mt-7">
                <p className="text-3xl font-bold text-rose-600" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  ₹ {dress.price?.toLocaleString()}
                </p>
                <span
                  className={`text-xs tracking-widest uppercase px-4 py-2 font-medium ${
                    dress.available
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {dress.available ? "In Stock" : "Out of Stock"}
                </span>
              </div>

              <div className="w-full h-px bg-gray-200 my-10" />

              <div className="space-y-5">
                {details.map((d, i) => (
                  <div key={i} className="flex items-start gap-6">
                    <span className="text-xs tracking-[0.3em] uppercase text-gray-400 w-24 shrink-0 pt-0.5">
                      {d.label}
                    </span>
                    <span className="text-gray-800 text-sm font-medium">{d.value}</span>
                  </div>
                ))}
              </div>

              {dress.description && (
                <>
                  <div className="w-full h-px bg-gray-200 my-10" />
                  <h2
                    className="text-2xl font-semibold text-gray-900 mb-4"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    About this piece
                  </h2>
                  <p className="text-gray-500 leading-9 text-sm">{dress.description}</p>
                </>
              )}

              <div className="flex flex-wrap gap-4 mt-12">
                <button
                  onClick={bookNow}
                  className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300"
                >
                  <FaWhatsapp size={16} />
                  Book on WhatsApp
                </button>
                <Link
                  to="/collections"
                  className="border border-rose-300 text-rose-600 hover:bg-rose-600 hover:text-white px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300"
                >
                  More Collections
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6 border-t border-gray-100 pt-10">
                {["Premium Fabric", "Custom Fit", "Fast Delivery"].map((b, i) => (
                  <div key={i} className="text-center">
                    <p className="text-rose-500 text-xl mb-2">✦</p>
                    <p className="text-gray-500 text-xs tracking-wide">{b}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DressDetails;
