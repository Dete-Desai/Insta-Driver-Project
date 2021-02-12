import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import Modal from "react-modal";
import { deleteChat } from "../../../../redux/actions/inbox_actions";
import { connect } from "react-redux";
import { getChatTime, displayTicks } from "../ChatBody/ChatBody";

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

const MessageDelete = ({
  deleteChatModalIsOpen,
  modalIsClose,
  chat,
  deleteChat,
  user,
  chatProfile,
}) => {
  const handleDeleteMessage = (e, chat) => {
    e.preventDefault();

    deleteChat(user.token, chat, chatProfile.chatId);
    modalIsClose();
  };

  return (
    <div>
      <Modal
        isOpen={deleteChatModalIsOpen}
        onRequestClose={modalIsClose}
        style={customStyles}
        contentLabel="Example Modal"
        overlayClassName="Overlay"
        className="Modal"
      >
        <div className="deleteMsg__modal p-5 d-flex flex-column justify-content-center align-items-center">
          <p className="text-muted">
            The message below will be deleted. You can not reverse the action.
            Are you sure you want to delete?
          </p>
          <div className="text-box bg-pink p-4">
            <small>{chat && chat.message}</small>
          </div>
          <div className="text-right w-100 mb-3">
            <span style={{ color: "#C4C4C4" }} className=" font-weight-bold">
              {chat && getChatTime(chat)} {displayTicks(chat)}
            </span>
          </div>
          <div className="modal__footer d-flex justify-content-between w-100 mt-3">
            <button
              className="btn btn-border"
              onClick={(e) => handleDeleteMessage(e, chat)}
            >
              Delete Message
            </button>
            <button onClick={modalIsClose} className="btn btn-border">
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user_reducers.user_credentials,
    chatProfile: state.inbox_reducers.chatProfile,
  };
};

export default connect(mapStateToProps, { deleteChat })(MessageDelete);
