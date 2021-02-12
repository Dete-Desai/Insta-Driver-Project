import * as driver_types from "../../types/driver_types";

const initialProfile = {
  driver_profile: null,
  job_cards: null,
  current_active_card: null,
  achieved_job_cards: [],
  public_profile: null,
  public_profile_error: "",
  public_profile_loading: false,
};

export const driver_reducers = (state = initialProfile, action) => {
  switch (action.type) {
    case driver_types.GET_DRIVER_PROFILE:
      return {
        ...state,
        driver_profile: action.payload,
      };
    case driver_types.UPDATE_JOB_CARDS:
      return {
        ...state,
        job_cards: action.payload,
      };
    case driver_types.REMOVE_DRIVER_PROFILE:
      return {
        ...state,
        driver_profile: null,
        job_cards: null,
        current_active_card: null,
        achieved_job_cards: [],
      };
    case driver_types.SET_CURRENT_ACTIVE_CARD:
      return {
        ...state,
        current_active_card: action.payload,
      };
    case driver_types.GET_ALL_ACHIEVED_CARDS:
      return {
        ...state,
        achieved_job_cards: action.payload,
      };
    case driver_types.DELETE_JOB_CARD:
      return {
        ...state,
        current_active_card: null,
      };
    case driver_types.DRIVER_PUBLIC_PROFILE_SUCCESS:
      return {
        ...state,
        public_profile: action.payload,
      };
    case driver_types.DRIVER_PUBLIC_PROFILE_REQUESTED:
      return {
        ...state,
        public_profile_loading: true,
      };

    case driver_types.DRIVER_PUBLIC_PROFILE_FAILURE:
      return {
        ...state,
        public_profile_error: action.payload,
      };
    default:
      return state;
  }
};
