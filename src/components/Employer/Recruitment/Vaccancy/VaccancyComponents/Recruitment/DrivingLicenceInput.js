import React from "react";

const DrivingLicenceInput = ({ handleChange,jobDetails }) => {
  return (
    <div>
      <p className="normal-text" style={{ fontWeight: 500 }}>
        Your Preferred Driving Licence
      </p>
      <div
        className="form-group col-md-12"
        style={{ marginLeft: "-15px", maxWidth: 462 }}
        required
      >
        <div className="select mb-0">
          <div className="input-container">
            <select
              className="form-control normal-text"
              id="driving_licence"
              onchange="myFunction3()"
              name="licenseAge"
              onChange={handleChange}
              style={{
                maxWidth: 462,
                height: 40,
                backgroundColor: "#F5F5F5",
                borderRadius: 4,
              }}
              value={jobDetails.licenseAge || ""}
              required
            >
              <option value="">Choose preferred years of licence</option>
              <option value="1">
                Atleast One Year Driving Licence
              </option>
              <option value="3">
                Atleast Three Years Driving Licence
              </option>
              <option value="5">
                Atleast Five Years Driving Licence
              </option>
              <option value="10">
                Atleast Ten Years Driving Licence
              </option>
            </select>
          </div>
          <div className="select__arrow1" style={{ right: 4 }} />
        </div>
      </div>
    </div>
  );
};

export default DrivingLicenceInput;
