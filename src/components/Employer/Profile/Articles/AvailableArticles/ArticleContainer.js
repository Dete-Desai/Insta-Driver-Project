import React from "react";
import { withRouter } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import moment from "moment";
import "./index.css";

const ArticleContainer = (props) => {
  // const { title, img, articleText, postTime } = props.article;
  const { article, handleDelete } = props;
  const { title, content, createdAt } = props.article;

  let plainString = "";
  let images = [];
  const imageRegex2 = /<img(.)*?>/g;
  const imageRegex = /<​img([\w\W]+?)\/>/g;

  if (content) {
    plainString = content
      .replace(/<[^>]+>/g, "")
      .split(/(?=[A-Z])/)
      .join(". ");

    images = content.match(imageRegex2);
  }

  const directToArticleView = () => {
    let route = `/article-view/${article._id}`;
    props.history.push(route);
  };

  const url = props.location.pathname.split("/")[1];

  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={directToArticleView}
      className="card"
      id="card"
    >
      <div className="card-header card-header-post pb-0 d-flex justify-content-between">
        <span className="post-meta-header">
          <span className="posted-title">Posted</span>
          &nbsp;
          <span className="hrs-posted ml-1">{moment(createdAt).fromNow()}</span>
        </span>
        <span className="post-meta-header-icon d-flex align-items-center pt-3">
          <span>
            <i className="fas fa-share-alt mr-4" style={{ color: "#999" }}></i>
          </span>
          {url !== "business" && (
            <span
              className="fa fa-trash"
              style={{ fontSize: "1.3rem", color: "#999" }}
              onClick={(e) => handleDelete(e, article._id)}
            ></span>
          )}
        </span>
      </div>
      <div className="card-body pb-0">
        <div className="container">
          <div className="card-body-post">
            <h6>{title}</h6>
            <p>
              <span className="article-content-text">
                {plainString && plainString.substr(0, 250)}{" "}
                {plainString.length > 255 && (
                  <span className="font-weight-bold">......</span>
                )}
              </span>
            </p>
          </div>
          {images && images.length > 0 && (
            <img
              style={{ maxHeight: "300px", borderRadius: "15px" }}
              className="w-100 img-fluid my-3"
              src={images[0]}
              alt=""
            />
          )}

          {images && images.length > 0 && (
            <div className="article-image-container">
              {ReactHtmlParser(images[0])}
            </div>
          )}
        </div>
      </div>
      <div className="card-footer card-footer-post text-right pt-0">
        <span>
          <span onClick={directToArticleView} className="read-more">
            Read More
          </span>
        </span>
      </div>
    </div>
  );
};

export default withRouter(ArticleContainer);
