"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white shadow-md rounded-xl p-4 border border-amber-100 w-full"
    >
      {/* Product Image */}
      <div className="w-full overflow-hidden rounded-lg">
        <Image
          src={product.image}
          width={300}
          height={200}
          className="w-full h-auto object-cover rounded-lg"
          alt={product.name}
          priority={false}
        />
      </div>

      {/* Product Name */}
      <h3 className="mt-4 text-xl font-bold text-amber-900">
        {product.name}
      </h3>

      {/* Short Description */}
      <p className="text-amber-700 text-sm mt-1 line-clamp-2 min-h-40px">
        {product.description}
      </p>

      {/* CTA Button */}
      <Link href={`/products/${product.slug}`} className="block">
        <button className="mt-4 w-full py-2 bg-amber-700 hover:bg-amber-800 text-white rounded-lg text-sm sm:text-base font-medium transition">
          View Details
        </button>
      </Link>
    </motion.div>
  );
}
