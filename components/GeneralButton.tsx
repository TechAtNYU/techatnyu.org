import React, {FunctionComponent} from "react";
import {Button} from 'react-bootstrap';
const style = {
    border: "1px solid #C9D1DE",
    boxSizing: "border-box",
    borderRadius: "80px",
    padding: "10px 30px 10px 30px",
    backgroundColor: "transparent",
    fontFamily: "DM Sans",
    color:"#C9D1DE"

} as React.CSSProperties;

const GeneralButton: FunctionComponent<{name: string, href?: string}> = props  => {
    return <Button
            style={style}
            href ={props.href}
            >{props.name}
    </Button>
}

export default GeneralButton;