import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import map from "lodash/map";
import get from "lodash/get";
import compact from "lodash/compact";
import values from "lodash/values";
import {
  updateCategories,
  setExperienceBreakDown,
} from "../../../redux/actions/driver_actions/driver_profile_actions";
import { PostRoute } from "../../../Api/index";
import DriverExperience from "../../DriverProfile/DriverExperience/DriverExperience";
import {
  forkliftDriver,
  personalDriver,
  publicBusDriver,
  rideSharing,
  schoolBusDriver,
  truckDriver,
} from "./SelectValue";
import { getAuthConfig } from "../../../Util/ApiUtils";

const { Post, Get } = PostRoute();

const DriverCategory = ({
  userInfo,
  formStaticDataProp,
  handleChange,
  session_token,
}) => {
  const dispatch = useDispatch();

  const [userExperienceBreakdown, setUserExperienceBreakdown] = useState([]);

  function categorySubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    //special check for selected checkbox
    if (get(userInfo, "driverCategories").length === 0) {
      alert("select some categories");
      return;
    }

    //data object created for request with the help of lodash's get
    let data = {
      driverCategories: compact(get(userInfo, "driverCategories")),
    };

    //dispatching api action
    dispatch(updateCategories(session_token, data));
    alert("driver categories submitted");

    console.log("submit category driver");
  }

  async function experienceSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("clicked submit");
    let config = getAuthConfig(session_token);

    let date = new Date();

    // let body = {
    //   experienceBreakdown: userExperienceBreakdown
    // };

    // let experienceBreakDownReq = await Post(
    //   "/users/experience-breakdown",
    //   body,
    //   config
    // );
    //data object created for request with the help of lodash's get
    let data = {
      driverCategories: compact(get(userInfo, "driverCategories")),
    };

    //dispatching api action
    dispatch(updateCategories(session_token, data));

    dispatch(setExperienceBreakDown(userExperienceBreakdown));
  }

  const [showTruckDriver, setShowTruckDriver] = useState(false);
  const [showPersonalDriver, setShowPersonalDriver] = useState(false);
  const [showPublicBus, setShowPublicBus] = useState(false);
  const [showSchoolBusDriver, setShowSchoolBusDriver] = useState(false);
  const [showForkliftDriver, setShowForkliftDriver] = useState(false);
  const [showRideSharing, setShowRideSharing] = useState(false);

  // if (userInfo && formStaticDataProp) {
  //   console.log(
  //     "driver category user info ===================",
  //     get(userInfo, "driverCategories")
  //   );

  //   console.log("driver  formstatic ===================", formStaticDataProp);
  // }

  let staticDriverCategories =
    formStaticDataProp &&
    formStaticDataProp.driverCategory &&
    formStaticDataProp.driverCategory.map(
      (categoryObj) => categoryObj.category
    );

  let hasCommonCategories =
    formStaticDataProp &&
    formStaticDataProp.driverCategory &&
    get(userInfo, "driverCategories")
      ? staticDriverCategories.filter((value) =>
          get(userInfo, "driverCategories").includes(value)
        )
      : false;
  // console.log("filtered values === ", hasCommonCategories);

  useEffect(() => {
    setUserExperienceBreakdown(
      userInfo && userInfo.experienceBreakdown
        ? userInfo.experienceBreakdown
        : []
    );
  }, [userInfo]);

  console.log("usr experienceBreakDown ===========", userExperienceBreakdown);

  const handleClick = (e) => {
    if (e.target.value === "SCHOOL BUS DRIVER") {
      setShowSchoolBusDriver(!showSchoolBusDriver);
    } else if (e.target.value === "PUBLIC COMMUTER DRIVER") {
      setShowPublicBus(!showPublicBus);
    } else if (e.target.value === "PERSONAL DRIVER") {
      setShowPersonalDriver(!showPersonalDriver);
    } else if (e.target.value === "TRUCK DRIVER") {
      setShowTruckDriver(!showTruckDriver);
    } else if (e.target.value === "FORK LIFT DRIVER") {
      setShowForkliftDriver(!showForkliftDriver);
    } else if (e.target.value === "RIDE SHARING DRIVER") {
      setShowRideSharing(!showRideSharing);
    }
  };

  return (
    <div className="category-wrapper">
      <div className="driver__category section__style px-5 pb-3 pt-5 bg-white mt-3">
        <h5 className="form__heading">Driver Category (ies)</h5>
        <p style={{ color: "#969393" }}>
          Tick the categories you will like to be hired from. The more
          categories, the higher the odds of getting employed. Choose categories
          you truly are competent in.
        </p>
        <form className="row mt-5" onSubmit={categorySubmit}>
          {get(formStaticDataProp, "driverCategory") &&
            map(staticDriverCategories, (val, i) => (
              <div className="col-md-6 driverCheckbox" key={i}>
                <div className="form-check pb-3 pl-0">
                  <input
                    type="checkbox"
                    // onClick={handleClick}
                    value={`${val}` || ``}
                    className="form-check-input"
                    onChange={handleChange}
                    name={`driverCategories[${i}]`}
                    id={`Check${i}`}
                    checked={
                      userInfo
                        ? get(userInfo, "driverCategories").includes(`${val}`)
                        : false
                    }
                  />
                  <label className="form-check-label ml-2" for={`Check${i}`}>
                    &nbsp; {val}
                  </label>
                </div>
              </div>
            ))}
          <button type="submit" className="btn submitBtn ml-auto">
            Save
          </button>
        </form>
      </div>
      <div
        style={{ marginTop: "3.5rem" }}
        className="driver-experience col-md-12 px-0"
      >
        {
          // categoryValue &&
          hasCommonCategories && hasCommonCategories.length > 0 && (
            <div className="driver-experience section__style px-5 pb-3 pt-5 bg-white mt-3">
              <div className="">
                <h5 className="form__heading">
                  Breakdown on Experience on Categories Selected
                </h5>
                <p style={{ color: "#969393" }}>
                  Some employers want to further understand your driving
                  experience. For example, if you are a bus driver, they want to
                  know how long you have driven a bus and which type of bus.
                  Giving these details increases the chances of getting
                  shortlisted. The driver categories you selected above will be
                  shown here. Add the vehicle types and period worked for each
                  driver category. If you drove more than one vehicle type per
                  category, you can always add another.
                </p>
              </div>
              <div className="col-md-12">
                <form onSubmit={experienceSubmit}>
                  {get(formStaticDataProp, "driverCategory") &&
                    map(staticDriverCategories, (val, i) =>
                      userInfo &&
                      get(userInfo, "driverCategories").includes(`${val}`) ? (
                        <DriverExperience
                          key={i}
                          label={val}
                          handleChange={handleChange}
                          userInfo={userInfo}
                          setUserExperienceBreakdown={
                            setUserExperienceBreakdown
                          }
                          userExperienceBreakdown={userExperienceBreakdown}
                          dropdownOption={
                            formStaticDataProp.driverCategory.find(
                              (catObj) => catObj.category === val
                            ).vehicles
                          }
                        />
                      ) : null
                    )}
                  <div className="text-right col-md-12">
                    <button type="submit" className="btn submitBtn">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default DriverCategory;
