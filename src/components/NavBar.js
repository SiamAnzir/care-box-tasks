import React from "react";
import {NavLink} from "react-router-dom";
import {Container, Nav, Navbar, NavItem} from "react-bootstrap";

const NavBar = () => {
    return(
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container>
                <Nav className="navbar-brand">
                    <div className="border rounded">
                        <Nav.Link className="text-white text-decoration-none">
                            Care-Box Ltd
                        </Nav.Link>
                    </div>
                </Nav>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <NavItem> <NavLink to="/" className="text-white text-decoration-none p-4"> Video Player </NavLink> </NavItem>
                        <NavItem> <NavLink to="calculate-map-distance" className="text-white text-decoration-none p-4">Google Map  </NavLink> </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;