// data/products.js
export const products = [
  {
    id: 1,
    name: "Turmeric Powder",
    price: 120,
    slug: "turmeric-powder",
    image: "/images/turmeric.jpg",
    images: ["/images/turmeric.jpg", "/images/turmeric-2.jpg"],
    description: "Fresh, farm-sourced turmeric powder. Perfect for curries & health drinks.",
    details: [
      "100% pure",
      "No additives",
      "Net weight: 200g",
      "Shelf life: 12 months"
    ],
    reviews: [
      { id: 1, name: "Asha", rating: 5, text: "Very aromatic!" },
      { id: 2, name: "Rahul", rating: 4, text: "Good quality at this price." }
    ]
  },
  // ... other products
]

export function getProductBySlug(slug) {
  return products.find(p => p.slug === slug)
}

export function getAllSlugs() {
  return products.map(p => ({ slug: p.slug }))
}
