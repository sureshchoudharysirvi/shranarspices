import { masalaProducts, wholeSpices, spiceBlends } from "../../data/products";
import ProductGrid from "../../components/ProductGrid";
import Link from "next/link";

export default function Products() {
  return (
    <main className="w-full">

      {/* HERO SECTION */}
      <section className="bg-amber-50 py-12 sm:py-16 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-900">
          Premium Bulk Spices
        </h1>
        <p className="text-base sm:text-lg text-amber-700 mt-3 sm:mt-4 max-w-3xl mx-auto">
          Trusted supplier for wholesalers, distributors, restaurants & retail chains.
        </p>

        {/* CATEGORY QUICK NAV */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
          <a
            href="#whole"
            className="px-5 py-2 sm:px-6 sm:py-3 bg-amber-700 text-white rounded-full text-sm sm:text-base font-medium"
          >
            Whole Spices
          </a>
          <a
            href="#masala"
            className="px-5 py-2 sm:px-6 sm:py-3 bg-amber-700 text-white rounded-full text-sm sm:text-base font-medium"
          >
            Masala Spices
          </a>
          <a
            href="#blends"
            className="px-5 py-2 sm:px-6 sm:py-3 bg-amber-700 text-white rounded-full text-sm sm:text-base font-medium"
          >
            Spice Blends
          </a>
        </div>
      </section>

      {/* WHOLE SPICES SECTION */}
      <section id="whole" className="max-w-7xl mx-auto px-4 py-10 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-5 sm:mb-6 text-center sm:text-left">
          Whole Spices
        </h2>
        <ProductGrid products={wholeSpices} />
      </section>

      {/* MASALA SPICES SECTION */}
      <section id="masala" className="w-full bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 py-10 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-5 sm:mb-6 text-center sm:text-left">
            Masala Spices
          </h2>
          <ProductGrid products={masalaProducts} />
        </div>
      </section>

      {/* SPICE BLENDS SECTION */}
      <section id="blends" className="max-w-7xl mx-auto px-4 py-10 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-5 sm:mb-6 text-center sm:text-left">
          Spice Blends
        </h2>
        <ProductGrid products={spiceBlends} />
      </section>

      {/* MOQ + CERTIFICATIONS + DISPATCH */}
      <section className="max-w-6xl mx-auto px-4 py-10 sm:py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-amber-900 mb-6">
          Order Details & Compliance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

          {/* MOQ CARD */}
          <div className="p-5 bg-white shadow-md rounded-xl border border-amber-100">
            <h3 className="text-lg font-bold text-amber-900 mb-2">Minimum Order (MOQ)</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Orders start from <strong>10kg – 50kg</strong> depending on the product.
            </p>
          </div>

          {/* CERTIFICATIONS CARD */}
          <div className="p-5 bg-white shadow-md rounded-xl border border-amber-100">
            <h3 className="text-lg font-bold text-amber-900 mb-2">Certifications</h3>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              <span className="px-4 py-1 bg-amber-100 text-amber-900 rounded-full text-xs sm:text-sm font-medium">
                FSSAI Approved
              </span>
              <span className="px-4 py-1 bg-amber-100 text-amber-900 rounded-full text-xs sm:text-sm font-medium">
                ISO 22000
              </span>
              <span className="px-4 py-1 bg-amber-100 text-amber-900 rounded-full text-xs sm:text-sm font-medium">
                No Adulteration Guarantee
              </span>
            </div>
          </div>

          {/* DISPATCH CARD */}
          <div className="p-5 bg-white shadow-md rounded-xl border border-amber-100">
            <h3 className="text-lg font-bold text-amber-900 mb-2">Dispatch Time</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Fast dispatch within <strong>24–72 hours</strong> for ready stock orders.
            </p>
          </div>

        </div>
      </section>

      {/* BULK QUOTE / LEAD CTA */}
      <section className="bg-amber-700 text-white text-center py-10 sm:py-12 px-4">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
          Need Wholesale Pricing or Long-term Supply Contract?
        </h2>
        <p className="text-sm sm:text-lg mt-3 max-w-2xl mx-auto opacity-90">
          Request customized quotes, distributor slab pricing, and branded packaging options.
        </p>

        <Link href="/contact">
          <button className="mt-6 px-7 py-3 sm:px-9 sm:py-4 bg-white text-amber-900 font-semibold rounded-xl text-sm sm:text-lg shadow">
            Request a Quote
          </button>
        </Link>
      </section>

      {/* MANUFACTURING / PRIVATE LABEL */}
      <section className="max-w-7xl mx-auto py-10 sm:py-16 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-amber-900 mb-8">
          Our Capabilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-white shadow-md rounded-2xl p-6 border border-amber-100">
            <h3 className="text-xl font-bold text-amber-900 mb-1">Bulk Supply</h3>
            <p className="text-sm sm:text-base text-gray-700">
              Continuous availability for PAN-India distributors and high-volume buyers.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 border border-amber-100">
            <h3 className="text-xl font-bold text-amber-900 mb-1">Custom Masala Manufacturing</h3>
            <p className="text-sm sm:text-base text-gray-700">
              We formulate & manufacture spices based on your regional market demand and taste profile.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 border border-amber-100">
            <h3 className="text-xl font-bold text-amber-900 mb-1">Private Label Packaging</h3>
            <p className="text-sm sm:text-base text-gray-700">
              Export-grade sacks & retail-ready branded packs with custom business labeling.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
