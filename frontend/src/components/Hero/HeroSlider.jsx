import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
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
              <p className="text-rose-300 text-xs md:text-sm tracking-[0.4em] uppercase mb-4 font-medium">
                {slides[activeIndex].tag}
              </p>
              <h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6 whitespace-pre-line"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {slides[activeIndex].title}
              </h1>
              <p className="text-gray-300 text-base md:text-xl mb-10 max-w-lg font-light tracking-wide">
                {slides[activeIndex].subtitle}
              </p>
              <div className="flex flex-wrap gap-4 pointer-events-auto">
                <a
                  href="/collections"
                  className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-lg hover:shadow-rose-600/30"
                >
                  Explore Collection
                </a>
                <a
                  href={config.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-white/60 text-white hover:bg-white hover:text-rose-700 px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 backdrop-blur-sm"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 z-10 text-white/60 text-sm tracking-widest hidden md:block">
        <span className="text-white text-2xl font-light" style={{ fontFamily: "Cormorant Garamond, serif" }}>
          0{activeIndex + 1}
        </span>
        {" / "}0{slides.length}
      </div>
    </div>
  );
}

export default HeroSlider;
