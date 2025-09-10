'use client';
import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from "react-bootstrap";
import EventsCarousel from "../components/EventsCarousel/EventsCarousel";
import SWCarousel from "../components/SWCarousel/SWCarousel";


export default function startupWeek() {
    return (
        <div className="program">
            <div className="container program__header">
                <img src = "../assets/headings/SW24Logo.png" style={{
                    paddingTop: "10%", 
                    paddingBottom: "5%", 
                    filter: "invert(100%) brightness(2)"
                }} />
                <p>
                Are you interested in startups? Do you want to learn more about them and meet startup founders? Join the Tech@NYU Startup Week Committee! Help us plan, organize, and run a week of startup events for fellow students, sharing your love of startups with the wider NYU community. <a href="https://nyustartupweek.org">Look at our past events!</a>
                </p>
                <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSeqMidTNrQGRCjkZCvKaK8z90sQJoRKG8a2PGSPvWKTPwkeAw/viewform">Apply to the committee</a> with priority consideration by <b> by 11:59PM September 17th, 2025!</b></p>
                <h3>Apps are rolling so get them in fast!</h3>

            </div>
            <div className="container program__info">
                <Row>
                    <Col>
                        <h2><b>Open Roles!</b></h2>
                        <ul>
                            <li><b>Treasurer:</b> Manage event budgeting and expenses, oversee sponsorships, and handle financial data.</li>
                            <li><b>Design & Marketing:</b> Create promotional materials, manage social media, and execute marketing strategies.</li>
                            <li><b>Outreach & Events:</b> Secure event sponsors, partners, and speakers. Plan event logistics to create an unforgettable experience for students and industry guests!</li>
                            <li><b>Web Dev: </b> Design a promotional website with a React-based framework, learn industry-relevant tools, and experience the software development lifecycle.</li>
                        </ul>
                    </Col>
                    <Col>
                        <h2>What you’ll get out of Startup Week</h2>
                        <ul>
                            <li>Exclusive access and networking opportunities with startup founders</li>
                            <li>Real-world, impactful experiences putting on events for hundreds of NYU students</li>
                            <li>Explore & learn more about resources available at NYU and in the NYC startup ecosystem</li>
                            <li>Form close bonds with fellow committee members and Tech@nyu eboard members</li>
                        </ul>
                    </Col>
                </Row>
            </div>
            <div className="container techtreks__carousel">
                <SWCarousel/>
            </div>
            <div className="startupweek__companies">
                <div className="container">
                    <div className="header_t">
                    <h2>Some of our previous sponsors and representatives</h2>
                    </div>
                    <div className="comp-imgs">
                        <Row>
                            <Col>
                            <img className="md-img" src="../assets/companies/YC.png"/>
                            </Col>
                            <Col>
                            <img className="md-img" src="../assets/companies/ThirtyMad.png"/>
                            </Col>
                            <Col>
                            <img className="md-img" src="../assets/companies/Poppi.png"/>
                            </Col>
                            <Col>
                                <img className="md-img" src="../assets/companies/figma_logo.png"/>
                            </Col>
                            <Col>
                                <img className="md-img" src="../assets/companies/liquid_death.png"/>
                            </Col>
                            <Col>
                                <img className="md-img" src="../assets/companies/anthropic.png"/>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    )
}
