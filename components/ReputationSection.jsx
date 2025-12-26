"use client"

import Image from "next/image"
import { motion } from "framer-motion"

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

export default function ReputationSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-6 pb-4">

      {/* HEADING */}
      <motion.h2
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl font-extrabold text-[#5A382F] text-center"
      >
        Why Choose Shranar Spices?
      </motion.h2>

      <motion.p
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-center text-sm sm:text-base text-gray-600 mt-2 max-w-2xl mx-auto"
      >
        The trusted choice for pure, tested, and scalable spice solutions for businesses.
      </motion.p>

      {/* CARDS GRID */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12"
      >

        {/* Card 1 */}
        <motion.div
          variants={fadeUpVariant}
          whileHover={{ y: -8 }}
          className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-4"
        >
          <div className="relative w-full h-[150px] sm:h-[170px] md:h-[190px] lg:h-[215px] overflow-hidden rounded-xl">
            <Image
              src="/images/natural.png"
              alt="Pure & Natural Spices"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>
          <h3 className="font-bold text-lg sm:text-xl text-orange-700 text-center mt-4">
            Pure & Natural
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mt-2 text-center">
            Spices sourced directly from farmers and processed with zero artificial colors.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={fadeUpVariant}
          whileHover={{ y: -8 }}
          className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-4"
        >
          <div className="relative w-full h-[150px] sm:h-[170px] md:h-[190px] lg:h-[215px] overflow-hidden rounded-xl">
            <Image
              src="/images/labm.png"
              alt="Lab Tested Spices"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>
          <h3 className="font-bold text-lg sm:text-xl text-orange-700 text-center mt-4">
            Lab Tested
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mt-2 text-center">
            Every batch is lab tested to meet strict quality standards for B2B clients.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={fadeUpVariant}
          whileHover={{ y: -8 }}
          className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-4"
        >
          <div className="relative w-full h-[150px] sm:h-[170px] md:h-[190px] lg:h-[215px] overflow-hidden rounded-xl">
            <Image
              src="/images/bulk.png"
              alt="Bulk Spice Supply"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>
          <h3 className="font-bold text-lg sm:text-xl text-orange-700 text-center mt-4">
            Bulk Supply
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mt-2 text-center">
            Ready bulk stock, private labeling, and reliable on-time delivery.
          </p>
        </motion.div>

      </motion.div>
    </section>
  )
}
