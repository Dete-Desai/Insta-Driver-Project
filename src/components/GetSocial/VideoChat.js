import React from "react";
import altoro from "../../dist/images/altorro-actor-0758 2.png";
import happyMan from "../../dist/images/happyman.png";
import deposit from "../../dist/images/deposit.png";
import shutter from "../../dist/images/shutter.png";
import fizkes from "../../dist/images/fizkes.png";

export const VideoChat = () => {
  return (
    <div>
      {/* Page Content */}

      <div className="container">
        <div className="row">
          {/* Post Content Column */}
          <div className="col-lg-8">
            <h1 className="mt-4" style={{ color: "#C4C4C4" }}>
              Friends from Westlands{" "}
              <span
                className="mt-4"
                style={{
                  marginLeft: "30px",
                  color: "grey",
                  right: "37.52%",
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "30px",
                }}
              >
                RoomID: 2365DA
              </span>
            </h1>

            {/* Post Comment */}
            <br />

            <div className="container">
              <div className="row no-gutter">
                <div className="col-sm-4 py-2">
                  <div className=" card-body ">
                    <img src={altoro} />
                  </div>
                </div>

                <div className="col-sm-4 py-2">
                  <div className=" card-body ">
                    <img src={happyMan} />
                  </div>
                </div>

                <div className="col-sm-4 py-2">
                  <div className=" card-body ">
                    <img src={deposit} />
                  </div>
                </div>

                <div className="col-sm-4 py-2">
                  <div className="row ">
                    <div className="row">
                      <div className="col-sm-4 py-2">
                        <div className=" card-body ">
                          <img
                            src={fizkes}
                            style={{ height: "71.95px", width: "79.52px" }}
                          />
                        </div>
                      </div>
                      <div className="col-sm-4 py-2">
                        <div className=" card-body ">
                          <img
                            src={happyMan}
                            style={{ height: "71.95px", width: "79.52px" }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-4 py-2">
                        <div className=" card-body ">
                          <img
                            src={fizkes}
                            style={{ height: "71.95px", width: "79.52px" }}
                          />
                        </div>
                      </div>
                      <div className="col-sm-4 py-2">
                        <div className=" card-body ">
                          <img
                            src={happyMan}
                            style={{ height: "71.95px", width: "79.52px" }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-4 py-2">
                        <div className=" card-body ">
                          <img
                            src={fizkes}
                            style={{ height: "71.95px", width: "79.52px" }}
                          />
                        </div>
                      </div>
                      <div className="col-sm-4 py-2">
                        <div className=" card-body ">
                          <img
                            src={happyMan}
                            style={{ height: "71.95px", width: "79.52px" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4 py-2">
                  <div className=" card-body h-100">
                    <img
                      src={shutter}
                      style={{
                        width: "271.39px",
                        height: "328.76px",
                        marginLeft: "-40px",
                        top: "607.34px",
                      }}
                    />
                  </div>
                </div>

                <div className="col-sm-4 py-2">
                  <div className=" card-body h-100">
                    <img
                      src={fizkes}
                      style={{ width: "200.54px", height: "190.6px" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div id="container">
              <div id="main-container">
                <div id="buttons-container" style={{ marginLeft: "-400px" }}>
                  {/* <!-- insert buttons to toggle audio/video and leave/end call --> */}
                  <div
                    id="buttons-container"
                    className="row justify-content-center mt-3"
                  >
                    <div className="col-md-2 text-center">
                      <button
                        id="mic-btn"
                        type="button"
                        className="btn btn-block btn-dark btn-lg"
                      >
                        <i id="mic-icon" className="fas fa-microphone"></i>
                      </button>
                    </div>
                    <div className="col-md-2 text-center">
                      <button
                        id="video-btn"
                        type="button"
                        className="btn btn-block btn-dark btn-lg"
                      >
                        <i id="video-icon" className="fas fa-video"></i>
                      </button>
                    </div>
                    <div className="col-md-2 text-center">
                      <button
                        id="exit-btn"
                        type="button"
                        className="btn btn-block btn-danger btn-lg"
                        style={{ width: "15px" }}
                      >
                        <i id="exit-icon" className="fas fa-phone-slash"></i>
                      </button>
                    </div>
                  </div>
                  <div id="local-stream-container" className="col p-0">
                    <div id="mute-overlay" className="col">
                      <i id="mic-icon" className="fas fa-microphone-slash"></i>
                    </div>
                    <div id="no-local-video" className="col text-center">
                      <i id="user-icon" className="fas fa-user"></i>
                    </div>
                    <div id="local-video" className="col p-0"></div>
                  </div>
                </div>
                <div id="full-screen-video"></div>
                <div id="lower-video-bar">
                  <div id="remote-streams-container">
                    <div id="remote-streams">
                      {/* <!-- insert remote streams dynamically --> */}
                    </div>
                  </div>
                  <div id="local-stream-container">
                    <div id="local-video"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <button
                type="button"
                className="btn btn-danger mr-4"
                style={{
                  borderRadius: "13%",
                  backgroundColor: "#F61414",
                  color: "white",
                }}
              >
                Exit Group
              </button>
              <p className="m-0" style={{ color: "#FFBB00" }}>
                You Joined This Room
              </p>
            </div>

            {/* video call details card */}
            <div
              className="card my-4"
              style={{ width: "45rem", backgroundColor: "#EDF5FA" }}
            >
              <div className="card-body" style={{ listStyle: "none" }}>
                <li>Started: 20 min ago</li>
                <br />
                <li>Room Ends: Unspecified</li>
                <br />
                <li>Room Members: 20</li>
                <br />
                <div className="d-flex align-items-center ">
                  <li>Room Status: Public</li>
                  <i
                    className="fas fa-globe-europe"
                    style={{
                      marginLeft: "20px",
                      fontSize: "25px",
                      color: "#FFBB00",
                    }}
                  ></i>
                </div>
                <br />
                <br />
                <li>Participants and their location:</li>
                <div className="d-flex align-items-center ">
                  <li className="mr-2"> Westlands, South C</li>
                  <span
                    style={{
                      color: "#FFBB00",
                      fontSize: "16px",
                      fontWeight: "400px",
                    }}
                    className="m-0"
                  >
                    4 drivers
                  </span>
                </div>

                <div className="d-flex align-items-center ">
                  <li className="mr-2"> Nairobi West, Roadside</li>
                  <span
                    style={{
                      color: "#FFBB00",
                      fontSize: "16px",
                      fontWeight: "400px",
                    }}
                    className="m-0"
                  >
                    3 drivers
                  </span>
                </div>

                <span
                  style={{
                    color: "#FFBB00",
                    fontSize: "13px",
                    fontWeight: "400px",
                  }}
                  className="m-0"
                >
                  <a>View More Room Participants and Their Locations</a>
                </span>

                <div className="d-flex align-items-center ">
                  <li className="mr-2"> Room Creator:</li>
                  <span
                    style={{
                      color: "#FFBB00",
                      fontSize: "16px",
                      fontWeight: "400px",
                    }}
                    className="m-0"
                  >
                    @Sakkl
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Widgets Column */}
          <div className="col-md-4">
            <div
              className=" card my-4"
              style={{ borderColor: "#FFBB00", height: "85vh" }}
            >
              <h5
                className="card-header"
                style={{ backgroundColor: "#C4C4C4" }}
              >
                Comments
              </h5>
              <div className="overflow-auto comment-widgets">
                {/* Comment Row */}
                <div className="d-flex flex-row comment-row m-t-0">
                  <div className="p-2">
                    <img
                      src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583336/AAA/4.jpg"
                      alt="user"
                      width={50}
                      className="rounded-circle"
                    />
                  </div>
                  <div className="comment-text w-100">
                    <h6 className="font-medium">
                      John Doe <span className="text-muted">@JonteD</span>
                      <span className="text-muted float-right">
                        April 14, 2019
                      </span>
                    </h6>{" "}
                    <span className="m-b-15 d-block" style={{ color: "black" }}>
                      This is awesome website. I would love to comeback again.{" "}
                    </span>
                    <div className="comment-footer"> </div>
                  </div>
                </div>{" "}
                {/* Comment Row */}
                <div className="d-flex flex-row comment-row">
                  <div className="p-2">
                    <img
                      src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583319/AAA/3.jpg"
                      alt="user"
                      width={50}
                      className="rounded-circle"
                    />
                  </div>
                  <div
                    className="comment-text active w-100"
                    style={{ backgroundColor: "#C4C4C4" }}
                  >
                    <h6 className="font-medium">
                      John Doe <span className="text-muted">@JonteD</span>
                      <span className="text-muted float-right">
                        April 14, 2019
                      </span>
                    </h6>{" "}
                    <span className="m-b-15 d-block" style={{ color: "black" }}>
                      This is awesome website. I would love to comeback again.{" "}
                    </span>
                    <div className="comment-footer"> </div>
                  </div>
                </div>{" "}
                {/* Comment Row */}
                <div className="d-flex flex-row comment-row">
                  <div className="p-2">
                    <img
                      src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583246/AAA/2.jpg"
                      alt="user"
                      width={50}
                      className="rounded-circle"
                    />
                  </div>
                  <div className="comment-text w-100">
                    <h6 className="font-medium">
                      John Doe <span className="text-muted">@JonteD</span>
                      <span className="text-muted float-right">
                        April 14, 2019
                      </span>
                    </h6>{" "}
                    <span className="m-b-15 d-block" style={{ color: "black" }}>
                      This is awesome website. I would love to comeback again.{" "}
                    </span>
                    <div className="comment-footer"> </div>
                  </div>
                </div>
                <div className="d-flex flex-row comment-row">
                  <div className="p-2">
                    <img
                      src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583246/AAA/2.jpg"
                      alt="user"
                      width={50}
                      className="rounded-circle"
                    />
                  </div>
                  <div
                    className="comment-text w-100"
                    style={{ backgroundColor: "#C4C4C4" }}
                  >
                    <h6 className="font-medium">
                      John Doe <span className="text-muted">@JonteD</span>
                      <span className="text-muted float-right">
                        April 14, 2019
                      </span>
                    </h6>{" "}
                    <span className="m-b-15 d-block" style={{ color: "black" }}>
                      This is awesome website. I would love to comeback again.{" "}
                    </span>
                    <div className="comment-footer"> </div>
                  </div>
                </div>
                <div className="d-flex flex-row comment-row">
                  <div className="p-2">
                    <img
                      src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583246/AAA/2.jpg"
                      alt="user"
                      width={50}
                      className="rounded-circle"
                    />
                  </div>
                  <div className="comment-text w-100">
                    <h6 className="font-medium">
                      John Doe <span className="text-muted">@JonteD</span>
                      <span className="text-muted float-right">
                        April 14, 2019
                      </span>
                    </h6>{" "}
                    <span className="m-b-15 d-block" style={{ color: "black" }}>
                      This is awesome website. I would love to comeback again.{" "}
                    </span>
                    <div className="comment-footer"> </div>
                  </div>
                </div>
                <div className="d-flex flex-row comment-row">
                  <div className="p-2">
                    <img
                      src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583246/AAA/2.jpg"
                      alt="user"
                      width={50}
                      className="rounded-circle"
                    />
                  </div>
                  <div
                    className="comment-text w-100"
                    style={{ backgroundColor: "#C4C4C4" }}
                  >
                    <h6 className="font-medium">
                      John Doe <span className="text-muted">@JonteD</span>
                      <span className="text-muted float-right">
                        April 14, 2019
                      </span>
                    </h6>{" "}
                    <span className="m-b-15 d-block" style={{ color: "black" }}>
                      This is awesome website. I would love to comeback again.{" "}
                    </span>
                    <div className="comment-footer"> </div>
                  </div>
                </div>
                <div className="d-flex flex-row comment-row">
                  <div className="p-2">
                    <img
                      src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583246/AAA/2.jpg"
                      alt="user"
                      width={50}
                      className="rounded-circle"
                    />
                  </div>
                  <div className="comment-text w-100">
                    <h6 className="font-medium">
                      John Doe <span className="text-muted">@JonteD</span>
                      <span className="text-muted float-right">
                        April 14, 2019
                      </span>
                    </h6>{" "}
                    <span className="m-b-15 d-block" style={{ color: "black" }}>
                      This is awesome website. I would love to comeback again.{" "}
                    </span>
                    <div className="comment-footer"> </div>
                  </div>
                </div>
                <div className="d-flex flex-row comment-row">
                  <div className="p-2">
                    <img
                      src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583246/AAA/2.jpg"
                      alt="user"
                      width={50}
                      className="rounded-circle"
                    />
                  </div>
                  <div
                    className="comment-text w-100"
                    style={{ backgroundColor: "#C4C4C4" }}
                  >
                    <h6 className="font-medium">
                      John Doe <span className="text-muted">@JonteD</span>
                      <span className="text-muted float-right">
                        April 14, 2019
                      </span>
                    </h6>{" "}
                    <span className="m-b-15 d-block" style={{ color: "black" }}>
                      This is awesome website. I would love to comeback again.{" "}
                    </span>
                    <div className="comment-footer"> </div>
                  </div>
                </div>
                <div className="d-flex flex-row comment-row">
                  <div className="p-2">
                    <img
                      src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583246/AAA/2.jpg"
                      alt="user"
                      width={50}
                      className="rounded-circle"
                    />
                  </div>
                  <div className="comment-text w-100">
                    <h6 className="font-medium">
                      John Doe <span className="text-muted">@JonteD</span>
                      <span className="text-muted float-right">
                        April 14, 2019
                      </span>
                    </h6>{" "}
                    <span className="m-b-15 d-block" style={{ color: "black" }}>
                      This is awesome website. I would love to comeback again.{" "}
                    </span>
                    <div className="comment-footer"> </div>
                  </div>
                </div>
                <div className="d-flex flex-row comment-row">
                  <div className="p-2">
                    <img
                      src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583246/AAA/2.jpg"
                      alt="user"
                      width={50}
                      className="rounded-circle"
                    />
                  </div>
                  <div
                    className="comment-text w-100"
                    style={{ backgroundColor: "#C4C4C4" }}
                  >
                    <h6 className="font-medium">
                      John Doe <span className="text-muted">@JonteD</span>
                      <span className="text-muted float-right">
                        April 14, 2019
                      </span>
                    </h6>{" "}
                    <span className="m-b-15 d-block" style={{ color: "black" }}>
                      This is awesome website. I would love to comeback again.{" "}
                    </span>
                    <div className="comment-footer"> </div>
                  </div>
                </div>
                <div className="d-flex flex-row comment-row">
                  <div className="p-2">
                    <img
                      src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583246/AAA/2.jpg"
                      alt="user"
                      width={50}
                      className="rounded-circle"
                    />
                  </div>
                  <div className="comment-text w-100">
                    <h6 className="font-medium">
                      John Doe <span className="text-muted">@JonteD</span>
                      <span className="text-muted float-right">
                        April 14, 2019
                      </span>
                    </h6>{" "}
                    <span className="m-b-15 d-block" style={{ color: "black" }}>
                      This is awesome website. I would love to comeback again.{" "}
                    </span>
                    <div className="comment-footer"> </div>
                  </div>
                </div>
                <div className="d-flex flex-row comment-row">
                  <div className="p-2">
                    <img
                      src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583246/AAA/2.jpg"
                      alt="user"
                      width={50}
                      className="rounded-circle"
                    />
                  </div>
                  <div
                    className="comment-text w-100"
                    style={{ backgroundColor: "#C4C4C4" }}
                  >
                    <h6 className="font-medium">
                      John Doe <span className="text-muted">@JonteD</span>
                      <span className="text-muted float-right">
                        April 14, 2019
                      </span>
                    </h6>{" "}
                    <span className="m-b-15 d-block" style={{ color: "black" }}>
                      This is awesome website. I would love to comeback again.{" "}
                    </span>
                    <div className="comment-footer"> </div>
                  </div>
                </div>
                <div className="d-flex flex-row comment-row">
                  <div className="p-2">
                    <img
                      src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583246/AAA/2.jpg"
                      alt="user"
                      width={50}
                      className="rounded-circle"
                    />
                  </div>
                  <div className="comment-text w-100">
                    <h6 className="font-medium">
                      John Doe <span className="text-muted">@JonteD</span>
                      <span className="text-muted float-right">
                        April 14, 2019
                      </span>
                    </h6>{" "}
                    <span className="m-b-15 d-block" style={{ color: "black" }}>
                      This is awesome website. I would love to comeback again.{" "}
                    </span>
                    <div className="comment-footer"> </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Comment Input */}
            <div className="card my-4">
              <div className="card-body" style={{ backgroundColor: "#E0E0E0" }}>
                <form>
                  <textarea
                    style={{ resize: "none", width: "300px" }}
                    placeholder="&#xf075; Type Your Comment"
                  ></textarea>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
      {/* Bootstrap core JavaScript */}
    </div>
  );
};

export default VideoChat;
