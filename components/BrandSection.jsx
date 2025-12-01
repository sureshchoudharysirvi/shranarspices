import Image from "next/image";

export default function BrandSection() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-orange-700">Our Brand</h2>
      <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
        Delivering purity, consistency and premium spices trusted by wholesalers and distributors.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10 px-4">
        
        {/* CARD 1 */}
        <div className="p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition-all duration-300 group">
          <div className="w-full h-[180px] relative rounded-xl overflow-hidden">
            <Image 
              src="/images/premium.png"
              fill
              alt="Red Chilli spices"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 50vw, 25vw"
              priority
            />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-orange-700">Premium Quality</h3>
        </div>

        {/* CARD 2 */}
        <div className="p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition-all duration-300 group">
          <div className="w-full h-[180px] relative rounded-xl overflow-hidden">
            <Image 
              src="/images/mix.jpg"
              fill
              alt="Turmeric powder"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-orange-700">100% Natural</h3>
        </div>

        {/* CARD 3 */}
        <div className="p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition-all duration-300 group">
          <div className="w-full h-[180px] relative rounded-xl overflow-hidden">
            <Image 
              src="/images/noadultration.png"
              fill
              alt="Coriander"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-orange-700">No Adulteration</h3>
        </div>

        {/* CARD 4 */}
        <div className="p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition-all duration-300 group">
          <div className="w-full h-[180px] relative rounded-xl overflow-hidden">
            <Image 
              src="/images/btob.png"
              fill
              alt="Spice Banner"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-orange-700">Trusted by B2B Clients</h3>
        </div>

      </div>
    </div>
  );
}
