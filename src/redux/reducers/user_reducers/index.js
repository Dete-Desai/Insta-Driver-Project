import * as user_types from "../../types";
const initialState = {
  user_credentials: null,
  errors: null,
  loading: false,
};

export const user_reducers = (state = initialState, action) => {
  switch (action.type) {
    case user_types.SET_AUTHENTICATE_USER:
      return {
        ...state,
        loading: false,
        user_credentials: action.payload,
      };
    case user_types.SET_AUTHENTICATION_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.errors,
      };
    case user_types.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case user_types.CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: null,
      };

    case user_types.LOGOUT_USER:
      return {
        ...state,
        loading: false,
        user_credentials: null,
      };

    case user_types.UPDATE_FIRST_TIME:
      return {
        ...state,
        loading: false,
        user_credentials: { ...state.user_credentials, firstTime: false },
      };

    default:
      return state;
  }
};
