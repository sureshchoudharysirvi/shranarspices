"use client"

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

      {/* MAIN CONTAINER */}
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
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-green-400" />
              <span className="font-semibold text-white">
                +91 8928329091
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-green-400" />
              <span className="font-semibold text-white">
                shranarspice.com
              </span>
            </div>
          </div>

        </div>

        {/* LINK GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm mt-8">

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 opacity-80">
              <li className="hover:text-green-400 cursor-pointer">Home</li>
              <li className="hover:text-green-400 cursor-pointer">About Us</li>
              <li className="hover:text-green-400 cursor-pointer">Contact Us</li>
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
              <li>Whole Spices</li>
              <li>Masala Blends</li>
              <li>Private Labeling</li>
            </ul>
          </div>

          {/* ABOUT */}
          <div>
            <h3 className="font-semibold text-white mb-3">About</h3>
            <ul className="space-y-2 opacity-80">
              <li>Company Overview</li>
              <li>Our Team</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* OFFICE */}
          <div>
            <h3 className="font-semibold text-white mb-3">Registered Office</h3>
            <div className="space-y-2 text-sm opacity-80">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-green-400 mt-1" />
                <span>
                  Churchgate, Mumbai <br />
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
            <span className="hover:text-green-400 cursor-pointer">Enquiry</span>
            <span className="hover:text-green-400 cursor-pointer">Disclaimer</span>
            <span className="hover:text-green-400 cursor-pointer">Terms</span>
            <span className="hover:text-green-400 cursor-pointer">Privacy</span>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4">
            <Instagram size={18} className="text-green-400 hover:scale-110 transition cursor-pointer" />
            <Facebook size={18} className="text-green-400 hover:scale-110 transition cursor-pointer" />
            <MessageCircle size={18} className="text-green-400 hover:scale-110 transition cursor-pointer" />
          </div>

        </div>

      </div>
    </footer>
  )
}
