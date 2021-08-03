import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Col, Row} from "react-bootstrap";
import GeneralButton from "../components/GeneralButton";


const mentorShipPageStyle = {
    padding: "0px 12px",
    paddingLeft: "72px"
} as React.CSSProperties;

const headerStyle = {
    fontSize: "84px",
    fontWeight: 700,
    marginTop: "154px",
    marginBottom:"64px",
    textAlign: "start"
} as React.CSSProperties;

const descriptionStyle = {
    fontSize:"18px",
    marginBottom:"40px",
    textAlign: "start",
} as React.CSSProperties;

const h1Style = {
    fontWeight : 500,
    fontSize: "30px",
    marginTop: "60px",
    marginBottom:"16px",

}

const h2style = {
    fontWeight : 400,
    fontSize: "22px",
    marginBottom:"16px"
}

const rowTextStyle = {
    fontWeight : 400,
    fontSize: "18px",
}

const mentorshipLogoStyle = {
    marginBottom: "-277px",
    marginLeft: "317px",
}
export default function Mentorship() {
    return (
        <div style ={mentorShipPageStyle} >
            <Col>
                <img src={"../assets/wateringplant.svg"} alt={"mentorship logo"} style={mentorshipLogoStyle}/>
              <div style={headerStyle}>
                  Mentorship
              </div>
                <div style ={descriptionStyle}>
                    <div>
                        an informal chat with tech@nyu alumni and seniors at NYU to receive
                    </div>
                    <div>
                        guidance about applying for a job, prepping for recruiting, finding out
                    </div>
                    <div>
                        what start up world is like and the more.
                    </div>
                </div>
                <GeneralButton name={"Access the database"}/>
                <Row style={rowTextStyle}>
                    <Col md>
                      <h1 style ={h1Style}>  Are you a...</h1>
                        <h2 style={h2style}>
                            Student
                        </h2>
                        <ul style={{   marginBottom:"72px"} } >
                            <li style={{fontSize:"18px"}}> looking for more personalized career advice? </li>
                            <li> curious about entrepreneurship? </li>
                            <li> trying to figure out what career paths there are in tech?</li>
                        </ul>
                        <h2  style={h2style}>
                            Tech@NYU Alumni / Junior / Senior
                        </h2>
                        <ul style={{ marginBottom:"171px"}}>
                            <li>willing to share about your experiences in Tech?</li>
                            <li>interested in chatting with curious students?</li>
                            <li>wanting to pass down your coding/design/product management skills?</li>
                        </ul>

                    </Col>
                    <Col md>
                       <h1 style ={h1Style}> What you'll get out of Mentorship</h1>
                        <ul style={{marginTop: "45px",marginBottom:"100px"}}>
                            <li>learn some skills hosted by different mentors                 </li>
                            <li>potentially get to work on a project with your mentor        </li>
                            <li>gain a better understanding of a desired/potential role in tech </li>
                        </ul>
                        <ul>
                            <li>meet other mentors & catch up with Tech@NYU alumni  </li>
                            <li>a peep of managing juniors              </li>
                            <li>meet someone new!                 </li>
                            <li>play a part in cultivating budding talent in tech</li>
                        </ul>
                    </Col>
                </Row>
            </Col>
        </div>
    )
}
