import React from 'react'

export default function FreeItem() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Free Meal and Item Distributions
          </h1>
        </div>
        <div className="flex flex-col -m-5">
          <div className="p-2 md:w-full">
            <div className="flex rounded-lg h-full bg-gray-100 p-4 flex-col">
              <div className="flex items-center mb-1">
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Event Promotion
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Distribute free meals or items at community events,
                  conferences, or festivals, increasing brand awareness.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col -m-5">
          <div className="p-2 md:w-full">
            <div className="flex rounded-lg h-full bg-gray-100 p-4 flex-col">
              <div className="flex items-center mb-1">
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Customer Engagement
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Provide value to potential customers, creating positive
                  interactions and building brand loyalty.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col -m-5">
          <div className="p-2 md:w-full">
            <div className="flex rounded-lg h-full bg-gray-100 p-4 flex-col">
              <div className="flex items-center mb-1">
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Social Media Buzz
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Encourage sharing on social media platforms, generating online
                  buzz and expanding reach.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col -m-5">
          <div className="p-2 md:w-full">
            <div className="flex rounded-lg h-full bg-gray-100 p-4 flex-col">
              <div className="flex items-center mb-1">
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Community Involvement
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Support local causes and build goodwill within the community,
                  enhancing brand image.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
