import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';  // Ensure the CSS file is in the right location

const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="md"
                fixed="top"
                className="animate-navbar nav-theme justify-content-between"
                variant="dark">
                <Navbar.Brand href="#Home">
                <img 
            src="logo.jpg" 
            alt="Logo" 
            className="h-2 w-2 ml-4 rounded-full"
          />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#Home">Home</Nav.Link>
                        <Nav.Link href="#Aboutme">About Me</Nav.Link>
                        <Nav.Link href="#Technologies">Technologies</Nav.Link>
                        <Nav.Link href="#Projects">Projects</Nav.Link>
                        <Nav.Link href="#Resume">Resume</Nav.Link>
                        <Nav.Link href="#Contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavBar;
