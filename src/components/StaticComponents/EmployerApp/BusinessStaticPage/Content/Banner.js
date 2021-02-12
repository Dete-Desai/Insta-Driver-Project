import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BannerImg from '../../../../../dist/images/business-banner.svg';



const Banner = () => {
  return (
    <section className="p-5">
      <Row className="">
        <Col md={12} className="">
          <Row className="">
            <Col xl={7} className="p-0">
              <div className="pt-4">
                <Container fluid>
                  <h1
                    style={{ fontSize: "50px", fontFamily: "Rubik" }}
                    className="heading-color pb-5"
                  >
                    Instadriver, a platform for <br /> mobility related businesses
                </h1>
                </Container>
                <Row>
                  <Col xl={10} className="pr-5 pb-3">
                    <Container fluid>
                      <span
                        style={{ fontSize: "23px", fontFamily: "Rubik", fontWeight: 400, color: "#5B5B5B" }}
                        className=""
                      >
                        Showcase your business on Instadriver Business. We give you a space to create a business page and tell the world about your business and prodcuts/services.
                      <br /><br />
                      Have an online presence using Instadriver Business.
                    </span>
                    </Container>

                  </Col>
                </Row>
              </div>
            </Col>
            <Col xl={5} className="p-0" style={{ marginTop: "-80px" }}>
              <Container className="text-center" fluid>
                <img src={BannerImg} alt="" className="img-fluid w-100" />
              </Container>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Banner;