import React from 'react';
import { Col, Row } from 'react-bootstrap';
import MainFooter from '../../../Layout/MainFooter/MainFooter';
import { EmployerStaticNavBar } from '../../../Layout/StaticNavBar';
import Banner from './Content/Banner';
import SearchDriver from './Content/SearchDriver';
import HowItWorks from './Content/HowItWorks';
import Services from './Content/Services';
import Features from './Content/Features';
import JobApplicants from './Content/JobApplicants';
import DriverCards from './Content/DriverCards';
import PostVacancy from './Content/PostVacancy';

const ProfileHome = () => {
  return (
    <div className="professional-profile">
      <div className="top-navbar"><EmployerStaticNavBar /></div>
      <div className="banner"><Banner /></div>
      <div className="SearchDriver"><SearchDriver /></div>
      <div className="feature"><Features /></div>
      <div className="JobApplicants"><JobApplicants /></div>
      <div className="JobApplicants"><PostVacancy /></div>
      <div className="DriverCards"><DriverCards /></div>
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
      <div className="MakeFriendship"><MainFooter /></div>
    </div>
  );
};

export default ProfileHome;