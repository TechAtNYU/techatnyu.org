import Head from 'next/head';
import React from "react";
import Footer from "../components/Footer/Footer";
import GeneralButton from "../components/GeneralButton";
import EventsCarousel from "../components/EventsCarousel/EventsCarousel";
import CohortCard from "../components/Cohort/CohortCard";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <Head>
          <title>Tech@NYU</title>
          <meta name="description" content="Tech@NYU" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"/>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;1,400;1,500&display=swap');
          </style>
        </Head>

        <div className="logo center">
            <img src = "../assets/logo-3x.png"/>
        </div>

        <NavBar/>

        <div id="#about">

        </div>


        <div id="#events">

        </div>
      <CohortCard/>
      <EventsCarousel/>
      <Footer/>
        <div id="#contact">

      </div>

    </div>
  )
}
