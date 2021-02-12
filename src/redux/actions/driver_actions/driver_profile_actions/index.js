import * as driver_types from "../../../types/driver_types";
import { getAuthConfig } from "../../../../Util/ApiUtils";
import { PostRoute } from "../../../../Api";
import { GetCurrencyFromAddress } from "../../../../Util/GetCurrency";
const { Post, Get, Delete } = PostRoute();

//reducer action
export const updateDriverProfile = (token) => async (dispatch) => {
  let config = getAuthConfig(token);

  try {
    let response = await Get("users/me", config);
    dispatch({
      type: driver_types.GET_DRIVER_PROFILE,
      payload: response.data.response_data,
    });
  } catch (error) {
    console.log("error in fetching user info".error);
  }
};

//api actions

export const updateDriverInfo = (token, data) => async (dispatch) => {
  let config = getAuthConfig(token);
  try {
    console.log("-------- country", data.country);
    let curr = await GetCurrencyFromAddress(data.country);
    console.log("-------- currency", curr);

    await Post("users/personal-information", data, config);
    dispatch(updateCurrency(token, curr));
    dispatch(updateDriverProfile(token));
  } catch (error) {
    console.log("error in fetching user info".error);
  }
};

export const updateQualification = (token, data) => async (dispatch) => {
  let config = getAuthConfig(token);

  try {
    await Post("users/qualification", data, config);
    dispatch(updateDriverProfile(token));
  } catch (error) {
    console.log("error in fetching user info".error);
  }
};

export const updateCategories = (token, data) => async (dispatch) => {
  let config = getAuthConfig(token);

  try {
    await Post("users/driver-categories", data, config);
    dispatch(updateDriverProfile(token));
  } catch (error) {
    console.log("error in fetching user info".error);
  }
};

export const updateRideSharingHistory = (token, data) => async (dispatch) => {
  let config = getAuthConfig(token);

  try {
    await Post("users/previous-history", data, config);
    dispatch(updateDriverProfile(token));
  } catch (error) {
    console.log("error in fetching user info".error);
  }
};

export const updateCurrency = (token, currency) => async (dispatch) => {
  let config = getAuthConfig(token);

  try {
    await Post(`users/currency/${currency}`, {}, config);
    dispatch(updateDriverProfile(token));
  } catch (error) {
    console.log("error in fetching user info".error);
  }
};

export const updateDailyTarget = (token, data) => async (dispatch) => {
  let config = getAuthConfig(token);

  try {
    await Post("users/dailytarget-payout", data, config);
    dispatch(updateDriverProfile(token));
  } catch (error) {
    console.log("error in fetching user info".error);
  }
};

export const updatePreferences = (token, data) => async (dispatch) => {
  let config = getAuthConfig(token);

  try {
    await Post("users/preferences", data, config);
    dispatch(updateDriverProfile(token));
  } catch (error) {
    console.log("error in fetching user info".error);
  }
};

export const updateSalaryRange = (token, data) => async (dispatch) => {
  let config = getAuthConfig(token);

  try {
    await Post("users/salaryrange", data, config);
    dispatch(updateDriverProfile(token));
  } catch (error) {
    console.log("error in fetching user info".error);
  }
};

export const updateHireReason = (token, data) => async (dispatch) => {
  let config = getAuthConfig(token);

  try {
    await Post("users/considertohire", data, config);
    dispatch(updateDriverProfile(token));
  } catch (error) {
    console.log("error in fetching user info".error);
  }
};

export const updateShowSocial = (token, isShow) => async (dispatch) => {
  let config = getAuthConfig(token);

  try {
    await Post(`users/set-social-summary-status?status=${isShow}`, {}, config);
    dispatch(updateDriverProfile(token));
  } catch (error) {
    console.log("error in fetching user info".error);
  }
};

export const updateMoreInfoShow = (token, isShow) => async (dispatch) => {
  let config = getAuthConfig(token);

  try {
    await Post(`users/more-information?status=${isShow}`, {}, config);
    dispatch(updateDriverProfile(token));
  } catch (error) {
    console.log("error in fetching user info".error);
  }
};

