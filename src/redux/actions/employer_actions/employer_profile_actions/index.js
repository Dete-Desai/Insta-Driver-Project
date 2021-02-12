import * as employer_types from "../../../types/employer_types";
import { getAuthConfig } from "../../../../Util/ApiUtils";
import { PostRoute } from "../../../../Api";
const { Post, Get } = PostRoute();

export const getEmployerProfile = (token) => async (dispatch) => {
  let config = getAuthConfig(token);

  try {
    let response = await Get("users/me", config);
    dispatch({
      type: employer_types.GET_EMPLOYER_PROFILE,
      payload: response.data.response_data,
    });
    return response.data.response_data;
  } catch (error) {
    console.log("error in updating user info".error);
  }
};

export const updateEmployerProfile = (token) => async (dispatch) => {
  let config = getAuthConfig(token);

  try {
    let response = await Get("users/me", config);
    dispatch({
      type: employer_types.GET_EMPLOYER_PROFILE,
      payload: response.data.response_data,
    });
  } catch (error) {
    console.log("error in updating user info".error);
  }
};

// Api calls

export const addBussinesName = (token, businessName) => async (dispatch) => {
  let config = getAuthConfig(token);

  try {
    const response = await Post(
      "users/employer/update/businessName",
      { businessName },
      config
    );

    await dispatch(updateEmployerProfile(token));

    alert("Business Name Submitted...");

    return response.data.response_data;
  } catch (error) {
    console.log("error in updating user info".error);
  }
};

export const addHandle = (token, handle) => async (dispatch) => {
  let config = getAuthConfig(token);

  try {
    await Post("users/employer/update/handle", { handle }, config);

    dispatch(updateEmployerProfile(token));
  } catch (error) {
    console.log("error in updating user info", error);
  }
};

export const addAboutBusiness = (token, aboutBusiness) => async (dispatch) => {
  let config = getAuthConfig(token);

  try {
    await Post(
      "users/employer/update/aboutBusiness",
      { aboutBusiness },
      config
    );
    dispatch(updateEmployerProfile(token));
    alert("About Business Submitted...");
  } catch (error) {
    console.log("error in updating user info", error);
  }
};

export const addTagLine = (token, tagLine) => async (dispatch) => {
  let config = getAuthConfig(token);

  try {
    await Post("users/employer/update/tagLine", { tagLine }, config);
    dispatch(updateEmployerProfile(token));
    alert("TagLine Submitted...");
  } catch (error) {
    console.log("error in updating user info", error);
  }
};

export const addWebsite = (token, website) => async (dispatch) => {
  let config = getAuthConfig(token);

  try {
    await Post("users/employer/update/website", { website }, config);
    dispatch(updateEmployerProfile(token));
    alert("Website Submitted...");
  } catch (error) {
    console.log("error in updating user info", error);
  }
};

export const addLocation = (token, title, latitude, longitude) => async (
  dispatch
) => {
  let config = getAuthConfig(token);

  try {
    await Post(
      `users/employer/update/location`,
      { title, latitude, longitude },
      config
    );
    dispatch(updateEmployerProfile(token));
    alert("Location Submitted...");
  } catch (error) {
    console.log("error in updating user info", error);
  }
};

export const addContactInfo = (token, emailAddress, phoneNumber) => async (
  dispatch
) => {
  let config = getAuthConfig(token);

  try {
    await Post(
      "users/employer/update/contact",
      { emailAddress, phoneNumber },
      config
    );
    dispatch(updateEmployerProfile(token));
    alert("Contact Info Submitted...");
  } catch (error) {
    console.log("error in updating user info".error);
  }
};

export const addContactVisibility = (token, visibility) => async (dispatch) => {
  let config = getAuthConfig(token);

  const str2bool = (value) => {
    if (value && typeof value === "string") {
      if (value.toLowerCase() === "true") return true;
      if (value.toLowerCase() === "false") return false;
    }
    return value;
  };

  const contactVisibility = str2bool(visibility);

  try {
    await Post(
      "users/employer/update/visibility",
      { contactVisibility },
      config
    );
    dispatch(updateEmployerProfile(token));
    alert("Contact Visibility Submitted...");
  } catch (error) {
    console.log("error in updating user info", error);
  }
};

export const addPic = (token, file, picId) => async (dispatch) => {
  let config = getAuthConfig(token);

  try {
    await Post(`users/update/${picId}`, file, config);
    dispatch(updateEmployerProfile(token));
    alert("employer photo updated...");
  } catch (error) {
    console.log("error in updating user info", error);
  }
};
