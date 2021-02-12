import React from 'react'
import styled from 'styled-components'
import { Card, Container, Image, Button, Row, Col } from 'react-bootstrap'
import { mediaquery } from '../../DriverSearch/StaticData/mediaQuery'
import { ReactComponent as CloseIco } from '../../../dist/icons/close_svg.svg'

const ViewNotificationContainer = styled(Card)`
/* background-color:green; */
margin-top:3.75rem;
border-radius:5px;
margin-right:10px;
max-height:62vh;

overflow-y:auto;

@media ${mediaquery.mobileS} {
      display:none;
  }
  @media ${mediaquery.tablet} {
      display:flex;
      flex-direction:column;
  }
  .btn-light{
      background-color:#edf5fa;
      margin:auto;
  }

  .notification-img-container{
    /* style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }} */
    display:flex;
    flex-direction:column;
    align-items:center;
justify-content:center;
    img{
        width:auto;
        height:auto;
    }
    p{
        margin:0;
        /* margin-top:5px; */
        padding:0;
        text-align:center;
    }
    .user-name{
        color:#ffbb00;
    }
}

`


const NotificationDetailCol = (props) => {
    return (<ViewNotificationContainer>

        <Container className="pb-5">
            <div className="d-flex justify-content-end mt-3">
                <CloseIco onClick={() => { props.setNotificationShow(false) }} style={{ cursor: "pointer" }} />
            </div>
            <Row className="mt-4">

                <Col md={3}>
                    <div className="notification-img-container">
                        <Image className="my-auto" src={`https://randomuser.me/api/portraits/men/${props.selectedNotification}.jpg`} roundedCircle fluid />
                        <p>John Jackson</p>
                        <p className="user-name">@John</p>
                    </div>
                </Col>
                <Col md={9}>
                    <h3>Welcome to insta driver {props.selectedNotification} </h3>
                    <p >Welcome! Thanks for creating an account with InstadriverWelcome!
                    Thanks for creating an account with Instadriver"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do 1sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    <div className="d-flex justify-content-center">
                        <Button className="px-5 py-2" variant="light">View job post</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </ViewNotificationContainer>)
}


export default NotificationDetailCol