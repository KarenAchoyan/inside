import React from 'react';
import styles from "../../../styles/blog.module.css"
import {ArrowRightOutlined, CalendarOutlined} from "@ant-design/icons";
const Blog = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h1>Latest posts & articles</h1>
                <div className={styles.seeButton}>
                    <div className={styles.button}>
                        <span>
                            See All Blogs
                        </span>
                    </div>
                    <div className={styles.arrow}>
                        <ArrowRightOutlined />
                    </div>
                </div>
            </div>


            <div className={styles.contentBlog}>
                <div className={styles.leftContent}>
                    <div className={styles.itemBlog}>
                        <div className={styles.itemAvatar}>
                            <img src="about1.png" alt=""/>
                        </div>
                        <div className={styles.itemContent}>
                            <div className={styles.itemHeading}>
                                <span>
                                    <CalendarOutlined />
                                    <span>
                                        May 09. 2024
                                    </span>
                                </span>
                            </div>
                            <div className={styles.itemTitle}>
                                <h1>Frequently Utilized Metal Welding System</h1>
                            </div>
                        </div>
                    </div>
                    <div className={styles.itemBlog}>
                        <div className={styles.itemAvatar}>
                            <img src="about1.png" alt=""/>
                        </div>
                        <div className={styles.itemContent}>
                            <div className={styles.itemHeading}>
                                <span>
                                    <CalendarOutlined />
                                    <span>
                                        May 09. 2024
                                    </span>
                                </span>
                            </div>
                            <div className={styles.itemTitle}>
                                <h1>Frequently Utilized Metal Welding System</h1>
                            </div>
                        </div>
                    </div>
                    <div className={styles.itemBlog}>
                        <div className={styles.itemAvatar}>
                            <img src="about1.png" alt=""/>
                        </div>
                        <div className={styles.itemContent}>
                            <div className={styles.itemHeading}>
                                <span>
                                    <CalendarOutlined />
                                    <span>
                                        May 09. 2024
                                    </span>
                                </span>
                            </div>
                            <div className={styles.itemTitle}>
                                <h1>Frequently Utilized Metal Welding System</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.rightContent}>
                    <div className={styles.post}>
                        <div className={styles.postAvatar}>
                            <img src="/post1.jpg" alt=""/>
                        </div>
                        <div className={styles.postContent}>
                            <h1> How To Choose The Right Furniture Of Your Home</h1>
                            <p>Modest, recently established interior design company that seeks to address a variety of topics, including…</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;