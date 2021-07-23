import React from "react";
import {Col, Container} from "react-bootstrap";
import GeneralButton from "../GeneralButton";
import RotatingEventCircle from "./EventCircle";

const EventsCarousel = () => {

    return <Container
        style = {{
            backgroundColor: "#111111",
            color:"white",
            height: "661px",
            display: "inline-block",
            width: "100%",
            textAlign: "center",
            justifyContent: "center",
            alignContent: "center",
            // paddingTop: "30px",
            // paddingBottom: "30px",
        }}
    >

        <Col>
            <RotatingEventCircle/>
            <div>General Events bi-weekly!</div>
            <GeneralButton name={"Find an Event"}/>
        </Col>
    </Container>
}

export default EventsCarousel;