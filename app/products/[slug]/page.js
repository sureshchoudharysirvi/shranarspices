import { notFound } from "next/navigation"

const products = {
  "red-chilli": {
    title: "Red Chilli",
    description: "Premium quality dried red chillies for bulk supply.",
    image: "/products/red-chilli.jpg",
  },
}

export default function ProductDetail({ params }) {
  const product = products[params.slug]

  if (!product) return notFound()

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-[#6B3F32]">
        {product.title}
      </h1>

      <p className="mt-4 text-gray-600">{product.description}</p>

      <img
        src={product.image}
        alt={product.title}
        className="mt-10 rounded-3xl shadow-lg"
      />
    </section>
  )
}
