"use client"

import Image from "next/image"
import { motion } from "framer-motion"

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

// Infinite gentle float
const floatAnim = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

export default function AboutPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-14">

      {/* HERO SECTION */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-bold text-yellow-900 leading-tight"
          >
            Shranar Spices – <br /> India’s Trusted B2B Bulk Masala Supplier
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-gray-700 text-base sm:text-lg"
          >
            Premium, 100% natural, chemical-free Indian spice and masala manufacturer
            supplying in bulk to restaurants, wholesalers, retailers, distributors,
            food brands, and global export partners.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="bg-yellow-900 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-yellow-800 transition"
            >
              Get Bulk Pricing Quote
            </a>
            <a
              href="/catalogue.pdf"
              className="border border-yellow-900 text-yellow-900 px-6 py-3 rounded-2xl hover:bg-yellow-50 transition"
            >
              Download Product Catalogue
            </a>
          </motion.div>
        </motion.div>

        {/* HERO IMAGE */}
        <motion.div {...floatAnim}>
          <Image
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d"
            alt="Bulk Indian spices and masala blends for B2B business supply"
            width={600}
            height={450}
            priority
            className="rounded-2xl shadow-xl w-full object-cover max-h-[380px]"
          />
        </motion.div>
      </div>

      {/* OWNER SECTION */}
     {/* OWNER SECTION - IMPROVED */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
  className="mt-24"
>
  <div className="bg-gradient-to-br from-yellow-50 to-white rounded-3xl shadow-xl border border-yellow-200 px-6 py-12 text-center">

    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="text-3xl sm:text-4xl font-bold text-yellow-900"
    >
      Meet the Founder
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="mt-2 text-gray-600 text-lg"
    >
      Driven by purity, quality, and long-term B2B partnerships
    </motion.p>

    {/* Founder Image */}
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="mt-8 flex justify-center"
    >
      <div className="relative">
        <Image
          src="/packaging/b.jpg"
          alt="Founder Naresh Choudhary"
          width={180}
          height={180}
          className="rounded-full border-4 border-yellow-900 shadow-2xl object-cover"
        />
        {/* Decorative Ring */}
        <div className="absolute -inset-2 rounded-full border-2 border-yellow-300 opacity-40"></div>
      </div>
    </motion.div>

    {/* Name */}
    <motion.h3
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="mt-5 text-xl font-semibold text-gray-800"
    >
      Naresh Choudhary
    </motion.h3>

    <motion.p
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="text-sm text-gray-500"
    >
      Founder & Managing Director, Shranar Spices
    </motion.p>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.6 }}
      className="mt-6 max-w-3xl mx-auto text-gray-700 leading-relaxed"
    >
      Founded with a vision to deliver unadulterated Indian spices,
      <span className="font-semibold text-yellow-900"> Shranar Spices </span>
      specializes in B2B supply, ensuring consistent batches, competitive
      wholesale pricing, hygienic processing, and business-grade packaging
      for high-volume commercial and export demands.
    </motion.p>
  </div>
</motion.div>


      {/* WHO WE ARE */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-20"
      >
        <h2 className="text-3xl font-semibold text-yellow-900">Who We Are</h2>
        <p className="mt-4 text-gray-700">
          We are a dedicated <strong>B2B masala and whole spice supplier</strong> supporting
          commercial food and retail businesses with scalable production capacity,
          repeat-batch consistency, and secure logistics.
        </p>
      </motion.div>

      {/* SPICE GALLERY */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16"
      >
        <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-yellow-900 text-center">
          Our Spice Range
        </motion.h2>
        <motion.p variants={fadeUp} className="text-gray-600 mt-2 text-center">
          Indian whole spices • Premium masala blends • Export-grade bulk packaging
        </motion.p>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "/images/slider/slider6.jpg",
            "/packaging/bulk.jpg",
            "/packaging/PANindia.jpg",
            "/packaging/reatailpacking.png",
          ].map((src, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <Image
                src={src}
                alt="Bulk spice product"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* BUSINESS STRENGTHS */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-20"
      >
        <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-yellow-900">
          Why Businesses Trust Shranar Spices
        </motion.h2>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            ["100% Natural & Chemical-Free", "No additives, no artificial colors."],
            ["Bulk Production Capacity", "Supports orders from 10kg to 500kg+."],
            ["Custom Blends & Private Label", "Tailor-made masalas."],
            ["Business-grade Packaging", "Moisture-proof secure packing."],
            ["PAN-India & Export Logistics", "Reliable dispatch worldwide."],
            ["Lab Tested Quality", "Purity & safety verified batches."],
          ].map(([title, desc], index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-yellow-200"
            >
              <h3 className="font-semibold text-xl">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-24 text-center bg-yellow-50 p-8 rounded-2xl border border-yellow-200 shadow-md"
      >
        <h2 className="text-3xl font-bold text-yellow-900">
          Let’s Scale Your Spice Business Together
        </h2>
        <p className="mt-3 text-gray-700 text-lg">
          Reliable supply. Consistent batches. Pure Indian flavor.
        </p>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a
            href="/contact"
            className="bg-yellow-900 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-yellow-800 transition"
          >
            Contact B2B Sales
          </a>
          <a
            href="/contact"
            className="border border-yellow-900 text-yellow-900 px-6 py-3 rounded-2xl hover:bg-white transition"
          >
            Request Free Samples
          </a>
        </div>
      </motion.div>
    </section>
  )
}
