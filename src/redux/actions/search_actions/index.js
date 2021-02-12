import { PostRoute } from "../../../Api";
import * as search_types from "../../types/search_types"
const { Post, Get } = PostRoute();

export const searchError = (bool) => {
  return {
    type: "SEARCH_ERROR",
    dataError: bool,
  };
}

export const searchLoading = (bool) => {
    return {
        type: "SEARCH_LOADING",
        dataLoading: bool,
    };
}

export const searchSuccess = (data) => {
    return {
        type: "SEARCH_SUCCESS",
        data
    };
}

export const updateSearchData = (data)=> {
    // let url = 'search';
    // try {
    //     dispatch(searchLoading(true));
    //     Get(url)
    //     .then((response) => {
    //         if (!response.OK) {
    //             throw Error(response.statusText);
    //         }
    //         dispatch(searchLoading(false));
    //         return response;
    //     })
    //     .then((response) => response.json())
    //     .then((data) => dispatch(searchSuccess(data)))
    //     .then(() => dispatch(searchError(true)));
    // } catch (error) {
    //     console.log("Error in fetching the data".error);
    // }
    return {
        type: search_types.SET_SEARCH_DATA,
        payload: data
    };
}



export const updateSearchPageKeyword = (keyword)=> {
    return {
        type: search_types.SET_SEARCH_PAGE_KEYWORD,
        payload: keyword
    };
}
