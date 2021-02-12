import * as inbox_types from "../../types/inbox_types";
import { PostRoute } from "../../../Api";
import { getAuthConfig } from "../../../Util/ApiUtils";

const { Post, Get, Delete, Patch } = PostRoute();

export const sendAuthMessage = (token, formData) => async (dispatch) => {
  let config = getAuthConfig(token);
  try {
    const response = await Post("/inbox/create", formData, config);
    console.log(response);
  } catch (error) {
    console.log("Error in submitting user message", error);
  }
};

export const sendUnAuthMessage = (formData) => async (dispatch) => {
  try {
    const response = await Post("/inbox/create/guest-chat", formData, {});
    console.log(response);
  } catch (error) {
    console.log("Error in submitting user message", error);
  }
};

export const updateChatProfile = (data) => async (dispatch) => {
  dispatch({
    type: inbox_types.UPDATE_CHAT_PROFILE,
    data: data,
  });
};

export const loadChatProfiles = (token) => async (dispatch) => {
  let config = getAuthConfig(token);
  try {
    const response = await Get("/inbox/chats", config);
    dispatch({
      type: inbox_types.LOAD_CHAT_PROFILES,
      data: response.data.response_data,
    });
  } catch (error) {
    console.log("Error fetchinh chat profiles", error);
  }
};

export const createNewChat = (token, data) => async (dispatch) => {
  let config = getAuthConfig(token);
  try {
    const response = await Post("/inbox/create", data, config);
    if (response.data.response_code === 200) {
      dispatch({ type: inbox_types.UNSET_NEW_CHAT });
      dispatch({ type: inbox_types.CREATE_CHAT });
    }
  } catch (error) {
    dispatch({ type: inbox_types.UNSET_NEW_CHAT });
    console.log("Error creating new chat", error);
  }
};

export const unsetChats = () => (dispatch) => {
  dispatch({ type: inbox_types.UNSET_CHATS });
};

export const loadChats = (chatId, token) => async (dispatch) => {
  dispatch({ type: inbox_types.UNSET_CHATS });
  const config = getAuthConfig(token);
  try {
    const response = await Get(`/inbox/chats/${chatId}`, config);
    if (response.data.response_code === 200) {
      dispatch({
        type: inbox_types.LOAD_CHATID_CHATS,
        data: response.data.response_data.messages,
      });
    }
  } catch (error) {
    console.log("Error in loading chats", error);
  }
};

export const deleteChat = (token, c, id) => async (dispatch) => {
  const config = getAuthConfig(token);
  try {
    dispatch({ type: inbox_types.DELETE_CHAT, data: c });
    await Delete(`/inbox/chats/${id}/${c._id}`, config);
  } catch (error) {
    console.log("Error deleting chat", error);
  }
};

export const addChat = (token, chat) => async (dispatch) => {
  const config = getAuthConfig(token);
  try {
    dispatch({ type: inbox_types.ADD_CHAT, data: chat });
    await Post(
      `/inbox/chats/${chat.chatId}`,
      { receiver: chat.receiver, message: chat.message },
      config
    );
  } catch (error) {
    console.log("Error adding chat message", error);
  }
};

export const deleteWholeChat = (token) => async (dispatch, getState) => {
  dispatch({ type: inbox_types.UNSET_CHATS });
  const config = getAuthConfig(token);

  try {
    const currentChatId = getState().inbox_reducers.chatProfile.chatId;
    const response = await Delete(`/inbox/chats/${currentChatId}`, config);
    if (response.data.response_code === 200) {
      dispatch({ type: inbox_types.DELETE_WHOLE_CHAT });
    }
  } catch (error) {
    console.log("Error deleting chat", error);
  }
  // make the backend request
};

export const updateNewChatSearchResults = (data) => (dispatch) => {
  dispatch({ type: inbox_types.NEW_CHAT_SEARCH_RESULTS, data: data });
};

export const setInquiry = (data) => (dispatch) => {
  dispatch({ type: inbox_types.SET_INQUIRY, data: data });
};
export const setNewChatShow = (val) => (dispatch) => {
  dispatch({ type: inbox_types.SET_SHOW_NEW_CHAT, data: val });
};

export const unSetChatProfile = () => (dispatch) => {
  dispatch({ type: inbox_types.UNSET_CHATPROFILE });
};

export const uploadFile = (data, token) => async (dispatch) => {
  const config = getAuthConfig(token);
  const id = data.get("chatId");

  try {
    const response = await Post(`/upload/chats/${id}`, data, config);
    if (response.data.response_code === 200) {
      console.log("Wow");
      // dispatch({ type: inbox_types.UNSET_CHATS });
      try {
        const response = await Get(`/inbox/chats/${id}`, config);
        if (response.data.response_code === 200) {
          dispatch({
            type: inbox_types.LOAD_CHATID_CHATS,
            data: response.data.response_data.messages,
          });
        }
      } catch (error) {
        console.log("Error in loading chats", error);
      }
    }
  } catch (error) {
    console.log("Error uploading file ", error);
  }
};

export const closeChat = (chatId, token) => async (dispatch) => {
  // console.log(chatId);
  // console.log(token);
  dispatch({ type: inbox_types.CLOSE_CHAT });
  const config = getAuthConfig(token);
  try {
    await Patch(`/inbox/chats/${chatId}/close`, {}, config);
  } catch (error) {
    console.log("Error is ", error);
  }
};

export const unsetCloseChat = () => (dispatch) => {
  dispatch({ type: inbox_types.UNSET_CLOSE_CHAT });
};
