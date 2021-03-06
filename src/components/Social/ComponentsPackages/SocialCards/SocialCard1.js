import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const SocialCard1Component = (props) => {
  const history = useHistory();

  const directToPost = () => {
    let route = `social-post`;
    history.push(route);
  };

  const directToGroups = () => {
    let route = `instadriver-group`;
    history.push(route);
  };

  return (
    <div className="social-card1" border-radius="10px">
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
            <font size="4">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Uber Drivers Group{" "}
            </font>
            <button
              onClick={directToGroups}
              className="social-button3 social-button3 social-button-3"
              style={{ marginLeft: 65 }}
            >
              Go To Group
            </button>
          </h6>
          {/* Subtitle */}
        </div>
      </div>
      <div className="col-md-12">
        <p
          onClick={directToPost}
          className="post-comment"
          style={{ backgroundColor: "#f5f5f5", margin: 0 }}
        >
          <font size="4">
            This is the amazing part of life. We now have to adjust to a new
            normal. All drivers are mandated to wear masks as they drive for the
            drive hailing. Taxis keep safe as life matters
          </font>
        </p>
      </div>

      {/* Card image */}
      <div onClick={directToPost} className="col-md-12 mt-2">
        <img
          className="card-image-size"
          src="dist/images/driverpic.png"
          alt="Card image cap"
        />
        <a href="//social-post">
          <div className="mask rgba-white-slight" />
        </a>
      </div>
      {/* Card content */}
      <br />
      <div className="col-md-12 card-social-position">
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

SocialCard1Component.propTypes = {};

export default SocialCard1Component;
