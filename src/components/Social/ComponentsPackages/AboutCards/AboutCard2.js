import React from "react";
import PropTypes from "prop-types";

const AboutCard2Component = (props) => {
  return (
    <div className="about-card1">
      <br />
      <div className="d-flex flex-row">
        <div className="col-md-12">
          <font color="#5f6363" size="5">
            <b>Group Rules</b>
          </font>
        </div>
      </div>
      <hr style={{ width: "96%", textAlign: "left", marginLeft: 10 }} />
      <div className="d-flex flex-row">
        <div
          className="col-md-11"
          style={{ marginLeft: 30, textAlign: "left" }}
        >
          <ul className="square-bullets" style={{ fontSize: 21 }}>
            <li>
              <font color="black">
                The group discussion of words put together to form a group that
                is usually longer than a sentence.
              </font>
            </li>
            <br />
            <li>
              <font color="black">
                The group discussion of words put together to form a group that
                is usually longer than a sentence.
              </font>
            </li>
            <br />
            <li>
              <font color="black">
                The group discussion of words put together to form a group that
                is usually longer than a sentence.
              </font>
            </li>
            <br />
            <li>
              <font color="black">
                The group discussion of words put together to form a group that
                is usually longer than a sentence.
              </font>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

AboutCard2Component.propTypes = {};

export default AboutCard2Component;
