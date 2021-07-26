import React, {FunctionComponent} from "react";

const style = {
    height:"24px",
    width:"24px",
    margin:"0px",
    padding:"0px"

}


const SocialMediaIcon: FunctionComponent<{
    altText: string,
    src: string,
    link: string
    }> = props => {
    return (
        <a href={props.link} style={style}>
            <img src={props.src} alt = {props.altText}  height={24} width={24}/>
        </a>
   );
}

export default SocialMediaIcon;
