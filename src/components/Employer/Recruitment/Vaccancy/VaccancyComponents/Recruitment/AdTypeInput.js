import React from "react";

const AdTypeInput = ({ handleChange, jobDetails }) => {
  return (
    <div>
      <p className="header-text" style={{ color: "#4B4747", fontWeight: 450 }}>
        Select Ad type
      </p>
      <div
        className="form-group col-md-12"
        id="drivercat2"
        style={{ marginLeft: "-15px", maxWidth: 462 }}
      >
        <div className="select mb-0">
          <div className="input-container">
            <select
              className="form-control normal-text"
              id="mySelect"
              name="adType"
              onChange={handleChange}
              style={{
                maxWidth: 462,
                height: 40,
                borderRadius: 4,
                backgroundColor: "#F5F5F5",
              }}
              required
              value={jobDetails.adType || ""}
            >
              {/* <option selected value="" >
                Select Job type
              </option> */}
              <option selected value="Driving Jobs">
                Driving Jobs
              </option>
              <option value="Non-driving Jobs">Non-driving Jobs</option>
            </select>
          </div>
          <div className="select__arrow1" style={{ right: 4 }} />
        </div>
      </div>
    </div>
  );
};

export default AdTypeInput;
