import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ComradeGroupImg from '../../../../../dist/images/comrade-group.svg';


const Group = () => {
  return (
    <section style={{ background: '#F0F2F5' }} className="profile-feature pb-5">
      <Row className="">
        <Col md={11} className="m-auto">
          <Row className="d-flex align-items-center">
            <Col lg={4} className="">
              <Container>
                <h1
                  style={{ fontSize: "34px", fontFamily: "Rubik" }}
                  className="heading-color mb-4 text-center"
                >
                  One Huge Group For <br /> Comrades Only
                </h1>
                    <p
                      style={{ fontSize: "18px", fontFamily: "Rubik", fontWeight: 400, color: "#5B5B5B" }}
                      className="text-center pt-3"
                    >
                      We are one HUGE group of drivers. Only drivers are allowed to have accounts. There are more that 7 million professional drivers globally. Lets bring them on this exclusive platform.  <br /> <br />

                  Create groups on Instadriver Groups to discuss your challenges in your driving space, share opportunies, form businesses, and update on current news affecting your industry.
                </p>
              </Container>
            </Col>
            <Col lg={8} className="pb-4">
                <img src={ComradeGroupImg} alt="" className="img-fluid w-100" />
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Group;