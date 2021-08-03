import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import CohortIndivBox from "./CohortIndivBox";


const style  = {
    width:"100%",
    backgroundColor: "#111111",
    color:"#C9D1DE",
    padding: "25px 50px 20px 50px",
    fontSize: "25px",
    paddingTop: "50px",
    paddingBottom: "50px",
    paddingLeft: "60.5px",
    paddingRight: "60.5px",
    justifyContent: "center",
    position: "relative",
    textAlign:"center",
    display: "block"


} as React.CSSProperties;

const CohortCard = () =>{
    return ( <Col style ={style}>

            <Container style={{textAlign:"start", width:"2000px"}}>

                <div >
                    Join a Cohort
                </div>
                <div style ={{fontSize:"1rem", marginTop:"25px"}}>
                    <div>
                        Make new friends in a small group setting
                    </div>
                    <div>
                        and meet professionals in the industry.
                    </div>
                </div>

                <Row >
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
                        btnHref={"/mentorship"}
                    />
                </Row>
            </Container>
        </Col>




    );
}

export default CohortCard;