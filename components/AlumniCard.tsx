import React, {FunctionComponent} from "react";
import {Col, Row} from "react-bootstrap";
import SocialMediaIcon from "./Footer/SocialMediaIcon";

const AlumniCard: FunctionComponent<{
    imgSrc: string,
    name: string,
    role:string,
    linkedin?: string,
    github?: string,
    website?: string,
    instagram?: string,
    }>
    = props => {
        return(<Col className="alumni__card">
            <img src={props.imgSrc} alt = {props.name + " Profile Picture"} className="alumni__profile"/>
            <h4 className = "alumni__name"> {props.name}</h4>
            <h5 className = "alumni__title"> {props.role}</h5>
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

                {(() => {
                    if (props.instagram) {
                        return (
                            <SocialMediaIcon altText={props.name + " Instagram"} src={"../assets/socials/instagram-white.svg"} link={props.instagram}/>
                        )
                    }
                })()}
            </div>
        </Col>)
}

export default AlumniCard;