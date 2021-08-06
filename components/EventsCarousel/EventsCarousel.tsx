import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    1250: { items: 3 },
};

const items = [
    <div><img className="carousel-img" src="/assets/gallery/events/event_1.png"/></div>,
    <div><img className="carousel-img" src="/assets/gallery/events/event_2.png"/></div>,
    <div><img className="carousel-img" src="/assets/gallery/events/event_3.png"/></div>,
    <div><img className="carousel-img" src="/assets/gallery/events/event_4.png"/></div>,
    <div><img className="carousel-img" src="/assets/gallery/events/event_5.png"/></div>,
];

const EventsCarousel = () => {
    return <div className="container">
        <AliceCarousel
            mouseTracking
            infinite
            disableButtonsControls
            disableDotsControls

            items={items}
            responsive={responsive}
            autoPlay={true}
            autoPlayInterval={3000}
        /> 
    </div>
}

export default EventsCarousel;