import React from "react";
import PropTypes from "prop-types";

const AboutCard1Component = (props) => {
  return (
    <div className="about-card">
      <br />
      <div className="d-flex flex-row">
        <div className="col-md-12">
          <font color="#5f6363" size="5">
            <b>Group Settings</b>
          </font>
        </div>
      </div>
      <hr style={{ width: "96%", textAlign: "left", marginLeft: 10 }} />
      <div className="d-flex flex-row">
        <div
          className="col-md-11"
          style={{ marginLeft: 35, textAlign: "left" }}
        >
          <div className="row" style={{ marginLeft: 5 }}>
            <span>
              <b>Public</b>
            </span>
          </div>
          <span color="#5f6363">
            The group discussion of words put together to form a group that is
            usually longer than a sentence.
          </span>
          <br />
          <br />
          <div className="row" style={{ marginLeft: 5 }}>
            <span>
              <b>Visible</b>
            </span>
          </div>
          <span color="#5f6363">
            The group discussion of words put together to form a group that is
            usually longer than a sentence.
          </span>
        </div>
      </div>
    </div>
  );
};

AboutCard1Component.propTypes = {};

export default AboutCard1Component;
