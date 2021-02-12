import React from "react";
import { useHistory, usehistory } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
// import { Container, Row, Col } from "shards-react";

import MainNavBar from "../components/Layout/MainNavBar/MainNavBar";
import SubNavBar from "../components/Layout/MainNavBar/SubNavBar";
import MainSideBar from "../components/Layout/MainSideBar/MainSideBar";
import MainFooter from "../components/Layout/MainFooter/MainFooter";

const DefaultLayout = ({
  children,
  noNavbar,
  noSubbar,
  noSidebar,
  noFooter,
}) => {
  const history = useHistory();
  const credentials = useSelector(
    (state) => state.user_reducers.user_credentials
  );
  const isHomeRoute = history.location.pathname === "/";
  noFooter = !isHomeRoute && credentials;

  // console.log("ishome route", history.location.pathname);
  return (
    <div className="container-fluid">
      <div className="row " >
        {!noSidebar && <MainSideBar />}
        <div className="col-sm-12 col-md-9 col-lg-10 main-content p-0 scroller"
        >
          {!noNavbar && <MainNavBar />}
          {!noSubbar && <SubNavBar />}
          {children}
          {!noFooter && <MainFooter />}
        </div>
      </div>
    </div>
  );
};

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
};

DefaultLayout.defaultProps = {
  noNavbar: false,
  noSubbar: true,
  noSidebar: true,
  noFooter: false,
};
export default DefaultLayout;
