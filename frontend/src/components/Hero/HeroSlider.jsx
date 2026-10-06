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
  {
    image: hero,
    tag: "Haute Couture 2025",
    title: "Exclusive Designer\nBoutique",
    subtitle: "Designed for your silhouette. Handcrafted with unyielding perfection.",
  },
  {
    image: bridal1,
    tag: "Bridal Masterpieces",
    title: "Timeless Bridal\nHeirlooms",
    subtitle: "Royal lehengas and wedding ensembles for your most precious day.",
  },
  {
    image: bridal2,
    tag: "Bespoke Ethnic",
    title: "Graceful Ethnic\nSilhouettes",
    subtitle: "Where deep-rooted Indian heritage meets modern couture sensibilities.",
  },
  {
    image: party1,
    tag: "Cocktail & Soirée",
    title: "Captivating Party\nEnsembles",
    subtitle: "Turn heads at every festive celebration with our glamorous gowns.",
  },
];

function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative h-screen min-h-[680px] w-full overflow-hidden bg-gray-950">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-950/85 via-gray-950/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Hero Typography & CTA Overlay */}
      <div className="absolute inset-0 z-10 flex items-center pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full pt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <div className="inline-block px-3.5 py-1 bg-rose-500/20 backdrop-blur-md border border-rose-400/30 text-rose-200 text-[10px] tracking-[0.35em] uppercase font-semibold rounded-full mb-5">
                {slides[activeIndex].tag}
              </div>

              <h1
                className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-6 whitespace-pre-line drop-shadow-lg tracking-wide"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {slides[activeIndex].title}
              </h1>

              <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-10 max-w-lg font-light tracking-wide leading-relaxed">
                {slides[activeIndex].subtitle}
              </p>

              <div className="flex flex-wrap gap-4 pointer-events-auto">
                <a
                  href="/collections"
                  className="btn-glow inline-flex items-center justify-center bg-rose-700 hover:bg-rose-800 active:bg-rose-900 text-white px-8 py-4 rounded-full text-xs tracking-[0.2em] uppercase font-semibold shadow-xl shadow-rose-900/30 transition-all duration-300"
                >
                  Explore Collection
                </a>
                <a
                  href={config.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center bg-white/15 hover:bg-white text-white hover:text-rose-800 border border-white/40 backdrop-blur-md px-8 py-4 rounded-full text-xs tracking-[0.2em] uppercase font-semibold shadow-lg transition-all duration-300"
                >
                  Book Consultation
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Counter (Desktop) */}
      <div className="absolute bottom-12 right-12 z-10 text-white/70 text-xs tracking-widest hidden md:flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/15">
        <span className="text-white text-lg font-semibold" style={{ fontFamily: "Cormorant Garamond, serif" }}>
          0{activeIndex + 1}
        </span>
        <span className="text-white/40">/</span>
        <span className="text-white/60">0{slides.length}</span>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 scroll-indicator pointer-events-none">
        <span className="text-white/60 text-[9px] tracking-[0.35em] uppercase font-medium">Scroll</span>
        <FiChevronDown className="text-white/60" size={16} />
      </div>
    </div>
  );
}

export default HeroSlider;
