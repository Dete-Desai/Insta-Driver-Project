import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { logout } from "../../../redux/actions/auth_actions";
import { EmployerNavContent, DriverNavContent } from "./NavContent";
import logo from "../../../dist/icons/logo.png";
import "./index.css";

const StyledNavButton = styled.div`
  width: "100%";
  max-width: "200px";
  min-width: "100px";
  a {
    font-weight: 300;
  }
  :hover {
    a {
      font-weight: 500;
    }
  }
  a:hover {
    background: none;
    text-shadow: none;
  }
`;

const DesktopNavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const credentials = useSelector(
    (state) => state.user_reducers.user_credentials
  );

  // console.log(credentials.role);
  const history = useHistory();
  const dispatch = useDispatch();
  const signInUrls = [
    "/login-user",
    "/employer-login",
    "/driver-login",
    "/driver-register",
    "/employer-register",
  ];
  const socialUrls = ["/user-social"];
  const jobslUrls = ["/jobs-all", "/job-details"];

  console.log("hist", history.location.pathname);

  const getSocial = () => {
    let route = `/user-social`;
    history.push(route);
  };

  const getJobs = (e) => {
    let route = `/jobs-all`;
    history.push(route);
  };

  const logOutUser = () => {
    let route = `/login-user`;
    if (credentials) {
      dispatch(logout());
      history.push(route);
    }
    history.push(route);
    setShowDropdown(false);
  };

  const handleChangeRoute = () => {
    if (credentials.role === "DRIVER") {
      history.push("/driver-profile");
      setShowDropdown(false);
    } else {
      history.push("/employer-profile");
      setShowDropdown(false);
    }
  };

  const handleChangeDropdown = (e) => {
    e.stopPropagation();
    setShowDropdown(!showDropdown);
  };

  return (
    <div onClick={() => setShowDropdown(false)}>
      <div id="loader" className="loader_class">
        <img src={require("../../../dist/img/loader.gif")} alt="Loader" />
      </div>
      <div id="fade" />
      {/* Navigation */}
      <div className="container-fluid csnav">
        <div className="top">
          <nav
            className="navbar navbar-expand-lg navbar-dark fixed-top"
            id="mainNav"
          >
            <div
              className="container-fluid"
              style={{ marginLeft: "5%", marginRight: "5%" }}
            >
              <Link className="navbar-brand js-scroll-trigger" to="/">
                <img src={logo} style={{ height: 43 }} alt="Logo" />
              </Link>
              <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                Menu
                <i className="fas fa-bars" />
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li
                    style={{ width: "14rem" }}
                    className="nav-item custom-button"
                  >
                    <StyledNavButton
                      className="loginbxo cursorpointer"
                      id="cursorpointer"
                      onClick={getJobs}
                      style={{
                        // backgroundColor: "white",
                        backgroundColor: jobslUrls.some((urls) =>
                          history.location.pathname.includes(urls)
                        )
                          ? "#201F1F"
                          : "white",
                        color: "#3B3B3B",
                        border: "0.5px solid #5B5B5B",
                        lineHeight: "38px",
                        fontFamily: "rubik !important",
                      }}
                    >
                      <a
                        style={{
                          fontWeight:
                            jobslUrls.some((urls) =>
                              history.location.pathname.includes(urls)
                            ) && 500,
                          color:
                            jobslUrls.some((urls) =>
                              history.location.pathname.includes(urls)
                            ) && "white",
                        }}
                      >
                        {" "}
                        Jobs
                      </a>
                    </StyledNavButton>
                  </li>
                  <li
                    style={{ width: "14rem" }}
                    className="nav-item"
                    id="custom-button"
                  >
                    <StyledNavButton
                      className="loginbxo cursorpointer"
                      id="cursorpointer"
                      style={{
                        backgroundColor: socialUrls.includes(
                          history.location.pathname
                        )
                          ? "#201F1F"
                          : "white",
                        color: "#3B3B3B",
                        border: "0.5px solid #5B5B5B",
                        lineHeight: "38px",
                        fontFamily: "rubik !important",
                      }}
                      onClick={getSocial}
                    >
                      <a
                        style={{
                          fontWeight:
                            socialUrls.includes(history.location.pathname) &&
                            500,
                          color:
                            socialUrls.includes(history.location.pathname) &&
                            "white",
                        }}
                      >
                        Get Social
                      </a>
                    </StyledNavButton>
                  </li>
                  <li
                    style={{ width: "20rem" }}
                    className="nav-item"
                    id="custom-button"
                  >
                    {(credentials && credentials.role === "DRIVER") ||
                    (credentials && credentials.role === "EMPLOYER") ? (
                      <div className="btn-group position-relative">
                        <StyledNavButton
                          className="loginbxo cursorpointer default user-profile-dropdown-icon position-relative"
                          id={credentials ? "" : "cursorpointer"}
                          style={{
                            backgroundColor: credentials
                              ? "#F8BD00"
                              : signInUrls.includes(history.location.pathname)
                              ? "#201F1F"
                              : "white",
                            color: "#3B3B3B",
                            border: `0.5px solid ${
                              credentials ? "#F8BD00" : "#5B5B5B"
                            }`,
                            lineHeight: "38px",
                            fontFamily: "rubik !important",
                          }}
                          onClick={handleChangeDropdown}
                        >
                          <a
                            style={{
                              fontWeight:
                                (credentials ||
                                  signInUrls.includes(
                                    history.location.pathname
                                  )) &&
                                500,
                              color:
                                signInUrls.includes(
                                  history.location.pathname
                                ) && "white",
                              width: "100%",
                            }}
                          >
                            {credentials && credentials.role === "EMPLOYER"
                              ? credentials.businessName
                                ? credentials.businessName
                                : "EMPLOYER X"
                              : credentials.firstName
                              ? credentials.firstName
                              : "ANONYMOUS"}
                            {!credentials && "Sign In"}
                          </a>
                        </StyledNavButton>
                        {showDropdown && (
                          <div
                            className="user-profile-dropdown-menu  d-flex 
                          justify-content-center align-items-center"
                          >
                            <div onClick={handleChangeRoute}>
                              {credentials && credentials.avatar ? (
                                <img
                                  src={credentials.avatar}
                                  alt="user profile image"
                                  className="user-profile-image"
                                />
                              ) : (
                                <span className="fa fa-user"></span>
                              )}

                              {credentials && credentials.role === "EMPLOYER"
                                ? credentials.businessName
                                  ? credentials.businessName
                                  : "EMPLOYER X"
                                : credentials.firstName
                                ? credentials.firstName
                                : "ANONYMOUS"}
                            </div>
                            <div onClick={logOutUser}>Logout</div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <StyledNavButton
                        className="loginbxo cursorpointer default"
                        id={credentials ? "" : "cursorpointer"}
                        style={{
                          backgroundColor: credentials
                            ? "#F8BD00"
                            : signInUrls.includes(history.location.pathname)
                            ? "#201F1F"
                            : "white",
                          color: "#3B3B3B",
                          border: `0.5px solid ${
                            credentials ? "#F8BD00" : "#5B5B5B"
                          }`,
                          lineHeight: "38px",
                          fontFamily: "rubik !important",
                        }}
                        onClick={logOutUser}
                      >
                        <a
                          style={{
                            fontWeight:
                              (credentials ||
                                signInUrls.includes(
                                  history.location.pathname
                                )) &&
                              500,
                            color:
                              signInUrls.includes(history.location.pathname) &&
                              "white",
                          }}
                        >
                          {credentials ? credentials.firstName : "Sign in"}
                        </a>
                      </StyledNavButton>
                    )}
                  </li>
                  <li
                    className="nav-item d-lg-none"
                    style={{ listStyleType: "none" }}
                  >
                    <ul
                      style={{ background: "#5B5B5B", borderRadius: "9px" }}
                      className="menuList"
                    >
                      <div className="my-2">
                        <EmployerNavContent />
                      </div>
                      <div>
                        <DriverNavContent />
                      </div>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <div className="dropdown mt-2 d-none d-sm-none d-lg-block">
                      <button
                        className="btn  dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Menu&nbsp;&nbsp;
                        <img src="dist/img/menu.svg" alt="Menu" />
                      </button>
                      <div
                        className="dropdown-menu dropdown_style"
                        aria-labelledby="dropdownMenuButton"
                        style={{ top: "132%" }}
                      >
                        <div className="row px-2">
                          <div className="col-sm px-4 mt-2">
                            <EmployerNavContent />
                          </div>
                          <div
                            style={{ borderLeft: "0.5px solid #F5F9FC" }}
                            className="col-sm pl-4 pr-4 mt-2"
                          >
                            <DriverNavContent />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

DesktopNavBar.propTypes = {};

export default DesktopNavBar;
