import React from "react";
import PropTypes from "prop-types";
import { ProfileCards, ProfileCards1, ProfileCards2 } from "../ProfileCards/ProfileCardsComponents";

const AboutCard3Component = (props) => {
  return (
    <div className="about-card2">
      <br />
      <div className="d-flex flex-row">
        <div className="col-md-12">
          <font color="#5f6363" size="5">
            <b>Group Admins</b>
          </font>
        </div>
      </div>
      <hr style={{ width: "27%", textAlign: "centre", marginLeft: 10 }} />
      <br />
      <div className="d-flex flex-row">
        <div
          className="col-md-12"
          style={{ marginLeft: 100, textAlign: "left" }}
        >
          <div className="row">
            <div className="col-sm-3">
              <ProfileCards />
            </div>
            <div className="col-sm-3">
              <ProfileCards1 />
            </div>
            <div className="col-sm-3">
              <ProfileCards2 />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="d-flex flex-row">
        <div
          className="col-md-12"
          style={{ marginLeft: 100, textAlign: "left" }}
        >
          <div className="row">
            <div className="col-sm-3">
              <ProfileCards />
            </div>
            <div className="col-sm-3">
              <ProfileCards1 />
            </div>
            <div className="col-sm-3">
              <ProfileCards2 />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="d-flex flex-row">
        <div
          className="col-md-12"
          style={{ marginLeft: 100, textAlign: "left" }}
        >
          <div className="row">
            <div className="col-sm-3">
              <ProfileCards />
            </div>
            <div className="col-sm-3">
              <ProfileCards1 />
            </div>
            <div className="col-sm-3">
              <ProfileCards2 />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="d-flex flex-row">
        <div
          className="col-md-12"
          style={{ marginLeft: 100, textAlign: "left" }}
        >
          <div className="row">
            <div className="col-sm-3">
              <ProfileCards />
            </div>
            <div className="col-sm-3">
              <ProfileCards1 />
            </div>
            <div className="col-sm-3">
              <ProfileCards2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AboutCard3Component.propTypes = {};

export default AboutCard3Component;
