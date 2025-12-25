"use client"

import Image from "next/image"
import { motion } from "framer-motion"

// Animations
const imageVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function PackagingShipmentClient() {
  return (
    <section className="bg-[#FFF8E7]">

      {/* HERO */}
      <div className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Packaging & Shipment
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          Safe, hygienic and export-ready spice packaging with reliable delivery
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">

        {/* BULK PACKAGING */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-3 rounded-2xl shadow-md max-w-md mx-auto"
          >
            <Image
              src="/packaging/bulk.jpg"
              alt="Bulk Spice Packaging"
              width={600}
              height={400}
              className="rounded-xl object-cover aspect-[4/3] max-h-[360px] hover:scale-105 transition"
            />
          </motion.div>

          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-orange-700">
              Bulk Packaging
            </h2>
            <p className="mt-4 text-gray-700">
              Strong and moisture-resistant packaging for wholesalers,
              exporters, and food manufacturers.
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-700">
              <li>10kg – 50kg packs</li>
              <li>Food-grade material</li>
              <li>Export standards</li>
            </ul>
          </motion.div>
        </div>

        {/* RETAIL PACKAGING */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-orange-700">
              Retail Packaging
            </h2>
            <p className="mt-4 text-gray-700">
              Attractive and airtight packaging for supermarkets, stores and
              online sales.
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-700">
              <li>Pouches & jars</li>
              <li>Custom branding</li>
              <li>Hygienic sealing</li>
            </ul>
          </motion.div>

          <motion.div
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-3 rounded-2xl shadow-md max-w-md mx-auto"
          >
            <Image
              src="/packaging/reatail packing.png"
              alt="Retail Packaging"
              width={600}
              height={400}
              className="rounded-xl object-cover aspect-[4/3] max-h-[360px] hover:scale-105 transition"
            />
          </motion.div>
        </div>

        {/* SHIPMENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-3 rounded-2xl shadow-md max-w-md mx-auto"
          >
            <Image
              src="/packaging/PANindia.jpg"
              alt="Pan India Shipment"
              width={600}
              height={400}
              className="rounded-xl object-cover aspect-[4/3] max-h-[360px] hover:scale-105 transition"
            />
          </motion.div>

          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-orange-700">
              Shipment & Logistics
            </h2>
            <p className="mt-4 text-gray-700">
              Reliable domestic and international shipment with proper
              documentation.
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-700">
              <li>Pan-India delivery</li>
              <li>Export support</li>
              <li>On-time dispatch</li>
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
