import React from "react";
import PropTypes from "prop-types";

// --------------- SocialCard1 ---------------
export const SocialCard1 = (props) => {
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
          </h6>
          {/* Subtitle */}
          <p className="post-comment">
            <font size="4">
              This is the amazing part of life. We now have to adjust to a new
              normal. All drivers are mandated to wear masks as they drive for
              the drive hailing. Taxis keep safe as life matters
            </font>
          </p>
        </div>
      </div>
      {/* Card image */}
      <div className="col-md-12 ">
        <img
          className="card-image-size"
          src="dist/images/driverpic.png"
          alt="Card image cap"
        />
        <a href="#!">
          <div className="mask rgba-white-slight" />
        </a>
      </div>
      {/* Card content */}
      <br />
      <div className="col-md-12 ">
        <i className="far fa-comment" style={{ fontSize: 36 }} />
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

SocialCard1.propTypes = {};

// --------------- SocialCard2 ---------------
export const SocialCard2 = (props) => {
  return (
    <div className="social-card2" border-radius="10px">
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
          <p className="post-comment">
            <font size="4">
              This is the amazing part of life. We now have to adjust to a new
              normal. All drivers are mandated to wear masks as they drive for
              the drive hailing. Taxis keep safe as life matters
            </font>
          </p>
        </div>
      </div>
      {/* Card image */}
      <div className="col-md-12">
        <img
          className="card-image-size"
          src="dist/images/driverpic.png"
          alt="Card image cap"
        />
        <a href="#!">
          <div className="mask rgba-white-slight" />
        </a>
      </div>
      {/* Card content */}
      <br />
      <div className="col-md-12 ">
        <i className="far fa-comment" style={{ fontSize: 36 }} />
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

SocialCard2.propTypes = {};

// --------------- CommentSocialCard1 ---------------
export const CommentSocialCard1 = (props) => {
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
        <div className="">
          {/* Title */}
          <h6 className="card-title font-weight-bold mb-2">
            John Doe&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <font size="2" style={{ color: "rgb(163, 153, 153)" }}>
              @johntheD&nbsp;&nbsp;2h
            </font>
          </h6>
        </div>
      </div>
      {/* Subtitle */}
      <div className="col-md-12">
        <p className="post-comment">
          <font size="4">
            This is the amazing part of life. We now have to adjust to a new
            normal. All drivers are mandated to wear masks as they drive for the
            drive hailing. Taxis keep safe as life matters
          </font>
        </p>
      </div>

      {/* Card content */}
      <div className="col-md-12 ">
        <i className="far fa-comment" style={{ fontSize: 36 }} />
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

CommentSocialCard1.propTypes = {};

// --------------- CommentSocialCard2 ---------------
export const CommentSocialCard2 = (props) => {
  return (
    <div className="social-comment-card2" border-radius="10px">
      {/* Card content */}
      <div className="card-body d-flex flex-row">
        {/* Avatar */}
        <img
          src="dist/images/blackjohn.png"
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
          <p className="post-comment">
            <font size="4">
              This is the amazing part of life. We now have to adjust to a new
              normal. All drivers are mandated to wear masks as they drive for
              the drive hailing. Taxis keep safe as life matters
            </font>
          </p>
        </div>
      </div>
      {/* Card content */}
      <div className="col-md-12 card-social-position">
        <i className="far fa-comment" style={{ fontSize: 36 }} />
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

CommentSocialCard2.propTypes = {};
