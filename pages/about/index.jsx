import React from 'react';
import styles from "../../styles/aboutPage.module.css"
import App from "../../components/layout/app";
import Banner from "../../components/home/banner/banner";
const Index = () => {
    return (
        <>
            <App>
                <Banner/>
                <div className={styles.container}>
                    <div className={styles.heading}>
                        <h1>LightHouse Architects tempus quam pellent esque nec. Curabitur gravida arcu ac tortor dignissim convallis. Phasellus vestibulum lorem sed risus ultricies tritique.</h1>

                    </div>
                    <div className={styles.row}>
                        <div className={styles.section}>
                            <h2>Materials</h2>
                            <p>Arcu risus quis varius quam quisque id diam vel. Aliquet lectus proin nibh nisl condi me ntum. Lorem sed risus ultricies tristique nulla aliquet enim tortor at. Nunc cong ue nisi vitae su scipit tellus mauris a diam maecenas. Pulvinar elmentum integer enim neque volutpat ac tincidunt vitae semper est ultricies integer nus.</p>
                        </div>
                        <div className={`${styles.section} ${styles.sectionImage}`}>
                            <img src="/about1Image.jpg" alt=""/>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.section}>
                            <img src="/about2Image.jpg" alt=""/>
                        </div>
                        <div className={styles.section}>
                            <h2>Practice</h2>
                            <p>Arcu risus quis varius quam quisque id diam vel. Aliquet lectus proin nibh nisl condi me ntum. Lorem sed risus ultricies tristique nulla aliquet enim tortor at. Nunc cong ue nisi vitae su scipit tellus mauris a diam maecenas. Pulvinar elmentum integer enim neque volutpat ac tincidunt vitae semper est ultricies integer nus.</p>
                        </div>
                    </div>
                </div>
            </App>
        </>
    );
};

export default Index;