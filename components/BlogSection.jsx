"use client";
import Image from "next/image";

const blogs = [
  {
    id: 1,
    title: "How to Identify Pure Spices (Easy Tests)",
    excerpt: "Learn quick purity tests for chilli, turmeric and coriander powders for your business needs.",
    image: "/images/blog11.png",
    url: "https://shranarspicesmasala.blogspot.com/2025/11/how-to-identify-pure-spices-easy-tests.html"
  },
  {
    id: 2,
    title: "Spice Processing Standards",
    excerpt: "Industry approved grinding, cleaning, and hygiene standards we follow for safe masala processing.",
    image: "/images/blog2.png",  // you can change this image later
    url: "https://shranarspicesmasala.blogspot.com/2025/11/spice-processing-standards.html"
  },
  {
    id: 3,
    title: "Why B2B Clients Prefer Us",
    excerpt: "Consistent bulk quality, pure spices, timely supply and dependable masala solutions for businesses.",
    image: "/images/blog3.png",  // you can change this image later
    url: "https://shranarspicesmasala.blogspot.com/2025/11/why-b2b-clients-prefer-us.html"
  }
];


export default function BlogSection() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-orange-900 text-center">
        Latest Blogs
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">

        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="group bg-white shadow-md hover:shadow-xl rounded-2xl p-4 transition transform hover:-translate-y-1"
          >
            {/* Image Adjustment */}
            <div className="relative w-full h-160px sm:h-[150px] md:h-[100px] lg:h-[220px] rounded-xl mb-3 overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover object-center group-hover:scale-[1.04] transition"
                sizes="(max-width: 640px) 90vw, 33vw"
              />
            </div>

            {/* Blog Title */}
            <h3 className="font-bold text-xl text-orange-700 text-center">
              {blog.title}
            </h3>

            {/* Short Description */}
            <p className="text-gray-600 mt-2 text-center text-sm">
              {blog.excerpt}
            </p>

            {/* Link Button */}
            <div className="text-center mt-4">
              <a
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-xl hover:bg-orange-700 transition"
              >
                Read Full Blog →
              </a>
            </div>
          </div>
        ))}

        {/* Keep your other 2 static cards if you want */}
      

       

      </div>
    </section>
  );
}
