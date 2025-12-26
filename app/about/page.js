import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">

      {/* HERO SECTION */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold text-yellow-900 leading-tight">
            Shranar Spices – <br /> India’s Trusted B2B Bulk Masala Supplier
          </h1>

          <p className="mt-4 text-gray-700 text-lg">
            Premium, 100% natural, chemical-free Indian spice and masala manufacturer supplying in bulk to
            restaurants, wholesalers, retailers, distributors, food brands, and global export partners.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="bg-yellow-900 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-yellow-800 transition"
            >
              Get Bulk Pricing Quote
            </a>

            <a
              href="/catalogue.pdf"
              className="border border-yellow-900 text-yellow-900 px-6 py-3 rounded-2xl hover:bg-yellow-50 transition"
            >
              Download Product Catalogue
            </a>
          </div>
        </div>

        {/* HERO IMAGE */}
        <Image
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d"
          alt="Bulk Indian spices and masala blends for B2B business supply"
          width={600}
          height={450}
          priority
          className="rounded-2xl shadow-xl w-full object-cover"
        />
      </div>

      {/* OWNER SECTION */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-semibold text-yellow-900">Meet the Founder</h2>
        <p className="mt-2 text-gray-600">
          Driven by purity, quality, and long-term B2B partnerships
        </p>

        <div className="mt-6 flex justify-center">
          <Image
            src="/packaging/businessman.jpg"
            alt="Founder of Shranar Spices"
            width={160}
            height={160}
            className="rounded-full border-4 border-yellow-900 shadow-lg object-cover"
          />
        </div>

        <p className="mt-6 max-w-3xl mx-auto text-gray-700">
          Founded with a vision to deliver unadulterated Indian spices,
          <strong> Shranar Spices </strong>
          specializes in B2B supply, ensuring consistent batches, competitive wholesale pricing,
          hygienic processing, and business-grade packaging for high-volume commercial and export demands.
          We also offer custom masala formulation and private labeling for brands seeking long-term spice partners.
        </p>
      </div>

      {/* WHO WE ARE */}
      <div className="mt-20">
        <h2 className="text-3xl font-semibold text-yellow-900">Who We Are</h2>
        <p className="mt-4 text-gray-700">
          We are a dedicated <strong>B2B masala and whole spice supplier</strong> supporting commercial food and
          retail businesses with scalable production capacity, repeat-batch consistency, lab quality standards,
          and secure logistics.
        </p>
      </div>

      {/* SPICE GALLERY */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-yellow-900 text-center">
          Our Spice Range
        </h2>

        <p className="text-gray-600 mt-2 text-center">
          Indian whole spices • Premium masala blends • Export-grade bulk packaging
        </p>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            "/images/products/white-pepper.png",
            "/images/products/turmeric.jpg",
            "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26",
            "/images/products/red-chilli.png",
          ].map((src, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <Image
                src={src}
                alt="Bulk spice product"
                width={400}
                height={300}
                className="w-full h-56 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* BUSINESS STRENGTHS */}
      <div className="mt-20">
        <h2 className="text-3xl font-semibold text-yellow-900">
          Why Businesses Trust Shranar Spices
        </h2>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            ["100% Natural & Chemical-Free", "No additives, no artificial colors, only pure spice aroma and flavor."],
            ["Bulk Production Capacity", "Supports commercial orders from 10kg to 500kg+ monthly."],
            ["Custom Blends & Private Label", "Tailor-made masalas for restaurants and retail brands."],
            ["Business-grade Packaging", "Moisture-proof secure packing (100g – 50kg options)."],
            ["PAN-India & Export Logistics", "Reliable dispatch for domestic and international supply."],
            ["Lab Tested Quality", "Purity, aroma, moisture and safety verified batches."],
          ].map(([title, desc], index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg border border-yellow-200"
            >
              <h3 className="font-semibold text-xl">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CLOSING CTA */}
      <div className="mt-24 text-center bg-yellow-50 p-8 rounded-2xl border border-yellow-200 shadow-md">
        <h2 className="text-3xl font-bold text-yellow-900">
          Let’s Scale Your Spice Business Together
        </h2>

        <p className="mt-3 text-gray-700 text-lg">
          Reliable supply. Consistent batches. Pure Indian flavor. Made for business growth.
        </p>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a
            href="/contact"
            className="bg-yellow-900 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-yellow-800 transition"
          >
            Contact B2B Sales
          </a>

          <a
            href="/contact"
            className="border border-yellow-900 text-yellow-900 px-6 py-3 rounded-2xl hover:bg-white transition"
          >
            Request Free Samples
          </a>
        </div>
      </div>

      {/* SEO KEYWORDS */}
      <p className="hidden">
        B2B spices supplier, bulk masala manufacturer India, wholesale garam masala supplier,
        turmeric wholesale supplier, restaurant masala supplier, spice distributor India,
        export spice supplier
      </p>

    </section>
  );
}
