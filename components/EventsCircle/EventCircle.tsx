import React from "react";
import styles from "./EventCircle.module.scss";


const RotatingEventCircle = () =>{
    return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-100 -100 3000 600"  className={"svg-textPath"}>
            <defs>
                <path d="M50 250c0-110.5 89.5-200 200-200s200 89.5 200 200s-89.5 200-200 200S50 360.5 50 250" id="textcircle">
                    <animateTransform
                        attributeName="transform"
                        begin="0s"
                        dur="30s"
                        type="rotate"
                        from="0 250 250"
                        to="360 250 250"
                        repeatCount="indefinite"
                    />
                </path>
            </defs>
            <text dy="5" textLength="500">
                <textPath
                    xlinkHref="#textcircle"
                    className={styles.svgTextPath}
                >Events Events Events Events Events Events</textPath>
            </text>
        </svg>

}

export default RotatingEventCircle;