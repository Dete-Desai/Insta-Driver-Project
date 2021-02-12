import React from 'react';
import { Col, Row } from 'react-bootstrap';
import MainFooter from '../../../../Layout/MainFooter/MainFooter';
import {DriverStaticNavBar} from '../../../../Layout/StaticNavBar';
import Banner from '../ProfileContent/Banner';
import Features from '../ProfileContent/Features';
import HowItWorks from '../ProfileContent/HowItWorks';
import Services from '../ProfileContent/Services';

const ProfileHome = () => {
  return (
    <div className="professional-profile">
      <div className="top-navbar">
        <DriverStaticNavBar />
      </div>
      <div className="banner">
        <Banner />
      </div>
      <div className="feature">
        <Features />
      </div>
      <div className="howItWorks pb-5">
        <Row>
          <Col md={10} className="m-auto">
            <HowItWorks />
          </Col>
        </Row>
      </div>
      <div className="howItWorks mt-5 pb-5 yellowbg12">
        <Row>
          <Col md={10} className="m-auto">
            <Services />
          </Col>
        </Row>
      </div>
      <div className="MakeFriendship">
        <MainFooter />
      </div>

    </div>
  );
};

export default ProfileHome;