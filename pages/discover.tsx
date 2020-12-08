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
      <HeroImage
        src="https://res.cloudinary.com/nxmxnjxxn/image/upload/v1607424306/ciara/images/Banner_Discover.jpg"
        alt="Discover"
      />
      <Fade>
        <Experience />
      </Fade>
      <Fade>
        <ImageComponent src="/images/land.jpg" alt="land" />
      </Fade>
      <Fade>
        <Amenities />
      </Fade>
      <ImageCarousel />
      <Footer />
    </>
  );
};

export default discover;
