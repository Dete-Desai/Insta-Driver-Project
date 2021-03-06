import React from "react";
import { useHistory } from "react-router-dom";
import { SearchPage } from "../../../components/Main/SearchBar";
import {
  SocialCard2,
  CommentSocialCard2,
  ReplySocialCard,
} from "../ComponentsPackages/SocialCards/SocialCardsComponents";
import { AdvertisementCard2 } from "../ComponentsPackages/TrendCards/TrendCardsComponents";

const InstadriverGroups3 = (props) => {
  const history = useHistory();

  const directToInstadriverGroups = () => {
    let route = `instadriver-group`;
    history.push(route);
  };
  const directToVideoChat = () => {
    let route = `video-chat`;
    history.push(route);
  };
  const directToGaming = () => {
    let route = `gaming-page`;
    history.push(route);
  };
  const directToAbout = () => {
    let route = `about-group`;
    history.push(route);
  };
  const directToPosts = () => {
    let route = `instadriver-group`;
    history.push(route);
  };
  const directToMembers = () => {
    let route = `group-members`;
    history.push(route);
  };
  const directToAnnouncement = () => {
    let route = `group-announcements`;
    history.push(route);
  };
  const directToMediaFiles = () => {
    let route = `group-media-files-photos`;
    history.push(route);
  };
  const directToInstadriverGroups3 = () => {
    let route = `instadriver-group-comment-reply-1`;
    history.push(route);
  };

  return (
    <div className="container">
      <main role="main" className="col-lg-12  px-1" style={{ right: 80 }}>
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-md-9">
            <div>
              <b
                onClick={directToInstadriverGroups}
                style={{ fontSize: 24, marginLeft: 50, cursor: "pointer" }}
              >
                Instadriver Groups
              </b>
              <b
                onClick={directToVideoChat}
                style={{ fontSize: 24, marginLeft: 150, cursor: "pointer" }}
              >
                Video Chat
              </b>
              <b
                onClick={directToGaming}
                style={{ fontSize: 24, marginLeft: 150, cursor: "pointer" }}
              >
                Gaming
              </b>
              <div className="row">
                <button className="line-button" style={{ marginLeft: 50 }} />
                <hr
                  style={{
                    width: "95%",
                    textAlign: "left",
                    marginLeft: 0,
                    marginTop: 0,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <SearchPage />
          </div>
          <div className="col-md-1" style={{ left: 230 }}>
            <i
              className="fa fa-caret-down"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ fontSize: 36 }}
            />
            <div
              className="dropdown-menu dropdown-account-card-center"
              aria-labelledby="dropdownMenuButton"
            >
              <div className="col-sm-12 account-card">
                <AdvertisementCard2 />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row" style={{ width: "120%" }}>
          <img
            className="group-image-size"
            src="dist/images/taxi.png"
            alt="Card image cap"
          />
        </div>
        <br />
        <div className="row">
          <div className="col-md-5 group-info-tag">
            <font style={{ fontSize: 27 }} color="#5f6666">
              Group Name:{" "}
            </font>
            <font style={{ fontSize: 27 }}>
              <b>Drivers Can't Breath</b>
            </font>
          </div>
          <div className="col-md-7" style={{ left: 40 }}>
            <font style={{ fontSize: 27 }} color="#aaa1a1">
              <b>" When we come together we move mountains "</b>
            </font>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-11">
            <font style={{ fontSize: 28 }} color="orange">
              100K Members; 700K Posts
            </font>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-11">
            <div className="line-button-text">
              <b
                onClick={directToAbout}
                style={{ fontSize: 28, marginLeft: 50, cursor: "pointer" }}
              >
                About
              </b>
              <b
                onClick={directToPosts}
                style={{ fontSize: 28, marginLeft: 50, cursor: "pointer" }}
              >
                Posts
              </b>
              <b
                onClick={directToMembers}
                style={{ fontSize: 28, marginLeft: 50, cursor: "pointer" }}
              >
                Members
              </b>
              <b
                onClick={directToAnnouncement}
                style={{ fontSize: 28, marginLeft: 50, cursor: "pointer" }}
              >
                Announcement
              </b>
              <b
                onClick={directToMediaFiles}
                style={{ fontSize: 28, marginLeft: 50, cursor: "pointer" }}
              >
                Media & Files
              </b>
              <div className="row">
                <button
                  className="line-button1"
                  style={{ marginLeft: 180, width: "105px", height: "9px" }}
                />
                <hr
                  style={{
                    width: "94%",
                    textAlign: "left",
                    marginLeft: 0,
                    marginTop: 0,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-1" style={{ right: 35 }}>
            <button className="social-button2 social-button2 social-button-2">
              <b>Join Group</b>
            </button>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-md-12" style={{ left: "20%" }}>
            <div onClick={directToPosts} className="row post-direction-icon">
              <div className="col-sm-1">
                <i className="fa fa-caret-left" style={{ fontSize: 36 }} />
              </div>
              <div className="col-sm-11">
                <h4>Return To Original Post</h4>
              </div>
            </div>
            <br />
            <CommentSocialCard2 />
            <br />
            <ReplySocialCard />
            <br />
            <ReplySocialCard />
            <br />
            <br />
            <br />
            <SocialCard2 />
            <br />
            <br />
            <CommentSocialCard2 />
            <br />
            <CommentSocialCard2 />
            <br />
            <ReplySocialCard />
            <br />
            <ReplySocialCard />
            <br />
            <br />
            <br />
            <SocialCard2 />
            <br />
            <br />
            <CommentSocialCard2 />
            <br />
            <CommentSocialCard2 />
            <br />
            <ReplySocialCard />
            <br />
            <br />
            <br />
            <button className="Social-button  social-button1 social-button-1">
              <b>Show More</b>
            </button>
            <br />
          </div>
        </div>
        <br />
        <br />
      </main>
      <br />
    </div>
  );
};

InstadriverGroups3.propTypes = {};

export default InstadriverGroups3;
