import * as driver_types from "../../../types/driver_types";
import { getAuthConfig } from "../../../../Util/ApiUtils";
import { PostRoute } from "../../../../Api";
import { start_loading, stop_loading } from "../../auth_actions/index";
const { Post, Get, Delete } = PostRoute();

export const getDriverJobCards = () => async (dispatch) => {
  try {
    dispatch(start_loading());
    let response = await Get("jobcard/list");
    dispatch({
      type: driver_types.UPDATE_JOB_CARDS,
      payload: response.data.response_data,
    });
    dispatch(stop_loading());
  } catch (error) {
    console.log("error in fetching user info", error);
  }
};

//reducer action
export const updateJobCards = (token) => async (dispatch) => {
  let config = getAuthConfig(token);
  try {
    dispatch(start_loading());
    let response = await Get("jobcard/my-jobcards", config);
    dispatch({
      type: driver_types.UPDATE_JOB_CARDS,
      payload: response.data.response_data,
    });
    dispatch(stop_loading());
  } catch (error) {
    console.log("error in fetching user info", error);
  }
};

export const activeJobCards = (token) => async (dispatch) => {
  let config = getAuthConfig(token);
  try {
    dispatch(start_loading());
    let response = await Get("jobcard/my-jobcards/active", config);
    if (response.data.response_data.length > 0) {
      dispatch({
        type: driver_types.SET_CURRENT_ACTIVE_CARD,
        payload: response.data.response_data[0],
      });
    }
    dispatch(stop_loading());
  } catch (error) {
    console.log("error in fetching user info", error);
  }
};

export const inactiveJobCards = (token) => async (dispatch) => {
  let config = getAuthConfig(token);
  try {
    dispatch(start_loading());
    let response = await Get("jobcard/my-jobcards/inactive", config);
    dispatch({
      type: driver_types.GET_ALL_ACHIEVED_CARDS,
      payload: response.data.response_data,
    });
    dispatch(stop_loading());
  } catch (error) {
    console.log("error in fetching user info", error);
  }
};

export const updateJobcardStatus = (token, jobcardId, status) => async (
  dispatch
) => {
  let config = getAuthConfig(token);
  try {
    await Post(`jobcard/update/status/${jobcardId}`, status, config);
    dispatch(activeJobCards(token));
    dispatch(inactiveJobCards(token));
    dispatch(stop_loading());
  } catch (error) {
    console.log("error in fetching user info", error);
  }
};

//api actions

export const addJobCard = (token, data) => async (dispatch) => {
  let config = getAuthConfig(token);
  dispatch(start_loading());
  try {
    let response = await Post("jobcard/create", data, config);
    console.log("---GET_DRIVER_PROFILE", response.data.response_data);
    dispatch(updateJobCards(token));
  } catch (error) {
    console.log("error in fetching user info".error);
  }
};

export const getSpecificJob = (jobpostId) => async (dispatch) => {
  try {
    await Get(`/jobpost/${jobpostId}`, {});
  } catch (error) {
    console.log("Error in loading job details".error);
  }
};

export const delJobCard = (token, jobcardId) => async (dispatch) => {
  let config = getAuthConfig(token);
  try {
    await Delete(`/jobcard/delete/${jobcardId}`, config);
    dispatch({
      type: driver_types.DELETE_JOB_CARD,
    });
    dispatch(activeJobCards(token));
    dispatch(inactiveJobCards(token));
  } catch (error) {
    console.log("Error in deleting job card", error);
  }
};
