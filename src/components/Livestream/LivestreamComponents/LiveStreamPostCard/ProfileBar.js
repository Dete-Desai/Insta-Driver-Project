import React from "react";
import { useHistory } from "react-router-dom";
import EclipseProfile from "../../../../dist/ProfilePictures/EclipseProfile.png";
import LivestreamVideoIcon from "../../../../dist/icons/LivestreamVideoIcon.svg";

const ProfileBar = () => {
  const history = useHistory();

  const directToLiveStream = () => {
    let route = `livestream-home`;
    history.push(route);
  };

  return (
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
            onClick={directToLiveStream}
            className="livestream-post-btn"
            style={{ marginLeft: 60, marginTop: 20 }}
          >
            Visit Livestream
          </button>
        </h6>
      </div>
    </div>
  );
};

export default ProfileBar;
