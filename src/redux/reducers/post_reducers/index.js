import * as post_types from "../../types/post_types";

const initialState = {
  loading: false,
  error: "",
  success: "",
  posts: [],
  posts_photos: [],
  posts_videos: [],
  posts_documents: [],
};

export const posts_reducer = (state = initialState, action) => {
  switch (action.type) {
    case post_types.CREATE_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case post_types.CREATE_POST_SUCCESS:
      const allPosts =
        state.posts && state.posts.length > 0
          ? [...state.posts, action.payload]
          : [action.payload];

      return {
        ...state,
        posts: allPosts,
      };

    case post_types.CREATE_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case post_types.GET_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case post_types.GET_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };

    case post_types.GET_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case post_types.DELETE_POST_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case post_types.DELETE_POST_SUCCESS: {
      return {
        ...state,
        loading: false,
        posts: state.posts.filter((post) => post.id != action.payload),
      };
    }

    case post_types.DELETE_POST_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    case post_types.UPLOAD_POST_PHOTO_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case post_types.UPLOAD_POST_PHOTO_SUCCESS:
      const photos =
        state.posts_photos && state.posts_photos.length > 0
          ? [...state.posts_photos, action.payload]
          : [action.payload];

      return {
        ...state,
        loading: false,
        posts_photos: photos,
      };

    case post_types.UPLOAD_POST_PHOTO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case post_types.GET_POST_PHOTOS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case post_types.GET_POST_PHOTOS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts_photos: action.payload,
      };

    case post_types.GET_POST_PHOTOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case post_types.UPLOAD_POST_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case post_types.UPLOAD_POST_VIDEO_SUCCESS:
      const videos =
        state.posts_videos && state.posts_videos.length > 0
          ? [...state.posts_videos, action.payload]
          : [action.payload];

      return {
        ...state,
        loading: false,
        posts_videos: videos,
      };

    case post_types.UPLOAD_POST_VIDEO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case post_types.GET_POST_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case post_types.GET_POST_VIDEOS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts_photos: action.payload,
      };

    case post_types.GET_POST_VIDEOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case post_types.UPLOAD_POST_DOCUMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case post_types.UPLOAD_POST_DOCUMENT_SUCCESS:
      const documents =
        state.posts_documents && state.posts_documents.length > 0
          ? [...state.posts_documents, action.payload]
          : [action.payload];

      return {
        ...state,
        loading: false,
        posts_documents: documents,
      };

    case post_types.UPLOAD_POST_DOCUMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case post_types.GET_POST_DOCUMENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case post_types.GET_POST_DOCUMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts_documents: action.payload,
      };

    case post_types.GET_POST_DOCUMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
