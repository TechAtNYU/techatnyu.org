import React, {FunctionComponent} from "react";
import {Col, Row} from "react-bootstrap";
import SocialMediaIcon from "./Footer/SocialMediaIcon";

const IndivTeamMemberCard: FunctionComponent<{
    imgSrc: string,
    name: string,
    role:string,
    linkedin?: string,
    github?: string,
    website?: string,
    }>
    = props => {
        return(<Col className="team__card">
            <img src={props.imgSrc} alt = {props.name + " Profile Picture"} className="team__profile"/>
            <h4 className = "team__name"> {props.name}</h4>
            <h5 className = "team__title"> {props.role}</h5>
            <div className="socials">
                {(() => {
                if (props.linkedin) {
                return (
                    <SocialMediaIcon altText={props.name + " LinkedIn"} src={"../assets/socials/Linkedin.svg"} link={props.linkedin}/>
                )
                }
                })()}

                {(() => {
                if (props.github) {
                return (
                    <SocialMediaIcon altText={props.name + " Github"} src={"../assets/socials/Github.svg"} link={props.github}/>
                    )
                }
                })()}

                {(() => {
                if (props.website) {
                return (
                    <SocialMediaIcon altText={props.name + " Personal Site"} src={"../assets/socials/Globe.svg"} link={props.website}/>
                    )
                }
                })()}
            </div>
        </Col>)
}

export default IndivTeamMemberCard;