import React from "react";
import { useDispatch } from "react-redux";
import get from "lodash/get";
import { updatePreferences } from "../../../redux/actions/driver_actions/driver_profile_actions";

const Preferences = ({
  userInfo,
  handleChange,
  formStaticDataProp,
  session_token,
}) => {
  const dispatch = useDispatch();

  function handlePreferenceSubmit(e) {
    e.preventDefault();

    //data object created for request with the help of lodash's get
    let data = {
      preferences: get(userInfo, "preferences"),
    };

    dispatch(updatePreferences(session_token, data));
    alert("Preference info submitted");
  }
  let rideHailingChecked = get(userInfo,"driverCategories") ?  get(userInfo,"driverCategories").includes("RIDE SHARING DRIVER") : false

  return (
    rideHailingChecked && 
    <div className="preferences section__style pr-2 pb-3 pt-5 bg-white mt-3">
      <div className="col-md-10 m-auto px-5">
        <h5 className="form__heading">
          Your Preferences or Special Requests if you get hired in the
          ride-hailing sector
        </h5>
        <div className="col-md-12 px-4 py-2 currencyInfo my-4">
          <p style={{ color: "#969393" }}>
            Tell us anything about your preferences, tastes etc. Something like
            type of car you prefer, work-period or day-offs, or anything that
            concerns you. To increase chances of getting hired, don't give
            narrow choices, strict or unreasonable requests. Just try to be
            general and easy-going.
          </p>
        </div>
      </div>
      <form className="col-md-12 mt-4" onSubmit={handlePreferenceSubmit}>
        <div className="row">
          <div style={{ width: "490px" }} className="col-md-10 m-auto px-5">
            <textarea
              style={{ width: "100%", height: "130px" }}
              maxlength="150"
              placeholder="(Min. of 20 characters & max. of 150 characters)"
              name="preferences"
              value={get(userInfo, "preferences") || ""}
              onChange={handleChange}
              id="textAreaBox"
              required
            ></textarea>
            <p
              style={{ color: "#969393", width: "100%" }}
              className="text-right p-0"
            >
              0/150
            </p>
          </div>
          <div className="text-right col-md-12 mr-2 mb-2">
            <button type="submit" className="btn submitBtn">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Preferences;
