import React from 'react';

const HourlyRange = ({driver}) => {
  return (
    <div className="hourly__range section__style pr-2 pb-3 pt-5 bg-white mt-3">
      <div className="col-md-10 m-auto px-5">
        <h5 className="form__heading">Hourly Rate For On-Demand Driver</h5>
      </div>
      <div className="col-md-12 mt-4">
        <div className="row">
        <div className="col-md-10 m-auto px-5">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-6 col-xs-6">
                <div className="form-group row align-items-center">
                  <label className="col-sm-12 col-md-12 col-lg-3 mb-0 label__style text-left" for="minimum">Minimum</label>
                  <div className="col-sm-12 col-md-12 col-lg-9">
                  {driver && driver.hourlyRange?<span className="text-gray">{driver.hourly.MinimumPay}? 
                  </span>:
                   <span className="alert-warning">Minimum Hourly rate information not available</span>
                  }
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-6 col-xs-6">
                <div className="form-group row align-items-center">
                  <label className="col-sm-12 col-md-12 col-lg-3 mb-0 label__style text-left" for="maximum">Maximum</label>
                  <div className="col-sm-12 col-md-12 col-lg-9">
                  {driver && driver.hourlyRange?<span className="text-gray">{driver.hourly.MaximumPay}? 
                  </span>:
                   <span className="alert-warning">Minimum Hourly rate information not available</span>
                  }
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10 m-auto py-4 px-5">
            <p style={{ color: "#969393" }}>Hourly rate means you can hire the driver on hourly basis. You can hire the driver for 3 hours or 7 hours, etc</p>
          </div>
        </div>
      </div>
    </div >
  );
};

export default HourlyRange;