import React, { useContext, useRef } from "react";
import ChatFooter from "../ChatFooter/ChatFooter";
import avator from "../../../../dist/images/avator.png";
import editImg from "../../../../dist/icons/editImg.png";
import contactImg from "../../../../dist/icons/i.png";
import dots from "../../../../dist/icons/dots.png";
import SearchFilter from "../../ChatList/SearchFilter/SearchFilter";
import onlineIndicator from "../../../../dist/icons/online.svg";
import comradeChat from "../../../../dist/icons/comradeChat.svg";
import briefcase from "../../../../dist/icons/briefcase.svg";
import { UserContext } from "../../MainBody/MainBody";
import { connect } from "react-redux";
import { setInquiry } from "../../../../redux/actions/inbox_actions";

const NewUserChat = (props) => {
  const { title } = useContext(UserContext);
  const { newChat } = props;
  const inputRef = useRef();

  const handleChange = (e) => {
    props.setInquiry(inputRef.current.value);
  };

  return (
    <>
      <div className="chat mt-2" style={{ zIndex: "1000", background: "#fff" }}>
        <div className="search__autoComplete position-absolute">
          <SearchFilter />
        </div>
        <div className="">
          <div className="chat__header d-flex align-items-center justify-content-between p-2">
            <div className="chat__headerLeft">
              <img
                className=""
                src={newChat ? newChat.avatar : avator}
                alt=""
                className="rounded-circle"
                height="60px"
                width="60px"
              />
              <div>
                <h6
                  style={{ color: "#3B3B3B", fontSize: "12px" }}
                  className="font-weight-bold mb-0"
                >
                  {newChat
                    ? `${newChat.firstname}  ${newChat.lastname}`
                    : "XXXXXXX"}
                </h6>
                <small className="text-muted">
                  {newChat ? newChat.username : "@xxxxxx"}
                </small>
              </div>
            </div>
            <div className="chat__headerInfo container-fluid px-2">
              {newChat && newChat.role === "DRIVER" && (
                <div className="ml-5">
                  <span>
                    <img className="" src={onlineIndicator} alt="" />
                  </span>
                </div>
              )}
              {newChat && newChat.role === "EMPLOYER" && (
                <div className="w-100 userInputBox d-flex justify-content-between">
                  <form className="w-100 pl-2" action="">
                    <input
                      className="form-control w-100 userInput border-0"
                      placeholder="New Chat I initiated Today 17th Oct "
                      type="text"
                      ref={inputRef}
                      onChange={handleChange}
                    />
                  </form>
                  <img className="img-fluid editImg" src={editImg} alt="" />
                </div>
              )}
            </div>
            <div className="chat__headerRight d-flex justify-content-between">
              <button className="btn contact-btn">
                <img className="mr-1 mb-1" src={contactImg} alt="" />
                Contact Info
              </button>
              <button className="btn">
                <img src={dots} alt="" />
              </button>
            </div>
          </div>
          {newChat && newChat.role === "DRIVER" && (
            <div className="bg-deep py-1 d-flex">
              <span className="text-left ml-3">
                <img src={comradeChat} alt="" />
              </span>
              <span className="text-white m-auto">
                This is a Comrade chat. You can be casual and free as you want
              </span>
            </div>
          )}
          {newChat && newChat.title === "EMPLOYER" && (
            <div>
              <div className="bg-pinkLike py-1 d-flex">
                <span className="text-left ml-4">
                  <img src={briefcase} alt="" />
                </span>
                <span className="text-white m-auto">
                  This is a Professional chat. Being formal and professional is
                  good
                </span>
              </div>
              <div className="d-flex bg-white px-3">
                <span>
                  <img className="pt-1" src={onlineIndicator} alt="" />
                </span>
                {/* <span className="ml-auto">
                  <p className="id">Chat ID: 3362Gd2</p>
                </span> */}
              </div>
            </div>
          )}
          <div className="chat__body"></div>
          <div className="chat__footer p-4">
            <ChatFooter action="post" />
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    newChat: state.inbox_reducers.newChat,
  };
};

export default connect(mapStateToProps, { setInquiry })(NewUserChat);
