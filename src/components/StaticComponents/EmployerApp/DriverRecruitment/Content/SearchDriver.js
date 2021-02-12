import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SearchBoxImg from '../../../../../dist/images/searchBox.svg';
import SearchDriverImg from '../../../../../dist/images/search-driver-img.svg';


const SearchDriver = () => {
  return (
    <section style={{ background: '#F0F2F5' }} className="profile-feature pb-4 mt-4">
      <Row className="pt-4">
        <Col md={11} className="m-auto">
          <Row className="d-flex align-items-center">
            <Col lg={6} className="mb-4 p-0">
              <div className="pl-5">
                <h1
                  style={{ fontSize: "35px", fontFamily: "Rubik" }}
                  className="heading-color mb-4"
                >
                  You can even hire without <br /> creating an account
                </h1>
                <p
                  style={{ fontSize: "23px", fontFamily: "Rubik", fontWeight: 400, color: "#5B5B5B" }}
                  className="pt-3 pr-5"
                >
                  If you create an account, you will enjoy more recruitment features. But you can still hire drivers without creating an account. Just go to homepage and search drivers.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <Container className="text-center">
                <img src={SearchBoxImg} alt="" className="img-fluid" />
              </Container>
            </Col>
          </Row>
          <Row className="d-flex align-items-center my-5 pt-3">
            <Col lg={5} className="mb-4 p-0">
              <div className="pl-5">
                <h1
                  style={{ fontSize: "35px", fontFamily: "Rubik" }}
                  className="heading-color mb-4"
                >
                  Search a specific driver
                </h1>
                <p
                  style={{ fontSize: "23px", fontFamily: "Rubik", fontWeight: 400, color: "#5B5B5B" }}
                  className="pt-3"
                >
                  We are creating one unified database of drivers. Great and ethical drivers would have an online presence on Instadriver. Learn about this driver before you hire him. It is safer  to hire a driver who has Instadriver account. Use our “Search For Mobility Player” feature to search for specific drivers.
                </p>
              </div>
            </Col>
            <Col lg={7}>
              <Container className="text-center">
                <img src={SearchDriverImg} alt="" className="img-fluid" />
              </Container>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default SearchDriver;