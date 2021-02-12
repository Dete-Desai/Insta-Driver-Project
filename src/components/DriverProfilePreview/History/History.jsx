import React from 'react';
import get from "lodash/get";

const History = ({userInfo}) => {
  return (
    <div className="driver__history section__style px-5 pb-3 pt-5 bg-white mt-3">
      <h5 className="form__heading">My Previous Employment History For Ride-Sharing Taxis</h5>
      <div className="row mt-5">
        <div className="col-md-11">
          <div className="form-group row align-items-center pb-4">
            <label className="col-sm-6 text-left label__style mb-0" for="partnerName">Partners I have worked for</label>
            <div className="col-sm-6 w-75">
              <span className="text-gray">
                {get(userInfo, "previousHistory") ? 
                  get(userInfo, "previousHistory.numberofPartnersWorkedfor") :  ""}
              </span>
            </div>
          </div>
          <div className="form-group row align-items-center pb-4">
            <label className="col-sm-6 text-left label__style mb-0" for="partnerWork">Period I spent with the last partner</label>
            <div className="col-sm-6 w-75">
              <span className="text-gray">
                {get(userInfo, "previousHistory") ? 
                    `${get(userInfo, "previousHistory.timeworkedwithLastPartner")} years` :  ""}
              </span>
            </div>
          </div>
          <div className="form-group row pb-4">
            <label className="col-xl-6 col-lg-5 col-md-12 text-left label__style" for="partnerName">Why I left my last partner</label>
            <div className="col-xl-6 col-lg-7 col-md-12 p-0">
              <div
                style={{ width: "100%", background: "#EDF5FA", borderRadius: "0px 30px" }}
                className="p-4">
                <span className="text-gray">
                {get(userInfo, "previousHistory.reasontoLeaveLastPartner")  || ""}  
                </span>
              </div>
            </div>
          </div>
          <div className="form-group row align-items-center pb-4">
            <label className="col-sm-6 text-left label__style mb-0" for="2ndPartner">Period I spent with the 2nd last partner?</label>
            <div className="col-sm-6 w-75">
              <span className="text-gray">
              {get(userInfo, "previousHistory") ? 
                    `${get(userInfo, "previousHistory.timeworkedwithSecondLastPartner")} years` :  ""}
              </span>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-xl-6 col-lg-5 col-md-12 text-left label__style" for="2ndLastPartner">Why i left 2nd last partner?</label>
            <div className="col-xl-6 col-lg-7 col-md-12 p-0">
              <div
                style={{ width: "100%", background: "#EDF5FA", borderRadius: "0px 30px" }}
                className="p-4">
                <span className="text-gray">
                {get(userInfo, "previousHistory.reasontoLeaveSecondLastPartner")  || ""}  
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;