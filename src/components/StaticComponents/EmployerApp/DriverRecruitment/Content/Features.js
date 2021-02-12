import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FeatureImg from '../../../../../dist/images/job-card.svg';



const Features = () => {
  return (
    <section className="p-5">
      <Row className="">
        <Col md={12} className="ml-auto">
          <Row className="d-flex align-items-center">
            <Col md={12} className="">
              <h1
                style={{ fontSize: "45px", fontFamily: "Rubik" }}
                className="heading-color my-4 pb-3 text-center"
              >
                Employers who create account enjoy <br /> advanced recruitment features
            </h1>
            </Col>
          </Row>
          <Row className="">
            <Col sm={11} className="ml-auto p-0">
              <Row className="d-flex align-items-center">
                <Col lg={5} className="p-0">
                  <div className="">
                    <h3
                      style={{ fontSize: "35px", fontFamily: "Rubik" }}
                      className="heading-color mb-4"
                    >
                      Post a vacancy ad
                </h3>
                    <p
                      style={{ fontSize: "23px", fontFamily: "Rubik", fontWeight: 400, color: "#5B5B5B" }}
                      className="pt-3 pr-5"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis in egestas at quisque diam. Ultricies ut egestas tempus bibendum id sem. Etiam at amet faucibus pharetra. Fringilla sit volutpat, eget praesent quis ultricies eros quis. Ut egestas mi pharetra bibendum et tortor risus duis nulla. Et morbi viverra integer sit.
                </p>
                  </div>
                </Col>
                <Col lg={7} className="p-0">
                  <Container>
                    <Container className="text-center">
                      <img src={FeatureImg} alt="" className="img-fluid" />
                    </Container>
                  </Container>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Features;