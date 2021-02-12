import { React, useState } from 'react'
import styled from 'styled-components'
import { Row, Col, Container } from 'react-bootstrap'
import { mediaquery } from '../DriverSearch/StaticData/mediaQuery'
import useWindowSize from './widgets/windowSizeHook'
import NotificationListCol from './NotificationListCol'
import NotificationModal from './widgets/NotificationModal'
import NotificationDetailCol from './NotificationDetailCol'
import EmployerSideBarFunction from '../Layout/MainSideBar/Employer/EmployerSideBarFunction'

const StyledMainContainer = styled(Container)`
background-color:#f5f9fc;

@media ${mediaquery.mobileM} {
    margin-bottom:0rem;
  }
@media ${mediaquery.tablet} {
    margin-bottom:8rem;
  }


.card > .list-group{
    border-top:none;
}

`

const StyledColSideBar = styled(Col)`
background-color:#595959;
@media ${mediaquery.mobileS} {
  display:none;
}
@media ${mediaquery.laptop} {
  display:flex;
  flex-direction:column;
}

`


function NotificationsComponent() {
    const windowSize = useWindowSize();
    const [modalShow, setModalShow] = useState(false);
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

    const [notificationShow, setNotificationShow] = useState(list.length !== 0);
    const [selectedNotification, setSelectedNotification] = useState(list[0])

    const showNotificationDetail = (notification) => {
        if (windowSize.width < 768) {
            setModalShow(true)
            setSelectedNotification(notification)

        }
        else {
            setNotificationShow(true)
            setSelectedNotification(notification)

        }
    }


    return (
        <StyledMainContainer fluid className="mx-0 p-0 ">
            <Row>
                <Col xl={2} lg={0} md={0} xs={0}>
                    <EmployerSideBarFunction />
                </Col>
                <Col xl={4} lg={6} md={6} xs={12} className="mt-5 pl-5">
                    <NotificationListCol notificationList={list} showNotificationDetail={showNotificationDetail} selectedNotification={selectedNotification} />
                </Col>
                <Col xl={6} lg={6} md={6} xs={0} className="mt-5 ">
                    {(notificationShow && list.length !== 0) &&

                        <NotificationDetailCol setNotificationShow={setNotificationShow} selectedNotification={selectedNotification} />
                    }
                </Col>
            </Row>
            <NotificationModal
                show={modalShow}
                selectedNotification={selectedNotification}
                title="Welcome!"
                message="Thanks for creating an account with Instadriver"
                onHide={() => setModalShow(false)}
            />
        </StyledMainContainer >
    )
}

export default NotificationsComponent
