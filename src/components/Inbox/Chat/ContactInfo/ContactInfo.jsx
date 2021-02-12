import React from "react";
import contactImg from "../../../../dist/icons/i.png";
import { connect } from "react-redux";

const ContactInfo = (props) => {
  const { chatProfile } = props;
  return (
    <>
      <div className="dropdown">
        <button
          className="btn contact-btn d-flex align-items-center"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img classNameName="mr-2" src={contactImg} alt="" />
          <span>Contact Info</span>
        </button>
        <div
          style={{ left: "0px" }}
          className="dropdown-menu contactBtn"
          aria-labelledby="dropdownMenuButton"
        >
          <div className="contactPopup d-flex flex-column justify-content-center align-items-center">
            <div className="popup-top w-100 text-center">
              <img className="mr-1 mb-1" src={contactImg} alt="" />
              Contact Info
            </div>
            <div className="my-4 w-100 d-flex justify-content-center align-items-center">
              <p style={{ color: "#BEBDBD" }}>Mobile Number</p>
              <span className="modal-style contactBox ml-3">
                <p
                  style={{
                    overflow: "hidden",
                    width: "100%",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {chatProfile && chatProfile.phone}
                </p>
              </span>
            </div>
            <div className="my-4 w-100 d-flex justify-content-center align-items-center">
              <p style={{ color: "#BEBDBD" }}>Email Address</p>
              <span className="modal-style contactBox ml-4">
                <p
                  style={{
                    overflow: "hidden",
                    width: "100%",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {chatProfile && chatProfile.email}
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    chatProfile: state.inbox_reducers.chatProfile,
  };
};

export default connect(mapStateToProps)(ContactInfo);
