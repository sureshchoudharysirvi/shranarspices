import ProductSection from "@/components/ProductSection"

export const metadata = {
  title: "Dehydrated Masala | Shranar Spices",
  description:
    "High quality dehydrated onion, garlic, spices and herbs with long shelf life for B2B and bulk buyers.",
}

export default function DehydratedMasalaPage() {
  return (
    <>
      {/* DEHYDRATED ONION PRODUCTS */}
      <ProductSection
        title="Dehydrated Onion Products"
        subtitle="Available in flakes, chopped, minced, granules and powder (ELB, LB, SB)"
        products={[
          {
            title: "Dehydrated Onion Flakes / Kibbled",
            description:
              "Premium dehydrated white, red and pink onion flakes processed under hygienic conditions. Ideal for soups, sauces, instant foods and seasoning blends.",
            image: "/images/products/dehydrated/o1.png",
            bg: "bg-[#FFF7E6]",
          },
          {
            title: "Dehydrated Onion Chopped",
            description:
              "Uniformly chopped dehydrated onions offering strong aroma, consistent size and excellent rehydration properties.",
            image: "/images/products/dehydrated/Dehydrated Onion Chopped.png",
            bg: "bg-[#FDF3E1]",
          },
          {
            title: "Dehydrated Onion Minced",
            description:
              "Finely minced dehydrated onions widely used in ready-to-cook meals, gravies and food processing industries.",
            image: "/images/products/dehydrated/onion3.png",
            bg: "bg-[#FFF0DA]",
          },
          {
            title: "Dehydrated Onion Granules",
            description:
              "Free-flowing onion granules with natural taste, suitable for spice blends, seasonings and snack applications.",
            image: "/images/products/dehydrated/Dehydrated Onion Granules.png",
            bg: "bg-[#FFF4E8]",
          },
          {
            title: "Dehydrated Onion Powder",
            description:
              "Finely ground onion powder delivering intense flavor, long shelf life and easy solubility for industrial use.",
            image: "/images/products/dehydrated/Dehydrated Onion Powder.png",
            bg: "bg-[#FFEED6]",
          },
        ]}
      />

      {/* DEHYDRATED GARLIC PRODUCTS */}
      <ProductSection
        title="Dehydrated Garlic Products"
        subtitle="Peanut allergen free garlic processed for food safety"
        products={[
          {
            title: "Dehydrated Garlic Cloves / Flakes",
            description:
              "Naturally dehydrated garlic cloves and flakes with strong aroma and authentic taste, ideal for sauces and seasonings.",
            image: "/images/products/dehydrated/Dehydrated Garlic Cloves  Flakes.png",
            bg: "bg-[#F0F7FF]",
          },
          {
            title: "Dehydrated Garlic Chopped",
            description:
              "Chopped garlic offering excellent flavor retention and consistency for food manufacturers and bulk buyers.",
            image: "/images/products/dehydrated/Dehydrated Garlic Chopped.png",
            bg: "bg-[#EAF3FF]",
          },
          {
            title: "Dehydrated Garlic Minced",
            description:
              "Minced dehydrated garlic widely used in instant foods, marinades and spice blends.",
            image: "/images/products/dehydrated/Dehydrated Garlic Minced.png",
            bg: "bg-[#EEF5FF]",
          },
          {
            title: "Dehydrated Garlic Granules",
            description:
              "Uniform garlic granules suitable for dry mixes, rubs and ready seasoning applications.",
            image: "/products/garlic-granules.jpg",
            bg: "bg-[#E6F0FF]",
          },
          {
            title: "Dehydrated Garlic Powder",
            description:
              "Fine garlic powder with strong pungency and extended shelf life for industrial and export markets.",
            image: "/products/garlic-powder.jpg",
            bg: "bg-[#F3F8FF]",
          },
        ]}
      />

      {/* DEHYDRATED SPICES & HERBS */}
      <ProductSection
        title="Dehydrated Spices & Herbs"
        subtitle="Carefully dehydrated to preserve aroma, color and nutritional value"
        products={[
          {
            title: "Dehydrated Ginger Flakes & Powder",
            description:
              "High-quality dehydrated ginger processed to retain natural pungency, widely used in spice blends and herbal products.",
            image: "/products/ginger-dehydrated.jpg",
            bg: "bg-[#F6FFFA]",
          },
          {
            title: "Dehydrated Green Chilli Flakes & Powder",
            description:
              "Naturally dried green chilli offering controlled heat and vibrant flavor for seasoning applications.",
            image: "/products/green-chilli.jpg",
            bg: "bg-[#F2FFF5]",
          },
          {
            title: "Dehydrated Curry Leaves Powder",
            description:
              "Aromatic curry leaves powder commonly used in South Indian and ready-to-cook formulations.",
            image: "/products/curry-leaves.jpg",
            bg: "bg-[#F0FFF8]",
          },
          {
            title: "Dehydrated Fenugreek Leaves & Powder",
            description:
              "Carefully dehydrated fenugreek leaves (Kasuri Methi) known for rich aroma and long shelf life.",
            image: "/products/fenugreek.jpg",
            bg: "bg-[#F5FFF3]",
          },
          {
            title: "Dehydrated Coriander & Mint Leaves Powder",
            description:
              "Premium dehydrated coriander and mint leaves powder ideal for seasoning, chutneys and spice blends.",
            image: "/products/coriander-mint.jpg",
            bg: "bg-[#ECFFF6]",
          },
          {
            title: "Dried Moringa Leaves & Powder",
            description:
              "Nutrient-rich moringa leaves and powder processed for health, herbal and nutraceutical applications.",
            image: "/products/moringa.jpg",
            bg: "bg-[#EFFFF3]",
          },
        ]}
      />
    </>
  )
}
