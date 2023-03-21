import React from 'react'
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import {LinkContainer} from "react-router-bootstrap"
import { Truck } from "react-bootstrap-icons";

const NavbarComponent = () => {
  return (
    <div className='sticky-top'>
    <Navbar bg="primary" expand="lg" >
        <Container>
        <Navbar.Brand href="#home">The Sports Temple</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Footwear" id="basic-nav-dropdown">
                <LinkContainer to="/world"><NavDropdown.Item>Men</NavDropdown.Item></LinkContainer>
            </NavDropdown>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <LinkContainer to="/test">
              <NavDropdown.Item>Action</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>

    

    </Navbar>
      <div className="bg-black text-white p-1">
      <Container className="text-center">
        <Truck
        className="m-1"/>
        <span>Free Shipping on all orders over 99.99$</span>
      </Container>
    </div>
    </div>
    


  )
}

export default NavbarComponent