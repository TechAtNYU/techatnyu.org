import React from "react";
import EventsCarousel from "../components/EventsCarousel/EventsCarousel";
import GeneralButton from "../components/GeneralButton";
import RotatingEventCircle from "../components/EventsCircle/EventCircle";

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
          <OutlineButton title="Join the Club" href="https://discord.gg/q3cBnFMpMQ"/>
        </div>

        <div id="about" className="container">
          <h1 className="heading">Home</h1>
          <About/>
        </div>
        <div id="cohort">
          <CohortCard/>
        </div>

        <div id="events" className="container center">
          <div className="main_carousel container">
            <EventsCarousel/>
            <RotatingEventCircle/>
          </div>
          <div className="center find_events">
            <div style={{fontSize:"30px", marginBottom:"30px"}}>General Events bi-weekly!</div>
            <GeneralButton name={"Find an Event"} href={"https://engage.nyu.edu/organization/tech-at-nyu-all-university/events"}/>
          </div>
        </div>

    </div>
  )
}
