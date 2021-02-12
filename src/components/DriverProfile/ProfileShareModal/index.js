import React from "react";
import { Modal, Button, FormControl } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function ProfileShareModal(props) {
  const user_credentials = useSelector(
    (state) => state.user_reducers.user_credentials
  );
  console.log("----PUBLIC_URL", process.env);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Get Profile URL
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column align-items-center">
          <FormControl
            className="w-75"
            disabled
            value={`http://localhost:3000/drivers/public-profile/${user_credentials.id}`}
            type="text"
          ></FormControl>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <StyledCopyButton
          onClick={() =>
            navigator.clipboard.writeText(
              `http://localhost:3000/drivers/public-profile/${user_credentials.id}`
            )
          }
          className="px-5"
        >
          Copy
        </StyledCopyButton>

        <StyledCloseButton onClick={props.onHide}>Close</StyledCloseButton>
      </Modal.Footer>
    </Modal>
  );
}

const StyledCloseButton = styled(Button)`
  background-color: #23272b;
  border-color: #23272b;

  :hover {
    background-color: #141618 !important;
    border-color: #141618 !important;
  }
`;

const StyledCopyButton = styled(Button)`
  background-color: #fec810;
  border-color: #fec810;

  :hover {
    background-color: #f8bd15 !important;
    border-color: #f8bd15 !important;
  }
`;
