import React, { useEffect, useState } from "react";
import profileBanner from "../../../../../dist/images/profilebanner2.png";
import member1 from "../../../../../dist/images/user1.svg";
import member2 from "../../../../../dist/images/user2.png";
import car from "../../../../../dist/images/car.png";
import { applyDriverForJob } from "../../../../../redux/actions/employer_actions/job_post_actions";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./index.css";
import AttachmentsModal from "./AttachmentsModal";

const getDaysElapsed = (startDate, endDate) => {
  var startDateTime = startDate.getTime();
  var endDateTime = endDate.getTime();
  if (isNaN(startDateTime) || isNaN(endDateTime)) {
    //a big number to show that there is an error
    return 0;
  }
  var diff = endDateTime - startDateTime;
  var diffInDays = Math.ceil(diff / (3600 * 24 * 60));
  return diffInDays;
};

const isExpired = (jobItem) => {
  //early out
  if (!jobItem.expireAt) return false;
  var createdDate = new Date(jobItem.createdAt);
  var expiryDate = new Date(jobItem.expireAt);
  var diffInDays = getDaysElapsed(createdDate, expiryDate);
  if (diffInDays <= 0) return true;
  //else
  return false;
};

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

const isBlank = (str) => {
  return (
    !str || str === null || str === "" || str === "undefined" || !str.trim()
  );
};
const isEmpty = (str) => {
  return !str || 0 === str.length;
};
const isNotNullOrEmptyString = (str) => {
  return !isEmpty(str) && !isBlank(str);
};
const isNullOrEmpty = (str) => {
  return isEmpty(str) && isBlank(str);
};

const wellFormed = (str) => {
  return isNullOrEmpty(str) ? "" : str;
};

