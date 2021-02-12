import React from "react";
import { useSelector } from "react-redux";
import "./index.css";

const SideMetaData = () => {
  const employer_profile = useSelector(
    (state) => state.employer_reducers.employer_profile
  );

  return (
    <div className="side-metadata">
      <ul className="list-group info-data">
        <li className="list-group-item d-flex">
          <span className="fa-stack fa-lg">
            <i className="fas fa-circle fa-stack-2x"></i>
            <i className="fab fa-internet-explorer fa-stack-1x fa-inverse"></i>
          </span>
          <h5>
            {employer_profile && employer_profile.website
              ? employer_profile.website
              : "No website added"}
          </h5>
        </li>
        <li className="list-group-item">
          <span className="fa-stack fa-lg">
            <i className="fas fa-circle fa-stack-2x"></i>
            <i className="fas fa-phone fa-stack-1x fa-inverse"></i>
          </span>
          <h5>
            {employer_profile && !employer_profile.contactVisibility ? (
              "Contact is private"
            ) : (
              <>
                <button
                  type="button"
                  className="btn btn-labeled btn-purple button-dm"
                >
                  <span className="btn-label">
                    <i className="fas fa-envelope-square fa-lg"></i>
                  </span>
                  DM the business
                </button>
              </>
            )}
          </h5>
        </li>
        <li className="list-group-item">
          <span className="fa-stack fa-lg">
            <i className="fas fa-circle fa-stack-2x"></i>
            <i className="fas fa-envelope-square fa-stack-1x fa-inverse"></i>
          </span>
          <h5>
            {employer_profile && !employer_profile.contactVisibility ? (
              "Email is private"
            ) : (
              <>
                <br />
                <button
                  type="button"
                  className="btn btn-labeled btn-purple button-dm"
                >
                  <span className="btn-label">
                    <i className="fas fa-envelope-square fa-lg"></i>
                  </span>
                  DM the business
                </button>
              </>
            )}
          </h5>
        </li>
      </ul>
    </div>
  );
};

export default SideMetaData;
