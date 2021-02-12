import React from "react";
import { useSelector } from "react-redux";

const VaccancyAddCard = ({ imgObj, jobDetails,preferedLocation }) => {
  const employer_profile = useSelector(
    (state) => state.employer_reducers.employer_profile
  );

  console.log("img obj in card comp ---", imgObj);
  return (
    <div className="" id="ad_target">
      <p
        className="header-text"
        style={{ textAlign: "center", color: "#575353", fontWeight: 500 }}
      >
        Your Vacancy Ad will Appear like this
      </p>
      <div
        className="card"
        style={{
          maxWidth: 384,
          margin: "0 auto",
          border: "1.0px solid #FFBB00",
          borderRadius: 12,
          height: 517,
        }}
      >
        <img
          className="card-img-top"
          id="blah"
          src={
            imgObj
              ? URL.createObjectURL(imgObj)
              : `https://instadriver.co/images/placeholder.png`
          }
          alt="Job card"
          style={{
            borderTopRightRadius: 12,
            borderTopLeftRadius: 12,
            minHeight: "auto",
          }}
        />{" "}
        <p
          className="header-text"
          style={{ textAlign: "center", color: "#575353", fontWeight: 200, fontSize: 15, marginLeft:10, marginRight:10 }}
        >
          {" "}
          {jobDetails.description ? jobDetails.description : ""}
        </p>
        <p style={{fontSize:16}} className="mt-3 text-center"><b>{employer_profile.firstName}</b></p>
        <p style={{fontSize:16}} className="mt-2 text-center"><b>{employer_profile.mobileNumber}</b></p>
        <br />
        <div
          className="card-body d-flex justify-content-center"
          style={{ height: "auto" }}
        >
          <p
            className="card-text output"
            id="add_to_me"
            style={{ textAlign: "center", width: 378 }}
          />
          <br />
          <p
            className="card-text"
            style={{
              textAlign: "center",
              color: "#575353",
              fontWeight: 600,
              bottom: 40,
              position: "absolute",
            }}
          >
            <br />
          </p>
        </div>
      </div>
      <br />
      <table className="table table-borderless table-sm">
        <thead>
          <tr>
            <td scope="col" id="teststuff">
              <button
                className="btn-outline-secondary non-box cussec"
                id="demo"
                disabled
              >
                {jobDetails.driver_category1
                  ? jobDetails.driver_category1
                  : "Choose driver category"}
              </button>
            </td>
            <td scope="col" className="custom-hide">
              <button
                className="btn-outline-secondary non-box"
                id="demo1"
                disabled
              >
                <d id="demosmall">
                  {jobDetails.driver_category2
                    ? jobDetails.driver_category2
                    : "Choose driver category"}
                </d>
              </button>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr id="hidden_div" style={{ display: "none" }}>
            <td>
              {" "}
              <div
                className="btn-outline-secondary non-box"
                id="demosmall"
              ></div>
            </td>
            <td>
              <div className="btn-outline-secondary non-box" id="demo1"></div>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className="btn-outline-secondary non-box output1"
                id="demo4"
                disabled
              >
                {preferedLocation.location ? preferedLocation.location.split(',')[0] : "Location"}
              </button>
            </td>
            <td>
              <button
                className="btn-outline-secondary non-box"
                id="demo3"
                disabled
              >
                {jobDetails.licenseAge
                  ? `${jobDetails.licenseAge} Years Licence`
                  : "Years Licence"}
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className="btn-outline-secondary non-box"
                id="demo2"
                disabled
              >
                {jobDetails.experience
                  ? `${jobDetails.experience} Years Experience`
                  : "Years Experience"}
              </button>
            </td>
            <td>
              <button className="btn-outline-secondary non-box" disabled>
                Salary{" "}
                <d id="demo7">
                  {jobDetails.salary_range_currency
                    ? jobDetails.salary_range_currency
                    : `KES`}
                </d>{" "}
                <d id="demo5" className="output_min_daily" />{" "}
                {jobDetails.min ? jobDetails.min : ``} to{" "}
                {jobDetails.max ? jobDetails.max : ``}
                <d className="output_max_daily" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <br />
      <a
        href="/attachments/preview"
        data-target="#moreinfoCardModal"
        data-toggle="modal"
        id="more_info"
        className="btn btn-outline-secondary btn-block create-box"
        style={{
          backgroundColor: "grey",
          color: "white",
          fontWeight: 500,
          minWidth: 366,
          margin: "0 auto",
          height: 40,
        }}
      >
        More Info on Job
      </a>
      <br />
      <input
        type="submit"
        id="post_card"
        className="btn btn-outline-secondary btn-block create-box"
        style={{
          backgroundColor: "#C4C4C4",
          color: "white",
          fontWeight: "00",
          maxWidth: 366,
          margin: "0 auto",
          height: 40,
        }}
        defaultValue="Post Ad"
      />
      <div className="space" style={{ height: "40" }} />
      <div
        className="modal fade "
        id="moreinfoCardModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div
              className="modal-header"
              style={{ backgroundColor: "white", textAlign: "center" }}
            >
              <h5
                className="modal-title d-flex justify-content-center"
                id="exampleModalLabel"
                style={{ color: "black", textAlign: "center" }}
              >
                More Info on this Job
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div
                id="carouselExampleControls1"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      id="uploadPreviewdoc1"
                      style={{ maxWidth: "100%", maxHeight: "60%" }}
                    />
                    <p
                      className="d-flex justify-content-center"
                      id="fileList11"
                    >
                      No Attachment 1
                    </p>
                  </div>
                  <div className="carousel-item">
                    <img
                      id="uploadPreviewdoc2"
                      style={{ maxWidth: "100%", maxHeight: "60%" }}
                    />
                    <p
                      className="d-flex justify-content-center"
                      id="fileList22"
                    >
                      No Attachment 2
                    </p>
                  </div>
                  <div className="carousel-item">
                    <img
                      id="uploadPreviewdoc3"
                      style={{ maxWidth: "100%", maxHeight: "60%" }}
                    />
                    <p
                      className="d-flex justify-content-center"
                      id="fileList33"
                    >
                      No Attachment 3
                    </p>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleControls1"
                  role="button"
                  data-slide="prev"
                >
                  <i
                    className="fa fa-angle-left"
                    style={{ fontSize: 36, color: "#FFBB00" }}
                  />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleControls1"
                  role="button"
                  data-slide="next"
                >
                  <i
                    className="fa fa-angle-right"
                    style={{ fontSize: 36, color: "#FFBB00", marginLeft: 18 }}
                  />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="modal_id"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: "white" }}>
              <h5
                className="modal-title"
                id="exampleModalLabel"
                style={{ color: "black" }}
              >
                Uploading file
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <p>
                Uploading file and submitting vacancy Ad, Please do not leave
                this page until vacancy Ad has been submitted successfully
              </p>
              <div
                className="progress"
                style={{ height: "2em", color: "#FFBB00" }}
              >
                <div
                  className="progress-bar uploadProgressBar"
                  role="progressbar"
                  style={{
                    width: "0%",
                    borderRadius: 8,
                    color: "white",
                    backgroundColor: "#FFBB00 !important",
                  }}
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  0%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaccancyAddCard;
