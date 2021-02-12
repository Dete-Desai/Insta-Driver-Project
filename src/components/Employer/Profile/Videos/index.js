import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import Loading from "../../../../layouts/Loading";
import {
  getAllUserVideos,
  getSingleBusinessVideos,
} from "../../../../redux/actions/post_actions";
import AvailableVideos from "./AvailableVideos";
import NoVideos from "./NoVideos";

const VideosComponent = (props) => {
  const dispatch = useDispatch();

  const credentials = useSelector(
    (state) => state.user_reducers.user_credentials
  );

  useEffect(() => {
    if (!credentials) {
      const { handle } = props.match.params;

      dispatch(getSingleBusinessVideos(handle));
    } else {
      dispatch(getAllUserVideos(credentials.token));
    }
  }, []);

  const { posts_videos, loading } = useSelector((state) => state.posts_reducer);

  if (loading) return <Loading />;

  return (
    <>
      {posts_videos && posts_videos.length > 0 ? (
        <AvailableVideos posts_videos={posts_videos} />
      ) : (
        <NoVideos />
      )}
    </>
  );
};

export default withRouter(VideosComponent);
