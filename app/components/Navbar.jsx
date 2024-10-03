import Link from "next/link";
import React from "react";
import styles from "../styles/Navbar.module.css"

export default function Navbar() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link
            href="/"
            className="mr-5 font-lexend font-medium hover:text-customBlue">
            Home
          </Link>
          <Link
            href="/advertise"
            className="mr-5 font-lexend font-medium hover:text-customBlue">
            Advertise
          </Link>

          <Link href="/" className="mr-5">
            <button className={`${styles.button}`}>
              <div className="font-lexend font-bold text-customDark">Water</div>
              <div className="font-lexend font-bold text-customDark">
                Mingle
              </div>
            </button>
          </Link>
          <Link
            href="/faq"
            className="mr-5 font-lexend font-medium hover:text-customBlue">
            FAQ
          </Link>
          <Link
            href="/contact"
            className="mr-5 font-lexend font-medium hover:text-customBlue">
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
