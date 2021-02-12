import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const PublicCommentSocialCard1Component = (props) => {
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
    <div className="social-comment-card1" border-radius="10px">
      {/* Card content */}
      <div className="col-md-12 card-body d-flex flex-row justify-content-between">
        {/* Avatar */}
        <img
          src="dist/images/blackjohn.png"
          className="rounded-circle mr-3"
          height="50px"
          width="50px"
          alt="avatar"
        />
        {/* Content */}
        <div className="col-md-12 d-flex justify-content-between">
          {/* Title */}
          <h6 className="card-title font-weight-bold mb-2">
            John Doe&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <font size="2" style={{ color: "rgb(163, 153, 153)" }}>
              @johntheD&nbsp;&nbsp;2h
            </font>
            <font size="4">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Invest With Us{" "}
            </font>
            <button
              onClick={directToGroups}
              className="social-button3 social-button3 social-button-3"
              style={{ marginLeft: 110 }}
            >
              Go To Group
            </button>
          </h6>
        </div>
      </div>
      <div className="col-md-12">
        {/* Subtitle */}
        <p onClick={directToPost} className="post-comment">
          <font size="4">
            This is the amazing part of life. We now have to adjust to a new
            normal. All drivers are mandated to wear masks as they drive for the
            drive hailing. Taxis keep safe as life matters
          </font>
        </p>
      </div>

      {/* Card content */}
      <div
        className="col-md-12 card-social-position"
        style={{ marginLeft: 10 }}
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

PublicCommentSocialCard1Component.propTypes = {};

export default PublicCommentSocialCard1Component;