export const updateRideHailingPlatforms = (token, data) => async (dispatch) => {
  let config = getAuthConfig(token);

  try {
    await Post("users/ride-hailing-platforms", data, config);
    dispatch(updateDriverProfile(token));
  } catch (error) {
    console.log("error in fetching user info".error);
  }
};

export const updateOtherDrivingHistory = (
  token,
  data,
  hasEmploymentHistory
) => async (dispatch) => {
  let config = getAuthConfig(token);
  let hasEmploymentBody = {
    hasEmploymentHistory: hasEmploymentHistory,
  };
  try {
    await Post("users/driving-history", data, config);
    await Post(
      "users/driver/update/hasEmploymentHistory",
      hasEmploymentBody,
      config
    );
    dispatch(updateDriverProfile(token));
  } catch (error) {
    console.log("error in fetching user info".error);
  }
};

export const updateProfilePic = (token, data) => async (dispatch) => {
  let config = getAuthConfig(token);

  try {
    await Post("users/update/avatar", data, config);
    dispatch(updateDriverProfile(token));
  } catch (error) {
    console.log("error in fetching user info".error);
  }
};

export const updateOtherPics = (token, data, picId) => async (dispatch) => {
  let config = getAuthConfig(token);

  try {
    await Post(`users/driver/update/${picId}`, data, config);
    dispatch(updateDriverProfile(token));
  } catch (error) {
    console.log("error in fetching user info".error);
  }
};

export const getDriverProfileInfo = (id) => async (dispatch) => {
  ///let config = getAuthConfig(token);
  dispatch({
    type: driver_types.DRIVER_PUBLIC_PROFILE_REQUESTED,
  });
  try {
    let response = await Get(`users/drivers/${id}`);
    console.log("inisde getDriverProfileInfo", response.data.response_data);
    dispatch({
      type: driver_types.DRIVER_PUBLIC_PROFILE_SUCCESS,
      payload: response.data.response_data,
    });
  } catch (error) {
    dispatch({
      type: driver_types.DRIVER_PUBLIC_PROFILE_FAILURE,
      error: error,
    });
    console.log("error in fetching user info".error);
  }
};
export const updateAvailableforHire = (token, data) => async (dispatch) => {
  let config = getAuthConfig(token);

  try {
    await Post("users/driver/update/availableforHire", data, config);
    dispatch(updateDriverProfile(token));
  } catch (error) {
    console.log("error in updating status");
  }
};

export const updateFreezeProfile = (token, data) => async (dispatch) => {
  let config = getAuthConfig(token);

  try {
    await Post("users/driver/update/freezeProfile", data, config);
    dispatch(updateDriverProfile(token));
  } catch (error) {
    console.log("error in updating status");
  }
};

export const myDocsUpload = (token, formData) => async (dispatch) => {
  let config = getAuthConfig(token);

  try {
    await Post("users/driver/documents", formData, config);
    dispatch(updateDriverProfile(token));
  } catch (error) {
    console.log("error in updating status");
  }
};

export const deleteMyDocsFile = (docTitle, token) => async (
  dispatch,
  getState
) => {
  let config = getAuthConfig(token);
  let myUploads = getState().driver_reducers.driver_profile.myUploads;
  try {
    let file = myUploads.find((fileObj) => fileObj.title === docTitle);
    await Delete(`users/driver/documents/${file._id}`, config);
    dispatch(updateDriverProfile(token));
  } catch (error) {
    console.log("error in updating status");
  }
};

export const setUploadsVisibility = (isVisibility) => async (
  dispatch,
  getState
) => {
  let token = getState().user_reducers.user_credentials.token;
  let config = getAuthConfig(token);
  let body = {
    uploadsVisibility: isVisibility,
  };
  try {
    await Post(`users/driver/myuploads/visibility`, body, config);
    dispatch(updateDriverProfile(token));
    alert("upload visibility updated");
  } catch (error) {
    console.log("error in updating status");
  }
};

export const setExperienceBreakDown = (breakDown) => async (
  dispatch,
  getState
) => {
  let token = getState().user_reducers.user_credentials.token;
  let config = getAuthConfig(token);
  let body = {
    experienceBreakdown: breakDown,
  };
  try {
    await Post(`users/experience-breakdown`, body, config);
    dispatch(updateDriverProfile(token));
    alert("done expbreakdown");
  } catch (error) {
    console.log("error in updating status");
  }
};
