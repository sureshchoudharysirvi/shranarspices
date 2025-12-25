"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const pathname = usePathname()

  const [mobileMenu, setMobileMenu] = useState(false)
  const [desktopProductOpen, setDesktopProductOpen] = useState(false)
  const [mobileProductOpen, setMobileProductOpen] = useState(false)

  // ✅ AUTO-CLOSE MOBILE MENU ON PAGE CHANGE
  useEffect(() => {
    setMobileMenu(false)
    setMobileProductOpen(false)
  }, [pathname])

  const navItem = (path) =>
    `relative font-bold transition
     ${pathname === path ? "text-orange-600" : "text-gray-700"}
     after:content-[''] after:absolute after:left-0 after:-bottom-1
     after:h-[2px] after:bg-orange-500 after:w-0
     hover:after:w-full after:transition-all after:duration-300`

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg sticky top-0 z-50"
    >
      {/* TOP BAR */}
      <div className="h-1 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600" />

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <Link href="/" className="text-2xl font-extrabold text-orange-700">
          SHRANAR <span className="text-orange-500">SPICES</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10 text-lg">
          <Link href="/" className={navItem("/")}>HOME</Link>

          {/* DESKTOP PRODUCTS */}
          <div
            className="relative"
            onMouseEnter={() => setDesktopProductOpen(true)}
            onMouseLeave={() => setDesktopProductOpen(false)}
          >
            <button className="font-bold text-gray-700 hover:text-orange-600">
              PRODUCTS ▾
            </button>

            <AnimatePresence>
              {desktopProductOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-10 left-0 w-56 bg-white shadow-xl rounded-md border"
                >
                  <Link className="block px-5 py-3 hover:bg-orange-50" href="/products/whole-spices">
                    Whole Spices
                  </Link>
                  <Link className="block px-5 py-3 hover:bg-orange-50" href="/products/blended-spices">
                    Blended Spices
                  </Link>
                  <Link className="block px-5 py-3 hover:bg-orange-50" href="/products/dehydrated-masala">
                    Dehydrated Masala
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/packaging-shipment" className={navItem("/packaging-shipment")}>
            PACKAGING & SHIPMENT
          </Link>

          <Link href="/about" className={navItem("/about")}>ABOUT</Link>
          <Link href="/contact" className={navItem("/contact")}>CONTACT</Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-3xl text-orange-700"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle menu"
        >
          {mobileMenu ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t px-6 py-4 overflow-hidden"
          >
            <div className="flex flex-col gap-4 font-semibold">
              <Link href="/">Home</Link>

              {/* MOBILE PRODUCTS */}
              <button
                onClick={() => setMobileProductOpen(!mobileProductOpen)}
                className="flex justify-between items-center"
              >
                Products <span>{mobileProductOpen ? "−" : "+"}</span>
              </button>

              <AnimatePresence>
                {mobileProductOpen && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="ml-4 flex flex-col gap-2 text-gray-700"
                  >
                    <Link href="/products/whole-spices">Whole Spices</Link>
                    <Link href="/products/blended-spices">Blended Spices</Link>
                    <Link href="/products/dehydrated-masala">Dehydrated Masala</Link>
                  </motion.div>
                )}
              </AnimatePresence>

              <Link href="/packaging-shipment">Packaging & Shipment</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
