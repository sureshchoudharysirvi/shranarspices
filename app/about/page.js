export default function AboutPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">

      {/* HERO SECTION */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold text-yellow-900 leading-tight">
            Shranar Spices – <br/> India’s Trusted B2B Bulk Masala Supplier
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            Premium, 100% natural, chemical-free Indian spice and masala manufacturer supplying in bulk to 
            restaurants, wholesalers, retailers, distributors, food brands, and global export partners.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="/contact" className="bg-yellow-900 text-white px-6 py-3 rounded-2xl shadow-lg hover:opacity-90">
              Get Bulk Pricing Quote
            </a>
            <a href="/catalogue.pdf" className="border border-yellow-900 text-yellow-900 px-6 py-3 rounded-2xl hover:bg-yellow-50">
              Download Product Catalogue
            </a>
          </div>
        </div>

        {/* Attractive Hero Image */}
        <img 
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d" 
          alt="Bulk Indian spices and masala blends for B2B business supply"
          className="rounded-2xl shadow-xl w-full"
        />
      </div>

      {/* OWNER SECTION */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-semibold text-yellow-900">Meet the Founder</h2>
        <p className="mt-2 text-gray-600">Driven by purity, quality, and long-term B2B partnerships</p>

        {/* Owner Placeholder */}
        <div className="mt-6 flex justify-center">
          <img
            src="https://via.placeholder.com/160"
            alt="Owner of Shranar Spices – Indian masala B2B bulk supplier"
            className="rounded-full w-40 h-40 object-cover border-4 border-yellow-900 shadow-lg"
          />
        </div>

        <p className="mt-6 max-w-3xl mx-auto text-gray-700">
          Founded with a vision to deliver unadulterated Indian spices, <strong>Shranar Spices</strong> specializes in B2B supply, 
          ensuring consistent batches, competitive wholesale pricing, hygienic processing, and business-grade packaging 
          for high-volume commercial and export demands.  
          We provide custom masala formulation and private labeling for brands seeking trusted long-term spice partners.
        </p>
      </div>

      {/* WHO WE ARE */}
      <div className="mt-20">
        <h2 className="text-3xl font-semibold text-yellow-900">Who We Are</h2>
        <p className="mt-4 text-gray-700">
          We are a dedicated <strong>B2B masala and whole spice supplier</strong> supporting commercial food and retail businesses with 
          scalable production capacity, repeat-batch consistency, lab quality standards, and secure logistics.  
          Our portfolio includes whole spices, premium masala blends, customized spice formulations, and private-label supply for retail brands.
        </p>
      </div>

      {/* IMAGE GALLERY FOR SPICES */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-yellow-900 text-center">Our Spice Range</h2>
        <p className="text-gray-600 mt-2 text-center">
          Indian whole spices • Premium masala blends • Export-grade bulk packaging
        </p>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <img src="https://images.unsplash.com/photo-1601050690101-c33bb718db2c" alt="Red chili powder bulk supplier – b2b indian masala" className="rounded-2xl shadow-md"/>
          <img src="https://images.unsplash.com/photo-1594221117869-c362a8d89b3c" alt="Turmeric powder wholesale supplier for business – b2b spices" className="rounded-2xl shadow-md"/>
          <img src="https://images.unsplash.com/photo-1604329760661-e71dc83f8f26" alt="Garam masala manufacturer bulk supply – b2b spices india" className="rounded-2xl shadow-md"/>
          <img src="https://images.unsplash.com/photo-1615478555537-5d180f4b5dd2" alt="Whole spices bulk business packing and supply" className="rounded-2xl shadow-md"/>
        </div>
      </div>

      {/* BUSINESS STRENGTHS */}
      <div className="mt-20">
        <h2 className="text-3xl font-semibold text-yellow-900">Why Businesses Trust Shranar Spices</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-yellow-200">
            <h3 className="font-semibold text-xl">100% Natural & Chemical-Free</h3>
            <p className="mt-2 text-gray-600">No additives, no artificial colors, only pure spice aroma and flavor.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-yellow-200">
            <h3 className="font-semibold text-xl">Bulk Production Capacity</h3>
            <p className="mt-2 text-gray-600">Supports commercial orders from 10kg to 500kg+ monthly.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-yellow-200">
            <h3 className="font-semibold text-xl">Custom Blends & Private Label</h3>
            <p className="mt-2 text-gray-600">Tailor-made masalas for restaurant taste and retail brands.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-yellow-200">
            <h3 className="font-semibold text-xl">Business-grade Packaging</h3>
            <p className="mt-2 text-gray-600">Moisture-proof, secure packing (100g – 50kg sack options).</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-yellow-200">
            <h3 className="font-semibold text-xl">PAN-India & Export Logistics</h3>
            <p className="mt-2 text-gray-600">On-time dispatch for seasonal, retail and global business supply.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-yellow-200">
            <h3 className="font-semibold text-xl">Lab Tested Quality</h3>
            <p className="mt-2 text-gray-600">Purity, aroma, moisture, density and safety verified batches.</p>
          </div>
        </div>
      </div>

      {/* ADDITIONAL IMAGE SECTION */}
      {/* <div className="mt-16 grid md:grid-cols-3 gap-6">
        <img src="https://images.unsplash.com/photo-1575980726530-2257b1c2b517" alt="Organic spice farm sourcing India" className="rounded-2xl shadow-lg"/>
        <img src="https://images.unsplash.com/photo-1589987607627-616cac5c2cba" alt="Premium spice blending and processing" className="rounded-2xl shadow-lg"/>
        <img src="https://images.unsplash.com/photo-1600181956288-28d7f0e73c28" alt="Spices hygienic packaging for wholesale and business delivery" className="rounded-2xl shadow-lg"/>
      </div> */}

      {/* CLOSING SECTION */}
      <div className="mt-24 text-center bg-yellow-50 p-8 rounded-2xl border border-yellow-200 shadow-md">
        <h2 className="text-3xl font-bold text-yellow-900">Let’s Scale Your Spice Business Together</h2>
        <p className="mt-3 text-gray-700 text-lg">
          Reliable supply. Consistent batches. Pure Indian flavor. Made for business growth.
        </p>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a href="/contact" className="bg-yellow-900 text-white px-6 py-3 rounded-2xl shadow-lg hover:opacity-90">
            Contact B2B Sales
          </a>
          <a href="/contact" className="border border-yellow-900 text-yellow-900 px-6 py-3 rounded-2xl hover:bg-white">
            Request Free Samples
          </a>
        </div>
      </div>

      {/* SEO KEYWORDS (HIDDEN FOR SEO ONLY) */}
      <p className="hidden">
        B2B spices supplier, bulk masala manufacturer India, 100% natural spices, wholesale garam masala supplier, 
        turmeric wholesale supplier, restaurant masala supplier, spice distributor India, export spice supplier
      </p>

    </section>
  );
}
