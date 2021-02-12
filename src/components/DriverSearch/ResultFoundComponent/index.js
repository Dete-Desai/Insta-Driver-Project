import React from 'react'
import {useSelector} from "react-redux"
import styled from "styled-components";
import map from "lodash/map"
import get from "lodash/get"
import { Row, Col, Container, ButtonGroup } from "react-bootstrap";
import { mediaquery } from "../StaticData/mediaQuery";
import SearchBox from "../widgets/SearchBox";
import ResultItemCompany from "../widgets/ResultItemCompany";
import ResultItemDriver from "../widgets/ResultItemDriver";


const SearchResultWrapper = styled(Container)`
  /* background-color: blue; */
  margin-top: 0;
  margin-bottom: 1rem;
`;

const CustomButtonGroup = styled(ButtonGroup)`
  /* background-color: blue; */
  margin: auto;
  margin-top:1rem;
  button {
    background-color: #faf8f8;
    margin-left: 1rem;
    margin-right: 1rem;
    padding-top:0.5rem;
    padding-bottom:0.5rem;
    color: #5b5b5b;
    

    @media ${mediaquery.mobileM} {
      width: 95px;

      font-size:2.9vw;
  }

    @media ${mediaquery.mobileL} {
      width: auto;
      font-size:2.7vw;
  }
    @media ${mediaquery.tablet} {
      width: 166px;
      font-size:2vw;
  }
  @media ${mediaquery.laptop} {
    width: 186px;
    font-size:1rem;

  }

    border: none;
    outline: none;
    border-radius: 12px;
    :hover {
      background: #e8e8e9;
      color: black;
      border: none;
    }
    :active {
      background: #e8e8e9;
      color: black;
    }
  }
`;
const ResultsContainer = styled(Container)`
  /* background-color: pink; */
  @media ${mediaquery.mobileL} {
    width: 100%;
  }
  @media ${mediaquery.laptop} {
    width: 85%;
  }
`;
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


function ResultFoundComponent({ keyword }) {
  const search_data = useSelector(state => state.search_reducers.search_data)
  console.log("show result for ", keyword);
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
      <Row>
        {/* <Col md={{ span: 2, offset: 3 }} sm={{ span: 2, offset: 2 }} xs={4}>
        <Button variant="secondary">Secondary</Button>
        </Col>
        <Col md={3} xs={4} sm={3}>
        <Button variant="secondary">Secondary</Button>
        </Col>
        <Col md={2} xs={4} sm={3}>
        <Button variant="secondary">Secondary</Button>
        </Col> */}
        <CustomButtonGroup size="lg" className="mb-2">

          <button variant="light">All Search</button>
          <button variant="light">Business Only</button>
          <button variant="light">Drivers Only</button>
        </CustomButtonGroup>
      </Row>
      <ResultsContainer fluid>
        {map(search_data,(resultItem)=> <ResultItemCompany resultItem={resultItem} /> )}

        {/* <ResultItemCompany resultItem="company" />
        <ResultItemDriver resultItem="driver" />
        <ResultItemDriver resultItem="driver" />
        <ResultItemCompany resultItem="company" />
        <ResultItemCompany resultItem="company" />
        <ResultItemDriver resultItem="driver" /> */}
      </ResultsContainer>
    </SearchResultWrapper>
  )
}

export default ResultFoundComponent
