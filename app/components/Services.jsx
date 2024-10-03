import React from "react";
import styles from "../styles/Services.module.css";
import Link from "next/link";

export default function Services() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col justify-center items-center">
        <div className="flex flex-col text-start w-full mb-10 bg-customDark rounded-md p-3 pl-8">
          <h2 className="text-xs text-white tracking-widest font-normal font-lexend  mb-1">
            WATER MINGLE
          </h2>
          <h1 className="sm:text-3xl text-2xl font-bold font-fredoka mb-4 text-white">
            Advertising Services for Clients
          </h1>
        </div>
        <div className="grid grid-cols-2">
          <div className={styles.card}>
            <Link className={styles.card1} href="#">
              <h2>Targeted Campaigns</h2>
              <p className={styles.small}>
                {` We design advertising campaigns to reach your ideal audience, whether it's through social media, print, or digital platforms.`}
              </p>
              <div className={styles.goCorner}>
                <div className={styles.goArrow}>→</div>
              </div>
            </Link>
          </div>
          <div className={styles.card}>
            <Link className={styles.card1} href="#">
              <h2>Creative Content</h2>
              <p className={styles.small}>
                {` We create compelling and engaging content that resonates with your target market, including video, audio, and written materials. `}
              </p>
              <div className={styles.goCorner}>
                <div className={styles.goArrow}>→</div>
              </div>
            </Link>
          </div>
          <div className={styles.card}>
            <Link className={styles.card1} href="#">
              <h2> Data-Driven Insights</h2>
              <p className={styles.small}>
                {` We track campaign performance using analytics to optimize strategies and ensure maximum return on investment. `}
              </p>
              <div className={styles.goCorner}>
                <div className={styles.goArrow}>→</div>
              </div>
            </Link>
          </div>
          <div className={styles.card}>
            <Link className={styles.card1} href="#">
              <h2> Targeted Campaigns</h2>
              <p className={styles.small}>
                {`  We design advertising campaigns to reach your ideal audience,
              whether it's through social media, print, or digital platforms.
            `}
              </p>
              <div className={styles.goCorner}>
                <div className={styles.goArrow}>→</div>
              </div>
            </Link>
          </div>
        </div>
        <Link
          href="/contact"
          className={`${styles.button} font-lexend font-medium mt-10 mb-10`}>
          Advertise with us
        </Link>
      </div>
    </section>
  );
}
