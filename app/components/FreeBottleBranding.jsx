import React from "react";
import styles from "../styles/FreeBottleBranding.module.css";

export default function FreeBottleBranding() {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium font-fredoka bg-customDark rounded-md p-3 pl-5 mb-10 text-white">
          Free Water Bottle Branding
        </h1>
        <div className=" grid grid-cols-2 items-center justify-center p-5">
          <div className={styles.popup} >
            <div className={styles.form}>
              <div className={styles.note}>
                <label className={styles.title}> Sustainable Marketing</label>
                <span className={styles.subtitle}>
                  {`  Promote your brand while demonstrating environmental
                consciousness with reusable water bottles.`}
                </span>
              </div>
            </div>
          </div>
          <div className={styles.popup}>
            <div className={styles.form}>
              <div className={styles.note}>
                <label className={styles.title}> Brand Visibility</label>
                <span className={styles.subtitle}>
                  {`Showcase your logo and message on custom-branded water bottles,
                reaching a wide audience.`}
                </span>
              </div>
            </div>
          </div>
          <div className={styles.popup}>
            <div className={styles.form}>
              <div className={styles.note}>
                <label className={styles.title}> Targeted Distribution</label>
                <span className={styles.subtitle}>
                  {`We distribute branded bottles at events, conferences, or
                strategic locations to maximize exposure.`}
                </span>
              </div>
            </div>
          </div>
          <div className={styles.popup}>
            <div className={styles.form}>
              <div className={styles.note}>
                <label className={styles.title}> Positive Associations</label>
                <span className={styles.subtitle}>
                  {` Associate your brand with health, hydration, and a commitment to
                sustainability.`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
