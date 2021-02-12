import React, { useEffect, useState, useMemo } from "react";
import map from "lodash/map";
import { Container, Row, Col, Pagination } from "react-bootstrap";
import PaginationBasic from "../../Util/PaginationUtil";
import {
  getAllJob,
  getAllDriverCards,
  getDriverStaticFormData,
} from "../../Api/index";
import Jobcard from "./Job_Components/EmployerJobCard";
import HireMeListCard from "./HireMeListCard";
import { Link } from "react-router-dom";
import EmployersJobsFilter from "./EmployersJobsFilter";
import DriversHireFilter from "./DriversHireFilter";

const Jobs = ({ cardsType }) => {
  console.log("rendered jobs page ---- ");
  const [jobList, setJobList] = useState([]);
  const [filteredJobList, setFilteredJobList] = useState([]);
  const [jobFilterApplied, setJobFilterApplied] = useState(false);

  const [driverCardList, setDriverCardList] = useState([]);
  const [filteredDriverCardList, setFilteredDriverCardList] = useState([]);
  const [driverFilterApplied, setDriverFilterApplied] = useState(false);

  let pageCount;
  const [showDriverCards, setShowDriverCards] = useState(
    cardsType === "driver-cards" ? true : false
  );
  const [pageItemsRange, setPageItemsRange] = useState([0, 11]);

  const [formstaticData, setFormstaticData] = useState(undefined);

  useEffect(() => {
    const getJobPageData = async () => {
      let jobListRespData = await getAllJob();
      let driverCardsRespData = await getAllDriverCards();
      let formstaticData = await getDriverStaticFormData();
      console.log("--static form data", formstaticData);
      setFormstaticData(formstaticData);
      setJobList(jobListRespData);
      setDriverCardList(driverCardsRespData);
    };
    getJobPageData();
  }, []);

  if (showDriverCards) {
    pageCount = Math.ceil(driverCardList && driverCardList.length / 12);
  } else {
    pageCount = Math.ceil(jobList && jobList.length / 12);
  }

  const setItemsRange = (pageNumber) => {
    let maxRange = pageNumber * 12 - 1;
    let minRange = pageNumber * 12 - 12;
    let newRange = [minRange, maxRange];
    setPageItemsRange(newRange);
  };

  return (
    <>
      <div id="content"z>
        <div
          className="cards "
          style={{ margin: "0 auto", border: "1px solid white" }}
        >
          <div className="openspace" />
          <div className="card-body">
            <div className="container">
              <form method="get" id="frmSearch" name="frmSearch">
                <div className="form-row">
                  <div className="col-lg-1"></div>
                  <div className="col-lg-2"></div>
                  <div className="col-lg-6">
                    <div
                      className="row mt-3"
                      style={{
                        borderBottomColor: "#AEAEAE",
                        borderBottom: "2px solid #AEAEAE",
                        position: "relative",
                        top: "-10px",
                      }}
                    >
                      <div className="col-5">
                        <div id="nav-item">
                          <a
                            className={`driving-jobs ${
                              !showDriverCards && `active`
                            }`}
                            onClick={() => setShowDriverCards(false)}
                            style={{
                              webkitTextDecoration: "none",
                              textDecoration: "none",
                              outline: "none",
                              color: "#4B4747",
                            }}
                          >
                            Driving Jobs
                          </a>
                        </div>
                      </div>
                      <div className="col-6">
                        <div id="nav-item">
                          <a
                            className={`hire-driver ${
                              showDriverCards && `active`
                            }`}
                            onClick={() => setShowDriverCards(true)}
                            style={{
                              webkitTextDecoration: "none",
                              textDecoration: "none",
                              outline: "none",
                              color: "#4B4747",
                            }}
                          >
                            I'm a driver,hire me
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className="col-lg-1 text-center col-2 ">
                    {showDriverCards ? (
                      <img
                        src={process.env.PUBLIC_URL + "/images/filter.svg"}
                        data-toggle="modal"
                        data-target="#driverfilterModal"
                        className="cursorpointer"
                      />
                    ) : (
                      <img
                        src={process.env.PUBLIC_URL + "/images/filter.svg"}
                        data-toggle="modal"
                        data-target="#jobsfilterModal"
                        className="cursorpointer"
                      />
                    )}
                    <EmployersJobsFilter
                      Empfilter={"Empfilter"}
                      filteredJobList={filteredJobList}
                      setFilteredJobList={setFilteredJobList}
                      setJobFilterApplied={setJobFilterApplied}
                      formstaticData={formstaticData}
                      jobList={jobList}
                    />
                    <DriversHireFilter
                      Driverfilter={"Driverfilter"}
                      filteredDriverCardList={filteredDriverCardList}
                      setFilteredDriverCardList={setFilteredDriverCardList}
                      setDriverFilterApplied={setDriverFilterApplied}
                      formstaticData={formstaticData}
                      driverCardList={driverCardList}
                    />
                  </div>
                  <div className="col-lg-1 col-10"></div>
                </div>
              </form>
            </div>
            {showDriverCards ? (
              <Container fluid>
                <Row className="justify-content-center">
                  {driverFilterApplied ? (
                    filteredDriverCardList.length > 0 ? (
                      map(
                        filteredDriverCardList,
                        (card, i) =>
                          i >= pageItemsRange[0] &&
                          i <= pageItemsRange[1] && (
                            <Link
                              key={i}
                              to={`/hire-me/${card && card._id}`}
                              className="hire-card-link"
                            >
                              <HireMeListCard cardValues={card} />
                            </Link>
                          )
                      )
                    ) : (
                      <p>no drivers according to filter</p>
                    )
                  ) : (
                    map(
                      driverCardList,
                      (card, i) =>
                        i >= pageItemsRange[0] &&
                        i <= pageItemsRange[1] && (
                          <Link
                            key={i}
                            to={`/hire-me/${card && card._id}`}
                            className="hire-card-link"
                          >
                            <HireMeListCard cardValues={card} />
                          </Link>
                        )
                    )
                  )}
                </Row>
              </Container>
            ) : (
              <Container fluid>
                <Row className="mainrow justify-content-center">
                  {jobFilterApplied ? (
                    filteredJobList.length > 0 ? (
                      map(
                        filteredJobList,
                        (job, i) =>
                          i >= pageItemsRange[0] &&
                          i <= pageItemsRange[1] && (
                            <Jobcard key={i} job={job} />
                          )
                      )
                    ) : (
                      <p>no jobs according to your filter</p>
                    )
                  ) : (
                    map(
                      jobList,
                      (job, i) =>
                        i >= pageItemsRange[0] &&
                        i <= pageItemsRange[1] && <Jobcard key={i} job={job} />
                    )
                  )}
                </Row>
              </Container>
            )}
            <PaginationBasic
              pageCount={pageCount}
              setItemsRange={setItemsRange}
            />
          </div>
        </div>
        <div
          className="modal fade"
          id="noInfoCardModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="row">
                <div className="modal-body row justify-content-center">
                  <svg
                    width={49}
                    height={49}
                    viewBox="0 0 69 69"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M66.534 30.264L38.3734 2.10046C37.2923 1.02565 35.8298 0.422363 34.3053 0.422363C32.7808 0.422363 31.3183 1.02565 30.2372 2.10046L2.07653 30.264C1.00173 31.3451 0.398438 32.8076 0.398438 34.3321C0.398438 35.8566 1.00173 37.3191 2.07653 38.4002L30.24 66.5608C32.4768 68.7976 36.1338 68.7976 38.3763 66.5608L66.5398 38.3973C67.6115 37.3157 68.2127 35.8547 68.2127 34.3321C68.2127 32.8095 67.6115 31.3484 66.5398 30.2668L66.534 30.264ZM32.0139 15.5842C32.6464 14.9028 33.4514 14.5607 34.4404 14.5607C35.4294 14.5607 36.2344 14.9 36.8669 15.5756C37.4994 16.2512 37.8157 17.0993 37.8157 18.12C37.8157 18.9997 37.5282 21.9523 36.9445 26.9807C36.3695 32.012 35.852 36.8707 35.4208 41.5627H33.3594C32.9713 36.8678 32.4969 32.0091 31.9219 26.9807C31.3527 21.9495 31.0652 18.9997 31.0652 18.12C31.0652 17.1137 31.3814 16.2742 32.0139 15.59V15.5842ZM36.9877 52.4417C36.2747 53.1317 35.4265 53.4767 34.4404 53.4767C33.4543 53.4767 32.6062 53.1317 31.896 52.4417C31.1859 51.746 30.8323 50.9065 30.8323 49.9203C30.8323 48.9342 31.1859 48.0861 31.896 47.376C32.609 46.663 33.4572 46.3065 34.4433 46.3065C35.4294 46.3065 36.2775 46.663 36.9877 47.376C37.7064 48.0861 38.06 48.9342 38.06 49.9203C38.06 50.9065 37.7035 51.746 36.9905 52.4388L36.9877 52.4417Z"
                      fill="black"
                    />
                  </svg>{" "}
                  <br />
                </div>
              </div>
              <p
                style={{
                  webkitTextAlign: "center",
                  textAlign: "center",
                  fontSize: "30px",
                  fontWeight: "500",
                }}
              >
                Oops!
              </p>
              <p
                style={{
                  webkitTextAlign: "center",
                  textAlign: "center",
                  width: "300px",
                  margin: "0 auto",
                }}
              >
                This employer has not added extra information about this job
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Jobs;
