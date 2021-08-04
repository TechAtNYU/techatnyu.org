import React from 'react';
import {Col, Row} from "react-bootstrap";
import SocialMediaIcon from "./SocialMediaIcon";

const style ={
    backgroundColor : "#F9F9F7",
    color : "black",
    textAlign: "center",
    paddingTop: "50px",
    paddingBottom: "50px",
    fontSize: "18px"

} as React.CSSProperties;

const Footer = () =>{
    return (
        <Row style={style}>
            <Col sm>
                   <div> Contact Us</div>
                <a href="mailto:hello@techatnyu.org">hello@techatnyu.org</a>
            </Col>
            <Col sm>
               <div>Follow Us</div>
                <Row style={{
                    justifyContent : "space-evenly",
                    width: "230px",
                    marginLeft: "auto",
                    marginRight:"auto",
                }}>
                    <SocialMediaIcon src={"../assets/socials/instagram.svg"} altText={"instagram logo"} link={"https://www.instagram.com/techatnyu/"}/>
                    <SocialMediaIcon src={"../assets/socials/facebook.svg"}  altText={"facebook logo"} link={"https://www.facebook.com/TechatNYU/"} />
                    <SocialMediaIcon src={"../assets/socials/twitter.svg"}   altText={"twitter logo"} link={"https://twitter.com/techatnyu?lang=en"}  />
                    <SocialMediaIcon src={"../assets/socials/youtube.svg"}   altText={"youtube logo"}  link={"https://www.youtube.com/channel/UCfnrLW1YMab6CDElGKw2aGQ"} />
                </Row>
            </Col>
            <Col sm>
                <div>Join The Community</div>
                <a href="/">Sign Up</a>
            </Col>
        </Row>
    );
}

export default Footer;