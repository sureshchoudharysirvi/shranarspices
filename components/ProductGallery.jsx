// components/ProductGallery.jsx
import Image from "next/image"

export default function ProductGallery({ images = [] }) {
  return (
    <div className="space-y-4">
      <div className="w-full aspect-[4] relative rounded-lg overflow-hidden shadow">
        <Image src={images[0]} alt="product" fill style={{ objectFit: 'cover' }} />
      </div>

      <div className="grid grid-cols-3 gap-3">
        {images.slice(0,3).map((src,i) => (
          <div key={i} className="aspect-square relative rounded-md overflow-hidden">
            <Image src={src} alt={`img-${i}`} fill style={{ objectFit: 'cover' }} />
          </div>
        ))}
      </div>
    </div>
  )
}
