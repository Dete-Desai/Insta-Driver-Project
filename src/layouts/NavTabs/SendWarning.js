import React from "react";
import Modal from "react-modal";

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

const SendWarning = ({ ModalOpen, ModalClose, success, empty, mandatory }) => {
  return (
    <div>
      <Modal
        isOpen={ModalOpen}
        onRequestClose={ModalClose}
        style={customStyles}
        contentLabel="Example Modal"
        overlayClassName="Overlay"
        className="Modal"
      >
        <div className="warning__modal px-5 d-flex flex-column justify-content-center align-items-center">
          {mandatory && (
            <p className="text-justify">
              Please fill either the mobile number or email address. Atleast one
              contact field is mandatory. You can fill both for quick response.{" "}
            </p>
          )}
          {empty && (
            <p className="text-justify">
              Oops! It seems you left out the mandatory fields. Please fill all
              the mandatory fields.
            </p>
          )}
          {success && (
            <p className="text-justify">
              Congrats. Your message has been sent successfully
            </p>
          )}
          <div className="modal__footer w-100 mt-3 text-right">
            <button onClick={ModalClose} className="btn btn-border">
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SendWarning;
