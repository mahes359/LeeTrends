import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../services/api";
import Footer from "../components/Footer/Footer";
import { FaWhatsapp, FaGem, FaRulerCombined, FaShippingFast } from "react-icons/fa";
import { FiArrowLeft, FiTag, FiLayers, FiMaximize2, FiCalendar, FiDroplet } from "react-icons/fi";
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
    const message = `🌸 Hello Lee Trends,\n\nI'm interested in booking the following bespoke dress:\n\n👗 Dress: ${dress.name}\n📂 Category: ${dress.category}\n💰 Price: ₹${dress.price?.toLocaleString()}\n🧵 Fabric: ${dress.fabric || "Custom"}\n🎨 Color: ${dress.color || "As Shown"}\n📏 Size: ${dress.size || "Custom"}\n🎉 Occasion: ${dress.occasion || "Bespoke"}\n\nPlease share availability, customization options, and trial appointments.\n\nThank you!`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fdf8f5]">
        <div className="text-center p-8 bg-white rounded-3xl shadow-lg border border-rose-100/60">
          <div className="w-12 h-12 border-3 border-rose-200 border-t-rose-600 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-500 text-xs tracking-[0.3em] uppercase font-medium">Loading Creation...</p>
        </div>
      </div>
    );
  }

  if (!dress) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fdf8f5] text-center px-6">
        <div className="max-w-md bg-white p-10 rounded-3xl shadow-xl border border-rose-100">
          <p className="text-5xl mb-4">🌸</p>
          <h1 className="text-3xl font-bold text-gray-900 mb-3" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            Piece Not Found
          </h1>
          <p className="text-gray-500 text-sm mb-6 font-light">
            The dress you are looking for may have been archived or is no longer available.
          </p>
          <Link
            to="/collections"
            className="btn-glow inline-flex items-center justify-center bg-rose-700 hover:bg-rose-800 text-white px-8 py-3.5 text-xs tracking-widest uppercase font-medium rounded-full transition-all shadow-md"
          >
            Explore Collections
          </Link>
        </div>
      </div>
    );
  }

  const specs = [
    { label: "Category", value: dress.category, icon: FiTag },
    { label: "Fabric", value: dress.fabric, icon: FiLayers },
    { label: "Color Palette", value: dress.color, icon: FiDroplet },
    { label: "Available Sizes", value: dress.size, icon: FiMaximize2 },
    { label: "Occasion", value: dress.occasion, icon: FiCalendar },
  ].filter((d) => d.value);

  return (
    <div className="bg-[#fdf8f5] min-h-screen flex flex-col justify-between">
      {/* Top Breadcrumb & Page Header */}
      <div className="pt-24 sm:pt-32 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">

          {/* Navigation Bar */}
          <div className="mb-6 sm:mb-8 flex items-center justify-between">
            <Link
              to="/collections"
              className="inline-flex items-center gap-2 text-xs tracking-wider uppercase font-medium text-gray-500 hover:text-rose-700 transition-colors bg-white/80 hover:bg-white px-4 py-2 rounded-full border border-rose-100 shadow-xs group"
            >
              <FiArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Back to Collections</span>
            </Link>

            <span className="text-[11px] tracking-[0.25em] uppercase text-rose-500 font-semibold hidden sm:inline-block">
              Lee Trends Bespoke Studio
            </span>
          </div>

          {/* Main Showcase Grid */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Left Column: Portrait Showcase Box */}
            <div className="lg:col-span-6 xl:col-span-6">
              <div className="bg-white p-3 sm:p-4 rounded-3xl shadow-xl shadow-rose-950/5 border border-rose-100/70 lg:sticky lg:top-28">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-rose-50/30 group">
                  <img
                    src={dress.imageUrl}
                    alt={dress.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Floating Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {dress.featured && (
                      <span className="bg-rose-700/90 backdrop-blur-md text-white text-[10px] tracking-[0.25em] uppercase font-semibold px-3 py-1.5 rounded-full shadow-md">
                        Featured Piece
                      </span>
                    )}
                    <span className={`text-[10px] tracking-[0.2em] uppercase font-semibold px-3 py-1.5 rounded-full shadow-md backdrop-blur-md ${
                      dress.available
                        ? "bg-white/95 text-emerald-700 border border-emerald-200/60"
                        : "bg-white/95 text-red-600 border border-red-200/60"
                    }`}>
                      {dress.available ? "● In Stock" : "● Sold Out"}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white/90 text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    Bespoke Tailoring
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Structured Information Card */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-6">

              {/* Header & Pricing Box */}
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-xl shadow-rose-950/5 border border-rose-100/70 space-y-6">
                
                <div>
                  <div className="inline-block px-3 py-1 bg-rose-50 text-rose-700 border border-rose-200/60 text-[11px] tracking-[0.25em] uppercase font-semibold rounded-full mb-3">
                    {dress.category || "Designer Collection"}
                  </div>
                  <h1
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-wide"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {dress.name}
                  </h1>
                </div>

                {/* Price & Stock Pill */}
                <div className="flex flex-wrap items-baseline gap-3 p-4 bg-gradient-to-r from-rose-50/70 via-rose-50/30 to-transparent rounded-2xl border border-rose-100/80">
                  <div className="text-3xl sm:text-4xl font-bold text-rose-800" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                    ₹ {dress.price?.toLocaleString()}
                  </div>
                  <span className="text-xs text-gray-500 font-light tracking-wide">
                    (Inclusive of custom measurements & trials)
                  </span>
                </div>

                {/* Structured Specifications Grid */}
                <div>
                  <h3 className="text-xs tracking-[0.25em] uppercase font-semibold text-gray-400 mb-3.5">
                    Garment Specifications
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    {specs.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/70 border border-gray-150 hover:bg-rose-50/30 hover:border-rose-200/60 transition-all duration-200"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white text-rose-600 flex items-center justify-center shrink-0 shadow-xs border border-rose-100/50">
                          <item.icon size={14} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-[10px] tracking-[0.18em] uppercase text-gray-400 font-medium">
                            {item.label}
                          </p>
                          <p className="text-xs sm:text-sm font-semibold text-gray-800 break-words">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Description Box */}
                {dress.description && (
                  <div className="pt-4 border-t border-gray-100">
                    <h3 className="text-xs tracking-[0.25em] uppercase font-semibold text-gray-400 mb-2">
                      Design Notes & Artistry
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light">
                      {dress.description}
                    </p>
                  </div>
                )}

                {/* Call To Action Buttons Box */}
                <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={bookNow}
                    className="flex-1 btn-glow-green inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white py-3.5 sm:py-4 px-6 rounded-2xl text-xs tracking-[0.2em] uppercase font-semibold shadow-lg shadow-emerald-600/20 transition-all duration-300 cursor-pointer"
                  >
                    <FaWhatsapp size={18} />
                    <span>Book on WhatsApp</span>
                  </button>

                  <Link
                    to="/collections"
                    className="inline-flex items-center justify-center bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200/80 py-3.5 sm:py-4 px-6 rounded-2xl text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300 text-center"
                  >
                    More Collections
                  </Link>
                </div>
              </div>

              {/* Trust Badges Card - Responsive Stacking on Mobile */}
              <div className="bg-white p-5 sm:p-6 rounded-3xl shadow-md shadow-rose-950/5 border border-rose-100/70">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:divide-x divide-gray-100">
                  <div className="px-2">
                    <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-2 shadow-xs">
                      <FaGem size={15} />
                    </div>
                    <p className="text-xs font-semibold text-gray-800">Premium Fabrics</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">Pure silks & brocades</p>
                  </div>

                  <div className="px-2">
                    <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-2 shadow-xs">
                      <FaRulerCombined size={15} />
                    </div>
                    <p className="text-xs font-semibold text-gray-800">Perfect Fit</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">Tailored to precision</p>
                  </div>

                  <div className="px-2">
                    <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-2 shadow-xs">
                      <FaShippingFast size={15} />
                    </div>
                    <p className="text-xs font-semibold text-gray-800">On-Time Handover</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">Prior to your event</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default DressDetails;
