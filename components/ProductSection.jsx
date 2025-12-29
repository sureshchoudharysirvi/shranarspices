import ProductCard from "./ProductCard"

export default function ProductSection({ title, subtitle, products }) {
  return (
    <section className="py-20">
      {/* SECTION HEADER */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-[#6B3F32]">
          {title}
        </h2>
        <p className="mt-3 text-gray-500">
          {subtitle}
        </p>
      </div>

      {/* GRID */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-6">
        {products.map((item, i) => (
          <div
            key={i}
            className="animate-fade-up"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            <ProductCard {...item} />
          </div>
        ))}
      </div>
    </section>
  )
}
