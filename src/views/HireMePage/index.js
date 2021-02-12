import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getSingleHireMeCard } from "../../Api/index";
import warningImg from "../../dist/images/warning.svg";

function HireMePage(props) {
  const [data, setData] = useState(null);
  const {
    params: { id },
  } = props.match;

  useEffect(async () => {
    const hireMeData = await getSingleHireMeCard(id);
    setData(hireMeData);
  }, []);

  if (data) {
    return (
      // <Container className="mt-5">
      //     <Col
      //         md={9} className="m-auto border py-5"
      //         style={{ boxShadow: "0px 0.772618px 2.31786px 0.772618px rgba(0, 0, 0, 0.25)", borderRadius: "7px" }}
      //     >
      //         <Row>
      //             <Col md={10} className="m-auto">
      //                 <div className="d-flex align-items-center justify-content-center flex-column">
      //                     <img src={warningImg} alt="" />
      //                     <h3 className="mt-4">Oops! </h3>
      //                     <p style={{ color: '#3B3B3B' }} className="mb-0">This “Job Card” has expired or has been deleted by the driver. To find and hire drivers, go to <a href="//www.instadriver.co" style={{ color: "#FFBB00" }}>www.instadriver.co.</a>  For a driver who would like to post a “Job Card”, you can do that after signing up with Instadriver here </p>
      //                     <a href="//www.instadriver.co/login" style={{ color: "#FFBB00" }}> www.instadriver.co/login</a> <br /> <br />
      //                     <span>Employers!</span>
      //                     <p style={{ color: '#3B3B3B' }}> Don’t worry, we have other job cards from many other drivers, click this button to view other driver job cards.</p>

      //                     <button
      //                         className="btn mt-4 font-weight-bold"
      //                         style={{ color: '#6B6565', width: 270, height: 40, border: '1px solid #C4C4C4', borderRadius: "15px" }}
      //                     >
      //                         View More Driver Job Cards
      //              </button>
      //                 </div>
      //             </Col>
      //         </Row>
      //     </Col>
      // </Container>

      <div className="container my-5">
        <div className="row mb-5">
          <div className="col-6">
            <span className="center-text">
              <font size="4">
                Tap the driver job card to be directed to the driver's detailed
                profile
              </font>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <main
              role="main"
              className="col-md-9 ml-sm-auto col-lg-12 px-4 padding_left_35 padding_right_40"
            >
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
                      onclick="window.location.href='/employer/driverprofile/frankline-wakasiaka-27503509'"
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
                        src={
                          data.imageUrl
                            ? data.imageUrl
                            : "https://instadriver.co/images/uploads/user/thumb/IMG_2751604304202.png"
                        }
                        className="w-90"
                        alt="profile_photo"
                        style={{
                          position: "absolute",
                          top: 25,
                          left: 35,
                          borderRadius: "50%",
                          width: 133,
                          height: 132,
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
                          {data.name}
                        </p>
                        <p
                          className="card-text inactiveLink"
                          style={{
                            textAlign: "center",
                            color: "black",
                            marginTop: "-50px",
                          }}
                        >
                          {data.description}
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
                          {data.mobileNumber}
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
                                {data.category[0]}
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
                                {data.category[1]}
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
                                {`${data.experience}+ years Experience`}
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
                                {`${data.licenseAge} years Licence`}
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
                                {data.location.title}
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
                                Salary KES {data.salary.min} to{" "}
                                {data.salary.max}
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
                              <d style={{ fontWeight: 510, color: "#575353" }}>
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
                  Dear Employer, we have more driver job cards on our
                  <br /> platform, click the button below to be redirected to
                  the
                  <br /> driver job cards page
                </font>
              </span>
            </div>
            <br />
            <div className="row col-sm-12 justify-content-center">
              {/* <button onClick={driverOptions} className="button button5"><b>View More Driver Job Cards</b></button> */}
              <Link
                to="/jobs-all/driver-cards"
                className="btn button button5 text-center"
              >
                <b>View More Driver Job Cards</b>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

export default HireMePage;
