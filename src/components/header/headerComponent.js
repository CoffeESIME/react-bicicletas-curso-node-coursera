import React from "react";
import {Nav,Navbar, Container, Row}from 'react-bootstrap'
function Header(){
return (
    <Row className="mb-3" >
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#">Bicicletas</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/bicicletas">Inicio</Nav.Link>
      <Nav.Link href="/bicicletas/crear">Crear</Nav.Link>
   </Nav>
    </Container>
  </Navbar>
  </Row>
);
}

export default Header;