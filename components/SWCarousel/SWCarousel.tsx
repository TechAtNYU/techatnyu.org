import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    1250: { items: 3 },
};

const items = [
    <div><img className="carousel-img" src="/assets/gallery/sw24photos/sw24_1.JPG"/></div>,
    <div><img className="carousel-img" src="/assets/gallery/sw24photos/sw24_2.JPG"/></div>,
    <div><img className="carousel-img" src="/assets/gallery/sw24photos/sw24_3.JPG"/></div>,
    <div><img className="carousel-img" src="/assets/gallery/sw24photos/sw24_4.JPG"/></div>,
];

const SWCarousel = () => {
    return <AliceCarousel
            mouseTracking
            infinite
            disableButtonsControls
            disableDotsControls

            items={items}
            responsive={responsive}
            autoPlay={true}
            autoPlayInterval={3000}
        /> 
}

export default SWCarousel;