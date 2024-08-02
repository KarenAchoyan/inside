import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "@/styles/portfolio.module.css"
import Item from "../../portfolio/portfolios/item";

const Portfolios = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0",
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "0",
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "0",
                },
            },
        ],
    };
    return (
        <div className={styles.slickContainer}>
            <Slider {...settings}>
                <div>
                    <Item/>
                </div>
                <div>
                    <Item/>
                </div>
                <div>
                    <Item/>
                </div>
                <div>
                    <Item/>
                </div>
            </Slider>
        </div>
    );
};

export default Portfolios;