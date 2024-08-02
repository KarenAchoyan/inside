import React from 'react';
import styles from '@/styles/portfolio.module.css'
import Item from "@/components/portfolio/portfolios/item";

const Portfolio = () => {
  return (
    <>
      <div className={styles.portfolio}>
        <div className={styles.portfolioContent}>
          <div className={styles.content}>
            <h1>Portfolio</h1>
            <div className={styles.allItem}>
              <Item/>
              <Item/>
              <Item/>
              <Item/>
              <Item/>
              <Item/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;