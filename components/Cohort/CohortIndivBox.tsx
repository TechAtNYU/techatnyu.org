import React, {FunctionComponent} from "react";
import {Container, Col} from "react-bootstrap";
import GeneralButton from "../GeneralButton";

const style = {

    backgroundColor:" #17161C",
    boxShadow: "7px 4px 20px #C9D1DE",
    borderRadius: "8px",
    color:"#C9D1DE",
    width: "30%",
    padding: "25px"

} as React.CSSProperties

const CohortIndivBox: FunctionComponent<{
    title: string,
    description: string,
    iconSrc: string,
    iconAlt: string
}> = props =>{
    return(<div style = {style} >
        <Col>
            <img src={props.iconSrc} alt={props.iconAlt}/>
            <div>{props.title}</div>
            <div>{props.description}</div>
            <GeneralButton name={"Read more"}/>
        </Col>
    </div>);
}

export default CohortIndivBox;