import Image from 'next/image';
import React from 'react'

export default function ProductSection() {
  return (
    <section className="text-gray-600  body-font">
      <div className="container px-5 py-24  mx-auto h-full flex flex-wrap">
        <div className="lg:w-1/2  sm:w-1/3 w-full h-lvh bg-blue-400 rounded-lg overflow-hidden mt-6 sm:mt-0">
          <Image
            className="object-cover object-center w-full h-full"
            alt="stats"
          />
        </div>
        <div className="flex flex-wrap -mx-1 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6">
            <div className="leading-relaxed text-black">
              FreeWater is an innovative advertising platform that utilizes
              premium spring water as a new type of advertising medium while
              prioritizing philanthropy and sustainability. Ten cents from each
              beverage is donated to charity to{" "}
              <strong>fight the global water crisis.</strong>
              We only need 10% of Americans to choose FreeWater so we can solve
              the global water crisis permanently.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
