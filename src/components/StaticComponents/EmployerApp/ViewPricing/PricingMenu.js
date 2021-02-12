import React from 'react';
import { Col, Container } from 'react-bootstrap';

const PricingMenu = ({ setShowYearlyPrice, showYearlyPrice }) => {
  return (
    <>
      <Col lg={9} className="ml-auto">
        <Container fluid>
          <h1
            style={{ fontSize: "30px", fontFamily: "Rubik" }}
            className="heading-color pb-4 pl-2"
          >
            Subscription Plan For Instadriver Employer
                </h1>
        </Container>
        <Container fluid>
           
            <div className="d-flex align-items-center pl-2 price-toggle text-center">
              <button
                onClick={() => setShowYearlyPrice(false)}
                className={!showYearlyPrice ? "toggle-menu menu-active border-0" : "toggle-menu border-0"}
              >
                Monthly
              </button>
              <button
                onClick={() => setShowYearlyPrice(true)}
                className={showYearlyPrice ? "toggle-menu menu-active border-0" : "toggle-menu border-0"}
              >
                Yearly
              </button>
            </div>
        </Container>
      </Col>
    </>
  );
};

export default PricingMenu;