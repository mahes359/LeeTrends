import { useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import config from "../../config";

function Gallery() {
  useEffect(() => {
    if (!document.querySelector("script[src*='behold.so']")) {
      const script = document.createElement("script");
      script.src = "https://w.behold.so/widget.js";
      script.type = "module";
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section className="py-20 md:py-28 bg-white relative w-full">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="inline-block px-3.5 py-1 bg-rose-50 text-rose-700 border border-rose-200/60 text-[10px] tracking-[0.3em] uppercase font-semibold rounded-full mb-3">
            Social Studio
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-wide"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Live from Instagram
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4 mb-4">
            <div className="w-10 h-px bg-rose-200" />
            <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            <div className="w-10 h-px bg-rose-200" />
          </div>
          <p className="text-gray-500 text-sm font-light">
            Follow our behind-the-scenes bespoke trials and reels at{" "}
            <a
              href={config.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-rose-700 hover:text-rose-900 font-semibold underline decoration-rose-300 underline-offset-4"
            >
              @lee_trend_s
            </a>
          </p>
        </div>

        {/* Behold Widget Box */}
        <div className="rounded-3xl overflow-hidden border border-rose-100/70 p-2 sm:p-4 bg-[#fdf8f5] shadow-xs">
          <behold-widget feed-id={config.beholdWidgetId} class="w-full" />
        </div>

        {/* Follow Button */}
        <div className="text-center mt-12">
          <a
            href={config.instagram}
            target="_blank"
            rel="noreferrer"
            className="btn-glow inline-flex items-center gap-2.5 bg-rose-700 hover:bg-rose-800 text-white px-8 py-3.5 rounded-full text-xs tracking-[0.2em] uppercase font-semibold shadow-md shadow-rose-900/20 transition-all duration-300"
          >
            <FaInstagram size={16} />
            <span>Follow @lee_trend_s</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Gallery;
