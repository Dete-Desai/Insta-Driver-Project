import React, { useEffect, useRef, useState } from "react";
import tickMark from "../../../../dist/icons/tick-mark.png";
import tickBlack from "../../../../dist/icons/tick-black.png";
import deleteIcon from "../../../../dist/icons/delete.png";
import singleTick from "../../../../dist/icons/single-tick.png";
import MessageDelete from "../MessageDelete/MessageDelete";
import { connect } from "react-redux";

export const getChatTime = (chat) => {
  if (chat) {
    let rawTime = new Date(chat.createdAt);
    let hours = rawTime.getHours();
    let minutes = rawTime.getMinutes();

    minutes = minutes <= 9 ? `0${minutes}` : minutes;

    let time;

    if (hours < 12) {
      time = `${hours <= 9 ? `0${hours}` : hours}:${minutes} a.m`;
    } else {
      time = `${hours}:${minutes} p.m`;
    }
    return time;
  }
};

export const displayTicks = (chat) => {
  if (chat) {
    switch (chat.read) {
      case true:
        return <img src={tickMark} alt="" />;
      // case false:
      //   return <img src={tickBlack} alt="" />;
      default:
        return <img src={singleTick} alt="" />;
    }
  }
};

const ChatBody = (props) => {
  const [deleteChatModalIsOpen, setDeleteChatModalIsOpen] = React.useState(
    false
  );

  const [deleteChat, setDeleteChat] = useState(null);

  const messagesEndRef = useRef();

  const chats = props.chats;

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({
      block: "nearest",
      inline: "start",
    });
  };

  function modalIsOpen() {
    setDeleteChatModalIsOpen(true);
  }

  function modalIsClose() {
    setDeleteChatModalIsOpen(false);
  }

  const handleDeleteChat = (e, chat) => {
    setDeleteChat(chat);
  };

  const isFileUrl = (s) => {
    const exts = ["png", "jpg", "jpeg", "doc", "pdf", "mp3", "mp4"];
    const s_array = s.split(".");
    if (
      s.indexOf("https://") !== -1 &&
      exts.includes(s_array[s_array.length - 1])
    ) {
      return [true, s_array[s_array.length - 1]];
    }
    return [false, false];
  };

  const deletable = (c) => {
    const currentHour = new Date().getHours();
    const chatHour = new Date(c.createdAt).getHours();
    if (Math.abs(currentHour - chatHour) >= 24) {
      return false;
    }
    return true;
  };

  const wrapMessage = (message) => {
    if (message) {
      const img_exts = ["png", "jpeg", "jpg"];
      const doc_exts = ["doc", "docx", "pdf"];
      const audio_exts = ["mp3"];
      const video_exts = ["mp4"];
      const t = isFileUrl(message);
      if (t[0]) {
        if (img_exts.includes(t[1])) {
          return <img width="150px" src={message} alt="" />;
        }
        if (doc_exts.includes(t[1])) {
          return <iframe src={message} width="150px" height="150px"></iframe>;
        }

        if (audio_exts.includes(t[1])) {
          return (
            <audio controls src={message}>
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          );
        }

        if (video_exts.includes(t[1])) {
          return (
            <video controls width="250">
              <source src={message} type="video/webm" />
              Sorry, your browser doesn't support embedded videos.
            </video>
          );
        }
      } else {
        return <>{message}</>;
      }
    }
  };

  const { user } = props;

  if (chats === null) {
    return null;
  }
  return (
    <div className="chatBody chatBox-style p-4">
      {chats &&
        chats.length > 0 &&
        chats.map((chat, idx) => {
          return (
            <React.Fragment>
              {" "}
              <div key={chat._id}>
                <div className={`d-flex align-items-center`}>
                  <div
                    className={`d-flex align-items-center ${
                      chat.sender === user.id
                        ? `ml-auto justify-content-end`
                        : `mr-auto justify-content-start`
                    }`}
                  >
                    <small
                      className={`text-box p-4 mt-5 chat-text ${
                        chat.sender === user.id ? "bg-pink" : "bg-blue"
                      }`}
                      style={{
                        width: "fit-content",
                        maxWidth: "450px",
                        wordWrap: "break-word",
                      }}
                    >
                      {wrapMessage(chat.message)}
                    </small>
                    <button
                      onClick={modalIsOpen}
                      className="btn bg-none chat-delete-btn"
                    >
                      {chat.sender === user.id && deletable(chat) ? (
                        <img
                          className="mt-5 ml-2"
                          src={deleteIcon}
                          onClick={(e) => handleDeleteChat(e, chat)}
                          alt=""
                        />
                      ) : null}
                    </button>
                  </div>
                </div>
                <div
                  className={`${
                    chat.sender === user.id ? `text-right` : `text-left`
                  } mt-3`}
                >
                  <span
                    style={{ color: "#C4C4C4" }}
                    className=" font-weight-bold"
                  >
                    {chat && getChatTime(chat)}
                    {chat.sender === user.id ? displayTicks(chat) : null}
                  </span>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      <MessageDelete
        deleteChatModalIsOpen={deleteChatModalIsOpen}
        chat={deleteChat}
        modalIsClose={modalIsClose}
      />
      <div ref={messagesEndRef} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    chats: state.inbox_reducers.chats,
    user: state.user_reducers.user_credentials,
  };
};

export default connect(mapStateToProps)(ChatBody);
