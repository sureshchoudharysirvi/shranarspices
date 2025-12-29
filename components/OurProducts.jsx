"use client"

import Image from "next/image"
import { motion } from "framer-motion"

// Product data
// Product data (ONLY dropdown items)
const products = [
  {
    id: 1,
    title: "Whole Spices",
    desc: "Premium quality whole spices sourced directly from Indian farms.",
    image: "/images/products/wholespice.jpg",
  },
  {
    id: 2,
    title: "Blended Spices",
    desc: "Authentic blended spices crafted for consistent taste and aroma.",
    image: "/images/products/Spice blend.jpg",
  },
  {
    id: 3,
    title: "Dehydrated Masala",
    desc: "Carefully dehydrated masala products with long shelf life and rich flavor.",
    image: "/images/products/dehydratedspice.jpg",
  },
]

// Animation variants
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function OurProducts() {
  return (
    <section className="bg-[#FFF8E7] py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* SECTION TITLE */}
        <motion.h2
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#5A382F] text-center"
        >
          Our Products
        </motion.h2>

        <motion.p
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-sm sm:text-base text-gray-600 mt-3 max-w-3xl mx-auto"
        >
          We offer a wide range of pure, lab-tested spices and masala solutions
          tailored for retailers, wholesalers, and B2B clients.
        </motion.p>

        {/* PRODUCTS GRID */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-14"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={fadeUpVariant}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all p-5"
            >
              {/* IMAGE */}
              <div className="relative w-full h-[170px] sm:h-[190px] md:h-[210px] rounded-xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                  sizes="(max-width: 640px) 90vw, 33vw"
                />
              </div>

              {/* TEXT */}
              <h3 className="mt-5 text-lg sm:text-xl font-bold text-orange-700 text-center">
                {product.title}
              </h3>

              <p className="mt-2 text-sm sm:text-base text-gray-600 text-center">
                {product.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
