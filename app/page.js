import Hero from "../components/Hero"
import BrandSection from "../components/BrandSection"
import ReputationSection from "../components/ReputationSection"
import TestimonialSlider from "../components/TestimonialSlider.jsx"
import BlogSection from "../components/BlogSection"
import ImageSlider from "@/components/ImageSlider"
export default function Home() {
  return (
    <>
      {/* Main Hero Slider */}
      <Hero />

      {/* Our Brand */}
       <section className="text-center mt-12">
        <h3 className="text-xl font-bold text-[#6B3F32]">Fresh Spices for Every Business Need</h3>
        <p className="text-gray-500 mt-2 text-sm">Premium flavor packed with trust.</p>
      </section>
       <ImageSlider />

      {/* Optional example spacing/content below */}
     
      <section className="max-w-7xl mx-auto px-4 py-16">
        <BrandSection />
      </section>

      {/* Reputation / Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-orange-50 rounded-2xl">
        <ReputationSection />
      </section>

      {/* Testimonials */}
      {/* <section className="max-w-7xl mx-auto px-4 py-16">
        <TestimonialSlider />
      </section> */}

      {/* Blogs */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-[#FFF8E7]">
        <BlogSection />
      </section>
    </>
  )
}
