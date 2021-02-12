import React from 'react';
import JobDetails from '../../components/Job/JobDetails';

const JobsPage = (props) => {

  const jobpostId = props.match.params.jobpostId

  return (
    <>
      <JobDetails jobpostId={jobpostId}/>
    </>
  );
};

export default JobsPage;