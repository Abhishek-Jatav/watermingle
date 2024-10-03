import React from 'react'
import styles from "../styles/FreeItem.module.css"

export default function FreeItem() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col justify-center items-center">
        <div className="flex flex-col text-center w-fit  bg-customDark p-3  mb-20 rounded-md">
          <h1 className="sm:text-3xl text-2xl mr-10 ml-10 font-medium title-font text-white">
            Free Meal and Item Distributions
          </h1>
        </div>
        <div className='grid grid-cols-3  w-100 h-screen p-5 pl-18 justify-center items-center '> 
          <div className={styles.card}>
            <div className={styles.cardImage}></div>
            <div className={styles.category}> Event Promotion</div>
            <div className={styles.heading}>
              Distribute free meals or items at community events, conferences,
              or festivals, increasing brand awareness.
              <div className={styles.author}>
                By <span className={styles.name}>Abhi</span> 4 days ago
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImage}></div>
            <div className={styles.category}> Customer Engagement</div>
            <div className={styles.heading}>
              Provide value to potential customers, creating positive
              interactions and building brand loyalty.
              <div className={styles.author}>
                By <span className={styles.name}>Abhi</span> 4 days ago
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImage}></div>
            <div className={styles.category}> Social Media Buzz</div>
            <div className={styles.heading}>
              Encourage sharing on social media platforms, generating online
              buzz and expanding reach.
              <div className={styles.author}>
                By <span className={styles.name}>Abhi</span> 4 days ago
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImage}></div>
            <div className={styles.category}> Community Involvement</div>
            <div className={styles.heading}>
              Support local causes and build goodwill within the community,
              enhancing brand image.
              <div className={styles.author}>
                By <span className={styles.name}>Abhi</span> 4 days ago
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImage}></div>
            <div className={styles.category}> Community Involvement</div>
            <div className={styles.heading}>
              Support local causes and build goodwill within the community,
              enhancing brand image.
              <div className={styles.author}>
                By <span className={styles.name}>Abhi</span> 4 days ago
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImage}></div>
            <div className={styles.category}> Community Involvement</div>
            <div className={styles.heading}>
              Support local causes and build goodwill within the community,
              enhancing brand image.
              <div className={styles.author}>
                By <span className={styles.name}>Abhi</span> 4 days ago
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
