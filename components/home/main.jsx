import React from 'react';
import styles from '../../styles/Home.module.css'
import Banner from "@/components/home/banner/banner";
import About from "@/components/home/about/about";
import Portfolios from "@/components/home/portfolio/portfolios";
import Blog from "./blog/blog";

const Main = () => {
    return (
        <>
            <Banner/>
            <About/>
            <Portfolios/>
            <Blog/>
        </>
    );
};

export default Main;