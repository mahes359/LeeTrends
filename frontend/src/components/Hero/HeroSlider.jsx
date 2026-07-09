import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import hero from "../../assets/images/hero.jpg";
import bridal1 from "../../assets/images/bridal1.jpg";
import bridal2 from "../../assets/images/bridal2.jpg";
import party1 from "../../assets/images/party1.jpg";

function HeroSlider() {

    const slides = [

        {
            image: hero,
            title: "Exclusive Designer Boutique",
            subtitle: "Designed for You. Stitched to Perfection."
        },

        {
            image: bridal1,
            title: "Premium Bridal Collection",
            subtitle: "Make Your Wedding Memorable."
        },

        {
            image: bridal2,
            title: "Elegant Ethnic Wear",
            subtitle: "Tradition Meets Fashion."
        },

        {
            image: party1,
            title: "Party Wear Collection",
            subtitle: "Look Stunning Everywhere."
        }

    ];

    return (

        <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false
            }}
            pagination={{
                clickable: true
            }}
            navigation
            loop
        >

            {slides.map((slide, index) => (

                <SwiperSlide key={index}>

                    <div className="relative">

                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-screen object-cover"
                        />

                        <div className="absolute inset-0 bg-black/50 flex items-center">

                            <div className="max-w-7xl mx-auto px-10">

                                <h1 className="text-6xl font-bold text-white mb-6">
                                    {slide.title}
                                </h1>

                                <p className="text-2xl text-gray-200 mb-8">
                                    {slide.subtitle}
                                </p>

                                <a
                                    href="/collections"
                                    className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-lg text-xl transition"
                                >
                                    Explore Collection
                                </a>

                            </div>

                        </div>

                    </div>

                </SwiperSlide>

            ))}

        </Swiper>

    );

}

export default HeroSlider;