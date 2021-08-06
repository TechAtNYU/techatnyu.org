import React, {FunctionComponent} from "react";
import {Container, Col} from "react-bootstrap";
import GeneralButton from "../GeneralButton";
import {Property} from "csstype";
import {parentPort} from "worker_threads";
type FontWeight = Property.FontWeight;

const CohortIndivBox: FunctionComponent<{
    title: string,
    description: string,
    iconSrc: string,
    iconAlt: string,
    btnHref: string,
}> = props =>{
    return(
    <div className="cohort-box">
        <Col sm>
            <img src={props.iconSrc} alt={props.iconAlt} height={25}/>
            <div style={{fontSize:"18px", fontWeight:"500" as FontWeight, marginTop :"15px"}}>{props.title}</div>
            <div style={{fontSize:"18px", marginTop :"25px", marginBottom:"25px", height: "100px"}}>{props.description}</div>
            <GeneralButton name={"Read more"} href={props.btnHref}/>
        </Col>
    </div>);
}

export default CohortIndivBox;