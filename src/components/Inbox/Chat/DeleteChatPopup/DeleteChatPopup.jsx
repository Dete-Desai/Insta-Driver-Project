import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { deleteWholeChat } from "../../../../redux/actions/inbox_actions";

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

const DeleteChatPopup = (props) => {
  const [deleteChatModalIsOpen, setDeleteChatModalIsOpen] = React.useState(
    false
  );

  function openModal() {
    setDeleteChatModalIsOpen(true);
  }

  function closeModal() {
    setDeleteChatModalIsOpen(false);
  }

  const handleDeleteClick = () => {
    props.deleteWholeChat(props.user.token);
    setDeleteChatModalIsOpen(false);
  };

  // const { chatProfile } = props;

  return (
    <>
      <button onClick={openModal} className="popupBox-style my-3">
        {" "}
        Delete Chat
      </button>
      <Modal
        isOpen={deleteChatModalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        overlayClassName="Overlay"
        className="Modal"
      >
        <div className="closeChat__modal p-5 d-flex flex-column justify-content-center align-items-center">
          <div className="modal__content text-justify py-2">
            <p>
              By deleting the chat, all the messages and the history for this
              particular chat will be deleted. However, If you want to chat with
              this particuar user, you can do that by starting a new chat. Are
              your sure you want to delete this chat?
            </p>
          </div>
          <div className="modal__footer d-flex justify-content-between w-100 mt-2 py-2">
            <button className="btn btn-border" onClick={handleDeleteClick}>
              Delete Chat
            </button>
            <button onClick={closeModal} className="btn btn-border">
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
    user: state.user_reducers.user_credentials,
    // chatProfile: state.inbox_reducers.chatProfile,
    // newChat: state.inbox_reducers.newChat,
  };
};

export default connect(mapStateToProps, { deleteWholeChat })(DeleteChatPopup);
