import * as job_types from "../../types/job_types/";

const driverJopApplication = {
    job_application: null,
}

export const job_application_reducers = ((state = driverJopApplication, action) => {
    switch (action.type) {
        case job_types.APPLY_DRIVER_FOR_JOB:
        return {
            ...state,
            job_application: action.payload
          }
        default:
          return state;
    }
})