import React from "react";

const FirstDriverCategoryInput = ({
  handleChange,
  jobDetails,
  formDataStatic,
}) => {
  return (
    <div>
      <p className="header-text" style={{ fontWeight: 500 }}>
        Add 1 or 2 driver categories to apply for the Job
      </p>
      <div
        className="form-group col-md-12"
        id="drivercat2"
        style={{ marginLeft: "-15px", maxWidth: 462 }}
      >
        <label htmlFor="mySelect" className="normal-text">
          Add first driver category
        </label>
        <div className="select mb-0">
          <div className="input-container">
            <select
              className="form-control normal-text"
              id="mySelect"
              onchange="myFunction()"
              name="driver_category1"
              style={{
                maxWidth: 462,
                height: 40,
                borderRadius: 4,
                backgroundColor: "#F5F5F5",
              }}
              required
              value={jobDetails.driver_category1 || ""}
              onChange={handleChange}
            >
              <option value="">Choose Driver Category</option>

              {formDataStatic.driverCategory && formDataStatic.driverCategory.map((Dcat, i) => (
                <option key={i} value={Dcat.category}>
                  {Dcat.category}
                </option>
              ))}
              {/* <option value="Personal Driver">Personal Driver</option>
              <option value="Public Commuter Driver">
                Public Commuter Driver
              </option>
              <option value="Ride Sharing Driver">Ride Sharing Driver</option>
              <option value="School Bus">School Bus</option>
              <option value="Truck Driver">Truck Driver</option>
              <option value="ForkLift Driver">ForkLift Driver</option>
              <option value="On Demand Driver">On Demand Driver</option> */}
            </select>
          </div>
          <div className="select__arrow1" style={{ right: 4 }} />
        </div>
      </div>
    </div>
  );
};

export default FirstDriverCategoryInput;
