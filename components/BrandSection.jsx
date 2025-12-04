import Image from "next/image";

export default function BrandSection() {
  return (
    <section className="text-center py-16 px-3 sm:px-6 bg-orange-50">
      
      {/* SECTION TITLE */}
      <h2 className="text-3xl sm:text-4xl font-bold text-orange-700">Our Brand</h2>
      <p className="text-gray-600 mt-3 sm:mt-4 max-w-2xl mx-auto text-base sm:text-lg px-2">
        Delivering purity, consistency and premium Indian spices trusted by wholesalers, distributors and food businesses.
      </p>

      {/* RESPONSIVE GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12">

        {/* CARD 1 */}
        <div className="p-3 sm:p-5 bg-white shadow rounded-2xl group">
          <div className="relative w-full aspect-square rounded-xl overflow-hidden">
            <Image
              src="/images/premium.png"
              fill
              alt="Premium quality red chilli powder bulk supplier"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 45vw, 25vw"
              priority
            />
          </div>
          <h3 className="mt-3 sm:mt-4 text-sm sm:text-lg font-semibold text-orange-700">
            Premium Quality
          </h3>
        </div>

        {/* CARD 2 */}
        <div className="p-3 sm:p-5 bg-white shadow rounded-2xl group">
          <div className="relative w-full aspect-square rounded-xl overflow-hidden">
            <Image
              src="/images/mix.jpg"
              fill
              alt="100% natural turmeric coriander masala bulk supply"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 45vw, 25vw"
            />
          </div>
          <h3 className="mt-3 sm:mt-4 text-sm sm:text-lg font-semibold text-orange-700">
            100% Natural
          </h3>
        </div>

        {/* CARD 3 */}
        <div className="p-3 sm:p-5 bg-white shadow rounded-2xl group">
          <div className="relative w-full aspect-square rounded-xl overflow-hidden">
            <Image
              src="/images/noadultration.png"
              fill
              alt="Pure unadulterated Indian masala B2B supplier"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 45vw, 25vw"
            />
          </div>
          <h3 className="mt-3 sm:mt-4 text-sm sm:text-lg font-semibold text-orange-700">
            No Adulteration
          </h3>
        </div>

        {/* CARD 4 */}
        <div className="p-3 sm:p-5 bg-white shadow rounded-2xl group">
          <div className="relative w-full aspect-square rounded-xl overflow-hidden">
            <Image
              src="/images/btob.png"
              fill
              alt="Trusted spice manufacturer for wholesalers and distributors"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 45vw, 25vw"
            />
          </div>
          <h3 className="mt-3 sm:mt-4 text-sm sm:text-lg font-semibold text-orange-700">
            Trusted by B2B Clients
          </h3>
        </div>

      </div>

    </section>
  );
}
