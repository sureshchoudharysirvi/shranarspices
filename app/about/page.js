// app/about/page.js
export default function AboutPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-yellow-900">About Shranar Spices</h1>

      <div className="mt-6 text-gray-700 space-y-4">
        <p>
          Shranar Spices is a family-run company delivering fresh, farm-sourced spices.
          We follow ethical sourcing and small-batch processing to preserve aroma and quality.
        </p>

        <p>
          Our mission: bring authentic Indian spices to your kitchen with full transparency.
          Each batch is tested for freshness and packaged carefully.
        </p>
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h4 className="font-semibold">Sourced responsibly</h4>
          <p className="mt-2 text-gray-600">We work directly with farmers to ensure fair prices.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h4 className="font-semibold">Quality tested</h4>
          <p className="mt-2 text-gray-600">Our spices pass quality and purity checks.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h4 className="font-semibold">Fast delivery</h4>
          <p className="mt-2 text-gray-600">Packed fresh and shipped quickly.</p>
        </div>
      </div>
    </section>
  )
}
