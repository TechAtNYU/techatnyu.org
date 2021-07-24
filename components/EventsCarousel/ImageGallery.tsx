import React  from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

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
        <div style={{
            width:"90%",
        }}>
            <AliceCarousel
                responsive={responsive}
                mouseTracking

                infinite
                disableButtonsControls
                disableDotsControls
                paddingLeft  ={15}
                paddingRight ={15}

                items={items} />
        </div>
    );
}

export default ImageGallery;