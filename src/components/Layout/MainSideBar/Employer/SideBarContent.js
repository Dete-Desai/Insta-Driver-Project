import React from "react";
import { NavLink } from "react-router-dom";
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
const SideBarContent = () => {
  return (
    <>
      <nav id="sideNavBar" className="navbar">
        <ul className="sidebarCss navbar-nav flex-column w-100 pb-2">
          <div id="accordion">
            <li className="nav-item">
              <div id="headingOne">
                <NavLink
                  // to="/employer-profile"
                  to="# "
                  activeStyle={{
                    background: "#FFBB00",
                    color: "black",
                  }}
                  style={{ width: 227, borderRadius: "5px 5px 0px 0px" }}
                  className="nav-link mt-3 profile text-dark btn-link"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <PersonAddOutlinedIcon className="mr-2" />
                  Employer Profile &nbsp;&nbsp;&nbsp;&nbsp;
                  <ExpandMoreOutlinedIcon />
                </NavLink>
              </div>
              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion"
                style={{ backgroundColor: "#fff", width: 227 }}
              >
                <div className="card-body">
                  <NavLink
                    to="/employer-profile"
                    activeStyle={{
                      background: "#FFBB00",
                      color: "black",
                    }}
                    className="btn btn-outline-warning mb-3"
                    style={{
                      width: "187px",
                      color: "black",
                      display: "inline-block",
                    }}
                  >
                    Profile
                  </NavLink>
                  <NavLink
                    to="/employer-edit-profile"
                    activeStyle={{
                      background: "#FFBB00",
                      color: "black",
                    }}
                    className="btn btn-outline-warning"
                    style={{
                      width: "187px",
                      color: "black",
                      display: "inline-block",
                    }}
                  >
                    Edit Profile
                  </NavLink>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <NavLink
                to="/employer-onboarding"
                activeStyle={{
                  background: "#FFBB00",
                  color: "black",
                  borderRadius: "5px",
                }}
                className="nav-link mt-2"
              >
                <DriveEtaOutlinedIcon className="mr-2" /> Onboard Your Vehicles
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                to="/search"
                activeStyle={{
                  background: "#FFBB00",
                  color: "black",
                  borderRadius: '5px',
                }}
                className="nav-link mt-2"
              >
                <SearchOutlinedIcon className="mr-2" /> Search & Hire
                    Drivers
                  </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                to="/inbox-pages"
                activeStyle={{
                  background: "#FFBB00",
                  color: "black",
                  borderRadius: "5px",
                }}
                className="nav-link mt-2"
              >
                <EmailOutlinedIcon className="mr-2" /> Inbox{" "}
                <img className="ml-3" src={dotIcon} alt="" />
              </NavLink>
            </li>
            <li className="nav-item">
              <div id="headingTwo">
                <NavLink
                  to="/search-driver"
                  activeStyle={{
                    background: "#FFBB00",
                    color: "black",
                  }}
                  style={{ width: 227, borderRadius: "5px 5px 0px 0px" }}
                  className="nav-link mt-2 profile text-dark btn-link"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <BusinessCenterOutlinedIcon className="mr-2" /> Recruitment{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <ExpandMoreOutlinedIcon />
                </NavLink>
              </div>
              <div
                id="collapseTwo"
                className="collapse show"
                aria-labelledby="headingTwo"
                data-parent="#accordion"
                style={{ backgroundColor: "#fff", width: 227 }}
              >
                <div className="card-body">
                  <NavLink
                    to="/search-driver"
                    activeStyle={{
                      background: "#FFBB00",
                      color: "black",
                    }}
                    className="btn btn-outline-warning"
                    style={{ width: "187px", color: "black" }}
                  >
                    Search Driver
                  </NavLink>
                  <br />
                  <br />
                  <NavLink
                    to="/employer-recruitment"
                    activeStyle={{
                      background: "#FFBB00",
                      color: "black",
                    }}
                    className="btn btn-outline-warning"
                    style={{ width: "187px", color: "black" }}
                  >
                    Post Vacancy
                  </NavLink>
                  <br />
                  <br />
                  <NavLink
                    to="/employer-driver-advertisement-cards"
                    activeStyle={{
                      background: "#FFBB00",
                      color: "black",
                    }}
                    className="btn btn-outline-warning"
                    style={{ width: "187px", color: "black" }}
                  >
                    Driver Cards
                  </NavLink>
                  <br />
                  <br />
                  <NavLink
                    to="/employer-applicants"
                    activeStyle={{
                      background: "#FFBB00",
                      color: "black",
                    }}
                    className="btn btn-outline-warning"
                    style={{ width: "187px", color: "black" }}
                  >
                    All Applicants
                  </NavLink>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <NavLink
                to="/employer-organization"
                activeStyle={{
                  background: "#FFBB00",
                  color: "black",
                  borderRadius: "5px",
                }}
                className="nav-link mt-2"
              >
                <AccountTreeOutlinedIcon className="mr-2" /> My Organizations
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                to="/"
                activeStyle={{
                  background: "#FFBB00",
                  color: "black",
                  borderRadius: '5px',
                }}
                className="nav-link mt-2"
              >
                <StarsOutlinedIcon className="mr-2" /> Rate A Driver
                  </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                to="/my-subscription"
                activeStyle={{
                  background: "#FFBB00",
                  color: "black",
                  borderRadius: "5px",
                }}
                className="nav-link mt-2"
              >
                <CreditCardOutlinedIcon className="mr-2" /> My Subscription
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/notifications"
                activeStyle={{
                  background: "#FFBB00",
                  color: "black",
                  borderRadius: "5px",
                }}
                className="nav-link mt-2"
              >
                <NotificationIcon fill="white" className="mr-2" /> Notifications
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default SideBarContent;
