import ProductSection from "@/components/ProductSection"

export const metadata = {
  title: "Blended Spices | Shranar Spices",
}

export default function BlendedSpicesPage() {
  return (
    <ProductSection
      title="Blended Spices"
      subtitle="Expertly crafted blends for authentic taste"
      products={[
        {
          title: "Garam Masala",
          description: "Balanced blend for rich Indian flavors.",
          image: "/products/garam-masala.jpg",
          bg: "bg-[#FFF4EC]",
        },
        {
          title: "Sambar Masala",
          description: "Traditional South Indian spice blend.",
          image: "/products/sambar.jpg",
          bg: "bg-[#F0FFF4]",
        },
        {
          title: "Chaat Masala",
          description: "Tangy blend perfect for snacks.",
          image: "/products/chaat.jpg",
          bg: "bg-[#F5F0FF]",
        },
      ]}
    />
  )
}
