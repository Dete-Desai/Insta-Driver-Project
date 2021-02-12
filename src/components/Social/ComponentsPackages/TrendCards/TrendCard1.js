import React from "react";
import PropTypes from "prop-types";

const TrendCard1 = (props) => {
  return (
    <div>
      <br />
      <div className="flex-row">
        <h5>
          <b>Trending Posts,Groups & Hashtags</b>
        </h5>
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
              src="dist/images/hashtag.png"
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
              Drivers Cant breathe
            </h6>
            <span>1.2M Mentions</span>
          </div>
        </div>
      </div>
      <hr style={{ width: "100%", textAlign: "left", marginLeft: 0 }} />
      <div className="d-flex flex-row">
        <div className="row">
          {/* Avatar */}
          <div className="col-sm-4">
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
          <div className="col-sm-8">
            <h6 className="card-title font-weight-bold mb-1">Renew Your DL</h6>
            <span>500K Mentions</span>
          </div>
        </div>
      </div>
      <hr style={{ width: "100%", textAlign: "left", marginLeft: 0 }} />
      <div className="d-flex flex-row">
        {/* Avatar */}
        <img
          src="dist/images/blackjohn.png"
          className="rounded-circle mr-3"
          height="70px"
          width="70px"
          alt="avatar"
        />
        {/* Content */}
        <div className="col-md-12">
          {/* Title */}
          <h6 className="card-title font-weight-bold mb-1">
            John Doe&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <font size="2" style={{ color: "rgb(163, 153, 153)" }}>
              @johntheD&nbsp;&nbsp;2h
            </font>
          </h6>
          {/* Subtitle */}
          <p>
            <font size="4">This is the amazing part of life.</font>
          </p>
        </div>
      </div>
      <hr style={{ width: "100%", textAlign: "left", marginLeft: 0 }} />
      <div className="d-flex flex-row">
        {/* Avatar */}
        <img
          src="dist/images/femalejohn.png"
          className="rounded-circle mr-3"
          height="70px"
          width="70px"
          alt="avatar"
        />
        {/* Content */}
        <div className="col-md-12">
          {/* Title */}
          <h6 className="card-title font-weight-bold mb-1">
            John Doe&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <font size="2" style={{ color: "rgb(163, 153, 153)" }}>
              @johntheD&nbsp;&nbsp;2h
            </font>
          </h6>
          {/* Subtitle */}
          <p>
            <font size="4">This is the amazing part of life.</font>
          </p>
        </div>
      </div>
      <hr style={{ width: "100%", textAlign: "left", marginLeft: 0 }} />
      <button className="Social-button  social-button1-2 social-button-1">
        <b>Show More</b>
      </button>
    </div>
  );
};

TrendCard1.propTypes = {};

export default TrendCard1;
