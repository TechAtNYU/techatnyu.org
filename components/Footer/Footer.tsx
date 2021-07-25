import React from 'react';
import {Col, Row} from "react-bootstrap";
import styles from "./Footer.module.scss";

const Footer = () =>{
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerContact}>
                <div className ={styles.footerContactContent}>
                    <Col >
                           <div> Contact Us</div>
                        <a href="mailto:hello@techatnyu.org">hello@techatnyu.org</a>
                    </Col>
                </div>
            </div>
            <div className={styles.footerFollow}>
                <div className={styles.footerSocialContent}>
                   <div>Follow Us</div>
                    <Row>
                        <img src="../assets/instagram.svg" alt="instagram logo"/>
                        <img src="../assets/facebook.svg"alt="facebook logo"  />
                        <img src="../assets/twitter.svg" alt="twitter logo" />
                        <img src="../assets/youtube.svg" alt="youtube logo" />
                    </Row>
                </div>
            </div>
            <div className={styles.footerJoin}>
                <div className={styles.footerJoinContent}>
                    <Col >
                        <div>Join The Community</div>
                        <a href="/">Sign Up</a>
                    </Col>
                </div>
            </div>
        </div>
    );
}

export default Footer;