import React, { createContext, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ChatListHeader from "../ChatList/ChatListHeader/ChatListHeader";
import ChatListBody from "../ChatList/ChatListBody/ChatListBody";
import Chat from "../Chat/Chat/Chat";
import EmployerSideBarFunction from "../../Layout/MainSideBar/Employer/EmployerSideBarFunction";
// import EmployerSideBar from '../../Layout/MainSideBar/Employer/EmployerSideBar';

export const UserContext = createContext();

const MainBody = () => {
  const [closeChat, setCloseChat] = useState("");
  const [title] = useState("employer");
  // const [employer] = useState("employer, comrade")
  // const [title, setTitle] = useState("professional")

  const credentials = useSelector(
    (state) => state.user_reducers.user_credentials
  );

  const history = useHistory();

  if (!credentials) {
    let route = "/login-user";
    history.push(route);
  }

  return (
    <UserContext.Provider value={{ closeChat, setCloseChat, title }}>
      <div className="mainBody">
        <EmployerSideBarFunction />
        <div className="row">
          <div className="col-md-4 col-lg-2"></div>
          <div className="mainBody__chatList col-md-8 col-lg-4 px-2 py-4">
            <div className="container-fluid px-0 pl-2">
              <ChatListHeader />
              <ChatListBody />
            </div>
          </div>
          <div className="mainBody__chat col-md-12 col-lg-6 px-2 py-4">
            <div className="px-0 pr-4">
              <div className="mainBody__chatBody">
                <Chat />
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default MainBody;
