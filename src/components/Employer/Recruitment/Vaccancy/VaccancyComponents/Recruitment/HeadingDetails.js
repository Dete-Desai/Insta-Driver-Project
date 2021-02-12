import React from "react";
import { NavLink } from "react-router-dom";

const HeadingDetails = () => {
  return (
    <div>
      <div className="container padding_left_25">
        <div className="row">
          <div className="col-sm-12 d-flex justify-content-between align-items-center">
            <button
              className="btn btn-block header-text"
              style={{
                color: "#4B4747",
                border: "none",
                width: "auto",
                fontWeight: "500",
                marginLeft: "-24px",
              }}
            >
              Post Vacancy Ad
            </button>
            <NavLink
              to="/employer-manage-posts"
              className="btn btn-outline-warning font-weight-bold"
              style={{ width: "215px", color: "#575353" }}
            >
              Manage Your Job Posts
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container padding_left_25">
        <div className="row">
          <br />
          <label className="text-left top-ban">
            Vacancy ads help you attract potential hires who are currently
            looking for better job opportunities. By posting a vacancy ad, you
            cut the curve of recruitment. In this Plan, you are limited to five
            vacancy ads a month. Each ad will run for 30 days then expire
          </label>
        </div>
      </div>
    </div>
  );
};

export default HeadingDetails;
