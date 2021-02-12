import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from 'react-redux'

const PrivateRoutesComponent = (props) => {
  const { component: Component, ...rest } = props;
  var session_token = props.session_token;
  return (
    <Route
      {...rest}
      render={(props) =>
        session_token !== null ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: "/login-user",
                state: { from: props.location },
              }}
            />
          )
      }
    />
  );
};


const mapStateToProps = (state) => {
  if (state.user_reducers.user_credentials && state.user_reducers.user_credentials.token)
    return {
      session_token: state.user_reducers.user_credentials.token,
    }
  else {
    return { session_token: null }
  }
};

export const PrivateRoutes = connect(mapStateToProps, null)(PrivateRoutesComponent)