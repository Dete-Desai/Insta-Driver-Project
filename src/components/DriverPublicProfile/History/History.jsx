import React from 'react';

const History = ({driver}) => {
  return (
    <div className="driver__history section__style px-5 pb-3 pt-5 bg-white mt-3">
      <h5 className="form__heading">My Previous Employment History For Ride-Sharing Taxis</h5>
      <div className="row mt-5">
        <div className="col-md-11">
          <div className="form-group row align-items-center pb-4">
            <label className="col-sm-6 text-left label__style mb-0" for="partnerName">Partners I have worked for</label>
            <div className="col-sm-6 w-75">
              <span className="text-gray">{driver && driver.previousHistory?
              driver.previousHistory.numberofPartnersWorkedfor:<span className="alert-warning">Partners Worked For Not Available</span>}</span>
            </div>
          </div>
          <div className="form-group row align-items-center pb-4">
            <label className="col-sm-6 text-left label__style mb-0" for="partnerWork">Period I spent with the last partner</label>
            <div className="col-sm-6 w-75">
              <span className="text-gray">{driver && driver.previousHistory?
              driver.previousHistory.timeworkedwithLastPartner:<span className="alert-warning">Time Worked For Previous Partner Not Available</span>}</span>
            </div>
          </div>
          <div className="form-group row pb-4">
            <label className="col-xl-6 col-lg-5 col-md-12 text-left label__style" for="partnerName">Why I left my last partner</label>
            <div className="col-xl-6 col-lg-7 col-md-12 p-0">
              <div
                style={{ width: "100%", background: "#EDF5FA", borderRadius: "0px 30px" }}
                className="p-4">
                <span className="text-gray">{driver && driver.previousHistory && driver.previousHistory.reasonWhyILeft?
              driver.previousHistory.reasonWhyILeftPreviousPartner:<span className="alert-warning">Reason For Leaving Previous Partner Not Available</span>}</span>
              </div>
            </div>
          </div>
          <div className="form-group row align-items-center pb-4">
            <label className="col-sm-6 text-left label__style mb-0" for="2ndPartner">Period I spent with the 2nd last partner?</label>
            <div className="col-sm-6 w-75">
              <span className="text-gray">{driver && driver.previousHistory?
              driver.previousHistory.timeworkedwithSecondLastPartner:<span className="alert-warning">Time Worked For Second Previous Partner Not Available</span>}</span>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-xl-6 col-lg-5 col-md-12 text-left label__style" for="2ndLastPartner">Why i left 2nd last partner?</label>
            <div className="col-xl-6 col-lg-7 col-md-12 p-0">
              <div
                style={{ width: "100%", background: "#EDF5FA", borderRadius: "0px 30px" }}
                className="p-4">
                <span className="text-gray">
                {driver && driver.previousHistory && driver.previousHistory.reasonWhyILeftSecondPreviousPartner?
              driver.previousHistory.reasonWhyILeftSecondPreviousPartner:<span className="alert-warning">Reason For Leaving Second Previous Partner Not Available</span>}
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