import React from 'react';
import checked from '../../../dist/icons/checked.png';

const Platform = ({driver}) => {
  const getPlatforms=()=>{
    if(!driver.rideHailingPlatforms || driver.rideHailingPlatforms.length ===0){
      return <div className="card alert alert-warning"><span>No ride-hailing plaforms information available</span></div>
    }else{
      return driver.rideHailingPlatforms.map(plat=><div className="d-flex align-items-center pb-3 pl-0">
      <img className="mr-3" src={checked} alt="" />
      <span className="text-gray">{plat}</span>
    </div>
    )
    }
  }
  return (
    <div className="driver__platform section__style px-5 pb-3 pt-5 bg-white mt-3">
      <h5 className="form__heading">Platforms Am On In Ride-hailing</h5>
      <form className="row mt-5">
        <div className="col-md-6">
          {getPlatforms()}
        </div>
        <div className="col-md-6">
         
        </div>
      </form>
    </div>
  );
};

export default Platform;