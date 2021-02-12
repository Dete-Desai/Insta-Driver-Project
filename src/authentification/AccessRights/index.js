import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';

const AccountChoice = () => {
  const credentials = useSelector(state => state.user_reducers.user_credentials);
  const history = useHistory();

  const driverLogin = () => { let route = 'driver-login'; history.push(route); }
  const employerLogin = () => { let route = 'employer-login'; history.push(route); }

  let driverPage = 'driver-profile';
  let employerPage = 'employer-profile';

  if (credentials) {
    if (credentials.role === 'DRIVER') {
      history.push(driverPage);
    } else if (credentials.role === 'EMPLOYER') {
      history.push(employerPage)
    }
  }


  return (
    <div id="content">
      <section className="loginbg">
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="col-lg-9 boxnew text-center">
              <h3 className="text-uppercase">
                SIGN IN EITHER AS A DRIVER OR EMPLOYER
              </h3>
              <br />
              <br />
              <button
                type="submit"
                className="btn btn-secondary"
                style={
                  {
                    width: '400px',
                    backgroundColor: "#f8bd00",
                    color: '#fff',
                    borderColor: "1px solid #f8bd00"
                  }}
                onClick={driverLogin}
              >
                Driver Sign in
              </button>
              <br />
              <br />
              <br />
              <button
                type="submit"
                className="btn btn-secondary"
                style={
                  {
                    width: '400px',
                    backgroundColor: "#f8bd00",
                    color: '#fff',
                    borderColor: "1px solid #f8bd00"
                  }}
                onClick={employerLogin}
              >
                Employer Sign in
              </button>
              <br />
              <br />
              <h3 className="text-uppercase" style={{ visibility: "hidden" }}>
                Test
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

AccountChoice.propTypes = {};

export default AccountChoice;
