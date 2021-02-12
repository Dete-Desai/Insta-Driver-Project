import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import LoginLayout from "../LoginLayout";

const EmployerLogin = ({ ...props }) => {
  const credentials = useSelector(
    (state) => state.user_reducers.user_credentials
  );
  const history = useHistory();

  const Title = () => (
    <>
      <h3 className="text-uppercase">EMPLOYER SIGN IN.</h3>
      <p>
        <Link to="/terms_conditions">
          By signing in, you agree that you have read and accept Instadriver{" "}
          <span className="text-underline">Terms &amp; Conditions.</span>
        </Link>
        .
      </p>
    </>
  );

  const SignupLink = () => (
    <Link to="/employer-register" style={{ color: "#F8BD00", fontWeight: 401 }}>
      New to Instadriver? Register here
    </Link>
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
    <LoginLayout Title={Title} Role={"EMPLOYER"} SignupLink={SignupLink} />
  );
};

export default EmployerLogin;
