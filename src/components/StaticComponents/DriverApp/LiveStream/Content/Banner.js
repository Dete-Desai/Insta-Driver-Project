import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import livestreamBannerImg from '../../../../../dist/images/livestream-banner.svg';


const Banner = () => {
  return (
    <section style={{ background: '#FF9292' }} className="profile-feature pb-5 px-3">
      <Row className="">
        <Col md={10} className="m-auto">
          <Row className="">
            <Col lg={7} className="d-flex align-items-center">
              <Container>
                <h1
                  style={{ fontSize: "39px", fontFamily: "Rubik" }}
                  className="text-white mb-4"
                >
                  Some things are well  <br /> articulated by a live broadcast
                </h1>
                    <p
                      style={{ fontSize: "26px", fontFamily: "Rubik", fontWeight: 400, color: "#5B5B5B" }}
                      className=" pt-3"
                    >
                      A rant, a message, an event, an experience ... <br/> You can livestream it to your fellow drivers <br/> and to the world. <br /> <br />
                      News and updates can be best be delivered <br/> via livestream! And what about that unique <br/> driving manoeuvre captured on livestream!!? 
                </p>
              </Container>
            </Col>
            <Col lg={5} className="pb-4">
                <img src={livestreamBannerImg} alt="" className="img-fluid" />
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Banner;