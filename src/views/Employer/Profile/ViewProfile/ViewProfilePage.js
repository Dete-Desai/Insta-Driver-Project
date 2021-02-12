import React from "react";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";
import EmployerViewProfile from "../../../../components/Employer/Profile/ViewProfile/index";
import { useSelector } from "react-redux";
import DriverProfilePage from "../../../DriverProfilePage/DriverProfilePage";

const ViewProfilePage = (props) => {
  const credentials = useSelector(
    (state) => state.user_reducers.user_credentials
  );

  const history = useHistory();
  let route = `/driver-profile`

  if (credentials && credentials.role === "EMPLOYER") {
    return (
      <div>
        <EmployerViewProfile />
      </div>
    );
  }else{
    history.push(route)
    return (
      <div>
        <DriverProfilePage/>
      </div>
    )
  }
};

ViewProfilePage.propTypes = {};

export default ViewProfilePage;
