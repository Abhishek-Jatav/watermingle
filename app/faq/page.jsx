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
        <h1>General</h1>
        {/* Accordion Item 1 */}
        <div className="border border-gray-200 rounded-md mb-2">
          <button
            className="w-full text-left p-4 bg-gray-100 font-semibold"
            onClick={() => toggleAccordion(1)}>
            Accordion Item 1
          </button>
          <div className={`${activeAccordion === 1 ? "block" : "hidden"} p-4`}>
            <p>This is the content of Accordion Item 1.</p>
          </div>
        </div>

        {/* Accordion Item 2 */}
        <div className="border border-gray-200 rounded-md mb-2">
          <button
            className="w-full text-left p-4 bg-gray-100 font-semibold"
            onClick={() => toggleAccordion(2)}>
            Accordion Item 2
          </button>
          <div className={`${activeAccordion === 2 ? "block" : "hidden"} p-4`}>
            <p>This is the content of Accordion Item 2.</p>
          </div>
        </div>

        {/* Accordion Item 3 */}
        <div className="border border-gray-200 rounded-md mb-2">
          <button
            className="w-full text-left p-4 bg-gray-100 font-semibold"
            onClick={() => toggleAccordion(3)}>
            Accordion Item 3
          </button>
          <div className={`${activeAccordion === 3 ? "block" : "hidden"} p-4`}>
            <p>This is the content of Accordion Item 3.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
