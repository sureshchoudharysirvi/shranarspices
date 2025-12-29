"use client"

import Image from "next/image"

export default function ProductCard({ title, description, image, bg }) {
  return (
    <div
      className={`group relative rounded-3xl p-10 text-center shadow-md 
      transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl ${bg}`}
    >
      {/* IMAGE */}
      <div
        className="relative mx-auto w-56 h-56 rounded-full overflow-hidden
        ring-8 ring-white shadow-2xl
        transition-transform duration-500 group-hover:scale-105"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* CONTENT */}
      <h3 className="mt-8 text-2xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-4 text-gray-600 leading-relaxed text-sm">
        {description}
      </p>

      {/* HOVER OVERLAY */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 
        group-hover:opacity-100 transition duration-500 
        bg-gradient-to-br from-white/30 to-transparent pointer-events-none"
      />
    </div>
  )
}
