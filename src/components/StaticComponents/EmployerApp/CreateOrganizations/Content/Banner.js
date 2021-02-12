import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BannerImg from '../../../../../dist/images/Org.svg';



const Banner = () => {
  return (
    <section className="py-5 org-bg">
      <Row className="">
        <Col md={12} className="pl-5">
          <Row className="">
            <Col xl={6} className="p-0">
              <div className="pl-5 pt-4">
                <h1
                  style={{ fontSize: "50px", fontFamily: "Rubik" }}
                  className="text-white pb-5"
                >
                  Organisations helps you in fleet management
                </h1>
                <Row>
                  <Col xl={10} className="pr-5 pb-3">
                    <span
                      style={{ fontSize: "23px", fontFamily: "Rubik", fontWeight: 400, }}
                      className="text-white"
                    >
                      Whether you have a fleet of 10 vehicles or 5000 vehicles, Instadriver Organisation will automate your fleet management. Organisations is designed to help teams manage their fleet seamlessly , conveniently and efficiently
                    </span>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xl={6} className="p-0">
              <Container>
                <Container className="text-center">
                  <img src={BannerImg} alt="" className="img-fluid w-100" />
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