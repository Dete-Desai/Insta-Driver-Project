import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BannerImg from '../../../../../dist/images/recruitment-banner.svg';



const Banner = () => {
  return (
    <section className="py-5">
      <Row className="">
        <Col md={11} className="m-auto">
          <Row className="d-flex align-items-center">
            <Col lg={6} className="p-0">
              <div className="pl-5">
                <h1
                  style={{ fontSize: "50px", fontFamily: "Rubik" }}
                  className="heading-color mb-4"
                >
                  Recruit drivers instantly and conveniently
                </h1>
                <p
                  style={{ fontSize: "23px", fontFamily: "Rubik", fontWeight: 400, color: "#5B5B5B" }}
                  className="pt-3"
                >
                  Instadriver is a driver-employer marketplace. Drivers post their professional profile, and you recruit them. Hiring a driver should be as fast as sending a message to your friend’s inbox. Instantly.
                </p>
              </div>
            </Col>
            <Col lg={6} className="p-0">
              <Container>
              <Container className="text-center">
                <img src={BannerImg} alt="" className="img-fluid" />
              </Container>
              </Container>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Banner;