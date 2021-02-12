
import React from 'react';
import PropTypes from 'prop-types';

const AllJobsTable=(props)=>{
    const {jobs,onView,onDelete}=props;
    console.log('inside the alljobstable');
    console.log(props.jobs);
    return(
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col" />
                    <th scope="col">Date Posted</th>
                    <th scope="col">Applied</th>
                    <th scope="col">Shortlisted</th>
                    <th scope="col">Hired</th>
                    <th scope="col">Rejected</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
             {jobs && jobs.map(job=>
              <AllJobsRow job={job} onView={onView} onDelete={onDelete}/>)}
            </tbody>
        </table>
    )
}

AllJobsTable.propTypes={
    jobs:PropTypes.array.isRequired,
    onView:PropTypes.array.isRequired,
    onDelete:PropTypes.array.isRequired,
}

const AllJobsRow=(props)=>{
    console.log('inside alljobsrow');
    console.log(props.job)
    const{job}=props;
    return(
        <tr>
            <td></td> 
            <td>{job && new Date(job.createdAt).toDateString()}</td> 
            <td>{job && job.applied && job.applied.length}</td>
            <td>{job && job.shortlisted && job.shortlisted.length}</td>
            <td>{job && job.hired && job.hired.length}</td>
            <td>{job && job.rejected && job.rejected.length}</td>
            <td><button className="action-view-button action-view-button1 action-view-button-1" type="button"
            onClick={props.onView}>View</button> 
            <button className="delete-view-button delete-view-button1 delete-view-button-1" type="button"
            onDelete={props.onDelete}>Delete</button></td>
        </tr>
    )
}

AllJobsRow.propTypes={
    job: PropTypes.object.isRequired,
    onView:PropTypes.func.isRequired,
    onDelete:PropTypes.func.isRequired,
}

export default AllJobsTable;