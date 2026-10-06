import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import config from "../../config";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import hero from "../../assets/images/hero.jpg";
import bridal1 from "../../assets/images/bridal1.jpg";
import bridal2 from "../../assets/images/bridal2.jpg";
import party1 from "../../assets/images/party1.jpg";

const slides = [
  { image: hero, tag: "New Collection 2025", title: "Exclusive Designer\nBoutique", subtitle: "Designed for You. Stitched to Perfection." },
  { image: bridal1, tag: "Bridal Collection", title: "Premium Bridal\nWear", subtitle: "Make Your Wedding Day Unforgettable." },
  { image: bridal2, tag: "Ethnic Wear", title: "Elegant Ethnic\nCollections", subtitle: "Where Tradition Meets Modern Fashion." },
  { image: party1, tag: "Party Wear", title: "Look Stunning\nEverywhere", subtitle: "Curated Party Wear for Every Occasion." },
];

function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen w-full">
              <img src={slide.image} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Decorative sparkles */}
      <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-white/30 rounded-full z-10 hidden lg:block" style={{ animation: "float404 3s ease-in-out infinite" }} />
      <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-white/20 rounded-full z-10 hidden lg:block" style={{ animation: "float404 4s ease-in-out infinite 1s" }} />

      <div className="absolute inset-0 z-10 flex items-center pointer-events-none">
        <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="text-rose-300 text-xs md:text-sm tracking-[0.4em] uppercase mb-5 font-medium">
                {slides[activeIndex].tag}
              </p>
              <h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-7 whitespace-pre-line drop-shadow-lg"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {slides[activeIndex].title}
              </h1>
              <p className="text-gray-300 text-base md:text-xl mb-12 max-w-lg font-light tracking-wide">
                {slides[activeIndex].subtitle}
              </p>
              <div className="flex flex-wrap gap-5 pointer-events-auto">
                <a
                  href="/collections"
                  className="btn-glow bg-rose-600 hover:bg-rose-700 text-white px-9 py-4 text-sm tracking-widest uppercase transition-all duration-300"
                >
                  Explore Collection
                </a>
                <a
                  href={config.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-white/50 text-white hover:bg-white hover:text-rose-700 px-9 py-4 text-sm tracking-widest uppercase transition-all duration-300 backdrop-blur-sm hover:shadow-lg"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-12 right-10 z-10 text-white/60 text-sm tracking-widest hidden md:block">
        <span className="text-white text-2xl font-light" style={{ fontFamily: "Cormorant Garamond, serif" }}>
          0{activeIndex + 1}
        </span>
        {" / "}0{slides.length}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 scroll-indicator pointer-events-none">
        <span className="text-white/50 text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <FiChevronDown className="text-white/50" size={18} />
      </div>
    </div>
  );
}

export default HeroSlider;
