import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Row} from "react-bootstrap";
import IndivTeamMemberCard from "../components/IndivTeamMemberCard";
import ContributorsRow from "../components/Contributors/ContributorsRow";
import AlumniCard from "../components/AlumniCard";

export default function Team() {
    return (
        <div className="container" >
            <h1 className="team-heading">Meet the Fall 24 Eboard 🚀 </h1>
            <h2 className="team-heading">Leadership</h2>
                <Row>
                    <IndivTeamMemberCard imgSrc={"../assets/team-photos/indeera.png"} name={"Indeera Saha"} role={"Co President"} linkedin={"https://www.linkedin.com/in/indeerasaha/"} instagram="https://www.instagram.com/indeerasahahaha/" github="https://github.com/indeerasaha>"/>
                    <IndivTeamMemberCard imgSrc={"../assets/team-photos/lena.jpeg"} name={"Lena Lin"} role={"Co President"} linkedin={"https://www.linkedin.com/in/linlena/"}/>
                </Row>
            <h2 className="team-heading">Events</h2>
                <Row>
                    <IndivTeamMemberCard imgSrc={"../assets/team-photos/katy.jpeg"} name={"Katy Lee"} role={"Events Lead"} linkedin={"https://www.linkedin.com/in/kathryn-anne-lee/"} website={"https://kathrynannelee.com/"} instagram={"https://www.instagram.com/kathrynannelee/"}/>
                    <IndivTeamMemberCard imgSrc={"../assets/team-photos/KaitlynZou.jpg"} name={"Kaitlyn Zou"} role={"Events Coordinator"} linkedin={"www.linkedin.com/in/zou-kaitlyn"} website={"https://zoukaitlyn.cargo.site/"} instagram={"https://www.instagram.com/kaitlynzou/"}/>
                    <IndivTeamMemberCard imgSrc={"../assets/team-photos/Lucy_Hartigan.jpeg"} name={"Lucy Hartigan"} role={"Events Coordinator"} linkedin={"https://www.linkedin.com/in/lucy-hartigan-13327b219"}/>
                    <IndivTeamMemberCard imgSrc={"../assets/team-photos/Liz_kim.jpeg"} name={"Liz Kim"} role={"Events Coordinator"} linkedin={"https://www.linkedin.com/in/yeonjuk/"}/>
                </Row>
            <h2 className="team-heading">Marketing</h2>
                <Row>
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/youli.png"} name={"Yulduz Furkhati"} role={"Social Media Lead"} linkedin={"www.linkedin.com/in/yulduz-furkhati"} instagram="https://www.instagram.com/yulduzfurkhatii/"/>
                {/* Lauren Zhou TBA */}
                <IndivTeamMemberCard imgSrc={"../assets/team-photos/temp.jpg"} name={"Lauren Zhou"} role={"Content & Marketing Lead"} linkedin={"https://www.linkedin.com/in/lauren-ling-zhou/"} instagram="https://www.instagram.com/lauren.lz/"/>
                </Row>
            <h2 className="team-heading">Tech Treks</h2>
                <Row>
                    <IndivTeamMemberCard imgSrc={"../assets/team-photos/kyle.png"} name={"Kyle Park"} role={"Tech Treks Lead"} linkedin={"https://www.linkedin.com/in/kylekangminpark/"} instagram="https://www.instagram.com/kpockyy/"/>
                    <IndivTeamMemberCard imgSrc={"../assets/team-photos/Kevin_Dong.jpg"} name={"Kevin Dong"} role={"Tech Treks Co-Lead"} linkedin={"https://www.linkedin.com/in/kevinlindong/"}/>
                    <IndivTeamMemberCard imgSrc={"../assets/team-photos/bryanko.jpg"} name={"Bryan Ko"} role={"Tech Treks Co-Lead"} linkedin={"https://www.linkedin.com/in/bryan-ko7/"} website={"https://bryanko.carrd.co/"}/>
                </Row>
            <h2 className="team-heading">Startup Week</h2>
                <Row>
                    <IndivTeamMemberCard imgSrc={"../assets/team-photos/sean.jpg"} name={"Sean Lai"} role={"Startup Week Co-Lead"} linkedin={"https://www.linkedin.com/in/sean-sh-lai/"} github={"https://github.com/sean-lai-sh"} website={"https://seanlai1.com"}/>
                    <IndivTeamMemberCard imgSrc={"../assets/team-photos/michael_s.png"} name={"Michael Shen"} role={"Startup Week Co-Lead"} linkedin={"https://www.linkedin.com/in/michashen/"} github={"https://github.com/mshen766"}/>
                    <IndivTeamMemberCard imgSrc={"../assets/team-photos/peda.jpg"} name={"Parul Veda"} role={"Startup Week Co-Lead"} linkedin={"https://www.linkedin.com/in/parul-veda/"}/>
                </Row>
            {/* <h2 className="team-heading">Dev Team</h2>
                <Row>
                    
                </Row> */}
            <h2 className="team-heading">Graduate</h2>
                <Row>
                <p>stay tuned for the announcement...</p>
                </Row>
            <h2 className="team-heading">Mentorship</h2>
                <Row>
                    <IndivTeamMemberCard imgSrc={"../assets/team-photos/ali.jpg"} name={"Aileen Li"} role={"Mentorship Co-lead"} linkedin={"https://www.linkedin.com/in/aileenli1/"}/>
                </Row>
            <h2 className="team-heading">Eboard Alumni</h2>
                <Row>
                    <AlumniCard imgSrc={"../assets/team-photos/ChaseGillis.png"} name={"Chase Gillis"} role={"Class of 2024"} linkedin={"https://www.linkedin.com/in/chasegillis/"} website="https://chasegillis.github.io/" github="https://github.com/ChaseGillis" instagram="https://www.instagram.com/chase.gillis/"/>
                    <AlumniCard imgSrc="../assets/team-photos/delaney.png" name={"Delaney Wong"} role={"Class of 2024"}></AlumniCard>
                    <AlumniCard imgSrc={"../assets/team-photos/SprihaJha.jpeg"} name={"Spriha Jha"} role={"Class of 2024"} linkedin={"https://www.linkedin.com/in/sprihajha"} website={"https://sprihajha.com/"} instagram={"https://www.instagram.com/sprihajha/"}/> 
                    {/* <AlumniCard imgSrc={"../assets/team-photos/ChaseGillis.png"} name={"Chase Gillis"} role={"Project Coordinator"} linkedin={"https://www.linkedin.com/in/chasegillis/"} website="https://chasegillis.github.io/" github="https://github.com/ChaseGillis" instagram="https://www.instagram.com/chase.gillis/"/> */}
                    <AlumniCard imgSrc={"../assets/team-photos/JoshuaLe.png"} name={"Joshua Le"} role={"Class of 2024"} linkedin={"https://www.linkedin.com/in/joshua-d-le/"} github="https://github.com/joshle298" website="https://www.joshuale.com/" instagram="https://www.instagram.com/josh__le/"/>
                    <AlumniCard imgSrc={"../assets/team-photos/kelly.jpeg"} name={"Kelly Mao"} role={"Class of 2024"} linkedin={"https://www.linkedin.com"}  website={"https://kellycmao12.github.io/"} instagram={"http://instagram.com/kellycmao"}/>
                    <AlumniCard imgSrc={"../assets/team-photos/tina.jpeg"} name={"Tina Ge"} role={"Class of 2024"} linkedin={"https://www.linkedin.com/in/getina/"}/>
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
                    {name: "Parul Veda", url: "https://linkedin.com/in/parul-veda/"},
                ]}/>
        </div>
    )
}
