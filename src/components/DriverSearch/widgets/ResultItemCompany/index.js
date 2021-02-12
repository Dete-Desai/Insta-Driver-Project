import React from "react";
import { Row, Col, Card, Image } from "react-bootstrap";
import { ReactComponent as JobsIco } from "../../../../dist/icons/jobs_svg.svg";
import { ReactComponent as PostsIco } from "../../../../dist/icons/posts_svg.svg";
import { ReactComponent as ArticleIco } from "../../../../dist/icons/article_svg.svg";
import { ReactComponent as PhoneIco } from "../../../../dist/icons/phone_svg.svg";
import { ReactComponent as EmailIco } from "../../../../dist/icons/email_svg.svg";

import styled from "styled-components";
import { mediaquery } from "../../StaticData/mediaQuery";

const StyledH3 = styled.h3`
  font-size: 18px;
  line-height: 136%;
  color: #5377f8;
  text-align: left;
  margin-left:1rem;
`;
const StyledIconText = styled.span`
  display: flex;

  
  /* margin-left:3rem; */
  margin-left: 1rem;
  i {
    color: #914a9c;
    line-height: 0;
    padding-top: 1rem;
  }
  p {
    font-style: normal;
    font-weight: 500;
    margin-left: 1rem;
    padding-top: 1rem;
    @media ${mediaquery.mobileM} {
      font-size: 18px;
    }
    @media ${mediaquery.laptop} {
      font-size: 17px;
    }

    /* or 24px */
    color: #ffbb00;
  }
`;

const StyledImg = styled(Image)`
  /* width: 50%; */
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
const StyledImgCard = styled(Card)`
  @media ${mediaquery.mobileM} {
    width: 100%;
  }
  @media ${mediaquery.tablet} {
    width: 88%;
  }
`;
const StyledImgAvatar = styled(Image)`
  width: 40.5px;
  height: 40.5px;
  margin-left: 1.5vw;
  border-radius: 10rem;
`;
const CardImageText = styled.h4`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 136%;
  /* or 19px */
  color: #5b5b5b;
text-align:center;

`;

const StyledCard = styled(Card)`
  padding: 1rem;

  @media ${mediaquery.mobileM} {
    width: 100%;
  }
  @media ${mediaquery.laptopL} {
    width: 80%;
  }

  margin: auto;
  .row {
    /* margin-top:0.5rem; */
  }
`;

const StyledCircle = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  color: #fff;
  text-align: center;
  background: #575353;
  font-size: 12.97px;
  p {
    margin: 0;
    padding: 0;
    padding-top: 2px;
  }
`;

const StyleCardRow = styled(Row)`
  margin-top: 1rem;
`;

const StyledP = styled.p`
  color: #969393;
  margin-left: 4px;
`;

const CustomButton = styled.button`
  margin-left: auto;
  margin-right: auto;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: #5b5b5b;
  margin-bottom: 1rem;
  outline: none;
  border: none;
  outline: none;
  background: #e4e6eb;
  box-shadow: none;
  border-radius: 5px;
  width: 87%;

  :hover {
    background: #575353;
    color: white;
    border: none;
    outline: none;
    box-shadow: none;
  }
  :active {
    background: #575353;
    color: white;
    outline: none;
  }

  :focus {
    outline: none;
  }
  ::-moz-focus-inner {
    border: 0;
  }
`;
const ComponentRow = styled(Row)`
  margin-top: 3rem;
`;

function ResultItemCompany({ resultItem }) {
  return (
    <div className="my-5">
      <div className="d-flex justify-content-left m-0 p-0  ">
        <StyledImgAvatar className="my-3 " src={resultItem.avatar || `https://picsum.photos/150`} />
        <StyledH3 className="my-4">{resultItem.businessName} . Business</StyledH3>

      </div>
      <ComponentRow className="mt-1 pt-0">
        {/* <Col xs={1}>
        <StyledImgAvatar className="my-3" src={`https://picsum.photos/100`} />
      </Col>
      <Col xs={11}>
        <StyledH3 className="my-4">Uber . Business</StyledH3>
      </Col> */}

        <Col md={4} xs={12}>
          <StyledImgCard className=" mx-auto">
            <StyledImg fluid src={resultItem.avatar || `https://picsum.photos/190`} />
            <CardImageText className="mx-1 my-3">
              {resultItem.tagLine || `business tagline`}
            </CardImageText>
            <CustomButton>Visit {resultItem.businessName} Business Page </CustomButton>
          </StyledImgCard>
        </Col>
        <Col md={4} xs={12}>
          <StyledCard>
            <StyledIconText className="my-3">
              <i className="fas fa-globe my-auto fa-2x"></i>
              <p className="my-auto">{resultItem.website || `No website added`}</p>
            </StyledIconText>
            <StyledIconText className="my-3">
              <i className="my-auto ">
                <PhoneIco />
              </i>
              <p className="my-auto">{resultItem.phoneNumber || `No contact added`}</p>
            </StyledIconText>
            <StyledIconText className="my-3">
              <i className="my-auto">
                <EmailIco />
              </i>
              <p className="my-auto">{resultItem.email || `No email added`} </p>
            </StyledIconText>
          </StyledCard>
        </Col>
        <Col md={4} xs={12}>
          <StyledCard>
            <StyleCardRow>
              <Col xs={10}>
                <Row className="ml-1 my-1">
                  <JobsIco className="my-auto" />
                  <StyledP className="mb-0 p-0">Jobs on Instadriver</StyledP>
                </Row>
              </Col>
              <Col xs={2}>
                <StyledCircle>
                  <p>12</p>
                </StyledCircle>
              </Col>
            </StyleCardRow>
            <StyleCardRow>
              <Col xs={10}>
                <Row className="ml-1 my-1">
                  <PostsIco className="my-auto" />
                  <StyledP className="mb-0 p-0">Posts </StyledP>
                </Row>
              </Col>
              <Col xs={2}>
                <StyledCircle>
                  <p>12</p>
                </StyledCircle>
              </Col>
            </StyleCardRow>
            <StyleCardRow>
              <Col xs={10}>
                <Row className="ml-1 my-1">
                  <ArticleIco className="my-auto" />
                  <StyledP className="mb-0 p-0">Articles </StyledP>
                </Row>
              </Col>
              <Col xs={2}>
                <StyledCircle>
                  <p>12</p>
                </StyledCircle>
              </Col>
            </StyleCardRow>
          </StyledCard>
        </Col>
      </ComponentRow>
    </div>
  );
}

export default ResultItemCompany;
