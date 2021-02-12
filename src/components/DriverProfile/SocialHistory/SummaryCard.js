import React from 'react';

const SummaryCard = (props) => {
  const { icon, heading, value } = props.summary;
  return (
    <>
      <div className="col-xl-6 mb-4">
        <div className="px-5 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img className="" src={icon} alt="" />
            <h6 className="form__heading2 mb-0 ml-3">{heading}</h6>
          </div>
          <div className="countBox d-flex align-items-center mr-3">
            <span style={{ fontSize: "30px" }} className="font-weight-bold text-white text-center m-auto">{value}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SummaryCard;