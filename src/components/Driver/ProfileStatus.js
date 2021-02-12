import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAvailableforHire } from "../../redux/actions/driver_actions/driver_profile_actions";
import DriverSideBarFunction from "../Layout/MainSideBar/Driver/DriverSideBarFunction";

const ProfileStatus = () => {
  const { token } = useSelector(
    (state) => state.user_reducers.user_credentials
  );
  const { availableforHire } = useSelector(
    (state) => state.driver_reducers.driver_profile
  );
  const [available, setAvailable] = useState(availableforHire);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setAvailable(!available);
    dispatch(updateAvailableforHire(token, { availableforHire: !available }));
  };

  return (
    <div className="search-driver-container px-5">
      <div className="row ml-auto">
        <DriverSideBarFunction />
        <div className="col-xl-9 mt-5 pt-5">
          <h3>Status</h3>
          <p style={{ fontSize: "16px" }}>
            Available status will appear on your profile when employers view
            your profile. It means that you are available for hire. It doesn't
            matter whether you are already hired or unemployed, when available
            is enabled it means you are still looking for greener pastures. If
            it is disabled, an Unavailable status is shown. How do you benefit
            from Unavailable status? Threefold:
          </p>{" "}
          <br />
          <p style={{ fontSize: "16px" }}>
            1) To inform employers that you do not need a job either because you
            are employed or you are on vacation/etc; <br />
            2) Employers who insist to hire you, should offer a better package
            than the one you have; <br />
            3) You can get the url for your profile and send it to your friend,
            or anyone of your choice. It will have an unavailable status but you
            will still have an online profile.
          </p>{" "}
          <br />
          <p style={{ fontSize: "16px" }}>
            Move the slider left to go unavailable and right to enable available
            status.
          </p>
          <div
            style={{ color: "#575353" }}
            className="font-weight-bold py-3 d-flex align-items-center"
          >
            <h3 className="mt-4">Available</h3>
            <form className="ml-4">
              <div className="custom-control custom-switch switchToggle">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  name="available"
                  value={available}
                  id="available"
                  checked={available}
                  onChange={(e) => handleChange(e)}
                />
                <label className="custom-control-label" for="available"></label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileStatus;
