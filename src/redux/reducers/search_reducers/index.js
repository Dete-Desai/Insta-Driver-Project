import * as search_types from "../../types/search_types";

export const searchError = (state = false, action) => {
  switch (action.type) {
    case search_types.SEARCH_ERROR:
      return action.dataError;
    default:
      return state;
  }
};

export const searchLoading = (state = false, action) => {
  switch (action.type) {
    case search_types.SEARCH_LOADING:
      return action.dataLoading;
    default:
      return state;
  }
};

const initialState = {
  search_data: null,
  search_page_keyword:""
};

export const search_reducers = (state = initialState, action) => {
  switch (action.type) {
    case search_types.SET_SEARCH_DATA:
      return {
        ...state,
        search_data: action.payload,
      };
    case search_types.SET_SEARCH_PAGE_KEYWORD:
      return {
        ...state,
        search_page_keyword: action.payload,
      };

    default:
      return state;
  }
};
