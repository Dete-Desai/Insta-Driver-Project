import * as action_types from "../../types";
import * as driver_types from "../../types/driver_types";
import * as employer_types from "../../types/employer_types";
import { useHistory } from "react-router-dom";
import { updateDriverProfile } from "../driver_actions/driver_profile_actions";
import { updateJobCards } from "../driver_actions/job_card_actions";
import { updateEmployerProfile } from "../employer_actions/employer_profile_actions";
import { PostRoute } from "../../../Api";
import { handleFilterErrors } from "../../../Util/FilterErrors";
import { getDriverProfilePercent } from "../../../Util/ProfilePercent";

const { Post } = PostRoute();

export const user_login = (obj, history) => async (dispatch) => {
  try {
    dispatch(start_loading());
    let login_response = await Post("/users/login", obj);
    let login_data = login_response.data.response_data;
    dispatch({
      type: action_types.SET_AUTHENTICATE_USER,
      payload: login_data,
    });

    const { role } = login_data;

    if (role === "EMPLOYER") {
      await dispatch(updateEmployerProfile(login_data.token));
      history.push({
        pathname: "/employer-profile",
      });
    } else if (role === "DRIVER") {
      await dispatch(updateDriverProfile(login_data.token));
      await dispatch(updateJobCards(login_data.token));
      dispatch(loginRedirect(role, history));
    }
    dispatch(stop_loading());
  } catch (err) {
    if (err.message === "Network Error") {
      dispatch({
        type: action_types.SET_AUTHENTICATION_ERRORS,
        errors: [{ network: "Please check your network" }],
      });
      stop_loading();
    } else if (err.message !== "Network Error") {
      console.log("err", err);
      const {
        response: {
          data: { errors },
        },
      } = err;
      dispatch(handle_errors(errors));
    }
  }
};

export const user_register = (obj, history) => async (dispatch) => {
  try {
    dispatch(start_loading());

    const register_response = await Post("/users/register", obj);

    const register_data = register_response.data.response_data;

    dispatch({
      type: action_types.SET_AUTHENTICATE_USER,
      payload: register_data,
    });

    const { role } = obj;

    if (role === "EMPLOYER") {
      await dispatch(updateEmployerProfile(register_data.token));

      history.push({
        pathname: "/employer-profile",
      });
    } else if (role === "DRIVER") {
      await dispatch(updateDriverProfile(register_data.token));

      await dispatch(updateJobCards(register_data.token));

      dispatch(loginRedirect(role, history));
    }

    dispatch(stop_loading());
    dispatch(clear_errors());
  } catch (err) {
    if (err.message === "Network Error") {
      dispatch({
        type: action_types.SET_AUTHENTICATION_ERRORS,
        errors: [{ network: "Please check your network" }],
      });
    }
    const {
      response: {
        data: { errors },
      },
    } = err;

    dispatch(handle_errors(errors));
  }
};

const handle_errors = (errors) => async (dispatch) => {
  const errorArray = [];
  errorArray.push(handleFilterErrors("email", errors));
  errorArray.push(handleFilterErrors("password", errors));
  errorArray.push(handleFilterErrors("mobile", errors));

  await dispatch({
    type: action_types.SET_AUTHENTICATION_ERRORS,
    errors: errorArray,
  });
  dispatch(stop_loading());
};

export const stop_loading = () => (dispatch) =>
  dispatch({ type: action_types.SET_LOADING, loading: false });

export const start_loading = () => (dispatch) =>
  dispatch({ type: action_types.SET_LOADING, loading: true });

export const clear_errors = () => (dispatch) =>
  dispatch({
    type: action_types.CLEAR_ERRORS,
  });

export const logout = () => async (dispatch) => {
  localStorage.clear();
  dispatch({ type: action_types.LOGOUT_USER });
  dispatch({ type: driver_types.REMOVE_DRIVER_PROFILE });
  dispatch({ type: employer_types.REMOVE_EMPLOYER_PROFILE });
};

export const loginRedirect = (role, history) => async (dispatch, getState) => {
  const state = getState();
  console.log("--------state  ", state);
  if (role === "DRIVER") {
    let percent = getDriverProfilePercent(state.driver_reducers.driver_profile);
    console.log("---auth action %", percent);
    if (percent === 0) {
      history.push("/no-driver-profile");
    } else {
      history.push("/driver-profile");
    }
  }
};

export const updateUserFirstTime = () => async (dispatch) => {
  dispatch({ type: action_types.UPDATE_FIRST_TIME });
};
