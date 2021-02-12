import * as actionTypes from '../../types/livestream_types';

const playlist = [
  {
    id: 1,
    url:
      'https://player.vimeo.com/external/458885655.sd.mp4?s=429a8b79b990daea261bf6ef6ef8f85472e343cd&profile_id=165&oauth2_token_id=57447761',
  },
  {
    id: 2,
    url:
      'https://player.vimeo.com/external/428012688.sd.mp4?s=21be0a848f00a5210af73d738a773e9f4414ba4a&profile_id=165&oauth2_token_id=57447761',
  },
  {
    id: 3,
    url:
      'https://player.vimeo.com/external/373288088.sd.mp4?s=927ec16e376afc1747880a81ae961ded77d972ac&profile_id=165&oauth2_token_id=57447761',
  },
  {
    id: 4,
    url:
      'https://player.vimeo.com/external/327966481.sd.mp4?s=45f6472b7889b733fe3fb1f3b0b881213f3b45a1&profile_id=164&oauth2_token_id=57447761',
  },
  {
    id: 5,
    url:
      'https://player.vimeo.com/external/458885655.sd.mp4?s=429a8b79b990daea261bf6ef6ef8f85472e343cd&profile_id=165&oauth2_token_id=57447761',
  },
  {
    id: 6,
    url:
      'https://player.vimeo.com/external/428012688.sd.mp4?s=21be0a848f00a5210af73d738a773e9f4414ba4a&profile_id=165&oauth2_token_id=57447761',
  },
]; 

const initialState = {
  videos: playlist,
  video: null
};

const videoReducer = (state=initialState,action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CURR_VIDEO:
      return {
        ...state,
        video: action.payload
      };
    default:
      return state;
  }
}

export default videoReducer;