import React from 'react'

export default function Services() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-start w-full mb-10">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            WATER MINGLE
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Advertising Services for Clients
          </h1>
        </div>
        <div className="flex flex-wrap">
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-2 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Targeted Campaigns
            </h2>
            <p className="leading-relaxed text-base mb-4">
              {` We design advertising campaigns to reach your ideal audience, whether it's through social media, print, or digital platforms.`}
            </p>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-2 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Creative Content
            </h2>
            <p className="leading-relaxed text-base mb-4">
              {` We create compelling and engaging content that resonates with your target market, including video, audio, and written materials. `}
            </p>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-2 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Data-Driven Insights
            </h2>
            <p className="leading-relaxed text-base mb-4">
              {` We track campaign performance using analytics to optimize strategies and ensure maximum return on investment. `}
            </p>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-2 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Targeted Campaigns
            </h2>
            <p className="leading-relaxed text-base mb-4">
              {`  We design advertising campaigns to reach your ideal audience,
              whether it's through social media, print, or digital platforms.
            `}
            </p>
          </div>
        </div>
        <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Advertise with us
        </button>
      </div>
    </section>
  );
}
