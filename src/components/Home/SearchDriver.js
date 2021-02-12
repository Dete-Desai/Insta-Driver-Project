import React from 'react';
import { Col } from 'react-bootstrap';
import SearchBox from './SearchBox';

const SearchDriver = () => {
  return (
    <>
      <Col md={4} lg={5} className="pb-4">
        <SearchBox />
      </Col>
      <Col md={5} lg={5} className="m-0 mt-4 d-flex align-items-center flex-column">
        <h1
          style={{ fontSize: "29px", fontFamily: "Rubik", fontWeight: 400, lineHeight: '45px' }}
          className="heading-color mb-4 text-center"
        >
          Use our cloud-based fleet  management solution for your  transport business.
            </h1>
        <div className="pt-5 register-btn">
          <button
            style={{ fontSize: "22px" }}
            className="btn btn-outline-dark font-weight-bold w-100 text-black"
          >
            Register
          </button>
        </div>
      </Col>
    </>
  );
};

export default SearchDriver;