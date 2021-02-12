import React from "react";
import { Link } from "react-router-dom";

const AvailableVideos = ({ posts_videos }) => {
  return (
    <div className="row">
      <div className="col-md-9 col-sm-9 m-auto">
        <div className="row">
          {posts_videos &&
            posts_videos.map((video, index) => (
              <div className="col-md-4 col-6 mt-5 position-relative ">
                <Link
                  className="d-flex justify-content-center align-items-center"
                  to={"/post-video-view/" + (index + 1)}
                >
                  {/* <img
                    
                    src={postData.PostedPhoto}
                    alt="photos"
                    className="img-fluid"
                  /> */}
                  <video
                    style={{
                      maxWidth: "270px",
                      width: "100%",
                      maxHeight: "200px",
                      height: "100%",
                    }}
                  >
                    <source src={video} type="video/*" />
                  </video>
                  {/* <img
                    className="img-fluid position-absolute"
                    src={playButton}
                    alt=""
                  /> */}
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableVideos;
