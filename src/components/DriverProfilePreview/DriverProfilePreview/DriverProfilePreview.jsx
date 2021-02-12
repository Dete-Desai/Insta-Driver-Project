import { React, useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import set from "lodash/set";
import get from "lodash/get";
import remove from "lodash/remove";
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
import PreviousHistory from '../PreviousHistory/PreviousHistory';
import Upload from '../Upload/Upload';
import HourlyRange from '../HourlyRange/HourlyRange';
import DriverSideBarFunction from "../../Layout/MainSideBar/Driver/DriverSideBarFunction";
import {
  PostRoute,
  getUserInfo,
  getDriverStaticFormData,
} from "../../../Api/index";
const { Post, Get } = PostRoute();

const DriverProfilePreview = () => {

  const session_token = useSelector(
    (state) => state.user_reducers.user_credentials.token
  );

  const [userInfo, setUserInfo] = useState({});
  const submitFlag = false;
  const [formStaticDataProp, setFormStaticDataProp] = useState({});

  const handleChange = (e) => {
    console.log("value", e.target.value);
    console.log("index", e.target.name);

    // creating temporary object to avoid mutation
    let tempInfo = { ...userInfo };
    if (e.target.value === "true") {
      set(tempInfo, e.target.name, true);
      console.log("usr info --", tempInfo);
      setUserInfo(tempInfo);
      return;
    }

    if (e.target.value === "false") {
      set(tempInfo, e.target.name, false);
      console.log("usr info --", tempInfo);
      setUserInfo(tempInfo);
      return;
    }

    if (e.target.name.includes("personalInformation.languagesSpoken")) {
      let languagesArray = e.target.value.split(",");
      console.log("array ", languagesArray);
      set(tempInfo, e.target.name, languagesArray);
      console.log("usr info --", tempInfo);
      setUserInfo(tempInfo);
      return;
    }

    if (e.target.name.includes("driverCategories")) {
      if (get(userInfo, "driverCategories").includes(e.target.value)) {
        console.log("already added removing");
        remove(
          tempInfo.driverCategories,
          (category) => category === e.target.value
        );
        console.log("usr info --", tempInfo);
        setUserInfo(tempInfo);
        return;
      } else {
        get(tempInfo, "driverCategories").push(e.target.value);
        setUserInfo(tempInfo);
        return;
      }
    }

    //updating temp object using lodash's get
    set(tempInfo, e.target.name, e.target.value);
    console.log("usr info --", tempInfo);
    setUserInfo(tempInfo);
  };

  useEffect(() => {
    console.log("session token", session_token);
    (async () => {
      // making request to fetch form data
      let userInfoFuncResp = await getUserInfo(session_token);
      let staticFormData = await getDriverStaticFormData();
      console.log("user info -- ", userInfoFuncResp);
      setUserInfo(userInfoFuncResp);
      setFormStaticDataProp(staticFormData);
    })();
  }, [session_token, submitFlag]);

  return (
    <div style={{ background: '#F5F9FC' }} className="DriverProfilePreview container-fluid">
      <div className="row">
        <div className="mainBody__sidebar col-md-2 col-lg-2">
          <DriverSideBarFunction />
        </div>
        <div className="profile__mainBody col-md-10 col-lg-10 col-sm-12 col-12 px-2 px-5 py-3">
          <div className="px-0">
            <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0"><ProfilePhoto /></div>
            <div className="col-md-12 px-0"><DriverInfo userInfo={userInfo} /></div>
            <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0"><DriverQualifications userInfo={userInfo} /></div>
            <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0">
              <DriverCategory
                userInfo={userInfo}
                formStaticDataProp={formStaticDataProp}
                handleChange={handleChange}
                session_token={session_token} />
            </div>
            <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0"><Platform /></div>
            <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0"><Upload /></div>
            <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0"><DailyTarget userInfo={userInfo} /></div>
            <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0"><History userInfo={userInfo} /></div>
            <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0"><Preferences userInfo={userInfo} /></div>
            <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0"><HourlyRange /></div>
            <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0"><SalaryRange userInfo={userInfo} /></div>
            <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0"><PreviousHistory /></div>
            <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0"><HireReason userInfo={userInfo} /></div>
            <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0">
              <SocialHistory
                userInfo={userInfo}
                formStaticDataProp={formStaticDataProp}
                handleChange={handleChange}
                session_token={session_token}
              />
            </div>
            <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0"><MoreInform /></div>
            <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0"><ProfilePreview /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverProfilePreview;