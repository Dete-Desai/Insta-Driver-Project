import * as inbox_types from "../../types/inbox_types";

const initialState = {
  chats: null,
  chatProfiles: null,
  chatProfile: null,
  newChat: null,
  inquiry: null,
  n: 0,
  showNewChat: false,
};

const notToDelete = (chat, actionData) => {
  if (actionData._id) {
    if (actionData._id === chat._id) {
      return false;
    }
  } else if (actionData.message) {
    if (actionData.message === chat.message) {
      return false;
    }
  }
  return true;
};

export const inbox_reducers = (state = initialState, action) => {
  switch (action.type) {
    case inbox_types.LOAD_CHATID_CHATS:
      return { ...state, chats: action.data };
    case inbox_types.LOAD_CHAT_PROFILES:
      return { ...state, chatProfiles: action.data };
    case inbox_types.UPDATE_CHAT_PROFILE:
      return { ...state, chatProfile: action.data };
    case inbox_types.DELETE_CHAT:
      return {
        ...state,
        chats: state.chats.filter((chat) => {
          // return chat.message !== action.data;
          return notToDelete(chat, action.data);
        }),
      };
    case inbox_types.DELETE_WHOLE_CHAT:
      return {
        ...state,
        chats: null,
        n: state.n - 1,
      };
    case inbox_types.ADD_CHAT:
      return { ...state, chats: [...state.chats, action.data] };
    case inbox_types.SET_INQUIRY:
      return { ...state, inquiry: action.data };
    case inbox_types.NEW_CHAT_SEARCH_RESULTS:
      return { ...state, newChat: action.data };
    case inbox_types.UNSET_CHATS:
      return { ...state, chats: null };
    case inbox_types.CREATE_CHAT:
      return { ...state, n: state.n + 1, inquiry: null };
    case inbox_types.UNSET_NEW_CHAT:
      return { ...state, newChat: null };
    case inbox_types.SET_SHOW_NEW_CHAT:
      return { ...state, showNewChat: action.data };
    case inbox_types.UNSET_CHATPROFILE:
      return { ...state, chatProfile: null };
    case inbox_types.CLOSE_CHAT:
      return {
        ...state,
        n: state.n + 1,
        chatProfile: { ...state.chatProfile, closeChat: true },
      };
    case inbox_types.UNSET_CLOSE_CHAT:
      return {
        ...state,
        chatProfile: { ...state.chatProfile, closeChat: false },
      };
    default:
      return state;
  }
};
