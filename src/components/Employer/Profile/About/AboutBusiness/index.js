/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./index.css";
import MapViewer from "./MapViewer";
const AboutBusiness = ({ aboutBusiness }) => {
  return (
    <>
      <div id="wrapper-nobusiness">
        <div className="card">
          <div className="card-header card-header-about">
            <div className="container">
              <span className="about-business font-weight-bold">
                About {aboutBusiness.businessName}
              </span>
              <span className="about-business-date">
                {new Date(aboutBusiness.createdAt).toDateString()}
              </span>
            </div>
          </div>
          <div className="card-body no-desc">
            <div className="container">
              <p style={{ color: "#5B5B5B" }}>{aboutBusiness.aboutBusiness}</p>
            </div>
          </div>
        </div>
        <br />
        <div className="card card-body business-location py-4 mt-5 ">
          <span className="about-business font-weight-bold">
            {aboutBusiness.businessName} Location
          </span>
          {aboutBusiness.businessLocation.title}
          <div>
            <MapViewer location={aboutBusiness.businessLocation} />
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutBusiness;
