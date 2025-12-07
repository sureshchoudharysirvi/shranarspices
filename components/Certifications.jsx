"use client";

import Image from "next/image";

const certifications = [
  { title: "FSSAI", logo: "/certifications/fssai.jpg" },
  { title: "FDA", logo: "/certifications/fda.png" },
  { title: "Halal", logo: "/certifications/halal.jfif" },
  { title: "USDA Organic", logo: "/certifications/usda.png" },
  { title: "Organic", logo: "/certifications/organic.jfif" },
  { title: "Sedex", logo: "/certifications/sedex.png" },
];

// duplicate for seamless loop
const sliderItems = [...certifications, ...certifications];

export default function Certifications() {
  return (
    <section className="bg-[#FFF8E7] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#6B3F32]">
            Our Certifications
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            Quality & compliance across global standards
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="flex gap-6 animate-certifications-slide">
            {sliderItems.map((item, index) => (
              <div
                key={index}
                className="min-w-[140px] h-[140px] bg-white border border-orange-100 rounded-2xl flex items-center justify-center shadow-sm"
              >
                <Image
                  src={item.logo}
                  alt={item.title}
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
