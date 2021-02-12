import React from "react";
import { NavLink, useHistory, Link } from "react-router-dom";
import styled from "styled-components";

import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import dotIcon from "../../../../dist/icons/dotIcon.png";

import { ReactComponent as ProfileIcon } from "../../../../dist/icons/driver_sidebar/profile_svg.svg";
import { ReactComponent as JobCardsIcon } from "../../../../dist/icons/driver_sidebar/job_cards_svg.svg";
import { ReactComponent as MyInstadriveIcon } from "../../../../dist/icons/driver_sidebar/my_instadrive_svg.svg";
import { ReactComponent as NotificationIcon } from "../../../../dist/icons/driver_sidebar/notifications_svg.svg";
import { ReactComponent as OrganizationIcon } from "../../../../dist/icons/driver_sidebar/organization_svg.svg";
import { ReactComponent as PostIcon } from "../../../../dist/icons/driver_sidebar/post_svg.svg";
import { ReactComponent as TopAdIcon } from "../../../../dist/icons/driver_sidebar/topad_svg.svg";
import { ReactComponent as InboxIcon } from "../../../../dist/icons/driver_sidebar/inbox_svg.svg";
import { nodeName } from "jquery";

const IcoDiv = styled.div`
  a {
    fill: white;
  }

  a:hover {
    fill: black;
  }
`;

const DriverSideBar = () => {
  const history = useHistory();

  const directToUrl_1 = () => {
    let route = "/driver-profile";
    history.push(route);
  };
  const directToUrl_2 = () => {
    let route = "/driver-profile";
    history.push(route);
  };
  const directToUrl_3 = () => {
    let route = "/driver/profile/status";
    history.push(route);
  };
  const directToUrl_4 = () => {
    let route = "/driver/profile/freeze";
    history.push(route);
  };

  return (
    <nav id="sideNavBar" className="navbar">
      <ul className="sidebarCss navbar-nav flex-column w-100 pb-3">
        <li className="nav-item ">
          <div id="accordion">
            <button
              className="nav-link mt-3 profile text-dark btn-link"
              style={{ width: 217, border: 0, outline: 0 }}
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <ProfileIcon className="mr-2" fill="black" />
              <b onClick={directToUrl_1}>Profile</b>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ExpandMoreOutlinedIcon />
            </button>
            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordion"
              style={{ backgroundColor: "#fff", width: 217 }}
            >
              <div className="card-body">
                <button
                  type="button"
                  className="btn btn-outline-warning"
                  onClick={directToUrl_2}
                  style={{ width: "160px", color: "black" }}
                >
                  Edit Profile
                </button>
                <br />
                <br />
                <button
                  type="button"
                  className="btn btn-outline-warning"
                  onClick={directToUrl_3}
                  style={{ width: "160px", color: "black" }}
                >
                  Status
                </button>
                <br />
                <br />
                <button
                  type="button"
                  className="btn btn-outline-warning"
                  onClick={directToUrl_4}
                  style={{ width: "160px", color: "black" }}
                >
                  Freeze Profile
                </button>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <IcoDiv>
            <Link
              style={{ fontSize: "14px" }}
              className="nav-link mt-3"
              to="/driver-card-create"
            >
              <JobCardsIcon className="mr-2" /> Job Cards
            </Link>
          </IcoDiv>
        </li>
        <li className="nav-item">
          <IcoDiv>
            <Link
              style={{ fontSize: "14px" }}
              className="nav-link mt-3"
              to="/my-driver-posts-reposts-page"
            >
              <PostIcon className="mr-2 icon" /> My Posts & Reposts
            </Link>
          </IcoDiv>
        </li>
        <li className="nav-item">
          <NavLink
            to="/inbox-pages"
            activeStyle={{
              background: "#FFBB00",
              color: "black",
              borderRadius: "5px",
            }}
            className="nav-link mt-3"
          >
            <InboxIcon className="mr-2" fill="white" /> Inbox{" "}
            <img className="ml-3" src={dotIcon} alt="" />
          </NavLink>
        </li>
        <li className="nav-item">
          <Link className="nav-link mt-3" to="/employer-organization">
            <OrganizationIcon className="mr-2" fill="white" /> My Organization
          </Link>
        </li>
        <li className="nav-item">
          <NavLink
            to="/my-instradriver"
            activeStyle={{
              background: "#FFBB00",
              color: "black",
              borderRadius: "5px",
            }}
            className="nav-link mt-3"
          >
            <MyInstadriveIcon className="mr-2" fill="white" /> My Instadrive
          </NavLink>
        </li>
        <li className="nav-item">
          <Link className="nav-link mt-3" to="/top-ad">
            <TopAdIcon className="mr-2" fill="white" /> Top Ad
          </Link>
        </li>
        <li className="nav-item">
          <NavLink
            to="/notifications"
            activeStyle={{
              background: "#FFBB00",
              color: "black",
              borderRadius: "5px",
            }}
            className="nav-link mt-3"
          >
            <NotificationIcon fill="white" /> Notifications
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default DriverSideBar;
