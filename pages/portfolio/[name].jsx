import React from 'react';
import App from "../../components/layout/app";
import styles from "../../styles/details.module.css"
import Banner from "../../components/portfolio/banner/banner";
import Portfolios from "../../components/home/portfolio/portfolios";
import Image from "next/image";
const Index = () => {
    return (
        <>
            <App>
                <Banner/>
               <div className={styles.container}>
                   <div className={styles.heading}>
                       <div className={styles.avatar}>
                           <Image width={1000} height={1000} src="/details1.jpg" alt=""/>
                       </div>
                       <div className={styles.title}>
                           <h1>Creating authentic and character for most luxury residential project</h1>
                       </div>
                   </div>
                   <div className={styles.info}>
                       <div className={styles.infoParagraph}>
                           <p>Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Drinking vinegar jean vinegar stumptown yr pop-up artisan.</p>
                       </div>
                       <div className={styles.details}>
                           <div className={styles.item}>
                               <p>Client</p>
                               <p>Martin Steward</p>
                           </div>
                           <div className={styles.item}>
                               <p>Year</p>
                               <p>2018</p>
                           </div>
                           <div className={styles.item}>
                               <p>Location</p>
                               <p>Yerevan</p>
                           </div>
                           <div className={styles.item}>
                               <p>Size</p>
                               <p>1200</p>
                           </div>
                           <div className={styles.item}>
                               <p>Client</p>
                               <p>Martin Steward</p>
                           </div>
                           <div className={styles.item}>
                               <p>Client</p>
                               <p>Martin Steward</p>
                           </div>
                       </div>
                   </div>
                   <div className={styles.itemPortfolio}>
                       <Image width={1500} height={3000} src="/details2.jpg" alt=""/>
                   </div>
                   <div className={styles.itemPortfolio}>
                       <Image width={1500} height={3000} src="/details3.jpg" alt=""/>
                   </div>
                   <div className={styles.itemPortfolio}>
                       <Image width={1500} height={3000} src="/details4.jpg" alt=""/>
                   </div>
                   <div className={styles.portfolios}>
                       <h1>Portfolios</h1>
                       <Portfolios/>
                   </div>
               </div>

            </App>
        </>
    );
};

export default Index;