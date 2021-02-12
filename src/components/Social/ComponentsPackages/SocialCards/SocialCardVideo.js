import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const SocialCardVideoComponent = (props) => {
  const history = useHistory();

  const directToPost = () => {
    let route = `social-post`;
    history.push(route);
  };

  return (
    <div className="social-card4" border-radius="10px">
      {/* Card image */}
      <div onClick={directToPost} className="col-md-12" style={{ right: 15 }}>
        <img
          style={{
            border: "2px",
            borderRadius: "20px",
            height: 650,
            width: 801,
          }}
          src="dist/images/v7.png"
          alt="Card image cap"
        />
        <a href="/social-post">
          <div className="mask rgba-white-slight" />
        </a>
      </div>
      {/* Card content */}
      <div className="card-body d-flex flex-row">
        {/* Avatar */}
        <img
          src="dist/images/whitejohn.png"
          className="rounded-circle mr-3"
          height="50px"
          width="50px"
          alt="avatar"
        />
        {/* Content */}
        <div className="col-md-12">
          {/* Title */}
          <h6 className="card-title font-weight-bold mb-2">
            John Doe&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <font size="2" style={{ color: "rgb(163, 153, 153)" }}>
              @johntheD&nbsp;&nbsp;2h
            </font>
          </h6>
          {/* Subtitle */}
          <p
            onClick={directToPost}
            className="post-comment"
            style={{ backgroundColor: "#d4f3f7" }}
          >
            <font size="4">
              This is the amazing part of life. We now have to adjust to a new
              normal. All drivers are mandated to wear masks as they drive for
              the drive hailing. Taxis keep safe as life matters
            </font>
          </p>
        </div>
      </div>
      {/* Card content */}
      <br />
      <div
        className="col-md-7 card-social-position2"
        style={{ marginLeft: 150 }}
      >
        <i
          onClick={directToPost}
          className="far fa-comment"
          style={{ fontSize: 36 }}
        />
        &nbsp;<font size="5">40</font>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <i className="fa fa-eye" style={{ fontSize: 36 }} aria-hidden="true" />
        &nbsp;<font size="5">90</font>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <i className="fas fa-retweet" style={{ fontSize: 36 }} />
        &nbsp;<font size="5">12</font>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <i className="far fa-heart" style={{ fontSize: 36 }} />
        &nbsp;<font size="5">7k</font>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <i className="fas fa-share-alt" style={{ fontSize: 36 }} />
      </div>
    </div>
  );
};

SocialCardVideoComponent.propTypes = {};

export default SocialCardVideoComponent;
