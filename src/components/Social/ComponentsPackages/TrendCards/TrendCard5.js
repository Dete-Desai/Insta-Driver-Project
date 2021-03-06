import React from "react";
import PropTypes from "prop-types";

const TrendCard5 = (props) => {
  return (
    <div className="trending-hashtag-card" border-radius="10px">
      {/* Card content */}
      <div className="row">
        <span className="tab-header">
          <b>Trending hashtags</b>
        </span>
      </div>
      <div
        className="row"
        style={{
          borderTop: "2px solid grey ",
          marginLeft: 20,
          marginRight: 20,
        }}
      ></div>
      <br />
      <div className="card-body d-flex flex-row">
        <div className="col-md-6">
          <div className="row">
            {/* Avatar */}
            <div className="col-sm-3">
              <img
                src="dist/images/hashtag.png"
                className="rounded-circle mr-3"
                height="70px"
                width="70px"
                alt="avatar"
              />
            </div>
            {/* Content */}
            {/* Title */}
            <div className="col-sd-6">
              <h5 className="card-title font-weight-bold mb-2">
                Empower Drivers Globaly
              </h5>
              <span>12k Members</span>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            {/* Avatar */}
            <div className="col-sm-3">
              <img
                src="dist/images/hashtag.png"
                className="rounded-circle mr-3"
                height="70px"
                width="70px"
                alt="avatar"
              />
            </div>
            {/* Content */}
            {/* Title */}
            <div className="col-sd-6">
              <h5 className="card-title font-weight-bold mb-2">
                Empower Drivers Globaly
              </h5>
              <span>12k Members</span>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="card-body d-flex flex-row">
        <div className="col-md-6">
          <div className="row">
            {/* Avatar */}
            <div className="col-sm-3">
              <img
                src="dist/images/hashtag.png"
                className="rounded-circle mr-3"
                height="70px"
                width="70px"
                alt="avatar"
              />
            </div>
            {/* Content */}
            {/* Title */}
            <div className="col-sd-6">
              <h5 className="card-title font-weight-bold mb-2">
                Empower Drivers Globaly
              </h5>
              <span>12k Members</span>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            {/* Avatar */}
            <div className="col-sm-3">
              <img
                src="dist/images/hashtag.png"
                className="rounded-circle mr-3"
                height="70px"
                width="70px"
                alt="avatar"
              />
            </div>
            {/* Content */}
            {/* Title */}
            <div className="col-sd-6">
              <h5 className="card-title font-weight-bold mb-2">
                Empower Drivers Globaly
              </h5>
              <span>12k Members</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TrendCard5.propTypes = {};

export default TrendCard5;
