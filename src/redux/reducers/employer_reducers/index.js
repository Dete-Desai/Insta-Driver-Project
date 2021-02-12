import * as employer_types from "../../types/employer_types";

const initialState = {
  employer_profile: null,
  job_posts: null,
  job_post: null,
  total_job_posts_count: -1,
  current_job_posts_page: 1,
  business: null,
};

export const employer_reducers = (state = initialState, action) => {
  switch (action.type) {
    case employer_types.GET_EMPLOYER_PROFILE:
      return {
        ...state,
        employer_profile: action.payload,
      };
    case employer_types.SET_CURRENT_JOB_POSTS_PAGE:
      return {
        ...state,
        current_job_posts_page: action.payload,
      };
    case employer_types.EMPLOYER_UPDATE_JOB_POSTS:
      return {
        ...state,
        job_posts: action.payload.results,
        total_job_posts_count: action.payload.totalCount,
      };
    case employer_types.REMOVE_EMPLOYER_PROFILE:
      return {
        ...state,
        employer_profile: null,
        job_posts: null,
        job_post: null,
        total_job_posts_count: -1,
        current_job_posts_page: 1,
        business: null,
      };
    case employer_types.GET_BUSINESS:
      return {
        ...state,
        business: action.payload,
      };
    case employer_types.UNSET_BUSINESS:
      return {
        ...state,
        business: null,
      };
    case employer_types.GET_BUSINESS_JOB_POSTS:
      return {
        ...state,
        job_posts: action.payload,
      };
    case employer_types.GET_SINGLE_JOB_POST:
      return {
        ...state,
        job_post: action.payload,
      };
    default:
      return state;
  }
};
