import React from "react";

const CustomMessageInput = ({ handleChange, jobDetails }) => {

  return (
    <div>
      <h5 className="display-12 template-message header-text">
        Type your custom message here
      </h5>
      <div className="cus-space" />
      <div
        className="form-group col-md-12"
        id="drivercat2"
        style={{ marginLeft: "-15px", maxWidth: 462 }}
      >
        <textarea
          id="myTextarea"
          name="description"
          value={jobDetails.description || ""}
          rows={5}
          cols={70}
          minLength={100}
          maxLength={200}
          className="form-control"
          onkeyup="countChars(this);"
          placeholder="(Minimum of 100 characters & maximum of 200 characters)"
          data-mirror
          required
          defaultValue={""}
          onChange={handleChange}
        />
        <div className="container" style={{ maxWidth: 462 }}>
          <div className="row">
            <div className="col-sm" style={{ visibility: "hidden" }}>
              One
            </div>
            <div className="col-sm" style={{ visibility: "hidden" }}>
              One
            </div>
            <div className="col-sm d-flex align-items-end custom-charnum">
              <p id="charNum">0 /200</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomMessageInput;
