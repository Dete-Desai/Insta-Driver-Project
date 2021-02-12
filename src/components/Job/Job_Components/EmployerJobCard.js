import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificJob } from "../../../redux/actions/driver_actions/job_card_actions";
import { applyDriverForJob } from "../../../redux/actions/employer_actions/job_post_actions";

import profileBanner from "../../../dist/images/profilebanner2.png";
import member2 from "../../../dist/images/user2.png";
import car from "../../../dist/images/car.png";
import moment from "moment";

const Jobcard = ({ job }) => {
  const user_credentials = useSelector(
    (state) => state.user_reducers.user_credentials
  );
  const history = useHistory();
  const dispatch = useDispatch();

  const directToJobDetails = (jobpostId) => {
    dispatch(getSpecificJob(jobpostId));
    let route = `/job-details/${jobpostId}`;
    history.push(route);
  };

  //Dates of job post function
  const postDate = new Date(job.createdAt);
  const date = new Date(job.createdAt);
  const dateA = date.setDate(date.getDate() + 3);
  const expiryDate = new Date(dateA);
  const duration = 24 * 60 * 60 * 1000;
  const remainingDays = Math.floor((expiryDate - postDate) / duration);
  console.log("the expiry date is", expiryDate.toISOString());
  console.log("the remaining Days", remainingDays);

  return (
    <div className="col-lg-4 my-5">
      <div className="container">
        <div className="d-flex align-items-center ">
          <img
            src={job.businessAvatar ? job.businessAvatar : profileBanner}
            className="rounded-circle mr-3"
            width="65"
            height="65"
            alt="profile"
            className="profile-avatar"
            style={{ border: "1px solid #FFBB00" }}
          />
          <div>
            <div className="mb-2">
              <span
                style={{ fontSize: "16px" }}
                className="mr-1 font-weight-bold"
              >
                Job Posted by {job.businessName}
              </span>
              <span style={{ fontSize: "13px" }} className="article-url">
                {job.businessWebsite}
              </span>
            </div>
            <div className="">
              <span style={{ fontSize: "16px" }} className="mr-3">
                Posted {moment(postDate).fromNow()}
              </span>
              <span style={{ fontSize: "16px" }} className="">
                {remainingDays > 1 ? (
                  <p>{remainingDays} days remaining</p>
                ) : (
                  <p>{remainingDays} day remaining</p>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div
          id="cardItem"
          style={{ height: "35rem", cursor: "pointer" }}
          onClick={() => {
            directToJobDetails(job._id);
          }}
          className="card mt-4"
        >
          <img
            // src={car}
            className="card-img-top"
            alt="car"
            src={job.imageUrl ? job.imageUrl : car}
          />
          <div className="card-body px-5 py-4">
            <p
              style={{ color: "#5B5B5B", width: "100%" }}
              className="card-text font-weight-bold"
            >
              {job
                ? job.description
                : `We are looking for a hardworking and a competent driver. More emphasis is on driving experience, ethics and the ability to work under pressure. We have a great package for the position.`}
            </p>
            <div className="text-center mt-3">
              <h6 style={{ color: "#575353" }}>
                {job ? job.businessMobileNo : "0723773377"}
              </h6>
              <h6 style={{ color: "#575353" }}>{job.businessEmail}</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <table
          className="table-borderless my-2"
          style={{
            marginLeft: "-25px",
            borderCollapse: "separate",
            borderSpacing: "15px 20px",
          }}
        >
          <thead>
            <tr>
              <td scope="col">
                <div className=" btn  category-box">
                  <d
                    style={{
                      position: "relative",
                      bottom: 4,
                      cursor: "default",
                    }}
                  >
                    {job.category[0] ? job.category[0] : "Category not set"}
                  </d>
                </div>
              </td>
              <td scope="col">
                <div className=" btn category-box">
                  <d
                    style={{
                      position: "relative",
                      bottom: 4,
                      cursor: "default",
                    }}
                  >
                    {job.category[1] ? job.category[1] : "Category not set"}
                  </d>
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="btn category-box">
                  <d
                    style={{
                      position: "relative",
                      bottom: 4,
                      cursor: "default",
                    }}
                  >
                    {job.experience ? job.experience : "0"}+ Years Experience
                  </d>
                </div>
              </td>
              <td>
                <div className="btn category-box">
                  <d
                    style={{
                      position: "relative",
                      bottom: 4,
                      cursor: "default",
                    }}
                  >
                    {job.licenseAge ? job.licenseAge : "0"} years Licence
                  </d>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="btn  category-box">
                  <d
                    style={{
                      position: "relative",
                      bottom: 4,
                      cursor: "default",
                    }}
                  >
                    {job.location.title}, Kenya
                  </d>
                </div>
              </td>
              <td>
                <div className="btn category-box">
                  <d
                    style={{
                      position: "relative",
                      bottom: 4,
                      cursor: "default",
                    }}
                  >
                    Salary ({job.currency}) {job.salary && job.salary.min} -{" "}
                    {job.salary && job.salary.max}
                  </d>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container">
        <div className="">
          <button className="tap-shortlist">More Info On Job</button>
        </div>
      </div>
      {job.applied.length > 1 ? (
        <div className="container">
          <div className="row mt-4 memberBox py-3">
            <div className="col-md-6 p-0">
              <div className="text-center">
                <div className="mb-2">
                  <img
                    src={
                      job.applied[0].avatar ? job.applied[0].avatar : member2
                    }
                    className="rounded-circle"
                    height="85px"
                    width="85px"
                    alt="members"
                  />
                </div>
                <h6 className="mb-0 textHeading">
                  {job.applied[0].firstName
                    ? `${job.applied[0].firstName} ${job.applied[0].lastName}`
                    : "Karry John"}
                </h6>
                <span className="text-muted textStyle">
                  {" "}
                  {job.applied[0].username
                    ? `${job.applied[0].username}`
                    : " @JohntheD"}
                  &nbsp;{" "}
                  {job.applied[0].lastSeen ? job.applied[0].lastSeen : "5d"}
                </span>
                <hr
                  style={{
                    width: "50%",
                    marginTop: 4,
                    marginBottom: 1,
                  }}
                />
                <h6 className="textStyle mt-1">
                  {job.applied[0].licenseAge
                    ? `${job.applied[0].licenseAge} yrs license`
                    : " 5 yrs license"}
                </h6>
                <h6 className="textStyle">
                  {job.applied[0].experience
                    ? `${job.applied[0].experience} yrs driving experience`
                    : " 5 yrs driving experience"}
                </h6>
              </div>
            </div>
            <div className="col-md-6 p-0">
              <div className="text-center">
                <div className="mb-2">
                  <img
                    src={
                      job.applied[1].avatar ? job.applied[1].avatar : member2
                    }
                    className="rounded-circle"
                    height="85px"
                    width="85px"
                    alt="members"
                  />
                </div>
                <h6 className="mb-0 textStyle textHeading">
                  {job.applied[1].firstName
                    ? `${job.applied[1].firstName} ${job.applied[1].lastName}`
                    : "Karry John"}
                </h6>
                <span className="text-muted textStyle">
                  {" "}
                  {job.applied[1].username
                    ? `${job.applied[1].username}`
                    : " @JohntheD"}
                  &nbsp;{" "}
                  {job.applied[1].lastSeen ? job.applied[1].lastSeen : "5d"}
                </span>
                <hr
                  style={{
                    width: "50%",
                    marginTop: 4,
                    marginBottom: 1,
                  }}
                />
                <h6 className="textStyle mt-1">
                  {job.applied[1].licenseAge
                    ? `${job.applied[1].licenseAge} yrs license`
                    : " 5 yrs license"}
                </h6>
                <h6 className="textStyle">
                  {" "}
                  {job.applied[1].experience
                    ? `${job.applied[1].experience} yrs driving experience`
                    : " 5 yrs driving experience"}{" "}
                </h6>
              </div>
            </div>
            <hr
              style={{
                width: "100%",
                marginTop: 4,
                marginBottom: 1,
              }}
            />
            <div className="col-md-12">
              <div className="row d-flex justify-content-between align-items-center pt-2">
                <div className="col-md-9">
                  <p className="textStyle">
                    The above and <b>{job.applied.length}</b> more drivers from
                    Instadriver have expressed interest in this job
                  </p>
                </div>
                <div className="col-md-3 p-0">
                  <button
                    onClick={() => directToJobDetails(job._id)}
                    className="btn text-orange viewMoreBtn"
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row mt-4 memberBox py-3">
            <div
              style={{ height: "17.4rem" }}
              className="col-md-12 p-0 text-center"
            >
              <div style={{ marginTop: "5rem" }}>
                <p>
                  There is no driver from Instadriver who have expressed
                  interest in this job!
                </p>
                <p>Be the first to apply!</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container">
        <div className="">
          {user_credentials && user_credentials.role === "DRIVER" ? (
            <button
              onClick={() =>
                dispatch(applyDriverForJob(user_credentials.token, job._id))
              }
              className="tap-express"
            >
              Tap to express interest in this job
            </button>
          ) : (
            <a className="btn tap-express">
              Tap to express interest in this job
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobcard;
