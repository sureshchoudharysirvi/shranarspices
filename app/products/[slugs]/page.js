// app/products/[slug]/page.js
import Image from "next/image"
import Link from "next/link"
import { getProductBySlug } from "../../../data/products"
import ProductGallery from "../../../components/ProductGallery"
import ReviewList from "../../../components/ReviewList"

export async function generateStaticParams() {
  // for SSG: return list of slugs
  const { products } = await import('../../../data/products');
  return products.map(p => ({ slug: p.slug }));
}

export default function ProductPage({ params }) {
  const { slug } = params
  const product = getProductBySlug(slug)

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <Link href="/products" className="text-yellow-700">Go back to products</Link>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <ProductGallery images={product.images ?? [product.image]} />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-yellow-900">{product.name}</h1>
          <p className="mt-4 text-gray-700">{product.description}</p>

          <div className="mt-6">
            <span className="text-2xl font-extrabold text-yellow-700">₹{product.price}</span>
          </div>

          <button className="mt-6 px-6 py-3 bg-yellow-700 text-white rounded-md">
            Add to Cart
          </button>

          <div className="mt-8">
            <h3 className="font-semibold">Details</h3>
            <ul className="list-disc ml-5 mt-2 text-gray-700">
              {product.details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold">Customer Reviews</h3>
        <ReviewList reviews={product.reviews} />
      </div>
    </div>
  )
  
}
