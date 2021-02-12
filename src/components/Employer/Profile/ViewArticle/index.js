import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import moment from "moment";
import ReactHtmlParser from "react-html-parser";
import profileBanner from "../../../../dist/images/profilebanner2.png";
import defaultAvatar from "../../../../dist/images/profile/silhoutte.jpg";
import { getSingleArticle } from "../../../../redux/actions/article_actions";
import "./index.css";

const ViewArticle = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const { articleId } = props.match.params;

    dispatch(getSingleArticle(articleId));
  }, []);

  const { article, loading } = useSelector((state) => state.article_reducer);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "400px", width: "100%", height: "100%" }}
      >
        Loading...
      </div>
    );
  }

  if (!article) {
    return <div>No such article found</div>;
  }

  console.log(article);

  return (
    <>
      <div
        className="row mb-5"
        style={{ borderBottom: "1px solid #ebebeb", paddingBottom: "1rem" }}
      >
        <div className="col-lg-9 col-md-10 mx-auto article-column">
          <div>
            {article.title && (
              <h1 className="article-title">{`${article.title[0].toUpperCase()}${article.title.slice(
                1
              )}`}</h1>
            )}
            <div className="d-flex align-items-center">
              <Link to={`/business/${article.author}`}>
                <img
                  src={
                    article && article.avatar ? article.avatar : defaultAvatar
                  }
                  alt="profilebanner"
                  className="view-profile-avatar"
                />
              </Link>

              <div className="view-profile-author">
                <p>
                  <Link
                    to={`/business/${article.author}`}
                    style={{ textDecoration: "none", color: "#0c0c0c" }}
                  >
                    Article Posted by{" "}
                    {article &&
                      article.author &&
                      `${article.author[0].toUpperCase()}${article.author.slice(
                        1
                      )}`}{" "}
                    &nbsp;
                  </Link>
                  {article && article.website && (
                    <a
                      href={`//${article.website}`}
                      target="_blank"
                      className="article-url"
                    >
                      {article.website}
                    </a>
                  )}
                </p>
                <p className="view-profile-author-date">
                  Posted {moment(article.createdAt).fromNow()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* </article> */}
      <div className="container">
        <div className="row">
          <div
            className="col-lg-9 col-md-10  article-column"
            style={{ padding: "0" }}
          >
            {ReactHtmlParser(article.content)}
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(ViewArticle);
