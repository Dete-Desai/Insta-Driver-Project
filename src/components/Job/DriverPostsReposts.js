import React, { useState } from "react";
import PropTypes from "prop-types";
import EmployerSideBarFunction from "../Layout/MainSideBar/Employer/EmployerSideBarFunction";
import PostTab from "./Job_Components/PostTab";
import LivestreamTrendsCard from "../Livestream/LivestreamComponents/LivestreamTrendsCard";
import LiveStreamCard from "../Livestream/LivestreamComponents/LiveStreamCard";
import LiveStreamPostCards from "../Livestream/LivestreamComponents/LiveStreamPostCard/LiveStreamPostCard";
import PostNav from "./Job_Components/PostNav";
import PostCard from "../Social/ComponentsPackages/SocialCards/PostCard";
import PostSubNav from "./Job_Components/PostSubNav";
import SocialCard1Component from "../Social/ComponentsPackages/SocialCards/SocialCard1";
import SocialCard2Component from "../Social/ComponentsPackages/SocialCards/SocialCard2";
import PublicCommentSocialCard1Component from "../Social/ComponentsPackages/SocialCards/PublicCommentSocialCard2";
import CommentSocialCard1Component from "../Social/ComponentsPackages/SocialCards/CommentSocialCard1";
import CommentSocialCard2Component from "../Social/ComponentsPackages/SocialCards/CommentSocialCard2";
import TrendCard4 from "../Social/ComponentsPackages/TrendCards/TrendCard4";
import {
  TrendingGroupCard1,
  TrendingGroupCard2,
} from "../Social/ComponentsPackages/TrendCards/TrendCardsComponents";

const DriverPostsReposts = (props) => {
  return (
    <div id="content row">
      {/* <div className="row"> */}
      <EmployerSideBarFunction />
      <div className="col-md-10 ml-auto">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <PostNav />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-12">
              <PostSubNav />
            </div>
          </div>
          <div
            className="row  d-flex justify-content-between "
            style={{ marginTop: "10rem" }}
          >
            <div className="col-lg-7 col-md-7 ">
              <div className="row">
                <SocialCard1Component />
              </div>
              <div className="row rows-margin-settings">
                <CommentSocialCard1Component />
              </div>
              <div className="row rows-margin-settings">
                <SocialCard1Component />
              </div>
              <div className="row rows-margin-settings">
                <CommentSocialCard1Component />
              </div>
              <div className="row rows-margin-settings">
                <SocialCard1Component />
              </div>
              <div className="row rows-margin-settings">
                <SocialCard1Component />
              </div>
              <div className="row rows-margin-settings">
                <CommentSocialCard1Component />
              </div>
              <div className="row rows-margin-settings">
                <SocialCard1Component />
              </div>
              <div className="row rows-margin-settings">
                <LiveStreamCard />
              </div>
              <div className="row rows-margin-settings">
                <LiveStreamPostCards />
              </div>
              <div
                className="row rows-margin-settings"
                style={{ marginTop: 1900 }}
              >
                <TrendingGroupCard1 />
              </div>
              <div className="row rows-margin-settings">
                <TrendingGroupCard2 />
              </div>
              <div className="row rows-margin-settings">
                <LivestreamTrendsCard />
              </div>
            </div>
            <div
              className="col-lg-5 col-md-5 ml-auto"
              style={{ right: "-4rem", position: "absolute" }}
            >
              <PostTab />
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* <br />
      <br /> */}
    </div>
  );
};

DriverPostsReposts.propTypes = {};

export default DriverPostsReposts;
