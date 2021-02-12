import React from "react";
import EclipseProfile from "../../../../dist/ProfilePictures/EclipseProfile.png";

const PostComments = () => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-2">
          <img className="image-comment-card " src={EclipseProfile} />
        </div>
        <div className="col-sm-10">
          <h6 className="comment-profile-name-card mb-2">
            John Doe&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <font size="2" style={{ color: "rgb(163, 153, 153)" }}>
              @johntheD&nbsp;&nbsp;5h
            </font>
          </h6>
        </div>
        <div className="post-comment-space">
          <span className="post-comment-font">
            This is the amazing part of life. We now have to adjust to a new
            normal. All drivers are mandated to wear masks as they drive for the
            ride-hailing taxis. Keep safe, life matters.
          </span>
        </div>
      </div>
      <div className="row" style={{ marginTop: 130 }}>
        <div className="col-sm-2">
          <img className="image-comment-card " src={EclipseProfile} />
        </div>
        <div className="col-sm-10">
          <h6 className="comment-profile-name-card mb-2">
            John Doe&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <font size="2" style={{ color: "rgb(163, 153, 153)" }}>
              @johntheD&nbsp;&nbsp;5h
            </font>
          </h6>
        </div>
        <div className="post-comment-space1">
          <span className="post-comment-font1">
            This is the amazing part of life. We now have to adjust to a new
            normal. All drivers are mandated to wear masks as they drive for the
            ride-hailing taxis. Keep safe, life matters.
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostComments;
