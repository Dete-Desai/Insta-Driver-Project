import React from 'react';
import { Col } from 'react-bootstrap';

const SearchABusiness = () => {
  return (
    <>
      <Col md={8} lg={6} className="py-5 m-auto d-flex align-items-center flex-column">
        <h1
          style={{ fontSize: "29px", fontFamily: "Rubik", fontWeight: 400, lineHeight: '45px' }}
          className="heading-color mb-4 text-center text-white"
        >
          Search for employers, businesses, providers and players in Mobility Industry
        </h1>
        <div style={{ width: "365px"}}className="pt-2 register-btn">
          <button
            style={{ fontSize: "15px" }}
            className="btn bg-white font-weight-bold w-100 text-black"
          >
            Go To “Search A Business & Mobility Players”
          </button>
        </div>
      </Col>
    </>
  );
};

export default SearchABusiness;