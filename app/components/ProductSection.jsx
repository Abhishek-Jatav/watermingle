import Image from 'next/image';
import React from 'react'

export default function ProductSection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 bg-red-500 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <Image
            className="object-cover object-center w-full h-full"
            alt="stats"
          />
        </div>
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6">
            <div className="leading-relaxed">
              Pour-over craft beer pug drinking vinegar live-edge gastropub,
              keytar neutra sustainable fingerstache kickstarter.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
