import * as actionTypes from '../../types/map_types';

export const getUserLatLng = marker => (dispatch) => {
  dispatch({ 
    type: actionTypes.GET_USER_LAT_LNG,
    payload: marker
  });
}