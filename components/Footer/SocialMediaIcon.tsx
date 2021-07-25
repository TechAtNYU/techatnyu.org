import React, {FunctionComponent} from "react";

const style = {
    height:"24px",
    width:"24px"
}


const SocialMediaIcon: FunctionComponent<{
    altText: string,
    src: string,
    }> = props => {
    return (<div style={style}>
        <img src={props.src} alt = {props.altText}  height={24} width={24}/>
    </div>);
}

export default SocialMediaIcon;
