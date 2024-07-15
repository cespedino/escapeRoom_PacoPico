import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../Styles/navbar.css';
import logo from '../images/logo.png';

function Navigation() {
  return (
    <Navbar className='navbar-custom' expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
        <img src={logo} alt="Logo" height="30" /> {/* Usa la imagen como logo */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/instrucciones">Instrucciones</Nav.Link>
            <Nav.Link as={Link} to="/teorema">Teorema de Paco Pico</Nav.Link>
            <Nav.Link as={Link} to="/leyenda">La Leyenda de la Puchaina Matediva</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
