import React from "react";

const DrivingExperienceInput = ({ handleChange,jobDetails }) => {
  return (
    <div>
      <p className="normal-text" style={{ fontWeight: 500 }}>
        Your Preferred Driving experience
      </p>
      <div
        className="form-group col-md-12"
        style={{ marginLeft: "-15px", maxWidth: 462 }}
      >
        <div className="select mb-0">
          <div className="input-container">
            <select
              className="form-control normal-text"
              id="driver_experience"
              onchange="myFunction2()"
              name="experience"
              onChange={handleChange}
              style={{
                maxWidth: 462,
                height: 40,
                backgroundColor: "#F5F5F5",
                borderRadius: 4,
              }}
              value={jobDetails.experience || ""}
              required
            >
              <option value="">Choose preferred driving experience</option>
              <option value="1">
                Atleast One Year Driving Experience
              </option>
              <option value="3">
                Atleast Three Years Driving Experience
              </option>
              <option value="5">
                Atleast Five Years Driving Experience
              </option>
              <option value="10">
                Atleast Ten Years Driving Experience
              </option>
            </select>
          </div>
          <div className="select__arrow1" style={{ right: 4 }} />
        </div>
      </div>
    </div>
  );
};

export default DrivingExperienceInput;
