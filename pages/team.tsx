import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Row} from "react-bootstrap";
import IndivTeamMemberCard from "../components/IndivTeamMemberCard";
import ContributorsRow from "../components/Contributors/ContributorsRow";
import AlumniCard from "../components/AlumniCard";

export default function Team() {
    return (
        <div className="container" >
            {/* <h1 className="team-heading">Meet the Spring 24 Eboard 🚀 </h1> */}
            <h2 className="team-heading">Leadership</h2>
                <Row>
                    <IndivTeamMemberCard imgSrc={"../assets/team-photos/JoshuaLe.png"} name={"Joshua Le"} role={"President"} linkedin={"https://www.linkedin.com/in/joshua-d-le/"} github="https://github.com/joshle298" website="https://www.joshuale.com/" instagram="https://www.instagram.com/josh__le/"/>
                    <IndivTeamMemberCard imgSrc={"../assets/team-photos/kelly.jpeg"} name={"Kelly Mao"} role={"Vice President"} linkedin={"https://www.linkedin.com"}  website={"https://kellycmao12.github.io/"} instagram={"http://instagram.com/kellycmao"}/>
                    <IndivTeamMemberCard imgSrc={"../assets/team-photos/tina.jpeg"} name={"Tina Ge"} role={"Senior Advisor"} linkedin={"https://www.linkedin.com/in/getina/"}/>
                </Row>
            <h2 className="team-heading">Events</h2>
                <Row>
                    <IndivTeamMemberCard imgSrc={"../assets/team-photos/katy.jpeg"} name={"Katy Lee"} role={"Events Lead"} linkedin={"https://www.linkedin.com/in/kathryn-anne-lee/"} website={"https://kathrynannelee.com/"} instagram={"https://www.instagram.com/kathrynannelee/"}/>
                    <IndivTeamMemberCard imgSrc={"../assets/team-photos/KaitlynZou.jpg"} name={"Kaitlyn Zou"} role={"Events Committee"} linkedin={"www.linkedin.com/in/zou-kaitlyn"} website={"https://zoukaitlyn.cargo.site/"} instagram={"https://www.instagram.com/kaitlynzou/"}/>
                    <IndivTeamMemberCard imgSrc={"../assets/team-photos/OwenZhang.jpg"} name={"Owen Zhang"} role={"Events Committee"} linkedin={"https://www.linkedin.com/in/owen-zhang-706578229/"} />
                </Row>
            <h2 className="team-heading">Marketing</h2>
                <Row>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/youli.png"} name={"Yulduz Furkhati"} role={"Social Media Lead"} linkedin={"www.linkedin.com/in/yulduz-furkhati"} instagram="https://www.instagram.com/yulduzfurkhatii/"/>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/delaney.png"} name={"Delaney Wong"} role={"Content/Graphic Designer"} linkedin={"https://www.linkedin.com/in/delaney-wong/"} website="https://delaneywong.com/" instagram="https://www.instagram.com/delaneywongg/"/>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/mega.jpg"} name={"Mega Olonbayar"} role={"Events Commmittee"} linkedin={"https://www.linkedin.com/in/myagmarsuren-olonbayar-08773a22a/"} website="https://myagmarsuren.com/"/>
                </Row>
            <h2 className="team-heading">Tech Treks</h2>
                <Row>
                    <IndivTeamMemberCard imgSrc={"../assets/team-photos/lena.jpeg"} name={"Lena Lin"} role={"Tech Treks Lead"} linkedin={"https://www.linkedin.com/in/linlena/"}/>
                    <IndivTeamMemberCard imgSrc={"../assets/team-photos/ChaseGillis.png"} name={"Chase Gillis"} role={"Project Coordinator"} linkedin={"https://www.linkedin.com/in/chasegillis/"} website="https://chasegillis.github.io/" github="https://github.com/ChaseGillis" instagram="https://www.instagram.com/chase.gillis/"/>
                    <IndivTeamMemberCard imgSrc={"../assets/team-photos/kyle.png"} name={"Kyle Park"} role={"Outreach"} linkedin={"https://www.linkedin.com/in/kylekangminpark/"} instagram="https://www.instagram.com/kpockyy/"/>
                </Row>
            <h2 className="team-heading">Startup Week</h2>
                <Row>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/tanuj.png"} name={"Tanuj Sistla"} role={"Startup Week Co-Lead"} linkedin={"https://www.linkedin.com/in/tanuj-sistla-0412a81b3/"} instagram="https://www.instagram.com/_tanujs/" github="https://github.com/tanuj123-cyber>"/>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/indeera.png"} name={"Indeera Saha"} role={"Startup Week Co-Lead"} linkedin={"https://www.linkedin.com/in/indeerasaha/"} instagram="https://www.instagram.com/indeerasahahaha/" github="https://github.com/indeerasaha>"/>
                </Row>
            <h2 className="team-heading">Dev Team</h2>
                <Row>
                    
                </Row>
            <h2 className="team-heading">Graduate</h2>
                <Row>
                    <IndivTeamMemberCard imgSrc={"../assets/team-photos/SprihaJha.jpeg"} name={"Spriha Jha"} role={"Grad School Representative"} linkedin={"https://www.linkedin.com/in/sprihajha"} website={"https://sprihajha.com/"} instagram={"https://www.instagram.com/sprihajha/"}/> 
                </Row>
            <h2 className="team-heading">Mentorship</h2>
                <Row>

                </Row>
            <h2 className="team-heading">Eboard Alumni</h2>
                <Row>
                    <AlumniCard imgSrc={"../assets/team-photos/anthony.jpeg"} name={"Anthony Sukotjo"} role={"Class of 2023"} linkedin={"https://www.linkedin.com/in/anthonysukotjo/"}/>
                    <AlumniCard imgSrc={"../assets/team-photos/juliana.png"} name={"Juliana Regen"} role={"Class of 2023"} linkedin={"https://www.linkedin.com/in/juliana-regen-086b14187/"} instagram={"https://www.instagram.com/ju.regen/"} />
                    <AlumniCard imgSrc={"../assets/team-photos/ozioma.png"} name={"Ozioma Chukwukeme"} role={"Class of 2023"} linkedin={"https://www.linkedin.com/in/oziomarc/"}/>
                    <AlumniCard imgSrc={"../assets/team-photos/gaurav.png"} name={"Gaurav Kulkarni"} role={"Class of 2023"} linkedin={"https://www.linkedin.com/in/gaurav-kulkarni-678799192/"} instagram={"https://www.instagram.com/gaurav.kulk/"}/>
                    <AlumniCard imgSrc={"../assets/team-photos/karina.png"} name={"Karina Zhang"} role={"Class of 2023"} linkedin={"https://www.linkedin.com/in/karina-zhang"} website={"https://kzhang01.github.io/"} instagram={"https://www.instagram.com/kari_z01"}/>
                    <AlumniCard imgSrc={"../assets/team-photos/jacob.jpeg"} name={"Jacob Baum"} role={"Class of 2023"} linkedin={"https://www.linkedin.com/in/jacoblundinbaum/"} instagram={"https://www.instagram.com/jacoblbaum/"}/>
                    <AlumniCard imgSrc={"../assets/team-photos/jayli.jpeg"} name={"Jay Li Quek"} role={"Class of 2022"} linkedin={"https://www.linkedin.com/in/jayliquek/"}/>
                    <AlumniCard imgSrc={"../assets/team-photos/andrew.png"} name={"Andrew Huang"} role={"Class of 2022"} linkedin={"https://www.linkedin.com/in/ando-huang/"}/>
                </Row>
            <h2 className="team-heading">Contributors</h2>
                <ContributorsRow contributors={[
                    {name: "Sanjay Chunduru", url: "https://in.linkedin.com/in/sanjay-chunduru-71571a219"},
                    {name: "Sean Lai", url: "https://www.linkedin.com/in/sean-sh-lai/"},
                    {name: "Parul Veda", url: "https://linkedin.com/in/parul-veda/"},
                ]}/>
        </div>
    )
}
