import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MediaGroupImg from '../../../../../dist/images/media-image.svg';


const Media = () => {
  return (
    <section className="profile-feature pb-5 mt-5 px-5">
      <Row className="">
        <Col md={12} className="m-auto">
          <Row className="d-flex align-items-center">
            <Col lg={9} className="pb-4">
              <img src={MediaGroupImg} alt="" className="img-fluid w-100" />
            </Col>
            <Col lg={3} className="mt-3 pr-0">
              <Container>
                <h1
                  style={{ fontSize: "34px", fontFamily: "Rubik" }}
                  className="heading-color mb-4 text-center"
                >
                  Enjoy The Media
                </h1>
                <p
                  style={{ fontSize: "27px", fontFamily: "Rubik", fontWeight: 400, color: "#5B5B5B" }}
                  className="text-center pt-3"
                >
                  Enjoy the vast content posted by comrades. Videos, photos, files. Get amazing media content from Instadriver Groups. <br /> <br />
                  Follow groups that interests you and follow comrades and enjoy great content.
                </p>
              </Container>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Media;