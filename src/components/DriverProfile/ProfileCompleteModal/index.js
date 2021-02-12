import React from "react"
import { Modal, Button } from "react-bootstrap"
import styled from "styled-components"

export default function ProfileCompleteModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Congrats, now you are all set !
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex align-items-center justify-content-center">
                    <p className="text-center my-2">
                        Your profile complete is 100% complete
                    </p>
                    <i style={{ color: "#279F2C" }} class="fas fa-check-circle my-3 fa-lg" />

                </div>

            </Modal.Body>
            <Modal.Footer>
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