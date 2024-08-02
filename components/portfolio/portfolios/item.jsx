import React from 'react';
import styles from "@/styles/portfolio.module.css";
import {FullscreenOutlined} from "@ant-design/icons";
import Link from "next/link";

const Item = () => {
  return (

    <div className={styles.item}>
      <div className={styles.avatar}>
        <img src="/portfolio_items.png" alt=""/>
      </div>
      <div className={styles.info}>
      <h2>House 9</h2>
        <p>About House 9 project, its beautiful project, its beautiful project</p>
      </div>
      <Link href="portfolio/1">
          <div className={styles.knowMore}>
              <FullscreenOutlined />
          </div>
      </Link>
    </div>
  );
};

export default Item;