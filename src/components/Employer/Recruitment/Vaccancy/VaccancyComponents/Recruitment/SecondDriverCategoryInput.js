import React from "react";

const SecondDriverCategoryInput = ({
  handleChange,
  jobDetails,
  formDataStatic,
}) => {
  return (
    <div>
      <div
        className="form-group col-md-12"
        id="drivercat2"
        style={{ marginLeft: "-15px", maxWidth: 462 }}
      >
        <label htmlFor="gender" className="normal-text">
          Second driver category (Optional)
        </label>
        <label htmlFor="gender" className="graycolor text-left normal-text">
          You may be hiring for category A but a driver with Category B
          experience can be added competence. Select the category you picked
          above if you still want to go with one Category
        </label>
        <div className="select mb-0">
          <div className="input-container">
            <select
              className="form-control normal-text"
              id="mySelect1"
              onchange="myFunction1();showDiv('hidden_div', this); hideDiv('teststuff',this)"
              name="driver_category2"
              onChange={handleChange}
              style={{
                maxWidth: 462,
                height: 40,
                borderRadius: 4,
                backgroundColor: "#F5F5F5",
              }}
              value={jobDetails.driver_category2 || ""}
            >
              <option value="">Choose Driver Category</option>
              {formDataStatic.driverCategory &&
                formDataStatic.driverCategory.map((Dcat, i) => (
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

export default SecondDriverCategoryInput;
