import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from "react-bootstrap";
import EventsCarousel from "../components/EventsCarousel/EventsCarousel";


export default function techtreks() {
    return (
        <div className="techtreks">
            <div className="container techtreks__header">
                <img src = "../assets/tech-treks.png"/>
                <p>
                    Initially created to expose freshmen to the Tech industry, we realized there were Sophmores and Juniors just as new to the industry. 
                    We have recently opened up Tech Treks to anyone who is a beginner to code or curious about the tech industry, but not necessarily a STEM major.
                </p>
                <p>Check our social media pages when Tech Treks applications open! </p>
            </div>
            <div className="container techtreks__info">
                <Row>
                    <Col>
                        <h2>Are you...</h2>
                        <ul>
                            <li>a freshman, sophmore, junior curious about the tech industry?</li>
                            <li>a person that has dabbled with code but not sure where to start?</li>
                            <li>trying to figure out what career paths there are in tech?</li>
                        </ul>
                    </Col>
                    <Col>
                        <h2>What you'll get out of Tech Treks</h2>
                        <ul>
                            <li>new friends!</li>
                            <li>an intro to design + code!</li>
                            <li>a peep of tech culture!</li>
                            <li>visit offices in New York</li>
                            <li>snacks on snacks</li>
                        </ul>
                    </Col>
                </Row>
            </div>
            <div className="container techtreks__carousel">
                <EventsCarousel/>
            </div>
            <div className="container techtreks__companies">
                
            </div>
        </div>
    )
}