import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import {
  NavLink
} from "react-router-dom";

const Navigation = () => {

return(
  <Navbar bg="secondary" variant="dark" expand="lg">
    <Navbar.Brand href="#home">Put Me On</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavLink className='nav-link' exact to='/'>Home</NavLink>
        <NavLink className='nav-link' to='/results'>Results</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

}

export default Navigation;