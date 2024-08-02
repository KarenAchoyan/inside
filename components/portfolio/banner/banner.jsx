import React from 'react';
import styles from '@/styles/portfolio.module.css'
import Portfolio from "@/components/portfolio/portfolios/portfolio";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.textContent}>
          <Image width={1500} height={1000} src="/portfolio.png" alt=""/>
        </div>
      </div>
    </>
  );
};

export default Banner;