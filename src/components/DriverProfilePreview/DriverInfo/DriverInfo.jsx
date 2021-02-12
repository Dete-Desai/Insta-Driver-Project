import React from 'react';
import get from "lodash/get";

const DriverInfo = ({userInfo}) => {
  return (
    <div className="driver__info section__style px-5 pb-3 pt-5 bg-white mt-3">
      <h5 className="form__heading mb-5">Personal Information</h5>
      <form className="row mt-2">
        <div className="col-md-6">
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="name">Full Name</label>
            <div className="col-sm-7">
              <span style={{color:"#787878"}}>
              {get(userInfo, "firstName") ? `${get(userInfo, "firstName")} ${get(userInfo, "lastName")} ` : ""} 
              </span>
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="location">Residential Location</label>
            <div className="col-sm-7">
            <span style={{color:"#787878"}}>{get(userInfo, "personalInformation.residentialLocation") || ""}</span>
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="city">County/City</label>
            <div className="col-sm-7">
            <span style={{color:"#787878"}}>{get(userInfo, "personalInformation.city") || ""}</span>
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="nationality">Nationality</label>
            <div className="col-sm-7">
            <span style={{color:"#787878"}}>{get(userInfo, "personalInformation.country") || ""}</span>
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="nationality">Languages Spoken</label>
            <div className="col-sm-7">
            <span style={{color:"#787878"}}>
            {get(userInfo, "personalInformation.languagesSpoken") ? 
              get(userInfo, "personalInformation.languagesSpoken").join(",") : "" }
            </span>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="born">Year Born</label>
            <div className="col-sm-7">
            <span style={{color:"#787878"}}>{get(userInfo, "personalInformation.yearBorn") || ""}</span>
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="gender">Gender</label>
            <div className="col-sm-7">
            <span style={{color:"#787878"}}>{get(userInfo, "personalInformation.gender") || ""}</span>
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="marital">Marital Status</label>
            <div className="col-sm-7">
            <span style={{color:"#787878"}}>{get(userInfo, "personalInformation.maritialStatus") || ""}</span>
            </div>
          </div>
          <div className="form-group row align-items-center my-4">
            <label className="col-sm-5 text-left label__style" for="nationality">Do you drink?</label>
            <div className="col-sm-7">
            <span style={{color:"#787878"}}>{get(userInfo, "personalInformation.drink")? "Yes":"No"}</span>
            </div>
          </div>
          <div className="form-group row align-items-center mt-4">
            <label className="col-sm-5 text-left label__style" for="nationality">Do you smoke?</label>
            <div className="col-sm-7">
            <span style={{color:"#787878"}}>{get(userInfo, "personalInformation.smoke")? "Yes":"No"}</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DriverInfo;