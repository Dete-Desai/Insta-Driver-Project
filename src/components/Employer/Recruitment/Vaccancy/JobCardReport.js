import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import EmployerSideBarFunction from "../../../Layout/MainSideBar/Employer/EmployerSideBarFunction";
import { DriverJobProfileCard } from "./DriverJobProfileCard";
import { DriverJobProfileCard1 } from "./DriverJobProfileCard";
import DriverProfileCard from "./DriverProfileCard";
import JobCardDetails from "./JobCardDetails";

const JobCardReport = (props) => {
  const history = useHistory();

  const shortlistedCandidates = () => {
    let route = "employer-shortlisted-candidates-page";
    history.push(route);
  };

  const hiredCandidates = () => {
    let route = "employer-hired-candidates-page";
    history.push(route);
  };

  const rejectedCandidates = () => {
    let route = `employer-rejected-candidates-page`;
    history.push(route);
  };

  return (
    <div className="bg-white py-5">
      <div className="row">
          <EmployerSideBarFunction />

        <div className="col-xl-9 m-auto pl-5 pr-3">
          <div className="row mb-2">
            <button className="yellowbutton yellowbutton1">
              <i className="fa fa-arrow-left"></i> &nbsp; Back To Your Adds
            </button>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="row mt-3">
                <div className="col-auto">
                  <div
                    style={{ background: '#E8E8E9', borderRadius: '5px', }}
                    className="p-1 d-flex justify-content-between align-items-center">
                    <h6 className="mb-0 mx-2">Non-Driving Job Ad </h6>
                    <span style={{ background: '#fff', borderRadius: '5px', }} className="p-2">
                      Posted on 15th Aug. 2020 10:30 am
                    </span>
                  </div>
                </div>
                <div className="col-auto">
                  <button
                    style={{ background: '#FFBB00', borderRadius: '5px 5px 0px 0px', color: 'white', width: '100px' }}
                    onClick={shortlistedCandidates}
                    className="btn btn-hover"
                  >
                    Applied
                  </button>
                </div>
                <div className="col-auto">
                  <button
                    style={{ width: '100px' }}
                    onClick={shortlistedCandidates}
                    className="btn btn-hover"
                  >
                    Shortlisted
                  </button>
                </div>
                <div className="col-auto">
                  <button
                    style={{ width: '100px' }}
                    onClick={hiredCandidates}
                    className="btn btn-hover"
                  >
                    Hired
                  </button>
                </div>
                <div className="col-auto">
                  <button
                    style={{ width: '100px' }}
                    onClick={rejectedCandidates}
                    className="btn btn-hover"
                  >
                    Rejected
                  </button>
                </div>
              </div>
              <hr style={{ marginTop: "-4px" }} />
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div style={{ border: '0.5px solid #C4C4C4', borderRadius: "0px", borderLeft: 0, borderTop: 0, }} className="col-xl-5 pb-5 pl-0">
              <JobCardDetails />
            </div>
            <div className="col-xl-7 px-0">
              <div style={{ border: '0.5px solid #C4C4C4', borderRadius: "0px", borderLeft: 0, borderBottom: 0 }} className="">
                <div style={{ minHeight: "230px", background: "#fff" }} className="row m-0 pt-3 d-flex align-items-center">
                  <div className="col-lg-4 col-md-4 col-sm-4 col-4 p-0">
                    <DriverProfileCard />
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-4 p-0">
                    <DriverProfileCard />
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-4 p-0">
                    <DriverProfileCard />
                  </div>
                </div>
                <div style={{ minHeight: "230px", background: "#EDF5FA" }} className="row m-0 pt-3 d-flex align-items-center">
                <div className="col-lg-4 col-md-4 col-sm-4 col-4 p-0">
                    <DriverProfileCard />
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-4 p-0">
                    <DriverProfileCard />
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-4 p-0">
                    <DriverProfileCard />
                  </div>
                </div>
                <div style={{ minHeight: "230px", background: "#fff" }} className="row m-0 pt-3 d-flex align-items-center">
                <div className="col-lg-4 col-md-4 col-sm-4 col-4 p-0">
                    <DriverProfileCard />
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-4 p-0">
                    <DriverProfileCard />
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-4 p-0">
                    <DriverProfileCard />
                  </div>
                </div>
                <div style={{ minHeight: "230px", background: "#fff" }} className="row m-0 pt-3 d-flex align-items-center">
                <div className="col-lg-4 col-md-4 col-sm-4 col-4 p-0">
                    <DriverProfileCard />
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-4 p-0">
                    <DriverProfileCard />
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-4 p-0">
                    <DriverProfileCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row" >
            <div className="col-12 px-0 mr-2" style={{ border: '0.5px solid #C4C4C4', borderRadius: "0px", borderTop: 0, }}>
              <div className="">
                <div style={{ minHeight: "250px", background: "#fff" }} className="row m-0 pt-3 d-flex align-items-center">
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-0">
                    <DriverProfileCard />
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-0">
                    <DriverProfileCard />
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-0">
                    <DriverProfileCard />
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-0">
                    <DriverProfileCard />
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-0">
                    <DriverProfileCard />
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-0">
                    <DriverProfileCard />
                  </div>
                </div>
                <div style={{ minHeight: "250px", background: "#EDF5FA" }} className="row m-0 pt-3 d-flex align-items-center">
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-0">
                    <DriverProfileCard />
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-0">
                    <DriverProfileCard />
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-0">
                    <DriverProfileCard />
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-0">
                    <DriverProfileCard />
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-0">
                    <DriverProfileCard />
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-0">
                    <DriverProfileCard />
                  </div>
                </div>
                <div style={{ minHeight: "250px", background: "#fff" }} className="row m-0 pt-3 d-flex align-items-center">
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-0">
                    <DriverProfileCard />
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-0">
                    <DriverProfileCard />
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-0">
                    <DriverProfileCard />
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-0">
                    <DriverProfileCard />
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-0">
                    <DriverProfileCard />
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-0">
                    <DriverProfileCard />
                  </div>
                </div>
                <div style={{ minHeight: "250px", background: "#EDF5FA" }} className="row m-0 pt-3 d-flex align-items-center">
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-0">
                    <DriverProfileCard />
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-0">
                    <DriverProfileCard />
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-0">
                    <DriverProfileCard />
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-0">
                    <DriverProfileCard />
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-0">
                    <DriverProfileCard />
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-0">
                    <DriverProfileCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

JobCardReport.propTypes = {};

export default JobCardReport;
