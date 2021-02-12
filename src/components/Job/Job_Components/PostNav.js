import React, { useState } from "react";
import "../../../dist/css/driverpostreposts.css";

const PostNav = ({ getSearchInput, hash }) => {
  const videoChatActive = hash === "/video-chat-new" ? "custom-active" : "";
  const videoChatHover = hash === "/video-chat-new" ? "custom-hover" : "";
  const videoChatBold = hash === "/video-chat-new" ? "custom-bold" : "";

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    if (e.keyCode === 13) {
      getSearchInput(search);
    }
  };

  return (
    <div className="post-navbar">
      <div className="row livestream-header1">
        <div className="col-sm-12 col-md-6 col-lg-6 livestream-section2" style={{left:60}}>
          <div>
            <a href="#!">
              <span>Posts</span>
            </a>
          </div>
          <div>
            <a href="#!">
              <span>My Reposts</span>
            </a>
          </div>
          <div>
            <a href="#!" className={videoChatHover}>
              <span className={videoChatBold}>Media</span>
            </a>
          </div>
        </div>
        <div className="col-sm-12 col-md-3">
          <div className="row">
          <div className="col-sm-2">
            <button className="create-post-btn"><b>+</b></button>
          </div>
          <div className="col-sm-6" style={{right:"15px", top:"10px"}}>
            <span>
              <b style={{ fontSize: 20 }}>Create Post</b>
            </span>
          </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="form-group has-search">
              <span className="fas fa-search form-control-feedback custom-color"></span>
              <input
                value={search}
                onChange={(e) => handleChange(e)}
                onKeyDown={(e) => handleSubmit(e)}
                className=""
                placeholder="Search topics, drivers or location"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostNav;
