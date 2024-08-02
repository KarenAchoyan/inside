import React, {useState} from 'react';
import styles from "../../../styles/contact.module.css"
import {Form, Input, Button, Row, Col} from 'antd';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Contact = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
        alert()
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <div className={styles.content}>
                <div className={styles.row}>
                    <div className={styles.formContent}>
                        <div className={styles.heading}>
                            <h1>Contact Us</h1>
                            <p>Morbi tristique senectus et netus. Arcu odio ut sem nulla pharetra. Sapien eget mi proin
                                sed
                                libero enim sed faucibus turpis. Sit amet cursus sit amet.</p>
                        </div>
                        <div className={styles.form}>
                            <div className={styles.formContainer}>
                                <Form
                                    name="contactForm"
                                    layout="vertical"
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    className={styles.contactForm}
                                >
                                    <Row gutter={16}>
                                        <Col xs={24} md={12}>
                                            <Form.Item
                                                label="Name"
                                                name="name"
                                                rules={[{required: true, message: 'Please enter your name!'}]}
                                            >
                                                <Input className={styles.customInput}/>
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} md={12}>
                                            <Form.Item
                                                label="Email"
                                                name="email"
                                                rules={[
                                                    {required: true, message: 'Please enter your email!'},
                                                    {type: 'email', message: 'Please enter a valid email!'},
                                                ]}
                                            >
                                                <Input className={styles.customInput}/>
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Form.Item
                                        label="Message"
                                        name="message"
                                        rules={[{required: true, message: 'Please enter your message!'}]}
                                    >
                                        <Input.TextArea rows={6} className={styles.customTextArea}/>
                                    </Form.Item>

                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" className={styles.submitButton}>
                                            Send
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                    </div>
                    <div className={styles.contactInfo}>
                        <div className={styles.item}>
                            <p>Direct contact</p>
                            <div>
                                <p>123 Terra Street, Copenhagen</p>
                                <p>0381234567</p>
                                <p>hiroshiarchitects@example.com</p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <p>Direct contact</p>
                            <div>
                                <p>123 Terra Street, Copenhagen</p>
                                <p>0381234567</p>
                                <p>hiroshiarchitects@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
        ;
};

export default Contact;