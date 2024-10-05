'use client'

import React from 'react'
import { useState } from 'react';

export default function FaqPage() {

    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (id) => {
      setActiveAccordion((prevActive) => (prevActive === id ? null : id));
    };

  return (
    <div>
      <div className="ml-10">
        <span className="text-blue-400">Home</span>
        {` > `}
        <span>FAQ</span>
      </div>

      <div className="max-w-lg mx-auto flex flex-col justify-center items-center">
        <h1 className="sm:text-3xl text-2xl font-medium font-fredoka bg-customDark rounded-md p-3 pl-16 pr-16 mb-10 text-white">
          General Questions
        </h1>
        {/* Accordion Item 1 */}
        <div className=" border-black border-2 w-full rounded-md mb-2">
          <button
            className="w-full text-left p-4 bg-gray-100 space-x-80 font-semibold"
            onClick={() => toggleAccordion(1)}>
            <span>Accordion Item 1</span>
            <span>{`↓`}</span>
          </button>
          <div className={`${activeAccordion === 1 ? "block" : "hidden"} p-4`}>
            <p>This is the content of Accordion Item 1.</p>
          </div>
        </div>

        {/* Accordion Item 2 */}

        {/* Accordion Item 3 */}
      </div>
    </div>
  );
}
