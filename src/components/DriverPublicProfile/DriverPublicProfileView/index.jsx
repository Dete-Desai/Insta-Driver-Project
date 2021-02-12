import React,{useEffect} from 'react';
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
import DrivingHistory from '../DrivingHistory/DrivingHistory';
import Upload from '../Upload/Upload';
import HourlyRange from '../HourlyRange/HourlyRange';

import {useParams} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import { getDriverProfileInfo } from '../../../redux/actions/driver_actions/driver_profile_actions';

const DriverPublicProfileView = () => {

  const {id}=useParams();
  const dispatch=useDispatch();
  const profile=useSelector(state=>state.driver_reducers.public_profile);


  useEffect(()=>{
      dispatch(getDriverProfileInfo(id));
      console.log('driver profile public view useEffect',id);
  },[dispatch]);
  
  return (
    <div style={{ background: '#F5F9FC' }} className="DriverProfilePreview container-fluid">
      {profile && <div className="row">
        <div className="profile__mainBody col-md-10 px-2 px-5 py-3 m-auto">
          <div className="container-fluid px-0">
            <div style={{marginTop:"3.5rem"}} className="col-md-12 px-0"><ProfilePhoto driver={profile} /></div>
            <div className="col-md-12 px-0"><DriverInfo driver={profile} /></div>
            <div style={{marginTop:"3.5rem"}} className="col-md-12 px-0"><DriverQualifications driver={profile} /></div>
            <div style={{marginTop:"3.5rem"}} className="col-md-12 px-0"><DriverCategory driver={profile}/></div>
            <div style={{marginTop:"3.5rem"}} className="col-md-12 px-0"><Platform driver={profile} /></div>
            <div style={{marginTop:"3.5rem"}} className="col-md-12 px-0"><Upload driver={profile}/></div>
            <div style={{marginTop:"3.5rem"}} className="col-md-12 px-0"><DailyTarget driver={profile}/></div>
            <div style={{marginTop:"3.5rem"}} className="col-md-12 px-0"><History driver={profile}/></div>
            <div style={{marginTop:"3.5rem"}} className="col-md-12 px-0"><Preferences driver={profile}/></div>
            <div style={{marginTop:"3.5rem"}} className="col-md-12 px-0"><HourlyRange driver={profile}/></div>
            <div style={{marginTop:"3.5rem"}} className="col-md-12 px-0"><SalaryRange driver={profile}/></div>
            <div style={{marginTop:"3.5rem"}} className="col-md-12 px-0"><DrivingHistory driver={profile}/></div>        
            <div style={{marginTop:"3.5rem"}} className="col-md-12 px-0"><HireReason driver={profile}/></div>
            <div style={{marginTop:"3.5rem"}} className="col-md-12 px-0">
              {profile && profile.showSocialSummary?<SocialHistory driver={profile}/>:null}</div>
            <div style={{marginTop:"3.5rem"}} className="col-md-12 px-0"><MoreInform driver={profile}/></div>
           
          </div>
        </div>
      </div>}
    </div>
  );
};

export default DriverPublicProfileView;