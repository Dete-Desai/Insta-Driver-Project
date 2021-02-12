import React from "react";
import { useDispatch } from "react-redux";
import { updateHireReason } from "../../../redux/actions/driver_actions/driver_profile_actions";
import get from "lodash/get";

import { PostRoute } from "../../../Api/index";
const { Post, Get } = PostRoute();

const HireReason = ({
  userInfo,
  handleChange,
  formStaticDataProp,
  session_token,
}) => {
  const dispatch = useDispatch();

  function reasonSubmit(e) {
    e.preventDefault();

    //data object created for request with the help of lodash's get
    let data = {
      // considerToHire: get(userInfo, "considerToHire"),
      reasonOne : get(userInfo, "considerToHire")[0],
      reasonTwo : get(userInfo, "considerToHire")[1]
    
    };

    dispatch(updateHireReason(session_token, data));
    alert("Reason to hire info submitted");
  }

  return (
    <div className=" hireReason section__style pb-3 pt-5 bg-white mt-3">
      <div className="col-md-10 m-auto px-5">
        <h5 className="form__heading">Why I Should Be Considered For Hire</h5>
        <div className="col-md-12 px-4 py-2 currencyInfo my-4">
          <p style={{ color: "#969393" }}>
            In this limited space, give in summary, two reasons why the employer
            should consider hiring you and not the other thousands of profiles.
            Be sincere and original.
          </p>
        </div>
      </div>
      <form className="col-md-12 mt-4" onSubmit={reasonSubmit}>
        <div className="px-5">
          <div className="col-md-10 p-0 m-auto">
            <h6 className="form__heading2 mb-3">Point One/Reason One</h6>
            <div style={{ width: "100%" }} className="text-left">
              <textarea
                className="textAreaWidth"
                style={{ width: "74%", height: "130px" }}
                maxLength="300"
                placeholder="(Min. of 20 characters & max. of 300 characters)"
                name="considerToHire[0]"
                value={get(userInfo, "considerToHire[0]")}
                onChange={handleChange}
                id="reasonOne"
                required
              ></textarea>
              <div className="col-md-9">
                <p
                  style={{ color: "#969393", width: "100%" }}
                  className="text-right p-0"
                >
                  0/300
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-10 m-auto p-0">
            <h6 className="form__heading2 mb-3">Point Two/Reason Two</h6>
            <div style={{ width: "100%" }} className="text-left">
              <textarea
                className="textAreaWidth"
                style={{ width: "74%", height: "130px" }}
                maxLength="300"
                placeholder="(Min. of 20 characters & max. of 300 characters)"
                onChange={handleChange}
                name="considerToHire[1]"
                value={get(userInfo, "considerToHire[1]")}
                id="reasonTwo"
                required
              ></textarea>
              <div className="row">
                <div className="col-md-9">
                  <p
                    style={{ color: "#969393", width: "100%" }}
                    className="text-right p-0"
                  >
                    0/300
                  </p>
                </div>
              </div>
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

export default HireReason;
