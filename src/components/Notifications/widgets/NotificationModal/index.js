import React from 'react'
import { Modal, Button } from 'react-bootstrap'

function NotificationModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title} + {props.selectedNotification}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* <h4>Centered Modal</h4> */}
                <p>
                    {props.message}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button type="button" onClick={props.onHide} className="btn btn-light mx-auto">View job post</Button>

            </Modal.Footer>
        </Modal>
    );
}
export default NotificationModal