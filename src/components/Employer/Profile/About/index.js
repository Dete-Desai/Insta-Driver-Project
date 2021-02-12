import React from "react";
import AboutBusiness from "./AboutBusiness";
import NoAboutBusiness from "./NoAboutBusiness";

const AboutComponent = ({ aboutBusiness }) => {
  return (
    <>
      {aboutBusiness ? (
        <AboutBusiness aboutBusiness={aboutBusiness} />
      ) : (
        <NoAboutBusiness />
      )}
    </>
  );
};

export default AboutComponent;
