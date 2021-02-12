import React, { useContext, useState, useEffect } from "react";
import attachment from "../../../../dist/icons/Attachment.png";
import emojiIcon from "../../../../dist/icons/emoji.png";
import mic from "../../../../dist/icons/mic.png";
import send from "../../../../dist/icons/send.png";
import videoIcon from "../../../../dist/icons/videoIcon.png";
import photoIcon from "../../../../dist/icons/photo.png";
import fileIcon from "../../../../dist/icons/file.png";
import { Recorder } from "react-voice-recorder";
import "react-voice-recorder/dist/index.css";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import { UserContext } from "../../MainBody/MainBody";
import { connect } from "react-redux";
import {
  addChat,
  createNewChat,
  setNewChatShow,
  uploadFile,
} from "../../../../redux/actions/inbox_actions";
import { ViewDaySharp } from "@material-ui/icons";

const ChatFooter = (props) => {
  // const { closeChat } = useContext(UserContext);

  const { chatProfile, user, newChat } = props;
  const [recordShow, setRecordShow] = useState("");
  const [emojiShow, setEmojiShow] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {}, [chatProfile]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const addEmoji = (e) => {
    let emoji = e.native;
    setText(text + emoji);
  };

  const handleFileUpload = (e) => {
    let upload = window.confirm(
      "Upload this file? Do not interrupt the process!"
    );
    if (upload) {
      const data = new FormData();
      data.append("chatId", chatProfile.chatId);
      data.append("receiver", chatProfile.id);
      data.append("file", e.target.files[0]);
      props.uploadFile(data, user.token);
    }

    console.log(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // postMessage(this.state)   //send to backend
    if (text.length === 0) {
      return;
    }
    setText(""); //reset input field to empty
    if (props.action === "patch") {
      props.addChat(user.token, {
        receiver: chatProfile.id,
        message: text,
        read: null,
        createdAt: new Date(),
        sender: user.id,
        chatId: chatProfile.chatId,
      });
    } else if (props.action === "post") {
      newChat["init_message"] = text;
      props.setNewChatShow(false);
      props.createNewChat(user.token, {
        ...newChat,
      });
    }
  };

  const [audioDetails, setAudioDetails] = useState({
    url: null,
    blob: null,
    chunks: null,
    duration: {
      h: 0,
      m: 0,
      s: 0,
    },
  });

  const handleAudioStop = (data) => {
    console.log(data);
    setAudioDetails(data);
  };

  const handleAudioUpload = (file) => {
    console.log(file);
  };

  const handleRest = () => {
    const reset = {
      url: null,
      blob: null,
      chunks: null,
      duration: {
        h: 0,
        m: 0,
        s: 0,
      },
    };
    setAudioDetails(reset);
  };

  return (
    <div
      className="chatFooter mt-4  mt-auto"
      // style={{ marginTop: "auto" }}
    >
      <div className="chatFooter__input px-2 pt-2 w-100">
        <form onSubmit={handleSubmit}>
          <textarea
            value={text}
            onChange={handleChange}
            style={{ height: "164px" }}
            className="form-control input__style w-100 border-0"
            placeholder="Type a message"
            name="message"
            id="message"
          ></textarea>
        </form>
      </div>
      <div className="chatFoot__bottom d-flex justify-content-between align-items-center">
        <div className="chatFooter__left d-flex justify-content-between align-items-center">
          <div className="dropdown">
            <button
              className="btn"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="btn iconBtn">
                <img className="mr-3" src={attachment} alt="" />
              </span>
            </button>
            <div
              style={{ left: "-10px !important" }}
              className="dropdown-menu"
              aria-labelledby="dropdownMenuButton"
            >
              <div id="InputFile" className="py-3 pr-5 pl-4">
                <form action="/action_page.php">
                  <div className="file_photo">
                    <label for="img" className="custom-file-upload">
                      <img className="mr-2" src={photoIcon} alt="" />
                      <span> Attach Photo</span>
                    </label>
                    <input
                      type="file"
                      id="img"
                      name="img"
                      accept="image/*"
                      onChange={handleFileUpload}
                    />
                  </div>
                  <div className="file_video">
                    <label for="video" className="custom-file-upload">
                      <img className="mr-2" src={videoIcon} alt="" />
                      <span> Attach Video</span>
                    </label>
                    <input
                      type="file"
                      id="video"
                      name="video"
                      accept="video/*"
                      onChange={handleFileUpload}
                    />
                  </div>
                  <div className="file_doc">
                    <label for="file_extension" className="custom-file-upload">
                      <img className="mr-2" src={fileIcon} alt="" />
                      <span> Attach Document</span>
                    </label>
                    <input
                      type="file"
                      id="file_extension"
                      name="file_extension"
                      accept=".doc,.docx,.pdf"
                      onChange={handleFileUpload}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>

          <span
            onClick={() => setEmojiShow(emojiShow ? "" : "show")}
            className="btn iconBtn"
          >
            <img className="mr-3" src={emojiIcon} alt="" />
          </span>
          <span
            // onClick={() => setRecordShow(recordShow ? "" : "show")}
            className="btn iconBtn"
          >
            <img className="mr-3" src={mic} alt="" />
          </span>
          {emojiShow && (
            <Picker onSelect={addEmoji} emojiTooltip={true} title="weChat" />
          )}
          {recordShow && (
            <div className="mic-container">
              <Recorder
                record={true}
                handleAudioStop={(data) => handleAudioStop(data)}
                handleAudioUpload={(data) => handleAudioUpload(data)}
                handleRest={() => handleRest()}
                audioURL={audioDetails.url}
                showUIAudio
              />
            </div>
          )}
        </div>
        <div className="chatFooter__right ">
          <button className="sendIcon btn" type="submit" onClick={handleSubmit}>
            <img className="" src={send} alt="" />
          </button>
        </div>
        {chatProfile && chatProfile.closeChat && (
          <div className="chatClose w-100 position-absolute d-flex justify-content-between">
            <div className="w-50"></div>
            <div className="chatClose2 w-50 d-flex align-items-center">
              <p className="text-white px-3 w-75 ml-auto ">
                This chat has been closed.You cannot exchange messages. However,
                you can open a new chat to start a new conversation
              </p>
            </div>
          </div>
        )}

        {chatProfile && chatProfile.guestChat && (
          <div className="guestChat w-100 position-absolute d-flex justify-content-between">
            <div className="w-50"></div>
            <div className="guestChat2 w-50 d-flex align-items-center">
              <p className="text-white px-3 w-75 ml-auto ">
                You cannot reply to a guest user because he has no account on
                Instadriver. To reach out to the guest user,use the contact
                provided by tapping the "Contact Info" above.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user_reducers.user_credentials,
    chatProfile: state.inbox_reducers.chatProfile,
    newChat: state.inbox_reducers.newChat,
  };
};

export default connect(mapStateToProps, {
  addChat,
  createNewChat,
  setNewChatShow,
  uploadFile,
})(ChatFooter);
