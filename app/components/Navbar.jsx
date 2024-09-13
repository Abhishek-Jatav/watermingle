import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link href="/advertise" className="mr-5 hover:text-gray-900">
            Advertise
          </Link>

          <Link href="/" className="mr-5 hover:text-gray-900 flex flex-col">
            <div className="font-bold text-blue-700">Water</div>
            <div className="font-semibold text-black" >mingle</div>
          </Link>
          <Link href="/faq" className="mr-5 hover:text-gray-900">
            FAQ
          </Link>
          <Link href="/contact" className="mr-5 hover:text-gray-900">
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
