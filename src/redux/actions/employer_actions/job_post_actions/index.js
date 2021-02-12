import { getAuthConfig } from "../../../../Util/ApiUtils";
import { PostRoute } from "../../../../Api";
import * as employer_types from "../../../types/employer_types";

const { Post, Get } = PostRoute();

//JOB POST

export const employerPostJob = (token, jobdata) => async (dispatch) => {
  let config = getAuthConfig(token);

  try {
    await Post("/jobpost/employer/create", jobdata, config);
    alert("Job Post Submitted Successfully");
  } catch (error) {
    console.log("error in updating user info".error);
  }
};

export const employerGetJobPosts = (token) => async (dispatch) => {
  let config = getAuthConfig(token);
  try {
    let response = await Get(`/jobpost/employer/my-jobposts`, config);
    // let response=await Get(`/jobpost/list`);

    dispatch({
      type: employer_types.EMPLOYER_UPDATE_JOB_POSTS,
      payload: {
        results: response.data.response_data,
        totalCount: response.data.response_data.length,
      },
    });
  } catch (error) {
    console.log("error in updating user info".error);
  }
};

export const getBusinessJobPosts = (handle) => async (dispatch) => {
  try {
    let response = await Get(`/jobpost/business/${handle}`);
    dispatch({
      type: employer_types.GET_BUSINESS_JOB_POSTS,
      payload: response.data.response_data,
    });
    console.log("-------business jobs----", response.data.response_data);
  } catch (error) {
    console.log("error in updating user info", error);
  }
};

export const applyDriverForJob = (token, jobpostId) => async (dispatch) => {
  let config = getAuthConfig(token);
  try {
    await Post(`/jobpost/driver/apply/${jobpostId}`, {}, config);
    dispatch({ type: employer_types.APPLY_DRIVER_FOR_JOB });
    alert("Your application was successful");
  } catch (error) {
    console.log("error in updating user info", error);
  }
};

export const setJobPostsPage = (page) => async (dispatch) => {
  dispatch({
    type: employer_types.SET_CURRENT_JOB_POSTS_PAGE,
    payload: page,
  });
};

export const stopAndArchiveJobAd = (token, id) => async (dispatch) => {
  let config = getAuthConfig(token);
  try {
    /**implement the functionality to link to the API */
    console.log(`Stopped job ad archived add for id: ${id}`);
    let response = await Post(
      `/jobpost/status/${id}`,
      { status: "EXPIRED" },
      config
    );
  } catch (error) {
    console.log(error.response.data);
  }
};

export const deleteJobAd = (token, id) => async (dispatch) => {
  let config = getAuthConfig(token);
  try {
    /**implement the functionality to link to the API */
    console.log(`Deleted job ad for id: ${id}`);
    let response = await Post(`/jobpost/employer/delete/${id}`, config);
    dispatch(employerGetJobPosts(token));
  } catch (error) {
    console.log(error);
  }
};

export const getSingleJobpost = (jobpostId) => async (dispatch) => {
  try {
    const response = await Get(`/jobpost/${jobpostId}`);
    dispatch({
      type: employer_types.GET_SINGLE_JOB_POST,
      payload: response.data.response_data,
    });
  } catch (error) {
    console.log("Error fetching single job", error);
  }
};
