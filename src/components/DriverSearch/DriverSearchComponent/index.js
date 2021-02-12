import React from 'react'
import SearchBox from "../widgets/SearchBox"
import styled from "styled-components";
import { Container } from 'react-bootstrap'
import { mediaquery } from "../StaticData/mediaQuery";



const SearchPageWrapper = styled(Container)`
  @media ${mediaquery.tablet} {
  }
  @media ${mediaquery.laptop} {
  }
  margin-top:15vh;
  margin-bottom:25vh;
`;

const StyledH2 = styled.h2`
  font-size: 21px;
  font-weight: 500;
  text-align: center;
  color: #3b3b3b;
`;
const StyledP = styled.h2`
  font-weight: normal;
  font-size: 15px;
  line-height: 145.9%;
  /* or 22px */
  text-align: center;
  color: #5b5b5b;


  @media ${mediaquery.mobileL} {
    width:100%;
  }

  @media ${mediaquery.laptop} {
    width:50%;
  }

`;


function DriverSearchComponent() {
  return (
    <SearchPageWrapper>
      <SearchBox />
      <StyledH2 className="mt-5">
        A directory exclusive for worlds’ transport businesses and for mobility
        players.{" "}
      </StyledH2>
      <StyledP className="mt-4 container">
        Get the contact info, locations, business pages, job posts, news, and
        posts for the companies and businesses in mobility sector. Also, easily
        search for specific drivers and other mobility players.
      </StyledP>
    </SearchPageWrapper>
  )
}

export default DriverSearchComponent
