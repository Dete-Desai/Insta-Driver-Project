import React from "react";
import ChatListHeader from "../../components/Inbox/ChatList/ChatListHeader/ChatListHeader";
import ChatListBody from "../../components/Inbox/ChatList/ChatListBody/ChatListBody";
import Chat from "../../components/Inbox/Chat/Chat/Chat";
import EmployerSideBar from "../../components/Layout/MainSideBar/Employer/EmployerSideBar";

const MainBody = () => {
  return (
    <div style={{ backgroundColor: "#F5F5F5" }} className="mainBody">
      <div className="row">
        <div className="mainBody__sidebar col-md-2">
          <EmployerSideBar />
        </div>
        <div className="mainBody__chatList col-md-4 px-2 py-4">
          <div className="container-fluid px-0 pl-2">
            <ChatListHeader />
            <ChatListBody />
          </div>
        </div>
        <div className="mainBody__chat col-md-6 px-2 py-4">
          <div className="container-fluid px-0 pr-4">
            <div className="mainBody__chatBody">
              <Chat />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
