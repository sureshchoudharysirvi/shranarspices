export const wholeSpices = [
  { id: 1, name: "Black Pepper", slug: "black-pepper", image: "/pepper.jpg", description: "100% natural, export grade, consistent bulk stock" },
  { id: 4, name: "Cumin Seeds", slug: "cumin-seeds", image: "/cumin.jpg", description: "Aromatic farm-sourced cumin, cleaned & graded for wholesale orders" },
  { id: 5, name: "Coriander Seeds", slug: "coriander-seeds", image: "/coriander.jpg", description: "High-oil content seeds ideal for masala manufacturing in bulk" },
  { id: 6, name: "Cloves", slug: "cloves", image: "/cloves.jpg", description: "Hand-picked, premium aroma cloves for commercial & export buyers" },
  { id: 7, name: "Green Cardamom", slug: "green-cardamom", image: "/cardamom.jpg", description: "Bold & green capsules, sorted for B2B premium supply chains" },
  { id: 8, name: "Cinnamon Sticks", slug: "cinnamon-sticks", image: "/cinnamon.jpg", description: "Long, clean sticks with strong fragrance for high volume demand" },
  { id: 9, name: "Turmeric Fingers", slug: "turmeric-fingers", image: "/turmeric.jpg", description: "Raw turmeric rhizomes without chemical polish or additives" }
];

export const masalaProducts = [
  { id: 2, name: "Garam Masala", slug: "garam-masala", image: "/garam.jpg", description: "Premium formulation for distributors & retail chains" },
  { id: 10, name: "Cumin Powder", slug: "cumin-powder", image: "/cumin-powder.jpg", description: "Fine-grind, export quality powder, lab tested for purity & consistency" },
  { id: 11, name: "Coriander Powder", slug: "coriander-powder", image: "/coriander-powder.jpg", description: "Made from high-oil seeds, rich aroma for bulk masala manufacturing" },
  { id: 12, name: "Turmeric Powder", slug: "turmeric-powder", image: "/turmeric-powder.jpg", description: "Unadulterated color & curcumin-rich, suitable for restaurant chains" },
  { id: 13, name: "Red Chilli Powder", slug: "red-chilli-powder", image: "/chilli-powder.jpg", description: "No artificial color, stem-removed batch for high quality B2B orders" },
  { id: 14, name: "Amchur Powder", slug: "amchur-powder", image: "/amchur.jpg", description: "Sun-dried mango powder, naturally tangy, graded for commercial use" },
  { id: 15, name: "Chaat Masala", slug: "chaat-masala", image: "/chaat.jpg", description: "Balanced commercial tang & flavor, ideal for B2B retail brands" }
];

export const spiceBlends = [
  { id: 3, name: "Chicken Masala Blend", slug: "chicken-blend", image: "/chick.jpg", description: "Custom recipes & purity guaranteed" },
  { id: 16, name: "Tea Masala Blend", slug: "tea-masala-blend", image: "/tea-masala.jpg", description: "Strong aroma mix for café chains, consistent for daily bulk usage" },
  { id: 17, name: "Pav Bhaji Spice Blend", slug: "pav-bhaji-blend", image: "/pavbhaji.jpg", description: "Custom spice profile for street-food & restaurant bulk orders" },
  { id: 18, name: "Biryani Spice Mix", slug: "biryani-spice-mix", image: "/biryani.jpg", description: "Long-cook flavor retention, premium grade for catering suppliers" },
  { id: 19, name: "Meat Tender Blend", slug: "meat-tender-blend", image: "/meat-tender.jpg", description: "Commercial blend for hotels & large kitchens" },
  { id: 20, name: "Tandoori Spice Blend", slug: "tandoori-spice", image: "/tandoori.jpg", description: "Smoky aromatic formulation for restaurant chains" },
  { id: 21, name: "Gujarat Special Blend", slug: "gujarat-special-mix", image: "/gujarat.jpg", description: "Region-specific formulation for distributor demand" }
];

export const products = [
  ...wholeSpices,
  ...masalaProducts,
  ...spiceBlends
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export { wholeSpices, masalaProducts, spiceBlends };
