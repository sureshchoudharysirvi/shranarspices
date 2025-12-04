"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  { id: 1, src: "/images/slider1.png", title: "Pure & Natural", subtitle: "Directly from farms, 100% safe", },
  { id: 2, src: "/images/slider4.jpg", title: "Lab Tested", subtitle: "Quality you can trust", },
  { id: 3, src: "/images/slider3.png", title: "Bulk Supply", subtitle: "On-time delivery for businesses", },
];

export default function ImageSlider() {
  return (
    <section className="w-full max-w-6xl mx-auto mt-6 px-4">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade, Pagination]}
        effect="fade"
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        className="rounded-2xl shadow-xl overflow-hidden"
      >

        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            {/* Motion wrapper for zoom effect */}
            <motion.div
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative w-full"
            >

              {/* Image Box — Adjust height here 👇 */}
              <div className="relative w-full h-[230px] sm:h-[300px] md:h-[380px] lg:h-[470px]">
                <Image
                  src={s.src}
                  alt={s.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, 90vw"
                  priority={s.id === 1}
                />
              </div>

              {/* Gradient Overlay Text */}
              <div className="absolute inset-0 bg-gradient-t from-black/70 via-black/40 to-transparent flex items-end">
                <div className="w-full text-center pb-8 px-3">
                  <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold drop-shadow-lg">
                    {s.title}
                  </h2>
                  <p className="text-orange-200 mt-2 text-sm sm:text-base md:text-lg opacity-95">
                    {s.subtitle}
                  </p>
                </div>
              </div>

            </motion.div>
          </SwiperSlide>
        ))}

      </Swiper>

      {/* Extra category section you can add later */}
     
    </section>
  );
}
