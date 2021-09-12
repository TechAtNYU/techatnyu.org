import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Row} from "react-bootstrap";
import IndivTeamMemberCard from "../components/IndivTeamMemberCard";

export default function Team() {
    return (
        <div className="container" >
            <h1 className="team-heading">Meet the Team</h1>
            <Row>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/jayli.jpeg"} name={"Jay Li Quek"} role={"President"} linkedin={"https://www.linkedin.com/in/jayliquek"} website={"https://www.jayliquek.com/"}/>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/temp.jpg"} name={"Kelly Mao"} role={"TBA"} linkedin={"https://www.linkedin.com"} github={"https://www.github.com"} website={"https://www.google.com"}/>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/juliana.png"} name={"Juliana Regen"} role={"Marketing Lead"} website={"https://www.instagram.com/ju.regen/"}/>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/ozioma.png"} name={"Ozioma Chukwukeme"} role={"Content Lead"}/>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/andrew.png"} name={"Andrew Huang"} role={"Tech Treks Lead"} website={"https://www.instagram.com/andohuang/"}/>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/karina.png"} name={"Karina Zhang"} role={"Tech Treks Lead"} linkedin={"https://www.linkedin.com/in/karina-zhang"} website={"https://kzhang01.github.io/"}/>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/lucas.jpg"} name={"Lucas Ortiz"} role={"Operations Lead"} github={"https://github.com/lucasortizny"}/>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/gaurav.png"} name={"Gaurav Kulkarni"} role={"Operations Lead"} linkedin={"https://www.linkedin.com/in/gaurav-kulkarni-678799192/"} website={"https://www.instagram.com/gaurav.kulk/"}/>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/jen.png"} name={"Jennifer Lopez"} role={"Web Developer"} linkedin={"https://www.linkedin.com/in/jen-lopez"} github={"https://www.github.com/jen-lopez"} website={"https://www.jennlo.com"}/>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/anthony.jpeg"} name={"Anthony Sukotjo"} role={"Web Developer"} linkedin={"https://www.linkedin.com/in/anthonysukotjo/"}/>
            </Row>

            {/* <h1 className="team-heading">Notable Alumni</h1>
            <Row>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/temp.jpg"} name={"Alum"} role={"Role"} linkedin={"https://www.linkedin.com"} github={"https://www.github.com"} website={"https://www.google.com"}/>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/temp.jpg"} name={"Alum"} role={"Role"} linkedin={"https://www.linkedin.com"} github={"https://www.github.com"} website={"https://www.google.com"}/>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/temp.jpg"} name={"Alum"} role={"Role"} linkedin={"https://www.linkedin.com"} github={"https://www.github.com"} website={"https://www.google.com"}/>
            </Row> */}
        </div>
    )
}
