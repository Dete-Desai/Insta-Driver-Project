import React from 'react';
import get from "lodash/get";

const DailyTarget = ({userInfo}) => {
  return (
    <div className="daily__target section__style pr-2 pb-3 pt-5 bg-white mt-3">
      <div className="col-md-10 m-auto px-5">
        <h5 className="form__heading">Daily Target Payout (For Ride-hailing taxis)</h5>
        <div className="col-md-12 px-4 py-2 currencyInfo my-4">
          <p style={{ color: "#969393" }}>The Daily Target Payout is the daily amount a driver submits to the employer/partner. State the min and max amount you will be fine with.</p>
        </div>
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
                    {get(userInfo, "dailyTargetPayout.MinimumPay") ? 
                      `${get(userInfo, "dailyTargetPayout.MinimumPay")} ${get(userInfo, "currency")}` : ""}
                  </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-6 col-xs-6">
                <div className="form-group row align-items-center">
                  <label className="col-sm-12 col-md-12 col-lg-3 mb-0 label__style text-left" for="maximum">Maximum</label>
                  <div className="col-sm-12 col-md-12 col-lg-9">
                  <span className="text-gray">
                    {get(userInfo, "dailyTargetPayout.MaximumPay") ? 
                        `${get(userInfo, "dailyTargetPayout.MaximumPay")} ${get(userInfo, "currency")}` : ""}
                  </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-right col-md-12 mr-2 mb-2">
            {/* <button type="submit" className="btn submitBtn">Save</button> */}
          </div>
        </div>
      </form>
    </div >
  );
};

export default DailyTarget;