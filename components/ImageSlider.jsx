"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules"
import Image from "next/image"
import { motion } from "framer-motion"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/effect-fade"
import "swiper/css/pagination"

const slides = [
  {
    id: 1,
    src: "/images/slider/slider6.jpg",
    title: "Pure & Natural Spices",
    subtitle: "Directly sourced from Indian farms",
  },
  {
    id: 2,
    src: "/images/slider4.jpg",
    title: "Authentic Indian Flavors",
    subtitle: "Carefully processed & hygienically packed",
  },
  {
    id: 3,
    src: "/packaging/reatailpacking.png",
    title: "Modern Packaging",
    subtitle: "Retail & bulk solutions for every business",
  },
]

export default function ImageSlider() {
  return (
    <section className="w-full max-w-7xl mx-auto mt-10 px-4">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade, Pagination]}
        effect="fade"
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="rounded-3xl shadow-2xl overflow-hidden"
      >
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative w-full"
            >
              {/* IMAGE */}
              <div className="relative w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-[400px]">
  <Image
                  src={s.src}
                  alt={s.title}
                  fill
                  priority={s.id === 1}
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, 90vw"
                />
              </div>

              {/* DARK CINEMATIC OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* TEXT CONTENT */}
              <div className="absolute inset-0 flex items-end">
                <div className="w-full text-center pb-10 px-4">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide drop-shadow-xl"
                  >
                    {s.title}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-3 text-orange-200 text-sm sm:text-base md:text-lg"
                  >
                    {s.subtitle}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
