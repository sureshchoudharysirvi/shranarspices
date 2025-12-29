"use client"

import Link from "next/link"
import { motion } from "framer-motion"

/* Animations */
const container = {
  visible: {
    transition: { staggerChildren: 0.18 },
  },
}

const fadeSlide = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function ProductsClient() {
  return (
    <section className="relative overflow-hidden bg-[#FFF8E7] py-24">
      {/* Background accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.h1
          variants={fadeSlide}
          initial={false}
          animate="visible"
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-[#6B3F32]"
        >
          Our Products
        </motion.h1>

        <motion.p
          variants={fadeSlide}
          initial={false}
          animate="visible"
          transition={{ delay: 0.1 }}
          className="text-center text-gray-600 mt-4 max-w-3xl mx-auto text-sm sm:text-base"
        >
          Premium quality spices crafted exclusively for B2B buyers,
          wholesalers, exporters, and food brands.
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={container}
          initial={false}
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-20"
        >
          <CategoryCard
            title="Whole Spices"
            link="/products/whole-spices"
            desc="Pure, natural and unprocessed spices sourced directly from farms."
            bg="bg-[#F3F7E8]"
          />
          <CategoryCard
            title="Blended Spices"
            link="/products/blended-spices"
            desc="Expertly crafted blends ensuring consistency and authentic taste."
            bg="bg-[#E9FFF4]"
          />
          <CategoryCard
            title="Dehydrated Masala"
            link="/products/dehydrated-masala"
            desc="Carefully dehydrated products with long shelf life and rich aroma."
            bg="bg-[#EEF0FF]"
          />
        </motion.div>
      </div>
    </section>
  )
}

function CategoryCard({ title, desc, link, bg }) {
  return (
    <motion.div variants={fadeSlide}>
      <Link
        href={link}
        className={`group relative block rounded-3xl p-10 text-center
        shadow-md transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl ${bg}`}
      >
        <div
          className="absolute inset-0 rounded-3xl opacity-0 
          group-hover:opacity-100 transition duration-500
          bg-gradient-to-br from-white/40 to-transparent"
        />

        <h3 className="relative text-2xl font-bold text-[#6B3F32]">
          {title}
        </h3>

        <p className="relative mt-4 text-gray-600 text-sm sm:text-base">
          {desc}
        </p>

        <div className="relative mt-6 text-sm font-semibold text-orange-700 opacity-0 group-hover:opacity-100 transition">
          Explore Products →
        </div>
      </Link>
    </motion.div>
  )
}
