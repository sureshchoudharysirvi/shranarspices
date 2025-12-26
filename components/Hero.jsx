"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const texts = [
  {
    title: "Pure, Aromatic & Premium Indian Spices",
    desc: "Trusted by wholesalers, distributors and spice businesses worldwide.",
  },
  {
    title: "Custom Branding for Your Company",
    desc: "Private label spice packaging tailored to your brand identity, market, and customers.",
  },
  {
    title: "From Indian Farms to Global Markets",
    desc: "Delivering authentic flavors with modern packaging and logistics.",
  },
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full overflow-hidden h-[70vh] md:h-[85vh]">

      {/* VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"

      >
        <source src="/videos/masala.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl text-white">

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                {texts[index].title}
              </h1>

              <p className="mt-5 text-base md:text-lg text-gray-200">
                {texts[index].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <Link
            href="/products"
            className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full font-semibold transition shadow-lg"
          >
            Explore Our Range
          </Link>

        </div>
      </div>
    </section>
  )
}
