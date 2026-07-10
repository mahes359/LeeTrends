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
    <section className="py-24 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        <div className="text-center mb-16 md:mb-24">
          <p className="text-rose-500 text-xs tracking-[0.5em] uppercase mb-4 font-medium">Instagram</p>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            Our Gallery
          </h2>
          <div className="w-20 h-px bg-rose-400 mx-auto mt-8 mb-6" />
          <p className="text-gray-400 text-sm tracking-wide">
            Follow{" "}
            <a href={config.instagram} target="_blank" rel="noreferrer" className="text-rose-500 hover:text-rose-700 transition-colors">
              @lee_trend_s
            </a>{" "}
            for the latest collections
          </p>
        </div>

        <behold-widget feed-id={config.beholdWidgetId} class="w-full" />

        <div className="text-center mt-14">
          <a
            href={config.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 border border-rose-300 text-rose-600 px-10 py-4 text-sm tracking-widest uppercase hover:bg-rose-600 hover:text-white hover:border-rose-600 transition-all duration-300"
          >
            <FaInstagram size={16} />
            Follow on Instagram
          </a>
        </div>

      </div>
    </section>
  );
}

export default Gallery;
