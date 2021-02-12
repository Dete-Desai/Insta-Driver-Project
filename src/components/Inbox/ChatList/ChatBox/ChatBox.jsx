import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  loadChats,
  updateChatProfile,
  setNewChatShow,
} from "../../../../redux/actions/inbox_actions";
import avator from "../../../../dist/images/avator.png";
import file from "../../../../dist/icons/file.png";
import { message } from "antd";
import { getChatTime } from "../../Chat/ChatBody/ChatBody";

export const showLastMessage = (message) => {
  const exts = ["png", "jpg", "jpeg", "doc", "pdf", "mp3", "mp4"];
  if (message) {
    const sections = message.split("/");

    if (
      message.indexOf("https://") !== -1 &&
      exts.includes(sections[sections.length - 1].split(".")[1])
    ) {
      return (
        <span className="mt-2">
          <img src={file} alt="" height="20px" widht="20px" />{" "}
          {sections[sections.length - 1]}
        </span>
      );
    }
    return message;
  }
};

// #914a9c

const ChatBox = (props) => {
  const { user, chatProfile } = props;
  const {
    user1,
    user2,
    chatid,
    inquiry_type,
    // details,
    messages,
    close_chat,
    guest_chat,
    guest_email,
    guest_phone_number,
    // time,
    // color,
  } = props.data;

  console.log(guest_chat, guest_email, guest_phone_number);

  const [clicked, setClicked] = useState(false);

  const getChatUserProfile = (userId, user1, user2) => {
    if (user1 && user1.id === userId) {
      user2.chatId = chatid;
      user2.inquiry_type = inquiry_type;
      user2.guestChat = guest_chat;
      user2.guestEmail = guest_email;
      user2.guestPhoneNumber = guest_phone_number;
      user2.last_message = messages[messages.length - 1];
      user2.closeChat = close_chat;
      return user2;
    } else if (user2 && user2.id === userId) {
      user1.chatId = chatid;
      user1.inquiry_type = inquiry_type;
      user1.guestChat = guest_chat;
      user1.guestEmail = guest_email;
      user1.guestPhoneNumber = guest_phone_number;
      user1.last_message = messages[messages.length - 1];
      user1.closeChat = close_chat;
      return user1;
    }
  };

  const getUnreadCount = (messages) => {
    const unreads = messages.filter((message) => {
      return message.receiver === user.id && message.read === null;
    });
    return unreads.length;
  };

  const loadChatIDChats = (e, chatId) => {
    setClicked(true);
    props.setNewChatShow(false);
    props.updateChatProfile(getChatUserProfile(user.id, user1, user2));
    props.loadChats(chatId, props.user.token);
  };

  const getChatProfileChatId = (chatProfile) => {
    if (chatProfile) {
      return chatProfile.chatId;
    }
  };

  const chatUserProfile = getChatUserProfile(user.id, user1, user2);
  const lastMessage = messages && messages[messages.length - 1];
  return (
    <>
      {
        <div
          // className={
          //   chatid === chatProfile.chatId
          //     ? "d-flex box-style box-blue"
          //     : "d-flex box-gray box-style"
          // }
          className={`chat-box mb-4 d-flex ${
            chatid === getChatProfileChatId(chatProfile)
              ? "active-border d-flex"
              : `d-flex  box-style`
          }  ${
            messages && getUnreadCount(messages) > 0 
              ? `box-blue`
              : `box-gray`
          }`}
          style={{ cursor: "pointer" }}
          onClick={(e) => loadChatIDChats(e, chatid)}
        >
          <div className="col-md-4 m-auto text-center chat__left">
            <img
              src={
                chatUserProfile && chatUserProfile.avatar.length > 0
                  ? chatUserProfile.avatar
                  : avator
              }
              alt=""
              height="60px"
              width="60px"
              className="rounded-circle"
            />
            <div className="">
              <h6
                style={{ color: "#3B3B3B" }}
                className="font-weight-bold mb-0"
              >
                {chatUserProfile &&
                  `${chatUserProfile.firstname} ${chatUserProfile.lastname}`}
              </h6>
              <small className="text-muted">
                {chatUserProfile && chatUserProfile.nameId}
              </small>
            </div>
          </div>
          <div className="col-md-8 position-relative chat__right">
            <div>
              {guest_chat ? (
                <p className="guest-style">Guest Message</p>
              ) : (
                <p className="id-style">Chat ID: {chatid}</p>
              )}
            </div>
            <h6 style={{ color: "#4B4747" }} className="mt-4 font-weight-bold ">
              {inquiry_type ? inquiry_type : "Comrade chat"}
            </h6>
            <p
              style={{
                color: "#5B5B5B",
                marginBottom: "0px",
                wordWrap: "break-word",
              }}
            >
              {/* {lastMessage && lastMessage.message} */}
              {showLastMessage(lastMessage && lastMessage.message)}
            </p>
            <div className="text-right position-relative">
              {messages &&
              getUnreadCount(messages) > 0 &&
              !clicked ? (
                <>
                  <span
                    style={{ color: "#279F2C" }}
                    className="time font-weight-bold"
                  >
                    {lastMessage && getChatTime(lastMessage)}
                  </span>
                  <span className="count">
                    {messages && getUnreadCount(messages)}
                  </span>
                </>
              ) : (
                <>
                  <span
                    style={{ color: "#C4C4C4" }}
                    className="time font-weight-bold"
                  >
                    {lastMessage && getChatTime(lastMessage)}
                  </span>
                  <span></span>
                </>
              )}
            </div>
          </div>
        </div>
      }
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user_reducers.user_credentials,
    chatProfile: state.inbox_reducers.chatProfile,
  };
};

export default connect(mapStateToProps, {
  loadChats,
  updateChatProfile,
  setNewChatShow,
})(ChatBox);
