import React from "react";
import PropTypes from "prop-types";

export const MembersProfileCardsComponent = (props) => {
  return (
    <div className="col-md-12 members-profile-card">
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
      <hr
        style={{
          width: "96%",
          textAlign: "left",
          marginLeft: 5,
          marginTop: 4,
          marginBottom: 1,
        }}
      />
      <div className="row" style={{ marginLeft: 0, marginTop: "0%" }}>
        <font color="orange">NewYork, USA</font>
      </div>
      <div className="row" style={{ left: "10%" }}>
        <button
          className="social-button2 social-button-2"
          style={{
            width: 120,
            height: 30,
            textAlign: "center",
            fontSize: 20,
            marginTop: 4,
          }}
        >
          connect
        </button>
      </div>
    </div>
  );
};

MembersProfileCardsComponent.propTypes = {};

export const MembersProfileCards1Component = (props) => {
  return (
    <div className="col-md-12 members-profile-card">
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
      <hr
        style={{
          width: "96%",
          textAlign: "left",
          marginLeft: 5,
          marginTop: 4,
          marginBottom: 1,
        }}
      />
      <div className="row" style={{ marginLeft: 0, marginTop: "0%" }}>
        <font color="orange">NewYork, USA</font>
      </div>
      <div className="row" style={{ left: "10%" }}>
        <button
          className="social-button2 social-button-2"
          style={{
            width: 120,
            height: 30,
            textAlign: "center",
            fontSize: 20,
            marginTop: 4,
          }}
        >
          connect
        </button>
      </div>
    </div>
  );
};

MembersProfileCards1Component.propTypes = {};

export const MembersProfileCards2Component = (props) => {
  return (
    <div className="col-md-12 members-profile-card">
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
      <hr
        style={{
          width: "96%",
          textAlign: "left",
          marginLeft: 5,
          marginTop: 4,
          marginBottom: 1,
        }}
      />
      <div className="row" style={{ marginLeft: 0, marginTop: "0%" }}>
        <font color="orange">NewYork, USA</font>
      </div>
      <div className="row" style={{ left: "10%" }}>
        <button
          className="social-button2 social-button-2"
          style={{
            width: 120,
            height: 30,
            textAlign: "center",
            fontSize: 20,
            marginTop: 4,
          }}
        >
          connect
        </button>
      </div>
    </div>
  );
};

MembersProfileCards2Component.propTypes = {};
