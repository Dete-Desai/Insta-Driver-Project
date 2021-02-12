import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import NoPhotos from "./NoPhotos";
import AvailablePhotos from "./AvailablePhotos";
import {
  getAllUserPhotos,
  getSingleBusinessPhotos,
} from "../../../../redux/actions/post_actions";

const PhotosComponent = (props) => {
  const dispatch = useDispatch();

  const credentials = useSelector(
    (state) => state.user_reducers.user_credentials
  );

  useEffect(() => {
    if (!credentials) {
      const { handle } = props.match.params;
      dispatch(getSingleBusinessPhotos(handle));
    } else {
      dispatch(getAllUserPhotos(credentials.token));
    }
  }, []);

  const { posts_photos, loading } = useSelector((state) => state.posts_reducer);

  if (loading)
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "300px" }}
      >
        Loading...
      </div>
    );
  //send a request to the server to get all user posts photos

  return (
    <>
      {posts_photos && posts_photos.length > 0 ? (
        <AvailablePhotos posts_photos={posts_photos} />
      ) : (
        <NoPhotos />
      )}
    </>
  );
};

export default withRouter(PhotosComponent);
