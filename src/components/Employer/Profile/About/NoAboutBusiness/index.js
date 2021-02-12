/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./index.css";

const NoAboutBusiness = () => {
  return (
    <>
      <div id="wrapper-nobusiness">
        <div className="card">
          <div className="card-header card-header-about">
            <div className="container">
              <span className="about-business font-weight-bold">
                About This Business
              </span>
              <span className="about-business-date">
                Page created on 23rd June 2020
              </span>
            </div>
          </div>
          <div className="card-body no-desc">
            <div className="container">
              Employer has not added any description about the employer
            </div>
          </div>
        </div>
        <br />
        <div className="card-header card-header-about">
          <div className="container">
            <span className="about-business font-weight-bold">
              Business Location
            </span>
          </div>
        </div>
        <iframe
          width="100%"
          height="350"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Nairobi+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </>
  );
};

export default NoAboutBusiness;
