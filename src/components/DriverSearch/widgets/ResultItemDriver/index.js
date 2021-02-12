import React from "react";
import { Row, Col, Card, Image } from "react-bootstrap";
import { ReactComponent as PostsIco } from "../../../../dist/icons/posts_svg.svg";
import { ReactComponent as ConnectionsIco } from "../../../../dist/icons/connection_svg.svg";
import { ReactComponent as FollowersIco } from "../../../../dist/icons/followers_svg.svg";
import { ReactComponent as FolloweringIco } from "../../../../dist/icons/following_svg.svg";
import { ReactComponent as GroupsIco } from "../../../../dist/icons/groups_joined_svg.svg";
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

  @media ${mediaquery.mobileM} {
    flex-direction: column;
  }
  @media ${mediaquery.laptop} {
    flex-direction: row;
  }
  /* margin-left:3rem; */
  margin-left: 1rem;
  i {
    color: green;
    line-height: 0;
  }
  p {
    font-style: normal;
    font-weight: 500;
    margin-left: 1rem;

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

const StyledImageCol = styled(Col)`
`;



const StyledImgContainer = styled.div`

  background-color:#ffbb00;
  padding-bottom: 1.2rem;
  padding-top: 1.2rem;
  border-radius: 5px 5px 0px 0px;
  display:flex;
  justify-content:center;
`;



const CustomButton = styled.button`

    margin-left: auto;
    margin-right: auto;
    padding-top:0.5rem;
    padding-bottom:0.5rem;
    color: #5b5b5b;
    margin-bottom:1rem;
    outline: none;
    border: none;
    outline: none;
    background: #E4E6EB;
    box-shadow: none;
    width: 87%;
border-radius: 5px;
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
    
    :focus {outline:none;}
::-moz-focus-inner {border:0;}

`


const StyledImg = styled(Image)`
  /* width: 50%; */
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 189.93px;
height: 189.93px;
  position:center;

`;
const CardImageText = styled.h4`
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 136%;
/* or 19px */
color: #5B5B5B;
text-align:center;

`;
const StyledImgAvatar = styled(Image)`
  width: 40.5px;
  height: 40.5px;
  margin-left: 1.5vw;
  border-radius: 10rem;
`;

const StyledCard = styled(Card)`
  /* padding: 1rem; */
  @media ${mediaquery.mobileM} {
    width: 100%;
  }
  @media ${mediaquery.laptopL} {
    width: 80%;
  }
padding:1rem;
  margin: auto;
  .row {
    /* margin-top:0.5rem; */
  }

  .driverText {
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 180%;
    text-align:center;
    /* identical to box height, or 27px */

    color: rgba(0, 0, 0, 0.5);
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

const StyledImgCard = styled(Card)`
@media ${mediaquery.mobileM} {
    width: 100%;
  }
  @media ${mediaquery.tablet} {
    width:88%;
  }


`;

const StyledP = styled.p`
  color: #969393;
  margin-left: 4px;
`;
const StyledNumber = styled.h3`
font-style: normal;
font-weight: 500;
/* text-align:left; */
font-size: 18px;
margin-left:8px;
line-height: 136%;
color: #3B3B3B;


padding: 0;
margin-top: 0.25rem;


;
`;

const StyledHeader = styled(Row)`
  background-color: #e4e6eb;
  margin: 0;
  padding: 0;
  padding-top: 1rem;
  padding-bottom: 1rem;
  justify-content:center;
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 136%;
    /* or 24px */
    color: #3b3b3b;
  }
  i {
    color: #5b5b5b;
  }
`;


const ComponentRow = styled(Row)`
margin-top:3rem;
`


function ResultItemDriver({ resultItem }) {
  return (
    <div className="my-5">
      <div className="d-flex justify-content-left m-0 p-0  ">
        <StyledImgAvatar className="my-3 " src={`https://picsum.photos/100`} />
        <StyledH3 className="my-4">Uber . Driver</StyledH3>

      </div>
      <ComponentRow className="mt-1 pt-0">
        <Col md={4} xs={12}>
          <StyledImgCard className=" mx-auto">
            <StyledImgContainer style={{ background: "#ffbb00" }}>
              <StyledImg roundedCircle={true} fluid src={`https://i.pravatar.cc/300`} />

            </StyledImgContainer>
            <CardImageText className="mx-1 my-3">We ignite opportunity by setting the world in motion.</CardImageText>
            <CustomButton>Visit Drivers’ Profile Page </CustomButton>
          </StyledImgCard>
        </Col>

        <Col md={4} xs={12}>
          <StyledCard style={{ padding: 0 }}>
            <StyledHeader className="mb-3">
              <i className="fas fa-phone-square my-auto fa-2x fa-flip-horizontal"></i>
              <StyledNumber>+2547442233</StyledNumber>
            </StyledHeader>

            <p className="driverText">Unavailable for hire</p>
            <hr style={{ marginBottom: "0.25rem", marginTop: "0rem" }} className="w-50 mx-auto" />
            <p className="driverText">5 yrs license</p>
            <p className="driverText">5 yrs driving experience</p>
            <p className="driverText">Speaks English & Swahili</p>
          </StyledCard>
        </Col>
        <Col md={4} xs={12}>
          <StyledCard>
            <StyleCardRow>
              <Col xs={10}>
                <Row className="ml-1 my-1">
                  <ConnectionsIco className="my-auto" />
                  <StyledP className="mb-0 p-0">Connections</StyledP>
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
                  <FollowersIco className="my-auto" />
                  <StyledP className="mb-0 p-0">Followers </StyledP>
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
                  <FolloweringIco className="my-auto" />
                  <StyledP className="mb-0 p-0">Following </StyledP>
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
                  <GroupsIco className="my-auto" />
                  <StyledP className="mb-0 p-0">Groups Joined </StyledP>
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
          </StyledCard>
        </Col>
      </ComponentRow>
    </div>
  );
}

export default ResultItemDriver;
