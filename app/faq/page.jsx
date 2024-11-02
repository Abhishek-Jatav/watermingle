"use client";

import React, { useState } from "react";

// FAQ data as a constant
const faqData = [
  {
    question: "How does your company provide brand advertisements?",
    answer: `We place your brand's advertisement on water bottles and other items requested by you. We then distribute these items to targeted consumers, helping your brand gain exposure.`,
  },
  {
    question: "Are the water bottles and items free for consumers?",
    answer: `Yes, the water bottles and other branded items are free for consumers. However, brands pay for the production and distribution of these items as part of their advertising campaign.`,
  },
  {
    question: "How do you ensure my brand reaches the right audience?",
    answer: `We carefully plan distribution at events or locations where your target audience is present, ensuring that your brand is seen by the right people.`,
  },
  {
    question: "What kind of items can I choose to feature my brand on?",
    answer: `In addition to water bottles, you can request specific items such as tote bags, pens, t-shirts, or any other items relevant to your brand’s needs.`,
  },
  {
    question:
      "How do you ensure the quality of the water bottles and items with my brand's label?",
    answer: `We collaborate with high-quality suppliers and ensure that all items meet the standards that align with your brand's reputation.`,
  },
  {
    question:
      "How do I get started with advertising my brand through your service?",
    answer: `You can reach out to us with your campaign goals and preferred items. We’ll work with you to design the labels and coordinate the distribution.`,
  },
  {
    question: "Will my brand be the only one featured on the items?",
    answer: `Yes, each item is exclusively labeled with your brand to ensure that your advertisement receives full attention.`,
  },
  {
    question:
      "What is the minimum quantity of items I need to order for an advertising campaign?",
    answer: `We offer flexible options based on your advertising goals and budget. You can choose a small batch or a larger quantity for broader outreach.`,
  },
  {
    question: "How do you measure the success of my brand's advertisement?",
    answer: `We provide distribution reports, and where possible, gather feedback from the target audience to help measure brand impact and awareness.`,
  },
  {
    question: "What are the costs involved in using your service?",
    answer: `Brands pay for the production and distribution of the labeled items. The costs are based on the quantity, type of items, and distribution strategy, typically offering a cost-effective advertising method.`,
  },
];

const FAQAccordion = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
      <div className="ml-10">
        <span className="text-customDark">Home</span>
        {` > `}
        <span className="text-blue-400">FAQs</span>
      </div>
      <div className="max-w-lg mx-auto flex flex-col justify-center items-center">
        <h1 className="sm:text-3xl w-full text-center text-2xl font-medium font-fredoka bg-customDark rounded-md p-3 pl-16 pr-16 mb-10 text-white">
          General Questions
        </h1>

        {faqData.map((item, index) => (
          <div
            key={index}
            className="border-black border-2 w-full rounded-md mb-2"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}>
            <button className="w-full text-left p-4 bg-gray-100 font-semibold flex justify-between items-center">
              <span>{item.question}</span>
              <span
                className={`transform transition-transform ${
                  hoveredIndex === index ? "rotate-180" : "rotate-0"
                }`}>
                ↓
              </span>
            </button>

            {/* Answer with transition effect and scrollable overflow */}
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                hoveredIndex === index
                  ? "max-h-40 opacity-100 overflow-y-auto"
                  : "max-h-0 opacity-0"
              }`}>
              <p className="p-4">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
