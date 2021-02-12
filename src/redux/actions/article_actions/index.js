import * as action_types from "../../types/article_types";
import { PostRoute } from "../../../Api";
import { getAuthConfig } from "../../../Util/ApiUtils";
const { Post, Get, Delete } = PostRoute();

export const createArticle = (token, article) => async (dispatch) => {
  try {
    const config = await getAuthConfig(token);

    dispatch({ type: action_types.CREATE_ARTICLE_REQUEST });

    const response = await Post("/article/create", article, config);

    dispatch({
      type: action_types.CREATE_ARTICLE_SUCCESS,
      payload: response.data.response_data,
    });
  } catch (err) {
    dispatch({
      type: action_types.CREATE_ARTICLE_FAILURE,
      payload: err.message,
    });
  }
};

export const listArticles = (token) => async (dispatch) => {
  try {
    const config = await getAuthConfig(token);

    dispatch({ type: action_types.GET_ARTICLES_REQUEST });

    const response = await Get("/article/list", config);

    dispatch({
      type: action_types.GET_ARTICLES_SUCCESS,
      payload: response.data.response_data,
    });
  } catch (err) {
    dispatch({ type: action_types.GET_ARTICLES_FAILURE, payload: err.message });
  }
};

export const listSingleBusinessArticles = (handle) => async (dispatch) => {
  try {
    dispatch({ type: action_types.GET_ARTICLES_REQUEST });

    const response = await Get(`/article/list/${handle}`);

    dispatch({
      type: action_types.GET_ARTICLES_SUCCESS,
      payload: response.data.response_data,
    });
  } catch (err) {
    dispatch({ type: action_types.GET_ARTICLES_FAILURE, payload: err.message });
  }
};

export const getSingleArticle = (articleId) => async (dispatch) => {
  try {
    dispatch({ type: action_types.GET_ARTICLE_REQUEST });

    const response = await Get(`/article/${articleId}`);

    dispatch({
      type: action_types.GET_ARTICLE_SUCCESS,
      payload: response.data.response_data,
    });
  } catch (err) {
    dispatch({ type: action_types.GET_ARTICLE_FAILURE, payload: err.message });
  }
};

export const deleteArticle = (token, articleId) => async (dispatch) => {
  try {
    const config = await getAuthConfig(token);

    dispatch({ type: action_types.DELETE_ARTICLE_REQUEST });

    await Delete(`/article/${articleId}`, config);

    dispatch({ type: action_types.DELETE_ARTICLE_SUCCESS, payload: articleId });
  } catch (err) {
    dispatch({
      type: action_types.DELETE_ARTICLE_FAILURE,
      payload: err.message,
    });
  }
};
