import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const DriverRecruitmentCard = (props) => {
  const history = useHistory();

  const shortlistDriver = () => {
    let route = `employer-driver-profile-page`;
    history.push(route);
  };

  const handleCardClick = (e, id) => {
    let route = `employer-driver-card/${id}`;
    history.push(route);
  };

  return (
    <div>
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
      <div
        className="container"
        onClick={(e) => handleCardClick(e, props.data._id)}
      >
        <div className="row">
          <div className="col-md-6">
            <div className="row" style={{ width: 320, marginLeft: "-10px" }}>
              <div
                className="col-sm d-flex justify-content-end posted-today"
                style={{ fontSize: 14 }}
              >
                Posted Today ,
              </div>
              <div
                className="col-sm d-flex justify-content-end"
                style={{ fontSize: 14, marginLeft: "-10px" }}
              >
                5 days remaining &nbsp;&nbsp;
                <a
                  href="#"
                  data-target="#frankline-wakasiaka-27503509"
                  data-toggle="modal"
                  className="text-success"
                >
                  <img
                    id="preview_image"
                    height={20}
                    src="https://instadriver.co/img/card/share_icon.jpg"
                    alt="profile_photo"
                  />
                  <div className="modal fade" id="frankline-wakasiaka-27503509">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                          <h4 className="modal-title">Get Job Card URL</h4>
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
                                    defaultValue="https://instadriver.co/driver/jobcards/frankline-wakasiaka-27503509"
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
              style={{
                cursor: "pointer",
                borderTop: "none",
                borderRadius: 60,
                height: 535,
                transition:
                  ".3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s - webkit - transform cubic- bezier(.155, 1.105, .295, 1.12)",
                width: 336,
              }}
            >
              <img
                className="card-img-top"
                src="https://instadriver.co/img/card/top_card.PNG"
                alt="Card image cap"
                style={{
                  width: "105%",
                  marginLeft: "-8px",
                  marginTop: "-10px",
                  height: 260,
                  borderTop: "none",
                  borderTopRightRadius: 60,
                  borderTopLeftRadius: 60,
                }}
              />

              <img
                id="preview_image"
                loading="lazy"
                src={props.data.imageUrl}
                className="w-60 rounded-circle"
                alt="profile_photo"
                height="100px"
                width="100px"
                style={{
                  position: "absolute",
                  margin: "0 auto",
                  top: 15,
                  left: 0,
                  right: 0,
                  borderRadius: "50%",
                }}
              />
              <div className="card-body align-items-center d-flex justify-content-center center-text">
                <p
                  className="card-text "
                  style={{
                    textAlign: "center",
                    color: "#000000",
                    fontWeight: 600,
                    top: 180,
                    marginLeft: 10,
                    position: "absolute",
                    fontSize: 15,
                  }}
                >
                  <b>{props.data.name}</b>
                </p>
                <p
                  className="card-text inactiveLink"
                  style={{
                    textAlign: "center",
                    color: "black",
                    marginTop: "-50px",
                  }}
                >
                  {props.data.description}
                </p>
                <p
                  className="card-text"
                  style={{
                    textAlign: "center",
                    color: "#F8BD00",
                    fontWeight: 600,
                    bottom: 32,
                    marginLeft: 10,
                    position: "absolute",
                    fontSize: 15,
                  }}
                >
                  Contact
                </p>
                <a
                  href="tel:0790943918"
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
                  {props.data.mobileNumber}
                </a>
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
                        {props.data.category[0]}
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
                        {props.data.category[1]}
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
                        {props.data.experience}+ years Experience
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
                        {props.data.licenseAge} years Licence
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
                        {/* {props.data.location.title} */}
                        {`${props.data.location.city} ,${props.data.location.country} `}
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
                        Salary KES {props.data.salary.min} to{" "}
                        {props.data.salary.max}
                      </d>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <div
              className="cards"
              style={{
                borderRadius: 9,
                width: 336,
                height: 40,
                border: "2px solid #C4C4C4",
              }}
            >
              <div className="card-body" style={{ marginTop: "-9px" }}>
                <div className="container">
                  <div className="row">
                    <div
                      className="col-sm d-flex justify-content-start"
                      style={{ marginTop: "-4px", fontSize: 15 }}
                    >
                      <d style={{ fontWeight: 510, color: "#575353" }}>
                        Views
                        <d>
                          {" "}
                          <d style={{ color: "#F8BD00", fontWeight: 600 }}>3</d>
                        </d>
                      </d>
                    </div>
                    <div
                      className="col-sm d-flex justify-content-end shortlisted-view"
                      style={{ marginTop: "-3px", fontSize: 15 }}
                    >
                      <d style={{ fontWeight: 510, color: "#575353" }}>
                        Shortlisted
                        <d>
                          {" "}
                          <d style={{ color: "#F8BD00", fontWeight: 600 }}>
                            0 X{" "}
                          </d>
                        </d>
                      </d>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="col-md-4 driver-profilecard-position">
              <button
                onClick={shortlistDriver}
                className="tap-to-shortlist tap-to-shortlist1 tap-to-shortlist-1"
              >
                Tap To Shortlist
              </button>
            </div>
            <div className="cus-space-30" />
            <div className="cus-space-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

DriverRecruitmentCard.propTypes = {};

export default DriverRecruitmentCard;
