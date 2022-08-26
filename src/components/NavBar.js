import React from "react";
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
                        <NavItem> <Nav.Link className="text-white text-decoration-none"> Video Player  </Nav.Link> </NavItem>
                        <NavItem> <Nav.Link className="text-white text-decoration-none"> Map  </Nav.Link> </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;