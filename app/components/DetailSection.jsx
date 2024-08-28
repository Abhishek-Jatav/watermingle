import Image from 'next/image';
import React from 'react'

export default function DetailSection() {
  return (
    <section className="text-gray-600 h-full  body-font">
      <div className="container mx-auto  flex px-5 py-10 h-full md:flex-row flex-col items-center">
        <div className="lg:max-w-lg object-cover object-center bg-blue-400 lg:w-full h-96 md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image alt="hero" />
        </div>
        <div className="lg:flex-grow  md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Another scheme
            <br className="hidden lg:inline-block" />
            readymade gluten
          </h1>
          <p className="mb-8 leading-relaxed">
            We donate ten cents per beverage to WellAware, an Austin based
            non-profit that builds water wells in East Africa. Every 150
            FreeWaters donates enough money to provide one person with a safe
            water source for the rest of their life.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-black  border-2 border-black py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              {`Learn more ->`}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
