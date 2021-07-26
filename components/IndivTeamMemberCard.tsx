import React, {FunctionComponent} from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SocialMediaIcon from "./Footer/SocialMediaIcon";

const imageStyle = {
    borderRadius: "17.65px",
    border: "5px solid #F5C7A3",
    width: "354px",
    height: "354px",
    boxSizing: "border-box",
} as React.CSSProperties;

const linkStyle = {
        width: "24px",
        height: "24px",
        margin: "0px",
        padding: "0px"
}

const IndivTeamMemberCard: FunctionComponent<{
    imgSrc: string,
    name: string,
    role:string,
    linkedin: string,
    github: string,
    website: string,
    }>
    = props => {
    return(<Col sm>
        <img
            src={props.imgSrc}
            alt = {props.name + " Profile Picture"}
            style={imageStyle}
        />
        <h4
            style ={{
                fontWeight: 500,
                fontSize: "30px",
                marginTop: "34px",
                marginBottom:"8px"
            }}

        > {props.name}</h4>
        <h5
            style ={{
                fontWeight: 500,
                fontSize: "18px",
                marginBottom:"24px"
        }}

        > {props.role}</h5>
        <Row  style={{
            justifyContent : "space-evenly",
            width: "230px",
            marginLeft: "auto",
            marginRight:"auto",
            marginBottom: "72px",
        }}>
            <SocialMediaIcon altText={props.name + " LinkedIn"} src={"../assets/Linkedin.svg"} link={props.linkedin}/>
            <SocialMediaIcon altText={props.name + " Github"} src={"../assets/Github.svg"} link={props.github}/>
            <SocialMediaIcon altText={props.name + " Personal Site"} src={"../assets/Globe.svg"} link={props.website}/>
        </Row>
    </Col>)
}

export default IndivTeamMemberCard;