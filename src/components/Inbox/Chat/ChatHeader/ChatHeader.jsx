import React, { useContext, useState } from "react";
import img1 from "../../../../dist/images/img1.png";
import avator from "../../../../dist/images/avator.png";
import ContactInfo from "../ContactInfo/ContactInfo";
import ThreeDotMenu from "../ThreeDotMenu/ThreeDotMenu";
import onlineIndicator from "../../../../dist/icons/online.svg";
import { UserContext } from "../../MainBody/MainBody";
import { connect } from "react-redux";
import NewUserChat from "../NewUserChat/NewUserChat";
import { unsetCloseChat } from "../../../../redux/actions/inbox_actions";
import { showLastMessage } from "../../ChatList/ChatBox/ChatBox";

export const displayProfileImage = (chatProfile, newChat) => {
  if (newChat) {
    if (newChat.avatar) {
      return newChat.avatar;
    }
    return avator;
  } else {
    if (chatProfile && chatProfile.avatar.length > 0) {
      return chatProfile.avatar;
    }
    return avator;
  }
};

const ChatHeader = (props) => {
  const { title } = useContext(UserContext);
  const [newChatShow, setNewChatShow] = useState(false);
  const { chatProfile, newChat } = props;

  const handleClick = (e) => {
    e.preventDefault();
    props.unsetCloseChat();
    setNewChatShow(!newChatShow);
  };

  return (
    <>
      <div className="mainBody__chatTop text-right">
        <button onClick={handleClick} className="btn chat__btn">
          + Start a new chat
        </button>
      </div>
      {newChatShow ? (
        <NewUserChat />
      ) : (
        <div className="chat__header d-flex align-items-center justify-content-between mt-4 p-2">
          <div className="chat__headerLeft">
            <img
              className="rounded-circle"
              src={displayProfileImage(chatProfile, newChat)}
              alt=""
              height="60px"
              width="60px"
            />
            <div>
              <h6
                style={{
                  color: "#3B3B3B",
                  fontSize: "12px",
                  whiteSpace: "nowrap",
                }}
                className="font-weight-bold mb-0"
              >
                {chatProfile &&
                  `${chatProfile.firstname} ${chatProfile.lastname}`}
              </h6>
              <small>
                {chatProfile && chatProfile.guestChat
                  ? "GUEST"
                  : chatProfile.nameId}
              </small>
            </div>
          </div>
          <div className="chat__headerInfo container-fluid">
            {chatProfile && chatProfile.role === "DRIVER" && (
              <div className="ml-5">
                <span>
                  <img className="" src={onlineIndicator} alt="" />
                </span>
                {/* <p>{}</p> */}
                <p>{showLastMessage(chatProfile.last_message.message)}</p>
              </div>
            )}
            {chatProfile && chatProfile.role === "EMPLOYER" && (
              <h6
                style={{ color: "#4B4747" }}
                className="font-weight-bold"
              >
                {chatProfile && chatProfile.inquiry_type}
              </h6>
            )}
            {chatProfile && chatProfile.role === "EMPLOYER" && (
              <h6
                style={{
                  color: "#4B4747",
                  textTransform: "capitalize",
                }}
                className="font-weight-bold text-center"
              >
                {chatProfile && chatProfile.inquiry_type}
              </h6>
            )}
            {chatProfile && chatProfile.role === "GUEST" && (
              <h6
                style={{
                  color: "#4B4747",
                  fontSize: "15px",
                  textTransform: "capitalize",
                }}
                className="font-weight-bold"
              >
                {chatProfile && chatProfile.inquiry_type}
              </h6>
            )}
          </div>
          <div className="chat__headerRight d-flex justify-content-between">
            <ContactInfo />
            <ThreeDotMenu />
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    chatProfile: state.inbox_reducers.chatProfile,
    newChat: state.inbox_reducers.newChat,
  };
};

export default connect(mapStateToProps, { unsetCloseChat })(ChatHeader);
