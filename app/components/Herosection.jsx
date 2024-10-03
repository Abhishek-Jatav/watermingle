import Image from "next/image";
import React from "react";
import styles from "../styles/Herosection.module.css";
import Link from "next/link";

export default function Herosection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto  w-full h-1vh flex px-5 py-20 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="font-fredoka sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">
            {`Elevating Your Brand Through Innovative Marketing`}
          </h1>
          <p className=" mb-4 font-lexend font-medium select-none">
            We bring your brand to life with
            <span className="text-customBlue">{" strategic"}</span> and
            <span className="text-customGreen">{" creative"}</span> solutions.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className={`${styles.button} font-lexend font-medium mt-10 mb-10`}>
              Advertise with us
            </Link>
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
