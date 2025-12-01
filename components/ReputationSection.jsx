"use client";
import Image from "next/image";

export default function ReputationSection() {
  return (
    <section className="max-w-6xl mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#5A382F] text-center">
        Why Choose Shranar Spices?
      </h2>
      <p className="text-center text-sm sm:text-base text-gray-600 mt-2">
        The trusted choice for pure, tested, and scalable spice solutions for businesses.
      </p>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">

        {/* Card 1 */}
        <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-4">
          <div className="relative w-full h-[150px] sm:h-[170px] md:h-[190px] lg:h-[215px] overflow-hidden rounded-xl">
            <Image
              src="/images/natural.png"
              alt="Pure & Natural"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>
          <h3 className="font-bold text-lg sm:text-xl text-orange-700 text-center mt-4">
            Pure & Natural
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mt-2 text-center">
            We deliver spices sourced directly from farmers and processed with zero artificial colors.
          </p>
        </div>

        {/* Card 2 */}
        <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-4">
          <div className="relative w-full h-[150px] sm:h-[170px] md:h-[190px] lg:h-[215px] overflow-hidden rounded-xl">
            <Image
              src="/images/labm.png"
              alt="Lab Tested"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>
          <h3 className="font-bold text-lg sm:text-xl text-orange-700 text-center mt-4">
            Lab Tested
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mt-2 text-center">
            Every batch undergoes strict lab testing ensuring reliability for B2B clients.
          </p>
        </div>

        {/* Card 3 */}
        <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-4">
          <div className="relative w-full h-[150px] sm:h-[170px] md:h-[190px] lg:h-[215px] overflow-hidden rounded-xl">
            <Image
              src="/images/bulk.png"
              alt="Bulk Supply"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>
          <h3 className="font-bold text-lg sm:text-xl text-orange-700 text-center mt-4">
            Bulk Supply
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mt-2 text-center">
            Ready bulk stock, private labelling & on-time delivery for businesses.
          </p>
        </div>

      </div>
    </section>
  );
}
