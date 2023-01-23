import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, LinkProps } from "react-router-dom";

import "./Navbar.scss";

interface item {
  NavText: string;
  NavLink: string;
}
const HomeNavbarItem: item[] = [
  {
    NavText: "Home",
    NavLink: "/",
  },
  {
    NavText: "About Us",
    NavLink: "/AboutUs",
  },
  {
    NavText: "Contact Us",
    NavLink: "/ContactUs",
  },
  {
    NavText: "Product",
    NavLink: "/Product",
  },
];

const HomeNavbar: React.FC = () => (
  <Navbar bg="white" expand="lg">
    <Container>
      <Navbar.Brand className="brand">
        <Link to={"/"}>🛒 Cashierless Store</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="toggle-home-navbar" />
      <Navbar.Collapse id="toggle-home-navbar">
        <Nav className="ms-auto nav-item">
          {HomeNavbarItem.map((item) => (
            <ul key={item.NavText} className="item">
              <Link to={item.NavLink}>{item.NavText}</Link>
            </ul>
          ))}
          <ul className="Buttonna">
            <Link to={"/Login"}>
              <Button variant="primary" className="">
                Login
              </Button>
            </Link>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default HomeNavbar;
