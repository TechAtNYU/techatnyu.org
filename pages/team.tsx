import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Row} from "react-bootstrap";
import IndivTeamMemberCard from "../components/IndivTeamMemberCard";

export default function Team() {
    return (
        <div className="container" >
            <h1 className="team-heading">Meet the Team</h1>
            <Row>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/jayli.jpeg"} name={"Jay Li Quek"} role={"President"} linkedin={"https://www.linkedin.com"} github={"https://www.github.com"} website={"https://www.google.com"}/>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/jayli.jpeg"} name={"Jay Li Quek"} role={"President"} linkedin={"https://www.linkedin.com"} github={"https://www.github.com"} website={"https://www.google.com"}/>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/jayli.jpeg"} name={"Jay Li Quek"} role={"President"} linkedin={"https://www.linkedin.com"} github={"https://www.github.com"} website={"https://www.google.com"}/>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/jayli.jpeg"} name={"Jay Li Quek"} role={"President"} linkedin={"https://www.linkedin.com"} github={"https://www.github.com"} website={"https://www.google.com"}/>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/jayli.jpeg"} name={"Jay Li Quek"} role={"President"} linkedin={"https://www.linkedin.com"} github={"https://www.github.com"} website={"https://www.google.com"}/>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/jayli.jpeg"} name={"Jay Li Quek"} role={"President"} linkedin={"https://www.linkedin.com"} github={"https://www.github.com"} website={"https://www.google.com"}/>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/jayli.jpeg"} name={"Jay Li Quek"} role={"President"} linkedin={"https://www.linkedin.com"} github={"https://www.github.com"} website={"https://www.google.com"}/>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/jayli.jpeg"} name={"Jay Li Quek"} role={"President"} linkedin={"https://www.linkedin.com"} github={"https://www.github.com"} website={"https://www.google.com"}/>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/jayli.jpeg"} name={"Jay Li Quek"} role={"President"} linkedin={"https://www.linkedin.com"} github={"https://www.github.com"} website={"https://www.google.com"}/>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/jayli.jpeg"} name={"Jay Li Quek"} role={"President"} linkedin={"https://www.linkedin.com"} github={"https://www.github.com"} website={"https://www.google.com"}/>
            </Row>

            <h1 className="team-heading">Notable Alumni</h1>
            <Row>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/jayli.jpeg"} name={"Jay Li Quek"} role={"President"} linkedin={"https://www.linkedin.com"} github={"https://www.github.com"} website={"https://www.google.com"}/>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/jayli.jpeg"} name={"Jay Li Quek"} role={"President"} linkedin={"https://www.linkedin.com"} github={"https://www.github.com"} website={"https://www.google.com"}/>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/jayli.jpeg"} name={"Jay Li Quek"} role={"President"} linkedin={"https://www.linkedin.com"} github={"https://www.github.com"} website={"https://www.google.com"}/>
            </Row>
        </div>
    )
}
