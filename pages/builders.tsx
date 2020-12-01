import React from "react";
import PortalGrid from "../components/Builders/PortalGrid";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import Register from "../components/Register";

interface buildersProps {}

const Builders: React.FC<buildersProps> = ({}) => {
  return (
    <div>
      <Register />
      <HeroImage src="/images/land.jpg" alt="land" />
      <PortalGrid />
      <Footer />
    </div>
  );
};

export default Builders;
