import React from 'react';
import styles from "@/styles/about.module.css"

const About = () => {
  return (
    <div className={styles.aboutSeciton}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.item}>
            <div className={styles.itemContent}>
              <h1>Who We Are</h1>
              <p>We set out to create environments that evoke emotion
                and till a purpose. We apply the power of design to
                deliver truly exceptional first impressions.</p>
            </div>
          </div>
          <div className={styles.item}>
            <img src="about1.png" alt=""/>
          </div>
          <div className={styles.item}>
            <img src="about2.png" alt=""/>
          </div>
          <div className={styles.item}>
            <div className={styles.itemContent}>
              <h1>Who We Are</h1>
              <p>We create designs in a collaborative environment enabling
                us to deliver the client's ultimate vision. Our designs are
                current, yet still possess a timeless style, generating broad
                market appeal. Our reputation for outstanding service and
                our innovative design style creates an extremely successful
                partnerships with our customers. .</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;