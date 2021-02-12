import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import featureImg from '../../../../../dist/images/livestream-feature.svg';


const Feature = () => {
  return (
    <section style={{ background: '#0A1B46' }} className="profile-feature pb-5 mt-5 px-3">
      <Row className="">
        <Col md={11} className="m-auto">
          <Row className="d-flex align-items-center">
            <Col lg={4} className="pb-3">
              <Container>
                <h1
                  style={{ fontSize: "39px", fontFamily: "Rubik" }}
                  className="text-white mb-4"
                >
                  We all like <br />  comments, <br /> especially real-time <br /> ones
                </h1>
                <p
                  style={{ fontSize: "26px", fontFamily: "Rubik", fontWeight: 400 }}
                  className="text-white"
                >
                  Live-interact with your fans.  Engage and have fun with the  real-time comments. Life is  too short not to be live and  authentic.
                </p>
              </Container>
            </Col>
            <Col lg={8} className="pb-4">
              <img src={featureImg} alt="" className="img-fluid" />
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Feature;