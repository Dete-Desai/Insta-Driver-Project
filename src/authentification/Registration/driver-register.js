import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "../../dist/css/driverregister.css";
import RegistrationLayout from "../RegistrationLayout";

const DriverRegister = () => {
  const credentials = useSelector(
    (state) => state.user_reducers.user_credentials
  );
  const history = useHistory();

  const Title = () => (
    <h3 className="text-uppercase">
      SIGN UP FOR{" "}
      <span style={{ color: "#ffbb00", fontWeight: "bold" }}>INSTADRIVER </span>{" "}
      ACCOUNT
    </h3>
  );

  const LoginLink = () => (
    <Link to="/driver-login">Already have an account? Just Sign In</Link>
  );

  let driverPage = "driver-profile";
  let employerPage = "employer-profile";

  if (credentials) {
    if (credentials.role === "DRIVER") {
      history.push(driverPage);
    } else if (credentials.role === "EMPLOYER") {
      history.push(employerPage);
    }
  }

  return (
    <RegistrationLayout Title={Title} LoginLink={LoginLink} role="DRIVER" />
  );
};
export default DriverRegister;
