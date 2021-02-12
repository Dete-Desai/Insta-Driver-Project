import React from "react";
import PropTypes from "prop-types";

const TrendCard3 = (props) => {
  return (
    <div>
      <br />
      <div className="d-flex flex-row account-card-profile">
        <div className="row" style={{ marginTop: 25, marginLeft: 10 }}>
          {/* Avatar */}
          <div className="col-sm-3">
            <img
              src="dist/images/blackjohn.png"
              className="rounded-circle mr-3"
              height="110px"
              width="110px"
              alt="avatar"
            />
          </div>
          {/* Content */}
          {/* Title */}
          <div className="col-sm-9">
            <h5 className="card-title font-weight-bold mb-1">My Account</h5>
            <br />
            <br />
            <span>Go To Your Proffesional Camp</span>
          </div>
        </div>
      </div>
      <br />
      <font size="4" color="yellow">
        <b>Or Quickly Jump Into These Sections</b>
      </font>
      <hr
        color="white"
        style={{ width: "100%", textAlign: "left", marginLeft: 0 }}
      />
      <div className="d-flex flex-row account-card-hover">
        <div className="row">
          {/* Avatar */}
          <div className="col-sm-3">
            <i className="far fa-square" style={{ fontSize: 36 }} />
          </div>
          {/* Content */}
          {/* Title */}
          <div className="col-sm-9" style={{ width: 300 }}>
            <font size="5">
              <b>My Posts & Reposts</b>
            </font>
          </div>
        </div>
      </div>
      <hr
        color="white"
        style={{ width: "100%", textAlign: "left", marginLeft: 0 }}
      />
      <div className="d-flex flex-row account-card-hover">
        <div className="row">
          {/* Avatar */}
          <div className="col-sm-3">
            <i className="fa fa-envelope-o" style={{ fontSize: 36 }} />
          </div>
          {/* Content */}
          {/* Title */}
          <div className="col-sm-9" style={{ width: 160 }}>
            <font size="5">
              <b>Inbox</b>
            </font>
          </div>
        </div>
      </div>
      <hr
        color="white"
        style={{ width: "100%", textAlign: "left", marginLeft: 0 }}
      />
      <div className="d-flex flex-row account-card-hover">
        <div className="row">
          {/* Avatar */}
          <div className="col-sm-3">
            <i className="fas fa-project-diagram" style={{ fontSize: 36 }} />
          </div>
          {/* Content */}
          {/* Title */}
          <div className="col-sm-9" style={{ width: 250 }}>
            <font size="5">
              <b>My Organization</b>
            </font>
          </div>
        </div>
      </div>
      <hr
        color="white"
        style={{ width: "100%", textAlign: "left", marginLeft: 0 }}
      />
      <div className="d-flex flex-row account-card-hover">
        <div className="row">
          {/* Avatar */}
          <div className="col-sm-3">
            <i className="far fa-bell" style={{ fontSize: 36 }} />
          </div>
          {/* Content */}
          {/* Title */}
          <div className="col-sm-9" style={{ width: 230 }}>
            <font size="5">
              <b>Notifications</b>
            </font>
          </div>
        </div>
      </div>
    </div>
  );
};

TrendCard3.propTypes = {};

export default TrendCard3;
