import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="md"
        style={{ backgroundColor: "transparent" }}
        variant="dark"
      >
        <ReactBootStrap.Navbar.Brand href="#home">
          <span style={{ fontWeight: "bold" }}>
            POWER <span style={{ color: "yellow" }}>X</span>
          </span>
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="ml-auto text-white">
            <Link to="/Home">
              <ReactBootStrap.Nav.Link href="#features">
                Home
              </ReactBootStrap.Nav.Link>
            </Link>
            <Link to="/Services">
              <ReactBootStrap.Nav.Link href="#pricing">
                Services
              </ReactBootStrap.Nav.Link>
            </Link>

            <Link to="/classes">
              <ReactBootStrap.Nav.Link href="#deets">
                Our Classes
              </ReactBootStrap.Nav.Link>
            </Link>
            <Link to="/about_us">
              <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
                About us
              </ReactBootStrap.Nav.Link>
            </Link>
            <Link to="/blog">
              <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
                Blog
              </ReactBootStrap.Nav.Link>
            </Link>
            <Link to="/pricing">
              <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
                Pricing
              </ReactBootStrap.Nav.Link>
            </Link>
            <Link to="/contact">
              <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
                Contact us
              </ReactBootStrap.Nav.Link>
            </Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </>
  );
};

export default Navbar;
