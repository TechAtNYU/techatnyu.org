import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Col, Row} from "react-bootstrap";
import GeneralButton from "../components/GeneralButton";

export default function Mentorship() {
    return (
        <div className="program">
            <div className="container program__header">
                <h1 className="heading">Dev Team</h1>
                <p style={{marginBottom:"30px"}}>
                 Join a chance to create and collaborate on production-ready software
                  in a multi-team format similar to industry working with other experienced students over the course of a semester.
                  <br />
                  <a href="https://forms.gle/VMnDoeWfXPRQzmFb6">Apply to be a member</a> by 11:59 @ Feb 10th, 2025!
                </p>
                {/* <GeneralButton name={"More details coming soon"}/> */}
            </div>
            <div className="container program__info" style={{paddingBottom:"10%"}}>
                <Row>
                    <Col className="devteam">
                        <h2>Are you a student...</h2>
                        <div>
                            <ul>
                                <li>with dev or UI/UX chops (this program is more geared towards intermediate/advanced students)?</li>
                                <li>who enjoys work closely and collaborate well with others?</li>
                                <li>who loves solving problems, building cool stuff, and making an impact?</li>
                            </ul>
                        </div>
                    </Col>
                    <Col className="devteam">
                        <h2>What you'll get out of Dev Team</h2>
                        <div>
                            <ul>
                                <li>Hands-on experience with the latest tech, industry tools, with working in larger teams similar to industry</li>
                                <li>A really interesting project to present to others and to put on your resume.
                                     If someone asks you questions about these technologies or concepts, 
                                     you won't just have an answer, you'll have a story.</li>
                                <li>Build connections with fellow tech enthusiasts and potential industry mentors.</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
