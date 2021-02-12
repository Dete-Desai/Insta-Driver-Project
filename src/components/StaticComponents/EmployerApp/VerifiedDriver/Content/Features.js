import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import VerifiedImg from '../../../../../dist/images/VerifiedImg.svg';


const Features = () => {

  return (
    <section className="feature-bg profile-feature p-5">
      <Row className="mt-3">
        <Col md={11} className="m-auto">
          <Row className="d-flex">
            <Col lg={6} className="mb-4">
              <Card style={{ width: '530px', borderRadius: "24px" }} className="m-auto">
                <Card.Body className="m-auto p-5">
                  <Card.Title style={{ fontSize: "28px" }} className="heading-color py-2">What it means for a driver to have a Verification Badge!</Card.Title>
                  <Card.Text className="text-color m-auto w-100">
                    Drivers who get verified successfully get a verification badge on their profile. <br /> <br />

                    A verified drivers means that: <br /> <br />

                    1. The driver has been test-driven by Instadriver and rated competent to drive. This will help you not hire incompetent drivers and will surely cut the selection curve. It will also help curb crime and prevent accidents. <br /> <br />

                    2. The driving documents have been verified as valid documents and not forged. Hiring non-qualified drivers or drivers with fake documents will cost you a lot. <br /> <br />

                    The difference between free search and verified search When an employer searches for drivers, he has to pick the “Search Type” and two options emerge: 1) Search All Drivers; 2) Search Verified Drivers. <br /> <br />

                    In free search (i.e Search All Drivers), the drivers that show in search results include verified and non-verified drivers, however, the verification badge will be hidden, so you can’t tell who is verified. If you happen to hire a non-verified driver, you will be responsible to test-drive the driver, and check validity of his documents by yourself. <br /> <br />

                    In verified search (i.e. Search Verified Drivers), the search results only show drivers with verification badge. The driving competency tests and documents validity check has been done by Instadriver.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="pt-5">
              <Container className="text-center">
                <img src={VerifiedImg} alt="" className="img-fluid" />
              </Container>
            </Col>
          </Row>

        </Col>
      </Row>
    </section>
  );
};

export default Features;