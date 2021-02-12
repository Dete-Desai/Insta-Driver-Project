import React, { useState } from "react";
import Player from "../../Livestream/Player";
import PlayLivestream from "./PlayLivestream";
import EllipsePopUp from "../../Livestream/EllipsePopUp";
import Reward from "react-rewards";
import { useHistory } from "react-router-dom";
import "../../../dist/css/driverpostreposts.css";
import EclipseProfile from "../../../dist/ProfilePictures/EclipseProfile.png";
import LivestreamVideoIcon from "../../../dist/icons/LivestreamVideoIcon.svg";
import LivestreamImage1 from "../../../dist/ProfilePictures/LivestreamImage1.png";
import SenderIcon from "../../../dist/icons/SenderIcon.svg";

const LiveStreamCard = () => {
  const [messages, setMessages] = useState();
  const [comment, setComment] = useState("");
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [showEmojis, setShowEmojis] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    if (chosenEmoji) {
      setComment(comment + chosenEmoji.emoji);
    }
  };

  const handleClick = () => {
    if (comment !== "") {
      const message = {
        id: new Date().getSeconds(),
        author: "John Doe",
        username: "@JohntheD",
        time: "5h",
        comment: comment,
        avatar:
          "https://images.unsplash.com/photo-1608093602525-45b7d7b320e0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      };
      setMessages((current) => [...current, message]);
      setComment("");
      setShowEmojis(false);
      setChosenEmoji(null);
    }
    return;
  };

  const history = useHistory();

  const directToGroups = () => {
    let route = `instadriver-group`;
    history.push(route);
  };

  return (
    <div className="live-stream-card">
      <div className="row">
        <div className="col-md-2">
          <img className="image-profile-card" src={EclipseProfile} />
        </div>
        <div className="col-md-10">
          <h6 className="profile-name-card mb-2">
            John Doe&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <font size="2" style={{ color: "rgb(163, 153, 153)" }}>
              @johntheD&nbsp;&nbsp;2h&nbsp;&nbsp;started streaming 20hrs ago
            </font>
            <image
              src={LivestreamVideoIcon}
              style={{ width: "20px", height: "20px" }}
            />
            <button
              onClick={directToGroups}
              className="livestream-post-btn"
              style={{ marginLeft: 60, marginTop: 20 }}
            >
              Visit Livestream
            </button>
          </h6>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <div className="live-stream-post-image-card">
            {/* <img className="livestream-image-card" src={LivestreamImage1} /> */}
            <iframe
              className="livestream-image-card"
              src="https://www.youtube.com/embed/v22KIEe1xwY?autoplay=1&mute=1"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-5">
          <div className="live-stream-comment-card">
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
              <div className="comment-space">
                <span className="comment-font">
                  This is the amazing part of life. We now have to adjust to a
                  new normal. All drivers are mandated to wear masks as they
                  drive for the ride-hailing taxis. Keep safe, life matters.
                </span>
              </div>
            </div>
            <div className="row" style={{ marginTop: 200 }}>
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
              <div className="comment-space1">
                <span className="comment-font1">
                  This is the amazing part of life. We now have to adjust to a
                  new normal. All drivers are mandated to wear masks as they
                  drive for the ride-hailing taxis. Keep safe, life matters.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ marginTop: 580, marginLeft: 60 }}>
        <div className="livestream-message-area" style={{ width: 680 }}>
          <div className="livestream-text-area">
            <div className="livestream-text-input">
              <div>
                <input
                  type="text"
                  value={comment}
                  required
                  onChange={(e) => setComment(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.code === "Enter") {
                      handleClick();
                    }
                  }}
                  className="custom-input-live"
                  placeholder="Type your comment"
                  maxLength={150}
                />
                <span onClick={() => setShowEmojis(!showEmojis)}>
                  <i className="far fa-grin-alt"></i>
                </span>
              </div>
              <div className="livestream-send">
                <span onClick={() => handleClick()}>
                  <i className="far fa-paper-plane"></i>
                </span>
                <span className="span-smaller">0/150</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveStreamCard;
