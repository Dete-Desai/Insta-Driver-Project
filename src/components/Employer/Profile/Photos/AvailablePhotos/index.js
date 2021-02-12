import React from "react";
import { Link } from "react-router-dom";
import { StyledPhoto } from "./PhotoStyled";
import "./index.css";

const AvailablePhoto = ({ posts_photos }) => {
  return (
    <div className="row" style={{ margin: "-3rem -1rem", marginTop: "-7rem" }}>
      <div className="col-md-12 " style={{ margin: "0" }}>
        <div className="posts-photos-container">
          {posts_photos &&
            posts_photos.map((photo) => (
              <Link to={"/post-photo-view/" + photo.post_id}>
                <StyledPhoto image={photo && photo.photo[0]} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AvailablePhoto;
