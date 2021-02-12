import React, { useState, useEffect } from "react";
import "../dist/css/index.css";
import { user_login, clear_errors } from "../redux/actions/auth_actions";
import { useDispatch, connect } from "react-redux";
import { useHistory } from "react-router-dom";
import LoginForm from "./LoginForm";

const Login = ({ ...props }) => {
  const { Title, SignupLink, loading, Role } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState();

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
    role: Role,
  });

  useEffect(() => {
    if (props["errors"]) {
      setErrors(...props["errors"]);
      console.log(...props["errors"]);
    }
    if (errors) {
      setTimeout(() => {
        dispatch(clear_errors());
        setErrors(null);
      }, 10000);
    }
    // console.log("--- user role ", userCredentials);
  }, [dispatch, errors, props, setErrors]);

  const handleChange = (e) => {
    userCredentials[e.target.name] = e.target.value;
    setUserCredentials({ ...userCredentials });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(user_login(userCredentials, history));
  };

  return (
    <section className="loginbg">
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="col-lg-9 boxnew text-center">
            <Title />
            <div className="d-flex justify-content-center">
              <LoginForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                errors={errors}
                loading={loading}
              />
            </div>
            <SignupLink />
            <br />
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  errors: state.user_reducers.errors,
  loading: state.user_reducers.loading,
});
export default connect(mapStateToProps, null)(Login);
