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
            paddingLeft: "30px",
            height: "700px"
        }}
    >

        <Col>
            <div style={{zIndex:3}}><RotatingEventCircle /></div>
            <div style={{marginTop:"-100px", marginBottom:"50px", zIndex:0}}
            ><ImageGallery /></div>
            <div style={{fontSize:"30px", marginBottom:"30px"}}>General Events bi-weekly!</div>
            <GeneralButton name={"Find an Event"}/>
        </Col>
    </Container>
}

export default EventsCarousel;