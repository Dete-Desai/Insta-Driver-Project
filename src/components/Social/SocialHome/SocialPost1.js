import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { SearchPage1 } from "../../../components/Main/SearchBar";
import {
  SocialCard2,
  CommentSocialCard2,
  ReplySocialCard,
} from "../ComponentsPackages/SocialCards/SocialCardsComponents";

const SocialPost1 = (props) => {
  const history = useHistory();

  const directToReply = () => {
    let route = `social-post-comments-1`;
    history.push(route);
  };

  return (
    <div className="container">
      <br />
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
            <SocialCard2 />
            <br />
            <br />
            <CommentSocialCard2 />
            <br />
            <CommentSocialCard2 />
            <br />
            <ReplySocialCard />
            <br />
            <ReplySocialCard />
            <br />
            <br />
            <br />
            <SocialCard2 />
            <br />
            <br />
            <CommentSocialCard2 />
            <br />
            <CommentSocialCard2 />
            <br />
            <ReplySocialCard />
            <br />
            <ReplySocialCard />
            <br />
            <button
              onClick={directToReply}
              className="Social-button  social-button1 social-button-1"
            >
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
          </div>
        </div>
        <br />
        <br />
      </main>
      <br />
    </div>
  );
};

SocialPost1.propTypes = {};

export default SocialPost1;
