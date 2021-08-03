import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Col, Row} from "react-bootstrap";
import IndivTeamMemberCard from "../components/IndivTeamMemberCard";


const teamPageStyle = {
    padding: "0px 12px",
    textAlign: "center",
} as React.CSSProperties;

const headerStyle = {
    fontSize: "56px",
    fontWeight: 400,
    marginTop: "70px",
    marginBottom:"70px",
    marginLeft:"70px",
    textAlign: "start"
} as React.CSSProperties;

export default function Team() {
    return (
        <div style ={teamPageStyle} >
            <Col>
                <h1 className="heading" style={headerStyle}>Meet the Team</h1>
                <Row>
                    <IndivTeamMemberCard imgSrc={"../assets/team-photos/jayli.jpeg"} name={"Jay Li Quek"} role={"President"} linkedin={"https://www.linkedin.com"} github={"https://www.github.com"} website={"https://www.google.com"}/>
                    <IndivTeamMemberCard imgSrc={"../assets/team-photos/jayli.jpeg"} name={"Jay Li Quek"} role={"President"} linkedin={"https://www.linkedin.com"} github={"https://www.github.com"} website={"https://www.google.com"}/>
                    <IndivTeamMemberCard imgSrc={"../assets/team-photos/jayli.jpeg"} name={"Jay Li Quek"} role={"President"} linkedin={"https://www.linkedin.com"} github={"https://www.github.com"} website={"https://www.google.com"}/>
                </Row>
                <Row>
                    <IndivTeamMemberCard imgSrc={"../assets/team-photos/jayli.jpeg"} name={"Jay Li Quek"} role={"President"} linkedin={"https://www.linkedin.com"} github={"https://www.github.com"} website={"https://www.google.com"}/>
                    <IndivTeamMemberCard imgSrc={"../assets/team-photos/jayli.jpeg"} name={"Jay Li Quek"} role={"President"} linkedin={"https://www.linkedin.com"} github={"https://www.github.com"} website={"https://www.google.com"}/>
                    <IndivTeamMemberCard imgSrc={"../assets/team-photos/jayli.jpeg"} name={"Jay Li Quek"} role={"President"} linkedin={"https://www.linkedin.com"} github={"https://www.github.com"} website={"https://www.google.com"}/>
                </Row>
                <Row>
                    <IndivTeamMemberCard imgSrc={"../assets/team-photos/jayli.jpeg"} name={"Jay Li Quek"} role={"President"} linkedin={"https://www.linkedin.com"} github={"https://www.github.com"} website={"https://www.google.com"}/>
                    <IndivTeamMemberCard imgSrc={"../assets/team-photos/jayli.jpeg"} name={"Jay Li Quek"} role={"President"} linkedin={"https://www.linkedin.com"} github={"https://www.github.com"} website={"https://www.google.com"}/>
                    <IndivTeamMemberCard imgSrc={"../assets/team-photos/jayli.jpeg"} name={"Jay Li Quek"} role={"President"} linkedin={"https://www.linkedin.com"} github={"https://www.github.com"} website={"https://www.google.com"}/>
                </Row>
                <Row>
                    <IndivTeamMemberCard imgSrc={"../assets/team-photos/jayli.jpeg"} name={"Jay Li Quek"} role={"President"} linkedin={"https://www.linkedin.com"} github={"https://www.github.com"} website={"https://www.google.com"}/>
                    <IndivTeamMemberCard imgSrc={"../assets/team-photos/jayli.jpeg"} name={"Jay Li Quek"} role={"President"} linkedin={"https://www.linkedin.com"} github={"https://www.github.com"} website={"https://www.google.com"}/>
                    <IndivTeamMemberCard imgSrc={"../assets/team-photos/jayli.jpeg"} name={"Jay Li Quek"} role={"President"} linkedin={"https://www.linkedin.com"} github={"https://www.github.com"} website={"https://www.google.com"}/>
                </Row>
                <h1 className="heading" style={headerStyle}>Notable Alumni</h1>
                <Row>
                    <IndivTeamMemberCard imgSrc={"../assets/team-photos/jayli.jpeg"} name={"Jay Li Quek"} role={"President"} linkedin={"https://www.linkedin.com"} github={"https://www.github.com"} website={"https://www.google.com"}/>
                    <IndivTeamMemberCard imgSrc={"../assets/team-photos/jayli.jpeg"} name={"Jay Li Quek"} role={"President"} linkedin={"https://www.linkedin.com"} github={"https://www.github.com"} website={"https://www.google.com"}/>
                    <IndivTeamMemberCard imgSrc={"../assets/team-photos/jayli.jpeg"} name={"Jay Li Quek"} role={"President"} linkedin={"https://www.linkedin.com"} github={"https://www.github.com"} website={"https://www.google.com"}/>
                </Row>
            </Col>
        </div>
    )
}
