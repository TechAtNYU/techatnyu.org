import React from "react";
import {Col,Row} from "react-bootstrap";
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
            <div style ={{ marginLeft: "0 auto", marginRight: "0 auto", textAlign:"start"}}>
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
                        iconSrc={"/Icon/Mentorship.svg"}
                        iconAlt={"mentorship icon"}/>
                    <CohortIndivBox
                        title={"Tech Treks"}
                        description={"a tight-knit cohort for students\n unfamiliar with the tech industry. "}
                        iconSrc={"/Icon/Techtreks.svg"}
                        iconAlt={"Techtreks icon"}/>
                    <CohortIndivBox
                        title={"Tech Undivided"}
                        description={"a space to empower minorities in\n tech and expose them to\n opportunities within the industry"}
                        iconSrc={"/Icon/TechUndivided.svg"}
                        iconAlt={"Tech Undivided icon"}/>
                </Row>
            </div>
        </Col>




    );
}

export default CohortCard;