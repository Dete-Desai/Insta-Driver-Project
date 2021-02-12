import React from "react";
import PropTypes from "prop-types";

export const ProfileCardsComponent = (props) => {
  return (
    <div className="profile-user-card">
      <div className="row">
        <img
          src="dist/images/blackjohn.png"
          className="rounded-circle mr-3"
          height="120px"
          width="120px"
          alt="avatar"
        />
      </div>
      <div className="row" style={{ marginLeft: 1 }}>
        <font size="4">Karry John</font>
      </div>
      <div className="row" style={{ marginLeft: 1 }}>
        <font size="4" color="#5f6363">
          @johntheD
        </font>
      </div>
    </div>
  );
};

ProfileCardsComponent.propTypes = {};

export const ProfileCards1Component = (props) => {
  return (
    <div className="profile-user-card">
      <div className="row">
        <img
          src="dist/images/femalejohn.png"
          className="rounded-circle mr-3"
          height="120px"
          width="120px"
          alt="avatar"
        />
      </div>
      <div className="row" style={{ marginLeft: 1 }}>
        <font size="4">Karry John</font>
      </div>
      <div className="row" style={{ marginLeft: 1 }}>
        <font size="4" color="#5f6363">
          @johntheD
        </font>
      </div>
    </div>
  );
};

ProfileCards1Component.propTypes = {};

export const ProfileCards2Component = (props) => {
  return (
    <div className="profile-user-card">
      <div className="row">
        <img
          src="dist/images/whitejohn.png"
          className="rounded-circle mr-3"
          height="120px"
          width="120px"
          alt="avatar"
        />
      </div>
      <div className="row" style={{ marginLeft: 1 }}>
        <font size="4">Karry John</font>
      </div>
      <div className="row" style={{ marginLeft: 1 }}>
        <font size="4" color="#5f6363">
          @johntheD
        </font>
      </div>
    </div>
  );
};

ProfileCards2Component.propTypes = {};
