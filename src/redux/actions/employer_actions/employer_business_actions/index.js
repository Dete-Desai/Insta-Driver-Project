import * as employer_types from "../../../types/employer_types";
import { PostRoute } from "../../../../Api";
import { start_loading, stop_loading } from "../../auth_actions";
const { Get } = PostRoute();

export const getBusiness = (handle) => async (dispatch) => {
  try {
    dispatch(start_loading());
    const response = await Get(`/users/business/${handle}`);
    dispatch({
      type: employer_types.GET_BUSINESS,
      payload: response.data.response_data,
    });
    dispatch(stop_loading());
  } catch (error) {
    console.log(error);
  }
};

export const unsetBusiness = () => async (dispatch) => {
  dispatch({ type: employer_types.UNSET_BUSINESS });
};
