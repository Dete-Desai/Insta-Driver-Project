import React from 'react';
import map from "lodash/map";
import get from "lodash/get";
import compact from "lodash/compact";
import values from "lodash/values";
import checked from '../../../dist/icons/checked.png';
import DriverExperience from '../DriverExperience/DriverExperience';
import { PersonalDriverData, schoolBusDriverData, rideSharingData, truckDriverData } from '../DriverExperience/SelectValue';
import selectIcon from '../../../dist/icons/selectIcon.svg'

const DriverCategory = ({userInfo,
  formStaticDataProp,
  handleChange,session_token}) => {
  return (
    <div className="DriverCategory-wrapper">
      <div className="driver__category section__style px-5 pb-3 pt-5 bg-white mt-3">
        <h5 className="form__heading">Driver Category (ies)</h5>
        <form className="row mt-5">
          <div className="col-md-6 driverCheckbox">
            {/* <div className="d-flex align-items-center pb-3 pl-0">
              <img className="mr-3" src={checked} alt="" />
              <span className="text-gray">Personal Driver</span>
            </div>
            <div className="d-flex align-items-center pb-3 pl-0">
              <img className="mr-3" src={checked} alt="" />
              <span className="text-gray">Ride-hailing driver</span>
            </div> */}
            {map(
            values(formStaticDataProp.driverCategory),
            (val, i) =>
              i % 2 === 0 && (
                <div className="form-check pb-3 pl-0" key={i}>
                  {console.log("key--", i)}
                  <input
                    disabled
                    type="checkbox"
                    value={`${val}`}
                    className="form-check-input"
                    onChange={handleChange}
                    name={`driverCategories[${i}]`}
                    id={`Check${i}`}
                    checked={get(userInfo, "driverCategories").includes(
                      `${val}`
                    )}
                  />
                  <label className="form-check-label ml-2" for={`Check${i}`}>
                    &nbsp; {val}
                  </label>
                </div>
              )
          )}
          </div>
          <div className="col-md-6 driverCheckbox">
            {/* <div className="d-flex align-items-center pb-3 pl-0">
              <img className="mr-3" src={checked} alt="" />
              <span className="text-gray">Personal Driver</span>
            </div>
            <div className="d-flex align-items-center pb-3 pl-0">
              <img className="mr-3" src={checked} alt="" />
              <span className="text-gray">School Bus Driver</span>
            </div> */}
            {map(
            values(formStaticDataProp.driverCategory),
            (val, i) =>
              i % 2 !== 0 && (
                <div className="form-check pb-3 pl-0" key={i}>
                  {console.log("key--", i)}
                  <input
                    disabled
                    type="checkbox"
                    value={`${val}`}
                    className="form-check-input"
                    onChange={handleChange}
                    name={`driverCategories[${i}]`}
                    id={`Check${i}`}
                    checked={get(userInfo, "driverCategories").includes(
                      `${val}`
                    )}
                  />
                  <label className="form-check-label ml-2" for={`Check${i}`}>
                    &nbsp; {val}
                  </label>
                </div>
              )
          )}
          </div>
        </form>
      </div>
      <div style={{ marginTop: "3.5rem" }} className="driver-experience col-md-12 px-0">
        <div className="section__style px-5 pb-3 pt-5 bg-white mt-3">
          <div className="">
            <h5 className="form__heading">Breakdown on Experience on Categories Selected</h5>
          </div>
          <div className="col-md-12">
            <form>
              <div className="row">
                {
                  PersonalDriverData &&
                  <div className="mb-4">
                    <div className="col-md-12">
                      <img src={selectIcon} alt="" />
                      <span className="ml-3 text-gray">Personal Driver</span>
                    </div>
                    <div className="col-md-12 mt-3 pl-5">
                      {
                        PersonalDriverData.map(driverData => <DriverExperience driverData={driverData} key={driverData.id} />)
                      }
                    </div>
                  </div>
                }
                {
                  schoolBusDriverData &&
                  <div className="mb-4">
                    <div className="col-md-12">
                      <img src={selectIcon} alt="" />
                      <span className="ml-3 text-gray">School Bus Driver</span>
                    </div>
                    <div className="col-md-12 mt-3 pl-5">
                      {
                        schoolBusDriverData.map(driverData => <DriverExperience driverData={driverData} key={driverData.id} />)
                      }
                    </div>
                  </div>
                }
                {
                  rideSharingData &&
                  <div className="mb-4">
                    <div className="col-md-12">
                      <img src={selectIcon} alt="" />
                      <span className="ml-3 text-gray">Ride Sharing Driver</span>
                    </div>
                    <div className="col-md-12 mt-3 pl-5">
                      {
                        rideSharingData.map(driverData => <DriverExperience driverData={driverData} key={driverData.id} />)
                      }
                    </div>
                  </div>
                }
                {
                  truckDriverData &&
                  <div className="mb-4">
                    <div className="col-md-12">
                      <img src={selectIcon} alt="" />
                      <span className="ml-3 text-gray">Truck Driver</span>
                    </div>
                    <div className="col-md-12 mt-3 pl-5">
                      {
                        truckDriverData.map(driverData => <DriverExperience driverData={driverData} key={driverData.id} />)
                      }
                    </div>
                  </div>
                }

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};

export default DriverCategory;