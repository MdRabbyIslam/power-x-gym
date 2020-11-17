import React from "react";
import { Col } from "react-bootstrap";

const SingleFeature = ({ features }) => {
  const featuresContainerStyle = {
    minHeight: "5 0vh",
    margin: "30px 0",
    backgroundImage: `url(${features.bg})`,
    backgroundPosition: "top left",
    backgroundSize: "cover ",
    color: "white",
  };

  return (
    <Col md={4}>
      <div
        className="text-center  p-2 d-flex align-items-center"
        style={featuresContainerStyle}
      >
        <div>
          <img
            src={features.icon}
            style={{ height: "50px", width: "40px" }}
            alt=""
          />
          <br />
          <h2
            className={features.id % 2 === 0 ? "text-warning" : "white"}
            style={{
              margin: "20px 0",
            }}
          >
            {features.heading}
          </h2>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
            cupiditate perferendis quae eos incidunt fugit!
          </p>
        </div>
      </div>
    </Col>
  );
};

export default SingleFeature;
