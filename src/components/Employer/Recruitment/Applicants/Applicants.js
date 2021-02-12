import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import EmployerSideBarFunction from "../../../Layout/MainSideBar/Employer/EmployerSideBarFunction";
import { useDispatch, useSelector } from "react-redux";
import { employerGetJobPosts } from "../../../../redux/actions/employer_actions/job_post_actions";

const Applicants = (props) => {
  const dispatch = useDispatch();
  const [applicants, setApplicants] = useState([]);
  const jobs = useSelector((state) => state.employer_reducers.job_posts);
  const token = useSelector(
    (state) => state.user_reducers.user_credentials.token
  );

  console.log("inside applied applicants");
  console.log(jobs);

  useEffect(() => {
    dispatch(employerGetJobPosts(token));
    setApplicants(getApplicants(jobs));
  }, [dispatch, token, jobs]);

  const getApplicants = (jobs) => {
    var applicants = [];
    jobs.forEach((job) => (applicants = applicants.concat(job.applied)));
    console.log("inside get applicants");
    console.log(applicants);
    return applicants;
  };

  const getApplied = () => {
    return applicants.length;
  };

  const getRejected = () => {
    var applicants = [];
    jobs.forEach((job) => (applicants = applicants.concat(job.rejected)));
    return applicants.length;
  };

  const getHired = () => {
    var applicants = [];
    jobs.forEach((job) => (applicants = applicants.concat(job.hired)));
    return applicants.length;
  };

  const getShortlisted = () => {
    var applicants = [];
    jobs.forEach((job) => (applicants = applicants.concat(job.shortlisted)));
    return applicants.length;
  };

  const getShortlistedPercent = () => {
    return Math.abs((getShortlisted() / getAllApplicantsCount()) * 100);
  };
  const getRejectedPercent = () => {
    return Math.abs((getRejected() / getAllApplicantsCount()) * 100);
  };

  const getAppliedPercent = () => {
    return Math.abs((getApplied() / getAllApplicantsCount()) * 100);
  };
  const getHiredPercent = () => {
    return Math.abs((getHired() / getAllApplicantsCount()) * 100);
  };
  const onAllApplicants = (e) => {
    setApplicants(getApplicants(jobs));
  };
  const getAll = () => {
    var applicants = [];
    jobs.forEach(
      (job) =>
      (applicants = applicants.concat(
        job.hired,
        job.applied,
        job.rejected,
        job.shortlisted
      ))
    );
    return applicants;
  };

  const getAllApplicantsCount = () => {
    return getAll(jobs).length;
  };

  const onDrivingJobs = (e) => {
    var drivingJobs = jobs.filter(
      (job) => job.adType === "DRIVING JOBS" || job.adType === "Driving Jobs"
    );
    setApplicants(getApplicants(drivingJobs));
  };
  const onNonDrivingJobs = (e) => {
    var nonDrivingJobs = jobs.filter(
      (job) => !(job.adType === "DRIVING JOBS" || job.adType === "Driving Jobs")
    );
    setApplicants(getApplicants(nonDrivingJobs));
  };
  const history = useHistory();

  const appliedCandidates = () => {
    let route = `employer-applied-applicants`;
    history.push(route);
  };

  const shortlistedCandidates = () => {
    let route = "employer-shortlisted-applicants";
    history.push(route);
  };

  const hiredCandidates = () => {
    let route = "employer-hired-applicants";
    history.push(route);
  };

  const rejectedCandidates = () => {
    let route = `employer-rejected-applicants`;
    history.push(route);
  };

  return (
    <div className="bg-white">
      <div className="row">
        <div className="col-xl-2 col-sm-0">
          <EmployerSideBarFunction />
        </div>
        <div className="col-xl-9 m-auto py-5 pl-5 pr-3">
          <div className="">
            <h5 className="heading-color mb-3">All Applicants</h5>
            <p style={{ fontSize: "15px" }} className="color-5b">All your jobs ads from “Post Vacancy Ads”, all your shortlisted “Driver-Hire-Me-Cards”, are merged here, giving you on central point to manage your recruitment. When a driver posts a “Hire-Me-Card”, he is literally applying for jobs, hence it is included under “All Applicants”.</p>
          </div>
          <div className="pt-4">
            <p>
              <font size="4">Types of Applicants</font>
            </p>
            <div className="row">
              <div className="col-sm-auto mb-3">
                <button
                  onClick={onAllApplicants}
                  className="applicant_btn"
                >
                  All Applicants
                  </button>
              </div>
              <div className="col-sm-auto mb-3">
                <button
                  onClick={onDrivingJobs}
                  className="applicant_btn"
                >
                  Driving Jobs Applicants
                  </button>
              </div>
              <div className="col-sm-auto mb-3">
                <button
                  onClick={onNonDrivingJobs}
                  className="applicant_btn"
                >
                  Non-driving Jobs Applicants
                  </button>
              </div>
              <div className="col-sm-auto mb-3">
                <select
                  name
                  id
                  className="form-control"
                  style={{ borderRadius: 12, height: 35 }}
                >
                  <option value="">Only Active Ads</option>
                  <option value>Only Archived Ads</option>
                  <option value>Both Active and Archived</option>
                </select>
              </div>
            </div>
          </div>
          <hr />
          <div className="cus-space-30" />
          <br />
          <br />
          <div className="row">
            <div className="col-12">
              <div
                className="row mb-5"
                onClick={appliedCandidates}
                style={{ cursor: "pointer" }}
              >
                <div
                  className="col-xl-3 col-sm-4 col-md-3 first padding_left_25"
                  style={{ fontSize: 36, color: "#585858", width: 150, }}
                >
                  Applied
                </div>
                <div className="col-sm-6 col-lg-7">
                  <div
                    className="progress h-100"
                    style={{
                      backgroundColor: "white",
                      borderRadius: 35,
                      width: 400,
                    }}
                  >
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={getApplied()}
                      style={{
                        width: (getApplied() === 0 ? '20%' : `${getAppliedPercent()}%`),
                        backgroundColor: "#FFBB00",
                        borderRadius: 35,
                      }}
                      aria-valuemin={0}
                      aria-valuemax={getAllApplicantsCount()}
                    >
                      <div
                        className="d-flex justify-content-end"
                        style={{ marginLeft: 10 }}
                      >
                        <d
                          style={{
                            marginRight: 10,
                            fontWeight: 900,
                            fontSize: 30,
                            color: "black",
                            border: "1px solid white",
                            width: 65,
                            height: 35,
                            borderRadius: 39,
                            background: 'rgba(255, 255, 255, 0.86)'
                          }}
                          className="d-flex align-items-center justify-content-center"
                        >
                          {getApplied()}
                        </d>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="row mb-5"
                onClick={shortlistedCandidates}
                style={{ cursor: "pointer" }}
              >
                <div
                  className="col-xl-3 col-sm-4 col-md-3 first padding_left_25"
                  style={{ fontSize: 36, color: "#585858", width: 150, }}
                >
                  Shortlisted
                </div>
                <div className="col-sm-6 col-lg-7">
                  <div
                    className="progress h-100"
                    style={{
                      backgroundColor: "white",
                      borderRadius: 35,
                      width: 400,
                    }}
                  >
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={getShortlisted()}
                      style={{
                        width: (getShortlisted() === 0 ? '20%' : `${getShortlistedPercent()}%`),
                        backgroundColor: "#5BCEAE",
                        borderRadius: 35,
                        cursor: "pointer",
                      }}
                      aria-valuemin={0}
                      aria-valuemax={getAllApplicantsCount()}
                    >
                      <div
                        className="d-flex justify-content-md-end"
                        style={{ marginLeft: 10 }}
                      >
                        <d
                          style={{
                            marginRight: 10,
                            fontWeight: 900,
                            fontSize: 30,
                            color: "black",
                            border: "1px solid white",
                            width: 65,
                            height: 35,
                            borderRadius: 39,
                            background: 'rgba(255, 255, 255, 0.86)'
                          }}
                          className="d-flex align-items-center justify-content-center"
                        >
                          {getShortlisted()}
                        </d>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="row mb-5"
                onClick={hiredCandidates}
                style={{ cursor: "pointer" }}
              >
                <div
                  className="col-xl-3 col-sm-4 col-md-3 first padding_left_25"
                  style={{ fontSize: 36, color: "#585858", width: 150, }}
                >
                  Hired
                </div>
                <div className="col-sm-6 col-lg-7">
                  <div
                    className="progress h-100"
                    style={{
                      backgroundColor: "white",
                      borderRadius: 35,
                      width: 400,
                    }}
                  >

                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={getHired()}
                      style={{
                        width: (getHired() === 0 ? '20%' : `${getHiredPercent()}%`),
                        backgroundColor: "#7F83D7",
                        borderRadius: 35,
                      }}
                      aria-valuemin={0}
                      aria-valuemax={getAllApplicantsCount()}
                    >
                      <div
                        className="d-flex justify-content-md-end"
                        style={{ marginLeft: 10 }}
                      >
                        <d
                          style={{
                            marginRight: 10,
                            fontWeight: 900,
                            fontSize: 30,
                            color: "black",
                            border: "1px solid white",
                            width: 65,
                            height: 35,
                            borderRadius: 39,
                            background: 'rgba(255, 255, 255, 0.86)'
                          }}
                          className="d-flex align-items-center justify-content-center"
                        >
                          {getHired()}
                        </d>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div
                className="row mb-5"
                onClick={rejectedCandidates}
                style={{ cursor: "pointer" }}
              >
                <div
                  className="col-xl-3 col-sm-4 col-md-3 first padding_left_25"
                  style={{ fontSize: 36, color: "#585858", width: 150, }}
                >
                  Rejected
                </div>
                <div className="col-sm-6 col-lg-7">
                  <div
                    className="progress h-100"
                    style={{
                      backgroundColor: "white",
                      borderRadius: 35,
                      width: 400,
                    }}
                  >
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={getRejected()}
                      style={{
                        width: (getRejected() === 0 ? '20%' : `${getRejectedPercent()}%`),
                        backgroundColor: "#FF867D",
                        borderRadius: 35,
                      }}
                      aria-valuemin={0}
                      aria-valuemax={getAllApplicantsCount()}
                    >
                      <div
                        className="d-flex justify-content-md-end"
                        style={{ marginLeft: 10 }}
                      >
                        <div
                          style={{
                            marginRight: 10,
                            fontWeight: 900,
                            fontSize: 30,
                            color: "black",
                            border: "1px solid white",
                            width: 65,
                            height: 35,
                            borderRadius: 39,
                            background: 'rgba(255, 255, 255, 0.86)'
                          }}
                          className="d-flex align-items-center justify-content-center"
                        >
                          {getRejected()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5 w-100">

        </div>
      </div>
    </div>
  );
};

Applicants.propTypes = {};

export default Applicants;
