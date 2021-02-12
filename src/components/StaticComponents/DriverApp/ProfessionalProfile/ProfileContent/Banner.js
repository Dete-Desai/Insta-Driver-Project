import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ReactComponent as BannerImg } from "../../../../../dist/images/bannerImg.svg";


const Banner = () => {
  return (
    <section className="py-5">
      <Row className="">
        <Col md={11} className="m-auto">
          <Row className="d-flex align-items-center">
            <Col lg={6}>
              <Container>
                <h1
                  style={{ fontSize: "54px", fontFamily: "Rubik" }}
                  className="heading-color mb-4"
                >
                  Create a Professional <br /> profile for your <br /> driving career. Its <br /> LinkedIn for drivers
                </h1>
              </Container>
            </Col>
            <Col lg={6}>
              <Container>
                <div
                  style={{ height: '800px' }}
                  className="bannerBg d-flex align-items-center justify-content-center w-100"
                >
                  <BannerImg />
                </div>
              </Container>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Banner;