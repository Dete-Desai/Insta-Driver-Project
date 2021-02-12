import React from 'react';
import { ReactComponent as ProfileIcon } from '../../../dist/icons/driver_sidebar/profile_svg.svg';
import { ReactComponent as OrganizationIcon } from '../../../dist/icons/driver_sidebar/organization_svg.svg';
import { ReactComponent as RecruitmentIcon } from '../../../dist/icons/recruitment_svg.svg';
import { ReactComponent as VerificationIcon } from '../../../dist/icons/notified_svg.svg';
import { ReactComponent as VideoIcon } from '../../../dist/icons/video_svg.svg';
import { ReactComponent as LivestreamIcon } from '../../../dist/icons/live_stream.svg';
import { ReactComponent as GroupIcon } from '../../../dist/icons/group_svg.svg';
import { ReactComponent as GameIcon } from '../../../dist/icons/game_svg.svg';

import { NavLink } from 'react-router-dom';


export const EmployerNavContent = () => {
  return (
    <>
      <button style={{ width: '100%' }} className="btn menu_button font-weight-bold mb-4">Key Features FOR EMPLOYERS’ APP</button>
      <NavLink
        to="/driver-recruitment-static"
        activeStyle={{
          background: 'rgba(196, 196, 196, 0.3)',
          borderRadius: '5px',
        }}
        className="main-nav mb-1 p-2"
      >
        <RecruitmentIcon className="mr-2" fill="white" /> Driver Recruitment
      </NavLink>
      <NavLink
        to="/create-organizations"
        activeStyle={{
          background: 'rgba(196, 196, 196, 0.3)',
          borderRadius: '5px',
        }}
        className=" main-nav mb-1 p-2"
      >
        <OrganizationIcon className="mr-2" fill="white" /> Create Organizations
        <div className="pl-5">
          <span className="detailsText"> - Chat with team and customers </span> <br />
          <span className="detailsText"> - Maintenance management </span> <br />
          <span className="detailsText"> - Inspections and issues management </span> <br />
          <span className="detailsText"> - To do list and track tasks </span><br />
          <span className="detailsText"> - Data, reporting & analytics </span><br />
          <span className="detailsText"> - Driver management </span>
        </div>
      </NavLink>
      <NavLink
        to="/business-page"
        activeStyle={{
          background: 'rgba(196, 196, 196, 0.3)',
          borderRadius: '5px',
        }}
        className="main-nav mb-1 p-2"
      >
        <ProfileIcon className="mr-2" fill="white" /> Business Page
      </NavLink>
      <NavLink
        to="/verified-driver"
        activeStyle={{
          background: 'rgba(196, 196, 196, 0.3)',
          borderRadius: '5px',
        }}
        className=" main-nav mb-1 p-2"
      >
        <VerificationIcon className="mr-2" fill="white" /> Access Verified Drivers
      </NavLink>
      <NavLink
        to="/pricing-page"
        className=""
        style={{ width: '100%', height: '40px', background: "white", borderRadius: "5px" }}
      >
        <button className="btn view-pricing font-weight-bold mt-2">View  Pricing</button>
      </NavLink>
    </>
  );
};


export const DriverNavContent = () => {
  return (
    <>
      <button style={{ width: '100%', color: "black" }} className="btn menu_button font-weight-bold mb-4">Key Features FOR DRIVERS’ APP</button>
      <NavLink
        to="/professional-profile"
        activeStyle={{
          background: 'rgba(196, 196, 196, 0.3)',
          borderRadius: '5px',
        }}
        className="main-nav mb-1 p-2"
      >
        <ProfileIcon className="mr-2" fill="white" /> Professional Profile
        <div className="pl-5">
          <span className="detailsText"> - Create a professional profile </span> <br />
          <span className="detailsText"> - Get a driver verification badge </span> <br />
          <span className="detailsText"> - Post hire me cards </span> <br />
          <span className="detailsText"> - Network & connect with fellow drivers </span>
        </div>
      </NavLink>
      <NavLink
        to="/instadriver-groups"
        activeStyle={{
          background: 'rgba(196, 196, 196, 0.3)',
          borderRadius: '5px',
        }}
        className="main-nav mb-1 p-2"
      >
        <GroupIcon className="mr-2" fill="white" /> Instadriver Groups
      </NavLink>
      <NavLink
        to="/group-video-call"
        activeStyle={{
          background: 'rgba(196, 196, 196, 0.3)',
          borderRadius: '5px',
        }}
        className=" main-nav mb-1 p-2"
      >
        <VideoIcon className="mr-2" fill="white" /> Group Video Call
      </NavLink>
      <NavLink
        to="/livestream-page"
        activeStyle={{
          background: 'rgba(196, 196, 196, 0.3)',
          borderRadius: '5px',
        }}
        className=" main-nav mb-1 p-2"
      >
        <LivestreamIcon className="mr-2" fill="white" /> Livestream
      </NavLink>
      <NavLink
        to="/gaming"
        activeStyle={{
          background: 'rgba(196, 196, 196, 0.3)',
          borderRadius: '5px',
        }}
        className=" main-nav mb-1 p-2"
      >
        <GameIcon className="mr-2" fill="white" /> Gaming
      </NavLink>
      <NavLink
        to="/free-for-drivers"
        className="d-block"
        style={{ 
          width: '100%', 
          height: '40px', 
          background: "white", 
          borderRadius: "5px", 
          marginTop:'41px'
        }}
      >
        <button
          className="btn view-pricing font-weight-bold"
        >
          Free For Drivers
      </button>
      </NavLink>

    </>

  );
};
