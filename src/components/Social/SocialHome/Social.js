import React from "react";
import { SearchPage1 } from "../../../components/Main/SearchBar";
import {
  SocialCard1,
  CommentSocialCard1,
} from "../ComponentsPackages/SocialCards/SocialCardsComponents";
import {
  AdvertisementCard,
  TrendingGroupCard1,
  TrendingGroupCard2,
} from "../ComponentsPackages/TrendCards/TrendCardsComponents";

const Social = (props) => {
  return (
    <div className="container">
      <main
        role="main"
        className="col-md-12 ml-sm-auto col-lg-12 px-4 padding_left_25 padding_right_10"
      >
        <div className="row">
          <SearchPage1 />
        </div>
        <br />
        <div className="row">
          <div className="col-md-7">
            <SocialCard1 />
            <br />
            <CommentSocialCard1 />
            <br />
            <SocialCard1 />
            <br />
            <CommentSocialCard1 />
            <br />
            <CommentSocialCard1 />
            <br />
            <TrendingGroupCard1 />
            <br />
            <TrendingGroupCard2 />
            <br />
            <SocialCard1 />
            <br />
            <CommentSocialCard1 />
            <br />
            <CommentSocialCard1 />
            <br />
            <button className="Social-button  social-button1 social-button-1">
              <b>Show More</b>
            </button>
            <br />
          </div>
          <div className="col-md-5">
            <div className="col-sm-12 advert-image-position">
              {/* Card image */}
              <img
                className="advert-image-size"
                src="dist/images/ubereats.png"
                alt="Card image cap"
              />
              <a href="#!">
                <div className="mask rgba-white-slight" />
              </a>
            </div>
            <br />
            <div className="col-sm-12 advert-image-position">
              {/* Card image */}
              <img
                className="advert-image-size"
                src="dist/images/hiring.png"
                alt="Card image cap"
              />
              <a href="#!">
                <div className="mask rgba-white-slight" />
              </a>
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

Social.propTypes = {};

export default Social;
