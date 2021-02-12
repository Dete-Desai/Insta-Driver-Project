import React from "react";
import { useSelector } from "react-redux";
import { getDriverProfilePercent } from "../../Util/ProfilePercent";

export default function HireDriverCard({ jobCardDetails }) {
  const driver_profile = useSelector(
    (state) => state.driver_reducers.driver_profile
  );

  const isProfileComplete = () => {
    if (!driver_profile) return false;
    if (getDriverProfilePercent(driver_profile) !== 100) return false;
    //else
    return true;
  };

  return (
    <div>
      <div
        className="d-flex justify-content-center"
        style={{
          color: "#4B4747",
          fontWeight: "500",
          marginLeft: "25",
        }}
      >
        <b>Your job card will appear like this</b>
      </div>
      <br />
      <div className="card shadow maincard previewcard">
        <img
          src="https://instadriver.co/img/card/top_card.PNG"
          className="card-img-top"
          alt="top_card"
        />
        <img
          id="preview_image"
          src={
            driver_profile && driver_profile.avatar
              ? driver_profile.avatar
              : "https://instadriver.co/images/uploads/user/thumb/IMG_2751604304202.png"
          }
          className="w-90 "
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
            className="card-title "
            style={{
              fontWeight: 500,
              textAlign: "center",
              color: "#000000",
              position: "absolute",
              top: 185,
            }}
          >
            {driver_profile && driver_profile.firstName
              ? ` ${driver_profile.firstName} ${driver_profile.lastName}`
              : "John Doe"}
          </h5>
          <div
            className="spaced"
            style={{
              height: 5,
              display: "none",
              position: "absolute",
              top: 10,
            }}
          />{" "}
          <br />
          <p
            className="card-text text-center output"
            id="add_to_me"
            style={{ display: "inline-block", width: 300 }}
          >
            {jobCardDetails ? jobCardDetails.card_description : ""}
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
            {driver_profile ? driver_profile.mobileNumber : "9993339993"}
          </p>
        </div>
      </div>
      <br />
      <table className="table-borderless maintable">
        <thead>
          <tr>
            <td scope="col">
              <div className=" btn  non-box">
                <d
                  id="demo"
                  style={{
                    position: "relative",
                    bottom: 4,
                    cursor: "default",
                  }}
                >
                  {jobCardDetails
                    ? jobCardDetails.driver_category1
                    : "Personal Driver"}
                </d>
              </div>
            </td>
            <td scope="col">
              <div className=" btn non-box">
                <d
                  id="demo1"
                  style={{
                    position: "relative",
                    bottom: 4,
                    cursor: "default",
                  }}
                >
                  {jobCardDetails
                    ? jobCardDetails.driver_category2
                    : "Truck driver"}
                </d>
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {" "}
              <div className="btn non-box">
                <d
                  style={{
                    position: "relative",
                    bottom: 4,
                    cursor: "default",
                  }}
                >
                  {driver_profile
                    ? driver_profile.qualification.drivingExperience
                    : "3"}
                  + years Experience
                </d>
              </div>
            </td>
            <td>
              <div className="btn non-box">
                <d
                  style={{
                    position: "relative",
                    bottom: 4,
                    cursor: "default",
                  }}
                >
                  {" "}
                  {driver_profile
                    ? driver_profile.qualification.licensePeriod
                    : "2"}
                  + years Licence
                </d>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <div className="btn  non-box">
                <d
                  style={{
                    position: "relative",
                    bottom: 4,
                    cursor: "default",
                  }}
                >
                  {driver_profile
                    ? driver_profile.personalInformation.city
                    : `Nairobi, Kenya`}
                </d>
              </div>
            </td>
            <td>
              <div className="btn non-box">
                <d
                  style={{
                    position: "relative",
                    bottom: 4,
                    cursor: "default",
                  }}
                >
                  {driver_profile && driver_profile.salaryRangeforFullTime
                    ? `Salary ${driver_profile.currency} ${driver_profile.salaryRangeforFullTime.MinimumPay} to ${driver_profile.salaryRangeforFullTime.MaximumPay}`
                    : `Salary KES 2000 to 50000`}
                </d>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <button
        type="submit"
        name="create_card"
        id="create_card"
        data-target="#newCardModal"
        data-toggle="modal"
        className={`btn btn-block create-box maincard ${
          isProfileComplete() ? "bg-warning" : "bg-secondary"
        }`}
        disabled={!isProfileComplete()}
        style={{
          backgroundColor: "grey",
          color: "white",
          fontWeight: 500,
          width: 336,
          borderRadius: "5px !important",
        }}
      >
        Post Job Card
      </button>
    </div>
  );
}
