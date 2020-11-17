import React from "react";
import { Container } from "react-bootstrap";
import AboutUs from "./AboutUs/AboutUs";
import Features from "./Header/Features/Features";
import Header from "./Header/Header";
const Home = () => {
  return (
    <div>
      <Header />
      <Features />
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
