import React from "react";
import PropTypes from "prop-types";
import NoJobsToShow from "./NoJobsToShow";

const InActiveJobsTable = (props) => {
  const { jobs, onView, onDelete } = props;
  return (
    <div className="container">
      {jobs && jobs.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col" />
              <th style={{ fontSize: 20 }} scope="col">
                &emsp;Date Posted
              </th>
              <th style={{ fontSize: 20 }} scope="col">
                {" "}
                &emsp; &emsp;Applied
              </th>
              <th style={{ fontSize: 20 }} scope="col">
                {" "}
                &emsp; &emsp;Shortlisted
              </th>
              <th style={{ fontSize: 20 }} scope="col">
                {" "}
                &emsp; Hired
              </th>
              <th style={{ fontSize: 20 }} scope="col">
                {" "}
                &emsp; &emsp;Rejected
              </th>
              <th style={{ fontSize: 20 }} scope="col">
                {" "}
                &emsp; &emsp; &emsp;Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {jobs &&
              jobs.map((job, index) => (
                <InActiveJobsRow
                  job={job}
                  number={index + 1}
                  onView={onView}
                  onDelete={onDelete}
                />
              ))}
          </tbody>
        </table>
      ) : (
        <NoJobsToShow />
      )}
    </div>
  );
};

InActiveJobsTable.propTypes = {
  number: PropTypes.number.isRequired,
  jobs: PropTypes.array.isRequired,
  onView: PropTypes.array.isRequired,
  onDelete: PropTypes.array.isRequired,
};

const InActiveJobsRow = (props) => {
  const { job } = props;
  const deleteAd = () => {
    props.onDelete(job._id);
  };

  const viewAd = () => {
    props.onView(job._id);
  };
  return (
    <tr>
      <td style={{ textAlign: "center", color: "#918a83", fontSize: 20 }}>
        {job && <span className="badge bg-secondary">{props.number}</span>}
      </td>
      <td style={{ textAlign: "center", color: "#918a83", fontSize: 20 }}>
        {job && new Date(job.createdAt).toDateString()}
      </td>
      <td style={{ textAlign: "center", color: "#918a83", fontSize: 20 }}>
        {job && job.applied && job.applied.length}
      </td>
      <td style={{ textAlign: "center", color: "#918a83", fontSize: 20 }}>
        {job && job.shortlisted && job.shortlisted.length}
      </td>
      <td style={{ textAlign: "center", color: "#918a83", fontSize: 20 }}>
        {job && job.hired && job.hired.length}
      </td>
      <td style={{ textAlign: "center", color: "#918a83", fontSize: 20 }}>
        {job && job.rejected && job.rejected.length}
      </td>
      <td style={{ textAlign: "center", color: "#918a83", fontSize: 20 }}>
        <button
          className="action-view-button action-view-button1 action-view-button-1"
          type="button"
          onClick={viewAd}
        >
          View
        </button>
        <button
          className="delete-view-button delete-view-button1"
          type="button"
          onClick={deleteAd}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

InActiveJobsRow.propTypes = {
  job: PropTypes.object.isRequired,
  onView: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default InActiveJobsTable;
