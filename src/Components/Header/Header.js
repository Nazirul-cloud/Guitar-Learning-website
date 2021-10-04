import React from 'react';
import { Card, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import logo from '../../images/logo.png'
import logo from '../../images/logo.png';


const Header = () => {
    return (

        <div>
            {/* Navigation Start */}
            <Navbar bg="dark" expand="lg">
             <Container>
                    <Navbar.Brand className="text-info"  href="#home"><img src={logo} width="30"
                        height="30" alt="" /> Code Guitar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <NavLink className="text-info mx-3 text-decoration-none" to ="/crouses">Home</NavLink>
                        <NavLink className="text-info mx-3 text-decoration-none" to ="/course">Course</NavLink>
                        <NavLink className="text-info mx-3 text-decoration-none" to ="/about">About</NavLink>
                        <NavLink className="text-info mx-3 text-decoration-none" to ="/contract">Contact</NavLink>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
             {/* Navigation End */}
        
        </div>
    );
};

export default Header;