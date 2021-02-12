import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MakeFriendshipImg from '../../../../../dist/images/make-friendship.svg';


const MakeFriendship = () => {
  return (
    <section className="profile-feature pb-5 mt-5 px-4">
      <Row className="">
        <Col md={12} className="m-auto">
          <Row className="d-flex align-items-center">
            <Col lg={3} className="pb-3 pl-0">
              <Container>
                <h1
                  style={{ fontSize: "34px", fontFamily: "Rubik" }}
                  className="heading-color mb-4 text-center"
                >
                  Make Friendships
                </h1>
                <p
                  style={{ fontSize: "27px", fontFamily: "Rubik", fontWeight: 400, color: "#5B5B5B" }}
                  className="text-center pt-3"
                >
                  Meet amazing comrades. Follow them to get more of their content.<br /> <br />
                  Meet resourceful drivers, network with them and explore a world of opportunities.
                </p>
              </Container>
            </Col>
            <Col lg={9} className="pb-4">
              <img src={MakeFriendshipImg} alt="" className="img-fluid w-100" />
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default MakeFriendship;