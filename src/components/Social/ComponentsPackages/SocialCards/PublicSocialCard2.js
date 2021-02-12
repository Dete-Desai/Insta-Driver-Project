import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const PublicSocialCard2Component = (props) => {
    
  const history = useHistory();

  const directToPost = () => {
    let route = `social-post`;
    history.push(route);
  };

  return (
    <div>
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
            <p onClick={directToPost} className="post-comment">
              <font size="4">
                This is the amazing part of life. We now have to adjust to a new
                normal. All drivers are mandated to wear masks as they drive for
                the drive hailing. Taxis keep safe as life matters
              </font>
            </p>
          </div>
        </div>
        {/* Card image */}
        <div onClick={directToPost} className="col-md-12 card-image-position">
          <img
            className="card-image-size"
            src="dist/images/driverpic.png"
            alt="Card image cap"
          />
          <a href="/social-post">
            <div className="mask rgba-white-slight" />
          </a>
        </div>
        {/* Card content */}
        <br />
        <div className="col-md-12 card-social-position-2">
          <font size="5">
            <b style={{ color: "black" }}>700</b> Views
          </font>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <font size="5">
            <b style={{ color: "black" }}>500</b> Replies
          </font>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <font size="5">
            <b style={{ color: "black" }}>50</b> Reposts
          </font>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <font size="5">
            <b style={{ color: "black" }}>50</b> Likes
          </font>
        </div>
      </div>
      <br />
      <div
        className="col-md-7 card-social-position2"
        style={{ marginLeft: 230 }}
      >
        <i
          onClick={directToPost}
          className="far fa-comment"
          style={{ fontSize: 36 }}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <i className="fa fa-eye" style={{ fontSize: 36 }} aria-hidden="true" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <i className="fas fa-retweet" style={{ fontSize: 36 }} />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <i className="far fa-heart" style={{ fontSize: 36 }} />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <i className="fas fa-share-alt" style={{ fontSize: 36 }} />
      </div>
    </div>
  );
};

PublicSocialCard2Component.propTypes = {};

export default PublicSocialCard2Component;
