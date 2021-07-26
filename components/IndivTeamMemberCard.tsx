import React, {FunctionComponent} from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SocialMediaIcon from "./Footer/SocialMediaIcon";


const IndivTeamMemberCard: FunctionComponent<{
    imgSrc: string,
    name: string,
    role:string,
    linkedin: string,
    github: string,
    website: string,
    }>
    = props => {
    return(<Col>
        <img src={props.imgSrc} alt = {props.name + " Profile Picture"}
        width={354} height={354}
        />
        <h4 > {props.name}</h4>
        <h5 > {props.role}</h5>
        <Row>
            <a href={props.linkedin}>
                <SocialMediaIcon altText={props.name + " LinkedIn"} src={"../assets/Linkedin.svg"}/>
            </a>
            <a href={props.github}>
                <SocialMediaIcon altText={props.name + " Github"} src={"../assets/Github.svg"}/>
            </a>
            <a href={props.website}>
                <SocialMediaIcon altText={props.name + " Personal Site"} src={"../assets/Globe.svg"}/>
            </a>
        </Row>
    </Col>)
}

export default IndivTeamMemberCard;