import React from "react";

const ApplicationSuccess = () => {
  return (
    <div className="modal" tabIndex={-1} role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Job Application Status:</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <p>"Successful".</p>
            <br/>
            <p>We shall notify you if you have been shortlisted.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationSuccess;
