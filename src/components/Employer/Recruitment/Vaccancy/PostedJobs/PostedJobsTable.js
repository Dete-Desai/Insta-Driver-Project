import React from 'react';
import PropTypes from 'prop-types';

const PostedJobsTable=(props)=>{
    const{jobPosts}=props;
    console.log('inside postedjobs table')
    console.log(props.jobPosts)
    return(
        <div className="card">
            
            <table className="table table-striped table-hover">
             <thead>
              <th>Job Type</th>
              <th>Job Name</th>
              <th>Experience (Yrs)</th>
              <th>Licence (Yrs)</th>
              <th>Location</th>
              <th>Salary</th>
              <th>Expiry Date</th>
              </thead>
              <tbody>
                  {jobPosts && jobPosts.map(job=> <PostedJobTableRow job={job} key={job.id}/>)}
              </tbody>
            </table>
          
        </div>
    );
}
PostedJobsTable.propTypes={
    jobPosts:PropTypes.array.isRequired,
}

const PostedJobTableRow=(props)=>{
    const {job}=props;
    return(
        <tr>
            <td>{job && job.adType}</td>
            <td>{job && job.name}</td>
            <td>{job && job.experience}</td>
            <td>{job && job.licenseAge}</td>
            <td>{job && job.location && job.location.title}</td>
            <td>{job && job.salary && `Salary (${job.currency? job.currency:''}) ${job.salary.min} - ${job.salary.max}` }</td>
            <td>{job && new Date(job.expireAt).toDateString()}</td>
        </tr>
    );
}

PostedJobTableRow.propTypes={
    job: PropTypes.object.isRequired,
}

export default PostedJobsTable;