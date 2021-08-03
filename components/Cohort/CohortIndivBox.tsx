import React, {FunctionComponent} from "react";
import {Container, Col} from "react-bootstrap";
import GeneralButton from "../GeneralButton";
import {Property} from "csstype";
type FontWeight = Property.FontWeight;

const style = {

    backgroundColor:" #17161C",
    boxShadow: "7px 4px 20px #C9D1DE",
    borderRadius: "8px",
    color:"#C9D1DE",
    width: "45%",
    height: "394px",
    padding: "25px",
    marginTop: "30px",
    textAlign:"start",
    marginLeft: "auto",
    marginRight:"auto",

} as React.CSSProperties

const CohortIndivBox: FunctionComponent<{
    title: string,
    description: string,
    iconSrc: string,
    iconAlt: string
}> = props =>{
    return(<div style = {style} >
        <Col sm>
            <img src={props.iconSrc} alt={props.iconAlt} height={25}/>
            <div style={{fontSize:"18px", fontWeight:"500" as FontWeight, marginTop :"15px"}}>{props.title}</div>
            <div style={{fontSize:"18px", marginTop :"25px", marginBottom:"25px", height: "100px"}}>{props.description}</div>
            <GeneralButton name={"Read more"} />
        </Col>
    </div>);
}

export default CohortIndivBox;