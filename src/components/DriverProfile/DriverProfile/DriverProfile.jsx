import { React, useState, useEffect, useRef } from "react";
import { connect, useSelector } from "react-redux";
import set from "lodash/set";
import get from "lodash/get";
import { useHistory } from "react-router-dom";
import remove from "lodash/remove";
import EmployerSideBar from "../../Layout/MainSideBar/Employer/EmployerSideBar";
import DriverCategory from "../DriverCategory/DriverCategory";
import DriverInfo from "../DriverInfo/DriverInfo";
import Platform from "../Platform/Platform";
import DriverQualifications from "../DriverQualifications/DriverQualifications";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import History from "../History/History";
import SelectCurrency from "../SelectCurrency/SelectCurrency";
import DailyTarget from "../DailyTarget/DailyTarget";
import SalaryRange from "../SalaryRange/SalaryRange";
import Preferences from "../Preferences/Preferences";
import HireReason from "../HireReason/HireReason";
import Verification from "../Verification/Verification";
import SocialHistory from "../SocialHistory/SocialHistory";
import MoreInform from "../MoreInform/MoreInform";
import ProfilePreview from "../ProfilePreview/ProfilePreview";
import PreviousHistory from "../PreviousHistory/PreviousHistory";
import Upload from "../Upload/Upload";
import ProfileCompleteModal from "../ProfileCompleteModal";
import ProfileShareModal from "../ProfileShareModal";
import NotFound from "../../Driver/NotFound";

import {
  PostRoute,
  getUserInfo,
  getDriverStaticFormData,
} from "../../../Api/index";
import DriverSideBarFunction from "../../Layout/MainSideBar/Driver/DriverSideBarFunction";
import { getDriverProfilePercent } from "../../../Util/ProfilePercent";
const { Post, Get } = PostRoute();

