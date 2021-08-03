import React  from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {Container} from "react-bootstrap";

const style = {
    pointerEvents: "none"
} as React.CSSProperties
// const handleDragStart = (e ) => e.preventDefault();
const items = [
    <img src="/EventGallery/firstImg.png"    style = {style}    />,
    <img src="/EventGallery/secondImg.png"   style = {style}   />,
    <img src="/EventGallery/firstImg.png"    style = {style}   />,
];

const responsive =    {
    0: {
        items: 1,
    },
    1024: {
        items: 3
    }
}

const ImageGallery = ()=>{
    return (
        <Container style={{
            width:"90%",
            textAlign:"start",
            marginLeft: "10%",

        }}>
            <AliceCarousel
                responsive={responsive}
                mouseTracking

                infinite
                disableButtonsControls
                disableDotsControls
                paddingLeft  ={20}
                paddingRight ={20}

                items={items} />
        </Container>
    );
}

export default ImageGallery;