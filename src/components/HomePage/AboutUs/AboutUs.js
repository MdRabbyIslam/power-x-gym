import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import about1 from "../../../images/image/about1.jpg";

const AboutUs = () => {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <img src={about1} className="w-100 h-100" alt="" />
        </Col>
        <Col md={6} className="d-flex justify-content-center">
          <div>
            <h1 style={{ color: "lightgray" }}>About Us</h1>
            <h2 className="text-warning">WE ARE HERE TO DREAM!</h2>
            <h2>OUR TEAM IS HERE SURVE YOU.</h2>
            <p style={{ fontSize: "13px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              voluptates repellat enim pariatur illo earum saepe sunt, unde
              eligendi laudantium quisquam accusamus consequatur cum corporis!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              voluptates repellat enim pariatur illo earum saepe sunt, unde
              eligendi laudantium quisquam accusamus consequatur cum corporis!
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
