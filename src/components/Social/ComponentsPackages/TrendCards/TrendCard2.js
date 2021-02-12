import React from "react";
import PropTypes from "prop-types";

const TrendCard2 = (props) => {
  return (
    <div>
      <br />
      <div className="flex-row">
        <h4>
          <b>Your Groups</b>
        </h4>
        <hr style={{ width: "100%", textAlign: "left", marginLeft: 0 }} />
      </div>
      <div className="d-flex flex-row">
        <div className="row">
          {/* Avatar */}
          <div className="col-sm-3">
            <img
              src="dist/images/order.png"
              className="rounded-circle mr-3"
              height="70px"
              width="70px"
              alt="avatar"
            />
          </div>
          {/* Content */}
          {/* Title */}
          <div className="col-sm-9">
            <h6 className="card-title font-weight-bold mb-1">
              Drivers For Justice
            </h6>
            <span>12k Members</span>
          </div>
        </div>
      </div>
      <hr style={{ width: "100%", textAlign: "left", marginLeft: 0 }} />
      <div className="d-flex flex-row">
        <div className="row">
          {/* Avatar */}
          <div className="col-sm-3">
            <img
              src="dist/images/dollars.png"
              className="rounded-circle mr-3"
              height="70px"
              width="70px"
              alt="avatar"
            />
          </div>
          {/* Content */}
          {/* Title */}
          <div className="col-sm-9">
            <h6 className="card-title font-weight-bold mb-1">
              Empower Drivers Financially
            </h6>
            <span>12k Members</span>
          </div>
        </div>
      </div>
      <hr style={{ width: "100%", textAlign: "left", marginLeft: 0 }} />
      <div className="d-flex flex-row">
        <div className="row">
          {/* Avatar */}
          <div className="col-sm-3">
            <img
              src="dist/images/order.png"
              className="rounded-circle mr-3"
              height="70px"
              width="70px"
              alt="avatar"
            />
          </div>
          {/* Content */}
          {/* Title */}
          <div className="col-sm-9">
            <h6 className="card-title font-weight-bold mb-1">
              Drivers For Justice
            </h6>
            <span>12k Members</span>
          </div>
        </div>
      </div>
      <hr style={{ width: "100%", textAlign: "left", marginLeft: 0 }} />
      <div className="d-flex flex-row">
        <div className="row">
          {/* Avatar */}
          <div className="col-sm-3">
            <img
              src="dist/images/dollars.png"
              className="rounded-circle mr-3"
              height="70px"
              width="70px"
              alt="avatar"
            />
          </div>
          {/* Content */}
          {/* Title */}
          <div className="col-sm-9">
            <h6 className="card-title font-weight-bold mb-1">
              Empower Drivers Financially
            </h6>
            <span>12k Members</span>
          </div>
        </div>
      </div>
      <hr style={{ width: "100%", textAlign: "left", marginLeft: 0 }} />
      <button className="Social-button  social-button1-2 social-button-1">
        <b>Show More</b>
      </button>
    </div>
  );
};

TrendCard2.propTypes = {};

export default TrendCard2;
