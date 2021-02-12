import { React, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateMoreInfoShow } from "../../../redux/actions/driver_actions/driver_profile_actions";
import get from "lodash/get";

import { PostRoute } from "../../../Api/index";
const { Post, Get } = PostRoute();

const MoreInform = ({
  userInfo,
  handleChange,
  formStaticDataProp,
  session_token,
}) => {
  let moreInfoProp = get(userInfo, "willProfileMoreInformation");
  const [moreInfoCheck, setMoreInfoCheck] = useState(moreInfoProp);
  const dispatch = useDispatch();

  useEffect(() => {
    setMoreInfoCheck(moreInfoProp);
  }, [moreInfoProp]);

  function handleExtraInfoSubmit(e) {
    e.preventDefault();
    let infoshow = get(userInfo, "willProfileMoreInformation");
    dispatch(updateMoreInfoShow(session_token, infoshow));
    alert("personal info submitted");
  }

  return (
    <div className=" moreInfo section__style pb-3 pt-5 bg-white mt-3">
      <div className="col-md-10 m-auto px-5">
        <h5 className="form__heading">
          Would You Be Willing To Provide More Information Upon Request?
        </h5>
      </div>
      <form className="col-md-12 mt-5 pl-5" onSubmit={handleExtraInfoSubmit}>
        <div className="row">
          <div className="col-md-10 d-flex m-auto">
            <div id="RadioStyle" className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="willProfileMoreInformation"
                id="inlineRadio5"
                checked={get(userInfo, "willProfileMoreInformation") === true}
                onChange={handleChange}
                onChange={(e) => {
                  if (moreInfoCheck !== true) {
                    handleChange(e);
                    setMoreInfoCheck(!moreInfoCheck);
                  }
                }}
                value={true}
              />
              <label className="form-check-label ml-3" htmlFor="inlineRadio5">
                Yes
              </label>
            </div>
            <div id="RadioStyle" className="form-check form-check-inline  ml-4">
              <input
                className="form-check-input"
                type="radio"
                name="willProfileMoreInformation"
                id="inlineRadio6"
                checked={get(userInfo, "willProfileMoreInformation") !== true}
                onChange={(e) => {
                  if (moreInfoCheck !== false) {
                    handleChange(e);
                    setMoreInfoCheck(!moreInfoCheck);
                  }
                }}
                value={false}
              />
              <label className="form-check-label ml-3" htmlFor="inlineRadio6">
                No
              </label>
            </div>
          </div>
        </div>

        <div className="text-right col-md-12 mr-2 mb-2">
          <button type="submit" className="btn submitBtn">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default MoreInform;
