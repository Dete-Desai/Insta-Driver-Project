import React from 'react';
import { useDispatch } from 'react-redux';
import { delJobCard, updateJobcardStatus } from '../../redux/actions/driver_actions/job_card_actions';
import closeBtn from '../../dist/icons/closeBtn.png';


const ActiveCard = ({ current_active_card, token }) => {
  const dispatch = useDispatch();

  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-sm">
          <h5 className="card-title2">Status of your Job Card</h5>
          <p>
            You are Limited to one card only. You can either remove
            it and post a new one or replace it with another one,
            and it will automatically be removed and taken to the
            Archived Job Cards section.
                      </p>
          <br />
          <br />

          {!current_active_card ? (
            <div className="card  no-active-job-card">
              <div className="card-body d-flex justify-content-center">
                <d>
                  {" "}
                  <svg
                    width={69}
                    height={68}
                    viewBox="0 0 69 68"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M66.9233 29.9979L38.7627 1.83435C37.6816 0.759541 36.219 0.15625 34.6946 0.15625C33.1701 0.15625 31.7076 0.759541 30.6264 1.83435L2.46582 29.9979C1.39101 31.079 0.78772 32.5415 0.78772 34.066C0.78772 35.5905 1.39101 37.053 2.46582 38.1341L30.6293 66.2947C32.8661 68.5315 36.5231 68.5315 38.7656 66.2947L66.9291 38.1312C68.0007 37.0496 68.602 35.5886 68.602 34.066C68.602 32.5434 68.0007 31.0823 66.9291 30.0007L66.9233 29.9979ZM32.4032 15.3181C33.0357 14.6367 33.8407 14.2946 34.8297 14.2946C35.8187 14.2946 36.6237 14.6338 37.2562 15.3095C37.8887 15.9851 38.2049 16.8332 38.2049 17.8538C38.2049 18.7336 37.9174 21.6862 37.3338 26.7146C36.7588 31.7458 36.2413 36.6046 35.8101 41.2966H33.7487C33.3606 36.6017 32.8862 31.743 32.3112 26.7146C31.7419 21.6833 31.4544 18.7336 31.4544 17.8538C31.4544 16.8476 31.7707 16.0081 32.4032 15.3238V15.3181ZM37.3769 52.1756C36.664 52.8656 35.8158 53.2106 34.8297 53.2106C33.8436 53.2106 32.9954 52.8656 32.2853 52.1756C31.5752 51.4798 31.2216 50.6404 31.2216 49.6542C31.2216 48.6681 31.5752 47.82 32.2853 47.1099C32.9983 46.3969 33.8465 46.0404 34.8326 46.0404C35.8187 46.0404 36.6668 46.3969 37.3769 47.1099C38.0957 47.82 38.4493 48.6681 38.4493 49.6542C38.4493 50.6404 38.0928 51.4799 37.3798 52.1727L37.3769 52.1756Z"
                      fill="black"
                    />
                  </svg>
                </d>
              </div>
              <p className="d-flex justify-content-center"> You do not have an active job card </p>
            </div>
          ) : (
              <div className="active-job-card">
                <small className="active-card-text">
                  Posted Today, ends in 3 days{" "}
                </small>
                <a
                  href="##"
                  data-target="#jobCardUrlModal"
                  data-toggle="modal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={34}
                    height={24}
                    viewBox="0 0 24 24"
                    color="grey"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-share-2"
                  >
                    <circle cx={18} cy={5} r={3} />
                    <circle cx={6} cy={12} r={3} />
                    <circle cx={18} cy={19} r={3} />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                </a>
                {/* <div className="space delete-icon"> */}
                <a
                  href="##"
                  data-target="#deleteCardModal"
                  data-toggle="modal"
                  style={{ color: "#FFBB00", marginLeft: "2.4em" }}
                >
                  <img
                    src={process.env.PUBLIC_URL + "/images/x_icon.png"}
                    alt="xicon"
                    height={35}
                    width={35}
                  />
                </a>
                {/* </div> */}

                <div
                  className="modal fade"
                  id="archiveCardModal"
                  tabIndex={-1}
                  role="dialog"
                  aria-labelledby="exampleModalCenterTitle"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header border-0 pb-0 text-right ">
                        <button
                          type="button"
                          className="btn closeModalBtn"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <img src={closeBtn} alt="" />
                        </button>
                      </div>
                      <div className="modal-body text-center">
                        <p>
                          We have noticed you have 4 archived cards. By
                          archiving this one, it will replace the oldest
                          archived card. Do you wish to proceed?
                        </p>
                      </div>
                      <div className="modal-footer border-0 d-flex justify-content-between pb-5">
                        <button
                          type="button"
                          form="my-form1"
                          data-dismiss="modal"
                          className="btn btn-secondary btn-block"
                          style={{ width: "25%", margin: "0 auto" }}
                          onClick={() => dispatch(updateJobcardStatus(token, current_active_card._id, { status: 'EXPIRED' }))}
                        >
                          Yes, Archive
                        </button>
                        <button
                          type="button"
                          data-dismiss="modal"
                          className="btn btn-secondary btn-block"
                          style={{ width: "25%", margin: "0 auto" }}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="deleteCardModal"
                  tabIndex={-1}
                  role="dialog"
                  aria-labelledby="exampleModalCenterTitle"
                  aria-hidden="true"
                  style={{ display: "none" }}
                >
                  <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header border-0 pb-0 text-right">
                        <button
                          type="button"
                          className="btn closeModalBtn"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <img src={closeBtn} alt="" />
                        </button>
                      </div>
                      <div className="modal-body text-center">
                        <p>
                          Heads up! You are about to remove an active card. By removing the card, it will stop running and employers will not see it. Are you sure you want to remove?
                      </p>
                      </div>
                      <div className="modal-footer border-0">
                        <button
                          type="submit"
                          form="archive-card"
                          data-dismiss="modal"
                          data-target="#archiveCardModal"
                          data-toggle="modal"
                          className="btn btn-secondary btn-block"
                          style={{ width: "70%", margin: "0 auto" }}
                        >
                          Yes, Remove and Archive
                        </button>
                      </div>
                      <div className="modal-footer border-0">
                        <button
                          type="submit"
                          form="my-form"
                          data-dismiss="modal"
                          className="btn btn-secondary btn-block"
                          style={{ width: "70%", margin: "0 auto" }}
                          onClick={() => dispatch(delJobCard(token, current_active_card._id))}
                        >
                          Yes, Remove and Delete
                        </button>
                      </div>
                      <div className="modal-footer border-0 pb-5">
                        <button
                          type="button"
                          className="btn btn-secondary btn-block"
                          data-dismiss="modal"
                          style={{ width: "70%", margin: "0 auto" }}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="archiveCardModal"
                  tabIndex={-1}
                  role="dialog"
                  aria-labelledby="exampleModalCenterTitle"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header border-0 text-right">
                        <button
                          type="button"
                          className="btn closeModalBtn"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <img src={closeBtn} alt="" />
                        </button>
                      </div>
                      <div className="modal-body">
                        <p>
                          We have noticed you have four archived cards.
                          By Archiving this one, it will replace the
                          oldest archived card. Do you wish to proceed?
                        </p>
                      </div>
                      <div className="modal-footer border-0">
                        <button
                          type="submit"
                          form="archive-card1"
                          className="btn btn-secondary mr-auto"
                          style={{ float: "left" }}
                        >
                          Yes, Archive
                        </button>
                      </div>
                      <div className="modal-footer border-0">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card shadow  active-main-card">
                  <img
                    src="https://instadriver.co/img/card/top_card.PNG"
                    className="card-img-top"
                    alt="top_card"
                  />
                  <img
                    id="preview_image"
                    src={current_active_card.imageUrl}
                    className="w-90"
                    alt="profile_photo"
                    style={{
                      position: "absolute",
                      top: 25,
                      left: 35,
                      borderRadius: "50%",
                      width: 133,
                      height: 132,
                    }}
                  />
                  <div className="card-body d-flex justify-content-center">
                    <h5
                      className="card-title"
                      style={{
                        position: "absolute",
                        margin: "0 auto",
                        top: 185,
                        fontWeight: 500,
                      }}
                    >
                      {current_active_card.name}
                    </h5>
                    <p
                      className="card-text text-center output"
                      style={{ display: "inline-block", width: 300 }}
                    >
                      {current_active_card.description}
                    </p>
                    <p
                      className="card-text"
                      style={{
                        textAlign: "center",
                        color: "#F8BD00",
                        fontWeight: 600,
                        position: "absolute",
                        bottom: 55,
                        fontSize: 16,
                      }}
                    >
                      Contact
                              </p>
                    <p
                      className="card-text align-text-bottom"
                      style={{
                        textAlign: "center",
                        fontWeight: 600,
                        color: "#575353",
                        position: "absolute",
                        bottom: 30,
                      }}
                    >
                      {current_active_card.mobileNumber}
                    </p>
                  </div>
                </div>
                <br />
                <table className="table-borderless active-card-table">
                  <thead>
                    <tr>
                      <td scope="col">
                        <div className=" btn  non-box" id="demo">
                          {current_active_card.category[0] ? current_active_card.category[0] : ''}
                        </div>
                      </td>
                      <td scope="col">
                        <div className=" btn non-box" id="demo1">
                          {current_active_card.category[1] ? current_active_card.category[1] : ''}
                        </div>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <div className="btn non-box">
                          {current_active_card.experience}+ years Experience
                                  </div>
                      </td>
                      <td>
                        <div className="btn non-box">
                          {current_active_card.licenseAge} years Licence
                                  </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <div className="btn  non-box">
                          {current_active_card.location.title}, Kenya
                                  </div>
                      </td>
                      <td>
                        <div className="btn non-box">
                          Salary KES {current_active_card.salary.min} to {current_active_card.salary.max}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <button
                  type="button"
                  className="btn-block custom-archive1"
                  style={{
                    width: 320,
                    backgroundColor: "#57CA22",
                    border: "none",
                    color: "white",
                    fontWeight: 500,
                    borderRadius: 5,
                    height: 40,
                    outline: "none",
                  }}
                >
                  Active
              </button>
              </div>
            )}

        </div>
      </div>
    </div>
  );
}

export default ActiveCard;