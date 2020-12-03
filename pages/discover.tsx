import React from "react";
import Amenities from "../components/Discover/Amenities";
import Experience from "../components/Discover/Experience";
import ImageCarousel from "../components/Discover/ImageCarousel";
import ImageComponent from "../components/Discover/ImageComponent";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import Register from "../components/Register";

import Fade from "react-reveal/Fade";

interface discoverProps {}

const discover: React.FC<discoverProps> = ({}) => {
  return (
    <>
      <Register />
      <HeroImage src="/images/land.jpg" alt="land" />
      <Fade>
        <Experience />
      </Fade>
      <Fade>
        <ImageComponent src="/images/land.jpg" alt="land" />
      </Fade>
      <ImageCarousel />
      <Fade>
        <Amenities />
      </Fade>
      <Footer />
    </>
  );
};

export default discover;
