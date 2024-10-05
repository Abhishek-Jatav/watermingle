import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className=" mt-10 bg-customDark">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link
          href="/"
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="text-customBlue font-sans font-extrabold  text-xl">
            waterMingle
          </span>
          <span className="text-customBlue font-sans font-bold text-sm">
            .in
          </span>
        </Link>
        <p className="text-sm text-customBlue sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © waterMingle
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link href="/" className="ml-3 text-custom-pink">
            <FontAwesomeIcon icon={faFacebookF} />
          </Link>
          <Link href="/" className="ml-3 text-custom-pink">
            <FontAwesomeIcon icon={faSquareTwitter} />
          </Link>
          <Link href="/" className="ml-3 text-custom-pink">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link href="/" className="ml-3 text-custom-pink">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </span>
      </div>
    </footer>
  );
}
