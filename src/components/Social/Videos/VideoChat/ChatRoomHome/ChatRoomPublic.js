import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import ChatHistory from '../ChatHistory/ChatHistory';
import profile1 from '../../../../../dist/images/profile1.svg';
import profile2 from '../../../../../dist/images/profile2.svg';
import profile3 from '../../../../../dist/images/profile3.svg';
import profile4 from '../../../../../dist/images/profile4.svg';
import profile5 from '../../../../../dist/images/profile5.svg';
import publicIcon from '../../../../../dist/icons/Public.svg';
// import profile6 from '../../../../../dist/images/profile6.JPG';
import { ProfileMedium, ProfileLarge, ProfileSmall } from './ProfileContent';


const ChatRoomPublic = () => {
  const history = useHistory();

  const directToChatRoom = () => {
    let route = `join-chat-room`;
    history.push(route);
  };

  return (
    <div className="my-5 pt-5">
      <Row>
        <Col sm={12}>
          <Row className="d-flex">
            <Col xs={12} sm={6} md={6} lg={4} ><h3 className="text-muted">Friends From Westlands</h3></Col>
            <Col xs={12} sm={6} md={6} lg={4} ><h3 className="">Room ID: <span className="text-muted">2365DA</span> </h3></Col>
          </Row>
          <Row className="d-flex">
            <Container fluid>
              <Col sm={11} >
                <Row>
                  <Col style={{ width: '100%', background: '#C4C4C4', height: '450px' }} xs={12} sm={12} md={6} lg={7} className="tested">
                    <Row>
                      <Col style={{ width: '100%', height: '400px' }} sm={12}>
                        <Row className="px-4">
                          <Col sm={12} className="mt-4">
                            <Row>
                              <ProfileMedium profile={profile1} />
                              <ProfileMedium profile={profile2} />
                              <ProfileMedium profile={profile3} />
                            </Row>
                          </Col>
                          <Col sm={12} className="mt-2">
                            <Row>
                              <Col style={{ width: '250px', height: '250px', }} className="pr-1 pl-0" xs={4} sm={4} md={4} lg={4}>
                                <Row>
                                  <Col sm={12} className="">
                                    <Row>
                                      <ProfileSmall profile={profile4} />
                                      <ProfileSmall profile={profile4} />
                                    </Row>
                                  </Col>
                                  <Col sm={12} className="mt-2">
                                    <Row>
                                      <ProfileSmall profile={profile4} />
                                      <ProfileSmall profile={profile4} />
                                    </Row>
                                  </Col>
                                  <Col sm={12} className="mt-2">
                                    <Row>
                                      <ProfileSmall profile={profile4} />
                                      <ProfileSmall profile={profile4} />
                                    </Row>
                                  </Col>
                                </Row>
                              </Col>
                              <ProfileLarge profile={profile5} />
                              <ProfileMedium profile={profile4} />
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={5} className="chatDetails d-flex align-items-center">
                    <ChatHistory status="Public" statusIcon={publicIcon}/>
                  </Col>
                </Row>
              </Col>
            </Container>
          </Row>
          <div className="">
            <button onClick={directToChatRoom} className="btn videoChatBtn bg-orange mt-4 font-weight-bold">Join Room</button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ChatRoomPublic;