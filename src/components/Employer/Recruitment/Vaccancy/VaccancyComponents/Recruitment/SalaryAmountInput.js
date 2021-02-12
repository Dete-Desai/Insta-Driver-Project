import React from "react";
import FilterSalaryInput from "../../../../../Job/FilterSalaryInput";

const SalaryAmountInput = ({
  handleChange,
  handleSalaryFocus,
  checkLocation,
  jobDetails,
  currency,
}) => {
  return (
    <div>
      <div
        className="form-row mt-3"
        style={{ maxWidth: 462, marginLeft: "-15px" }}
      >
        <div className="form-group col-md-6">
          <label className="normal-text" htmlFor="minimum_daily_target_payout">
            Minimum Salary
          </label>
          <FilterSalaryInput
            id="minimum_daily_target_payout"
            name="min"
            onChange={handleChange}
            required
            value={jobDetails.min || ""}
            checkLocation={handleSalaryFocus}
            disable={checkLocation}
            currency={currency}
          />
          {/* <input
            type="number"
            className="form-control"
            id="minimum_daily_target_payout"
            name="min"
            min="0"
            pattern="[0-9]"
            onChange={handleChange}
            style={{ maxWidth: 200 }}
            onfocus="myFunction4()"
            required
            value={jobDetails.min || ""}
          /> */}
        </div>
        <div className="form-group col-md-6">
          <label className="normal-text" htmlFor="maximum_daily_target_payout">
            Maximum Salary
          </label>
          <FilterSalaryInput
            id="aximum_daily_target_payout"
            name="max"
            onChange={handleChange}
            required
            value={jobDetails.max || ""}
            checkLocation={handleSalaryFocus}
            disable={checkLocation}
            currency={currency}
          />
          {/* <input
            type="number"
            className="form-control"
            id="maximum_daily_target_payout"
            name="max"
            pattern="[0-9]"
            min="0"
            onChange={handleChange}
            required
            value={jobDetails.max || ""}
            style={{ maxWidth: 200 }}
          /> */}
        </div>
      </div>
      {checkLocation && (
        <p
          style={{
            color: "red",
            textAlign: "left",
            margin: "10px 0px 0px 0px",
            padding: "0px",
          }}
        >
          Please select location to get currency for your range.
        </p>
      )}
    </div>
  );
};

export default SalaryAmountInput;
