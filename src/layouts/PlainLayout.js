import React from "react";
import PropTypes from "prop-types";
import MainNavBar from "../components/Layout/MainNavBar/MainNavBar";
import SubNavBar from "../components/Layout/MainNavBar/SubNavBar";
import MainSideBar from "../components/Layout/MainSideBar/MainSideBar";
import MainFooter  from "../components/Layout/MainFooter/MainFooter";


const PlainLayout = ({ children, noNavbar, noSubbar, noFooter, noSidebar }) => (
  <div className="container-fluid">
    <div className="row">
      {!noSidebar && <MainSideBar />}
      <div
        className="main-content col-lg-12 col-md-9 col-sm-12 p-0"
        
      >

        {!noNavbar && <MainNavBar />}
        {!noSubbar && <SubNavBar />}
        {children}
        {!noFooter && <MainFooter />}
      </div>
    </div>
  </div>
);

PlainLayout.propTypes = {
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
  noSidebar: PropTypes.bool
};

PlainLayout.defaultProps = {
  noSidebar: true,
  noSubbar: true,
  noNavbar: true,
  noFooter: true
};

export default PlainLayout;
