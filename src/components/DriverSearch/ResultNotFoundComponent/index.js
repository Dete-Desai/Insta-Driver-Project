import React from "react";
import styled from "styled-components";
import { Row, Col, Container, Button, Form } from "react-bootstrap";

import { mediaquery } from "../StaticData/mediaQuery";
import SearchBox from "../widgets/SearchBox";
const SearchBarContainer = styled(Row)`
  background-color: #ffbb00;
`;
const StyledP = styled.p`
  color: white;
  font-weight: 500;

  @media ${mediaquery.mobileL} {
    font-size: 14px;
  }
  @media ${mediaquery.mobileL} {
    font-size: 13.5px;
  }

  @media ${mediaquery.laptop} {
    font-size: 13px;
  }
  @media ${mediaquery.laptopL} {
    font-size: 15px;
  }

  color: #000000;
  text-align: center;

  @media ${mediaquery.tablet} {
    text-align: center;
  }
  @media ${mediaquery.laptop} {
    text-align: right;
  }
`;
const StyledPMessage = styled.p`
  color: white;
  font-weight: normal;
  @media ${mediaquery.mobileL} {
    font-size: 16px;
    width: 75%;
  }
  @media ${mediaquery.laptop} {
    font-size: 15px;
    width: 50%;
  }
  color: #5b5b5b;
  text-align: center;
`;

const SearchResultWrapper = styled(Container)`
  /* background-color: blue; */
  margin-top: 0;
  margin-bottom: 1rem;
  min-height: 60vh;
`;

const StyledFormGroup = styled(Form.Group)`
  width: 355.52px;
  margin: auto;
`;
const StyledH2 = styled.h2`
  font-size: 21px;
  font-weight: 500;
  text-align: center;
  color: #3b3b3b;
`;

function ResultNotFoundComponent({ keyword }) {
  return (
    <SearchResultWrapper fluid>
      <SearchBarContainer className="py-3">
        <Col xl={3} lg={5} xs={12} className="my-auto">
          <StyledP>Instadriver Business & Mobility Players Search</StyledP>
        </Col>
        <Col
          xl={{ span: 4, offset: 0 }}
          lg={{ span: 6, offset: 0 }}
          xs={{ span: 10, offset: 1 }}
        >
          <SearchBox keyword={keyword} />
        </Col>
      </SearchBarContainer>

      <div className="d-flex justify-content-center mt-5 text-align-center ">
        <StyledPMessage>
          Opps! This business has not created a business page on Instadriver!
          Give us the name of the business and we will reach out to them and
          request them to have a presence on Instadriver Business
        </StyledPMessage>
      </div>

      <Form
        className="mt-5 mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <StyledFormGroup>
          <Form.Control
            className="mt-5"
            placeholder="Enter name of the business"
          />
        </StyledFormGroup>

        <StyledFormGroup className="mt-5">
          <textarea
            style={{ resize: "none" }}
            className="form-control py-3"
            placeholder="Any other info you would like to share e.g. info to help us trace the business or anything else!?"
            resize={false}
            rows="3"
          ></textarea>
        </StyledFormGroup>
        <Form.Row className="justify-content-center">
          <Button
            variant="dark"
            className="mt-4"
            Style={{ backgroundColor: "#4b4747" }}
            type="submit"
          >
            Submit
          </Button>
        </Form.Row>
      </Form>
    </SearchResultWrapper>
  );
}

export default ResultNotFoundComponent;
