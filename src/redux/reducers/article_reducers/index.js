//

import * as article_types from "../../types/article_types";

const initialState = {
  articles: [],
  article: {},
  loading: false,
  error: "",
  success: "",
};

export const article_reducer = (state = initialState, action) => {
  switch (action.type) {
    case article_types.CREATE_ARTICLE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case article_types.CREATE_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: [...state.articles, action.payload],
      };

    case article_types.CREATE_ARTICLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case article_types.GET_ARTICLES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case article_types.GET_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: action.payload,
      };

    case article_types.GET_ARTICLES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case article_types.GET_ARTICLE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case article_types.GET_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        article: action.payload,
      };

    case article_types.GET_ARTICLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case article_types.DELETE_ARTICLE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case article_types.DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: state.articles.filter(
          (article) => article._id != action.payload
        ),
      };

    case article_types.DELETE_ARTICLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
