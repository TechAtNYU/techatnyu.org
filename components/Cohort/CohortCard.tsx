import React from "react";
import {Col,Row} from "react-bootstrap";
import CohortIndivBox from "./CohortIndivBox";

const style  = {
    width:"100%",
    backgroundColor: "#111111",
    color:"#C9D1DE",
    padding: "25px 50px 20px 50px",
}

const CohortCard = () =>{
    return ( <Col style ={style}>
            <div>
                Join a Cohort
            </div>
            <div>
                {"Make new friends in a small group setting\n and meet professionals in the industry."}
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
        </Col>




    );
}

export default CohortCard;