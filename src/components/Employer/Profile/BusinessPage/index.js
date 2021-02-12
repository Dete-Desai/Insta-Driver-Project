import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import About from "../About";
import NavTabs from "../../../../layouts/NavTabs";
import SideMetaData from "../SideMetaData";
import Jobs from "../Jobs";
import "./index.css";
import Articles from "../Articles";
import Photos from "../Photos";
import Videos from "../Videos";
import Posts from "../Posts";
import ModalContainer from "../../../Employer/Profile/ModalContainer/index";
import ProfileView from "../EmployerProfile/ProfileView";
import { useSelector, useDispatch } from "react-redux";
import { getBusinessJobPosts } from "../../../../redux/actions/employer_actions/job_post_actions";
import {
  getBusiness,
  unsetBusiness,
} from "../../../../redux/actions/employer_actions/employer_business_actions";
import { updateDriverProfile } from "../../../../redux/actions/driver_actions/driver_profile_actions";
import { connect } from "react-redux";

const BusinessProfile = (props) => {
  const { handle } = props;
  // console.log(handle);
  const [activeTab, setActiveTab] = useState();
  const tabInSession = window.sessionStorage.getItem("activeTab");
  const availableJobs = useSelector(
    (state) => state.employer_reducers.job_posts
  );

  const handleTabs = (tab) => {
    setActiveTab(tab);
    window.sessionStorage.setItem("activeTab", tab);
  };
  const dispatch = useDispatch();
  const params = useParams();

  // const handle = params.handle;

  useEffect(() => {
    if (tabInSession) {
      setActiveTab(tabInSession);
    } else {
      setActiveTab("posts");
    }

    dispatch(getBusinessJobPosts(handle));
    dispatch(unsetBusiness());
    if (props.user) {
      props.updateDriverProfile(props.user.token);
    }
    dispatch(getBusiness(handle));
  }, [tabInSession, dispatch]);

  const business = useSelector((state) => state.employer_reducers.business);

  return (
    <>
      <div className="">
        <div div style={{ flex: 1, width: "100%" }}>
          <div className="row">
            <div className="col-xl-12 col-md-12">
              <ProfileView user_profile={business} />
              <NavTabs handleTabs={handleTabs} activeTab={activeTab} visitor />
            </div>
          </div>

          <div className="article-content-page">
            <div>
              {activeTab === "about" && <About aboutBusiness={business} />}
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
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user_reducers.user_credentials,
  };
};

export default connect(mapStateToProps, { updateDriverProfile })(
  BusinessProfile
);
