import React from "react";
import PropTypes from "prop-types";
// import { Container, Row, Col } from "shards-react";

import MainNavBar from "../components/Layout/MainNavBar/MainNavBar";
import SubNavBar from "../components/Layout/MainNavBar/SubNavBar";
import MainSideBar from "../components/Layout/MainSideBar/MainSideBar";
import MainFooter from "../components/Layout/MainFooter/MainFooter";
import DriverApplicationNotification from "../components/Employer/Recruitment/Vaccancy/DriverApplicationNotification";

const DefaultLayout = ({
  children,
  noNavbar,
  noSubbar,
  noSidebar,
  noFooter,
  noNotification,
}) => (
  <div className="container-fluid">
    <div className="row">
      {!noSidebar && <MainSideBar />}
      <div className="col-sm-12 col-md-9 col-lg-12 main-content p-0">
        {!noNavbar && <MainNavBar />}
        {!noSubbar && <SubNavBar />}
        {noNotification && <DriverApplicationNotification />}
        {children}
        {!noFooter && <MainFooter />}
      </div>
    </div>
  </div>
);

DefaultLayout.propTypes = {
  /**
   * Whether to display the mainnavbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the subnavbar, or not.
   */
  noSubbar: PropTypes.bool,
  /**
   * Whether to display the mainfooter, or not.
   */
  noFooter: PropTypes.bool,
  /**
   * Whether to display the mainsidebar, or not.
   */
  noSidebar: PropTypes.bool,
  /**
   * Whether to display the mainsidebar, or not.
   */
  noNotification: PropTypes.bool,
};

DefaultLayout.defaultProps = {
  noNavbar: false,
  noSubbar: false,
  noSidebar: true,
  noFooter: false,
  noNotification: true,
};
export default DefaultLayout;
