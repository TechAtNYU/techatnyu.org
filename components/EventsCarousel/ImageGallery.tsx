import React  from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

// const handleDragStart = (e ) => e.preventDefault();
const items = [
    <img className="carousel-img" src="../assets/gallery/events/event_1.png"/>,
  ];

const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
};

const ImageGallery = ()=>{
    return (
        <AliceCarousel
            responsive={responsive}
            mouseTracking

            infinite
            disableButtonsControls
            disableDotsControls

            items={items} />
    );
}

export default ImageGallery;