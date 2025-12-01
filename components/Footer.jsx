import { Instagram, Facebook, MessageCircle, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    
    <footer className="bg-[#27272a] text-[#e8e8e8] mt-20 relative">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* TOP SECTION GRID */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li className="hover:text-green-400 transition">Home</li>
              <li className="hover:text-green-400 transition">About Us</li>
              <li className="hover:text-green-400 transition">Sustainable Farming</li>
              <li className="hover:text-green-400 transition">Contact Us</li>
            </ul>
          </div>

          {/* CERTIFICATES */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">CERTIFICATES</h3>
            <ul className="space-y-2">
              <li className="hover:text-green-400 transition">Agmark</li>
              <li className="hover:text-green-400 transition">ISO Certified</li>
              <li className="hover:text-green-400 transition">FSSAI Approved</li>
            </ul>
          </div>

          {/* ABOUT */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">ABOUT</h3>
            <ul className="space-y-2">
              <li className="hover:text-green-400 transition">Company Overview</li>
              <li className="hover:text-green-400 transition">Our Team</li>
              <li className="hover:text-green-400 transition">Careers</li>
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">PRODUCTS</h3>
            <ul className="space-y-2">
              <li className="hover:text-green-400 transition">Whole Spices</li>
              <li className="hover:text-green-400 transition">Masala Blends</li>
              <li className="hover:text-green-400 transition">Premium Herbs</li>
              <li className="hover:text-green-400 transition">Private Labeling</li>
            </ul>
          </div>

          {/* REGISTERED OFFICE */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">REGISTERED OFFICE</h3>
            <ul className="space-y-2 opacity-80">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-green-400 mt-1"/>
               <span className="opacity-80">
  <br/>
  Churchgate, Mumbai,<br/>
  India 400 020
</span>

              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-green-400"/>
                <span>+91 22-3505-4100</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-green-400"/>
                <span>marketing@swanispice.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* MIDDLE CONTACT SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 text-center md:text-left">

          {/* CALL US */}
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Phone size={20} className="text-green-400"/>
            <div>
              <p className="text-xs opacity-70">Call Us</p>
              <p className="text-xl font-bold text-white">+91 22-3505-4100</p>
            </div>
          </div>

          {/* EMAIL US */}
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Mail size={20} className="text-green-400"/>
            <div>
              <p className="text-xs opacity-70">Email Us</p>
              <p className="text-xl font-bold text-white">marketing@swanispice.com</p>
            </div>
          </div>

        </div>

        {/* BOTTOM SEPARATOR */}
        <div className="w-full h-px bg-white mt-10 opacity-20"></div>

        {/* COPYRIGHT & LEGAL LINKS */}
        <div className="md:flex justify-between items-center mt-6 text-xs opacity-70">

          <p>© 2025 All Rights Reserved.</p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-end mt-4 md:mt-0">
            <a className="hover:text-green-400 transition">Enquiry</a>
            <a className="hover:text-green-400 transition">Disclaimer</a>
            <a className="hover:text-green-400 transition">Terms & Conditions</a>
            <a className="hover:text-green-400 transition">Privacy Policy</a>
            <a className="hover:text-green-400 transition">Sitemap</a>
          </div>

        </div>

        {/* SOCIAL ICON SECTION */}
        <div className="flex gap-4 mt-8 justify-center md:justify-start">
          <a href="#" target="_blank">
            <Instagram size={22} className="text-green-400 hover:scale-110 transition"/>
          </a>
          <a href="#" target="_blank">
            <Facebook size={22} className="text-green-400 hover:scale-110 transition"/>
          </a>
          <a href="#" target="_blank">
            <MessageCircle size={22} className="text-green-400 hover:scale-110 transition"/>
          </a>
        </div>

      </div>
    </footer>
  );
}
