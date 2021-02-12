import * as employer_types from "../../../types/employer_types";
import { getAuthConfig } from "../../../../Util/ApiUtils";
import { PostRoute } from "../../../../Api";
const { Post, Get } = PostRoute();

export const getEmployerJobs = (token) => async () => {
  let config = getAuthConfig(token);
  try {
    let response = await Get("/jobpost/employer/my-jobposts", config);
    return response.data;
  } catch (error) {
    console.log("error in fetching employer jobs".error);
    return;
  }
};
export const getEmployerJobCandidates = (token, id) => async () => {
  let config = getAuthConfig(token);
  try {
    let response = await Get(`/jobpost/employer/my-jobposts/${id}`, config);
    return response.data;
  } catch (error) {
    console.log("error in fetching employer job candidates".error);
    return;
  }
};

export const updateJobPosts = (token) => async (dispatch) => {
  let config = getAuthConfig(token);
  try {
    let response = await Get("/jobpost/employer/my-jobposts", config);
    dispatch({
      type: employer_types.EMPLOYER_UPDATE_JOB_POSTS,
      payload: response.data.response_data,
    });
    alert("Your Job Advertisement Has Been Created");
  } catch (error) {
    console.log("error in updating user info".error);
  }
};

export const addJobPost = (token, data) => async (dispatch) => {
  let config = getAuthConfig(token);
  try {
    await Post("/jobpost/employer/create", data, config);
    dispatch(updateJobPosts(token));
    // clear jopost stuff
  } catch (error) {
    console.log("error in updating user info".error);
  }
};

export const getDriverProfile = (driverId) => async () => {
  try {
    const response = await Get(`/users/drivers/${driverId}`);
    if (response.data.response_code === 200) {
      return response.data.response_data;
    }
    return;
  } catch (error) {
    console.log("Error fetching driver profile", error);
  }
};
