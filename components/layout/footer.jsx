import React from 'react';
import {ArrowUpOutlined, FacebookOutlined, InstagramOutlined, TwitterOutlined} from "@ant-design/icons";
import styles from '../../styles/app.module.css'

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerleft}>
            <div className={styles.footerAbout}>
              <span>Explore different categories. Find the best deals.Create your convenience</span>
            </div>
            <div className={styles.social}>
              <ul>
                <li><InstagramOutlined/></li>
                <li><FacebookOutlined/></li>
                <li><TwitterOutlined/></li>
              </ul>
            </div>
          </div>
          <div className={styles.footerright}>
            <div className={styles.sectionPages}>
              <ul className={styles.section}>
                <li>Home</li>
                <li>About Us</li>
                <li>Portfolio</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className={styles.sectionPages}>
              <ul >
                <li>FAQ's</li>
                <li>News & Blog</li>
                <li>Opinions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.designer}>
        <div>
          <p>©2024 By Any Achoyan</p>
          <p>Back to <ArrowUpOutlined/></p>
        </div>
      </div>
    </>
  );
};

export default Footer;