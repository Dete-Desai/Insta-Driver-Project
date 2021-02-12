import React, { useState } from "react";
import { Modal, Button, Row, Col, Container } from "react-bootstrap";
import PropTypes from "prop-types";

const NoAttachmentsForJobPost = () => {
  return (
    <div
      className="card alert alert-warning"
      style={{ border: "1px solid white", borderRadius: 10 }}
    >
      <h4 className="alert-warning">
        The currently selected Job Post does NOT have this Attachment
      </h4>
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              className="mx-auto d-block"
              src="http://geoportal.rcmrd.org/static/documents/generic-placeholder.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const DownloadButton = ({ url }) => {
  return (
    <div>
      <a href={url} download="id3">
        <button
          type="button"
          className="btn btn-secondary"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Download document"
        >
          <span className="fa fa-download"></span>
        </button>
      </a>
    </div>
  );
};

DownloadButton.propTypes = {
  url: PropTypes.string.isRequired,
};

const isBlank = (str) => {
  return (
    !str || str === null || str === "undefined" || str === "" || !str.trim()
  );
};
const isEmpty = (str) => {
  return !str || 0 === str.length;
};
const isNotNullOrEmpty = (str) => {
  return !isEmpty(str) && !isBlank(str);
};

const AttachmentsModal = (props) => {
  const [open, setOpen] = useState(true);
  const closeModal = () => {
    setOpen(false);
  };

  const [currentLink, setCurrentLink] = useState(1);

  var count = 0;
  console.log("insde attachmentsmodal");
  console.log(props.job);
  var links = [];

  if (isNotNullOrEmpty(props.job.attachmentOneUrl)) {
    count += 1;
    links.push(props.job.attachmentOneUrl);
  } else if (isNotNullOrEmpty(props.job.attachmentTwoUrl)) {
    count += 1;
    links.push(props.job.attachmentTwoUrl);
  } else if (isNotNullOrEmpty(props.job.attachmentThreeUrl)) {
    count += 1;
    links.push(props.job.attachmentThreeUrl);
  }

  console.log(props);

  const getFileExt = (filename) => {
    return filename.split(".").pop();
  };

  const isDoc = (fileName) => {
    if (getFileExt(fileName) === "doc" || getFileExt(fileName) === "docx") {
      return true;
    }

    return false;
  };

  const getLink = (index) => {
    return links[index - 1];
  };

  const onAttachmentChange = (e) => {
    var id = parseInt(e.target.id);
    setCurrentLink(id);
  };
  return (
    <Modal size="lg" show={open} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          <h3 className="system-text-colour">
            InstaDriver Job Post Attachments
          </h3>
        </Modal.Title>
      </Modal.Header>
      <hr />
      <Modal.Body>
        {
          <Container>
            <div className="row mx-auto">
              <div className="col-md-4">
                <button
                  id={1}
                  className="btn btn-secondary"
                  onClick={onAttachmentChange}
                >
                  Attachment 1
                </button>
              </div>
              <div className="col-md-4">
                <button
                  id={2}
                  className="btn btn-secondary"
                  onClick={onAttachmentChange}
                >
                  Attachment 2
                </button>
              </div>
              <div className="col-md-4">
                <button
                  id={3}
                  className="btn btn-secondary"
                  onClick={onAttachmentChange}
                >
                  Attachment 3
                </button>
              </div>
            </div>
            <hr />
            <div className="row mt-2">
              <div className="col-md-11 col-offset-11"></div>
              <div className="col-md-1">
                {isNotNullOrEmpty(getLink(currentLink)) &&
                  isDoc(getLink(currentLink)) && (
                    <DownloadButton url={getLink(currentLink)} />
                  )}
              </div>
            </div>
            <div className="row mt-4">
              <br />
              <hr />
              {isNotNullOrEmpty(getLink(currentLink)) &&
                isDoc(getLink(currentLink)) && (
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <img
                          className="mx-auto d-block"
                          src="http://geoportal.rcmrd.org/static/documents/doc-placeholder.png"
                        />
                      </div>
                    </div>
                  </div>
                )}

              {open &&
                isNotNullOrEmpty(getLink(currentLink)) &&
                !isDoc(getLink(currentLink)) && (
                  <div className="mx-auto embed-responsive embed-responsive-16by9">
                    <iframe
                      seamless
                      src={getLink(currentLink)}
                      id="myId"
                      title={props.job && props.job.title}
                      className="embed-responsive-item"
                      allow="fullscreen"
                      sandbox="allow-downloads, allows-same-origin"
                      loading="lazy"
                    />
                  </div>
                )}
              {!isNotNullOrEmpty(getLink(currentLink)) && (
                <NoAttachmentsForJobPost />
              )}
            </div>
          </Container>
        }
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

AttachmentsModal.propTypes = {
  job: PropTypes.object.isRequired,
};

export default AttachmentsModal;
