import React from "react";
import { slide as Menu } from "react-burger-menu";
import "../../../dist/css/driversidebar.css";

export class Sidenav extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }
  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerwidth });
  };
  render() {
    const { width } = this.state;
    const isMobile = window.innerWidth <= 960;
    if (isMobile) {
      return (
        <Menu>
          <a className="menu-item" href="/">
            <i className="fas fa-user-plus"></i>&nbsp;Create Profile{" "}
            <span className="sr-only">(current)</span>
            <hr />
          </a>
          <a className="menu-item" href="/salads">
            <i className="fas fa-edit"></i>&nbsp;Edit Profile
            <hr />
          </a>
          <a className="menu-item" href="/pizzas">
            <i className="fas fa-file-alt"></i>&nbsp;&nbsp;Status
            <hr />
          </a>
          <a className="menu-item" href="/desserts">
            <i className="fas fa-sync"></i>&nbsp;Refresh Profile
            <hr />
          </a>
          <a className="menu-item" href="/desserts">
            <i className="fas fa-ribbon"></i>&nbsp;Top Add
            <hr />
          </a>
          <a className="menu-item" href="/desserts">
            <i className="far fa-pause-circle"></i>&nbsp;Freeze profile
            <hr />
          </a>
          <a className="menu-item" href="/desserts">
            <i className="fas fa-credit-card"></i>&nbsp;Job Card
            <hr />
          </a>
          <a className="menu-item" href="/desserts">
            <i className="fas fa-wifi"></i>&nbsp;Get Social
            <hr />
          </a>
          <a className="menu-item" href="/desserts">
            <i className="fas fa-briefcase"></i>&nbsp;Jobs <hr />
          </a>
          <a className="menu-item" href="/desserts">
            <i className="fas fa-address-book"></i>&nbsp;Contact Us
            <hr />
          </a>
          <a className="menu-item" href="/desserts">
            <i className="fas fa-sign-out-alt"></i>&nbsp;Logout
            <hr />
          </a>
        </Menu>
      );
    } else {
      return (
        <nav className="col-md-2  d-md-block bg-light1 sidebar pt-3">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item" id="sidenav">
                <a
                  className="nav-link @if($tab=='profile') active @endif padding_left_30"
                  id="sidebar"
                  href="{{route('driver.profile')}}"
                >
                  <svg
                    className="feather feather-user-plus sc-dnqmqq jxshSx"
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="8.5" cy={7} r={4} />
                    <line x1={20} y1={8} x2={20} y2={14} />
                    <line x1={23} y1={11} x2={17} y2={11} />
                  </svg>
                  &nbsp;&nbsp; Create Profile{" "}
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item" id="sidenav">
                <a
                  className="nav-link @if($tab=='profile') active @endif padding_left_30"
                  href="{{route('driver.profile')}}"
                >
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
                  &nbsp;&nbsp; Edit Profile
                </a>
              </li>

              <li className="nav-item" id="sidenav">
                <a
                  className="nav-link @if($tab=='status') active @endif padding_left_30"
                  href="{{route('driver.status')}}"
                >
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
                    className="feather feather-file-text"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1={16} y1={13} x2={8} y2={13} />
                    <line x1={16} y1={17} x2={8} y2={17} />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                  &nbsp;&nbsp; Status
                </a>
              </li>
              <li className="nav-item" id="sidenav">
                <a
                  className="nav-link @if($tab=='refresh_profile') active @endif padding_left_30"
                  href="{{route('driver.refresh_profile')}}"
                >
                  <svg
                    className="feather feather-refresh-ccw sc-dnqmqq jxshSx"
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
                    data-reactid={986}
                  >
                    <polyline points="1 4 1 10 7 10" />
                    <polyline points="23 20 23 14 17 14" />
                    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
                  </svg>
                  &nbsp;&nbsp; Refresh Profile
                </a>
              </li>
              <li className="nav-item" id="sidenav">
                <a
                  className="nav-link @if($tab=='top_ad') active @endif padding_left_30"
                  href="{{route('driver.top_ad')}}"
                >
                  <svg
                    className="feather feather-award sc-dnqmqq jxshSx"
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
                    <circle cx={12} cy={8} r={7} />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                  </svg>
                  &nbsp;&nbsp; Top Ad
                </a>
              </li>
              <li className="nav-item" id="sidenav">
                <a
                  className="nav-link @if($tab=='freeze_profile') active @endif padding_left_30"
                  href="{{route('driver.freeze_profile')}}"
                >
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
                    className="feather feather-layers"
                  >
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                  &nbsp;&nbsp; Freeze Profile
                </a>
              </li>
              <li className="nav-item" id="sidenav">
                <a
                  className="nav-link padding_left_30 @if($tab=='job_cards') active @endif padding_left_30"
                  href="{{route('driver.job_cards')}}"
                >
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
                    className="feather feather-credit-card"
                  >
                    <rect
                      x={1}
                      y={4}
                      width={22}
                      height={16}
                      rx={2}
                      ry={2}
                    ></rect>
                    <line x1={1} y1={10} x2={23} y2={10} />
                  </svg>
                  &nbsp;&nbsp; Job Cards
                </a>
              </li>
              {/* <li className="nav-item">
        <a className="nav-link @if($tab=='posts') active @endif padding_left_30" href="{{route('driver.posts')}}">
          {'{'}{'{'}-- <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
            </path></svg> --{'}'}{'}'}
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-repeat"><polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 0 1 4-4h14" />
            <polyline points="7 23 3 19 7 15" /><path d="M21 13v2a4 4 0 0 1-4 4H3" /></svg>
          My Posts and Reposts
        </a>
      </li> */}
              {/* {'{'}{'{'}--  */}
              <li className="nav-item" id="sidenav">
                <a
                  className="nav-link @if($tab=='posts-reposts') active @endif padding_left_30"
                  href="{{route('driver.freeze_profile')}}"
                >
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
                    className="feather feather-layers"
                  >
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                  &nbsp;&nbsp; My Posts and Reposts
                </a>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
  }
}
