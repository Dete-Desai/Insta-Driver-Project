import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import VerifiedImg from '../../../../../dist/images/VerifiedImg.svg';
import userAvatar from '../../../../../dist/images/userAvator.svg';
import DriverFeatureCard from './DriverFeatureCard';


const Features = () => {
  return (
    <section style={{ background: '#252935' }} className="profile-feature pb-4">
      <Row className="">
        <Col md={11} className="m-auto">
          <Row className="d-flex align-items-center">
            <Col lg={6} className="mb-4">
              <Card style={{ width: '490px', borderRadius: "24px" }} className="m-auto feature-card">
                <Card.Body className="m-auto">
                  <Card.Title style={{ fontSize: "28px" }} className="heading-color py-2 text-center">Get a Verification Badge</Card.Title>
                  <Card.Text className="text-color m-auto">
                    Some employers (actually most employers) prefer to hire verified drivers. Drivers who get verified have a verification badge on their profile. <br /> <br />
                    A verified drivers means that: <br /> <br />
                    1. The driver has been test-driven by Instadriver and rated competent to drive. This will assure employers of your competency and hence increases the chances of getting hired. <br /> <br />
                    2. The driving documents have been verified as valid documents and not forged. Employers fear hiring non-qualified drivers or drivers with fake documents.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6}>
              <Container className="text-center">
                <img src={VerifiedImg} alt="" className="img-fluid" />
              </Container>
            </Col>
          </Row>
          <Row className="mt-5 align-items-center d-flex">
            <Col lg={6} className="mb-4">
              <Card style={{ width: '490px', borderRadius: "24px" }} className="m-auto feature-card">
                <Card.Body className="m-auto">
                  <Card.Title style={{ fontSize: "28px" }} className="heading-color py-2 text-center">Post A Hire Me Card</Card.Title>
                  <Card.Text className="text-color m-auto">
                    A “Hire Me Card” is a digital card drivers post in less than 10 seconds. These cards appear on the Jobs section of Instadriver. Employers would sometimes want to hire drivers who are currently and actively looking for a job. Once you post a driver hire me card, it lasts for 5 days before it expires. Get hired instantly with “Hire Me Cards”. <br /> <br />
                    Once an employer clicks the card, he is redirected to your full profile on Instadriver. He can also directly shortlist you.<br /> <br />
                    You can also share the card to other social media platforms and your profile will get more visibility. Instadriver gives drivers all tools to help them get hired instantly. <br /> <br />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6}>
              <Container className="text-center">
                <DriverFeatureCard />
              </Container>
            </Col>
          </Row>
          <Row className="d-flex align-items-center mt-5">
            <Col lg={6} className="mb-4">
              <Card style={{ width: '490px', borderRadius: "24px" }} className="m-auto feature-card">
                <Card.Body className="m-auto">
                  <Card.Title style={{ fontSize: "28px" }} className="heading-color py-2 text-center">Post A Hire Me Card</Card.Title>
                  <Card.Text className="text-color m-auto">
                    Life is easier when you leverge connections. Instadriver is a professional and a social media platform exclusive for drivers around the world. One thing is for sure. Drivers like empowering fellow drivers.  Create a profile and connect and socialize with fellow drivers aka comrades. <br /> <br />

                    Fellow comrades will share job opportunities which you may not have heard of. Comrades network to start passive revenue stream project, et cetera. <br /> <br />

                    Connecting and networking with drivers opens a world of opportunities. Besides, when you connect and follow a driver, you will socialize more online.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6}>
              <Container className="text-center">
                <img src={userAvatar} alt="" className="img-fluid" />
              </Container>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Features;