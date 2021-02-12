import React from 'react';

const DriverQualifications = ({driver}) => {

  const getSkills=()=>{
    if(!driver.qualification.anyUniqueSkills || driver.qualification.anyUniqueSkills.length ===0){
      return <div className="card alert alert-warning"><span>Unique skills not available</span></div>
    }else{
     return driver.qualification.anyUniqueSkills.map(skill=> <div>
          <span className="text-gray">{skill},</span>
      </div>)
    }
  }
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
              <span className="text-gray"> {driver && driver.qualification
              && driver.qualification.levelofEducation}</span>
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="licence">Driving Licence Period (Years)</label>
            <div className="col-sm-7">
              <span className="text-gray">{
                driver && driver.qualification && driver.qualification.licensePeriod
              }</span>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="experience">Driving Experience (Years)</label>
            <div className="col-sm-7">
              <span className="text-gray">
                {driver && driver.qualification && driver.qualification.drivingExperience}</span>
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="experience">Unique Skills</label>
            <div className="col-sm-7">
              {getSkills()}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DriverQualifications;