import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import MainNavBar from "../components/Layout/MainNavBar/MainNavBar";
import SubNavBar from "../components/Layout/MainNavBar/SubNavBar";
import MainSideBar from "../components/Layout/MainSideBar/MainSideBar";
import MainFooter from "../components/Layout/MainFooter/MainFooter";


const CompleteLayout = ({ children, noNavbar, noSubbar, noFooter, noSidebar }) => (
  <Container fluid>
    <Row>
    {!noSidebar && <MainSideBar/>}
      <Col
        className="main-content p-0"
        lg={{ size: 12, offset: 3 }}
        md={{ size: 9, offset: 3 }}
        sm="12"
        tag="main"
      >
        
        {!noNavbar && <MainNavBar />}
        {!noSubbar && <SubNavBar />}
        {children}
        {!noFooter && <MainFooter />}
      </Col>
    </Row>
  </Container>
);

CompleteLayout.propTypes = {
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

CompleteLayout.defaultProps = {
  noSidebar: false,
  noSubbar: false,
  noNavbar: false,
  noFooter: false
};

export default CompleteLayout;
