import React from "react";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";

interface contactProps {}

const contact: React.FC<contactProps> = ({}) => {
  return (
    <>
      <HeroImage
        src="https://res.cloudinary.com/nxmxnjxxn/image/upload/v1607425220/ciara/images/Banner_Contact.png"
        alt="Contact Us"
      />
      <ContactForm />
      <Footer />
    </>
  );
};

export default contact;
