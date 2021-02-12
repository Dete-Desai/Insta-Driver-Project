import React from 'react';
import DriverCategory from '../DriverCategory/DriverCategory';
import DriverInfo from '../DriverInfo/DriverInfo';
import Platform from '../Platform/Platform';
import DriverQualifications from '../DriverQualifications/DriverQualifications';
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto';
import History from '../History/History';
import DailyTarget from '../DailyTarget/DailyTarget';
import SalaryRange from '../SalaryRange/SalaryRange';
import Preferences from '../Preferences/Preferences';
import HireReason from '../HireReason/HireReason';
import SocialHistory from '../SocialHistory/SocialHistory';
import MoreInform from '../MoreInform/MoreInform';
import ProfilePreview from '../ProfilePreview/ProfilePreview';
import PreviousHistory from '../DrivingHistory/DrivingHistory';
import Upload from '../Upload/Upload';
import HourlyRange from '../HourlyRange/HourlyRange';

const ProfileEmployerView = () => {
  return (
    <div style={{ background: '#F5F9FC' }} className="DriverProfilePreview container-fluid">
      <div className="row">
        <div className="profile__mainBody col-md-10 px-2 px-5 py-3 m-auto">
          <div className="container-fluid px-0">
            <div style={{marginTop:"3.5rem"}} className="col-md-12 px-0"><ProfilePhoto /></div>
            <div className="col-md-12 px-0"><DriverInfo /></div>
            <div style={{marginTop:"3.5rem"}} className="col-md-12 px-0"><DriverQualifications /></div>
            <div style={{marginTop:"3.5rem"}} className="col-md-12 px-0"><DriverCategory /></div>
            <div style={{marginTop:"3.5rem"}} className="col-md-12 px-0"><Platform /></div>
            <div style={{marginTop:"3.5rem"}} className="col-md-12 px-0"><Upload /></div>
            <div style={{marginTop:"3.5rem"}} className="col-md-12 px-0"><DailyTarget /></div>
            <div style={{marginTop:"3.5rem"}} className="col-md-12 px-0"><History /></div>
            <div style={{marginTop:"3.5rem"}} className="col-md-12 px-0"><Preferences /></div>
            <div style={{marginTop:"3.5rem"}} className="col-md-12 px-0"><HourlyRange /></div>
            <div style={{marginTop:"3.5rem"}} className="col-md-12 px-0"><SalaryRange /></div>
            <div style={{marginTop:"3.5rem"}} className="col-md-12 px-0"><PreviousHistory /></div>        
            <div style={{marginTop:"3.5rem"}} className="col-md-12 px-0"><HireReason /></div>
            <div style={{marginTop:"3.5rem"}} className="col-md-12 px-0"><SocialHistory /></div>
            <div style={{marginTop:"3.5rem"}} className="col-md-12 px-0"><MoreInform /></div>
            <div style={{marginTop:"3.5rem"}} className="col-md-12 px-0"><ProfilePreview /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEmployerView;