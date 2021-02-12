import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DriverCardImg from '../../../../../dist/images/driver-card.svg';



const DriverCards = () => {
  return (
    <section style={{ background: '#F0F2F5' }} className="p-5">
      <Row className="d-flex align-items-center justify-content-center">
        <Col md={9} className="">
          <h1
            style={{ fontSize: "35px", fontFamily: "Rubik" }}
            className="heading-color mt-4 mb-2 pl-5"
          >
            Access Hire Me Cards in your dashboard and shortlist
          </h1>
          <p
            style={{ fontSize: "23px", fontFamily: "Rubik", fontWeight: 400, color: "#5B5B5B" }}
            className="py-3 pl-5"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis in egestas at quisque diam. Ultricies ut egestas tempus bibendum id sem. Etiam at amet faucibus pharetra. Fringilla sit volutpat, eget praesent quis ultricies eros quis. Ut egestas mi pharetra bibendum et tortor risus duis nulla. Et morbi viverra integer sit.
          </p>
        </Col>
      </Row>
      <Row className="my-4 pt-4">
        <Col lg={10} className="m-auto p-0">
          <Container className="">
            <img src={DriverCardImg} alt="" className="img-fluid w-100" />
          </Container>
        </Col>
      </Row>
    </section>
  );
};

export default DriverCards;