import React from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import "./index.css";

const NoJobs = (props) => {
  const credentials = useSelector(
    (state) => state.user_reducers.user_credentials
  );

  const url = props.location.pathname.split("/")[1];

  return (
    <div className="row no-data">
      <div className="col-lg-9 col-md-9 text-center">
        <div className="card-body">
          <svg
            width="40"
            height="40"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M59.1367 3.15138L56.1572 0.171875L0.136719 56.1924L3.11622 59.1719L7.3305 54.9576H50.7081C51.8253 54.9559 52.8963 54.5114 53.6863 53.7214C54.4762 52.9314 54.9208 51.8605 54.9224 50.7433V7.36566L59.1367 3.15138ZM50.7081 50.7433H11.5448L27.9658 34.3223L32.9786 39.3352C33.7689 40.1253 34.8407 40.5691 35.9581 40.5691C37.0756 40.5691 38.1474 40.1253 38.9376 39.3352L42.2796 35.9933L50.7081 44.4156V50.7433ZM50.7081 38.4544L45.2591 33.0054C44.4688 32.2153 43.3971 31.7715 42.2796 31.7715C41.1621 31.7715 40.0904 32.2153 39.3001 33.0054L35.9581 36.3473L30.9495 31.3386L50.7081 11.5799V38.4544Z"
              fill="#3B3B3B"
            ></path>
            <path
              d="M8.56585 42.3143V35.9929L19.1016 25.4635L21.9947 28.3587L24.9784 25.375L22.0811 22.4777C21.2908 21.6876 20.219 21.2438 19.1016 21.2438C17.9841 21.2438 16.9124 21.6876 16.1221 22.4777L8.56585 30.0339V8.60003H42.2801V4.38574H8.56585C7.44849 4.38686 6.37722 4.83122 5.58713 5.62131C4.79704 6.4114 4.35268 7.48267 4.35156 8.60003V42.3143H8.56585Z"
              fill="#3B3B3B"
            ></path>
          </svg>
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto ml-auto">
                <p className="message-no-data">
                  There are no jobs posted by this employer. If you are looking
                  for jobs, you can try checking on other employers
                </p>
                {url !== "business" && (
                  <>
                    <a
                      className="btn btn-light view-other-jobs"
                      href="/jobs-all"
                    >
                      View Jobs Posted By Other Employers
                    </a>
                    <br />
                    {credentials && credentials.token && (
                      <a
                        href="/employer-recruitment"
                        type="button"
                        className="btn btn-labeled btn-warning button-vacancy"
                      >
                        <span className="btn-label">
                          <AddOutlinedIcon className="mr-2" /> Post A Vacancy Ad
                        </span>
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(NoJobs);
