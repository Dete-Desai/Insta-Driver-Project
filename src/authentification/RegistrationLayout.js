import React, { useEffect, useState } from "react";
import "../dist/css/driverregister.css";
import { user_register, clear_errors } from "../redux/actions/auth_actions";
import { validateSignupData } from "../Util/UserValidator";
import { useDispatch, connect } from "react-redux";
import { useHistory } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";

const Register = ({ ...props }) => {
  let { loading, Title, LoginLink, role } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const [errors, setErrors] = useState();

  const [userData, setUserData] = useState({
    role: `${role}`,
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    userData[e.target.name] = e.target.value;
    setUserData(userData);
  };

  useEffect(() => {
    if (props["errors"]) {
      setErrors(...props["errors"]);
    }
    if (errors) {
      setTimeout(() => {
        dispatch(clear_errors());
        setErrors(null);
      }, 7000);
    }
  }, [dispatch, errors, props, setErrors]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { valid, errors } = validateSignupData(userData);

    if (valid === false) {
      setErrors(errors);
    } else if (valid === true) {
      const { role, email, password } = userData;

      dispatch(user_register({ role, email, password }, history));
    }
  };

  return (
    <section className="loginbg">
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="col-lg-9 boxnew text-center">
            <Title />
            <div className="d-flex justify-content-center">
              <RegistrationForm
                errors={errors}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                loading={loading}
                userData={userData}
              />
            </div>
            <br />
            <LoginLink />
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

export default connect(mapStateToProps, null)(Register);
