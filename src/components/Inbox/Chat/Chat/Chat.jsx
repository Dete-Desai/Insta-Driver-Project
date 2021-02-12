import React, { useContext, useEffect, useState } from "react";
import ChatBody from "../ChatBody/ChatBody";
import ChatFooter from "../ChatFooter/ChatFooter";
import NewUserChat from "../NewUserChat/NewUserChat";
import { chatProfilesData } from "../../StaticData/ChatData";
// import ChatHeader from "../ChatHeader/ChatHeader";
import avator from "../../../../dist/images/avator.png";
import ContactInfo from "../ContactInfo/ContactInfo";
import ThreeDotMenu from "../ThreeDotMenu/ThreeDotMenu";
import SearchFilter from "../../ChatList/SearchFilter/SearchFilter";
import comradeChat from "../../../../dist/icons/comradeChat.svg";
import briefcase from "../../../../dist/icons/briefcase.svg";
import onlineIndicator from "../../../../dist/icons/online.svg";
import { UserContext } from "../../MainBody/MainBody";
import { connect } from "react-redux";
import {
  setNewChatShow,
  unsetCloseChat,
} from "../../../../redux/actions/inbox_actions";
import { displayProfileImage } from "../ChatHeader/ChatHeader";
import { showLastMessage } from "../../ChatList/ChatBox/ChatBox";

const Chat = (props) => {
  const { title } = useContext(UserContext);
  const [newChatShow, setNewChatShow] = useState(false);
  const { chatProfile, chats, newChat } = props;

  const handleClick = (e, val = null) => {
    e.preventDefault();
    props.unsetCloseChat();
    if (props.showNewChat) {
      props.setNewChatShow(false);
    } else {
      props.setNewChatShow(true);
    }
    // setNewChatShow(!newChatShow);
  };

  return (
    <>
      {!chats ? (
        <div>
          <div className="mainBody__chatTop text-right">
            <button onClick={handleClick} className="btn chat__btn">
              + Start a new chat
            </button>
          </div>
          {props.showNewChat && <NewUserChat />}
        </div>
      ) : (
        // !newChatShow && (
        <React.Fragment>
          <div className="chats-container">
            <div className="search__autoComplete position-absolute mt-5">
              <SearchFilter />
            </div>
            <div className="chats-container">
              <div className="chat__head">
                {/* <ChatHeader /> */}
                <>
                  <div className="mainBody__chatTop text-right">
                    <button onClick={handleClick} className="btn chat__btn">
                      + Start a new chat
                    </button>
                  </div>
                  {props.showNewChat ? (
                    <NewUserChat />
                  ) : (
                    // chats.length > 0 && (
                    <React.Fragment>
                      <div className="chat__header d-flex align-items-center justify-content-between mt-4 p-2">
                        <div className="chat__headerLeft">
                          <img
                            className="rounded-circle ml-4"
                            src={
                              chatProfile &&
                              displayProfileImage(chatProfile, newChat)
                            }
                            alt=""
                            height="70px"
                            width="70px"
                          />
                          <div className="mt-2">
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
                            <p className="text-center">
                            
                            <small >
                              {chatProfile && chatProfile.guestChat
                                ? "GUEST"
                                : chatProfile.nameId}
                            </small>
                            </p>
                          </div>
                        </div>
                        <div className="chat__headerInfo container-fluid">
                          {chatProfile && chatProfile.role === "DRIVER" && (
                            <div className="ml-5">
                              <span>
                                <img
                                  className=""
                                  src={onlineIndicator}
                                  alt=""
                                />
                              </span>
                              <p>
                                {showLastMessage(
                                  chatProfile.last_message.message
                                )}
                              </p>
                            </div>
                          )}
                          {chatProfile && chatProfile.role === "EMPLOYER" && (
                            <h5
                              style={{
                                color: "#4B4747",
                                // fontSize: "15px",
                                textTransform: "capitalize",
                              }}
                              className="font-weight-bold ml-3"
                            >
                              {chatProfile && chatProfile.inquiry_type}
                            </h5>
                          )}
                          {chatProfile && chatProfile.role === "GUEST" && (
                            <h5
                              style={{
                                color: "#4B4747",
                                // fontSize: "15px",
                                textTransform: "capitalize",
                              }}
                              className="font-weight-bold ml-3"
                            >
                              {chatProfile && chatProfile.inquiry_type}
                            </h5>
                          )}
                        </div>
                        <div className="chat__headerRight d-flex justify-content-between">
                          <ContactInfo />
                          <ThreeDotMenu />
                        </div>
                      </div>
                    </React.Fragment>
                  )}
                </>
              </div>
              {chatProfile &&
                chatProfile.role === "DRIVER" &&
                !props.showNewChat && (
                  <div className="bg-deep py-1 d-flex bg-dark">
                    <span className="text-left ml-3">
                      <img src={comradeChat} alt="" />
                    </span>
                    <span className="text-white m-auto">
                      This is a Comrade chat. You can be casual and free as you
                      want
                    </span>
                  </div>
                )}
              {chatProfile &&
                chatProfile.role === "EMPLOYER" &&
                !props.showNewChat && (
                  <div className="bg-dark">
                    <div className="bg-pinkLike py-1 d-flex">
                      <span className="text-left ml-4">
                        <img src={briefcase} alt="" />
                      </span>
                      <span className="text-white m-auto">
                        This is a Professional chat. Being formal and
                        professional is good
                      </span>
                    </div>
                    <div className="d-flex bg-white px-3">
                      <span>
                        <img className="pt-1" src={onlineIndicator} alt="" />
                      </span>
                      <span className="ml-auto">
                      {chatProfile.guestChat ? (
              
                        <p className="guest">Guest Message</p>
                      ) : (
                        <p className="id">
                                  Chat ID: {chatProfile && chatProfile.chatId}
                                </p>
                      )}
                       
                      </span>
                    </div>
                  </div>
                )}

                {chatProfile &&
                chatProfile.role == "GUEST" &&
                !props.showNewChat && (
                  <div className="bg-dark">
                    {/* <div className="bg-pinkLike py-1 d-flex">
                      <span className="text-left ml-4">
                        <img src={briefcase} alt="" />
                      </span>
                      <span className="text-white m-auto">
                        This is a Professional chat. Being formal and
                        professional is good
                      </span>
                    </div> */}
                    <div className="d-flex bg-white px-3">
                      {/* <span>
                        <img className="pt-1" src={onlineIndicator} alt="" />
                      </span> */}
                      <span className="ml-auto">
                      {chatProfile.guestChat ? (
              
                        <p className="guest">Guest Message</p>
                      ) : (
                        <p className="id">
                                  Chat ID: {chatProfile && chatProfile.chatId}
                                </p>
                      )}
                       
                      </span>
                    </div>
                  </div>
                )}
              {!props.showNewChat && (
                <React.Fragment>
                  <div className="chat__body">
                    <ChatBody />
                  </div>
                  <div className="chat__footer">
                    <div className="chat__footer bg-white p-4">
                      <ChatFooter action="patch" />
                    </div>
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
        </React.Fragment>
        // )
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    chatProfile: state.inbox_reducers.chatProfile,
    chats: state.inbox_reducers.chats,
    user: state.user_reducers.user_credentials,
    showNewChat: state.inbox_reducers.showNewChat,
    newChat: state.inbox_reducers.newChat,
  };
};

export default connect(mapStateToProps, { setNewChatShow, unsetCloseChat })(
  Chat
);
