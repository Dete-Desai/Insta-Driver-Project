import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DeveloperImg from '../../../../../dist/images/Software-Developer.svg';


const Group = () => {
  return (
    <section className="profile-feature pb-5">
      <Row className="">
        <Col md={11} className="m-auto">
          <Row className="d-flex align-items-center">
            <Col lg={6} className="">
              <Container>
                <h1
                  style={{ fontSize: "39px", fontFamily: "Rubik" }}
                  className="heading-color mb-4"
                >
                  Game Developers are using <br /> Instadriver Gaming Platform
                </h1>
                <Row>
                  <Col md={8} className="">
                    <p
                      style={{ fontSize: "26px", fontFamily: "Rubik", fontWeight: 400, color: "#5B5B5B" }}
                      className="pt-3"
                    >
                      Our community of developers are always building amazing games on top of our Instadriver gaming platform. More games, more features, more fun.
                </p>
                <Link to="/contact-us">
                <button style={{width: 460, height: 50, fontSize: '26px', color: "#5B5B5B", borderRadius:"5px"}} className="btn btn-outline-warning my-4">Game Developers, Contact Us</button></Link>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col lg={6} className="pb-4">
              <img src={DeveloperImg} alt="" className="img-fluid" />
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Group;