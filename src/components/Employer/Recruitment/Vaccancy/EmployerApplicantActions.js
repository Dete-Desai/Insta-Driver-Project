import React, { useState } from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;

const TapButtonsWrapper = styled.button`
  max-width: 200px;
  min-width: 140px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #d4d4d4;
  font-weight: bold;

  &:hover {
    ${(props) =>
      !props.applied &&
      css`
        background: #4caf50 !important;
      `}
    color: #fff;
  }

  ${(props) =>
    props.pos === props.clicked &&
    css`
      background: #4caf50 !important;
      color: white;
    `};

  ${(props) =>
    props.applied &&
    css`
      background: orange !important;
      color: white;
    `};
`;

const TapButtonDropDownWrapepr = styled.span`
  position: relative;
  height: 50px;
`;

const DropDownsWrapper = styled.span`
  position: absolute;
  width: 400px;
  top: 110%;
  right: 0;
  height: 120px;
  background-color: white;
  z-index: 200;
  border: 1px solid #d4d4d4;

  > ul {
    list-style: none;
    padding: 0;
  }

  > ul > li {
    cursor: pointer;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    margin: auto;
  }

  > ul > li > h6 {
    margin: 0;
  }

  > ul > li {
    &:hover {
      background-color: orange;

      > h6 {
        color: #fff;
      }
    }
  }
`;

function EmployerApplicantActions(props) {
  const [showTapButton, setShowTapButton] = useState(true);
  const [clickedButton, setClickedButton] = useState(0);

  const handleClick = (e, idx) => {
    setClickedButton(idx);
  };

  const onTapShortlist = () => {
    setShowTapButton(!showTapButton);
  };

  console.log(clickedButton);
  return (
    <Wrapper>
      <div className="row">
        <div className="col-md-6">
          <button className="yellowbutton yellowbutton1">
            <i className="fa fa-arrow-left"></i> &nbsp; Back To Your Adds
          </button>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-2">
          <button className="driver-profile-button driver-profile-button1 driver-profile-button-1">
            Driver Card 659XG
          </button>
        </div>
        <div className="col-md-2">
          <button className="driver-profile-button driver-profile-button2 driver-profile-button-2">
            View Card
          </button>
        </div>
        {showTapButton ? (
          <React.Fragment>
            {/* <div className="col-md-4" /> */}

            <div className="col-md-4" />
            <div className="col-md-3">
              <button
                onClick={onTapShortlist}
                className="tap-to-shortlist tap-to-shortlist1 tap-to-shortlist-1"
              >
                Tap To Shortlist
              </button>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="col-md-2" />
            <div className="col-md-6">
              <div className="d-flex justify-content-between">
                <TapButtonsWrapper
                  onClick={(e) => handleClick(e, "0")}
                  className="btn"
                  applied={true}
                >
                  Applied
                </TapButtonsWrapper>

                <TapButtonDropDownWrapepr>
                  <TapButtonsWrapper
                    pos="1"
                    onClick={(e) => handleClick(e, "1")}
                    clicked={clickedButton}
                    className="btn"
                  >
                    Reject
                  </TapButtonsWrapper>
                  {clickedButton === "1" ? (
                    <DropDownsWrapper>
                      <ul>
                        <li>
                          <h6>Move to Candidates Pool</h6>
                        </li>
                        <li>
                          <h6>Move to Shortlisted</h6>
                        </li>
                        <li>
                          <h6>Hire</h6>
                        </li>
                      </ul>
                    </DropDownsWrapper>
                  ) : null}
                </TapButtonDropDownWrapepr>

                <TapButtonDropDownWrapepr>
                  <TapButtonsWrapper
                    pos="2"
                    onClick={(e) => handleClick(e, "2")}
                    clicked={clickedButton}
                    className="btn"
                  >
                    Shortlist
                  </TapButtonsWrapper>
                  {clickedButton === "2" ? (
                    <DropDownsWrapper>
                      <ul>
                        <li>
                          <h6>Hire</h6>
                        </li>
                        <li>
                          <h6>Move to Rejected</h6>
                        </li>
                        <li>
                          <h6>Move to Candidates Pool</h6>
                        </li>
                      </ul>
                    </DropDownsWrapper>
                  ) : null}
                </TapButtonDropDownWrapepr>

                <TapButtonDropDownWrapepr>
                  <TapButtonsWrapper
                    pos="3"
                    onClick={(e) => handleClick(e, "3")}
                    clicked={clickedButton}
                    className="btn"
                  >
                    Hired
                  </TapButtonsWrapper>
                  {clickedButton === "3" ? (
                    <DropDownsWrapper>
                      <ul>
                        <li>
                          <h6>Unhire and Move to Shortlisted</h6>
                        </li>
                        <li>
                          <h6>Unhire and Move to Rejected</h6>
                        </li>
                        <li>
                          <h6>Unhire and Move to Candidates Pool</h6>
                        </li>
                      </ul>
                    </DropDownsWrapper>
                  ) : null}
                </TapButtonDropDownWrapepr>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    </Wrapper>
  );
}

export default EmployerApplicantActions;
