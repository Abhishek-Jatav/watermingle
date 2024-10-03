import React from 'react'
import styles from "../styles/Statergies.module.css"

export default function Statergies() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            Effective Brand Promotion Strategies
          </h1>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className={`${styles.cardInfo} md:p-2 p-1 w-1/2`}>
              <div className="w-full object-cover h-full object-center block">
                <h2
                  class={`${styles.title} title-font font-medium text-gray-900  text-sm mb-2`}>
                  Audience Research
                </h2>
                <p
                  className={`${styles.card} mx-auto leading-relaxed text-base`}>
                  Understanding your target audience is key to crafting
                  effective marketing strategies.
                </p>
              </div>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <div className="w-full object-cover h-full object-center block">
                <h2 class="title-font font-medium text-gray-900  text-sm mb-2">
                  Brand Storytelling
                </h2>
                <p class=" mx-auto leading-relaxed text-base">
                  {` Develop compelling narratives that connect with your audience
                  and convey your brand's values`}
                </p>
              </div>
            </div>
            <div className="md:p-2 p-1 w-full">
              <div className="w-full h-full object-cover object-center block">
                <h2 class="title-font font-medium text-gray-900  text-sm mb-2">
                  Content Marketing
                </h2>
                <p class=" mx-auto leading-relaxed text-base">
                  {`Create valuable and engaging content that attracts and retains your target audience.`}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <div className="w-full h-full object-cover object-center block">
                <h2 class="title-font font-medium text-gray-900  text-sm mb-2">
                  Social Media Engagement
                </h2>
                <p class=" mx-auto leading-relaxed text-base">
                  {`Build a strong social media presence, interacting with followers and promoting your brand.`}
                </p>
              </div>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <div className="w-full object-cover h-full object-center block">
                <h2 class="title-font font-medium text-gray-900  text-sm mb-2">
                  Influencer Marketing
                </h2>
                <p class=" mx-auto leading-relaxed text-base">
                  {`Partner with influential figures in your industry to reach a wider audience and build credibility.`}
                </p>
              </div>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <div className="w-full object-cover h-full object-center block">
                F
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
