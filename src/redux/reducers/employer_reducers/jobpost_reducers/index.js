import * as job_types from '../../../types/employer_types';
import * as users_types from '../../../types';

const initialState = {
  job_post: null
}

export const job_post_reducer = (state=initialState, action) => {
  switch (action.type) {
    case job_types.GET_SINGLE_JOB_POST:
      return {
        ...state,
        job_post: action.payload
      }
    case users_types.LOGOUT_USER:
      return {
        ...state,
        job_post: null
      }
    default:
      return state;
  }
}