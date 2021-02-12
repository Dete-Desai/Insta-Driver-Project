import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import EmployerSideBarFunction from "../../../Layout/MainSideBar/Employer/EmployerSideBarFunction";

const ManagePosts4 = (props) => {
  const history = useHistory();

  const showalljobs = () => {
    let route = `employer-manage-posts-3`;
    history.push(route);
  };

  const showdrivingjobs = () => {
    let route = "employer-manage-posts-4";
    history.push(route);
  };

  const shownondrivingjobs = () => {
    let route = "employer-manage-posts-5";
    history.push(route);
  };

  const onView = () => {
    let route = `employer-job-card-ad`;
    history.push(route);
  };

  const onDelete = (e) => {
    e.preventDefault(e);
    alert("Connect to server API for data deletion");
  };

  const inActiveJobs = () => {
    let route = `employer-manage-posts-4`;
    history.push(route);
  };

  const activeJobs = () => {
    let route = `employer-manage-posts-1`;
    history.push(route);
  };

  return (
    <div>
      <div>
        {/* Page Content Start */}
        <div id="content">
          <div className="row">
            <EmployerSideBarFunction />
            <main
              role="main"
              className="col-md-9 ml-sm-auto col-lg-10 px-4 padding_left_25 padding_right_40"
            >
              <div>
                <br />
                <br />
                <div className="d-flex justify-content-lg-between">
                  <div>
                    <div className="container">
                      <button
                        className="system-option-dropdown-button1 option-dropdown-button1 option-dropdown-button1-hover:hover"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Your Inactive Job Ads &nbsp; &nbsp;
                        <i
                          className="fa fa-chevron-down"
                          aria-hidden="true"
                        ></i>
                      </button>
                      <div
                        className="dropdown-menu profile-dropdown-menu-center"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <li onClick={activeJobs} className="dropdown-item">
                          Your Active Job Ads
                        </li>
                        <li onClick={inActiveJobs} className="dropdown-item">
                          Your Inactive Job Ads
                        </li>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      className="hoverbutton1 buttonhover1"
                      id="all_job_ads"
                      onClick={showalljobs}
                    >
                      All Job Ads
                    </button>
                  </div>
                  <div>
                    <button
                      className="hoverbutton1 buttonhover1 active-alive"
                      id="driving_jobs"
                      onClick={showdrivingjobs}
                    >
                      Driving Job Ads
                    </button>
                  </div>
                  <div>
                    <button
                      className="hoverbutton1 buttonhover1"
                      id="non_driving_jobs"
                      onClick={shownondrivingjobs}
                    >
                      Non Driving Job Ads
                    </button>
                  </div>
                  <div>
                    <svg
                      width={38}
                      height={38}
                      viewBox="0 0 44 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.46008 21.0911C4.46008 23.0869 5.25289 25.0009 6.6641 26.4121C8.07532 27.8233 9.98933 
                                                28.6161 11.9851 28.6161H19.5101V34.176L16.7301 31.3961C16.3246 31.0044 15.7815 30.7877 15.2178 
                                                30.7926C14.6541 30.7975 14.1149 31.0236 13.7162 31.4223C13.3176 31.8209 13.0915 32.3601 13.0866 
                                                32.9239C13.0817 33.4876 13.2984 34.0307 13.69 34.4362L20.14 40.8862C20.5432 41.2892 21.09 41.5157 
                                                21.6601 41.5157C22.2302 41.5157 22.7769 41.2892 23.1801 40.8862L29.6301 34.4362C30.0218 34.0307 
                                                30.2385 33.4876 30.2336 32.9239C30.2287 32.3601 30.0026 31.8209 29.6039 31.4223C29.2053 31.0236 
                                                28.6661 30.7975 28.1023 30.7926C27.5386 30.7877 26.9955 31.0044 26.59 31.3961L23.8101 
                                                34.176V28.6161H29.1851C30.5111 28.6154 31.8227 28.342 33.0387 27.8131C34.2546 27.2842 35.3488 
                                                26.511 36.2534 25.5415C37.158 24.572 37.8536 23.4269 38.2972 22.1773C38.7407 20.9277 38.9226 
                                                19.6003 38.8316 18.2774C38.7407 16.9545 38.3788 15.6645 37.7684 14.4874C37.158 13.3102 36.3121 
                                                12.2711 35.2833 11.4346C34.2545 10.598 33.0648 9.98189 31.7879 9.62439C30.511 9.2669 29.1743 
                                                9.17569 27.8607 9.35643C27.6068 8.23538 27.1308 7.17658 26.4609 6.24253C25.791 5.30848 24.9408 
                                                4.51812 23.9604 3.91812C22.9799 3.31811 21.8893 2.92063 20.7527 2.74914C19.6161 2.57764 18.4567 
                                                2.63562 17.3429 2.91963C16.2291 3.20365 15.1835 3.70795 14.2678 4.40276C13.3522 5.09757 12.585 
                                                5.96881 12.0116 6.96502C11.4382 7.96124 11.0703 9.06224 10.9295 10.203C10.7886 11.3438 10.8778 
                                                12.5012 11.1917 13.607C9.34351 13.8029 7.63319 14.6759 6.39028 16.0578C5.14737 17.4396 4.45981 
                                                19.2325 4.46008 21.0911ZM23.8101 28.6161H19.5101V17.8661C19.5101 17.2959 19.7366 16.7491 20.1398 
                                                16.3458C20.543 15.9426 21.0899 15.7161 21.6601 15.7161C22.2303 15.7161 22.7772 15.9426 23.1804 
                                                16.3458C23.5836 16.7491 23.8101 17.2959 23.8101 17.8661V28.6161Z"
                        fill="#3B3B3B"
                      />
                    </svg>
                  </div>
                </div>
                <div className="container-fluid">
                  <div className="container">
                    <div className="row"></div>
                    <div></div>
                    <br />
                    <div id="all_job_ads">
                      <div
                        className="container green box"
                        style={{ display: "none" }}
                        id="inactive_ad"
                      >
                        <div className="cus" style={{ height: 40 }} />
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th scope="col" />
                              <th scope="col">Date Posted</th>
                              <th scope="col">Applied</th>
                              <th scope="col">Shortlisted</th>
                              <th scope="col">Hired</th>
                              <th scope="col">Rejected</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody></tbody>
                        </table>
                        <br />
                        <div className="d-flex justify-content-lg-end"></div>
                        <br />
                      </div>
                      <div
                        className="container red box"
                        id="active_jobs"
                        style={{}}
                      >
                        <div className="cus-space" style={{ height: 30 }} />
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th scope="col" />
                              <th scope="col"></th>
                              <th scope="col">Date Posted</th>
                              <th scope="col">Applied</th>
                              <th scope="col">Shortlisted</th>
                              <th scope="col">Hired</th>
                              <th scope="col">Rejected</th>
                              <th scope="col">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row" />
                              <td
                                style={{
                                  textAlign: "center",
                                  color: "#918a83",
                                }}
                              >
                                <font size="4">Job Ad 567RGF</font>
                              </td>
                              <td
                                style={{
                                  textAlign: "center",
                                  color: "#918a83",
                                }}
                              >
                                <font size="4">15th Aug. 2020</font>
                              </td>
                              <td
                                style={{
                                  textAlign: "center",
                                  color: "#918a83",
                                }}
                              >
                                <font size="4">50</font>
                              </td>
                              <td
                                style={{
                                  textAlign: "center",
                                  color: "#918a83",
                                }}
                              >
                                <font size="4">13</font>
                              </td>
                              <td
                                style={{
                                  textAlign: "center",
                                  color: "#918a83",
                                }}
                              >
                                <font size="4">2</font>
                              </td>
                              <td
                                style={{
                                  textAlign: "center",
                                  color: "#918a83",
                                }}
                              >
                                <font size="4">35</font>
                              </td>
                              <td>
                                <button
                                  onClick={onView}
                                  className="action-view-button action-view-button1 action-view-button-1"
                                >
                                  View
                                </button>
                                <button
                                  onClick={onDelete}
                                  className="delete-view-button delete-view-button1 delete-view-button-1"
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div
                        id="no_non_driving_cards"
                        style={{ display: "none" }}
                      >
                        <div className="cards text-center shadow no-active-cards">
                          <div className="card-header">Featured</div>
                          <div className="card-body">
                            <h5 className="card-title">
                              No Non-driving Job Ads
                            </h5>
                            <p className="card-text">
                              There are no Active Non-driving Job Ads at the
                              moment. Please Visit this page Later.
                            </p>
                            <a
                              href="https://instadriver.co/employer/recruitment"
                              className="btn btn-primary"
                            >
                              Go to Recruitment page
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

ManagePosts4.propTypes = {};

export default ManagePosts4;
