import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { searchDriver } from "../../redux/actions/driver_search_actions";
import HomeFilter from "./HomeFilter";

const SearchBox = () => {
  const [location, setLocation] = useState("");
  const [driverType, setDriverType] = useState("");
  const [category, setCategory] = useState("");
  const [extraFilter, setExtraFilter] = useState({});
  const history = useHistory();

  const onSearch = () => {
    history.push(
      `/driver-search-results?category=${category}&location=${location}&driverType=${driverType}&gender=${extraFilter.gender}&currency=${extraFilter.currency}&licenseAge=${extraFilter.licenseAge}&drivingExperience=${extraFilter.drivingExperience}&salaryMin=${extraFilter.salaryMin}&salaryMax=${extraFilter.salaryMax}`
    );
  };

  const onCategorySelectionChange = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
  };

  const onDriverTypeSelectionChange = (e) => {
    setDriverType(e.target.value);
  };

  const onSearchLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const onFilter = (xtraFilter) => {
    console.log("inside SearchBox onFilter", xtraFilter);
    setExtraFilter(xtraFilter);
  };

  return (
    <>
      <div className="blackbox m-auto">
        <div className="intro-lead-in text-white text-center mb-0 py-3">
          Find and Hire A Driver
        </div>
        <div className="padding50">
          <input type="hidden" id="verified_cnt" name="verified_cnt" />
          <form
            method="get"
            id="frmSearch"
            name="frmSearch"
            className="form-group"
            action="https://www.instadriver.co/driver/search"
          >
            <div className="select">
              <select
                id="cid"
                name="cid"
                className="form-control mb-3"
                value={category}
                onChange={onCategorySelectionChange}
              >
                <option value="">Select Category</option>
                <option value="PERSONAL DRIVER">Personal Driver</option>
                <option value="CAB">Cab Driver</option>
                <option value="COMMUTER DRIVER">
                  Public Commuter Driver (e.g. Bus, Ambulance)
                </option>
                <option value="RIDE SHARING DRIVER">
                  Ride-Sharing Driver e.g Uber, Taxify
                </option>
                <option value="SCHOOL BUS DRIVER">School Bus Driver</option>
                <option value="TRUCK DRIVER">Truck Driver</option>
                <option value="FORK LIFT DRIVER">Forklift Driver</option>
                <option value="ON-DEMAND DRIVER">On-Demand Driver</option>
              </select>
              <div className="select__arrow" />
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control select"
                id="loc"
                name="loc"
                value={location}
                onChange={onSearchLocationChange}
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  <svg
                    className="feather feather-map-pin sc-dnqmqq jxshSx"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx={12} cy={10} r={3} />
                  </svg>
                </span>
              </div>
            </div>
            <div className="select">
              <select
                id="sty"
                name="sty"
                className="form-control w-100 mb-3"
                onChange={onDriverTypeSelectionChange}
                value={driverType}
              >
                <option value="">Select Driver Type</option>
                <option value="ALL DRIVERS" selected="selected">
                  All Drivers
                </option>
                <option value="VERIFIED DRIVERS">Verified Drivers</option>
              </select>
              <div className="select__arrow" />
            </div>
            <div id="sr_msg_list" role="alert" />
            <div className="row padding12">
              <div className="col-lg-2 col-2 d-flex">
                <HomeFilter onFilter={onFilter} />
              </div>
              <div className="col-lg-10 col-10">
                <a
                  className="btn btn-primary btn-xl js-scroll-trigger width100"
                  style={{ backgroundColor: "#fed136", borderColor: "#fed136" }}
                  onClick={onSearch}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      color: "white",
                      fontFamily: "Rubik",
                      fontSize: "18px",
                      fontWeight: "400",
                    }}
                  >
                    Search
                  </span>
                </a>
              </div>
              <div role="alert" id="sr_msg_nolist" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
