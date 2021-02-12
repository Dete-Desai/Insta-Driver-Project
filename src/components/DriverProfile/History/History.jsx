import React from "react";
import { useDispatch } from "react-redux";
import get from "lodash/get";
import set from "lodash/set";
import { updateRideSharingHistory } from "../../../redux/actions/driver_actions/driver_profile_actions";
import { PostRoute } from "../../../Api/index";
const { Post, Get } = PostRoute();

const History = ({
  userInfo,
  handleChange,
  formStaticDataProp,
  session_token,
}) => {
  // console.log("userinfo", userInfo);
  const dispatch = useDispatch();

  function rideHailingHistorySubmit(e) {
    e.preventDefault();

    //data object created for request with the help of lodash's get
    let data = {
      numberofPartnersWorkedfor: parseInt(
        get(userInfo, "previousHistory.numberofPartnersWorkedfor"),
        10
      ),
      timeworkedwithLastPartner: parseInt(
        get(userInfo, "previousHistory.timeworkedwithLastPartner"),
        10
      ),
      reasontoLeaveLastPartner: get(
        userInfo,
        "previousHistory.reasontoLeaveLastPartner"
      ),
      timeworkedwithSecondLastPartner: parseInt(
        get(userInfo, "previousHistory.timeworkedwithSecondLastPartner"),
        10
      ),
      reasontoLeaveSecondLastPartner: get(
        userInfo,
        "previousHistory.reasontoLeaveSecondLastPartner"
      ),
    };

    dispatch(updateRideSharingHistory(session_token, data));
    alert("previous history info submitted");
  }
  let rideHailingChecked = get(userInfo, "driverCategories")
    ? get(userInfo, "driverCategories").includes("RIDE SHARING DRIVER")
    : false;

  return (
    rideHailingChecked && (
      <div className="driver__history section__style px-5 pb-3 pt-5 bg-white mt-3">
        <h5 className="form__heading">
          Your Previous Employment History For Ride-Sharing Taxis
        </h5>
        <p style={{ color: "#969393" }}>
          Partner is a car-owner, cars or management company for ride-hailing
          cars. In other words, an employer is someone or a company that has
          given you a car to work for in the ride-hailing taxi business.
        </p>
        <form className="row mt-5" onSubmit={rideHailingHistorySubmit}>
          <div className="col-md-11">
            <div className="form-group row align-items-center mb-2">
              <label
                className="col-md-6 text-left label__style p-0"
                for="partnerName"
              >
                How many partners have you worked for?
              </label>
              <div className="col-md-6 w-75 p-0">
                <select
                  style={{ maxWidth: "75%" }}
                  className="form-control inputIcon-none"
                  id="partnerNumber"
                  name="previousHistory.numberofPartnersWorkedfor"
                  value={
                    get(
                      userInfo,
                      "previousHistory.numberofPartnersWorkedfor"
                    ) || ""
                  }
                  onChange={handleChange}
                  type="number"
                  required
                  min="0"
                >
                  <option value={""}>Select</option>
                  <option value="0">No Employment History</option>
                  <option value="1">1 Partner</option>
                  <option value="2">2 Partners</option>
                  <option value="3">3 Partners</option>
                  <option value="4">4 Partners</option>
                  <option value="5">5 Partners</option>
                  <option value="6">6 Partners</option>
                  <option value="7">7 Partners</option>
                  <option value="8">8 Partners</option>
                  <option value="9">9 Partners</option>
                  <option value="10">10 Partners</option>
                  <option value="11">11 Partners</option>
                  <option value="12">12 Partners</option>
                  <option value="13">13 Partners</option>
                  <option value="14">14 Partners</option>
                  <option value="15">15 Partners</option>
                  <option value="16">16 Partners</option>
                  <option value="17">17 Partners</option>
                  <option value="18">18 Partners</option>
                  <option value="19">19 Partners</option>
                  <option value="20">20 Partners</option>
                  <option value="21">More than 20 Partners</option>
                </select>
              </div>
            </div>
            <hr style={{ marginRight: "103px" }} />
            <div className="form-group row align-items-center pt-3">
              <label
                className="col-md-6 text-left label__style p-0"
                for="partnerWork"
              >
                How long did you work with the last partner?
              </label>
              <div className="col-md-6 p-0">
                <input
                  type="number"
                  className="form-control inputIcon-none w-75"
                  name="previousHistory.timeworkedwithLastPartner"
                  id="partnerWork"
                  value={
                    get(
                      userInfo,
                      "previousHistory.timeworkedwithLastPartner"
                    ) || ""
                  }
                  onChange={handleChange}
                  required
                  min="0"
                />
              </div>
            </div>
            <div className="form-group row pt-3">
              <label
                className="col-md-6 text-left label__style p-0"
                for="partnerName"
              >
                Why did you leave your last partner?
              </label>
              <div className="col-md-6 p-0 m-auto">
                <div style={{ width: "100%" }} className="text-right">
                  <textarea
                    className="textAreaWidth"
                    style={{ width: "100%", height: "130px" }}
                    maxlength="150"
                    placeholder="(Min. of 20 characters & max. of 150 characters)"
                    name="previousHistory.reasontoLeaveLastPartner"
                    value={
                      get(
                        userInfo,
                        "previousHistory.reasontoLeaveLastPartner"
                      ) || ""
                    }
                    onChange={handleChange}
                    id="textAreaBox"
                    required
                  ></textarea>
                </div>
                <p style={{ color: "#969393" }} className="text-right p-0">
                  0/150
                </p>
              </div>
            </div>
            <div className="form-group row align-items-center pt-2">
              <label
                className="col-md-6 text-left label__style p-0"
                for="2ndPartner"
              >
                How long did you work with the 2nd last partner?
              </label>
              <div className="col-md-6 p-0">
                <input
                  type="number"
                  className="form-control inputIcon-none w-75"
                  name="previousHistory.timeworkedwithSecondLastPartner"
                  id="partnerWork"
                  value={
                    get(
                      userInfo,
                      "previousHistory.timeworkedwithSecondLastPartner"
                    ) || ""
                  }
                  onChange={handleChange}
                  required
                  min="0"
                />
              </div>
            </div>
            <div className="form-group row pt-3">
              <label
                className="col-md-6 text-left label__style p-0"
                for="2ndLastPartner"
              >
                Why did you leave your 2nd last partner?
              </label>
              <div className="col-md-6 p-0 m-auto">
                <div style={{ width: "100%" }} className="text-right">
                  <textarea
                    className="textAreaWidth"
                    style={{ width: "100%", height: "130px" }}
                    maxlength="150"
                    placeholder="(Min. of 20 characters & max. of 150 characters)"
                    id="2ndLastPartner"
                    name="previousHistory.reasontoLeaveSecondLastPartner"
                    value={
                      get(
                        userInfo,
                        "previousHistory.reasontoLeaveSecondLastPartner"
                      ) || ""
                    }
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <p style={{ color: "#969393" }} className="text-right p-0">
                  0/150
                </p>
              </div>
            </div>
          </div>
          <div className="text-right col-md-12">
            <button type="submit" className="btn submitBtn">
              Save
            </button>
          </div>
        </form>
      </div>
    )
  );
};

export default History;
