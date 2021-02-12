import React from "react";
import LivePostImage from "../../../../dist/ProfilePictures/LivePostImage.png";

const LivestreamPlayer = () => {
  return (
    <div className="row">
      <div className="livestream-image-post-card">
        {/* <image className="livestream-image-post" src={LivePostImage} /> */}
        {/* <iframe className="livestream-image-post" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1" /> */}
        <iframe
          className="livestream-image-post"
          src="https://www.youtube.com/embed/3pHRG7sBPNE?autoplay=1&mute=1"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default LivestreamPlayer;
