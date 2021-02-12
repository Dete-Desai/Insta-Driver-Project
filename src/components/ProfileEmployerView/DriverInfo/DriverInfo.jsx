import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

const DriverInfo = (props) => {
  return (
    <div className="driver__info section__style px-5 pb-3 pt-5 bg-white mt-3">
      <h5 className="form__heading mb-5">Personal Information</h5>
      <form className="row mt-2">
        <div className="col-md-6">
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="name">
              Full Name
            </label>
            <div className="col-sm-7">
              <span style={{ color: "#787878" }}>
                {props.data && props.data.name}
              </span>
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="location">
              Residential Location
            </label>
            <div className="col-sm-7">
              <span style={{ color: "#787878" }}>
                {props.data && props.data.location}
              </span>
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="city">
              County/City
            </label>
            <div className="col-sm-7">
              <span style={{ color: "#787878" }}>
                {props.data && props.data.countCity}
              </span>
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label
              className="col-sm-5 text-left label__style"
              for="nationality"
            >
              Nationality
            </label>
            <div className="col-sm-7">
              <span style={{ color: "#787878" }}>
                {props.data && props.data.nationality}
              </span>
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label
              className="col-sm-5 text-left label__style"
              for="nationality"
            >
              Languages Spoken
            </label>
            <div className="col-sm-7">
              <span style={{ color: "#787878" }}>
                {props.data && props.data.languages}
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="born">
              Year Born
            </label>
            <div className="col-sm-7">
              <span style={{ color: "#787878" }}>
                {props.data && props.data.yearBorn}
              </span>
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="gender">
              Gender
            </label>
            <div className="col-sm-7">
              <span style={{ color: "#787878" }}>
                {props.data && props.data.gender}
              </span>
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="marital">
              Marital Status
            </label>
            <div className="col-sm-7">
              <span style={{ color: "#787878" }}>
                {props.data && props.data.maritalStatus}
              </span>
            </div>
          </div>
          <div className="form-group row align-items-center my-4">
            <label
              className="col-sm-5 text-left label__style"
              for="nationality"
            >
              Do you drink?
            </label>
            <div className="col-sm-7">
              <span style={{ color: "#787878" }}>
                {props.data && props.data.drink ? "YES" : "NO"}
              </span>
            </div>
          </div>
          <div className="form-group row align-items-center mt-4">
            <label
              className="col-sm-5 text-left label__style"
              for="nationality"
            >
              Do you smoke?
            </label>
            <div className="col-sm-7">
              <span style={{ color: "#787878" }}>
                {props.data && props.data.smoke ? "YES" : "NO"}
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DriverInfo;
