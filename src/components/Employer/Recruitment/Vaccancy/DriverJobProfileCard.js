import React from "react";
import PropTypes from "prop-types";
import DriverApplicationNotification from "./DriverApplicationNotification";

export const DriverJobProfileCard = (props) => {
  const { applicant } = props;
  return (
    <div>
      <div className="col-md-12">
        <div className="our-team">
          <div className="row picture">
            <img
              className="img-fluid h-100"
              src={
                applicant && applicant.avatar
                  ? applicant.avatar
                  : "https://picsum.photos/130/130?image=1027"
              }
            />
          </div>
          <div className="team-content">
            <font className="name" size="4">
              <b>
                {applicant && applicant.firstName + " " + applicant.lastName}
              </b>
            </font>
            <br />
            <font>
              {applicant && applicant.username}{" "}
              {applicant && applicant.lastSeen}{" "}
            </font>
            <br />
            <font>__________________</font>
            <br />
            <font>
              License Age{" "}
              <strong>{applicant && `${applicant.licenseAge} years`}</strong>
            </font>
            <br />
            <font>
              Experience{" "}
              <strong>{applicant && `${applicant.experience} years`}</strong>
            </font>
          </div>
          <DriverApplicationNotification />
        </div>
      </div>
    </div>
  );
};

DriverJobProfileCard.propTypes = {};

export const DriverJobProfileCard1 = (props) => {
  const data = props.applicant;
  if (data) {
    return (
      <div>
        <div className="col-lg-12">
          <div className="our-team1 ">
            <div className="row picture">
              <img
                className="img-fluid"
                src={
                  data.avatar
                    ? data.avatar
                    : "https://picsum.photos/130/130?image=1027"
                }
              />
            </div>
            <div className="team-content">
              <font className="name" size="4">
                <b>{`${data.firstName} ${data.lastName}`}</b>
              </font>
              <br />
              <font>{data.username}</font>
              <br />
              <font>__________________</font>
              <br />
              <font>{`${data.experience} Years Experience`} </font>
              <br />
              <font>{`${data.licenseAge} Years Driving Experience`} </font>
            </div>
          </div>
          <DriverApplicationNotification />
        </div>
      </div>
    );
  }
  return null;
};

DriverJobProfileCard1.propTypes = {};
