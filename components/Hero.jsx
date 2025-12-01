"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[500px] md:h-[650px] lg:h-[700px] overflow-hidden">

      {/* Video Background (No Sound) */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/masala.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Content Box */}
      <div className="relative max-w-6xl mx-auto px-6 h-full flex flex-col justify-center items-start text-left">

        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wide drop-shadow-md">
          Pure, Aromatic & Premium Indian Spices
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-xl opacity-95">
          Trusted by wholesalers, distributors and spice businesses worldwide.
        </p>

        {/* Call to Action Button */}
        <Link href="/products">
          <button className="mt-6 px-7 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium text-lg rounded-lg transition-all shadow-md">
            Explore Our Range
          </button>
        </Link>

      </div>
    </section>
  );
}
