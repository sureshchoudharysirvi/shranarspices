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
          description: "A rich aromatic spice blend that brings authentic Indian taste to every dish.",
          image: "/images/products/blended/garam.png",
          bg: "bg-[#FFF4EC]",
        },
        {
          title: "Sambar Masala",
          description: "A traditional South Indian spice mix for flavorful and perfect sambar.",
          image: "/images/products/blended/sambhar.png",
          bg: "bg-[#F0FFF4]",
        },
        {
          title: "Chaat Masala",
          description: "A tangy and zesty seasoning that enhances snacks and street food.",
          image: "/images/products/blended/chat.png",
          bg: "bg-[#F5F0FF]",
        },
      ]}
    />
  )
}
