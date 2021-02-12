import * as actionTypes from '../../types/map_types';

const initialState = {
  markers: []
}

const markersReducer = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.GET_USER_LAT_LNG:
      const marker = state.markers.find(x => x.id === action.payload.id)
      if (marker) {
        return {
          ...state,
          markers: state.markers.map(x => x.id === marker.id ? action.payload : x)
        }
      }
      return {
        ...state,
        markers: [...state.markers, action.payload]
      }
    default:
      return state;
  }
}

export default markersReducer;