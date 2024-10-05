import React from "react";
import EmailForm from "../components/EmailForm";

export default function page() {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="ml-10">
        <span className="text-customDark">Home</span>
        {` > `}
        <span className="text-blue-400">Contact</span>
      </div>


      {/* New section for customer beliefs */}
      <div className="bg-yellow-50 py-8 px-4 mb-8 border-l-4 border-yellow-500 shadow-lg">
        <h2 className="text-4xl font-bold mb-4 text-customDark">
          Why Contact Us?
        </h2>
        <ul className="list-none pl-0 text-xl text-gray-800 space-y-2">
          <li>
            <span className="flex items-center">
              <span className="text-green-500 mr-2">➔</span>
              We believe in the quality of our work and the services we provide.
            </span>
          </li>
          <li>
            <span className="flex items-center">
              <span className="text-green-500 mr-2">➔</span>
              Our team is dedicated, knowledgeable, and experienced.
            </span>
          </li>
          <li>
            <span className="flex items-center">
              <span className="text-green-500 mr-2">➔</span>
              We know exactly what we’re doing, and we’re here to deliver the
              best solutions for your needs.
            </span>
          </li>
          <li>
            <span className="flex items-center">
              <span className="text-green-500 mr-2">➔</span>
              Your satisfaction is our priority, and we aim to exceed
              expectations with every project.
            </span>
          </li>
          <li>
            <span className="flex items-center">
              <span className="text-green-500 mr-2">➔</span>
              We pride ourselves on clear communication and a client-first
              approach.
            </span>
          </li>
          <li>
            <span className="flex items-center">
              <span className="text-green-500 mr-2">➔</span>
              Let’s work together to create something truly exceptional. Contact
              us today to learn more about how we can help!
            </span>
          </li>
        </ul>
      </div>

      {/* Email Form */}
      <EmailForm />
    </div>
  );
}
