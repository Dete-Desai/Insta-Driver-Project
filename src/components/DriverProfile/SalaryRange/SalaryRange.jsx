import React from "react";
import { useDispatch } from "react-redux";
import get from "lodash/get";
import { updateSalaryRange } from "../../../redux/actions/driver_actions/driver_profile_actions";
import { PostRoute } from "../../../Api/index";
const { Post, Get } = PostRoute();

const SalaryRange = ({
  userInfo,
  handleChange,
  formStaticDataProp,
  session_token,
}) => {
  const dispatch = useDispatch();

  function handleSalarySubmit(e) {
    e.preventDefault();

    //data object created for request with the help of lodash's get
    let data = {
      MinimumPay: parseInt(
        get(userInfo, "salaryRangeforFullTime.MinimumPay"),
        10
      ),
      MaximumPay: parseInt(
        get(userInfo, "salaryRangeforFullTime.MaximumPay"),
        10
      ),
    };

    //api dispatch
    dispatch(updateSalaryRange(session_token, data));
    alert("Salary range info submitted");
  }

  return (
    <div className="daily__salary section__style pb-3 pr-2 pt-5 bg-white mt-3">
      <div className="col-md-10 m-auto px-5">
        <h5 className="form__heading">
          State The Salary Range For Full Time Employment
        </h5>
        <div className="col-md-12 px-4 py-2 currencyInfo my-4">
          <p style={{ color: "#969393" }}>
            Don't be greedy. If you indicate a high salary, you may reduce the
            odds of getting hired. It would be wonderful if you know the
            standard salary for your profession, and use that one to set salary
            range.
          </p>
        </div>
      </div>
      <form className="col-md-12 mt-4" onSubmit={handleSalarySubmit}>
        <div className="row">
          <div className="col-md-10 m-auto px-5">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group row align-items-center">
                  <label
                    className="col-sm-3 label__style text-left"
                    htmlFor="minimum"
                  >
                    Minimum
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control inputIcon-none w-75"
                      value={
                        get(userInfo, "salaryRangeforFullTime.MinimumPay") || ""
                      }
                      name="salaryRangeforFullTime.MinimumPay"
                      id="minimum"
                      onChange={handleChange}
                      required
                      min="1"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row align-items-center">
                  <label
                    className="col-sm-3 text-left label__style"
                    htmlFor="maximum"
                  >
                    Maximum
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control inputIcon-none w-75"
                      value={
                        get(userInfo, "salaryRangeforFullTime.MaximumPay") || ""
                      }
                      name="salaryRangeforFullTime.MaximumPay"
                      id="maximum"
                      onChange={handleChange}
                      required
                      min="1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-right col-md-12 mr-3 mb-2">
            <button type="submit" className="btn submitBtn">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SalaryRange;
