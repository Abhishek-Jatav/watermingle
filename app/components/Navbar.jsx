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
          <Link href="/" className="mr-5 hover:text-gray-900">
            Advertise
          </Link>
          <Link href="/" className="mr-5 hover:text-gray-900">
            Distribute
          </Link>
          <Link href="/" className="mr-5 hover:text-gray-900 flex flex-col">
            <div>Water</div>
            <div>mingle</div>
          </Link>
          <Link href="/" className="mr-5 hover:text-gray-900">
            Hall of Fame
          </Link>
          <Link href="/" className="mr-5 hover:text-gray-900">
            FAQ
          </Link>
          <Link href="/" className="mr-5 hover:text-gray-900">
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
