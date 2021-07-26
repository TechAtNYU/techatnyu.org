import React from "react";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
    <Navbar className= "navbar-custom" expand="lg">
    <Container>
    <Navbar.Brand href="#home">
      <img
        src="../assets/logo-3x.png"
        width="150"
        height="30"
        className="align-top sub-logo"
        alt="tech@nyu logo"
      />
    </Navbar.Brand>        
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-content">
            <Nav.Link href="/#about">About</Nav.Link>
            <Nav.Link href="/team">Our Team</Nav.Link>
            <NavDropdown title="Programs" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Mentorship</NavDropdown.Item>
                <NavDropdown.Item href="#">Tech Treks</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#events">Events</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    );
};

export default NavBar;