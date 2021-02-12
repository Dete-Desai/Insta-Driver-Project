import React from 'react';
import { DriverStaticNavBar } from '../../../Layout/StaticNavBar';
import videoChatImg from '../../../../dist/images/video-feature.svg'
import MainFooter from '../../../Layout/MainFooter/MainFooter';

const GroupVideoCall = () => {
  return (
    <React.Fragment>
      <div className="navbar-static">
        <DriverStaticNavBar />
      </div>
      <div className="bg-gray">
        <div className="row width-100">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="video-call-vectors">
              <div className="social-connect">
                All  drivers of the world. Social connect with fellow comrades via Group Video Calling
              </div>
              <img src="/images/Rectangle 361.png" alt="CurveRectange" className="curved-image-one" />
              <img src="/images/Vector 54.png" alt="Vector54" className="curved-image-two" />
              <img src="/images/Vector 55.png" alt="Vector55" className="curved-image-three" />
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="image-iphone-div">
              <img src="/images/131961762048538 1.png" alt="Iphone" className="image-iphone" />
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="video-signup">
              <div className="video-signup-text">
                Sign Up to Video Call Your Fellow Drivers!
              </div>
              <a href="#!" className="video-signup-link">Driver Sign Up</a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-5 my-5">
        <div className="row m-auto">
          <div className="col-sm-12">
            <div className="row">
              <div className="px-5 ml-auto col-xl-11">
                <div className="row d-flex justify-content-between align-items-center">
                  <div className="col-sm-12 col-md-3 col-lg-4">
                    <div style={{fontSize:"30px"}} className="other-than">
                      Other than connecting to your peers, know the traffic condition by entering a group call based on specific location.
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-9 col-lg-8">
                    <img src={videoChatImg} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="conference-img-box">
                <img src="/images/Rectangle 364.png" alt="AdvertImg" className="conference-img" />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="conference-text">
                And ofcourse, you can do serious stuff. Like conference call with your organziation or employer you are working for
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="MainFooter">
        <MainFooter />
      </div>
    </React.Fragment>
  );
};

export default GroupVideoCall;