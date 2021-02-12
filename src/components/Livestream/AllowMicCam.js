import React from 'react';

const AllowMicCam = ({ setAllowed }) => {
  return (
    <div className="row">
      <div className="col-md-5 mx-auto mt-5 mb-5">
        <div className="card card-body livestream-navigator">
          <div className="wantsto">Instadriver wants to</div>
          <div className="stream-access">
            <div className="use-mic">
              <span>Use your Mic</span>
              <span><i className="fas fa-microphone"></i></span>
              <button>Block</button>
            </div>
            <div className="use-cam">
              <span>Use your camera</span>
              <span><i className="fas fa-video"></i></span>
              <button onClick={() => setAllowed(true)}>Allow</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllowMicCam;