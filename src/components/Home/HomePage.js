import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Feature from './Feature';
import FeatureCard from './FeatureCard';
import FeatureSlider from './FeatureSlider';
import './index.css';
import SearchABusiness from './SearchABusiness';
import SearchDriver from './SearchDriver';

const HomePage = () => {
  return (
    <div className="home-page">
      <Col xl={10} className="m-auto">
        <Row className="py-5 my-4 d-flex justify-content-between">
          <SearchDriver />
        </Row>
      </Col>
      <Row style={{ background: '#363636' }} className="py-5">
        <Col xl={10} className="m-auto py-5">
          <SearchABusiness />
        </Col>
      </Row>
      <Row className="py-5">
        <Col xl={10} className="m-auto">
          <Feature />
        </Col>
      </Row>
      <Row className="py-5">
        <Col xl={10} className="m-auto">
          <FeatureCard />
        </Col>
      </Row>
      <Row className="py-5">
        <FeatureSlider />
      </Row>
    </div>
  );
};

export default HomePage;