import '../styles/globals.scss'
import '../styles/index.scss'
import '../styles/button.scss'
import '../styles/programs.scss'
import '../styles/footer.scss'
import '../styles/carousel.scss'
import '../styles/team.scss'

import type { AppProps } from 'next/app'
import Head from "next/head";
import NavBar from "../components/NavBar";
import React from "react";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {

  return (<>
    <Head>
      <title>Tech@NYU</title>
      <meta name="description" content="Tech@NYU" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"/>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;1,400;1,500&display=swap');
      </style>
    </Head>
      <body>
        <div className="logo center">
          <a href="/">
            <img src = "../assets/logo.png"/>
          </a>
        </div>
        <NavBar/>
        <Component {...pageProps} />
        <Footer/>
      </body>
  </>);
}
export default MyApp
