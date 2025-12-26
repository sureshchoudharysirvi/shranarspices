import Hero from "../components/Hero";
import BrandSection from "../components/BrandSection";
import ReputationSection from "../components/ReputationSection";
import TestimonialSlider from "../components/TestimonialSlider.jsx";
import BlogSection from "../components/BlogSection";
import ImageSlider from "@/components/ImageSlider";
import Certifications from "@/components/Certifications";

export default function Home() {
  return (
    <>
      {/* Main Hero Slider */}
      <Hero />

      {/* Tagline */}
     

      {/* Brand Section */}
      {/* <section className="max-w-7xl mx-auto px-4 py-16">
        <BrandSection />
      </section> */}

      {/* Reputation */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-orange-50 rounded-2xl">
        <ReputationSection />
      </section>
<section className="relative mt-16 pb-16 bg-[#FFF8E7]">

  {/* HEADING */}
  <div className="text-center mb-10 px-4">
    <h3 className="text-2xl md:text-3xl font-extrabold text-[#6B3F32]">
      Fresh Spices for Every Business Need
    </h3>
    <p className="mt-3 text-gray-600 text-sm md:text-base">
      Premium flavor packed with trust.
    </p>
  </div>

  {/* SLIDER (CONNECTED LOOK) */}
  <div className="relative -mt-6">
    <ImageSlider />
  </div>

</section>

      {/* ✅ Certifications (NEW) */}
      {/* <Certifications /> */}

      {/* Testimonials (optional) */}
      {/* 
      <section className="max-w-7xl mx-auto px-4 py-16">
        <TestimonialSlider />
      </section> 
      */}

      {/* Blogs */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-[#FFF8E7]">
        <BlogSection />
      </section>
    </>
  );
}
