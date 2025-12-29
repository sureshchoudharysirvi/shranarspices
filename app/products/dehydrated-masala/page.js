import ProductSection from "@/components/ProductSection"

export const metadata = {
  title: "Dehydrated Masala | Shranar Spices",
}

export default function DehydratedMasalaPage() {
  return (
    <ProductSection
      title="Dehydrated Masala"
      subtitle="Naturally dehydrated with long shelf life"
      products={[
        {
          title: "Dehydrated Onion",
          description: "Perfect for ready-to-cook products.",
          image: "/products/onion.jpg",
          bg: "bg-[#FFF7E6]",
        },
        {
          title: "Dehydrated Garlic",
          description: "Strong aroma with intense flavor.",
          image: "/products/garlic.jpg",
          bg: "bg-[#F0F7FF]",
        },
        {
          title: "Dehydrated Ginger",
          description: "Natural spice with medicinal value.",
          image: "/products/ginger.jpg",
          bg: "bg-[#F6FFFA]",
        },
      ]}
    />
  )
}
