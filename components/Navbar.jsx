"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      
      {/* TOP BORDER GRADIENT */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600"></div>

      {/* MAIN NAV */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO + TEXT */}
        <Link href="/" className="flex items-center gap-3">
          {/* Added Logo Image */}
          {/* <Image 
            src="/logoo.png" // Ensure logo.png is in your 'public' folder
            alt="Shranar Spices Logo"
            width={45} 
            height={45}
            className="object-contain" // Ensures image scales correctly without distortion
            priority // Prioritize loading this image as it's above the fold
          /> */}
          <span className="text-2xl font-extrabold tracking-wide text-orange-700">
            SHRANAR <span className="text-orange-500"> SPICES</span>
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-10 text-lg font-medium text-gray-700">
          <Link href="/" className="font-bold hover:text-orange-600 transition">HOME</Link>
          {/* Fixed typo: PROUDTS -> PRODUCTS */}
          <Link href="/products" className="font-bold hover:text-orange-600 transition">PRODUCTS</Link>
          <Link href="/about" className="hover:text-orange-600 transition font-bold">ABOUT</Link>
          <Link href="/contact" className="hover:text-orange-600 transition font-bold">CONTACT</Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          onClick={() => setOpen(!open)} 
          className="md:hidden text-3xl text-orange-700 transition"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t border-orange-200 px-6 py-4 space-y-5">

          <Link href="/" onClick={() => setOpen(false)}
            className="block font-medium text-gray-700 hover:text-orange-600">
            Home
          </Link>

          <Link href="/products" onClick={() => setOpen(false)}
            className="block font-medium text-gray-700 hover:text-orange-600">
            Products
          </Link>

          <Link href="/about" onClick={() => setOpen(false)}
            className="block font-medium text-gray-700 hover:text-orange-600">
            About
          </Link>

          <Link href="/contact" onClick={() => setOpen(false)}
            className="block font-medium text-gray-700 hover:text-orange-600">
            Contact
          </Link>

        </div>
      )}
    </nav>
  )
}