import * as actionTypes from '../../types/livestream_types';

export const changeVideo = (videoId, url) => dispatch => {
  dispatch({
    type: actionTypes.CHANGE_CURR_VIDEO,
    payload: { videoId, url }
  });
}