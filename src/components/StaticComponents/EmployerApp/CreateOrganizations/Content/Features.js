import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Features = (props) => {
  const { id, heading, text, img } = props.feature
  return (
    <section className={id === "200A" ? "feature-bg p-5 my-5" : "p-5 my-5"}>
      <Row className="py-5">
        <Col md={12} className="ml-auto">
          <Row className="d-flex align-items-center">
            <Col lg={5} className="p-4">
              <div className="pl-2">
                <h3
                  style={{ fontSize: "35px", fontFamily: "Rubik" }}
                  className="heading-color pb-5"
                >
                  {heading}
                </h3>
                {
                  text === 'custom' ?
                    <span
                      style={{ fontSize: "23px", fontFamily: "Rubik", fontWeight: 400, color: "#5B5B5B" }}
                      className="pr-5"
                    >
                      Its very simple, a vehicle requires three things: 1) Proper Inpection; 2. Excellent Mentanance; 3. Timely resolving of emerging issues. <br /><br /> Our tools helps you inspect your vehicles well, follow on every issue till its resolved, and making sure the done maintenance is recorded well and data stored.<br /><br /> We are not using spreadsheets. We are more advanced than that.
                    </span>
                    :
                    <span
                      style={{ fontSize: "23px", fontFamily: "Rubik", fontWeight: 400, color: "#5B5B5B" }}
                      className="pr-5"
                    >
                      {text}
                    </span>
                }
              </div>
            </Col>
            <Col lg={7} className="p-0">
              <Container className="text-center">
                <img src={img} alt="" className="img-fluid" />
              </Container>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Features;