import React, { useState } from "react";
import Player from "../Player";
import EllipsePopUp from "../EllipsePopUp";
import Reward from "react-rewards";

const PlayLivestream = ({
  toggleChatDiv,
  showChat,
  toggleSereneMode,
  sereneMode,
  goBack,
  search,
  pastStream,
  triggerPopUp,
  currPlayingVideo,
}) => {
  const [showEllipseDiv, setShowEllipseDiv] = useState(false);
  const [streamEnded, setStreamEnded] = useState(false);
  const [paused, setPaused] = useState(true);
  const [muted, setMuted] = useState(false);
  const [like, setLike] = useState(false);

  let reward = React.createRef();
  const likeVideo = () => {
    setLike(!like);
    if (like) {
      reward.rewardMe();
      document.getElementById("heart").style.color = "red";
    } else {
      document.getElementById("heart").style.color = "#fff";
    }
  };

  const closeEllipse = () => {
    setShowEllipseDiv(false);
  };

  let isAuthenticated = false;

  const config = {
    angle: 90,
    emoji: ["❤", "💚"],
  };

  return (
    <React.Fragment>
      <div className="livestream-player-section">
        <div className="livestream-player-actions">
          <div className="player-wrapper">
            {streamEnded ? (
              <span onClick={() => setPaused(!paused)}>
                {paused ? (
                  <i className="far fa-pause-circle"></i>
                ) : (
                  <i className="far fa-play-circle"></i>
                )}
              </span>
            ) : (
              <span onClick={() => setStreamEnded(true)} className="live-red">
                LIVE
              </span>
            )}
            <span>
              <i className="fas fa-comment"></i>40
            </span>
            <span>
              <i className="fas fa-eye"></i>90
            </span>
            <span onClick={() => setMuted(!muted)}>
              {muted ? (
                <i className="fas fa-volume-mute"></i>
              ) : (
                <i className="fas fa-volume-up"></i>
              )}
            </span>
            {isAuthenticated ? (
              <span id="heart">
                <Reward
                  ref={(ref) => (reward = ref)}
                  type="emoji"
                  config={config}
                >
                  <i className="fas fa-heart" onClick={() => likeVideo()}></i>
                </Reward>
              </span>
            ) : (
              <span id="heart" onClick={() => triggerPopUp()}>
                <i className="fas fa-heart"></i>
              </span>
            )}
            <span onClick={() => setShowEllipseDiv(!showEllipseDiv)}>
              <i className="fas fa-ellipsis-v"></i>
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PlayLivestream;
