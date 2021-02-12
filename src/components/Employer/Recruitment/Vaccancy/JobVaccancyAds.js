import React from "react";
import JobsPostContainer from "../../Profile/Jobs/AvailableJobs/";
import { useHistory } from "react-router-dom";
import DriverSideBarFunction from "../../../Layout/MainSideBar/Driver/DriverSideBarFunction";

const JobVaccancyAds = () => {
  const history = useHistory();

  const directBack = () => {
    let route = "driver-profile";
    history.push(route);
  };

  return (
    <div className="row">
      <div className="mainBody__sidebar col-md-2 col-lg-2">
        <DriverSideBarFunction />
      </div>
      <main
        role="main"
        className="col-md-10 ml-sm-auto col-lg-10 px-4 padding_left_10 padding_right_40"
      >
        <div className="col-md-12 p-0">
          <br />
          <div className="row">
            <div className="col-md-10 padding_left_70 padding_right_2">
              <button
                className="yellowbutton yellowbutton1"
                onClick={directBack}
              >
                <i className="fa fa-arrow-left"></i> &nbsp; Back To Your Profile
              </button>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-10 padding_left_1 padding_right_1"
              style={{ left: "100px" }}
            >
              <JobsPostContainer />
              <JobsPostContainer />
              <JobsPostContainer />
              <JobsPostContainer />
              <JobsPostContainer />
              <JobsPostContainer />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JobVaccancyAds;
