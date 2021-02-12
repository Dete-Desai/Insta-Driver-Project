import React from "react";
import PropTypes from "prop-types";

const CreateVideo = (props) => {
  return (
    <div>
      <div className="container" style={{ marginLeft: "550px" }}>
        <div className="container my-4">
          <p
            style={{
              color: "#7B7B7B;",
              fontSize: "27px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "49px",
              textAlign: "left",
            }}
          >
            <strong>
              <u>Create Video</u>
            </strong>
          </p>
        </div>
      </div>
      <div>
        <div className="container my-3" style={{ marginLeft: "550px" }}>
          <p
            style={{
              color: "#A9A9A9;",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "48px",
              textAlign: "left",
            }}
          >
            <strong>Video Status</strong>
          </p>

          <div className="d-flex align-items-center">
            <input
              className="mr-4"
              type="radio"
              name="radio"
              id="radio1"
              defaultChecked="true"
            />{" "}
            <label
              className="radio mr-3"
              htmlFor="radio1"
              style={{ fontSize: "27px" }}
            >
              Public(Random Drivers Can Join)
            </label>
          </div>
          <br />
          <div className="d-flex align-items-center">
            <input className="mr-4" type="radio" name="radio" id="radio2" />{" "}
            <label htmlFor="radio2" style={{ fontSize: "27px" }}>
              Private (Only Drivers You Invite Can Join)
            </label>
          </div>
        </div>

        <div className="container my-4 mr-3">
          <span className="fas fa-search form-control-feedback custom-color"></span>
          <input
            type="text"
            style={{ backgroundColor: "#C4C4C4", borderRadius: "50px" }}
            className="form-control input"
            id="email"
            placeholder="Add Drivers or Groups to This Video Call"
          />
          <br />
          <br />
          <p style={{ color: "#A9A9A9", fontWeight: "400px" }}>
            <b>Added Groups</b>
          </p>
          <div
            className="card my-4"
            style={{ width: "45rem", backgroundColor: "white" }}
          >
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="d-flex flex-row comment-row m-t-0">
                    <div className="p-2">
                      <button id="x">X</button>
                      <br />
                      <img
                        src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583336/AAA/4.jpg"
                        alt="user"
                        width={50}
                        className="rounded-circle"
                      />
                    </div>
                    <div className="comment-text w-100">
                      <br />
                      <span className="font-medium" style={{ color: "black" }}>
                        <h6>Empower Drivers Globally</h6>{" "}
                        <div className="d-flex align-items-center">
                          <p>12K members</p>
                          <a style={{ color: "#FFBB00" }} className="m-0">
                            View members
                          </a>
                        </div>
                      </span>
                    </div>
                  </div>{" "}
                </div>
                <div className="col">
                  <div className="d-flex flex-row comment-row m-t-0">
                    <div className="p-2">
                      <button id="x">X</button>
                      <br />
                      <img
                        src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583336/AAA/4.jpg"
                        alt="user"
                        width={50}
                        className="rounded-circle"
                      />
                    </div>
                    <div className="comment-text w-100">
                      <br />
                      <span className="font-medium" style={{ color: "black" }}>
                        <h6>Empower Drivers Globally</h6>{" "}
                        <div className="d-flex align-items-center">
                          <p>12K members</p>
                          <a style={{ color: "#FFBB00" }} className="m-0">
                            View members
                          </a>
                        </div>
                      </span>
                    </div>
                  </div>{" "}
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="d-flex flex-row comment-row m-t-0">
                    <div className="p-2">
                      <button id="x">X</button>
                      <br />
                      <img
                        src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583336/AAA/4.jpg"
                        alt="user"
                        width={50}
                        className="rounded-circle"
                      />
                    </div>
                    <div className="comment-text w-100">
                      <br />
                      <span className="font-medium" style={{ color: "black" }}>
                        <h6>Empower Drivers Globally</h6>{" "}
                        <div className="d-flex align-items-center">
                          <p>12K members</p>
                          <a style={{ color: "#FFBB00" }} className="m-0">
                            View members
                          </a>
                        </div>
                      </span>
                    </div>
                  </div>{" "}
                </div>
                <div className="col">
                  <div className="d-flex flex-row comment-row m-t-0">
                    <div className="p-2">
                      <button id="x">X</button>
                      <br />
                      <img
                        src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583336/AAA/4.jpg"
                        alt="user"
                        width={50}
                        className="rounded-circle"
                      />
                    </div>
                    <div className="comment-text w-100">
                      <br />
                      <span className="font-medium" style={{ color: "black" }}>
                        <h6>Empower Drivers Globally</h6>{" "}
                        <div className="d-flex align-items-center">
                          <p>12K members</p>
                          <a style={{ color: "#FFBB00" }} className="m-0">
                            View members
                          </a>
                        </div>
                      </span>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <p style={{ color: "#A9A9A9", fontWeight: "400px" }}>
            <b>Added Drivers</b>
          </p>
          <div
            className="card my-2"
            style={{ width: "45rem", backgroundColor: "white" }}
          >
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="d-flex flex-row comment-row m-t-0">
                    <div className="p-2">
                      <button id="x">X</button>
                      <br />
                      <img
                        src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583336/AAA/4.jpg"
                        alt="user"
                        width={100}
                        className="rounded-circle"
                      />
                      <span className="caption" style={{ color: "black" }}>
                        <p>
                          <b>Kary John</b>
                          <br />
                          @JclassName="
                          <hr />
                        </p>
                      </span>
                      <h6 style={{ color: "#FFBB00" }}>New York, USA</h6>
                    </div>
                  </div>{" "}
                </div>
                <div className="col">
                  <div className="d-flex flex-row comment-row m-t-0">
                    <div className="p-2">
                      <button id="x">X</button>
                      <br />
                      <img
                        src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583336/AAA/4.jpg"
                        alt="user"
                        width={100}
                        className="rounded-circle"
                      />
                      <span className="caption" style={{ color: "black" }}>
                        <p>
                          <b>Kary John</b>
                          <br />
                          @Johnted <hr />
                        </p>
                      </span>
                      <h6 style={{ color: "#FFBB00" }}>New York, USA</h6>
                    </div>
                    <div className="comment-text w-100">
                      <br />
                    </div>
                  </div>{" "}
                </div>
                <div className="col">
                  <div className="d-flex flex-row comment-row m-t-0">
                    <div className="p-2">
                      <button id="x">X</button>
                      <br />
                      <img
                        src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583336/AAA/4.jpg"
                        alt="user"
                        width={100}
                        className="rounded-circle"
                      />
                      <span className="me="caption" style={{ color: "black" }}>
                        <p>
                          <b>Kary John</b>
                          <br />
                          @Johnted <hr />
                        </p>
                      </span>
                      <h6 style={{ color: "#FFBB00" }}>New York, USA</h6>
                    </div>
                  </div>{" "}
                </div>
                <div className="col">
                  <div className="d-flex flex-row comment-row m-t-0">
                    <div className="p-2">
                      <button id="x">X</button>
                      <br />
                      <img
                        src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583336/AAA/4.jpg"
                        alt="user"
                        width={100}
                        className="rounded-circle"
                      />
                      <span className="me="caption" style={{ color: "black" }}>
                        <p>
                          <b>Kary John</b>
                          <br />
                          @Johnted <hr />
                        </p>
                      </span>
                      <h6 style={{ color: "#FFBB00" }}>New York, USA</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="d-flex flex-row comment-row m-t-0">
                    <div className="p-2">
                      <button id="x">X</button>
                      <br />
                      <img
                        src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583336/AAA/4.jpg"
                        alt="user"
                        width={100}
                        className="rounded-circle"
                      />
                      <span className="caption" style={{ color: "black" }}>
                        <p>
                          <b>Kary John</b>
                          <br />
                          @Johnted <hr />
                        </p>
                      </span>
                      <h6 style={{ color: "#FFBB00" }}>New York, USA</h6>
                    </div>
                  </div>{" "}
                </div>
                <div className="col">
                  <div className="d-flex flex-row comment-row m-t-0">
                    <div className="p-2">
                      <button id="x">X</button>
                      <br />
                      <img
                        src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583336/AAA/4.jpg"
                        alt="user"
                        width={100}
                        className="rounded-circle"
                      />
                      <span className="caption" style={{ color: "black" }}>
                        <p>
                          <b>Kary John</b>
                          <br />
                          @Johnted <hr />
                        </p>
                      </span>
                      <h6 style={{ color: "#FFBB00" }}>New York, USA</h6>
                    </div>
                  </div>{" "}
                </div>
                <div className="col">
                  <div className="d-flex flex-row comment-row m-t-0">
                    <div className="p-2">
                      <button id="x">X</button>
                      <br />
                      <img
                        src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583336/AAA/4.jpg"
                        alt="user"
                        width={100}
                        className="rounded-circle"
                      />
                      <span className="caption" style={{ color: "black" }}>
                        <p>
                          <b>Kary John</b>
                          <br />
                          @Johnted <hr />
                        </p>
                      </span>
                      <h6 style={{ color: "#FFBB00" }}>New York, USA</h6>
                    </div>
                  </div>{" "}
                </div>
                <div className="col">
                  <div className="d-flex flex-row comment-row m-t-0">
                    <div className="p-2">
                      <button id="x">X</button>
                      <br />
                      <img
                        src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583336/AAA/4.jpg"
                        alt="user"
                        width={100}
                        className="rounded-circle"
                      />
                      <span className="caption" style={{ color: "black" }}>
                        <p>
                          <b>Kary John</b>
                          <br />
                          @Johnted <hr />
                        </p>
                      </span>
                      <h6 style={{ color: "#FFBB00" }}>New York, USA</h6>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-default"
            style={{
              backgroundColor: "#FFBB00",
              borderRadius: "50px",
              color: "white",
              fontSize: "27px",
            }}
          >
            Create Video
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

CreateVideo.propTypes = {};

export default CreateVideo;
