import { useEffect, useState } from "react";
import { getTestimonials } from "../../services/testimonialService";

function Testimonials() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getTestimonials().then(setReviews).catch(console.error);
  }, []);

  if (reviews.length === 0) return null;

  return (
    <section className="py-24 md:py-36 bg-gray-950 text-white overflow-hidden relative border-t border-gray-900">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-rose-900/25 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rose-900/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="inline-block px-3.5 py-1 bg-rose-900/40 text-rose-300 border border-rose-700/40 text-[10px] tracking-[0.3em] uppercase font-semibold rounded-full mb-3">
            Real Experiences
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white tracking-wide"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Words from Our Patrons
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-10 h-px bg-rose-800" />
            <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            <div className="w-10 h-px bg-rose-800" />
          </div>
          <p className="text-gray-400 text-sm mt-4 font-light leading-relaxed">
            Honest reflections from brides, families, and couture lovers who trusted us with their defining moments.
          </p>
        </div>

        {/* Testimonials Boxing Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-9 hover:bg-white/[0.08] hover:border-rose-400/40 transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1 shadow-lg"
            >
              <div>
                {/* Star Rating & Quote Mark */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1 text-amber-400 text-sm">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <span key={j}>★</span>
                    ))}
                  </div>
                  <span
                    className="text-5xl text-rose-500/30 group-hover:text-rose-500/50 transition-colors leading-none select-none"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    “
                  </span>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed font-light italic mb-8">
                  "{r.text}"
                </p>
              </div>

              {/* Client Info Pill */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-white/10">
                <div className="w-11 h-11 bg-gradient-to-br from-rose-500 to-rose-700 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-md">
                  {r.name[0]}
                </div>
                <div className="min-w-0">
                  <p className="text-white font-semibold text-sm truncate">{r.name}</p>
                  <p className="text-rose-300/80 text-[10px] tracking-wider uppercase font-medium mt-0.5 truncate">
                    {r.role || "Bespoke Client"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
