'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./style.module.css"
import EmailForm from "../components/EmailForm";

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
              <h2 className="text-sm  font-lexend tracking-wides text-customBlue">
                WATER MINGLE
              </h2>
              <h1 className=" text-3xl font-fredoka text-customDark font-medium mb-1">
                {`PUT YOUR BRAND IN EVERYONE’S HAND`}
              </h1>

              <p className="leading-relaxed font-lexend text-md">
                Receive meaningful impressions and utilize the greatest brand
                loyalty platform in the ad industry
              </p>

              <div className="flex">
                <Link href="/" className={styles.button}>
                  Advertise With Us
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
              <h2 className="text-sm  font-lexend tracking-wides text-customBlue">
                WATER MINGLE
              </h2>
              <h1 className=" text-3xl font-fredoka text-customDark font-medium mb-1">
                Our product is a blank canvas
              </h1>

              <p className="leading-relaxed font-lexend text-md">
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

      {/* Section  3*/}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <h2 className=" text-2xl font-fredoka text-customDark font-medium mb-1">
                  Use QR Codes
                </h2>
                <p className="leading-relaxed font-lexend text-md">
                  to connect anything on the internet, such as websites,
                  coupons, and videos
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <h2 className=" text-2xl font-fredoka text-customDark font-medium mb-1">
                  Sell or Freely Distribute
                </h2>
                <p className="leading-relaxed font-lexend text-md">
                  ad supported FreeWater in aluminum bottles and paper cartons
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <h2 className=" text-2xl font-fredoka text-customDark font-medium mb-1">
                  Choose a Distribution Model
                </h2>
                <p className="leading-relaxed font-lexend text-md">
                  if you want us to distribute it in Austin or ship it anywhere
                  in the lower 48 states
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <h2 className=" text-2xl font-fredoka text-customDark font-medium mb-1">
                  Subsidize or Cover the Entire Cost by Sharing the Ad Space
                </h2>
                <p className="leading-relaxed font-lexend text-md">
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
            <div className=" w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm  font-lexend tracking-wides text-customBlue">
                WATER MINGLE
              </h2>
              <h1 className="font-fredoka text-white bg-customDark p-3 font-bold text-2xl rounded-md">
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

      {/* Contact section */}
      <EmailForm />
    </div>
  );
}
