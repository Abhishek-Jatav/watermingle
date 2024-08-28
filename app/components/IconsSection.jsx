import Image from 'next/image';
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPiggyBank } from "@fortawesome/free-regular-svg-icons";


export default function IconsSection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-5 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <Image
                alt="team"
                className="flex-shrink-0 rounded-lg w-20 h-20 object-cover object-center sm:mb-0 mb-4"
                src="/pig.png"
                width={100}
                height={100}
              />
              <div className="flex-grow  sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Save Money
                </h2>
                <p className="mb-4">
                  Bottled water costs 2,000 times the price of tap water
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <Image
                alt="team"
                className="flex-shrink-0 rounded-lg w-20 h-20 object-cover object-center sm:mb-0 mb-4"
                src="/octopus.png"
                width={100}
                height={100}
              />
              <div className="flex-grow  sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Eco Friendly
                </h2>
                <p className="mb-4">Our goal is to be net positive by 2030 </p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <Image
                alt="team"
                className="flex-shrink-0 rounded-lg w-20 h-20 object-cover object-center sm:mb-0 mb-4"
                src="/water.png"
                width={100}
                height={100}
              />
              <div className="flex-grow  sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Premium Water
                </h2>
                <p className="mb-4">
                  FreeWater is natural spring water and all of our containers
                  are BPA free{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <Image
                alt="team"
                className="flex-shrink-0 rounded-lg w-20 h-20 object-cover object-center sm:mb-0 mb-4"
                src="/savelife.png"
                width={100}
                height={100}
              />
              <div className="flex-grow  sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Save Lives
                </h2>
                <p className="mb-4">
                  Ten cents from each beverage is donated to charity to build
                  water wells for people in need
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
