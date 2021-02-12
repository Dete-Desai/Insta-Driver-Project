import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import { mediaquery } from '../../DriverSearch/StaticData/mediaQuery'

const StyledSideBar = styled(Container)`
background-color:#595959;
padding-top: 2rem;
padding-bottom:1rem;
min-width:max-content;
margin-left:0px;
/* padding-right: 0px;
padding-left: 0px; */
@media ${mediaquery.mobileS} {
      display:none;
  }
@media ${mediaquery.laptop} {
      display:flex;
      flex-direction:column;
  }


.row{
p{
   color:white;
   cursor: pointer;

   @media ${mediaquery.mobileS} {
    font-size:0.8rem;
  }
  @media ${mediaquery.tablet} {
    font-size:0.9rem;

  }
  @media ${mediaquery.laptopL} {
    font-size:1rem;

  }
}

svg{
    fill:white;
}
span{
    font-style: normal;
    font-weight: normal;
    line-height: 145%;
    margin-right:2px;
    margin-top:0.75rem;
    cursor: pointer;

@media ${mediaquery.mobileS} {
    font-size:3vw;
    margin-left:0rem;

  }

@media ${mediaquery.mobileM} {
    font-size:2.8vw;
    margin-left:0rem;

  }
@media ${mediaquery.tablet} {
    font-size: 15px;
    margin-left:1rem;
  }
/* identical to box height, or 22px */

color: #FFFFFF;
i{
margin-left:10px;
font-style:normal;
}

}
}


`

function SideBarContainer() {
  return (
    <StyledSideBar />
  )
}

export default SideBarContainer
