import Link from "next/link";
import { getProductBySlug } from "../../../data/products";
import { products } from "../../../data/products"; // ✅ ADD THIS IMPORT
import ProductGallery from "../../../components/ProductGallery";
import ReviewList from "../../../components/ReviewList";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug })); // ✅ Now products is defined
}

export default function ProductPage({ params }) {
  const { slug } = params;
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-amber-900">Product not found</h2>
        <Link
          href="/products"
          className="mt-4 inline-block text-amber-700 font-semibold"
        >
          Go back to products
        </Link>
      </section>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 sm:py-12">

      {/* PRODUCT SECTION */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* IMAGES */}
          <div className="w-full">
            <ProductGallery images={product.images ?? [product.image]} />
          </div>

          {/* INFO */}
          <div className="w-full">
            <h1 className="text-3xl sm:text-4xl font-bold text-amber-900">
              {product.name}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-700">
              {product.description}
            </p>

            {/* B2B CTA */}
            <Link href="/contact">
              <button className="mt-6 w-full sm:w-auto px-7 py-3 bg-amber-700 hover:bg-amber-800 text-white rounded-lg text-lg font-semibold">
                Request Quote
              </button>
            </Link>

            {/* SPECIFICATIONS */}
            <section className="mt-8 bg-white shadow rounded-xl p-5 border border-amber-100">
              <h3 className="text-xl font-bold text-amber-900 mb-3">
                Order Specifications
              </h3>
              <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
                <li>📦 <strong>MOQ:</strong> {product.moq ?? "10kg / 25kg depending on product"}</li>
                <li>✅ <strong>Purity:</strong> 100% Natural, No Adulteration</li>
                <li>⚙ <strong>Processing:</strong> Cleaned, Sorted, Export Grade</li>
                <li>🚚 <strong>Dispatch:</strong> 24–72 hours for ready stock</li>
                {product.specs?.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </section>

            {/* OPTIONAL DETAILS */}
            {product.details?.length > 0 && (
              <section className="mt-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2">
                  Product Details
                </h3>
                <ul className="list-disc ml-4 sm:ml-5 text-gray-700 text-sm sm:text-base leading-relaxed">
                  {product.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </section>

      {/* INQUIRY BANNER */}
      <section className="mt-14 bg-amber-700 rounded-2xl text-white text-center p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Need Custom Manufacturing or Private Label?
        </h2>
        <p className="mt-2 text-sm sm:text-lg opacity-95">
          We support bulk contracts, custom formulation & brand packaging.
        </p>
        <Link href="/contact">
          <button className="mt-4 px-8 py-3 bg-white text-amber-900 font-semibold text-lg rounded-lg">
            Business Inquiry
          </button>
        </Link>
      </section>

      {/* REVIEWS SECTION — fallback added */}
      <section className="mt-14">
        <h3 className="text-2xl sm:text-3xl font-bold text-center text-amber-900 mb-5">
          Customer Reviews
        </h3>
        <ReviewList reviews={product.reviews ?? []} /> {/* ✅ Fallback safe */}
        {(!product.reviews || product.reviews.length === 0) && (
          <p className="text-center text-gray-500 text-sm sm:text-base">
            No reviews yet
          </p>
        )}
      </section>

    </main>
  );
}
