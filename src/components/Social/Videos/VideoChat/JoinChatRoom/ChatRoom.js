import React from 'react';
import { useHistory } from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap';
import silentIcon from '../../../../../dist/icons/silent.svg';
import MuteMic from '../../../../../dist/icons/MuteMic.svg';
import videoChatIcon from '../../../../../dist/icons/videoChatIcon.svg';
import zoomScreen from '../../../../../dist/icons/zoomScreen.svg';
import VideoPlayer from './VideoPlayer';
import ChatHistory from '../ChatHistory/ChatHistory';
import CommentsData from '../Comments/CommentsData';
import Comments from '../Comments/Comments';
import arrowIcon from '../../../../../dist/icons/arrowIcon.svg';
import sendIcon from '../../../../../dist/icons/sendIcon.svg';



const ChatRoom = () => {
  // const [zoom, setZoom] = useState(false)
  const history = useHistory();

  const directToChatHome = () => {
    let route = `group-video-chat`;
    history.push(route);
  };
  return (
    <Container fluid className="my-5 pr-0">
      <Row>
        <Col sm={12} className="p-2">
          <Row className="d-flex ml-3">
            <Col xs={12} sm={6} md={6} lg={4} ><h3 className="text-muted">Friends From Westlands</h3></Col>
            <Col xs={12} sm={6} md={6} lg={4} ><h3 className="">Room ID: <span className="text-muted">2365DA</span> </h3></Col>
          </Row>
          <Row className="d-flex mr-1 ml-3">
            <Col xs={12} sm={12} md={6} lg={7} className="pr-0">
              <Container fluid>
                {
                  <div
                  // className={zoom ? "video-contain" : ""}
                  >
                    <Row style={{ background: '#C4C4C4', }}>
                      <Col style={{ width: '100%', height: '500px' }} sm={12}>
                        <Row>
                          <Col sm={12} className="mt-2">
                            <Row className="pr-2">
                              <VideoPlayer />
                              <VideoPlayer />
                              <VideoPlayer />
                            </Row>
                          </Col>
                          <Col sm={12} className="mt-2">
                            <Row className="pr-2">
                              <VideoPlayer />
                              <VideoPlayer />
                              <VideoPlayer />
                            </Row>
                          </Col>
                          <Col sm={12} className="mt-2">
                            <Row className="pr-2">
                              <VideoPlayer />
                              <VideoPlayer />
                              <VideoPlayer />
                            </Row>
                          </Col>
                          <Col sm={12} className="mt-2">
                            <Row className="pr-2">
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
                            {/* <span onClick={() => setZoom(zoom ? false : true)} className="btn iconBtn"><img className="mr-3" src={zoomScreen} alt="" /></span> */}
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <div className="mt-4 d-flex align-items-center ">
                        <span>
                          <button
                            onClick={directToChatHome}
                            className="btn videoChatBtn exitBtn font-weight-bold"
                            style={{ background: '#F71414' }}
                          >
                            Exit Group
                  </button>
                        </span>
                        <span className="joinStatus ml-4">You joined this room</span>
                      </div>
                    </Row>
                  </div>
                }
                <Row className="mt-5 chatRoomDetails d-flex align-items-center p-4">
                  <ChatHistory />
                </Row>
              </Container>
            </Col>
            {/* <Col xs={12} sm={12} md={6} lg={7} className="pr-0">
              <Container fluid>
                <Row className="mt-5 chatRoomDetails d-flex align-items-center p-4">
                  <ChatHistory />
                </Row>
              </Container>
            </Col> */}
            <Col xs={12} sm={12} md={6} lg={5} className="">
              <Container fluid className="p-0">
                <div style={{ border: '1px solid #FFBB00' }}>
                  <div style={{ background: '#C4C4C4', height: "50px" }} className="w-100 pl-5 py-2 mr-0">
                    <h2 className="font-weight-normal">Comments</h2>
                  </div>
                  <Row className="pt-5 pl-5 pr-5 overflow-auto" style={{ maxHeight: "780px" }}>
                    {
                      CommentsData.map(comment => <Comments comment={comment} key={comment.id} />)
                    }
                  </Row>
                  <div className="text-center mb-1">
                    <span className="btn iconBtn"><img src={arrowIcon} alt="" /></span>
                  </div>
                </div>
                <div
                  className="bg-muted p-4 mt-3"
                  style={{ background: 'rgba(196, 196, 196, 0.3)' }}
                >
                  <form className="bg-white d-flex justify-content-between">
                    <textarea
                      style={{ height: '120px' }}
                      className="form-control input__style w-100 pt-3 pl-3 border-0"
                      placeholder="Type your comment "
                      name="comment"
                      id="comment"
                      maxlength="300"
                    >
                    </textarea>
                    <div>
                      <button className="btn iconBtn mt-3" type="submit"><img className="" src={sendIcon} alt="" /></button>
                      <span className="text-gray mt-1 ml-2">0/300</span>
                    </div>
                  </form>
                </div>
              </Container>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ChatRoom;