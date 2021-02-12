import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import EmployerSideBarFunction from "../../../Layout/MainSideBar/Employer/EmployerSideBarFunction";
import HomeFilter from "../../../Home/HomeFilter";
import { push } from "react-burger-menu";
import { useSelector } from "react-redux";

const DriverCards = (props) => {
  const history = useHistory();

  const driverOptions = () => {
    let route = "employer-driver-advertisement-cards";
    history.push(route);
  };

  let cards = useSelector((state) => state.driver_reducers.job_cards);

  let listCard = cards.filter((data) => {
    return data._id === props.id;
  });

  const handleCardClick = (e, id) => {
    let route = `/employer-driver-profile-preview/${id}`;
    history.push(route);
  };

  const card = listCard[0];

  // console.log(card);

  return (
    <div id="content">
      <div className="row">
        <EmployerSideBarFunction />
        <div className="col-md-10">
          <br />
          <div className="container">
            <div className="row">
              <div className="col-6 mb-5">
                <span className="center-text">
                  <font size="4">
                    Tap the driver job card to be directed to the driver's
                    detailed profile
                  </font>
                </span>
              </div>
              {/* <div className="col-6 d-flex justify-content-md-end">
                <img
                  src="../../dist/img/filter.svg"
                  data-toggle="modal"
                  data-target="#filterModal"
                  className="cursorpointer"
                />
              </div>
              <div>
                <HomeFilter />
              </div> */}
            </div>
            <div
              className="row"
              onClick={(e) => handleCardClick(e, card.user._id)}
            >
              <div className="col-md-6">
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
                      <div className="col-md-6">
                        <div
                          className="row"
                          style={{ width: 320, marginLeft: "-10px" }}
                        >
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
                            src={card.imageUrl}
                            className="w-60 rounded-circle"
                            alt="profile_photo"
                            width="100px"
                            height="100px"
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
                                top: 260,
                                marginLeft: 10,
                                position: "absolute",
                                fontSize: 15,
                              }}
                            >
                              {card.name}
                            </p>
                            <p
                              className="card-text inactiveLink"
                              style={{
                                textAlign: "center",
                                color: "black",
                                marginTop: "-50px",
                              }}
                            >
                              {card.description}
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
                              {card.mobileNumber}
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
                                    {card.category[0]}
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
                                    {card.category[1]}
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
                                    {card.experience}+ years Experience
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
                                    {card.licenseAge} years Licence
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
                                    {/* {card.location.title} */}
                                    {`${card.location.city} ,${card.location.country} `}
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
                                    Salary KES {card.salary.min} to{" "}
                                    {card.salary.max}
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
                          <div
                            className="card-body"
                            style={{ marginTop: "-9px" }}
                          >
                            <div className="container">
                              <div className="row">
                                <div
                                  className="col-sm d-flex justify-content-start"
                                  style={{ marginTop: "-4px", fontSize: 15 }}
                                >
                                  <d
                                    style={{
                                      fontWeight: 510,
                                      color: "#575353",
                                    }}
                                  >
                                    Views
                                    <d>
                                      {" "}
                                      <d
                                        style={{
                                          color: "#F8BD00",
                                          fontWeight: 600,
                                        }}
                                      >
                                        3
                                      </d>
                                    </d>
                                  </d>
                                </div>
                                <div
                                  className="col-sm d-flex justify-content-end shortlisted-view"
                                  style={{ marginTop: "-3px", fontSize: 15 }}
                                >
                                  <d
                                    style={{
                                      fontWeight: 510,
                                      color: "#575353",
                                    }}
                                  >
                                    Shortlisted
                                    <d>
                                      {" "}
                                      <d
                                        style={{
                                          color: "#F8BD00",
                                          fontWeight: 600,
                                        }}
                                      >
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
                        <button
                          type="button"
                          className="btn-block"
                          style={{
                            width: 336,
                            backgroundColor: "#FFBB00",
                            border: "none",
                            color: "white",
                            fontWeight: 500,
                            borderRadius: 5,
                            height: 40,
                            cursor: "pointer",
                            outline: "none",
                          }}
                          onclick="window.location.href='/employer/driverprofile/frankline-wakasiaka-27503509'"
                        >
                          Tap to Shortlist
                        </button>
                        <div className="cus-space-30" />
                        <div className="cus-space-20" />
                      </div>
                    </div>
                  </div>
                </main>
              </div>
              <div className="col-md-6 ">
                <br />
                <br />
                <br />
                <br />
                <div className=" row col-sm-12">
                  <span className="center-text" style={{ color: "#555555" }}>
                    <font size="4">
                      Dear Employer, we have more driver job cards <br />
                      on our platform, click the button below to be
                      <br />
                      redirected to the driver job cards page
                    </font>
                  </span>
                </div>
                <br />
                <div className="row col-sm-12">
                  <button onClick={driverOptions} className="button button5">
                    <b>View More Driver Job Cards</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

DriverCards.propTypes = {};

export default DriverCards;
