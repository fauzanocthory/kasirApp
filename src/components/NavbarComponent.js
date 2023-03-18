import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <>
    <Navbar variant='dark' expand="lg">
      <Container>
        <Navbar.Brand href="#home"><strong>Kasir App</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  )
}

export default NavbarComponent