import React, { useState } from 'react';
import verifiedIcon from '../../../dist/icons/verified.png';

const Verification = () => {
 const [isVerified, setIsVerified] = useState('D7782HGD5')
  return (
    <>
    {
      !isVerified ?
      <div className="verification section__style px-5 pb-3 pt-5 bg-white mt-3">
      <div className="col-md-10 m-auto">
        <h5 className="form__heading">Your Verification Status</h5>
        <div className="col-md-12 px-4 py-2 currencyInfo my-4">
          <p style={{ color: "#969393" }}>Some employers prefer to hire verified drivers, you may want to get verified if you have not yet gotten verified badge. Click <a style={{color:"#FFBB00"}} href="https://instadriver.co/verified_search">here</a> to learn more about verified feature.</p>
        </div>
        <p style={{color:"#575353"}} className="font-weight-bold py-3">Our data scan shows that you have not been verified. Don’t worry, continue filling your profile. Later on you will look into the <a  style={{color:"#FFBB00"}} href="https://instadriver.co/verified_search">verification feature.</a></p>
      </div>
    </div>
    :
    <div className="verification section__style px-5 pb-3 pt-5 bg-white mt-3">
      <div className="col-md-10 m-auto">
        <h5 className="form__heading">Your Verification Status</h5>
        <div className="col-md-12 px-4 py-2 currencyInfo my-4">
          <p style={{ color: "#969393" }}>Some employers prefer to hire verified drivers, you may want to get verified if you have not yet gotten verified badge. Click <a style={{color:"#FFBB00"}} href="https://instadriver.co/verified_search">here</a> to learn more about verified feature.</p>
        </div>
        <div style={{color:"#575353"}} className="font-weight-bold py-3 d-flex align-items-center">
          <img src={verifiedIcon} alt=""/>
          <p className="font-weight-bold ml-4 mb-0">Congrats. You are a verified driver.  Your verification number is {isVerified}</p>
        </div>
      </div>
    </div>
    }
    
    </>
  );
};

export default Verification;