import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Header.css";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Navbar className="navbar" />
        <Row className="header-content">
          <Col md={5}>
            <h1>
              THE BEST FITNESS <br /> STUDIO IN TOWN
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              aut labore. Natus laborum quo totam facilis necessitatibus beatae
              officia vero, maiores excepturi cupiditate unde sapiente adipisci,
              iste fuga consectetur? Explicabo.
            </p>
            <Button
              variant="warning"
              style={{ padding: "10px 30px", fontSize: "18px" }}
            >
              Join Us
            </Button>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
