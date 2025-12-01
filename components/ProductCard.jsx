// components/ProductCard.jsx
"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function ProductCard({ product }) {
  return (
    <motion.div 
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white shadow-md rounded-lg p-4"
    >
      <Image src={product.image} width={300} height={200} className="rounded-md" alt={product.name} />
      <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
      <p className="text-yellow-700 font-bold">₹{product.price}</p>
      <Link href={`/products/${product.slug}`}>
        <button className="mt-3 w-full py-2 bg-yellow-700 text-white rounded-md">View Details</button>
      </Link>
    </motion.div>
  )
}
