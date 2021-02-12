import React from 'react';
import phone from '../../../dist/icons/phone.png';
import profile1 from '../../../dist/images/profile/profile1.png';
import profile2 from '../../../dist/images/profile/profile2.png';
import profile3 from '../../../dist/images/profile/profile3.png';
import profile4 from '../../../dist/images/profile/profile4.png';


const ProfilePhoto = () => {
  return (
    <div className="profilePhoto">
      <div className="photo__info row">
        <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 mb-3">
          <div className="mb-2 text-center">
            <img src={profile1} alt="camera" className="img-fluid" />
          </div>
          <div className="w-100 m-auto bg-white border p-2 text-center d-flex flex-column align-items-center">
            <p style={{ color: '#4B4747' }} className="px-1 w-75">Arnold Johnson Lead</p>
            <div className="d-flex align-items-center">
              <img src={phone} className="" height="20" alt="" />
              <span className="ml-2">+254722876543</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 mb-3">
          <div className="ml-2 text-center">
            <img src={profile2} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 mb-3">
          <div className="ml-2 text-center">
            <img src={profile3} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 mb-3">
          <div className=" ml-2 text-center">
            <img src={profile4} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
      <div style={{ background: '#F1F1F1' }} className="profile__bottomInfo d-flex justify-content-between px-3 py-4 row m-auto">
        <div className="col-md-6 col-lg-6 col-sm-6 col-6 col-xs-12 mb-3">
          <span style={{ fontSize: "18px" }} className="text-success mr-4">Last Seen: 03 November 2020. @ 5:17 p.m. </span>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-6 col-6 col-xs-12">
          <span style={{ color: "#5B5B5B", fontSize: "18px" }} className="mr-4 ">Unavailable for hire</span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePhoto;