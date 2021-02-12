import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const SocialCard3Component = (props) => {

    const history = useHistory();

    const directToPost = () => {
        let route = `social-post`;
        history.push(route);
    }

  return (
    <div>
      <div className="social-card3" border-radius="10px">
        {/* Card content */}
        <div className="card-body d-flex flex-row">
          {/* Content */}
          <div className="col-md-12">
            {/* Subtitle */}
            <p onClick={directToPost}>
              <font size="4" style={{ textAlign: "center" }}>
                This is the amazing part of life. We now have to adjust to a new
                normal. All drivers are mandated to wear masks as they drive for
                the drive hailing. Taxis keep safe as life matters This is the
                amazing part of life. We now have to adjust to a new normal. All
                drivers are mandated to wear masks as they drive for the drive
                hailing. Taxis keep safe as life matters This is the amazing
                part of life. We now have to adjust to a new normal. All drivers
                are mandated to wear masks as they drive for the drive hailing.
                Taxis keep safe as life matters This is the amazing part of
                life. We now have to adjust to a new normal. All drivers are
                mandated to wear masks as they drive for the drive hailing.
                Taxis keep safe as life matters This is the amazing part of
                life. We now have to adjust to a new normal. All drivers are
                mandated to wear masks as they drive for the drive hailing.
                Taxis keep safe as life matters
              </font>
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="col-md-7 card-social-position-2">
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

SocialCard3Component.propTypes = {};

export default SocialCard3Component;
