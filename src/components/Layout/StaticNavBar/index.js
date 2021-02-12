import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as ProfileIcon } from '../../../dist/icons/driver_sidebar/profile_svg.svg';
import { ReactComponent as VideoIcon } from '../../../dist/icons/video-black.svg';
import { ReactComponent as LivestreamIcon } from '../../../dist/icons/live_stream.svg';
import { ReactComponent as GroupIcon } from '../../../dist/icons/group-black.svg';
import { ReactComponent as GameIcon } from '../../../dist/icons/game-black.svg';
import { ReactComponent as OrganizationIcon } from '../../../dist/icons/driver_sidebar/organization_svg.svg';
// import { ReactComponent as BusinessCenterIcon } from '../../../dist/icons/Briefcase-svg.svg';
import { ReactComponent as VerifyIcon } from '../../../dist/icons/verify.svg';
import BusinessCenterOutlinedIcon from "@material-ui/icons/BusinessCenterOutlined";



export const DriverStaticNavBar = () => {
  return (
    <>
      <Row className="pt-3 border-bottom">
        <Col xl={12} className="pl-3">
          <Row className="align-items-center">
            <Col xl={2} md={3} xs={4} className="">
              <div className="d-flex align-items-center flex-column mb-4">
                <ProfileIcon style={{ marginBottom: '-15px', width: "25px", height: "25px", }} fill="gray" /> <br />
                <NavLink
                  to="/professional-profile"
                  activeStyle={{
                    borderBottom: '3px solid #FFBB00',
                    color: 'black',
                    fontWeight: 'bold'
                  }}
                  className="pb-2 static_menu"
                >
                  Professional Profile
              </NavLink>
              </div>
            </Col>
            <Col xl={2} md={3} xs={4} className="">
              <div className="d-flex align-items-center flex-column mb-4">
                <GroupIcon style={{ marginBottom: '-15px', width: "25px", height: "25px" }} fill="gray" /> <br />
                <NavLink
                  to="/instadriver-groups"
                  activeStyle={{
                    borderBottom: '3px solid #FFBB00',
                    color: 'black',
                    fontWeight: 'bold'
                  }}
                  className="pb-2 static_menu"
                >
                  Instadriver Groups
              </NavLink>
              </div>
            </Col>
            <Col xl={2} md={3} xs={4} className="px-0">
              <div className="d-flex align-items-center flex-column mb-4">
                <VideoIcon style={{ marginBottom: '-15px', width: "25px", height: "25px" }} fill="gray" /> <br />
                <NavLink
                  to="/group-video-call"
                  activeStyle={{
                    borderBottom: '3px solid #FFBB00',
                    color: 'black',
                    fontWeight: 'bold'
                  }}
                  className="pb-2 static_menu"
                >
                  Group Video Call
              </NavLink>
              </div>
            </Col>
            <Col xl={2} md={3} xs={4} className="px-0">
              <div className="d-flex align-items-center flex-column mb-4">
                <LivestreamIcon style={{ marginBottom: '-15px', width: "25px", height: "25px" }} fill="gray" /> <br />
                <NavLink
                  to="/livestream-page"
                  activeStyle={{
                    borderBottom: '3px solid #FFBB00',
                    color: 'black',
                    fontWeight: 'bold'
                  }}
                  className="pb-2 static_menu"
                >
                  Livestream
              </NavLink>
              </div>
            </Col>
            <Col xl={2} md={3} xs={4} className="px-0">
              <div className="d-flex align-items-center flex-column mb-4">
                <GameIcon style={{ marginBottom: '-15px', width: "25px", height: "25px" }} fill="black" /> <br />
                <NavLink
                  to="/gaming"
                  activeStyle={{
                    borderBottom: '3px solid #FFBB00',
                    color: 'black',
                    fontWeight: 'bold'
                  }}
                  className="pb-2 static_menu"
                >
                  Gaming
              </NavLink>
              </div>
            </Col>
            <Col xl={2} md={3} xs={4} className="px-0">
              <Link className="static_menu" to="/free-for-drivers">
                <div className="d-flex align-items-center flex-column mb-2">
                  <button style={{ background: "#5B5B5B", borderRadius: "5px" }} className="btn UrlBtn px-3 py-2 text-white" href="/#">Free For Drivers</button>
                </div>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};



export const EmployerStaticNavBar = () => {
  return (
    <>
      <Row className="pt-3 border-bottom">
        <Col xl={12} className="ml-auto">
          <Row className="align-items-center">
            <Col xl={1} lg={0} md={0} xs={0} className=""></Col>
            <Col xl={2} md={3} xs={4} className="">
              <div className="d-flex align-items-center flex-column mb-4">
                <BusinessCenterOutlinedIcon style={{ marginBottom: '-15px', width: "25px", height: "25px", color: "gray" }} fill="gray" /> <br />
                <NavLink
                  to="/driver-recruitment-static"
                  activeStyle={{
                    borderBottom: '3px solid #FFBB00',
                    color: 'black',
                    fontWeight: 'bold'
                  }}
                  className="pb-2 static_menu"
                >
                  Driver Recruitment
              </NavLink>
              </div>
            </Col>
            <Col xl={2} md={3} xs={4} className="">
              <div className="d-flex align-items-center flex-column mb-4">
                <OrganizationIcon style={{ marginBottom: '-15px', width: "25px", height: "25px" }} fill="gray" /> <br />
                <NavLink
                  to="/create-organizations"
                  activeStyle={{
                    borderBottom: '3px solid #FFBB00',
                    color: 'black',
                    fontWeight: 'bold'
                  }}
                  className="pb-2 static_menu"
                >
                  Create Organizations
              </NavLink>
              </div>
            </Col>
            <Col xl={2} md={3} xs={4} className="px-0">
              <div className="d-flex align-items-center flex-column mb-4">
                <ProfileIcon style={{ marginBottom: '-15px', width: "25px", height: "25px" }} fill="gray" /> <br />
                <NavLink
                  to="/business-page"
                  activeStyle={{
                    borderBottom: '3px solid #FFBB00',
                    color: 'black',
                    fontWeight: 'bold'
                  }}
                  className="pb-2 static_menu"
                >
                  Business Page
              </NavLink>
              </div>
            </Col>
            <Col xl={2} md={3} xs={4} className="px-0">
              <div className="d-flex align-items-center flex-column mb-4">
                <VerifyIcon style={{ marginBottom: '-15px', width: "25px", height: "25px" }} fill="gray" /> <br />
                <NavLink
                  to="/verified-driver"
                  activeStyle={{
                    borderBottom: '3px solid #FFBB00',
                    color: 'black',
                    fontWeight: 'bold'
                  }}
                  className="pb-2 static_menu"
                >
                  Access Verified Drivers
              </NavLink>
              </div>
            </Col>
            <Col xl={2} md={3} xs={4} className="px-0">
              <Link className="static_menu" to="/pricing-page" target="_blank">
                <div className="d-flex align-items-center flex-column mb-2">
                  <button style={{ background: "#5B5B5B", borderRadius: "5px" }} className="btn UrlBtn px-3 py-2 text-white" href="/#">View  Pricing</button>
                </div>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
