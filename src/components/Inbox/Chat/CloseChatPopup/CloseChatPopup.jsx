import React, { useContext } from "react";
import Modal from "react-modal";
import { UserContext } from "../../MainBody/MainBody";
import { connect } from "react-redux";
import { closeChat } from "../../../../redux/actions/inbox_actions";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const CloseChatPopup = (props) => {
  const { closeChat, setCloseChat } = useContext(UserContext);
  const [chatModalIsOpen, setChatModalIsOpen] = React.useState(false);

  function modalOpen() {
    setChatModalIsOpen(true);
  }

  function modalClose() {
    setChatModalIsOpen(false);
  }
  const { chatProfile, user } = props;

  function handleCloseChat() {
    props.closeChat(chatProfile.chatId, user.token);
    setCloseChat(closeChat ? "" : "block");
    modalClose();
  }

  console.log(chatProfile.closeChat);

  return (
    <>
      <button
        disabled={chatProfile && chatProfile.closeChat}
        onClick={modalOpen}
        className="popupBox-style my-3"
      >
        {" "}
        Close Chat
      </button>
      <Modal
        isOpen={chatModalIsOpen}
        onRequestClose={modalClose}
        style={customStyles}
        contentLabel="Example Modal"
        overlayClassName="Overlay"
        className="Modal"
      >
        <div className="closeChat__modal p-5 d-flex flex-column justify-content-center align-items-center">
          <div className="modal__content text-justify">
            <p>
              By closing the chat, you will not be able to send or receive
              messages on this chat. But you can always open a new chat. Are
              your sure you want to close this chat?
            </p>
          </div>
          <div className="modal__footer d-flex justify-content-between w-100 mt-3">
            {/* <button className="btn btn-border">Close Chat</button> */}
            <button onClick={handleCloseChat} className="btn btn-border">
              Close Chat
            </button>
            <button onClick={modalClose} className="btn btn-border">
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    chatProfile: state.inbox_reducers.chatProfile,
    user: state.user_reducers.user_credentials,
  };
};

export default connect(mapStateToProps, { closeChat })(CloseChatPopup);
