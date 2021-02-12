import React from "react";
import FilterListIcon from "@material-ui/icons/FilterList";
import { DriverJobProfileCard } from "./DriverJobProfileCard";
import { DriverJobProfileCard1 } from "./DriverJobProfileCard";
import FilterCard from "./FilterCard";
import { useHistory } from "react-router-dom";

function Candidates({
  data,
  jobData,
  appliedCandidates,
  shortlistedCandidates,
  hiredCandidates,
  rejectedCandidates,
  firstRow,
  secondRow,
  thirdRow,
  others,
}) {
  const renderOthers = (others) => {
    let rows = [];
    let row = false;
    let start = 0;
    while (others && others.length > 0) {
      let slice = others.slice(start, start + 6);
      if (row) {
        rows.push(createProfileCardRow(slice));
        row = false;
      } else {
        rows.push(createProfileCard1Row(slice));
        row = true;
      }
      start = start + 6;
      others = others.slice(start, others.length);
    }
    return rows;
  };

  const history = useHistory();

  const createProfileCardRow = (a) => {
    return (
      <div className="row padding_left_10">
        {a.map((applicant, idx) => (
          <DriverJobProfileCard key={idx} applicant={applicant} />
        ))}
      </div>
    );
  };
  const createProfileCard1Row = (a) => {
    return (
      <div className="row padding_left_10">
        {a.map((applicant, idx) => (
          <DriverJobProfileCard1 key={idx} applicant={applicant} />
        ))}
      </div>
    );
  };

  const goBackToAds = () => {
    let route = "/employer-manage-posts";
    history.push(route);
  };

  return (
    <main
      role="main"
      className="col-md-11 ml-sm-auto col-lg-11 px-4 padding_left_10 padding_right_40"
    >
      <div className="row">
        <div className="col-md-3">
          <button className="yellowbutton yellowbutton1" onClick={goBackToAds}>
            <i className="fa fa-arrow-left"></i> &nbsp; Back To Your Adds
          </button>
        </div>
        <div className="col-md-7 padding_left_100">
          <button className="percentage-button percentage-button1">
            {data && data.length}
          </button>
        </div>
      </div>
      <br />
      <br />
      <div className="row">
        <div className="col-md-3 main-nav-box navbox padding_right_20">
          <div className="row">
            <div className="col-lg-5 button-text">
              {jobData && jobData.adType}
            </div>
            <div className="col-lg-7 text-space ">
              <span className="button-text1">
                Posted On{" "}
                {jobData && jobData.createdAt.split("T")[0].replace("-", "/")}
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-7 padding_left_100">
          <div className="row">
            <div className="col-sm-3">
              <div id="nav-item">
                <button
                  onClick={appliedCandidates}
                  className="system-second-main-button1 system-second-button1 system-second-button-hover-default1"
                >
                  Applied
                </button>
              </div>
            </div>
            <div className="col-sm-3">
              <div id="nav-item">
                <button
                  onClick={shortlistedCandidates}
                  className="system-second-main-button1 system-second-button-hover1"
                >
                  Shortlisted
                </button>
              </div>
            </div>
            <div className="col-sm-3">
              <div id="nav-item">
                <button
                  onClick={hiredCandidates}
                  className="system-second-main-button1 system-second-button-hover1"
                >
                  Hired
                </button>
              </div>
            </div>
            <div className="col-sm-1">
              <div id="nav-item">
                <button
                  onClick={rejectedCandidates}
                  className="system-second-main-button1 system-second-button-hover1"
                >
                  Rejected
                </button>
              </div>
            </div>
            <div className="col-sm-2 filter-position3">
              <FilterListIcon
                className="cursorpointer filter-icon-space"
                data-toggle="modal"
                data-target="#filterModal"
              />
              <FilterCard />
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-sm-4">
          <main
            role="main"
            className="col-md-9 ml-sm-auto col-lg-12 px-4 padding_left_35 padding_right_40"
          >
            <div className="cus-space-30" />
            <div className="container">
              <div className="row">
                <div className="col-6"></div>
                <div className="col-6 d-flex justify-content-md-end">
                  <img
                    src="/img/filter.svg"
                    data-toggle="modal"
                    data-target="#filterModal"
                    className="cursorpointer"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-6" style={{ marginLeft: "-60px" }}>
                  <div
                    className="row"
                    style={{ width: 420, marginLeft: "-130px" }}
                  >
                    <div
                      className="col-sm d-flex justify-content-end"
                      style={{ fontSize: 17, marginLeft: "-106px" }}
                    >
                      <a
                        href="#"
                        data-target="#frankline-wakasiaka-27503509"
                        data-toggle="modal"
                        className="text-success"
                      >
                        <div
                          className="modal fade"
                          id="frankline-wakasiaka-27503509"
                        >
                          <div className="modal-dialog">
                            <div className="modal-content">
                              {/* Modal Header */}
                              <div className="modal-header">
                                <h4 className="modal-title">
                                  Get Job Card URL
                                </h4>
                                <button
                                  type="button"
                                  className="close"
                                  data-dismiss="modal"
                                >
                                  ×
                                </button>
                              </div>
                              {/* Modal body */}
                              <div className="modal-body text-left">
                                <div className="form-row">
                                  <div className="form-group col-md-12">
                                    <div className="row">
                                      <div className="col-lg-12">
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="profile_url"
                                          name="profile_url"
                                          defaultValue="Job Advert"
                                          readOnly="readonly"
                                          autoComplete="off"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Modal footer */}
                              <div className="modal-footer text-center ">
                                <button
                                  type="button"
                                  id="copyButton"
                                  className="btn btn-primary btn-form display-4 pr-3 pl-3"
                                  onclick="toast_success('Link copied to clipboard')"
                                >
                                  Copy to clipboard
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-dark btn-form display-4 pr-3 pl-3"
                                  data-dismiss="modal"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    className="card shadow p-2"
                    onclick="window.location.href='/employer/driverprofile/frankline-wakasiaka-27503509'"
                    style={{
                      cursor: "pointer",
                      borderTop: "none",
                      borderRadius: 20,
                      height: 780,
                      width: 390,
                      transition:
                        ".3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s - webkit - transform cubic- bezier(.155, 1.105, .295, 1.12)",
                    }}
                  >
                    <img
                      className="card-img-top"
                      src={jobData ? jobData.imageUrl : ""}
                      alt="Card image cap"
                      style={{
                        width: "105%",
                        marginLeft: "-7px",
                        marginTop: "-10px",
                        height: 380,
                        borderTop: "none",
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                      }}
                    />
                    <div className="card-body align-items-center d-flex justify-content-center center-text">
                      <p
                        className="card-text inactiveLink"
                        style={{
                          textAlign: "center",
                          color: "black",
                          marginTop: "-50px",
                        }}
                      >
                        <font size="4.8">{jobData && jobData.description}</font>
                      </p>
                      <p
                        className="card-text"
                        style={{
                          textAlign: "center",
                          bottom: 31,
                          marginLeft: 10,
                          position: "absolute",
                          fontWeight: 600,
                          color: "#575353",
                        }}
                      >
                        <font size="5">
                          {jobData && jobData.businessMobileNo}
                        </font>
                      </p>
                      <p
                        className="card-text"
                        style={{
                          textAlign: "center",
                          bottom: 22,
                          marginLeft: 10,
                          position: "absolute",
                          fontWeight: 600,
                          color: "#575353",
                        }}
                      >
                        <font size="5">{jobData && jobData.businessEmail}</font>
                      </p>
                    </div>
                  </div>
                  <br />
                  <table
                    className="table-borderless "
                    style={{
                      width: 216,
                      marginLeft: "-30px",
                      borderCollapse: "separate",
                      borderSpacing: "10px 20px",
                    }}
                  >
                    <thead>
                      <tr>
                        <td scope="col">
                          <div className=" btn  non-box">
                            <d
                              style={{
                                position: "relative",
                                bottom: 4,
                                cursor: "default",
                              }}
                            >
                              {jobData && jobData.category[0].split(",")[0]}
                            </d>
                          </div>
                        </td>
                        <td scope="col">
                          <div className=" btn non-box">
                            <d
                              style={{
                                position: "relative",
                                bottom: 4,
                                cursor: "default",
                              }}
                            >
                              {jobData && jobData.category[0].split(",")[1]}
                            </d>
                          </div>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="btn non-box">
                            <d
                              style={{
                                position: "relative",
                                bottom: 4,
                                cursor: "default",
                              }}
                            >
                              {jobData && jobData.experience}+ years Experience
                            </d>
                          </div>
                        </td>
                        <td>
                          <div className="btn non-box">
                            <d
                              style={{
                                position: "relative",
                                bottom: 4,
                                cursor: "default",
                              }}
                            >
                              {jobData && jobData.licenseAge} years Licence
                            </d>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="btn  non-box">
                            <d
                              style={{
                                position: "relative",
                                bottom: 4,
                                cursor: "default",
                              }}
                            >
                              {jobData && jobData.location.title}
                            </d>
                          </div>
                        </td>
                        <td>
                          <div className="btn non-box">
                            <d
                              style={{
                                position: "relative",
                                bottom: 4,
                                cursor: "default",
                              }}
                            >
                              Salary KES{" "}
                              {jobData && jobData.salary
                                ? jobData.salary.min
                                : 0}{" "}
                              to{" "}
                              {jobData && jobData.salary
                                ? jobData.salary.max
                                : 0}
                            </d>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="cus-space-30" />
                  <div className="cus-space-20" />
                </div>
              </div>
            </div>
          </main>
        </div>
        <div className="col-sm-8 row padding_left_10">
          <div className="row">
            {firstRow && firstRow.length > 0
              ? firstRow.map((applicant, idx) => (
                  <DriverJobProfileCard key={idx} applicant={applicant} />
                ))
              : null}
          </div>
          <div className="row">
            {secondRow && secondRow.length > 0
              ? secondRow.map((applicant, idx) => (
                  <DriverJobProfileCard1 key={idx} applicant={applicant} />
                ))
              : null}
          </div>
          <div className="row">
            {thirdRow && thirdRow.length > 0
              ? thirdRow.map((applicant, idx) => (
                  <DriverJobProfileCard key={idx} applicant={applicant} />
                ))
              : null}
          </div>
        </div>
      </div>
      <div>
        {renderOthers(others).map((row, idx) => (
          <React.Fragment key={idx}>{row}</React.Fragment>
        ))}
      </div>
    </main>
  );
}

export default Candidates;
