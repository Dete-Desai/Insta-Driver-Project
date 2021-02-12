import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import get from "lodash/get";
import set from "lodash/set";
import map from "lodash/map";
import { updateOtherDrivingHistory } from "../../../redux/actions/driver_actions/driver_profile_actions";
import { getUserInfo, PostRoute } from "../../../Api/index";
const { Post, Get } = PostRoute();

const PreviousHistory = ({
  userInfo,
  handleChange,
  formStaticDataProp,
  session_token,
}) => {
  const dispatch = useDispatch();
  const [otherExperienceCheck, setOtherExperienceCheck] = useState(false);

  let staticDriverCategories =
    formStaticDataProp &&
    formStaticDataProp.driverCategory &&
    formStaticDataProp.driverCategory.map(
      (categoryObj) => categoryObj.category
    );

  // useEffect(() => {

  //   setOtherExperienceCheck(get(userInfo,"hasOtherExperience")? true:false)

  // }, [userInfo])

  function otherDrivingHistorySubmit(e) {
    e.preventDefault();
    let data = {
      employerOne: {
        companyName:
          get(userInfo, "drivingHistory.employerOne.companyName") || "",
        category: get(userInfo, "drivingHistory.employerOne.category") || "",
        periodWorked: Number(
          get(userInfo, "drivingHistory.employerOne.periodWorked")
        ),
      },
      employerTwo: {
        companyName:
          get(userInfo, "drivingHistory.employerTwo.companyName") || "",
        category: get(userInfo, "drivingHistory.employerTwo.category") || "",
        periodWorked: Number(
          get(userInfo, "drivingHistory.employerTwo.periodWorked")
        ),
      },
    };
    dispatch(
      updateOtherDrivingHistory(
        session_token,
        data,
        userInfo.hasEmploymentHistory
      )
    );
    alert("other driving history info submitted");
  }

  return (
    userInfo && (
      <div className=" PreviousHistory section__style pb-3 pt-5 bg-white mt-3">
        <div className="col-md-11 m-auto">
          <h5 className="form__heading">
            Two Previous Driving History Other Than Ride-hailing Employment
          </h5>
          <div className="col-md-12 px-4 py-2 currencyInfo my-4">
            <p style={{ color: "#969393" }}>
              This is important if , besides ride-hailing driving, you are also
              considering getting hired in other categories such as personal
              driver, school bus driver, public commuter driver, truck driver
              and forklift driver.
            </p>
          </div>
          <RadioButtonDiv>
            <h6>
              Do you have experience working as a driver in other driving jobs
              apart from ride-hailing employment?
            </h6>
            <div id="RadioStyle" className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="hasEmploymentHistory"
                id="hasOtherExperienceCheck1"
                // onClick={()=>{console.log("yes check ");setOtherExperienceCheck(true)}}
                onChange={handleChange}
                value={true}
                checked={userInfo.hasEmploymentHistory === true ? true : false}
              />
              <label
                className="form-check-label ml-3"
                for="hasOtherExperienceCheck1"
              >
                Yes
              </label>
            </div>
            <div id="RadioStyle" className="form-check form-check-inline  ml-4">
              <input
                className="form-check-input"
                type="radio"
                name="hasEmploymentHistory"
                id="hasOtherExperienceCheck2"
                // onClick={()=>{console.log("nocheck ");setOtherExperienceCheck(false)}}
                onChange={handleChange}
                value={false}
                checked={userInfo.hasEmploymentHistory === false ? true : false}
              />
              <label
                className="form-check-label ml-3"
                for="hasOtherExperienceCheck2"
              >
                No
              </label>
            </div>
          </RadioButtonDiv>
        </div>
        <form className="col-md-12 mt-4" onSubmit={otherDrivingHistorySubmit}>
          <div className="row">
            {userInfo.hasEmploymentHistory && (
              <div className="col-md-11 m-auto">
                <div className="row">
                  <div className="col-md-6 mb-5">
                    <div className="border">
                      <h6
                        style={{ background: "#F8F8F8" }}
                        className="form__heading2 text-center p-3"
                      >
                        Employer One
                      </h6>
                      <div className="p-3">
                        <div className="form-group row align-items-center">
                          <label
                            className="col-sm-4 col-md-12 col-lg-12 text-left label__style col-xl-4 pl-2"
                            for="name"
                          >
                            Company/Name
                          </label>
                          <div className="col-sm-8 col-md-12 col-lg-12 col-xl-8 pl-2">
                            <input
                              type="text"
                              className="form-control inputIcon-none"
                              name="drivingHistory.employerOne.companyName"
                              id="name"
                              required
                              value={
                                get(
                                  userInfo,
                                  "drivingHistory.employerOne.companyName"
                                ) || ""
                              }
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="form-group row align-items-center">
                          <label
                            className="col-sm-4 col-md-12 col-lg-12 text-left label__style col-xl-4 pl-2 p-0"
                            for="category"
                          >
                            Category
                          </label>
                          <div className="col-sm-8 col-md-12 col-lg-12 col-xl-8 pl-2">
                            <select
                              className="form-control inputIcon-none"
                              required
                              id="driving_categoryOne"
                              name="drivingHistory.employerOne.category"
                              onChange={handleChange}
                              value={
                                get(
                                  userInfo,
                                  "drivingHistory.employerOne.category"
                                ) || ""
                              }
                            >
                              <option value="">Select</option>
                              {get(formStaticDataProp, "driverCategory") &&
                                map(staticDriverCategories, (category, i) => (
                                  <option key={i} value={category}>
                                    {category}
                                  </option>
                                ))}
                              {/* <option value="1">Personal Driver</option>
                          <option value="2">Public Commuter Driver (e.g. Bus, Ambulance)</option>
                          <option value="3">Ride-Sharing Driver e.g Uber, Taxify</option>
                          <option value="4">School Bus Driver</option>
                          <option value="5">Truck Driver</option>
                          <option value="6">Forklift Driver</option>
                          <option value="7">On-Demand Driver</option> */}
                            </select>
                          </div>
                        </div>
                        <div className="form-group row align-items-center">
                          <label
                            className="col-sm-4 col-md-12 col-lg-12 text-left label__style col-xl-4 pl-2 p-0"
                            for="period"
                          >
                            Period Worked
                          </label>
                          <div className="col-sm-8 col-md-12 col-lg-12 col-xl-8 pl-2">
                            <input
                              type="number"
                              required
                              pattern="[0-9]"
                              className="form-control inputIcon-none"
                              name="drivingHistory.employerOne.periodWorked"
                              id="period"
                              value={
                                String(
                                  get(
                                    userInfo,
                                    "drivingHistory.employerOne.periodWorked"
                                  )
                                ) || ""
                              }
                              min="0"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="border">
                      <h6
                        style={{ background: "#F8F8F8" }}
                        className="form__heading2 text-center p-3"
                      >
                        Employer Two{" "}
                        <span style={{ color: "gray", fontWeight: "lighter" }}>
                          (optional)
                        </span>
                      </h6>
                      <div className="p-3">
                        <div className="form-group row align-items-center">
                          <label
                            className="col-sm-4 col-md-12 col-lg-12 text-left label__style col-xl-4 pl-2 p-0"
                            for="name2"
                          >
                            Company/Name
                          </label>
                          <div className="col-sm-8 col-md-12 col-lg-12 col-xl-8 pl-2">
                            <input
                              type="text"
                              className="form-control inputIcon-none"
                              name="drivingHistory.employerTwo.companyName"
                              id="name2"
                              onChange={handleChange}
                              value={
                                get(
                                  userInfo,
                                  "drivingHistory.employerTwo.companyName"
                                ) || ""
                              }
                            />
                          </div>
                        </div>
                        <div className="form-group row align-items-center">
                          <label
                            className="col-sm-4 col-md-12 col-lg-12 text-left label__style col-xl-4 pl-2 p-0"
                            for="category2"
                          >
                            Category
                          </label>
                          <div className="col-sm-8 col-md-12 col-lg-12 col-xl-8 pl-2">
                            <select
                              className="form-control inputIcon-none"
                              id="driving_categoryTwo"
                              name="drivingHistory.employerTwo.category"
                              onChange={handleChange}
                              value={
                                get(
                                  userInfo,
                                  "drivingHistory.employerTwo.category"
                                ) || ""
                              }
                            >
                              <option value="">Select</option>
                              {get(formStaticDataProp, "driverCategory") &&
                                map(staticDriverCategories, (category, i) => (
                                  <option key={i} value={category}>
                                    {category}
                                  </option>
                                ))}
                              {/* <option value="1">Personal Driver</option>
                          <option value="2">Public Commuter Driver (e.g. Bus, Ambulance)</option>
                          <option value="3">Ride-Sharing Driver e.g Uber, Taxify</option>
                          <option value="4">School Bus Driver</option>
                          <option value="5">Truck Driver</option>
                          <option value="6">Forklift Driver</option>
                          <option value="7">On-Demand Driver</option> */}
                            </select>
                          </div>
                        </div>
                        <div className="form-group row align-items-center">
                          <label
                            className="col-sm-4 col-md-12 col-lg-12 text-left label__style col-xl-4 pl-2 p-0"
                            for="period2"
                          >
                            Period Worked
                          </label>
                          <div className="col-sm-8 col-md-12 col-lg-12 col-xl-8 pl-2">
                            <input
                              type="number"
                              pattern="[0-9]"
                              className="form-control inputIcon-none"
                              name="drivingHistory.employerTwo.periodWorked"
                              value={
                                String(
                                  get(
                                    userInfo,
                                    "drivingHistory.employerTwo.periodWorked"
                                  )
                                ) || ""
                              }
                              min="0"
                              onChange={handleChange}
                              id="period2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="text-right col-md-12 mr-2 mb-2 mt-5">
            <button type="submit" className="btn submitBtn">
              Save
            </button>
          </div>
        </form>
      </div>
    )
  );
};

export default PreviousHistory;

//custom styled components
const RadioButtonDiv = styled.div``;
