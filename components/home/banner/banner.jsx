import React from 'react';
import styles from "@/styles/banner.module.css";
import About from "@/components/home/about/about";

const Banner = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.content}>
          <img src="main.png" alt=""/>
          <div className={styles.overline}>
            <div>
              <div className={styles.contentText}>
                <h1>Create your design Create your comfort</h1>
                <p>Explore different categories. Find the best deals. Create your convenience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;