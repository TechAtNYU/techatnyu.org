import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Row} from "react-bootstrap";
import IndivTeamMemberCard from "../components/IndivTeamMemberCard";

export default function Team() {
    return (
        <div className="container" >
            <h1 className="team-heading">Meet the Spring 23 Eboard 🚀 </h1>
            <Row>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/anthony.jpeg"} name={"Anthony Sukotjo"} role={"Co-President"} linkedin={"https://www.linkedin.com/in/anthonysukotjo/"}/>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/kelly.jpeg"} name={"Kelly Mao"} role={"Co-President"} linkedin={"https://www.linkedin.com"}  website={"https://kellycmao12.github.io/"} instagram={"http://instagram.com/kellycmao"}/>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/juliana.png"} name={"Juliana Regen"} role={"Marketing Lead"} linkedin={"https://www.linkedin.com/in/juliana-regen-086b14187/"} instagram={"https://www.instagram.com/ju.regen/"} />
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/ozioma.png"} name={"Ozioma Chukwukeme"} role={"Content Lead"} linkedin={"https://www.linkedin.com/in/oziomarc/"}/>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/mega.jpg"} name={"Mega Olonbayar"} role={"Marketing/Content Lead"} linkedin={"https://www.linkedin.com/in/myagmarsuren-olonbayar-08773a22a/"}/>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/JoshuaLe.jpg"} name={"Joshua Le"} role={"Mentorship Lead"} linkedin={"https://www.linkedin.com/in/joshua-d-le/"} instagram={"https://www.instagram.com/josh__le/"} website={"https://www.joshuale.com"}/>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/tina.jpeg"} name={"Tina Ge"} role={"Tech Treks Lead"} linkedin={"https://www.linkedin.com/in/getina/"}/>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/EmilyWang.jpg"} name={"Emily Wang"} role={"Tech Treks Lead"} linkedin={"https://www.linkedin.com/in/emily-wang-83478b21a"}/>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/lena.jpeg"} name={"Lena Lin"} role={"Tech Treks Lead"} linkedin={"https://www.linkedin.com/in/linlena/"}/>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/katy.jpeg"} name={"Katy Lee"} role={"Events Lead"} linkedin={"https://www.linkedin.com/in/kathryn-anne-lee/"} website={"https://kathrynannelee.com/"} instagram={"https://www.instagram.com/kathrynannelee/"}/>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/KaitlynZou.jpg"} name={"Kaitlyn Zou"} role={"Events Committee"} linkedin={"www.linkedin.com/in/zou-kaitlyn"} website={"https://zoukaitlyn.cargo.site/"} instagram={"https://www.instagram.com/kaitlynzou/"}/>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/OwenZhang.jpg"} name={"Owen Zhang"} role={"Events Committee"} linkedin={"https://www.linkedin.com/in/owen-zhang-706578229/"} />
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/SprihaJha.jpeg"} name={"Spriha Jha"} role={"Grad School Representative"} linkedin={"https://www.linkedin.com/in/sprihajha"} website={"https://sprihajha.com/"} instagram={"https://www.instagram.com/sprihajha/"}/>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/gaurav.png"} name={"Gaurav Kulkarni"} role={"Operations/Logistics Lead"} linkedin={"https://www.linkedin.com/in/gaurav-kulkarni-678799192/"} instagram={"https://www.instagram.com/gaurav.kulk/"}/>
            </Row>
            <h1 className="team-heading">Graduated Fall 22</h1>
            <Row>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/karina.png"} name={"Karina Zhang"} role={"Tech Treks Lead"} linkedin={"https://www.linkedin.com/in/karina-zhang"} website={"https://kzhang01.github.io/"} instagram={"https://www.instagram.com/kari_z01"}/>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/jacob.jpeg"} name={"Jacob Baum"} role={"Mentorship Lead"} linkedin={"https://www.linkedin.com/in/jacoblundinbaum/"} instagram={"https://www.instagram.com/jacoblbaum/"}/>
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
