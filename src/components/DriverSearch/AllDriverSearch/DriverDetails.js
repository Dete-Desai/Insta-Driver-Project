import React from 'react';
import callIcon from '../../../dist/icons/call.svg';
import DriverIcon from '../../../dist/icons/driverName.svg';
import categoryIcon from '../../../dist/icons/category.svg';
import locationIcon from '../../../dist/icons/location.svg';
import yearIcon from '../../../dist/icons/year.svg';
import PropTypes from 'prop-types';
import { Link } from  'react-router-dom';
import moment from 'moment';

const DriverDetails = ({driver}) => {
  const lastSeen = moment(driver.updatedAt).format('DD MM YYYY HH:MM:SS')
  console.log('inside driver details');
  console.log(driver);
  return (
    <div className="col-lg-6 mt-3 mb-4">
      <div className="listbox">
        <div className="row">
          <div className="col-sm-4 "><img src={driver.avatar} className="img-fluid" alt="" /></div>
          <div className="col-sm-8 imginner pl-0 ">
            <div className="row mt-2">
              <div className="col-lg-6"><img src={callIcon} className="img-fluid" alt=""/>&nbsp;&nbsp;<strong>Contact Number:</strong></div>
              <div className="col-lg-6">{driver.phoneNumber}</div>
            </div>
            <div className="row mt-2">
              <div className="col-lg-6"><img src={DriverIcon} className="img-fluid" alt=""/>&nbsp;&nbsp;<strong>Driver's Name:</strong></div>
              <div className="col-lg-6 container">{driver.email}</div>
            </div>
            <div className="row mt-2">
              <div className="col-lg-6"><img src={categoryIcon} className="img-fluid" alt=""/>&nbsp;&nbsp;<strong>Categories:</strong></div>
              <div className="col-lg-6">
                {
                  driver.driverCategories && driver.driverCategories.length>0 &&
                   driver.driverCategories.map(c=><span>{c} <br/></span>)
                }
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-lg-6"><img src={locationIcon} className="img-fluid" alt=""/>&nbsp;&nbsp;<strong>Location:</strong></div>
              <div className="col-lg-6">{
               driver.personalInformation.city},{driver.personalInformation.country}</div>
            </div>
            <div className="row mt-2">
              <div className="col-lg-6 mb-2"><img src={yearIcon} className="img-fluid" alt=""/>&nbsp;&nbsp;<strong>Years of Licence:</strong></div>
              <div className="col-lg-6 mb-2">{driver.qualification.licensePeriod} Year(s)</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 p-t-15">
          &nbsp;
                <span className="text-success">Last seen {lastSeen}</span>
        </div>
        <div className="col-lg-4">
          <Link to={`/drivers/public-profile/${driver._id}`} style={{ border: 'none', width: '100%' }} className="btn btn-primary btn-sm buttonnew mt-2">View Profile</Link></div>
      </div>
    </div>
  );
};

DriverDetails.propTypes={
  driver:PropTypes.object.isRequired,
}

export default DriverDetails;