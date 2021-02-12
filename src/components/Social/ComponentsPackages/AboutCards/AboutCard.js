import React from "react";
import PropTypes from "prop-types";

const AboutCardComponent = (props) => {
  return (
    <div className="about-card">
      <br />
      <div className="d-flex flex-row">
        <div className="col-md-12">
          <font color="#5f6363" size="5">
            About This Group
          </font>
          <font color="black" size="4" style={{ marginLeft: "33%" }}>
            <b>created on 23rd June 2020</b>
          </font>
        </div>
      </div>
      <hr style={{ width: "96%", textAlign: "left", marginLeft: 10 }} />
      <div className="d-flex flex-row">
        <div
          className="col-md-11"
          style={{ marginLeft: 30, textAlign: "left" }}
        >
          <span>
            <b>
              A paragraph is a group of words put together to form a group that
              is usually longer than a sentence. Paragraphs are often made up of
              several sentences. There are usually between three and eight
              sentences. ... This topic sentence of the paragraph tells the
              reader what the paragraph will be about.
            </b>
          </span>
        </div>
      </div>
    </div>
  );
};

AboutCardComponent.propTypes = {};

export default AboutCardComponent;