const DriverProfile = () => {
  const role = useSelector(
    (state) => state.user_reducers.user_credentials.role
  );

  const history = useHistory();
  if (role !== "DRIVER" && role === "EMPLOYER") {
    //go to employer edit profile
    let route = "/employer-edit-profile";
    history.push(route);
  }

  const credentials = useSelector(
    (state) => state.user_reducers.user_credentials
  );

  const session_token = credentials.token;

  const driver_profile = useSelector(
    (state) => state.driver_reducers.driver_profile
  );

  const [userInfo, setUserInfo] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const [shareModalShow, setShareModalShow] = useState(false);

  const submitFlag = false;
  const [formStaticDataProp, setFormStaticDataProp] = useState({});

  const [profilePercentage, setProfilePercentage] = useState(undefined);
  const prevPercentRef = useRef();
  const prevPercentage = prevPercentRef.current;

  useEffect(() => {
    prevPercentRef.current = profilePercentage;

    console.log("prev percent", prevPercentage);
    console.log("current percent", profilePercentage);

    if (prevPercentage === 90 && profilePercentage === 100) {
      setModalShow(true);
    }
  }, [prevPercentage, profilePercentage]);

  useEffect(() => {
    console.log("session token", session_token);
    (async () => {
      // making request to fetch form data
      // let userInfoFuncResp = await getUserInfo(session_token);
      let staticFormData = await getDriverStaticFormData();
      console.log("--------- static form data got ", staticFormData);
      setUserInfo(driver_profile);
      setFormStaticDataProp(staticFormData);
      let percent = getDriverProfilePercent(driver_profile);
      setProfilePercentage(percent);
    })();
  }, [session_token, driver_profile]);

  const handleChange = (e) => {
    console.log("value", e.target.value);
    console.log("index-", e.target.name);

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

    if (e.target.name.includes("rideHailingPlatforms")) {
      if (get(userInfo, "rideHailingPlatforms").includes(e.target.value)) {
        console.log("already added removing");
        remove(
          tempInfo.rideHailingPlatforms,
          (category) => category === e.target.value
        );
        console.log("usr info --", tempInfo);
        setUserInfo(tempInfo);
        return;
      } else {
        get(tempInfo, "rideHailingPlatforms").push(e.target.value);
        setUserInfo(tempInfo);
        return;
      }
    }

    //updating temp object using lodash's get
    set(tempInfo, e.target.name, e.target.value);
    console.log("usr info --", tempInfo);
    setUserInfo(tempInfo);
  };

  return (
    <div
      style={{ background: "#F5F9FC" }}
      className="DriverProfile container-fluid"
    >
      <div className="row">
        <div className="mainBody__sidebar col-md-2 col-lg-2">
          <DriverSideBarFunction />
        </div>
        {credentials.firstTime ? (
          <NotFound />
        ) : (
          <div className="profile__mainBody col-md-10 col-lg-10 col-sm-12 col-12 px-2 px-5 py-3">
            <div className=" px-0">
              {profilePercentage !== 100 && (
                <div
                  style={{ background: "#F57777" }}
                  className="col-md-12 profile__warning"
                >
                  <p className="text-white px-2">
                    Your Profile is{" "}
                    {profilePercentage === 0 ? `1` : `${profilePercentage}`}%
                    complete. Your profile will be live once it is 100%
                    complete. Once it is live, employers and friends can connect
                    with you. It will take you about 7 minutes to complete your
                    profile.
                  </p>
                </div>
              )}
              <div className="col-md-12 px-0">
                <ProfilePhoto
                  userInfo={userInfo}
                  handleChange={handleChange}
                  session_token={session_token}
                />
              </div>
              <div className="col-md-12 px-0">
                <DriverInfo
                  userInfo={userInfo}
                  formStaticDataProp={formStaticDataProp}
                  handleChange={handleChange}
                  session_token={session_token}
                />
              </div>
              <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0">
                <DriverQualifications
                  userInfo={userInfo}
                  formStaticDataProp={formStaticDataProp}
                  handleChange={handleChange}
                  session_token={session_token}
                />
              </div>
              <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0">
                <DriverCategory
                  userInfo={userInfo}
                  formStaticDataProp={formStaticDataProp}
                  handleChange={handleChange}
                  session_token={session_token}
                />
              </div>
              <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0">
                <Platform
                  userInfo={userInfo}
                  formStaticDataProp={formStaticDataProp}
                  handleChange={handleChange}
                  session_token={session_token}
                />
              </div>
              <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0">
                <History
                  userInfo={userInfo}
                  formStaticDataProp={formStaticDataProp}
                  handleChange={handleChange}
                  session_token={session_token}
                />
              </div>
              <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0">
                <Upload
                  userInfo={userInfo}
                  formStaticDataProp={formStaticDataProp}
                  handleChange={handleChange}
                  session_token={session_token}
                />
              </div>
              <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0">
                <SelectCurrency
                  userInfo={userInfo}
                  formStaticDataProp={formStaticDataProp}
                  handleChange={handleChange}
                  session_token={session_token}
                />
              </div>
              <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0">
                <DailyTarget
                  userInfo={userInfo}
                  formStaticDataProp={formStaticDataProp}
                  handleChange={handleChange}
                  session_token={session_token}
                />
              </div>
              <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0">
                <Preferences
                  userInfo={userInfo}
                  formStaticDataProp={formStaticDataProp}
                  handleChange={handleChange}
                  session_token={session_token}
                />
              </div>
              <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0">
                <SalaryRange
                  userInfo={userInfo}
                  formStaticDataProp={formStaticDataProp}
                  handleChange={handleChange}
                  session_token={session_token}
                />
              </div>
              <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0">
                <PreviousHistory
                  userInfo={userInfo}
                  formStaticDataProp={formStaticDataProp}
                  handleChange={handleChange}
                  session_token={session_token}
                />
              </div>
              <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0">
                <HireReason
                  userInfo={userInfo}
                  formStaticDataProp={formStaticDataProp}
                  handleChange={handleChange}
                  session_token={session_token}
                />
              </div>
              <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0">
                <Verification />
              </div>
              <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0">
                <SocialHistory
                  userInfo={userInfo}
                  formStaticDataProp={formStaticDataProp}
                  handleChange={handleChange}
                  session_token={session_token}
                />
              </div>
              <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0">
                <MoreInform
                  userInfo={userInfo}
                  formStaticDataProp={formStaticDataProp}
                  handleChange={handleChange}
                  session_token={session_token}
                />
              </div>
              <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0">
                <ProfilePreview setShareModalShow={setShareModalShow} />
              </div>
            </div>
          </div>
        )}
      </div>

      <ProfileCompleteModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <ProfileShareModal
        show={shareModalShow}
        onHide={() => setShareModalShow(false)}
      />
    </div>
  );
};

export default DriverProfile;
