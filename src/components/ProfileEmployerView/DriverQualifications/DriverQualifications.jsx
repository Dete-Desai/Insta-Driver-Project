import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

const DriverQualifications = (props) => {
  console.log(props.data);
  return (
    <div className="driver__qualifications section__style px-5 pb-3 pt-5 bg-white mt-3">
      <h5 className="form__heading mb-5">Qualification</h5>
      <form className="row mt-2">
        <div className="col-md-6">
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="education">
              Level Of Education
            </label>
            <div className="col-sm-7">
              <span className="text-gray">
                {props.data && props.data.levelofEducation}
              </span>
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="licence">
              Driving Licence Period (Years)
            </label>
            <div className="col-sm-7">
              <span className="text-gray">
                {props.data && props.data.licensePeriod} Years
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="experience">
              Driving Experience (Years)
            </label>
            <div className="col-sm-7">
              <span className="text-gray">
                {props.data && props.data.drivingExperience} Years
              </span>
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="experience">
              Unique Skills
            </label>
            <div className="col-sm-7">
              <span className="text-gray">
                {props.data && props.data.uniqueSkills.length > 0
                  ? props.data.uniqueSkills
                  : "N/A"}
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DriverQualifications;
