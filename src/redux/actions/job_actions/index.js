import * as job_types from "../../types/job_types/";
import { PostRoute, getAllJob, getSpecificJobCard } from "../../../Api";
import { getAuthConfig } from "../../../Util/ApiUtils";
const { Post } = PostRoute();

export const jobApplication = (jobId, token) => async (dispatch) => {
    let config = getAuthConfig(token)

    try {
      // let driverJob = await Post(`/jobpost/driver/apply/${jobId}`, {}, config)
      // let driverJobData = driverJob.data.response_data;
      // dispatch({
      //     type: job_types.APPLY_DRIVER_FOR_JOB,
      // })
      // dispatch(getAllJob());
      // dispatch(getSpecificJobCard());
      console.log("Feedback", jobId);
      // return driverJobData
    } catch (error) {
      console.log("error in job application".error);
    }
  };

 