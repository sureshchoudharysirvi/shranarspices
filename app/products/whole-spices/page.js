import ProductSection from "@/components/ProductSection"

export const metadata = {
  title: "Whole Spices | Shranar Spices",
}

export default function WholeSpicesPage() {
  return (
    <ProductSection
      title="Whole Spices"
      subtitle="Pure, natural and carefully sourced whole spices"
      products={[
        {
          title: "Red Chilli",
          description: "Premium quality dried red chillies rich in flavor.",
          image: "/images/products/whole/red-chilli.png",
          bg: "bg-[#F3F7E8]",
        },
        {
          title: "Turmeric Finger",
          description: "Unprocessed turmeric fingers with natural color.",
          image: "/images/products/whole/turmaric-finger.png",
          bg: "bg-[#E9FFF4]",
        },
        {
          title: "White Pepper",
          description: "Mildly spicy aromatic white pepper.",
          image: "/images/products/whole/white-pepper.png",
          bg: "bg-[#EEF0FF]",
        },
      ]}
    />
  )
}
