import React from 'react';
import styles from '@/styles/portfolio.module.css'
import Portfolio from "@/components/portfolio/portfolios/portfolio";

const Banner = () => {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.textContent}>
          <img src="/portfolio.png" alt=""/>
        </div>
      </div>
    </>
  );
};

export default Banner;