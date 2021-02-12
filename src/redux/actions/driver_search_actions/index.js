import { PostRoute } from "../../../Api";
import * as driver_search_types from "../../types/driver_search_types";
const { Get } = PostRoute();

//reducer action
export const searchDriver = (filter) => async (dispatch) => {
  // console.log("inside searchDriver. Filter:", filter);
  dispatch({
    type: driver_search_types.DRIVER_SEARCH_REQUEST,
  });
  try {
    let response = await Get(
      `search/drivers/multiplequery?category=${filter.category}&location=${filter.location}&type=${filter.driverType}&currency=${filter.currency}&min${filter.salaryMin}&max=${filter.salaryMax}&drivingExperience=${filter.drivingExperience}&licensePeriod=${filter.licenseAge}&gender=${filter.gender}`
    );
    const itemCount = response.data.response_data.length;
    // console.log("inside searchDRiver", response.data.response_data);
    dispatch({
      type: driver_search_types.DRIVER_SEARCH_SUCCESS,
      payload: { results: response.data.response_data, resultCount: itemCount },
    });
  } catch (error) {
    dispatch({
      type: driver_search_types.DRIVER_SEARCH_FAILURE,
      payload: error.message,
    });
    // console.log("error in fetching user info".error);
  }
};

export const setSearchResultPage = (page) => {
  return {
    type: driver_search_types.SET_DRIVER_SEARCH_CURRENT_PAGE,
    payload: page,
  };
};
