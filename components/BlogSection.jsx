"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const blogs = [
  {
    id: 1,
    title: "How to Identify Pure Spices (Easy Tests)",
    excerpt:
      "Learn quick purity tests for chilli, turmeric and coriander powders for your business needs.",
    image: "/images/blog11.png",
    url: "https://shranarspicesmasala.blogspot.com/2025/11/how-to-identify-pure-spices-easy-tests.html",
  },
  {
    id: 2,
    title: "Spice Processing Standards",
    excerpt:
      "Industry approved grinding, cleaning, and hygiene standards we follow for safe masala processing.",
    image: "/images/blog2.png",
    url: "https://shranarspicesmasala.blogspot.com/2025/11/spice-processing-standards.html",
  },
  {
    id: 3,
    title: "Why B2B Clients Prefer Us",
    excerpt:
      "Consistent bulk quality, pure spices, timely supply and dependable masala solutions for businesses.",
    image: "/images/blog3.png",
    url: "https://shranarspicesmasala.blogspot.com/2025/11/why-b2b-clients-prefer-us.html",
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

export default function BlogSection() {
  return (
    <section className="max-w-7xl mx-auto px-2 py-2">

      {/* SECTION TITLE */}
      <motion.h2
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl font-extrabold text-orange-900 text-center"
      >
        Latest Blogs
      </motion.h2>

      <motion.p
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-center text-sm sm:text-base text-gray-600 mt-2 max-w-2xl mx-auto"
      >
        Insights on spice quality, processing standards, and trusted B2B supply practices.
      </motion.p>

      {/* BLOG GRID */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12"
      >
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            variants={fadeUpVariant}
            whileHover={{ y: -8 }}
            className="group bg-white shadow-md hover:shadow-2xl rounded-2xl p-4 transition-all"
          >
            {/* IMAGE */}
            <div className="relative w-full h-[160px] sm:h-[170px] md:h-[190px] lg:h-[220px] rounded-xl mb-4 overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.08]"
                sizes="(max-width: 640px) 90vw, 33vw"
              />
            </div>

            {/* TITLE */}
            <h3 className="font-bold text-lg sm:text-xl text-orange-700 text-center">
              {blog.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-600 mt-2 text-center text-sm sm:text-base">
              {blog.excerpt}
            </p>

            {/* CTA */}
            <div className="text-center mt-5">
              <motion.a
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-5 py-2.5 bg-orange-600 text-white text-sm font-medium rounded-xl hover:bg-orange-700 transition"
              >
                Read Full Blog →
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
