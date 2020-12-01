import React from "react";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";

interface contactProps {}

const contact: React.FC<contactProps> = ({}) => {
  return (
    <>
      <HeroImage src="/images/land.jpg" alt="land" />
      <ContactForm />
      <Footer />
    </>
  );
};

export default contact;
