import React from "react";
import JobsPostContainer from "./JobsPostContainer";
import PropTypes from "prop-types";

const AvailableJobs = ({ availableJobs }) => {
  return (
    <div className="row">
      {availableJobs &&
        availableJobs.map((job, index) => (
          <JobsPostContainer key={index} jobItem={job} />
        ))}
    </div>
  );
};

AvailableJobs.propTypes = {
  availableJobs: PropTypes.array.isRequired,
};

export default AvailableJobs;
