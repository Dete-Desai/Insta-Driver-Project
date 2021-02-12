import React, { useState, useEffect } from "react";
import About from "../About";
import NavTabs from "../../../../layouts/NavTabs";
import SideMetaData from "../SideMetaData";
import Jobs from "../Jobs";
import "./index.css";
import Articles from "../Articles";
import Photos from "../Photos";
import Videos from "../Videos";
import Posts from "../Posts";
import MainSideBar from "../../../Layout/MainSideBar/Employer/EmployerSideBarFunction";
import ModalContainer from "../../../Employer/Profile/ModalContainer/index";
import ProfileView from "../EmployerProfile/ProfileView";
import profileBanner from "../../../../dist/images/profilebanner2.png";
import profileCover from "../../../../dist/images/profileCover.png";
import { useSelector, useDispatch } from "react-redux";
import { employerGetJobPosts } from "../../../../redux/actions/employer_actions/job_post_actions";
import { updateEmployerProfile } from "../../../../redux/actions/employer_actions/employer_profile_actions";
import { searchDriver } from "../../../../redux/actions/driver_search_actions";

const profileData = [
  {
    businessName: "Hud Hud",
    website: "www.hudhud.co",
    tagline: "Ride-share anywhere conveniently and affordably",
    profileImg: profileBanner,
    coverImg: profileCover,
  },
];

const LIMIT = process.env.JOB_LIST_PAGE_SIZE;

const EmployerViewProfile = ({ ...props }) => {
  const [activeTab, setActiveTab] = useState();
  const tabInSession = window.sessionStorage.getItem("activeTab");
  const page = 1;

  const credentials = useSelector(
    (state) => state.user_reducers.user_credentials
  );

  const token = credentials.token;

  const availableJobs = useSelector(
    (state) => state.employer_reducers.job_posts
  );

  const dispatch = useDispatch();
  const aboutBusiness = useSelector(
    (state) => state.employer_reducers.employer_profile
  );
  const handleTabs = (tab) => {
    setActiveTab(tab);
    window.sessionStorage.setItem("activeTab", tab);
  };

  //fetch job list
  useEffect(() => {
    dispatch(employerGetJobPosts(token));
    dispatch(updateEmployerProfile(token));
    dispatch(
      searchDriver(token, {
        location: "Nairobi",
        category: "Personal Driver",
        driverType: "VERIFIED DRIVERS",
      })
    );

    if (tabInSession) {
      setActiveTab(tabInSession);
    } else {
      setActiveTab("posts");
    }

    window.sessionStorage.setItem("activeTab", "posts");
  }, [dispatch, page, token, tabInSession]);

  return (
    <div className="d-flex">
      <div>
        <MainSideBar />
      </div>

      <div div style={{ flex: 1, width: "100%" }}>
        <div className="row">
          <div className="col-xl-12 col-md-12">
            <ProfileView user_profile={aboutBusiness} />
            <NavTabs handleTabs={handleTabs} activeTab={activeTab} visitor />
          </div>
        </div>

        <div className="article-content-page">
          <div>
            {activeTab === "about" && <About aboutBusiness={aboutBusiness} />}
            {activeTab === "articles" && <Articles />}
            {activeTab === "posts" && <Posts />}
            {activeTab === "videos" && <Videos />}
            {activeTab === "photos" && <Photos />}
            {activeTab === "jobs" && <Jobs />}
          </div>

          <div>
            <SideMetaData />
          </div>
        </div>
        {credentials && credentials.firstTime && (
          <div>
            <ModalContainer />
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployerViewProfile;
