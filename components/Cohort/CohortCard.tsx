import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import CohortIndivBox from "./CohortIndivBox";

const CohortCard = () =>{
    return ( 
        <Col>
            <Container>
                <h1 className="heading">Join a Cohort</h1>
                <div>
                    <span>Make new friends in a small group setting</span>
                    <span style={{display:"block"}}>and meet professionals in the industry.</span>
                </div>

                <Row>
                    <CohortIndivBox
                        title={"Mentorship"}
                        description={"a chance to work with tech@nyu\n alumni and receive guidance from\n industry professionals"}
                        iconSrc={"/assets/headings/Mentorship.svg"}
                        iconAlt={"mentorship icon"}
                        btnHref={"/mentorship"}
                    />
                    <CohortIndivBox
                        title={"Tech Treks"}
                        description={"a tight-knit cohort for students\n unfamiliar with the tech industry. "}
                        iconSrc={"/assets/index-icons/techtreks.svg"}
                        iconAlt={"Techtreks icon"}
                        btnHref={"/techtreks"}
                    />
                </Row>
            </Container>
        </Col>
    );
}

export default CohortCard;