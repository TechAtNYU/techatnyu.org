import React, {FunctionComponent} from "react";

const SocialMediaIcon: FunctionComponent<{
    altText: string,
    src: string,
    link: string
    }> = props => {
    return (
        <a href={props.link} className="social-icons">
            <img src={props.src} alt = {props.altText}/>
        </a>
   );
}

export default SocialMediaIcon;
