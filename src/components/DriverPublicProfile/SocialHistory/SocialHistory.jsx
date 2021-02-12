import React from 'react';
import connectionIcon from '../../../dist/icons/connection.png';
import followingIcon from '../../../dist/icons/following.png';
import postIcon from '../../../dist/icons/post.png';
import followersIcon from '../../../dist/icons/followers.png';
import videoIcon from '../../../dist/icons/video.png';
import groupIcon from '../../../dist/icons/group.png';
import rePostIcon from '../../../dist/icons/Repost.png';


const SocialHistory = ({driver}) => {
  return (
    <div className="socialHistory section__style pb-3 pt-5 pr-2 bg-white mt-3">
      <div className="col-md-12 m-auto px-5 pb-3">
        <h5 className="form__heading">My  “Get Social” History</h5>
      </div>
      <div className="col-md-12 mb-4">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="px-5 d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img className="" src={connectionIcon} alt="" />
                    <h6 className="form__heading2 mb-0 ml-3">Connections</h6>
                  </div>
                  <div className="countBox d-flex align-items-center mr-3">
                    <span style={{ fontSize: "30px" }} className="font-weight-bold text-white text-center m-auto">23</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 ">
                <div className="px-5 d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img className="" src={groupIcon} alt="" />
                    <h6 className="form__heading2 mb-0 ml-3">Groups Joined</h6>
                  </div>
                  <div className="countBox d-flex align-items-center mr-3">
                    <span style={{ fontSize: "30px" }} className="font-weight-bold text-white text-center m-auto">2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 mb-4">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="px-5 d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img className="" src={postIcon} alt="" />
                    <h6 className="form__heading2 mb-0 ml-3">Posts</h6>
                  </div>
                  <div className="countBox d-flex align-items-center mr-3">
                    <span style={{ fontSize: "30px" }} className="font-weight-bold text-white text-center m-auto">1K</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 ">
                <div className="px-5 d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img className="" src={rePostIcon} alt="" />
                    <h6 className="form__heading2 mb-0 ml-3">Reposts</h6>
                  </div>
                  <div className="countBox d-flex align-items-center mr-3">
                    <span style={{ fontSize: "30px" }} className="font-weight-bold text-white text-center m-auto">23</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 mb-4">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="px-5 d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img className="" src={followersIcon} alt="" />
                    <h6 className="form__heading2 mb-0 ml-3">Followers</h6>
                  </div>
                  <div className="countBox d-flex align-items-center mr-3">
                    <span style={{ fontSize: "30px" }} className="font-weight-bold text-white text-center m-auto">50</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 ">
                <div className="px-5 d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img className="" src={followingIcon} alt="" />
                    <h6 className="form__heading2 mb-0 ml-3">Following</h6>
                  </div>
                  <div className="countBox d-flex align-items-center mr-3">
                    <span style={{ fontSize: "30px" }} className="font-weight-bold text-white text-center m-auto">30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 mb-4">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-lg-6 ">
                <div className="px-5 d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img className="" src={videoIcon} alt="" />
                    <h6 className="form__heading2 mb-0 ml-3">Group Video Calls Joined</h6>
                  </div>
                  <div className="countBox d-flex align-items-center mr-3">
                    <span style={{ fontSize: "30px" }} className="font-weight-bold text-white text-center m-auto">50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-10 m-auto px-5">
        <div className="col-md-12 px-4 py-2 currencyInfo my-4">
          <p style={{ color: "#969393" }}>Get Social is the social media for drivers. Drivers connect to fellow drivers, inbox each other, join groups to discuss challenges, share opportunities, join group video calls for fun and for getting traffic info, play online multiplayer games, etc</p>
        </div>
      </div>
    </div>
  );
};

export default SocialHistory;