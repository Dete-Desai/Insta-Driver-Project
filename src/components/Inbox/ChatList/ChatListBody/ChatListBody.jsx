import React, { useEffect, useState } from "react";
import { chatProfilesData, chatsData } from "../../StaticData/ChatData";
import ChatBox from "../ChatBox/ChatBox";
import { connect } from "react-redux";
import {
  loadChats,
  updateChatProfile,
  loadChatProfiles,
  unsetChats,
  unSetChatProfile,
} from "../../../../redux/actions/inbox_actions";

function reverseArr(input) {
    var ret = new Array;
    for(var i = input.length-1; i >= 0; i--) {
        ret.push(input[i]);
    }
    return ret;
}

const ChatListBody = (props) => {
  const { chatProfiles, n } = props;
  // const { n } = props;
  useEffect(() => {
    props.unSetChatProfile();
    props.unsetChats();
    if (props.user) {
      props.loadChatProfiles(props.user.token);
    }
  }, [n]); // change in n should trigger rerender here

  console.log(chatProfiles);

  return (
    <>
      {!chatProfiles ? null : chatProfiles.length === 0 ? (
        <div className="chatListBody shadow mt-4 d-flex justify-content-center align-items-center">
          <h2 className="text-muted">No Message</h2>
        </div>
      ) : (
        <div className="chatListBody overflow-auto shadow mt-4">
          {chatProfiles &&
            reverseArr(chatProfiles).map((data) => <ChatBox data={data} key={data._id} />)}
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    chatProfiles: state.inbox_reducers.chatProfiles,
    n: state.inbox_reducers.n,
    user: state.user_reducers.user_credentials,
  };
};

export default connect(mapStateToProps, {
  loadChats,
  updateChatProfile,
  loadChatProfiles,
  unsetChats,
  unSetChatProfile,
})(ChatListBody);
