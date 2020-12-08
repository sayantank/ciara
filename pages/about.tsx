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
      <HeroImage
        src="https://res.cloudinary.com/nxmxnjxxn/image/upload/v1607446777/ciara/images/Banner_About.jpg"
        alt="About Us"
      />
      <AboutUs />
      <Developer />
      <Footer />
    </>
  );
};

export default about;
