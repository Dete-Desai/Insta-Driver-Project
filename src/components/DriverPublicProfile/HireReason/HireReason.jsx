import React from 'react';

const HireReason = ({driver}) => {
  return (
    <div className="hire__reason section__style pr-2 pb-3 pt-5 bg-white mt-3">
      <div className="col-md-10 m-auto px-5">
        <h5 className="form__heading">Why I Should Be Considered For Hire</h5>
      </div>
      <div className="col-md-10 m-auto px-5 py-3 ">
        <h6 className="form__heading2">First Point</h6>
        <div
          style={{ width: "100%", background: "#EDF5FA", borderRadius: "0px 30px" }}
          className="p-4">
          {driver && driver.considerToHire && driver.considerToHire.reasonOne?
          <span className="text-gray">
             {driver.considerToHire.reasonOne}
            </span>:
            <span className="alert-warning">
              Driver has not added Reason One to hire.
              </span>}
        </div>
      </div>
      <div className="col-md-10 m-auto px-5 py-4">
        <h6 className="form__heading2">Second Point</h6>
        <div
          style={{ width: "100%", background: "#EDF5FA", borderRadius: "0px 30px" }}
          className="p-4">
           {driver && driver.considerToHire && driver.considerToHire.reasonTwo?
          <span className="text-gray">
             {driver.considerToHire.reasonTwo}
            </span>:
            <span className="alert-warning">
              Driver has not added Reason Two to hire.
              </span>}
        </div>
      </div>
    </div >
  );
};

export default HireReason;