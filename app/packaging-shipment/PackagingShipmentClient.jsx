"use client"

import Image from "next/image"
import { motion } from "framer-motion"

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const imageZoom = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
}

export default function PackagingShipmentClient() {
  return (
    <section className="bg-[#FFF8E7]">

      {/* HERO */}
      <div className="py-14 text-center px-4">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-3xl md:text-5xl font-extrabold text-[#6B3F32]"
        >
          Packaging & Shipment Solutions
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-gray-700"
        >
          Hygienic, export-ready spice packaging combined with reliable domestic
          and international logistics you can trust.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 space-y-28">

        {/* BULK PACKAGING */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <motion.div variants={imageZoom} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white p-4 rounded-3xl shadow-xl max-w-md mx-auto">
            <Image src="/packaging/bulk.jpg" alt="Bulk spice packaging for exporters" width={600} height={400} className="rounded-2xl object-cover aspect-[4/3] hover:scale-105 transition" />
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl font-bold text-orange-700">
              Bulk Spice Packaging
            </h2>
            <p className="mt-4 text-gray-700">
              Designed for exporters, wholesalers, and food manufacturers,
              our bulk packaging ensures long shelf life and moisture protection.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["10kg – 50kg packs", "Food-grade materials", "Export-safe sealing", "Long-distance durability"].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl px-5 py-4 shadow-md text-[#6B3F32] font-medium"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RETAIL PACKAGING */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl font-bold text-orange-700">
              Retail Spice Packaging
            </h2>
            <p className="mt-4 text-gray-700">
              Attractive, airtight, and shelf-ready packaging solutions
              tailored for supermarkets, retail stores, and online sales.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Pouches & jars", "Custom branding", "Tamper-proof sealing", "Retail-ready design"].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl px-5 py-4 shadow-md text-[#6B3F32] font-medium"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={imageZoom} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white p-4 rounded-3xl shadow-xl max-w-md mx-auto">
            <Image src="/packaging/reatail packing.png" alt="Retail spice packaging with branding" width={600} height={400} className="rounded-2xl object-cover aspect-[4/3] hover:scale-105 transition" />
          </motion.div>
        </div>

        {/* SHIPMENT */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <motion.div variants={imageZoom} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white p-4 rounded-3xl shadow-xl max-w-md mx-auto">
            <Image src="/packaging/PANindia.jpg" alt="Pan India and international shipment" width={600} height={400} className="rounded-2xl object-cover aspect-[4/3] hover:scale-105 transition" />
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl font-bold text-orange-700">
              Shipment & Logistics
            </h2>
            <p className="mt-4 text-gray-700">
              Reliable logistics support for safe and timely delivery
              across India and international markets.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Pan-India delivery", "Export documentation", "Trusted carriers", "On-time dispatch"].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl px-5 py-4 shadow-md text-[#6B3F32] font-medium"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* QUALITY & COMPLIANCE */}
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-2xl md:text-3xl font-bold text-[#6B3F32]">
            Quality, Safety & Compliance
          </motion.h2>

          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-4 text-gray-700 max-w-3xl mx-auto">
            Every step of our packaging and shipment process follows strict
            food safety, hygiene, and export compliance standards.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
            className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {[
              "Food Safety & Hygiene Standards",
              "Export-Ready Packaging Compliance",
              "Secure & Trusted Logistics Network",
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.06 }}
                className="bg-white rounded-2xl px-6 py-8 shadow-lg border border-orange-100"
              >
                <p className="text-[#6B3F32] font-semibold text-base md:text-lg">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
