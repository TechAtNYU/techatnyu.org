import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Col, Row} from "react-bootstrap";
import GeneralButton from "../components/GeneralButton";

export default function Mentorship() {
    return (
        <div className="program">
            <div className="container program__header">
                <img src = "../assets/headings/mentorship.png"  style={{padding: "5% 5% 5% 0"}}/>
                <p style={{marginBottom:"30px"}}>
                    an informal chat with tech@nyu alumni and seniors at NYU to receive guidance about applying for a job, 
                    prepping for recruting, finding out what start up world is like and the more.
                </p>
                <GeneralButton name={"Access the database"}/>
            </div>
            <div className="container program__info" style={{paddingBottom:"10%"}}>
                <Row>
                    <Col className="mentorship">
                        <h2>Are you a...</h2>
                        <div>
                            <p className="mentorship__subheading">Student</p>
                            <ul>
                                <li>looking for more personalized career advice?</li>
                                <li>curious about entrepreneurship?</li>
                                <li>trying to figure out what career paths there are in tech?</li>
                            </ul>
                        </div>
                        <div>
                            <p className="mentorship__subheading">Tech@NYU Alumni / Junior / Senior</p>
                            <ul>
                                <li>willing to share about your experiences in Tech?</li>
                                <li>interested in chatting with curious students?</li>
                                <li>wanting to pass down your coding/design/product management skills?</li>
                            </ul>
                        </div>
                    </Col>
                    <Col className="mentorship">
                        <h2>What you'll get out of Mentorship</h2>
                        <div>
                            <p className="mentorship__subheading hide">Student</p>
                            <ul>
                                <li>learn some skills hosted by different mentors</li>
                                <li>potentially get to work on a project with your mentor</li>
                                <li>gain a better understanding of a desired/potential role in tech</li>
                            </ul>
                        </div>
                        <div>
                            <p className="mentorship__subheading hide">Tech@NYU Alumni / Junior / Senior</p>
                            <ul>
                                <li>meet other mentors &amp; catch up with Tech@NYU alumni</li>
                                <li>a peep of managing juniors</li>
                                <li>meet someone new!</li>
                                <li>play a part in cultivating budding talent in tech</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
