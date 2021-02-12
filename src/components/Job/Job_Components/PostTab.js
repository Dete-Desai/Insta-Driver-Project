import React from "react";
import "../../../dist/css/driverpostreposts.css";
import ConnectionIcon from "../../../dist/icons/PostTabIcons/ConnectionIcon.svg";
import FollowersIcon from "../../../dist/icons/PostTabIcons/FollowersIcon.svg";
import GroupJoinedIcon from "../../../dist/icons/PostTabIcons/GroupJoinedIcon.svg";
import GroupsIcon from "../../../dist/icons/PostTabIcons/GroupsIcon.svg";
import GroupVideoCallIcon from "../../../dist/icons/PostTabIcons/GroupVideoCallIcon.svg";
import InvitationIcon from "../../../dist/icons/PostTabIcons/InvitationIcon.svg";
import LiveStreamIcon from "../../../dist/icons/PostTabIcons/LiveStreamIcon.svg";
import MyPostsIcon from "../../../dist/icons/PostTabIcons/MyPostsIcon.svg";
import RepostIcon from "../../../dist/icons/PostTabIcons/RepostIcon.svg";

const PostTab = () => {
  return (
    <div className="post-tab ml-auto">
      <div className="row">
        <span className="tab-header">Get Social History $ Activities</span>
      </div>
      <div
        className="row"
        style={{
          borderTop: "2px solid grey ",
          marginLeft: 10,
          marginRight: 10,
        }}
      ></div>
      <br />
      <div className="" style={{ marginLeft: 20 }}>
        <div className="row">
          <div className="col-md-2">
            <img
              src={ConnectionIcon}
              style={{ width: "20px", height: "20px" }}
            />
          </div>
          <div className="col-md-6">
            <span>Connections</span>
          </div>
          <div className="col-md-2">
            <button className="tab-post-btn">23</button>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-2">
            <img
              src={FollowersIcon}
              style={{ width: "20px", height: "20px" }}
            />
          </div>
          <div className="col-md-6">
            <span>Invitations</span>
          </div>
          <div className="col-md-2">
            <button className="tab-post-btn">10</button>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-2">
            <img
              src={GroupJoinedIcon}
              style={{ width: "20px", height: "20px" }}
            />
          </div>
          <div className="col-md-6">
            <span>Followers</span>
          </div>
          <div className="col-md-2">
            <button className="tab-post-btn">23</button>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-2">
            <img src={GroupsIcon} style={{ width: "20px", height: "20px" }} />
          </div>
          <div className="col-md-6">
            <span>Following</span>
          </div>
          <div className="col-md-2">
            <button className="tab-post-btn">10</button>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-2">
            <img
              src={GroupVideoCallIcon}
              style={{ width: "20px", height: "20px" }}
            />
          </div>
          <div className="col-md-6">
            <span>Groups Joined</span>
          </div>
          <div className="col-md-2">
            <button className="tab-post-btn">10</button>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-2">
            <img src={InvitationIcon} />
          </div>
          <div className="col-md-6">
            <span>Groups Video Call Joined</span>
          </div>
          <div className="col-md-2">
            <button className="tab-post-btn">23</button>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-2">
            <img
              src={LiveStreamIcon}
              style={{ width: "20px", height: "20px" }}
            />
          </div>
          <div className="col-md-6">
            <span>Posts</span>
          </div>
          <div className="col-md-2">
            <button className="tab-post-btn">10</button>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-2">
            <img src={MyPostsIcon} style={{ width: "20px", height: "20px" }} />
          </div>
          <div className="col-md-6">
            <span>Reposts</span>
          </div>
          <div className="col-md-2">
            <button className="tab-post-btn">10</button>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-2">
            <img src={RepostIcon} style={{ width: "20px", height: "20px" }} />
          </div>
          <div className="col-md-6">
            <span>LiveStreams</span>
          </div>
          <div className="col-md-2">
            <button className="tab-post-btn">23</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostTab;
