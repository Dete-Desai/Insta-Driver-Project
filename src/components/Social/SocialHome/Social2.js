import React from "react";
import { useHistory } from "react-router-dom";
import { SearchPage } from "../../../components/Main/SearchBar";
import {
  SocialCard1,
  CommentSocialCard1,
} from "../ComponentsPackages/SocialCards/SocialCardsComponents";
import {
  AdvertisementCard,
  AdvertisementCard1,
  AdvertisementCard2,
  TrendingGroupCard1,
  TrendingGroupCard2,
} from "../ComponentsPackages/TrendCards/TrendCardsComponents";

const Social2 = (props) => {
  const history = useHistory();

  const directToInstadriverGroups = () => {
    let route = `instadriver-group`;
    history.push(route);
  };
  const directToVideoChat = () => {
    let route = `video-chat`;
    history.push(route);
  };
  const directToGaming = () => {
    let route = `gaming-page`;
    history.push(route);
  };
  const directToGroup = () => {
    let route = `launch-group`;
    history.push(route);
  };

  return (
    <div className="container">
      <main role="main" className="col-lg-12  px-1" style={{ right: 80 }}>
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-md-9">
            <div>
              <b
                onClick={directToInstadriverGroups}
                style={{ fontSize: 24, marginLeft: 50, cursor: "pointer" }}
              >
                Instadriver Groups
              </b>
              <b
                onClick={directToVideoChat}
                style={{ fontSize: 24, marginLeft: 150, cursor: "pointer" }}
              >
                Video Chat
              </b>
              <b
                onClick={directToGaming}
                style={{ fontSize: 24, marginLeft: 150, cursor: "pointer" }}
              >
                Gaming
              </b>
              <div className="row">
                <button className="line-button" style={{ marginLeft: 50 }} />
                <hr
                  style={{
                    width: "95%",
                    textAlign: "left",
                    marginLeft: 0,
                    marginTop: 0,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <SearchPage />
          </div>
          <div className="col-md-1" style={{ left: 230 }}>
            <i
              className="fa fa-caret-down"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ fontSize: 36 }}
            />
            <div
              className="dropdown-menu dropdown-account-card-center"
              aria-labelledby="dropdownMenuButton"
            >
              <div className="col-sm-12 account-card">
                <AdvertisementCard2 />
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-md-7">
            <h4>Your Latest Group Posts</h4>
            <br />
            <p>Showing Latest Posts For The Groups You Have Joined</p>
            <br />
            <SocialCard1 />
            <br />
            <br />
            <br />
            <CommentSocialCard1 />
            <br />
            <br />
            <br />
            <SocialCard1 />
            <br />
            <br />
            <br />
            <CommentSocialCard1 />
            <br />
            <br />
            <br />
            <CommentSocialCard1 />
            <br />
            <br />
            <br />
            <TrendingGroupCard1 />
            <br />
            <br />
            <br />
            <TrendingGroupCard2 />
            <br />
            <br />
            <br />
            <SocialCard1 />
            <br />
            <br />
            <br />
            <CommentSocialCard1 />
            <br />
            <br />
            <br />
            <CommentSocialCard1 />
            <br />
            <br />
            <button className="Social-button  social-button1 social-button-1">
              <b>Show More</b>
            </button>
            <br />
          </div>
          <div className="col-md-5">
            <div className="col-sm-12" style={{ left: 245 }}>
              <button
                onClick={directToGroup}
                className="social-button2 social-button2 social-button-2"
              >
                <b>+ Create Group</b>
              </button>
            </div>
            <br />
            <br />
            <br />
            <div className="col-sm-12 advert-card-position1">
              <AdvertisementCard1 />
            </div>
            <br />
            <div className="col-sm-12 advert-card-position">
              <AdvertisementCard />
            </div>
          </div>
        </div>
        <br />
        <br />
      </main>
      <br />
    </div>
  );
};

Social2.propTypes = {};

export default Social2;
