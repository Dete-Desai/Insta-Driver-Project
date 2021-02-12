import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFreezeProfile } from "../../redux/actions/driver_actions/driver_profile_actions";
import DriverSideBarFunction from "../Layout/MainSideBar/Driver/DriverSideBarFunction";

const FreezeProfile = () => {
  const { token } = useSelector(
    (state) => state.user_reducers.user_credentials
  );
  const { freezeProfile } = useSelector(
    (state) => state.driver_reducers.driver_profile
  );
  const [freeze, setFreeze] = useState(freezeProfile);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFreeze(!freeze);
    dispatch(updateFreezeProfile(token, { freezeProfile: !freeze }));
  };
  return (
    <div className="search-driver-container px-5">
      <div className="row ml-auto">
        <DriverSideBarFunction />
        <div className="col-xl-9 mt-5 pt-5">
          <h3>Freeze Profile </h3>
          <p style={{ fontSize: "16px" }}>
            Heads up ! When you freeze your account, you will not appear on
            search results. Employers will not be able to find you until you
            unfreeze. If you want to be searchable but still appear unavailable,
            use the Status option to disable Available status. But if you want
            to stop appearing in search results, enable the Freeze option here.
            When you freeze your profile, you will cease to appear on search
            results but your profile url will still work. So when you send the
            url to friends on social media, they will be able to view it. But on
            InstaDriver search results, you will not appear. Move the slider
            right to Freeze profile and left to unfreeze profile.
          </p>{" "}
          <br />
          <div
            style={{ color: "#575353" }}
            className="font-weight-bold py-3 d-flex align-items-center"
          >
            <h3 className="mt-4">Freeze Profile</h3>
            <form className="ml-4">
              <div className="custom-control custom-switch switchToggle">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  name="available"
                  id="available"
                  value={freeze}
                  checked={freeze}
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

export default FreezeProfile;
