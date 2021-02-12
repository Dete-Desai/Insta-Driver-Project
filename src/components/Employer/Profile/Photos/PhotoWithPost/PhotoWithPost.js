import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import moment from "moment";
import "./index.css";

import arrowBack from "../../../../../dist/images/arrowBack.svg";

import PostedPhoto6 from "../../../../../dist/images/postPhoto6.png";
import profileImg from "../../../../../dist/images/profilebanner2.png";
import { listPosts } from "../../../../../redux/actions/post_actions";
import { StyledPhoto } from "../AvailablePhotos/PhotoStyled";

const post = {
  key: "2020F",
  PostedPhoto: PostedPhoto6,
  businessLogo: profileImg,
  businessName: "Hud Hud",
  businessUserName: "@Hudhud",
  postTime: "2h ago",
  website: "www.hudhud.co",
  postText:
    "This is the amazing part of life. We now have to adjust to a new normal. All drivers are mandated to wear masks as they drive for the ride-hailing taxis. Keep safe, life matters.",
};

const PhotoWithPost = (props) => {
  const dispatch = useDispatch();

  const { token } = useSelector(
    (state) => state.user_reducers.user_credentials
  );

  const directToAllPosts = () => {
    window.sessionStorage.setItem("activeTab", "posts");
    const route = `/employer-profile`;
    props.history.push(route);
  };

  const { post_id } = props.match.params;

  useEffect(() => {
    dispatch(listPosts(token));
  }, []);

  const { posts } = useSelector((state) => state.posts_reducer);

  let single_post = {};

  if (posts && posts.length > 0) {
    single_post = posts.find((post) => post._id === post_id);
  }

  if (!single_post) return <div>Page Not Found</div>;

  const directToSinglePost = () => {
    const route = `/post-photo-view/${single_post._id}`;
    props.history.push(route);
  };

  return (
    <div style={{ background: "#E5E5E5" }} className="py-5">
      {post && (
        <div className="row">
          <div className="col-md-10 m-auto text-center">
            <span
              onClick={directToSinglePost}
              style={{ cursor: "pointer" }}
              className=""
            >
              <img src={arrowBack} alt="" className="img-fluid" />
            </span>
            <div className="col-md-9 col-lg-6 col-xl-5 m-auto py-5">
              <div
                className="card"
                style={{
                  paddingBottom: "1rem",
                }}
              >
                <div className="card-header card-header-post pb-0">
                  <span className="float-left post-meta-header">
                    <span className="posted-title mr-1">Posted</span>&nbsp;
                    <span className="hrs-posted">
                      {single_post && moment(single_post.createdAt).fromNow()}
                    </span>
                  </span>
                  <span className="float-right post-meta-header-icon d-flex align-items-center pt-3">
                    <i
                      className="fas fa-share-alt mr-2"
                      style={{ color: "rgb(224 221 221)" }}
                    ></i>
                  </span>
                </div>
                <div className="card-body pb-0">
                  <div className="container">
                    <div className="card-body-post mb-3">
                      <p>{single_post && single_post.content}</p>
                    </div>
                    {single_post && single_post.media.photos.length > 0 && (
                      <StyledPhoto
                        style={{ borderRadius: "1rem" }}
                        image={single_post && single_post.media.photos[0]}
                      />
                    )}

                    {/* <img
                        style={{ maxHeight: "300px", borderRadius: "15px" }}
                        className="w-100 img-fluid my-3"
                        src={single_post.media.photos[0]}
                        alt="post photo"
                      /> */}
                  </div>
                </div>
              </div>
            </div>
            <div onClick={directToAllPosts} className="text-center pb-3">
              <button className="see-all-post">
                See all posts from this business
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(PhotoWithPost);
