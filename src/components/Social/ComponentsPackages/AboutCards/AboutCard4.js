import React from "react";
import PropTypes from "prop-types";

const AboutCard4Component = (props) => {
  return (
    <div className="about-card3">
      <br />
      <div className="d-flex flex-row">
        <div className="col-md-12">
          <font color="#5f6363" size="5">
            <b>Group Report</b>
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
              <font color="black">50k New Posts Today</font>
            </li>
            <br />
            <li>
              <font color="black">1M Posts Since Creation</font>
            </li>
            <br />
            <li>
              <font color="black">50K New Members Joined This Month</font>
            </li>
            <br />
            <li>
              <font color="black">
                100K members Joined this group Since Creation
              </font>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

AboutCard4Component.propTypes = {};

export default AboutCard4Component;