const JobsPostContainer = ({ jobItem }) => {
  console.log("inside jobs post container");
  console.log(jobItem);
  const [popout, setPopout] = useState(false);
  const employer = useSelector(
    (state) => state.employer_reducers.employer_profile
  );
  const [links, setLinks] = useState([]);

  useEffect(() => {
    if (wellFormed(jobItem.attachmentOneUrl)) {
      setLinks(links.concat(jobItem.attachmentOneUrl));
    } else if (wellFormed(jobItem.attachmentTwoUrl)) {
      setLinks(links.concat(jobItem.attachmentTwoUrl));
    } else if (wellFormed(jobItem.attachmentThreeUrl)) {
      setLinks(links.concat(jobItem.attachmentThreeUrl));
    }
  }, [jobItem]);

  const getUrl = () => {
    console.log(links);
    const url = `/job-posts-attachments?attachment1=${links[0]}&attachment2=${links[1]}&attachment3=${links[2]}`;
    return url;
  };
  const onPopout = (e) => {
    setPopout(!popout);
  };
  const user_credentials = useSelector(
    (state) => state.user_reducers.user_credentials
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const directToJobDetails = (jobpostId) => {
    // dispatch(getSpecificJob(jobpostId));
    let route = `/job-details/${jobpostId}`;
    history.push(route);
  };

  const moreInfo = (jobpostId) => {
    // dispatch(getSpecificJob(jobpostId));
    let route = `driver-job-more-info-page`;
    history.push(route);
  };

  return (
    <div className="col-xl-4 col-md-6 p-0 my-5">
      <div className="d-flex align-items-center ">
        <img
          src={jobItem.businessAvatar}
          className="rounded-circle mr-3"
          width="65"
          alt="profile"
          className="profile-avatar"
        />
        <div>
          <div className="mb-2">
            <span
              style={{ fontSize: "16px" }}
              className="mr-1 font-weight-bold"
            >
              Job Posted by {jobItem.businessName}
            </span>
            <br />
            <span style={{ fontSize: "13px" }} className="article-url">
              {jobItem.businessWebsite ? jobItem.businessWebsite : "No website"}
            </span>
          </div>
          <div className="">
            <span style={{ fontSize: "16px" }} className="mr-3">
              Posted{" "}
              {isExpired(jobItem)
                ? "Job is Expired"
                : `${getDaysElapsed(
                    new Date(jobItem.createdAt),
                    new Date()
                  )} days ago`}{" "}
            </span>
            {!isExpired(jobItem) && (
              <span style={{ fontSize: "16px" }} className="">
                {getDaysElapsed(new Date(), new Date(jobItem.expireAt))} day(s)
                remaining
              </span>
            )}
          </div>
        </div>
      </div>
      <div
        id="cardItem"
        onClick={() => directToJobDetails(jobItem._id)}
        className="card mt-4"
      >
        <img src={jobItem.imageUrl} className="card-img-top" alt="car" />
        <div className="card-body px-5 py-4">
          <p
            style={{ color: "#5B5B5B", width: "100%" }}
            className="card-text font-weight-bold"
          >
            We are looking for a hardworking and a competent driver. More
            emphasis is on driving experience, ethics and the ability to work
            under pressure. We have a great package for the position.
          </p>
          <div className="text-center mt-3">
            <h6 style={{ color: "#575353" }}>{jobItem.businessMobileNo}</h6>
            <h6 style={{ color: "#575353" }}>{jobItem.businessEmail}</h6>
          </div>
        </div>
      </div>
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
                  style={{ position: "relative", bottom: 4, cursor: "default" }}
                >
                  {jobItem.category[0]
                    ? jobItem.category[0]
                    : "Category not set"}
                </d>
              </div>
            </td>
            <td scope="col">
              <div className=" btn category-box">
                <d
                  style={{ position: "relative", bottom: 4, cursor: "default" }}
                >
                  {jobItem.category[1]
                    ? jobItem.category[1]
                    : "Category not set"}
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
                  style={{ position: "relative", bottom: 4, cursor: "default" }}
                >
                  {jobItem.experience ? jobItem.experience : "0"} Year(s)
                  Experience
                </d>
              </div>
            </td>
            <td>
              <div className="btn category-box">
                <d
                  style={{ position: "relative", bottom: 4, cursor: "default" }}
                >
                  {jobItem.licenceAge ? jobItem.licenceAge : "0"} Year(s)
                  Licence
                </d>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="btn  category-box">
                <d
                  style={{ position: "relative", bottom: 4, cursor: "default" }}
                >
                  {jobItem.location.title}, Kenya
                </d>
              </div>
            </td>
            <td>
              <div className="btn category-box">
                <d
                  style={{ position: "relative", bottom: 4, cursor: "default" }}
                >
                  Salary ({jobItem.currency}){" "}
                  {jobItem.salary && jobItem.salary.min} -{" "}
                  {jobItem.salary && jobItem.salary.max}
                </d>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="">
        <button className="tap-shortlist" onClick={onPopout}>
          More Info On Job
        </button>
      </div>
      <div className="row mt-4 memberBox py-3">
        {jobItem.applied.length > 2 ? (
          <>
            <div className="col-md-6 p-0">
              <div className="text-center">
                <div className="mb-2">
                  <img
                    src={jobItem.applied[0].avatar}
                    className="rounded-circle"
                    className="profile-avatar"
                    height="85px"
                    width="85px"
                    alt="members"
                  />
                </div>

                <h6 className="mb-0 textHeading">
                  {jobItem.applied[0].firstName} {jobItem.applied[0].lastName}
                </h6>
                <span className="text-muted textStyle">
                  {" "}
                  {jobItem.applied[0].username} &nbsp;{" "}
                  {jobItem.applied[0].lastSeen}
                </span>
                <hr
                  style={{
                    width: "50%",
                    marginTop: 4,
                    marginBottom: 1,
                  }}
                />
                <h6 className="textStyle mt-1">
                  {jobItem.applied[0].licenceAge} yrs license
                </h6>
                <h6 className="textStyle">
                  {jobItem.applied[0].experience} yrs driving experience
                </h6>
              </div>
            </div>

            <div className="col-md-6 p-0">
              <div className="text-center">
                <div className="mb-2">
                  <img
                    src={jobItem.applied[1].avatar}
                    className="rounded-circle"
                    height="85px"
                    width="85px"
                    alt="members"
                  />
                </div>
                <h6 className="mb-0 textStyle textHeading">
                  {jobItem.applied[1].firstName} {jobItem.applied[1].lastName}
                </h6>
                <span className="text-muted textStyle">
                  {" "}
                  {jobItem.applied[1].username} &nbsp;{" "}
                  {jobItem.applied[1].lastSeen}
                </span>
                <hr
                  style={{
                    width: "50%",
                    marginTop: 4,
                    marginBottom: 1,
                  }}
                />
                <h6 className="textStyle mt-1">
                  {jobItem.applied[1].licenceAge} yrs license
                </h6>
                <h6 className="textStyle">
                  {jobItem.applied[1].experience} yrs driving experience
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
                    The above and <b>{jobItem.length}</b> more drivers from
                    Instadriver have expressed interest in this job
                  </p>
                </div>
                <div className="col-md-3 p-0">
                  <a
                    href={`/job-details/${jobItem._id}`}
                    className="btn text-orange viewMoreBtn"
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>
          </>
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
      </div>
      <div className="">
        <button className="tap-express" onClick={onPopout}>
          More Info On Job
        </button>
        {user_credentials && user_credentials.role === "DRIVER" ? (
          <button
            onClick={() =>
              dispatch(applyDriverForJob(user_credentials.token, jobItem._id))
            }
            className="tap-express"
          >
            Tap to express interest
          </button>
        ) : (
          <a className="btn tap-express" href="/login-user">
            Tap to express interest
          </a>
        )}
      </div>
      {popout && <AttachmentsModal job={jobItem} />}
    </div>
  );
};

export default JobsPostContainer;
