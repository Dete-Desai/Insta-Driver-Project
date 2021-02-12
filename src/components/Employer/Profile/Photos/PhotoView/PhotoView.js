import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import arrowBack from "../../../../../dist/images/arrowBack.svg";
import "./index.css";

import PostedPhoto6 from "../../../../../dist/images/postPhoto6.png";
import profileImg from "../../../../../dist/images/profilebanner2.png";
import { listPosts } from "../../../../../redux/actions/post_actions";
import Loading from "../../../../../layouts/Loading";
import { StyledPhotoView } from "../AvailablePhotos/PhotoStyled";

const singlePostPhoto = {
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

const PhotoView = (props) => {
  const dispatch = useDispatch();

  const { token } = useSelector(
    (state) => state.user_reducers.user_credentials
  );

  const url = props.location.pathname.split("/")[1];

  const directToPhotoPost = () => {
    // let route
    let route = `/employer-profile`;
    props.history.push(route);
  };

  const { post_id } = props.match.params;

  useEffect(() => {
    dispatch(listPosts(token));
  }, []);

  const { posts, loading } = useSelector((state) => state.posts_reducer);

  let single_post = {};

  if (posts && posts.length > 0) {
    single_post = posts.find((post) => post._id === post_id);
  }

  if (!single_post) return <div>Page Not Found..</div>;

  console.log(single_post);

  if (loading) <Loading />;

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ background: "#E5E5E5" }} className="pb-5 mx-auto">
      <div className="row">
        <div className="col-md-11 m-auto">
          <div className="row">
            <div className="col-lg-8">
              <span
                onClick={directToPhotoPost}
                style={{ cursor: "pointer" }}
                className=""
              >
                <img src={arrowBack} alt="" className="w-100" />
              </span>
              <div id="customSlider">
                <Slider {...settings}>
                  {single_post &&
                    single_post.media.photos.map((photo) => (
                      <StyledPhotoView image={photo} />
                    ))}
                </Slider>
              </div>
            </div>

            {single_post && (
              <div className="col-lg-4 mt-4">
                <div className="text-center">
                  <div className="mb-2">
                    {single_post && single_post.avatar ? (
                      <img
                        src={single_post.avatar}
                        className="rounded-circle"
                        height="90"
                        width="90"
                        alt="profile"
                        style={{ border: "1px solid #ADADAD" }}
                      />
                    ) : (
                      <img
                        src={singlePostPhoto.businessLogo}
                        className="rounded-circle"
                        height="90"
                        width="90"
                        alt="profile"
                        style={{ border: "1px solid #ADADAD" }}
                      />
                    )}
                  </div>
                  <h6 className="mb-1">
                    {single_post &&
                      `${single_post.handle[0].toUpperCase()}${single_post.handle.slice(
                        1
                      )}`}
                  </h6>
                  <span className="text-muted">
                    {single_post && `@${single_post.handle.toLowerCase()}`}
                  </span>
                  <hr
                    style={{
                      width: "40%",
                      marginTop: 4,
                      marginBottom: 10,
                    }}
                  />
                  <span className="text-orange font-weight-bold">
                    {single_post && single_post.website}
                  </span>
                  <div className="mt-4">
                    <button className="btn View-business bg-orange font-weight-bold">
                      View Business Page
                    </button>
                  </div>
                </div>
                <div className="card mt-4 pb-2">
                  <div
                    className="d-flex justify-content-start align-items-center"
                    style={{ padding: "1rem 1.5rem" }}
                  >
                    <span className="posted-title font-weight-bold">
                      {single_post &&
                        `${single_post.handle[0].toUpperCase()}${single_post.handle.slice(
                          1
                        )}`}
                      &nbsp;
                    </span>{" "}
                    &nbsp;
                    <span className="hrs-posted">
                      {single_post && `@${single_post.handle.toLowerCase()}`}
                      &nbsp;
                    </span>
                    <span className="hrs-posted">
                      Posted &nbsp;
                      {single_post && moment(single_post.createdAt).fromNow()}
                    </span>
                  </div>
                  <div className="card-body pb-0">
                    <div className="">
                      <div className="card-body-post">
                        <p>
                          <span>
                            {single_post && single_post.content.substr(0, 250)}
                            {single_post &&
                              single_post.content.length > 250 && (
                                <span className="font-weight-bold">....</span>
                              )}
                          </span>
                        </p>
                      </div>
                      <div className="my-4 d-flex justify-content-center align-items-center">
                        <i
                          className="fa fa-eye iconDesign"
                          aria-hidden="true"
                        />
                        &nbsp;
                        <span
                          style={{ color: "#5B5B5B", fontSize: 23 }}
                          className=""
                        >
                          90
                        </span>{" "}
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        <i className="fas fa-share-alt ml-2 iconDesign"></i>
                      </div>
                      <div className="text-center pb-3">
                        <Link to={"/post-with-photo/" + single_post._id}>
                          <button className="open-media">
                            Open post containing this media
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(PhotoView);
