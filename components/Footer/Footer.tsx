import React from 'react';
import {Col, Row} from "react-bootstrap";
import SocialMediaIcon from "./SocialMediaIcon";

const Footer = () =>{
    return (
        <Row id="contact" className="center">
            <Col sm className="footer-item">
                <div> Contact Us</div>
                <a href="mailto:hello@techatnyu.org">hello@techatnyu.org</a>
            </Col>

            <Col sm className="footer-item">
               <div>Follow Us</div>
                <div className="socials">
                    <SocialMediaIcon src={"../assets/socials/instagram.svg"} altText={"instagram logo"} link={"https://www.instagram.com/techatnyu/"}/>
                    <SocialMediaIcon src={"../assets/socials/Facebook.svg"}  altText={"facebook logo"} link={"https://www.facebook.com/TechatNYU/"} />
                    <SocialMediaIcon src={"../assets/socials/twitter.svg"}   altText={"twitter logo"} link={"https://twitter.com/techatnyu?lang=en"}  />
                    <SocialMediaIcon src={"../assets/socials/youtube.svg"}   altText={"youtube logo"}  link={"https://www.youtube.com/channel/UCfnrLW1YMab6CDElGKw2aGQ"} />
                </div>
            </Col>

            <Col sm className="footer-item">
                <div>Join The Community</div>
                <a href="https://stats.sender.net/forms/bD2Zye/view">Sign Up</a>
            </Col>
        </Row>
    );
}

export default Footer;
