import React from "react";
import { useDispatch } from "react-redux";
import get from "lodash/get";
import { PostRoute } from "../../../Api/index";
import { updateDailyTarget } from "../../../redux/actions/driver_actions/driver_profile_actions";
const { Post, Get } = PostRoute();

const DailyTarget = ({
  userInfo,
  handleChange,
  formStaticDataProp,
  session_token,
}) => {
  const dispatch = useDispatch();

  function handleDailyTargetSubmit(e) {
    e.preventDefault();

    //data object created for request with the help of lodash's get
    let data = {
      MinimumPay: parseInt(get(userInfo, "dailyTargetPayout.MinimumPay"), 10),
      MaximumPay: parseInt(get(userInfo, "dailyTargetPayout.MaximumPay"), 10),
    };

    //dispatch api
    dispatch(updateDailyTarget(session_token, data));
    alert("Daily target info submitted");
  }
  let rideHailingChecked = get(userInfo,"driverCategories") ?  get(userInfo,"driverCategories").includes("RIDE SHARING DRIVER") : false

  return (
    rideHailingChecked && 
    <div className="daily__target section__style pr-2 pb-3 pt-5 bg-white mt-3">
      <div className="col-md-10 m-auto px-5">
        <h5 className="form__heading">
          State The Daily Target Payout For Ride-hailing Taxis
        </h5>
        <div className="col-md-12 px-4 py-2 currencyInfo my-4">
          <p style={{ color: "#969393" }}>
            The Daily Target Payout is the daily amount a driver submits to the
            employer/partner. State the min and max amount you will be fine
            with.
          </p>
        </div>
      </div>
      <form className="col-md-12 mt-4" onSubmit={handleDailyTargetSubmit}>
        <div className="row">
          <div className="col-md-10 m-auto px-5">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group row align-items-center">
                  <label
                    className="col-sm-3 label__style text-left"
                    for="minimum"
                  >
                    Minimum
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control inputIcon-none w-75"
                      value={
                        get(userInfo, "dailyTargetPayout.MinimumPay") || ""
                      }
                      onChange={handleChange}
                      name="dailyTargetPayout.MinimumPay"
                      id="minimum"
                      required
                      min="0"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row align-items-center">
                  <label
                    className="col-sm-3 label__style text-left"
                    for="maximum"
                  >
                    Maximum
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control inputIcon-none w-75"
                      value={
                        get(userInfo, "dailyTargetPayout.MaximumPay") || ""
                      }
                      onChange={handleChange}
                      name="dailyTargetPayout.MaximumPay"
                      id="maximum"
                      required
                      min="0"
                    />
                  </div>
                </div>
              </div>
            </div>
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

export default DailyTarget;
