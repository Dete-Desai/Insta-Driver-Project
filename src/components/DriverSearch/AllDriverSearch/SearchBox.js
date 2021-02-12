import React, { useState } from "react";
import HomeFilter from "../../Home/HomeFilter";
import { useHistory } from "react-router-dom";

const SearchBox = () => {
  const [category, setCategory] = useState("");
  const [driverType, setDriverType] = useState("");
  const [location, setLocation] = useState("");
  const history = useHistory();

  const onCategorySelectionChange = (e) => {
    setCategory(e.target.value);
  };

  const onDriverTypeSelectionChange = (e) => {
    setDriverType(e.target.value);
  };

  const onSearchLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const onSearch = (e) => {
    history.push(
      `/driver-search-results?category=${category}&location=${location}&driverType=${driverType}`
    );
  };

  return (
    <>
      <div className="blackbox">
        <div className="intro-lead-in text-white text-center">
          Find and Hire A Driver
        </div>
        <div className="padding50">
          <input type="hidden" id="verified_cnt" name="verified_cnt" />
          <form method="get" id="frmSearch" name="frmSearch">
            <div className="select">
              <select
                id="cid"
                name="cid"
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
                placeholder="Enter a location"
                autocomplete="off"
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
              <div className="col-lg-2 col-2 d-flex align-items-center">
                <HomeFilter />
              </div>
              <div className="col-lg-10 col-10">
                <button
                  type="button"
                  className="btn btn-primary btn-xl js-scroll-trigger width100"
                  onClick={onSearch}
                  style={{ backgroundColor: "#fed136", borderColor: "#fed136" }}
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
                </button>
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
