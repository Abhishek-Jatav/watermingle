import Image from "next/image";
import React from "react";

export default function Herosection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto  w-full h-1vh flex px-5 py-20 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {` ​Put Your Brand In Everyone's Hand!`}
          </h1>
          <div className="flex justify-center">
            <button className="inline-flex text-black  border-2 border-black py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Advertise with us
            </button>
          </div>
        </div>
        <div className=" md:w-3/6 w-full h-full py-5 mb-10 object-cover object-center ">
          <Image
            alt="hero"
            src="/bottle.png"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </section>
  );
}
