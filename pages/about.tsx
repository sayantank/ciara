import React from "react";
import AboutUs from "../components/About/AboutUs";
import Developer from "../components/About/Developer";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import Register from "../components/Register";

interface aboutProps {}

const about: React.FC<aboutProps> = ({}) => {
  return (
    <>
      <Register />
      <HeroImage src="/images/land.jpg" alt="land" />
      <AboutUs />
      <Developer />
      <Footer />
    </>
  );
};

export default about;
