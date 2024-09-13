'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="ml-10">
        <span className="text-blue-400">Home</span>
        {` > `}
        <span>Advertise</span>
      </div>

      {/* Section 1 */}
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              alt="ecommerce"
              className="lg:w-1/2 bg-red-900 w-full lg:h-auto h-64 object-cover object-center rounded"
              width={100}
              height={100}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                WATER MINGLE
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                PUT YOUR BRAND IN EVERYONE’S HAND
              </h1>

              <p className="leading-relaxed">
                Receive meaningful impressions and utilize the greatest brand
                loyalty platform in the ad industry
              </p>

              <div className="flex">
                <Link
                  href="/"
                  className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Get A Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                WATER MINGLE
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                Our product is a blank canvas
              </h1>

              <p className="leading-relaxed mb-4">
                {` We are the opposite of traditional advertising because we are
                not annoying. Instead of making the audience cringe or run for
                cover, we put a smile on their face, and from that state of
                happiness is when they'll be excited to support your brand.
              `}
              </p>

              <div className="flex">
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Button
                </button>
              </div>
            </div>
            <Image
              alt="ecommerce"
              className="lg:w-1/2 w-full bg-red-400 lg:h-auto h-64 object-cover object-center rounded"
              width={100}
              height={100}
            />
          </div>
        </div>
      </section>

      {/* Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Use QR Codes
                </h2>
                <p className="leading-relaxed text-base">
                  to connect anything on the internet, such as websites,
                  coupons, and videos
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Sell or Freely Distribute
                </h2>
                <p className="leading-relaxed text-base">
                  ad supported FreeWater in aluminum bottles and paper cartons
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Choose a Distribution Model
                </h2>
                <p className="leading-relaxed text-base">
                  if you want us to distribute it in Austin or ship it anywhere
                  in the lower 48 states
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Subsidize or Cover the Entire Cost by Sharing the Ad Space
                </h2>
                <p className="leading-relaxed text-base">
                  with non-competing brands
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section */}
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-col">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                WATER MINGLE
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                {` It's a mini billboard in your hands`}
              </h1>
            </div>
            <div className="flex flex-row">
              <div>
                <Image
                  alt="ecommerce"
                  className="lg:w-1/2 bg-red-500 w-full lg:h-auto h-64 object-cover object-center rounded"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <Image
                  alt="ecommerce"
                  className="lg:w-1/2 bg-red-500 w-full lg:h-auto h-64 object-cover object-center rounded"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer stories */}
        <div className="max-w-2xl mx-auto">
          <div
            id="default-carousel"
            className="relative"
            data-carousel="static">
            {/* Carousel wrapper */}
            <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
              {/* Item 1 */}
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item="">
                <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
                  First
                </span>
                <Image
                  className="block bg-red-500 absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                  alt="..."
                />
              </div>
              {/* Item 2 */}
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item="">
                <Image
                  className="block bg-red-500 absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                  alt="..."
                />
              </div>
              {/* Item 3 */}
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item="">
                <Image
                  className="block bg-red-500 absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                  alt="..."
                />
              </div>
            </div>
            {/* Slider indicators */}
            <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 1"
                data-carousel-slide-to={0}
              />
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 2"
                data-carousel-slide-to={1}
              />
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 3"
                data-carousel-slide-to={2}
              />
            </div>
            {/* Slider controls */}
            <button
              type="button"
              className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
              data-carousel-prev="">
              <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="hidden">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
              data-carousel-next="">
              <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span className="hidden">Next</span>
              </span>
            </button>
          </div>
        </div>

      {/* Contact section */}
    </div>
  );
}
