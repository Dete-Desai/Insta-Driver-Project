import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BannerImg from "../../../../../dist/images/instra-group-banner.svg";
import { ReactComponent as PointerImg } from "../../../../../dist/images/pointer-orng.svg";

const DescData = [
  { id: 'FD1', desc: 'A place for drivers to find jobs.' },
  { id: 'FD2', desc: 'Giving a voice for the drivers. Drivers have suffered alot, and this is a platform  for them to unite, discuss their challenges and change their destiny.' },
  { id: 'FD3', desc: 'Helping drivers build professional connections among fellow drivers. Drivers connect with each other, share opportunities and news that benefit each other.' },
  { id: 'FD4', desc: 'An exclusive social media platform for drivers. Helping drivers have a social connection with fellow drivers. Its time for drivers to have an exclusive social media club.' },
  { id: 'FD5', desc: 'Providing entertainment to drivers through gaming, livestream, and group video call.' },
  { id: 'FD6', desc: 'Giving drivers tools to know traffic conditions and help them beat the traffic.' },
  { id: 'FD7', desc: 'Giving drivers a third party verification so that they can be trusted and respected more hence they can find jobs and opportunities easily.' },
  { id: 'FD8', desc: 'We are coming up with a feature to help drivers reskill and upskill.  We are now in “the Fourth Industrial Revolution” period, where AI and automation is disrupting the world. With autonomous driving coming, we have to prepare drivers for this driver-less tech era, and hence upskilling and reskilling is critical.' },
]


const Banner = () => {
  return (
    <section className="py-5">
      <Row className="">
        <Col md={11} className="m-auto">
          <Row className="d-flex align-items-center justify-content-center">
            <Col lg={7}>
              <Container>
                <div className="ml-2 mb-5">
                  <h1
                    style={{ fontSize: "39px", fontFamily: "Rubik" }}
                    className="text-dark mb-4"
                  >
                    Free For Drivers
                </h1>
                  <h3
                    style={{ fontSize: "26px", fontFamily: "Rubik", fontWeight: 400 }}
                    className="heading-color"
                  >
                    Instadriver is built with driver empowerment in mind. Below are some of the objectives of Instadriver for drivers:
                </h3>
                </div>

                <Row>
                  <Col sm={12}>
                    {
                      DescData.map((desc, i) => {
                        return (
                          <Row key={i}>
                            <Col><PointerImg className="mr-2" fill="orange" /></Col>
                            <Col xs={11}>
                              <p
                                style={{ fontSize: "15px", fontFamily: "Rubik" }}
                                className="heading-color"
                              >
                                {desc.desc}
                              </p>
                            </Col>
                          </Row>
                        )
                      })}
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col lg={5}>
              <img src={BannerImg} alt="" className="img-fluid w-100" />
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Banner;