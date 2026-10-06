import { useEffect, useState } from "react";
import { getTestimonials } from "../../services/testimonialService";

function Testimonials() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getTestimonials().then(setReviews).catch(console.error);
  }, []);

  if (reviews.length === 0) return null;

  return (
    <section className="py-28 md:py-40 bg-rose-950 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-96 h-96 bg-rose-900/30 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rose-900/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-800/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">

        <div className="text-center mb-18 md:mb-28">
          <p className="text-rose-300 text-xs tracking-[0.5em] uppercase mb-4 font-medium">
            Testimonials
          </p>
          <h2
            className="text-5xl md:text-6xl font-bold text-white"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Words from Our Clients
          </h2>
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="w-8 h-px bg-rose-400/60" />
            <div className="w-2 h-2 rounded-full bg-rose-400/80" />
            <div className="w-8 h-px bg-rose-400/60" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="relative bg-white/5 border border-white/10 rounded-sm p-10 lg:p-12 hover:bg-white/10 hover:border-rose-400/40 transition-all duration-500 group hover:-translate-y-1"
            >
              <span
                className="absolute top-4 right-6 text-8xl md:text-9xl text-rose-800/40 group-hover:text-rose-700/60 transition-colors duration-500 select-none leading-none"
                style={{ fontFamily: "Georgia, serif" }}
              >
                "
              </span>

              <div className="flex gap-1 mb-7">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <span key={j} className="text-amber-400 text-base">★</span>
                ))}
              </div>

              <p className="text-gray-300 leading-9 text-sm italic relative z-10 mb-12">
                "{r.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-rose-700 rounded-full flex items-center justify-center text-white font-bold text-base shrink-0 shadow-lg">
                  {r.name[0]}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{r.name}</p>
                  <p className="text-rose-300/80 text-xs tracking-widest uppercase mt-1">{r.role}</p>
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
