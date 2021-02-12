import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function JobCardModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
          </Modal.Title>
            </Modal.Header> */}
      <Modal.Body>
        <div className="d-flex flex-column align-items-center">
          <i
            style={{ color: "#279F2C" }}
            className="fas fa-check-circle my-3 fa-lg"
          />
          <p className="text-center my-2">
            Congrats. Vacancy Ad Submitted Successfuly
          </p>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
    </Modal>
  );
}
