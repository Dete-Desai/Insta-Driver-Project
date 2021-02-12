/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { connect } from "react-redux";
import "./index.css";
import SendMessage from "./SendMessage";

const NavTabs = ({ handleTabs, activeTab, visitor, user }) => {
  return (
    <section id="tabs" className="project-tab">
      <nav className="navbar-expand-lg">
        <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
          <a
            onClick={() => handleTabs("posts")}
            className={
              activeTab === "posts"
                ? "nav-item nav-link active"
                : "nav-item nav-link"
            }
            data-toggle="tab"
            href="#"
            role="tab"
          >
            Posts
          </a>
          <a
            onClick={() => handleTabs("videos")}
            className={
              activeTab === "videos"
                ? "nav-item nav-link active"
                : "nav-item nav-link"
            }
            data-toggle="tab"
            href="#"
            role="tab"
          >
            Videos
          </a>
          <a
            onClick={() => handleTabs("photos")}
            className={
              activeTab === "photos"
                ? "nav-item nav-link active"
                : "nav-item nav-link"
            }
            data-toggle="tab"
            href="#"
            role="tab"
          >
            Photos
          </a>
          <a
            onClick={() => handleTabs("articles")}
            className={
              activeTab === "articles"
                ? "nav-item nav-link active"
                : "nav-item nav-link"
            }
            data-toggle="tab"
            href="#"
            role="tab"
          >
            Articles
          </a>
          <a
            onClick={() => handleTabs("about")}
            className={
              activeTab === "about"
                ? "nav-item nav-link active"
                : "nav-item nav-link"
            }
            data-toggle="tab"
            href="#"
            role="tab"
          >
            About
          </a>
          <a
            onClick={() => handleTabs("jobs")}
            className={
              activeTab === "jobs"
                ? "nav-item nav-link active"
                : "nav-item nav-link"
            }
            data-toggle="tab"
            href="#"
            role="tab"
          >
            Jobs
          </a>
          {user && user.role === "EMPLOYER" ? null : <SendMessage />}
        </div>
      </nav>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user_reducers.user_credentials,
  };
};

export default connect(mapStateToProps)(NavTabs);
