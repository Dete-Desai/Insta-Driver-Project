import React, { useState, useEffect } from "react";
import moment from "moment";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import "./index.css";
import { StyledPhoto } from "../../Photos/AvailablePhotos/PhotoStyled";

const PostContainer = ({ post, handlePostDelete }) => {
  const { avatar, content, createdAt, media } = post;

  const [seeMore, setSeeMore] = useState(false);
  const [pinPost, setPinPost] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="card" id="card" style={{ margin: "1rem auto" }}>
      <div className="card-header card-header-post pb-0 position-relative">
        <span className="float-left post-meta-header">
          <span className="posted-title">Posted</span>
          &nbsp;
          <span className="hrs-posted ml-1">{moment(createdAt).fromNow()}</span>
        </span>
        <span className="float-right post-meta-header-icon d-flex align-items-center">
          {pinPost && (
            <span
              style={{ color: "#FFBB00", fontSize: "16px" }}
              className="mr-5"
            >
              Pinned Post
            </span>
          )}
          <span>
            <i
              className="fas fa-share-alt mr-2"
              style={{ color: "rgb(224 221 221)" }}
            ></i>
          </span>

          <div>
            <button
              className="btn iconBtn p-0"
              type="button"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <ExpandMoreOutlinedIcon className="expandMoreBtn" />
            </button>
            <div
              className={
                showDropdown
                  ? "available-post-dropdown show"
                  : "available-post-dropdown"
              }
            >
              <div style={{ padding: "1rem", cursor: "pointer" }}>
                {!pinPost ? (
                  <span
                    onClick={() => {
                      setPinPost(!pinPost);
                      setShowDropdown(false);
                    }}
                    style={{
                      color: "#969393",
                      cursor: "pointer",
                      fontSize: "15px",
                    }}
                  >
                    <i
                      className="fa fa-thumb-tack mr-1"
                      style={{ fontSize: "1.2rem", color: " #ff6868" }}
                    ></i>
                    &nbsp; Pin Post
                  </span>
                ) : (
                  <span
                    onClick={() => {
                      setPinPost(false);
                      setShowDropdown(false);
                    }}
                    style={{ color: "#969393", cursor: "pointer" }}
                  >
                    Unpin Post
                  </span>
                )}
              </div>
              <div
                style={{
                  padding: "1rem",
                  cursor: "pointer",
                  fontSize: "15px",
                }}
                onClick={(e) => {
                  setShowDropdown(false);
                  handlePostDelete(e, post._id);
                }}
              >
                <i
                  className="fa fa-trash mr-4"
                  style={{ fontSize: "1.3rem", color: " #ff6868" }}
                ></i>
                <span style={{ color: "#969393", cursor: "pointer" }}>
                  Delete Post
                </span>
              </div>
            </div>
          </div>
        </span>
      </div>
      <div className="card-body pb-0" style={{ marginTop: "-1rem" }}>
        <div className="card-body-post">
          <p>
            <span>
              {/* {content.length > 250 ? () => setSeeMore(false) : null} */}
              {!seeMore && content && content.substr(0, 250)}
              {!seeMore && content && content.length > 250 && (
                <span className="font-weight-bold">......</span>
              )}
              {seeMore && content}
            </span>
          </p>
        </div>
        {media && media.photos && media.photos.length > 0 && (
          <div className="postcontainer-grid-container">
            {media.photos.map((photo) => (
              <StyledPhoto
                className="mb-4 mt-4"
                image={photo}
                style={{ borderRadius: "15px", minHeight: "300px" }}
              />
            ))}
          </div>
        )}
      </div>
      {
        <div className="card-footer card-footer-post text-right pt-0 mt-3">
          {content && content.length > 250 ? (
            <span className="read-more" onClick={() => setSeeMore(!seeMore)}>
              {seeMore ? "Read Less" : " Read More"}
            </span>
          ) : null}
        </div>
      }
    </div>
  );
};

export default PostContainer;
