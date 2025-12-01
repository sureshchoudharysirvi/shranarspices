"use client"
import { useState } from "react"

const reviews = [
  { name: "Rahul Traders", text: "Quality is top-notch. Best supplier in the region." },
  { name: "Om Food Products", text: "Consistent taste & aroma. Perfect for our manufacturing." },
  { name: "Sai Grocery Mart", text: "Reliable delivery, great packaging & natural spices." },
]

export default function TestimonialSlider() {
  const [i, setI] = useState(0)

  const next = () => setI((i + 1) % reviews.length)
  const prev = () => setI((i - 1 + reviews.length) % reviews.length)

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-orange-900 mb-8">What Our Clients Say</h2>

      <div className="bg-white p-8 shadow rounded-xl max-w-2xl mx-auto">
        <p className="text-gray-700 text-lg italic">"{reviews[i].text}"</p>
        <h3 className="mt-4 font-bold text-orange-700">{reviews[i].name}</h3>

        <div className="flex justify-center gap-6 mt-6">
          <button onClick={prev} className="px-4 py-2 bg-orange-100 rounded">◀</button>
          <button onClick={next} className="px-4 py-2 bg-orange-100 rounded">▶</button>
        </div>
      </div>
    </div>
  )
}
