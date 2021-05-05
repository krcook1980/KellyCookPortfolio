import React from 'react';
import {Navbar, Nav, NavLink } from 'react-bootstrap';

function NavComponent() {
    return (
        <Navbar collapseOnSelect expand="lg"  className="mb-4 nav">
            <Nav className="m-auto">
            <Navbar.Toggle className="navbar-dark" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav  text-center">
                    <NavLink href="#/KellyCookPortfolio" className="text-white mr-5 pr-5 nav-item">Home</NavLink>
                    <NavLink href="#About" className="text-white ml-5 mr-5 pr-5 pl-5 nav-item">About</NavLink>
                    <NavLink href="#Portfolio" className="text-white ml-5 pl-5 nav-item">Portfolio</NavLink>
                </Navbar.Collapse>
            </Nav>


        </Navbar>
    )
}
export default NavComponent;