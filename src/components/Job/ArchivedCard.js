import { Archive } from "@material-ui/icons";
import React from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { updateJobcardStatus } from "../../redux/actions/driver_actions/job_card_actions";
import closeBtn from "../../dist/icons/closeBtn.png";

const ArchivedCard = ({ cardValues, token }) => {
  const current_active_card = useSelector(
    (state) => state.driver_reducers.current_active_card
  );
  const dispatch = useDispatch();
  const archived_date = moment(cardValues.updateAt).format("DD MMMM YYYY");
  return (
    <div className="col-sm">
      <small className="archived_on_text">Archived on {archived_date}</small>
      <div className="card shadow archived-job-cards">
        <img
          src="https://instadriver.co/img/card/top_card.PNG"
          className="card-img-top"
          alt="top_card"
        />
        <img
          id="preview_image"
          src={cardValues ? `${cardValues.location.title}` : `NA`}
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
            {cardValues ? cardValues.name : `John Doe`}
          </h5>
          <p
            className="card-text text-center output"
            style={{
              display: "inline-block",
              width: 300,
            }}
          >
            {cardValues
              ? cardValues.description
              : `I am very honest and responsible.`}
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
            {cardValues ? cardValues.mobileNumber : `9993339993`}
          </p>
        </div>
      </div>
      <br />
      <table className="table-borderless archived-table">
        <thead>
          <tr>
            <td scope="col">
              <div className=" btn  non-box" id="demo">
                {cardValues ? cardValues.category[0] : `NA`}
              </div>
            </td>
            <td scope="col">
              <div className=" btn non-box" id="demo1">
                {cardValues ? cardValues.category[1] : `NA`}
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {" "}
              <div className="btn non-box">
                {cardValues
                  ? `${cardValues.experience} +years experience`
                  : `NA`}
              </div>
            </td>
            <td>
              <div className="btn non-box">
                {cardValues ? `${cardValues.licenseAge} +years licence` : `NA`}
              </div>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <div className="btn  non-box">
                {cardValues ? `${cardValues.location.title}` : `NA`}
              </div>
            </td>
            <td>
              <div className="btn non-box">
                {cardValues
                  ? `Salary ${cardValues.salary.min} to ${cardValues.salary.max}`
                  : `NA`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <button
        type="button"
        data-target="#newCardModal1"
        data-toggle="modal"
        className="btn-block custom-archive1 repost-button"
      >
        Repost Job Card
      </button>
      <br />
      <br />
      <div
        className="modal fade"
        id="newCardModal1"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
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
                You already have one job card that is active and running. If you
                proceed to post a new one, it will replace the active one.Are
                you sure you want to replace the current card with this one?
              </p>
            </div>
            <div className="modal-footer border-0 d-flex justify-content-between pb-5">
              <button
                type="button"
                form="my-form1"
                data-dismiss="modal"
                className="btn btn-secondary btn-block"
                style={{ width: "25%", margin: "0 auto" }}
                onClick={() => {
                  dispatch(
                    updateJobcardStatus(token, current_active_card._id, {
                      status: "EXPIRED",
                    })
                  );
                  dispatch(
                    updateJobcardStatus(token, cardValues._id, {
                      status: "ACTIVE",
                    })
                  );
                }}
              >
                Yes, Replace
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
    </div>
  );
};

export default ArchivedCard;
