import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { applyDriverForJob } from '../../../redux/actions/employer_actions/job_post_actions';
import car from "../../../dist/images/car.png";

const JobCardDetails = ({job}) => {
  const dispatch = useDispatch()
  const user_credentials = useSelector(state => state.user_reducers.user_credentials);

  return (
    <div>
      <div className="container">
        <div id="cardItem" className="card">
          <img
            className="card-img-top"
            alt="car"
            src={job ? job.imageUrl : car}
          />
          <div className="card-body px-5 py-4">
            <p
              style={{ color: "#5B5B5B", width: "100%" }}
              className="card-text font-weight-bold"
            >
              {job ? job.description : ""}
            </p>
            <div className="text-center mt-3">
              <h6 style={{ color: "#575353" }}>
                {job ? job.mobileNumber : "0723773377"}
              </h6>
              <h5 style={{ color: "#575353" }}>{job ? job.businessEmail : 'xyz@gmail.com'}</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <table
          className="table-borderless my-2"
          style={{
            marginLeft: "-25px",
            borderCollapse: "separate",
            borderSpacing: "15px 20px",
          }}
        >
          <thead>
            <tr>
              <td scope="col">
                <div className=" btn  category-box">
                  <div
                    style={{
                      position: "relative",
                      bottom: 4,
                      cursor: "default",
                    }}
                  >
                    {job && job.category[0] ? job.category[0] : "Category not set"}
                  </div>
                </div>
              </td>
              <td scope="col">
                <div className=" btn category-box">
                  <d
                    style={{
                      position: "relative",
                      bottom: 4,
                      cursor: "default",
                    }}
                  >
                    {job && job.category[1] ? job.category[1] : "Category not set"}
                  </d>
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="btn category-box">
                  <div
                    style={{
                      position: "relative",
                      bottom: 4,
                      cursor: "default",
                    }}
                  >
                    {job ? job.experience : "0"}+ Years Experience
                  </div>
                </div>
              </td>
              <td>
                <div className="btn category-box">
                  <d
                    style={{
                      position: "relative",
                      bottom: 4,
                      cursor: "default",
                    }}
                  >
                    {job ? job.licenseAge : "0"} years Licence
                  </d>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="btn  category-box">
                  <d
                    style={{
                      position: "relative",
                      bottom: 4,
                      cursor: "default",
                    }}
                  >
                    {job && job.location && job.location.title ? job.location.title : 'Location not set'}
                  </d>
                </div>
              </td>
              <td>
                <div className="btn category-box">
                  <d
                    style={{
                      position: "relative",
                      bottom: 4,
                      cursor: "default",
                    }}
                  >
                    Salary ({job && job.currency}) {job && job.salary && job.salary.min} - {job && job.salary && job.salary.max}
                  </d>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container mb-2">
        <div className="">
          <button className="tap-shortlist">
            More Info On Job
          </button>
        </div>
      </div>
      <div className="container">
        <div className="">
        {user_credentials && user_credentials.role === "DRIVER" ? (
            <button onClick={() => dispatch(applyDriverForJob(user_credentials.token, job._id))} className="tap-express">
            Tap to express interest in this job
            </button>
          ) : (
            <a href="/login-user" className="btn tap-express">Tap to express interest in this job</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobCardDetails;
