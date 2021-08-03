import React from "react";
import {Col, Container} from "react-bootstrap";
import GeneralButton from "../GeneralButton";
import RotatingEventCircle from "./EventCircle";
import ImageGallery from "./ImageGallery";

const EventsCarousel = () => {

    return <Container
        style = {{
            backgroundColor: "transparent",
            color:"white",
            display: "inline-block",
            width: "100%",
            textAlign: "center",
            justifyContent: "center",
            alignContent: "center",
            paddingTop: "25px",
            paddingBottom: "30px",
            // paddingLeft: "30px",
            // paddingRight: "30px",
            height: "700px"
        }}
    >

        <Col>
            <Container style={{zIndex:2, position: "relative"}}>
                <RotatingEventCircle />
            </Container>
            <Container style={{marginTop:"-100px", marginBottom:"50px", zIndex:1}}>
                <ImageGallery />
            </Container>
            <div style={{fontSize:"30px", marginBottom:"30px"}}>
                General Events bi-weekly!
            </div>
            <GeneralButton name={"Find an Event"} href={"https://www.facebook.com/TechatNYU/events/"}/>
        </Col>
    </Container>
}

export default EventsCarousel;