"use client";

import React, { useState } from "react";

export default function FaqPage() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion((prevActive) => (prevActive === id ? null : id));
  };

  return (
    <div>
      <div className="ml-10">
        <span className="text-customDark">Home</span>
        {` > `}
        <span className="text-blue-400">FAQs</span>
      </div>

      <div className="max-w-lg mx-auto flex flex-col justify-center items-center">
        <h1 className="sm:text-3xl text-2xl font-medium font-fredoka bg-customDark rounded-md p-3 pl-16 pr-16 mb-10 text-white">
          General Questions
        </h1>

        {/* Accordion Item 1 */}
        <div className="border-black border-2 w-full rounded-md mb-2">
          <button
            className="w-full text-left p-4 bg-gray-100 font-semibold"
            onClick={() => toggleAccordion(1)}>
            <span>
              How does your company provide brand advertisements?
              <span>{` -->`}</span>
            </span>
          </button>
          <div className={`${activeAccordion === 1 ? "block" : "hidden"} p-4`}>
            <p>
              We place your brand's advertisement on water bottles and other
              items requested by you. We then distribute these items to targeted
              consumers, helping your brand gain exposure.
            </p>
          </div>
        </div>

        {/* Accordion Item 2 */}
        <div className="border-black border-2 w-full rounded-md mb-2">
          <button
            className="w-full text-left p-4 bg-gray-100 font-semibold"
            onClick={() => toggleAccordion(2)}>
            <span>
              Are the water bottles and items free for consumers?
              <span>{` -->`}</span>
            </span>
          </button>
          <div className={`${activeAccordion === 2 ? "block" : "hidden"} p-4`}>
            <p>
              Yes, the water bottles and other branded items are free for
              consumers. However, brands pay for the production and distribution
              of these items as part of their advertising campaign.
            </p>
          </div>
        </div>

        {/* Accordion Item 3 */}
        <div className="border-black border-2 w-full rounded-md mb-2">
          <button
            className="w-full text-left p-4 bg-gray-100 font-semibold"
            onClick={() => toggleAccordion(3)}>
            <span>
              How do you ensure my brand reaches the right audience?
              <span>{` -->`}</span>
            </span>
          </button>
          <div className={`${activeAccordion === 3 ? "block" : "hidden"} p-4`}>
            <p>
              We carefully plan distribution at events or locations where your
              target audience is present, ensuring that your brand is seen by
              the right people.
            </p>
          </div>
        </div>

        {/* Accordion Item 4 */}
        <div className="border-black border-2 w-full rounded-md mb-2">
          <button
            className="w-full text-left p-4 bg-gray-100 font-semibold"
            onClick={() => toggleAccordion(4)}>
            <span>
              What kind of items can I choose to feature my brand on?
              <span>{` -->`}</span>
            </span>
          </button>
          <div className={`${activeAccordion === 4 ? "block" : "hidden"} p-4`}>
            <p>
              In addition to water bottles, you can request specific items such
              as tote bags, pens, t-shirts, or any other items relevant to your
              brand’s needs.
            </p>
          </div>
        </div>

        {/* Accordion Item 5 */}
        <div className="border-black border-2 w-full rounded-md mb-2">
          <button
            className="w-full text-left p-4 bg-gray-100 font-semibold"
            onClick={() => toggleAccordion(5)}>
            <span>
              How do you ensure the quality of the water bottles and items with
              my brand's label?
              <span>{` -->`}</span>
            </span>
          </button>
          <div className={`${activeAccordion === 5 ? "block" : "hidden"} p-4`}>
            <p>
              We collaborate with high-quality suppliers and ensure that all
              items meet the standards that align with your brand's reputation.
            </p>
          </div>
        </div>

        {/* Accordion Item 6 */}
        <div className="border-black border-2 w-full rounded-md mb-2">
          <button
            className="w-full text-left p-4 bg-gray-100 font-semibold"
            onClick={() => toggleAccordion(6)}>
            <span>
              How do I get started with advertising my brand through your
              service?
              <span>{` -->`}</span>
            </span>
          </button>
          <div className={`${activeAccordion === 6 ? "block" : "hidden"} p-4`}>
            <p>
              You can reach out to us with your campaign goals and preferred
              items. We’ll work with you to design the labels and coordinate the
              distribution.
            </p>
          </div>
        </div>

        {/* Accordion Item 7 */}
        <div className="border-black border-2 w-full rounded-md mb-2">
          <button
            className="w-full text-left p-4 bg-gray-100 font-semibold"
            onClick={() => toggleAccordion(7)}>
            <span>
              Will my brand be the only one featured on the items?
              <span>{` -->`}</span>
            </span>
          </button>
          <div className={`${activeAccordion === 7 ? "block" : "hidden"} p-4`}>
            <p>
              Yes, each item is exclusively labeled with your brand to ensure
              that your advertisement receives full attention.
            </p>
          </div>
        </div>

        {/* Accordion Item 8 */}
        <div className="border-black border-2 w-full rounded-md mb-2">
          <button
            className="w-full text-left p-4 bg-gray-100 font-semibold"
            onClick={() => toggleAccordion(8)}>
            <span>
              What is the minimum quantity of items I need to order for an
              advertising campaign?
              <span>{` -->`}</span>
            </span>
          </button>
          <div className={`${activeAccordion === 8 ? "block" : "hidden"} p-4`}>
            <p>
              We offer flexible options based on your advertising goals and
              budget. You can choose a small batch or a larger quantity for
              broader outreach.
            </p>
          </div>
        </div>

        {/* Accordion Item 9 */}
        <div className="border-black border-2 w-full rounded-md mb-2">
          <button
            className="w-full text-left p-4 bg-gray-100 font-semibold"
            onClick={() => toggleAccordion(9)}>
            <span>
              How do you measure the success of my brand's advertisement?
              <span>{` -->`}</span>
            </span>
          </button>
          <div className={`${activeAccordion === 9 ? "block" : "hidden"} p-4`}>
            <p>
              We provide distribution reports, and where possible, gather
              feedback from the target audience to help measure brand impact and
              awareness.
            </p>
          </div>
        </div>

        {/* Accordion Item 10 */}
        <div className="border-black border-2 w-full rounded-md mb-2">
          <button
            className="w-full text-left p-4 bg-gray-100 font-semibold"
            onClick={() => toggleAccordion(10)}>
            <span>
              What are the costs involved in using your service?
              <span>{` -->`}</span>
            </span>
          </button>
          <div className={`${activeAccordion === 10 ? "block" : "hidden"} p-4`}>
            <p>
              Brands pay for the production and distribution of the labeled
              items. The costs are based on the quantity, type of items, and
              distribution strategy, typically offering a cost-effective
              advertising method.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
