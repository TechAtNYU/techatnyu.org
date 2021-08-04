import React from "react";
import { Row, Col } from "react-bootstrap";

const About = () => { 
  return (
  <Row>
    <Col sm className="about-item">
      <h2>Creativity</h2>
      <div>
        <img src="../assets/index-icons/creativity.png" width="50" height="150"/>
      </div>
      <p>Ideate and innovate your ideas through design and creative computing. </p>
    </Col>
    <Col sm className="about-item">
    <h2>Learning</h2>
      <div>
        <img src="../assets/index-icons/learning.png" width="100" height="150"/>
      </div>
      <p>Pick up new skills or brush up your code.</p>
    </Col>
    <Col sm className="about-item">
    <h2>Community</h2>
      <div>
        <img src="../assets/index-icons/community.png" width="130" height="130"/>
      </div>
      <p>Meet other tech-enthusiasts.</p>
    </Col>
  </Row>
  );
}

export default About;