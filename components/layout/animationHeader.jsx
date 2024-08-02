import React from 'react';
import Header from "./header";
import styles from "../../styles/app.module.css"
const AnimationHeader = ({show}) => {
    return (
        <div className={`${show ? styles.show :null} ${styles.animation}`}>
            <Header/>
        </div>
    );
};

export default AnimationHeader;