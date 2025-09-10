import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from "react-bootstrap";
import EventsCarousel from "../components/EventsCarousel/EventsCarousel";


export default function techtreks() {
    return (
        <div className="program">
            <div className="container program__header">
                <img src = "../assets/headings/tech-treks.png" style={{paddingTop: "10%", paddingBottom:"5%"}}/>
                <p>
                Initially created to expose freshmen to the tech industry, we realized there were sophomores and juniors just as new to the industry. Tech Treks now has two participant types: members and tutors! 
                </p>
                <p><b>Members:</b> You will be a part of a 12-15 person semesterly cohort that meets every week on Tuesdays and Fridays. You will meet other students who are beginning their journeys in tech, connect with industry professionals, learn from workshops, and add fun software projects to your portfolio!</p>
                <p><b>Tutors:</b> You will aid the members in building their projects by offering your expertise on Tuesdays, with optional additional office hours. In return, you will get all the perks that regular members get! </p>
                {/* <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSePMGYdhL2Hg9U_N3pBPm212ogTS3J6zRLO4Kfo-z3ol5lx5Q/viewform?usp=sf_link">Apply for Tutor</a> by September 15th, 2023!</p> */}
                <p className="w-full"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfXmGeATLdVleyC4qUfbq8KgPVkSHvrzPku9VdqCe52JIDhIw/viewform">Apply to be a Member</a> by 11:59PM September 17th, 2025!</p>

            </div>
            <div className="container program__info">
                <Row>
                    <Col>
                        <h2>Are you...</h2>
                        <ul>
                            <li>a beginner to code—regardless of grade or major—curious about the tech industry?</li>
                            <li>a person that has dabbled with code or design but not sure where to start?</li>
                            <li>trying to figure out what career paths there are in tech?</li>
                        </ul>
                        <p><b>OR</b></p>
                        <ul>
                            <li>someone with experience in tech already and willing to guide others along in their journey?</li>
                        </ul>
                    </Col>
                    <Col>
                        <h2>What you'll get out of Tech Treks</h2>
                        <ul>
                            <li>new friends and networking experience!</li>
                            <li>an intro to design + code!</li>
                            <li>office tours and speaker panels!</li>
                            <li>resume/portfolio value!</li>
                            <li>free food!</li>
                        </ul>
                    </Col>
                </Row>
            </div>
            <div className="container techtreks__carousel">
                <EventsCarousel/>
            </div>
            <div className="techtreks__companies">
                <div className="container">
                    <h2>Places we've visited:</h2>
                    <div className="comp-imgs">
                        <Row>
                            <Col>
                            <img className="md-img" src="../assets/companies/stackoverflow.png"/>
                            </Col>
                            <Col>
                            <img className="md-img" src="../assets/companies/reddit.png"/>
                            </Col>
                            <Col>
                            <img className="sm-img" src="../assets/companies/facebook.png"/>
                            </Col>
                            <Col>
                                <img className="sm-img" src="../assets/companies/twitter.png"/>
                            </Col>
                            <Col>
                                <img className="md-img" src="../assets/companies/seatgeek.png"/>
                            </Col>
                            <Col>
                                <img className="sm-img" src="../assets/companies/boa.png"/>
                            </Col>
                        </Row>
                    </div>
                    <h2>    Past Collaborations:</h2>
                    <div className="comp-imgs">
                        <Row>
                            <Col>
                            <img className="md-img" src="../assets/companies/amazon.png"/>
                            </Col>
                            <Col>
                            <img className="md-img" src="../assets/companies/uber.png"/>
                            </Col>
                            <Col>
                            <img className="sm-img" src="../assets/companies/goldman sachs.png"/>
                            </Col>
                            <Col>
                                <img className="sm-img" src="../assets/companies/linkedin.png"/>
                            </Col>
                            <Col>
                                <img className="md-img" src="../assets/companies/riot games.png"/>
                            </Col>
                            <Col>
                                <img className="sm-img" src="../assets/companies/blizzard.png"/>
                            </Col>
                            <Col>
                                <img className="sm-img" src="../assets/companies/soft_services.png"/>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    )
}
