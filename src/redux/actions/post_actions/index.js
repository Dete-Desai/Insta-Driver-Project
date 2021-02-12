import * as post_types from "../../types/post_types";
import { PostRoute } from "../../../Api";
import { getAuthConfig } from "../../../Util/ApiUtils";
const { Post, Get, Delete } = PostRoute();

export const listPosts = (token) => async (dispatch) => {
  try {
    const config = await getAuthConfig(token);

    dispatch({ type: post_types.GET_POST_REQUEST });

    const response = await Get("/posts/list", config);

    dispatch({
      type: post_types.GET_POST_SUCCESS,
      payload: response.data.response_data,
    });

    return response.data.response_data;
  } catch (err) {
    dispatch({ type: post_types.GET_POST_FAILURE, payload: err.message });
  }
};

export const listBusinessPosts = (handle) => async (dispatch) => {
  try {
    dispatch({ type: post_types.GET_POST_REQUEST });

    const response = await Get(`/posts/list/${handle}`);

    dispatch({
      type: post_types.GET_POST_SUCCESS,
      payload: response.data.response_data,
    });

    return response.data.response_data;
  } catch (err) {
    dispatch({ type: post_types.GET_POST_FAILURE, payload: err.message });
  }
};

export const createPost = (token, newPost) => async (dispatch) => {
  try {
    const config = await getAuthConfig(token);

    dispatch({ type: post_types.CREATE_POST_REQUEST });

    const response = await Post("/posts/create", newPost, config);

    dispatch({
      type: post_types.CREATE_POST_SUCCESS,
      payload: response.data.response_data,
    });
  } catch (err) {
    dispatch({ type: post_types.CREATE_POST_FAILURE, payload: err.message });
  }
};

export const deletePost = (token, postId) => async (dispatch) => {
  try {
    const config = await getAuthConfig(token);

    dispatch({ type: post_types.DELETE_POST_REQUEST });

    await Delete(`/posts/detail/${postId}`, config);

    dispatch({ type: post_types.DELETE_POST_SUCCESS, payload: postId });
  } catch (err) {
    dispatch({ type: post_types.DELETE_POST_FAILURE, payload: err.message });
  }
};

export const uploadPostPhoto = (token, formData) => async (dispatch) => {
  try {
    const config = await getAuthConfig(token);

    dispatch({ type: post_types.UPLOAD_POST_PHOTO_REQUEST });

    const response = await Post("/posts/media", formData, config);

    dispatch({
      type: post_types.UPLOAD_POST_PHOTO_SUCCESS,
      payload: response.data.response_data,
    });

    return response.data.response_data;
  } catch (err) {
    dispatch({
      type: post_types.UPLOAD_POST_PHOTO_FAILURE,
      payload: err.message,
    });
  }
};

export const uploadPostVideo = (token, formData) => async (dispatch) => {
  try {
    const config = await getAuthConfig(token);

    dispatch({ type: post_types.UPLOAD_POST_VIDEO_REQUEST });

    const response = await Post("/posts/media", formData, config);

    dispatch({
      type: post_types.UPLOAD_POST_VIDEO_SUCCESS,
      payload: response.data.response_data,
    });

    return response.data.response_data;
  } catch (err) {
    dispatch({
      type: post_types.UPLOAD_POST_VIDEO_FAILURE,
      payload: err.message,
    });
  }
};

export const uploadPostDocument = (token, formData) => async (dispatch) => {
  try {
    const config = await getAuthConfig(token);

    dispatch({ type: post_types.UPLOAD_POST_DOCUMENT_REQUEST });

    const response = await Post("/posts/media", formData, config);

    dispatch({
      type: post_types.UPLOAD_POST_DOCUMENT_SUCCESS,
      payload: response.data.response_data,
    });

    return response.data.response_data;
  } catch (err) {
    dispatch({
      type: post_types.UPLOAD_POST_DOCUMENT_FAILURE,
      payload: err.message,
    });
  }
};

export const getAllUserPhotos = (token) => async (dispatch) => {
  try {
    const config = await getAuthConfig(token);

    dispatch({ type: post_types.GET_POST_PHOTOS_REQUEST });

    const response = await Get("/posts/media/photos", config);

    dispatch({
      type: post_types.GET_POST_PHOTOS_SUCCESS,
      payload: response.data.response_data,
    });
  } catch (err) {
    dispatch({
      type: post_types.GET_POST_PHOTOS_FAILURE,
      payload: err.message,
    });
  }
};

export const getSingleBusinessPhotos = (handle) => async (dispatch) => {
  try {
    dispatch({ type: post_types.GET_POST_PHOTOS_REQUEST });

    const response = await Get(`/posts/media/photos/${handle}`);

    dispatch({
      type: post_types.GET_POST_PHOTOS_SUCCESS,
      payload: response.data.response_data,
    });
  } catch (err) {
    dispatch({
      type: post_types.GET_POST_PHOTOS_FAILURE,
      payload: err.message,
    });
  }
};

export const getAllUserVideos = (token) => async (dispatch) => {
  try {
    const config = await getAuthConfig(token);

    dispatch({ type: post_types.GET_POST_VIDEOS_REQUEST });

    const response = await Get("/posts/media/videos", config);

    dispatch({
      type: post_types.GET_POST_VIDEOS_SUCCESS,
      payload: response.data.response_data,
    });
  } catch (err) {
    dispatch({
      type: post_types.GET_POST_VIDEOS_FAILURE,
      payload: err.message,
    });
  }
};

export const getSingleBusinessVideos = (handle) => async (dispatch) => {
  try {
    dispatch({ type: post_types.GET_POST_VIDEOS_REQUEST });

    const response = await Get(`/posts/media/videos/${handle}`);

    dispatch({
      type: post_types.GET_POST_VIDEOS_SUCCESS,
      payload: response.data.response_data,
    });
  } catch (err) {
    dispatch({
      type: post_types.GET_POST_VIDEOS_FAILURE,
      payload: err.message,
    });
  }
};
