import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import  BannerImg  from "../../../../../dist/images/instra-group-banner.svg";


const Banner = () => {
  return (
    <section className="pt-0">
      <Row className="">
        <Col md={11} className="m-auto">
          <Row className="d-flex align-items-center justify-content-center">
            <Col lg={4}>
              <Container>
                <h1
                  style={{ fontSize: "39px", fontFamily: "Rubik" }}
                  className="text-orange mb-5 text-center"
                >
                  Giving The Voice  For The Voiceless
                </h1>
                <h3
                  style={{ fontSize: "33px", fontFamily: "Rubik", fontWeight: 400 }}
                  className="heading-color text-center pt-3"
                >
                  How powerful will the world drivers be if they can come together via Instadriver Groups
                </h3>
              </Container>
            </Col>
            <Col lg={8}>
                <img src={BannerImg} alt="" className="img-fluid w-100" />
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Banner;