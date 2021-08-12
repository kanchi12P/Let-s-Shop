import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
function Navb(props) {
  const { count } = props;
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Let's Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink to="/">
                <li>Home</li>
              </NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink to="/main">
                <li>Products</li>
              </NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink to="/cart">
                <li>
                  My Cart{" "}
                  {count ? <button className="glow">{count}</button> : ""}
                </li>
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navb;
