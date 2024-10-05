import React from 'react'
import styles from "../styles/Statergies.module.css"

export default function Statergies() {
  return (
    <div className="flex flex-col px-20">
      <div className="sm:text-3xl text-2xl font-medium font-fredoka bg-customDark rounded-md p-3 pl-5 mb-10 text-white">
        Effective Brand Promotion Strategies
      </div>
      <div className=" grid grid-cols-2 gap-24 pl-20 pr-20 pb-20 pt-5 ml-24 justify-center items-center">
        <div className={styles.card}>
          <h2>
            <strong className="text-customGreen">Audience Research</strong>
            <span className="text-sm">
              Understanding your target audience is key to crafting effective
              marketing strategies.
            </span>
          </h2>
        </div>
        <div className={styles.card}>
          <h2>
            <strong className="text-customGreen"> Brand Storytelling</strong>
            <span className="text-sm">
              {` Develop compelling narratives that connect with your audience
                  and convey your brand's values`}
            </span>
          </h2>
        </div>
        <div className={styles.card}>
          <h2>
            <strong className="text-customGreen">Content Marketing</strong>
            <span className="text-sm">
              {`Create valuable and engaging content that attracts and retains your target audience.`}
            </span>
          </h2>
        </div>
        <div className={styles.card}>
          <h2>
            <strong className="text-customGreen">Influencer Marketing</strong>
            <span className="text-sm">
              {`Partner with influential figures in your industry to reach a wider audience and build credibility.`}
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}
