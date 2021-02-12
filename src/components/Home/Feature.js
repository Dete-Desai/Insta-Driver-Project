import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FeatureImg from '../../dist/images/social-banner.png';

const Feature = () => {
  return (
    <section className="py-5 px-2">
      <Row className="d-flex align-items-center">
        <Col md={12} className="">
          <h1
            style={{ fontSize: "40px", fontFamily: "Rubik" }}
            className="heading-color pb-3 text-center"
          >
            FOR DRIVERS WORLDWIDE
            </h1>
        </Col>
      </Row>
      <Row className="">
        <Col sm={11} className="ml-auto">
          <Row className="d-flex align-items-center">
            <Col lg={4} className="">
              <div className="">
                <h3
                  style={{ fontSize: "29px", fontFamily: "Rubik" }}
                  className="heading-color mb-4"
                >
                  A Professional And Social Media Platform Exclusive For Drivers AKA Comrades
                </h3>
              </div>
            </Col>
            <Col lg={8} className="p-0">
              <Container>
                <Container className="text-center">
                  <img src={FeatureImg} alt="" className="img-fluid" />
                </Container>
              </Container>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Feature;