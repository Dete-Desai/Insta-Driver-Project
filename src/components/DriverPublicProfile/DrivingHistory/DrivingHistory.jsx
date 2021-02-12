import React from 'react';

const DrivingHistory = ({driver}) => {
  return (
    <div className="previous__history section__style pr-2 pb-3 pt-5 bg-white mt-3">
      <div className="col-11 m-auto">
        <h5 className="form__heading">My Previous Non Ride-hailing Employment</h5>
      </div>
      <div className="col-12 mt-4 p-0">
        <div className="row">
          <div className="col-11 m-auto">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                <div className="col-lg-4 col-md-6 d-flex align-items-center">
                    <label className="col-sm-6 text-left label__style mb-0" for="employer">Employer One</label>
                    <div className="col-sm-6 p-0">
                    {driver && driver.drivingHistory && driver.drivingHistory.employerOne?<span className="text-gray">{  
                        driver.drivingHistory.employerOne.companyName
                      }</span>
                      :<span className="alert-warning">Employer One company name not available</span>}
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 d-flex align-items-center">
                    <label className="col-sm-6 text-left label__style mb-0" for="employer">Category</label>
                    <div className="col-sm-6 p-0">
                    {driver && driver.drivingHistory && driver.drivingHistory.employerOne?<span className="text-gray">{  
                        driver.drivingHistory.employerOne.category
                      }</span>
                      :<span className="alert-warning">Employer One c not available</span>}
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 d-flex align-items-center">
                    <label className="col-sm-6 text-left label__style mb-0" for="employer">Period Worked</label>
                    <div className="col-sm-6 p-0">
                    {driver && driver.drivingHistory && driver.drivingHistory.employerOne?<span className="text-gray">{  
                        driver.drivingHistory.employerOne.periodWorked
                      }</span>
                      :<span className="alert-warning">Employer One period worked not available</span>}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mb-3 mt-5">
                <div className="row">
                  <div className="col-lg-4 col-md-6 d-flex align-items-center">
                    <label className="col-sm-6 text-left label__style mb-0" for="employer">Employer Two</label>
                    <div className="col-sm-6 p-0">
                    {driver && driver.drivingHistory && driver.drivingHistory.employerTwo?<span className="text-gray">{  
                        driver.drivingHistory.employerTwo.companyName
                      }</span>
                      :<span className="alert-warning">Employer Two company name not available</span>}
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 d-flex align-items-center">
                    <label className="col-sm-6 text-left label__style mb-0" for="employer">Category</label>
                    <div className="col-sm-6 p-0">
                    {driver && driver.drivingHistory && driver.drivingHistory.employerTwo?<span className="text-gray">{  
                        driver.drivingHistory.employerTwo.category
                      }</span>
                      :<span className="alert-warning">Employer Two category not available</span>}
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 d-flex align-items-center">
                    <label className="col-sm-6 text-left label__style mb-0" for="employer">Period Worked</label>
                    <div className="col-sm-6 p-0">
                    {driver && driver.drivingHistory && driver.drivingHistory.employerTwo?<span className="text-gray">{  
                        driver.drivingHistory.employerTwo.periodWorked
                      }</span>
                      :<span className="alert-warning">Employer Two period worked not available</span>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10 m-auto py-4 px-5">
            <p style={{ color: "#969393" }}>Ride hailing employment is working for ride-hailing apps e.g. Uber, Bolt. Non-ride-hailing is working as a driver in the traditional employment in transport sector which does not use apps.</p>
          </div>
        </div>
      </div>
    </div >
  );
};

export default DrivingHistory;