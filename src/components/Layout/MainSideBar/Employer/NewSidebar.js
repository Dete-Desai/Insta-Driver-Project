import React from "react";
import { Link, NavLink } from "react-router-dom";
import DriveEtaOutlinedIcon from "@material-ui/icons/DriveEtaOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import StarsOutlinedIcon from "@material-ui/icons/StarsOutlined";
import BusinessCenterOutlinedIcon from "@material-ui/icons/BusinessCenterOutlined";
import CreditCardOutlinedIcon from "@material-ui/icons/CreditCardOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import AccountTreeOutlinedIcon from "@material-ui/icons/AccountTreeOutlined";
import { ReactComponent as NotificationIcon } from "../../../../dist/icons/driver_sidebar/notifications_svg.svg";

import dotIcon from "../../../../dist/icons/dotIcon.png";

const NewSidebar = () => {
  return (
    <div className="new-sidebar">
      <div className="profile">
        <div className="profile-heading">
          <PersonAddOutlinedIcon className="mr-2" />
          Employer Profile &nbsp;&nbsp;&nbsp;&nbsp;
          <ExpandMoreOutlinedIcon />
        </div>
        <div className="profile-content">
          <Link>Edit Profile</Link>
        </div>
      </div>
      <div>
        <DriveEtaOutlinedIcon className="mr-2" />
        Onboard Your Vehicles
      </div>
      <div>
        <SearchOutlinedIcon className="mr-2" />
        Search &amp; Hire Drivers
      </div>
      <div>
        <EmailOutlinedIcon className="mr-2" />
        Inbox <span className="dot"></span>
      </div>
      <div className="recruitment">
        <div className="recruitment-heading">
          <BusinessCenterOutlinedIcon className="mr-2" />
          Recruitment &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <ExpandMoreOutlinedIcon />
        </div>
        <div className="recruitment-content">
          <Link>Search Driver</Link>
          <Link>Post Vacancy</Link>
          <Link>Driver Cards</Link>
          <Link>All Applicants</Link>
        </div>
      </div>
      <div>
        <AccountTreeOutlinedIcon className="mr-2" />
        My Organizations
      </div>
      <div>
        <StarsOutlinedIcon className="mr-2" />
        Rate a Driver
      </div>
      <div>
        <NotificationIcon fill="white" className="mr-2" />
        My Subscription
      </div>
    </div>
  );
};

export default NewSidebar;
