import React from "react";
import {Col, Container} from "react-bootstrap";
import ImageGallery from "./ImageGallery";

const EventsCarousel = () => {

    return <Container
        style = {{
            backgroundColor: "transparent",
            color:"white",
            display: "inline-block",
            width: "100%",
            justifyContent: "center",
            alignContent: "center",
            paddingTop: "25px",
            paddingBottom: "30px",
            paddingLeft: "30px",
        }}
    >

        <Col>
            <div style={{marginBottom:"50px", zIndex:0}}>
                <ImageGallery />
            </div>
        </Col>
    </Container>
}

export default EventsCarousel;