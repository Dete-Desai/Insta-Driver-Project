import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import closeBtn from "../../dist/icons/closeModal.svg";
import SendWarning from "./SendWarning";
import {
  sendAuthMessage,
  sendUnAuthMessage,
} from "../../redux/actions/inbox_actions";
import { connect } from "react-redux";

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

const SendMessage = (props) => {
  const [formData, setFormData] = useState({
    name: props.driver
      ? `${props.driver.firstName} ${props.driver.lastName}`
      : "",
    init_message: "",
    inquiry_type: "",
    email: props.driver ? props.driver.email : "",
    mobileNumber: props.driver ? props.driver.mobileNumber : "",
  });
  const [modalIsOpen, setIsOpen] = useState(false);
  const [warningModalIsOpen, setWarningModalIsOpen] = useState(false);

  const [success, setSuccess] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [mandatory, setMandatory] = useState(false);
  const dispatch = useDispatch();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openWarningModal() {
    setWarningModalIsOpen(true);
  }

  function warningModalIsClose() {
    setWarningModalIsOpen(false);
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { name, init_message, inquiry_type, email, mobileNumber } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
    let valid = false;

    //logic for showing warning message if he missed any filed
    if (name === "") {
      setMandatory(false);
      setSuccess(false);
      setEmpty(true);
      valid = false;
    } else if (inquiry_type === "") {
      setMandatory(false);
      setSuccess(false);
      setEmpty(true);
      valid = false;
    } else if (init_message === "") {
      setMandatory(false);
      setSuccess(false);
      setEmpty(true);
      valid = false;
    } else if (email === "" && mobileNumber === "") {
      setEmpty(false);
      setSuccess(false);
      setMandatory(true);
      valid = false;
    } else if (email !== "" && mobileNumber !== "") {
      setMandatory(false);
      setSuccess(true);
      valid = true;
    } else {
      setMandatory(false);
      setEmpty(false);
      setSuccess(true);
      valid = true;
    }

    if (valid) {
      if (props.user) {
        let data = {
          init_message: formData.init_message,
          inquiry_type: formData.inquiry_type,
          receiver_email: props.business.email,
          receiver_phone_number: props.business.mobileNumber,
        };
        dispatch(sendAuthMessage(props.user.token, data));
      } else {
        const [firstname, lastname] = formData.name.split(" ");
        let data = {
          firstname: firstname,
          lastname: lastname,
          init_message: formData.init_message,
          inquiry_type: formData.inquiry_type,
          receiver_email: props.business.email,
          guest_email: formData.email,
          guest_phone_number: formData.mobileNumber,
        };
        dispatch(sendUnAuthMessage(data));
      }
    } else {
      console.log("Data is ", formData);
    }
    setFormData({
      ...formData,
      name: "",
      mobileNumber: "",
      email: "",
      init_message: "",
      inquiry_type: "",
    });
    //open modal to show success/warning message
    openWarningModal();
  };

  // console.log(props.business);
  // console.log(props.driver);
  return (
    <div>
      <button
        onClick={openModal}
        type="button"
        className="btn btn-labeled btn-warning button-send"
      >
        Send Message
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        overlayClassName="Overlay"
        className="send-message-modal"
      >
        <div className="text-right w-100">
          <button onClick={closeModal} className="btn closeModalBtn">
            <img src={closeBtn} alt="" />
          </button>
        </div>
        <h6 style={{ fontSize: "15px" }} className="text-center mb-0 mt-3">
          Direct message this employer and they will contact you back.
        </h6>
        <form className="px-5 pt-4" onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="form-control inputIcon-none input-bg"
              disabled={props.driver}
              value={name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-2 ">
            <small style={{ fontSize: "13px" }}>
              At least one contact field is mandatory. You can also provide both
              mobile number and email. Who knows, you may get faster response.
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="mobileNumber"
              placeholder="Mobile Number"
              className="form-control inputIcon-none input-bg"
              disabled={props.driver}
              value={mobileNumber}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              className="form-control inputIcon-none input-bg"
              disabled={props.driver}
              value={email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-group">
            <select
              className="form-control inputIcon-none input-bg"
              name="inquiry_type"
              value={inquiry_type}
              onChange={(e) => handleChange(e)}
            >
              <option value="">Select service or inquiry type</option>
              <option value="driving">I am looking for a driving job</option>
              <option value="non-driving">
                I am looking for a non-driving job
              </option>
              <option value="customer">I am a potential customer</option>
              <option value="partnership">I am looking for partnership</option>
              <option value="selling">I am selling products & services</option>
              <option value="inquiry">General inquiry</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <textarea
              value={init_message}
              onChange={(e) => handleChange(e)}
              style={{ height: "150px" }}
              className="form-control input__style inputIcon-none input-bg pt-2"
              placeholder="Your message"
              name="init_message"
              id="message"
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn bg-orange button-send-message">
              Send Message
            </button>
          </div>
        </form>
      </Modal>
      <div className="warning-after-send">
        <SendWarning
          ModalOpen={warningModalIsOpen}
          ModalClose={warningModalIsClose}
          success={success}
          empty={empty}
          mandatory={mandatory}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user_reducers.user_credentials,
    business: state.employer_reducers.business,
    driver: state.driver_reducers.driver_profile,
  };
};

export default connect(mapStateToProps)(SendMessage);
