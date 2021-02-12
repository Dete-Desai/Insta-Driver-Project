import React from 'react';
import { Col } from 'react-bootstrap';

export const ProfileMedium = (props) => {
  return (
    <Col className="px-0 text-center" xs={4} sm={4} md={4} lg={4}>
      <img style={{ width: '160px', height: '160px', borderRadius: "20px" }} src={props.profile} alt="" className="img-fluid pr-1" />
    </Col>
  );
};

export const ProfileLarge = (props) => {
  return (
    <Col className="px-0 text-center" xs={4} sm={4} md={4} lg={4}>
      <img style={{ width: '250px', height: '250px', borderRadius: "20px" }} src={props.profile} alt="" className="img-fluid pr-1 pl-2" />
    </Col>
  );
};

export const ProfileSmall = (props) => {
  return (
    <Col className="px-0 text-center" xs={6} sm={6} md={6} lg={6}>
      <img style={{ width: '80px', height: '80px', borderRadius: "20px" }} src={props.profile} alt="" className="img-fluid pr-1" />
    </Col>
  );
};

