import React from 'react';
import get from "lodash/get";

const DriverQualifications = ({userInfo}) => {
  return (
    <div className="driver__qualifications section__style px-5 pb-3 pt-5 bg-white mt-3">
      <h5 className="form__heading mb-5">Qualification</h5>
      <form className="row mt-2">
        <div className="col-md-6">
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="education">Level Of Education</label>
            <div className="col-sm-7">
              <span className="text-gray">{get(userInfo, "qualification.levelofEducation") || ""}</span>
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="licence">Driving Licence Period (Years)</label>
            <div className="col-sm-7">
              <span className="text-gray">{get(userInfo, "qualification.licensePeriod") || ""}</span>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="experience">Driving Experience (Years)</label>
            <div className="col-sm-7">
              <span className="text-gray">{get(userInfo, "qualification.drivingExperience") || ""}</span>
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="experience">Unique Skills</label>
            <div className="col-sm-7">
              <span className="text-gray">
                {get(userInfo, "qualification.anyUniqueSkills") ? get(userInfo, "qualification.anyUniqueSkills").join(',') : "" }
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DriverQualifications;