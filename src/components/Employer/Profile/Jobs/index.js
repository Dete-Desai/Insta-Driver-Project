import React from "react";
import AvailableJobs from "./AvailableJobs";
import NoJobs from "./NoJobs";
import PropTypes from 'prop-types';

const JobsComponent = ({ availableJobs }) => {
  return (
    <>
      {availableJobs && availableJobs.length>0 ? (
        <AvailableJobs availableJobs={availableJobs} />
        ) : (
        <NoJobs />
      )}
    </>
  );
};
JobsComponent.propTypes={
  availableJobs: PropTypes.array.isRequired,
}
export default JobsComponent;
