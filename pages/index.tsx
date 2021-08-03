import React from "react";
import EventsCarousel from "../components/EventsCarousel/EventsCarousel";
import CohortCard from "../components/Cohort/CohortCard";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import About from "../components/About";
import OutlineButton from "../components/OutlineButton";

export default function Home() {
  return (
    <div>



        <div id="header" className="container">
          <div className="tagline">
            <p>Tech@NYU is a space for artists, makers and hackers to build stuff together, learn new skills, and explore opportunities in tech. </p>
          </div>
          <OutlineButton title="Join the Club" href="#"/>
        </div>

        <div id="about" className="container">
          <h1 className="heading">About</h1>
          <About/>
        </div>
        <div id="cohort">
          <CohortCard/>
        </div>

        <div id="events">
          <EventsCarousel/>
        </div>


    </div>
  )
}
