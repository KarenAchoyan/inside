import React, {useState} from 'react';
import styles from "../../styles/app.module.css"
import {FacebookOutlined, InstagramOutlined, MenuOutlined, PhoneOutlined, TwitterOutlined} from "@ant-design/icons";
import {Drawer} from "antd";
import Link from "next/link";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('right');
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const onChange = (e) => {
        setPlacement(e.target.value);
    };
    return (
        <>
            <div className={styles.header}>
                <div className={styles.content}>
                    <div className={styles.leftSide}>
                        <Link href='/'>
                            <img src="/Logo.png" alt=""/>
                        </Link>
                    </div>
                    <div className={styles.middle}>
                        <ul>
                            <li><Link href='/'>Home</Link></li>
                            <li><Link href='/about'>About Us</Link></li>
                            <li><Link href='/portfolios'>Portfolio</Link></li>
                            <li><Link href='/contact'>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className={styles.rightSide}>
                        <div className={styles.inRight}></div>
                        <PhoneOutlined className={styles.phone}/>
                        <h4>+37406606060</h4>
                    </div>
                    <div className={styles.mobileMenu}>
                        <span onClick={showDrawer}><MenuOutlined/></span>
                        <Drawer
                            title="Menu"
                            placement={placement}
                            closable={false}
                            onClose={onClose}
                            open={open}
                            key={placement}
                        >

                            <div className={styles.mobileMenuSocial}>
                                <ul>
                                    <li><FacebookOutlined/></li>
                                    <li><InstagramOutlined/></li>
                                    <li><TwitterOutlined/></li>
                                </ul>

                            </div>
                            <div className={styles.mobileMenuContent}>
                                <ul>
                                    <li>Home</li>
                                    <li>About Us</li>
                                    <li>Portfolio</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </Drawer>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;