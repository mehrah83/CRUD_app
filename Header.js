import React from "react";
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand to="/">Mehra Resto</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto navbar_wrapper">
              <NavLink
                id="RouterNavLink"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                id="RouterNavLink"
                to="/list"
              >
                List
              </NavLink>
              <NavLink
                id="RouterNavLink"
                to="/create"
              >
                Create
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
