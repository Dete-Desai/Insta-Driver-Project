import React from "react";
import { useDispatch } from "react-redux";
import get from "lodash/get";
import { updateShowSocial } from "../../../redux/actions/driver_actions/driver_profile_actions";
import { PostRoute } from "../../../Api/index";
import SocialHistorySummary from "./SocialHistorySummary";
const { Post, Get } = PostRoute();

const SocialHistory = ({
  userInfo,
  handleChange,
  formStaticDataProp,
  session_token,
}) => {
  const dispatch = useDispatch();

  async function handleSocialHistory(e) {
    e.preventDefault();

    dispatch(
      updateShowSocial(session_token, get(userInfo, "showSocialSummary"))
    );
    alert("Social Summary info submitted");
  }

  return (
    <div className="socialHistory section__style pb-3 pt-5 pr-2 bg-white mt-3">
      <div className="col-lg-12 m-auto px-5">
        <h5 className="form__heading">
          Show A Summary Of Your Get Social History
        </h5>
        <div className="col-md-12 px-4 p-4 currencyInfo my-4">
          <p style={{ color: "#969393" }}>
            Get Social is the social media for drivers. Drivers connect to
            fellow drivers, inbox each other, join groups to discuss challenges,
            share opportunies, join group video calls for fun and for getting
            traffic info, play online multiplayer games, etc You may want
            visitors visiting your profile to see your activities on Instadriver
            Social media platfrom. <br /> <br />
            If you enable your Get Social Summary, visitors to your profile will
            be able to see connections you have, posts you made, Reposts you
            did, groups you have joined, drivers who follow you, and those you
            are following, and number of group calls you have participated in.
            If you enable it, you will be able to see a preview how this section
            will appear. Click{" "}
            <a
              style={{ color: "#FFBB00" }}
              href="https://instadriver.co/verified_search"
            >
              Profile Preview
            </a>{" "}
            to see how it will look like. <br /> <br />
            Please note that when you don’t make “Get Social” history public, it
            will not be visible by visitors who do not have driver accounts, but
            it will be visible by fellow drivers who have accounts and have
            logged in.
          </p>
        </div>
        <div
          style={{ color: "#575353" }}
          className="font-weight-bold py-3 d-flex align-items-center"
        >
          <p className="font-weight-bold ml-4 mt-4">
            Make Summary Of My Get Social History Public :
          </p>
          <form className="ml-4">
            <div className="custom-control custom-switch switchToggle">
              <input
                type="checkbox"
                className="custom-control-input"
                name="showSocialSummary"
                onChange={handleChange}
                checked={
                  get(userInfo, "showSocialSummary") === true ? true : false
                }
                value={
                  get(userInfo, "showSocialSummary") === true ? false : true
                }
                id="customSwitch2"
              />
              <label
                className="custom-control-label"
                htmlFor="customSwitch2"
              ></label>
            </div>
          </form>
        </div>
        <div className="">
          {userInfo
            ? get(userInfo, "showSocialSummary") && <SocialHistorySummary />
            : null}
        </div>
      </div>
      <div className="text-right col-md-12 mr-2 mb-2">
        <button
          onClick={handleSocialHistory}
          type="submit"
          className="btn submitBtn"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default SocialHistory;
