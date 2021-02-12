import { React, useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import styled from "styled-components";
import { mediaquery } from "../../DriverSearch/StaticData/mediaQuery";

const NotificationListContainer = styled(Container)`
  background-color: #f5f9fc;
  /* padding-right:10px; */
  /* padding-left:10px; */
  padding-right: 0px;
  padding-left: 0px;
  padding-top: 1rem;

  .top-buttons {
    display: flex;
    justify-content: center;

    .button {
      background-color: #f5f9fc;
      border: none;
      /* padding: auto; */
      text-align: center;
      text-decoration: none;
      /* margin: 4px 2px; */
      /* margin-right:3px;
  margin-left:3px; */

      cursor: pointer;
      outline: none;
      font-style: normal;

      @media ${mediaquery.mobileS} {
        font-size: 2.7vw;
      }

      @media ${mediaquery.mobileM} {
        font-size: 3vw;
      }

      @media ${mediaquery.tablet} {
        font-size: 0.8rem;
      }
      @media ${mediaquery.laptop} {
        font-size: 0.85rem;
      }
      @media ${mediaquery.laptopL} {
        font-size: 1rem;
      }
    }
    .selected {
      /* border-bottom: 3px solid #FFBB00 ; */
      box-shadow: 0 3px 0px 0px #ffbb00;

      font-weight: 500;
      /* margin-bottom:-3px; */
      color: #4b4747;
    }
    .unselected {
      /* border-top: 3px solid transparent; */
      box-shadow: 0 3px 0px 0px #d6d7d9;

      font-weight: normal;
      color: #797878;
    }
  }

  .notification-title-container {
    /* display:flex; */
    /* flex-direction:column; */
    margin: 0px;
    margin-top: 1rem;

    @media ${mediaquery.mobileL} {
      max-height: 45vh;
    }
    @media ${mediaquery.laptopL} {
      max-height: 62vh;
    }

    overflow-y: auto;
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 145%;
      /* identical to box height, or 22px */
      color: #3b3b3b;
    }
  }
  .notification-title-card {
    padding: 0.25rem;
    border-radius: 0.75rem;

    @media ${mediaquery.mobileM} {
      margin-right: 0.25rem;
      margin-left: 0.25rem;
    }
    @media ${mediaquery.tablet} {
      margin-right: 1.25rem;
      margin-left: 1.25rem;
    }

    padding: 10px;
    margin-top: 1rem;
    margin-bottom: 1rem;

    cursor: pointer;
    :nth-child(odd) {
      background-color: #f6f5f5;
    }
    :nth-child(even) {
      background-color: #eaf6ed;
    }

    :first-child {
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      background-color: #ffbb00;
    }
    h6 {
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 145%;
      margin: 0;
    }
  }
`;
const StyledListGroup = styled(ListGroup)`
  .list-group-item {
    width: 90%;
    margin: auto;
    border-radius: 8px;
    color: black;
    font-weight: normal;
    font-size: 15px;
    line-height: 145%;
    color: #5b5b5b;

    :nth-child(odd) {
      background-color: #f6f5f5;
    }
    :nth-child(even) {
      background-color: #eaf6ed;
    }
  }
  .list-group-item.active {
    background-color: #ffbb00;
    border: none;
    font-style: bold;

    /* or 22px */

    color: #000000;
  }
`;

const NotificationListRender = (props) => {
  const renderedList = props.notificationList.map((notification, i) => {
    return (
      // <Card id={i} onClick={() => { windowSize.width < 768 ? setModalShow(true) : setNotificationShow(true) }}
      //     className=' notification-title-card '><h6 >Welcome! Thanks for creating an account ....{item}</h6></Card>
      <ListGroup.Item
        className="my-3 py-3"
        onClick={() => props.showNotificationDetail(notification)}
        active={notification === props.selectedNotification}
        key={i}
        action
        href={`#link${i + 1}`}
      >
        Welcome to insta driver {notification}
      </ListGroup.Item>
    );
  });
  return renderedList;
};

const NotificationListCol = (props) => {
  const [topButtonSelected, setTopButtonSelected] = useState(1);

  return (
    <NotificationListContainer fluid>
      <div className="top-buttons">
        <button
          onClick={() => setTopButtonSelected(1)}
          className={`button   ${
            topButtonSelected === 1 ? `selected` : `unselected`
          }`}
        >
          All Notifications
        </button>
        <button
          onClick={() => setTopButtonSelected(2)}
          className={`button ${
            topButtonSelected === 2 ? `selected` : `unselected`
          }`}
        >
          Admin & Recommends
        </button>
        <button
          onClick={() => setTopButtonSelected(3)}
          className={`button  ${
            topButtonSelected === 3 ? `selected` : `unselected`
          }`}
        >
          Get Social
        </button>
      </div>

      <div className="notification-title-container card">
        {props.notificationList.length !== 0 ? (
          <>
            <p className="ml-2 mb-0 mt-1 p-0">Past 7 days:</p>
            <StyledListGroup>
              <NotificationListRender
                notificationList={props.notificationList}
                showNotificationDetail={props.showNotificationDetail}
                selectedNotification={props.selectedNotification}
              />
            </StyledListGroup>
          </>
        ) : (
          <h3 className="align-self-center mt-auto mb-auto">
            no notifications
          </h3>
        )}
      </div>
    </NotificationListContainer>
  );
};

export default NotificationListCol;
