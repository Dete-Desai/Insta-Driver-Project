import React from 'react';
import get from "lodash/get"

const SalaryRange = ({userInfo}) => {
  return (
    <div className="salary__range section__style pr-2 pb-3 pt-5 bg-white mt-3">
      <div className="col-md-10 m-auto px-5">
        <h5 className="form__heading">Salary Range (For Full Time Employment)</h5>
      </div>
      <form className="col-md-12 mt-4">
        <div className="row">
          <div className="col-md-10 m-auto px-5">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-6 col-xs-6">
                <div className="form-group row align-items-center">
                  <label className="col-sm-12 col-md-12 col-lg-3 mb-0 label__style text-left" for="minimum">Minimum</label>
                  <div className="col-sm-12 col-md-12 col-lg-9">
                    <span className="text-gray">
                    {get(userInfo, "salaryRangeforFullTime") ? 
                        `${get(userInfo, "salaryRangeforFullTime.MinimumPay")} ${get(userInfo, "currency")}` : ""}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-6 col-xs-6">
                <div className="form-group row align-items-center">
                  <label className="col-sm-12 col-md-12 col-lg-3 mb-0 label__style text-left" for="maximum">Maximum</label>
                  <div className="col-sm-12 col-md-12 col-lg-9">
                    <span className="text-gray">
                    {get(userInfo, "salaryRangeforFullTime") ? 
                        `${get(userInfo, "salaryRangeforFullTime.MaximumPay")} ${get(userInfo, "currency")}` : ""}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div >
  );
};

export default SalaryRange;