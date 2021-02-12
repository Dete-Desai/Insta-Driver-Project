import React from "react";
import { useHistory } from "react-router-dom";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { UserAddOutlined } from "@ant-design/icons";
import { makeStyles } from "@material-ui/core/styles";
import { Menu } from "antd";
import { useSelector } from 'react-redux';
import { logout } from '../../../redux/actions/auth_actions';

const MobileNavBar = (props) => {
  const credentials = useSelector(state => state.user_reducers.user_credentials);
  const history = useHistory();

  const useStyles = makeStyles((theme) => ({
    link: {
      display: "flex",
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
    },
  }));

  const { SubMenu } = Menu;
  const classes = useStyles;

  const getSocial = () => {
    let route = `/user-social`;
    history.push(route);
  };

  const getLogin = () => {
    let route = `/login-user`;
    if (credentials) {
      dispatch(logout());
      history.push(route)
    }
    history.push(route);
  };

  function handleClick(event) {event.preventDefault();console.info("You clicked a breadcrumb.");}

  return (
    <div>
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
            <div className="container">
              <button
                className="navbar-toggler navbar-toggler-left"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive2"
                aria-controls="navbarResponsive2"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{ backgroundColor: "#FFBB00" }}
              >
                <i className="fas fa-bars" />
                <i className="fas fa-bars" />
              </button>
              <a
                className="navbar-brand js-scroll-trigger"
                href="/#/index.html"
              >
                <img
                  src="dist/img/logo.svg"
                  style={{ height: 50 }}
                  alt="Logo"
                />
              </a>
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
                  <li className="nav-item custom-button">
                    <div
                      className="loginbxo cursorpointer"
                      id="cursorpointer"
                      href="/employer-driver-advertisement-cards"
                      style={{
                        backgroundColor: "white",
                        color: "#3B3B3B",
                        border: "2px solid #212529",
                        fontWeight: 300,
                      }}
                    >
                      Jobs
                    </div>
                  </li>
                  <li className="nav-item" id="custom-button">
                    <div
                      className="loginbxo cursorpointer"
                      id="cursorpointer"
                      onclick="location.href ='social.html'"
                      style={{
                        backgroundColor: "white",
                        color: "#3B3B3B",
                        border: "2px solid #212529",
                        fontWeight: 300,
                      }}
                      onClick={getSocial}
                    >
                      Get Social
                    </div>
                  </li>
                  <li className="nav-item" id="custom-button">
                    <div
                      className="loginbxo cursorpointer default"
                      id="cursorpointer"
                      onclick="location.href ='login-user.html'"
                      style={{
                        backgroundColor: "white",
                        color: "#3B3B3B",
                        border: "2px solid #212529",
                        fontWeight: 300,
                      }}
                      onClick={getLogin}
                    >
                      {(credentials && credentials.firstName)? credentials.firstName :'Sign in'}
                    </div>
                  </li>
                  <li
                    className="nav-item d-lg-none"
                    style={{ listStyleType: "none" }}
                  >
                    <ul className="menuList">
                      <li>
                        {" "}
                        <a className href="/Instadriver.co">
                          {" "}
                          Home
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className href="/about-us">
                          About InstaDriver
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className href="/verified-search">
                          Verified Search (For Employers &amp; Drivers)
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className href="/top-ad">
                          Top Ad Feature (For Drivers)
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className href="/faqs-page">
                          FAQs
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className href="/contact-us">
                          Contact Us
                        </a>
                      </li>
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
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a className="dropdown-item" href="/Instadriver.co">
                          {" "}
                          Home
                        </a>
                        <a className="dropdown-item" href="/about-us">
                          About InstaDriver
                        </a>
                        <a className="dropdown-item" href="/verified-search">
                          Verified Search (For Employers &amp;Drivers)
                        </a>
                        <a className="dropdown-item" href="/top-ad">
                          Top Ad Feature (For Drivers)
                        </a>
                        <a className="dropdown-item" href="/faqs-page">
                          FAQs
                        </a>
                        <a className="dropdown-item" href="/contact-us">
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="collapse navbar-collapse" id="navbarResponsive2">
                <ul className="navbar-nav ml-auto">
                  <Breadcrumbs aria-label="breadcrumb">
                    <Menu>
                      <div className="col-sm-12" id="employer-mobile-sidebar">
                        <Link
                          color="inherit"
                          href="/"
                          onClick={handleClick}
                          className={classes.link}
                        >
                          <recruitment-text>
                            <svg
                              className="feather feather-user-plus sc-dnqmqq jxshSx"
                              xmlns="http://www.w3.org/2000/svg"
                              width={22}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                              <circle cx="8.5" cy={7} r={4} />
                              <line x1={20} y1={8} x2={20} y2={14} />
                              <line x1={23} y1={11} x2={17} y2={11} />
                            </svg>
                            Employer Profile
                          </recruitment-text>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </Link>
                      </div>
                    </Menu>
                  </Breadcrumbs>
                  <div className=""></div>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Menu>
                      <div className="col-sm-12" id="employer-mobile-sidebar">
                        <Link
                          color="inherit"
                          href="employer-onboarding"
                          onClick={handleClick}
                          className={classes.link}
                        >
                          <recruitment-text>
                            <svg
                              className="feather feather-edit sc-dnqmqq jxshSx"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                            </svg>
                            Onboard vehicles
                          </recruitment-text>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </Link>
                      </div>
                    </Menu>
                  </Breadcrumbs>
                  <div className=""></div>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Menu>
                      <div className="col-sm-12" id="employer-mobile-sidebar">
                        <Link
                          color="inherit"
                          href="/"
                          onClick={handleClick}
                          className={classes.link}
                        >
                          <recruitment-text>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-search"
                            >
                              <circle cx={11} cy={11} r={8} />
                              <line x1={21} y1={21} x2="16.65" y2="16.65" />
                            </svg>
                            Search&amp;Hire Drivers
                          </recruitment-text>
                        </Link>
                      </div>
                    </Menu>
                  </Breadcrumbs>
                  <div className="col-sm-7"></div>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Menu>
                      <div className="col-sm-12" id="employer-mobile-sidebar">
                        <Link
                          color="inherit"
                          href="/"
                          onClick={handleClick}
                          className={classes.link}
                        >
                          <recruitment-text>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-send"
                            >
                              <line x1={22} y1={2} x2={11} y2={13} />
                              <polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                            Inbox
                          </recruitment-text>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </Link>
                      </div>
                    </Menu>
                  </Breadcrumbs>
                  <div className=""></div>
                  <Breadcrumbs>
                    <Menu
                      onClick={handleClick}
                      style={{ width: 220 }}
                      defaultSelectedKeys={["0"]}
                      defaultOpenKeys={["0"]}
                      mode="inline"
                      id="employer-mobile-sidebar"
                    >
                      <SubMenu
                        key="sub1"
                        title={
                          <span>
                            <recruitment-text>
                              <UserAddOutlined />
                              <Link
                                color="inherit"
                                href="/"
                                onClick={handleClick}
                                className={classes.link}
                              >
                                Recruitment
                              </Link>
                            </recruitment-text>
                          </span>
                        }
                      >
                        <Menu.Item key="1">
                          <Link href="employer-recruitment">
                            Create Job Post
                          </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                          <Link href="/employer-manage-posts">
                            Manage Job Post
                          </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                          <Link href="/employer-driver-cards">
                            Driver cards
                          </Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                          <Link href="/employer-applicants">
                            All Applicants
                          </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                          <Link href="employer-manage-posts">
                            Manage Job Post
                          </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                          <Link href="/employer-driver-cards">
                            Driver cards
                          </Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                          <Link href="/employer-applicants">
                            All Applicants
                          </Link>
                        </Menu.Item>
                      </SubMenu>
                    </Menu>
                  </Breadcrumbs>
                  <div className="col-sm-12"></div>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Menu>
                      <div className="col-sm-12" id="employer-mobile-sidebar">
                        <Link
                          color="inherit"
                          href="employer-organization"
                          onClick={handleClick}
                          className={classes.link}
                        >
                          <recruitment-text>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-users"
                            >
                              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2">
                                {" "}
                              </path>
                              <circle cx={9} cy={7} r={4} />
                              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                            My Organizations
                          </recruitment-text>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </Link>
                      </div>
                    </Menu>
                  </Breadcrumbs>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

MobileNavBar.propTypes = {};

export default MobileNavBar;
