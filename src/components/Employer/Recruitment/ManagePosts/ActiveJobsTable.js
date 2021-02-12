import React from "react";
import PropTypes from "prop-types";
import NoJobsToShow from "./NoJobsToShow";

const ActiveJobsTable = (props) => {
  const { jobs } = props;
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
                <ActiveJobsRow
                  job={job}
                  number={index + 1}
                  onView={props.onView}
                  onStopAndArchive={props.onStopAndArchive}
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

ActiveJobsTable.propTypes = {
  number: PropTypes.number.isRequired,
  jobs: PropTypes.array.isRequired,
  onView: PropTypes.array.isRequired,
  onStopAndArchive: PropTypes.array.isRequired,
};

const ActiveJobsRow = (props) => {
  const { job } = props;
  const stopAndArchiveAd = () => {
    props.onStopAndArchive(job._id);
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
          className="delete-view-button delete-view-button1 delete-view-button-1"
          type="button"
          onClick={stopAndArchiveAd}
        >
          Stop Ad & Archive
        </button>
      </td>
    </tr>
  );
};

ActiveJobsRow.propTypes = {
  job: PropTypes.object.isRequired,
  onView: PropTypes.func.isRequired,
  onStopAndArchive: PropTypes.func.isRequired,
};

export default ActiveJobsTable;
