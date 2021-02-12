import React from "react";
import PropTypes from "prop-types";
import JobcardProfile from "../../../components/Job/JobcardProfile";
import DriverSideBarFunction from "../../../components/Layout/MainSideBar/Driver/DriverSideBarFunction";

const CreateJobCardPage = (props) => {
  return (
    <div>
      <div>
        <DriverSideBarFunction />
      </div>
      <div>
        <JobcardProfile />
      </div>
    </div>
  );
};

CreateJobCardPage.propTypes = {};

export default CreateJobCardPage;
