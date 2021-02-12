import React from "react";
import checked from "../../../dist/icons/checked.png";
import DriverExperience from "../DriverExperience/DriverExperience";
import {
  PersonalDriverData,
  schoolBusDriverData,
  rideSharingData,
  truckDriverData,
} from "../DriverExperience/SelectValue";
import selectIcon from "../../../dist/icons/selectIcon.svg";

const DriverCategory = ({ driver }) => {
  const getCategories = () => {
    if (!driver.driverCategories || driver.driverCategories.length === 0) {
      return (
        <div className="card alert alert-warning">
          <span>Categories information not available</span>
        </div>
      );
    } else {
      return driver.driverCategories.map((cat, index) => (
        <div key={index} className="d-flex align-items-center pb-3 pl-0">
          <img className="mr-3" src={checked} alt="" />
          <span className="text-gray">{cat}</span>
        </div>
      ));
    }
  };

  const getExperiences = () => {
    if (
      !driver.experienceBreakdown ||
      driver.experienceBreakdown.length === 0
    ) {
      return (
        <div className="card alert alert-warning">
          <span>Experience Breakdown information not added</span>
        </div>
      );
    } else {
      return driver.experienceBreakdown.map((exp, index) => (
        <div key={index} className="mb-4">
          <div className="col-md-12">
            <img src={selectIcon} alt="" />
            {exp.category ? (
              <span className="ml-3 text-gray">{exp.category}</span>
            ) : (
              <span className="text-warning">Category Not Added</span>
            )}
          </div>
          <div className="col-md-12 mt-3">
            <DriverExperience experience={exp} key={index} />
          </div>
        </div>
      ));
    }
  };
  return (
    <div className="DriverCategory-wrapper">
      <div className="driver__category section__style px-5 pb-3 pt-5 bg-white mt-3">
        <h5 className="form__heading">Driver Category (ies)</h5>
        <form className="row mt-5">
          <div className="col-md-6">{getCategories()}</div>
          <div className="col-md-6"></div>
        </form>
      </div>
      <div
        style={{ marginTop: "3.5rem" }}
        className="driver-experience col-md-12 px-0"
      >
        <div className="section__style px-5 pb-3 pt-5 bg-white mt-3">
          <h5 className="form__heading">
            Breakdown on Experience on Categories Selected
          </h5>
          <div className="col-md-12">{getExperiences()}</div>
        </div>
      </div>
    </div>
  );
};

export default DriverCategory;
