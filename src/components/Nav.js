import React from 'react';
import {Navbar, Nav, NavDropdown } from 'react-bootstrap';

function NavComponent() {
    return (
        <Navbar collapseOnSelect expand="lg"  className="mb-4 nav">
            <Nav className="m-auto">
            <Navbar.Toggle className="navbar-dark" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav  text-center">
                    <NavDropdown.Item href="#Home" className="text-white mr-5 pr-5">Home</NavDropdown.Item>
                    <NavDropdown.Item href="#About" className="text-white ml-5 mr-5 pr-5 pl-5">About</NavDropdown.Item>
                    <NavDropdown.Item href="#Portfolio" className="text-white ml-5 pl-5">Portfolio</NavDropdown.Item>
                </Navbar.Collapse>
            </Nav>


        </Navbar>
    )
}
export default NavComponent;