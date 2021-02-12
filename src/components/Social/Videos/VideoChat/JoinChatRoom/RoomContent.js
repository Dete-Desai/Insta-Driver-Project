import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import publicIcon from '../../../../../dist/icons/Public.svg';
import silentIcon from '../../../../../dist/icons/silent.svg';
import MuteMic from '../../../../../dist/icons/MuteMic.svg';
import videoChatIcon from '../../../../../dist/icons/videoChatIcon.svg';
import zoomScreen from '../../../../../dist/icons/zoomScreen.svg';
import { useHistory } from "react-router-dom";
import VideoPlayer from './VideoPlayer';


const RoomContent = () => {
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
                        <Row>
                          <Col sm={12} className="mt-2">
                            <Row>
                              <VideoPlayer />
                              <VideoPlayer />
                              <VideoPlayer />
                            </Row>
                          </Col>
                          <Col sm={12} className="mt-2">
                            <Row>
                              <VideoPlayer />
                              <VideoPlayer />
                              <VideoPlayer />
                            </Row>
                          </Col>
                          <Col sm={12} className="mt-2">
                            <Row>
                              <VideoPlayer />
                              <VideoPlayer />
                              <VideoPlayer />
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                      <Col sm={12} className="p-0">
                        <div className="chatController d-flex justify-content-between align-items-center">
                          <div className="d-flex justify-content-between align-items-center ml-3">
                            <span className="btn iconBtn"><img className="mr-3" src={videoChatIcon} alt="" /></span>
                            <span className="btn iconBtn"><img className="mr-3" src={MuteMic} alt="" /></span>
                            <span style={{ marginTop: '-8px' }} className="btn iconBtn"><img className="mr-3" src={silentIcon} alt="" /></span>
                          </div>
                          <div className="chatFooter__right ">
                            <span className="btn iconBtn"><img className="mr-3" src={zoomScreen} alt="" /></span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={5} className="chatDetails d-flex align-items-center">
                    <div className="chatDetailStyle">
                      <p className="text-gray font-24 mb-0 pb-2">Started: <span className="font-weight-bold">20 min ago</span></p>
                      <p className="text-gray font-24 mb-0 pb-2">Room Ends: <span className="font-weight-bold">Unspecified</span></p>
                      <p className="text-gray font-24 mb-0 pb-2">Room Members:  <span className="font-weight-bold">20</span></p>
                      <p className="text-gray font-24 mb-0 pb-2">
                        Room Status:
                      <span className="font-weight-bold"> Public</span>
                        <span className="ml-3"><img src={publicIcon} alt="" /></span>
                      </p>
                      <div className="mb-2">
                        <span className="text-gray font-24">Participants & Their Locations:</span> <br />
                        <span className="text-gray font-24 font-weight-bold"> Westlands, South C,  <span className="text-orange">4 drivers</span> </span> <br />
                        <span className="text-gray font-24 mb-0 pb-2 font-weight-bold"> Nairobi West, Roadside, <span className="text-orange">3 drivers</span></span>
                      </div>
                      <small style={{ fontSize: "15px" }} className="text-orange">View More Room Participants & Their Locations</small>
                      <p className="text-gray font-24 mb-0 pb-2"> Room Creator:  <span className="text-orange font-weight-bold">@sakll</span></p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Container>
          </Row>
          <div className="">
            <button onClick={directToChatRoom} className="btn videoChatBtn mt-4 font-weight-bold">Join Room</button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RoomContent;