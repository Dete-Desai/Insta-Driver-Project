import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getSingleJobpost } from '../../redux/actions/employer_actions/job_post_actions'
import arrowBack from "../../dist/images/arrowBack.svg";
import DriverCard from "./Job_Components/DriverCard";
import JobCardDetails from "./Job_Components/JobCardDetails";
import NextPageButtons from "../Main/DashBoard_Buttons/NextPageButtons";
import { useHistory } from "react-router-dom";


const JobDetails = ({jobpostId}) => {
  const history = useHistory();
  const directToJobsAll = () => {
    let route = `/jobs-all`;
    history.push(route);
  };
  // const [jobCard, setjobCard] = useState();
  const jobpost = useSelector(state => state.employer_reducers.job_post)
  const dispatch = useDispatch();

  // useEffect(() => {
  //   (async () => {
  //     let jobCardRespData = await getSpecificJobCard(jobpostId);
  //     console.log(jobCardRespData);
  //     setjobCard(jobCardRespData);
  //   })();
  // }, []);

  useEffect(() => {
    dispatch(getSingleJobpost(jobpostId));
  }, [dispatch, jobpostId]);

  return (
    <div className="">
      <div className="col-xl-10 m-auto">
        <span onClick={directToJobsAll} style={{ cursor: "pointer" }} className="">
          <img src={arrowBack} alt="" className="img-fluid w-100" />
        </span>
        <div className="row">
          <div className="col-lg-5 col-md-6 mt-5">
            <div id="card-center" className="row">
              {}
              <JobCardDetails job={jobpost} />
            </div>
          </div>
          <div className="col-lg-7 col-md-6 mt-5">
            <div id="card-center" className="row">
              {jobpost && jobpost.applied && jobpost.applied.map((driver, index) => (
                <DriverCard key={index} cardValues={driver}  />
              )) }
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12 my-3 border-top">
        <NextPageButtons/>
      </div>
    </div>
  );
};

export default JobDetails;
