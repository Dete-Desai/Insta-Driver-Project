import React from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import ChatRoomPrivate from '../ChatRoomHome/ChatRoomPrivate';
import ChatRoomPublic from '../ChatRoomHome/ChatRoomPublic';
import CreateVideo from '../CreateRoom/CreateVideo';


const MainTab = () => {
  return (
    <div className="my-5">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={9}>
            <Nav variant="pills" className="flex-row w-100">
              <Nav.Item className="TabNav">
                <Nav.Link style={{ border: '1px solid red !important' }} eventKey="first" className="text-muted tabLink">Public Rooms</Nav.Link>
              </Nav.Item>
              <Nav.Item className="TabNav">
                <Nav.Link style={{ border: '1px solid red !important' }} eventKey="second" className="text-muted tabLink">Private Rooms</Nav.Link>
              </Nav.Item>
              <Nav.Item className="TabNav">
                <Nav.Link style={{ border: '1px solid red !important' }} eventKey="third" className="text-muted tabLink">+ Create Room</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={12}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <ChatRoomPublic />
                <ChatRoomPublic />
                <ChatRoomPublic />
                <ChatRoomPublic />
                <ChatRoomPublic />
                <div className="">
                  <button className="btn viewMore mt-4 font-weight-bold">View More Rooms</button>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <ChatRoomPrivate />
                <ChatRoomPrivate />
                <ChatRoomPrivate />
                <ChatRoomPrivate />
                <ChatRoomPrivate />
              <div className="">
                  <button className="btn viewMore mt-4 font-weight-bold">View More Rooms</button>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <CreateVideo />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default MainTab;