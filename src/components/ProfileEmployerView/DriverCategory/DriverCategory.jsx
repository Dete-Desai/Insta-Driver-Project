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

const DriverCategory = (props) => {
  console.log(props.breakDownData);
  return (
    <div className="DriverCategory-wrapper">
      <div className="driver__category section__style px-5 pb-3 pt-5 bg-white mt-3">
        <h5 className="form__heading">Driver Category (ies)</h5>
        <form className="row mt-5">
          <div className="col-md-6">
            {props.data &&
              props.data.map((cat, idx) => (
                <div key={idx} className="d-flex align-items-center pb-3 pl-0">
                  <img className="mr-3" src={checked} alt="" />
                  <span className="text-gray">{cat}</span>
                </div>
              ))}

            {/* <div className="d-flex align-items-center pb-3 pl-0">
              <img className="mr-3" src={checked} alt="" />
              <span className="text-gray">Ride-hailing driver</span>
            </div> */}
          </div>
          {/* <div className="col-md-6">
            <div className="d-flex align-items-center pb-3 pl-0">
              <img className="mr-3" src={checked} alt="" />
              <span className="text-gray">Personal Driver</span>
            </div>
            <div className="d-flex align-items-center pb-3 pl-0">
              <img className="mr-3" src={checked} alt="" />
              <span className="text-gray">School Bus Driver</span>
            </div>
          </div> */}
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
          <div className="col-md-12">
            <form>
              <div className="row">
                {props.breakDownData &&
                  props.breakDownData.map((d, idx) => {
                    return (
                      <div className="mb-4" key={idx}>
                        <div className="col-md-12">
                          <img src={selectIcon} alt="" />
                          <span className="ml-3 text-gray">{d.category}</span>
                        </div>
                        <div className="col-md-12 mt-3 pl-5">
                          {d.vehicles.map((driverData) => {
                            driverData.category = d.category;
                            return (
                              <DriverExperience
                                driverData={driverData}
                                key={driverData._id}
                              />
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverCategory;
