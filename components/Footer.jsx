"use client"

import Link from "next/link"
import {
  Instagram,
  Facebook,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#27272a] text-[#e8e8e8] mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* BRAND + CONTACT STRIP */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-white/10 pb-6">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-extrabold text-white tracking-wide">
              SHRANAR SPICES
            </h2>
            <p className="text-sm opacity-70 mt-1 max-w-sm">
              Premium Indian spices with trusted quality, packaging and delivery.
            </p>
          </div>

          {/* QUICK CONTACT */}
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="tel:+918928329091"
              className="flex items-center gap-2 hover:text-green-400 transition"
            >
              <Phone size={18} className="text-green-400" />
              <span className="font-semibold text-white">
                +91 89283 29091
              </span>
            </a>

            <a
              href="mailto:info@shranarspices.com"
              className="flex items-center gap-2 hover:text-green-400 transition"
            >
              <Mail size={18} className="text-green-400" />
              <span className="font-semibold text-white">
                info@shranarspices.com
              </span>
            </a>
          </div>
        </div>

        {/* LINK GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm mt-8">

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 opacity-80">
              <li>
                <Link href="/" className="hover:text-green-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-400 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* CERTIFICATIONS */}
          <div>
            <h3 className="font-semibold text-white mb-3">Certifications</h3>
            <ul className="space-y-2 opacity-80">
              <li>Agmark</li>
              <li>ISO Certified</li>
              <li>FSSAI Approved</li>
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h3 className="font-semibold text-white mb-3">Products</h3>
            <ul className="space-y-2 opacity-80">
              <li>
                <Link href="/products/whole-spices" className="hover:text-green-400 transition">
                  Whole Spices
                </Link>
              </li>
              <li>
                <Link href="/products/blended-spices" className="hover:text-green-400 transition">
                  Masala Blends
                </Link>
              </li>
              <li>
                <Link href="/products/dehydrated-masala" className="hover:text-green-400 transition">
                  Dehydrated Masala
                </Link>
              </li>
            </ul>
          </div>

          {/* ABOUT */}
          <div>
            <h3 className="font-semibold text-white mb-3">About</h3>
            <ul className="space-y-2 opacity-80">
              <li>
                <Link href="/about" className="hover:text-green-400 transition">
                  Company Overview
                </Link>
              </li>
              <li>
                <Link href="/about#team" className="hover:text-green-400 transition">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-green-400 transition">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* OFFICE */}
          <div>
            <h3 className="font-semibold text-white mb-3">Registered Office</h3>
            <div className="space-y-2 text-sm opacity-80">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-green-400 mt-1" />
                <span>
                 1 D 101 Chakradhar Nagar Mahalaxmi Complex Palghar,<br/>
                  Vasai Virar-401203 <br />
                  Maharashtra – 400020
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 pt-6 border-t border-white/10 text-xs opacity-70">

          <p>© 2025 Shranar Spices. All Rights Reserved.</p>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="hover:text-green-400 transition">
              Enquiry
            </Link>
            <Link href="/disclaimer" className="hover:text-green-400 transition">
              Disclaimer
            </Link>
            <Link href="/terms" className="hover:text-green-400 transition">
              Terms
            </Link>
            <Link href="/privacy-policy" className="hover:text-green-400 transition">
              Privacy
            </Link>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/shranarspicespvtltd/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={18} className="text-green-400 hover:scale-110 transition" />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={18} className="text-green-400 hover:scale-110 transition" />
            </a>

            <a
              href="https://wa.me/918928329091"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} className="text-green-400 hover:scale-110 transition" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
