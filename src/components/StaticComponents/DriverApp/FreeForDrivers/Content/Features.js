import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { ReactComponent as ProfileIcon } from '../../../../../dist/icons/profile-svg.svg';
import { ReactComponent as VideoIcon } from '../../../../../dist/icons/video_svg.svg';
import { ReactComponent as LivestreamIcon } from '../../../../../dist/icons/live_svg.svg';
import { ReactComponent as GroupIcon } from '../../../../../dist/icons/group_svg.svg';
import { ReactComponent as GameIcon } from '../../../../../dist/icons/game_svg.svg';

const Features = () => {
  return (
    <section className="py-5 px-4">
      <Row className="">
        <Col xl={12} className="m-auto">
          <Row className="my-5">
            <Col lg={6} md={8} className="m-auto">
              <h1
                style={{ fontSize: "39px", fontFamily: "Rubik" }}
                className="text-white text-center"
              >
                We are making it possible for drivers to use all these amazing features for free.
                </h1>
            </Col>
          </Row>
          <Row className="m-auto py-5">
            <Col lg={12} className="m-auto">

                <Row className="m-auto d-flex justify-content-between">
                  <Col xl={2} md={3} xs={4} className="">
                    <div className="d-flex align-items-center flex-column mb-4">
                      <ProfileIcon style={{ marginBottom: '-15px', width: "55px", height: "55px", }} fill="gray" /> <br />
                      <div style={{fontSize:"20px", color:'white'}} className="py-3 static_menu">Professional Profile</div>
                    </div>
                  </Col>
                  <Col xl={2} md={3} xs={4} className="">
                    <div className="d-flex align-items-center flex-column mb-4">
                      <GroupIcon style={{ marginBottom: '-15px', width: "55px", height: "55px" }} fill="gray" /> <br />
                      <div style={{fontSize:"20px", color:'white'}} className="py-3 static_menu">Instadriver Groups</div>
                    </div>
                  </Col>
                  <Col xl={2} md={3} xs={4} className="px-0">
                    <div className="d-flex align-items-center flex-column mb-4">
                      <VideoIcon style={{ marginBottom: '-15px', width: "55px", height: "55px" }} fill="gray" /> <br />
                      <div style={{fontSize:"20px", color:'white'}} className="py-3 static_menu">Group Video Call</div>
                    </div>
                  </Col>
                  <Col xl={2} md={3} xs={4} className="px-0">
                    <div className="d-flex align-items-center flex-column mb-4">
                      <LivestreamIcon style={{ marginBottom: '-15px', width: "55px", height: "55px" }} fill="gray" /> <br />
                      <div style={{fontSize:"20px", color:'white'}} className="py-3 static_menu"> Livestream</div>
                    </div>
                  </Col>
                  <Col xl={2} md={3} xs={4} className="px-0">
                    <div className="d-flex align-items-center flex-column mb-4">
                      <GameIcon style={{ marginBottom: '-15px', width: "55px", height: "55px" }} fill="black" /> <br />
                      <div style={{fontSize:"20px", color:'white'}} className="py-3 static_menu">Gaming</div>
                    </div>
                  </Col>
                </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Features;