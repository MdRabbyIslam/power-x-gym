import React from "react";
import { Container } from "react-bootstrap";
import AboutUs from "./AboutUs/AboutUs";
import Features from "./Header/Features/Features";
import Header from "./Header/Header";
import Training from "./Training/Training";
import Speciality from "./Speciality/Speciality";
import Footer from "./Footer/Footer";
const Home = () => {
  return (
    <div>
      <Header />
      <Features />
      <AboutUs></AboutUs>
    <Training/>
    <Speciality/>
    <Footer/>
    </div>
  );
};

export default Home;
