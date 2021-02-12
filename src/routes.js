import React from "react";
import { Route, Switch } from "react-router-dom";

//Access Rights
import { PrivateRoutes } from "./authentification/AccessRights/Access";
import AccountChoicePage from "./authentification/AccessRights/index";

//Layouts
import { DefaultLayout, EmployerLayout } from "./layouts";

//view Test
import ViewTest from "./views/ViewTest";

//Home
import HomePage from "./views/Home/HomePage";

//Employer
import SearchDrivers from "./views/Employer/Recruitment/SearchDriverPage";
import ViewPostPhotoPage from "./views/Employer/Profile/ViewPostPhoto/ViewPostPhotoPage";
import PostWithPhotoView from "./views/Employer/Profile/ViewPostPhoto/PostWithPhotoView";
import ViewPostVideoPage from "./views/Employer/Profile/ViewPostVideo/ViewPostVideoPage";
import PostWithVideoView from "./views/Employer/Profile/ViewPostVideo/PostWithVideoView";
import RecruitmentPage from "./views/Employer/Recruitment/Vaccancy/RecruitmentPage";
import JobCardReportPage from "./views/Employer/Recruitment/Vaccancy/JobCardReportPage";
import EmployerDriverProfilePage from "./views/Employer/Recruitment/Vaccancy/EmployerDriverProfilePage";
import EmployerDriverProfilePage1 from "./views/Employer/Recruitment/Vaccancy/EmployerDriverProfilePage1";
// import OnboardPage from "./views/Employer/OnboardYourVehicles/OnboardPage";
import AppliedCandidatesPage from "./views/Employer/Recruitment/Vaccancy/AppliedCandidatesPage";
import ShortListedCandidatesPage from "./views/Employer/Recruitment/Vaccancy/ShortListedCandidatesPage";
import HiredCandidatesPage from "./views/Employer/Recruitment/Vaccancy/HiredCandidatesPage";
import RejectedCandidatesPage from "./views/Employer/Recruitment/Vaccancy/RejectedCandidatesPage";
import EmployerView from "./views/Employer/Profile/EmployerView/EmployerView";
import JobVaccancyAdsPage from "./views/Employer/Recruitment/Vaccancy/JobVaccancyAdsPage";
import BusinessPage from "./views/Employer/Profile/BusinessPage/BusinessPage";

import OrganizationPage from "./views/Employer/MyOrganization/OrganizationPage";
import DriverCardsPage from "./views/Employer/Recruitment/DriverCard/DriverCardsPage";
import DriverAdvertCardPage from "./views/Employer/Recruitment/DriverCard/DriverAdvertCardPage";

import ApplicantsPage from "./views/Employer/Recruitment/Applicants/ApplicantsPage";
import AppliedApplicantsPage from "./views/Employer/Recruitment/Applicants/AppliedApplicantsPage";
import ShortlistedApplicantsPage from "./views/Employer/Recruitment/Applicants/ShortlistedApplicantsPage";
import HiredApplicantsPage from "./views/Employer/Recruitment/Applicants/HiredApplicantsPage";
import RejectedApplicantsPage from "./views/Employer/Recruitment/Applicants/RejectedApplicantsPage";

import ManagePostsPage from "./views/Employer/Recruitment/ManagePosts/ManagePostsPage";
import ManagePostsPage1 from "./views/Employer/Recruitment/ManagePosts/ManagePostsPage1";
import ManagePostsPage2 from "./views/Employer/Recruitment/ManagePosts/ManagePostsPage2";
import InboxPage from "./views/Inbox/InboxPage";

import ManagePostsPage3 from "./views/Employer/Recruitment/ManagePosts/ManagePostsPage3";
import ManagePostsPage4 from "./views/Employer/Recruitment/ManagePosts/ManagePostsPage4";
import ManagePostsPage5 from "./views/Employer/Recruitment/ManagePosts/ManagePostsPage5";

//SITE PAGES
import NotFound from "./views/Driver/NotFound";
import AboutPage from "./views/Home/AboutPage";
import VerifiedSearch from "./views/Home/VerifiedSearch";
// import TopAd from "./views/Home/TopAd";
import ContactUs from "./views/Home/ContactUs";

//AUTHENTICATION PAGES
import DriverloginPage from "./views/authentification/Login/driver-login";
import EmployerLoginPage from "./views/authentification/Login/employer-login";
import DriverRegisterPage from "./views/authentification/Registration/driver-register";
import EmployerRegisterPage from "./authentification/Registration/employer-register";
import ViewProfilePage from "./views/Employer/Profile/ViewProfile/ViewProfilePage";
import ArticleViewProfilePage from "./views/Employer/Profile/ViewArticle/ArticleViewProfilePage";
import EditEmployerProfilePage from "./views/Employer/Profile/EditProfile/EditEmployerProfilePage";
// import DriverRecruitmentCard from "./components/Employer/Recruitment/DriverCard/DriverRecruitmentCard";
//import Faqs from "./views/Home/Faqs";
// import NotFoundPage from "./views/NotFoundPage"

//SOCIAL
import { SocialPage } from "./views/Social/SocialHome/SocialPage";
import SocialPostPage from "./views/Social/SocialHome/SocialPostPage";
import SocialPost1Page from "./views/Social/SocialHome/SocialPost1Page";
import SocialPost2Page from "./views/Social/SocialHome/SocialPost2Page";
import InstadriverGroupsPage from "./views/Social/Group/InstadriverGroupsPage";
import InstadriverGroups1Page from "./views/Social/Group/InstadriverGroups1Page";
import InstadriverGroups2Page from "./views/Social/Group/InstadriverGroups2Page";
import InstadriverGroups3Page from "./views/Social/Group/InstadriverGroups3Page";
import AboutGroupPage from "./views/Social/Group/AboutGroupPage";
import MembersGroupPage from "./views/Social/Group/MembersGroupPage";
import GroupAnnouncementsPage from "./views/Social/Group/GroupAnnouncementsPage";
import GroupMediaFilesPage from "./views/Social/Group/GroupMediaFilesPage";
import GroupMediaFiles1Page from "./views/Social/Group/GroupMediaFiles1Page";
import GroupMediaFiles2Page from "./views/Social/Group/GroupMediaFiles2Page";
import GroupPhotoPage from "./views/Social/Group/GroupPhotoPage";
import GroupVideosPage from "./views/Social/Group/GroupVideosPage";
import GroupFormPage from "./views/Social/Group/GroupFormPage";
import VideoChatPage from "./views/Social/Videos/VideoPage/VideoChatPage";
import GamingPage from "./views/Social/Gaming/GamingPage";
import GroupVideoChat from "./views/Social/Videos/VideoChat/GroupVideoChat";
import LivestreamLive from "./views/Livestream/LivestreamLive";
import LivestreamHome from "./views/Livestream/LivestreamHome";
import VideoChatNew from "./views/VideoChatNew";

//SEARCH DRIVER
import DriverSearch from "./views/DriverSearch";

//JOBS
//Search jobs
import JobsPage from "./views/JobsPage";
import HireMePage from "./views/HireMePage";
import JobDetailsPage from "./views/JobDetailsPage";
import MoreInfoPage from "./views/JobsPage/MoreInfoPage";
// import DriverPostsRepostsPage from "./views/JobsPage/DriverPostsRepostsPage";

//import MoreInfoPage from "./views/JobsPage/MoreInfoPage";

//All driver Search jobs
import SearchResults from "./views/DriverSearch/SearchResults/SearchResults";
// import AllDriverSearch from "./components/DriverSearch/AllDriverSearch";

//NOTIFICATIONS
// import NotificationsPage from "./views/NotificationsPage";

//DRIVER PROFILE
import DriverProfilePage from "./views/DriverProfilePage/DriverProfilePage";
import ProfilePreviewPage from "./views/ProfilePreviewPage/ProfilePreviewPage";
import CreateJobCardPage from "./views/Driver/CreateJobCardPage";

//import ABoutPage from "./components/Home/ABoutPage";
import FaqsPage from "./views/Home/Faqs";
import ChatRoomPage from "./views/Social/Videos/VideoChat/ChatRoomPage";
import RoomParticipantsPage from "./views/Social/Videos/VideoChat/RoomParticipantsPage";
import ProfileStatusPage from "./views/Driver/ProfileStatusPage";
import FreezeProfilePage from "./views/Driver/FreezeProfilePage";
import MyInstradriverPage from "./views/Driver/MyInstradriverPage";
import ProfessionalProfilePage from "./views/StaticPages/DriverApp/ProfessionalProfilePage";
import InstraDriverGroupPage from "./views/StaticPages/DriverApp/InstraDriverGroupPage";
import LiveStreamPage from "./views/StaticPages/DriverApp/LiveStreamPage";
import GamingStaticPage from "./views/StaticPages/DriverApp/GamingStaticPage";
import DriverPublicProfileView from "./components/DriverPublicProfile/DriverPublicProfileView";
import DriverRecruitmentPage from "./views/StaticPages/EmployerApp/DriverRecruitmentPage";
import EmployerSideBar from "./components/Layout/MainSideBar/Employer/EmployerSideBar";
import VideoCallPage from "./views/StaticPages/DriverApp/VideoCallPage";
import ComingSoon from "./views/comingsoon/ComingSoon";
import OrganizationsPage from "./views/StaticPages/EmployerApp/OrganizationsPage";
import BusinessPageStatic from "./views/StaticPages/EmployerApp/BusinessPageStatic";
import VerifiedDriverPage from "./views/StaticPages/EmployerApp/VerifiedDriverPage";
import ViewPricingPage from "./views/StaticPages/EmployerApp/ViewPricingPage";
import FreeForDriversPage from "./views/StaticPages/DriverApp/FreeForDriversPage";
import ContactUsPage from "./views/Home/ContactUs";

export default function routes() {
  return (
    <Switch>
      <DefaultLayout>
        {/*************************** PUBLIC PAGES ***************************/}

        {/* HOME PAGES */}
        <Switch>
          <Route path="/view-test" component={ViewTest} />
          <Route path="/" exact={true} component={HomePage}></Route>
          <Route path="/Instadriver.co" component={HomePage} />
          <Route path="/contact-us" component={ContactUsPage} />
          

          {/* AUTHENTICATION PAGES*/}

          <Route path="/login-user" component={AccountChoicePage} />
          <Route path="/driver-login" component={DriverloginPage} />
          <Route path="/employer-login" component={EmployerLoginPage} />
          <Route path="/driver-register" component={DriverRegisterPage} />
          <Route path="/employer-register" component={EmployerRegisterPage} />

          {/* NOT FOUND COMPONENT */}

          {/* <Route component={NotFoundPage} /> */}

          {/* Driver static pages */}
          <Route
            path="/professional-profile"
            component={ProfessionalProfilePage}
          />
          <Route path="/instadriver-groups" component={InstraDriverGroupPage} />
          <Route path="/livestream-page" component={LiveStreamPage} />
          <Route path="/gaming" component={GamingStaticPage} />
          <Route path="/group-video-call" component={VideoCallPage} />
          <Route path="/free-for-drivers" component={FreeForDriversPage} />

          {/* Employer static pages */}
          <Route
            path="/driver-recruitment-static"
            component={DriverRecruitmentPage}
          />
          <Route path="/create-organizations" component={OrganizationsPage} />
          <Route path="/business-page" component={BusinessPageStatic} />
          <Route path="/verified-driver" component={VerifiedDriverPage} />
          <Route path="/pricing-page" component={ViewPricingPage} />

          {/* INFO PAGES */}

          <Route path="/driver-not-found" component={NotFound} />
          <Route path="/about-us" component={AboutPage} />
          <Route path="/verified-search" component={VerifiedSearch} />
          {/* <Route path="/top-ad" component={TopAd} /> */}
          <Route path="/top-ad" component={OrganizationPage} />
          <Route path="/faqs-page" component={FaqsPage} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/search/:Keyword?" component={DriverSearch} />
          <Route
            path="/article-view/:articleId"
            component={ArticleViewProfilePage}
          />
          <Route path="/driver-search-results" component={SearchResults} />

          {/* INBOX PAGES */}

          {/*************************** PRIVATE PAGES ***************************/}
          {/* <Route path="/jobs-all" exact component={JobsPage} /> */}
          <Route
            path="/job-details/:jobpostId"
            exact
            component={JobDetailsPage}
          />
          <Route path="/business/:handle" exact component={BusinessPage} />
          <Route path="/jobs-all/:cardsType?" component={JobsPage} />
          <Route path="/hire-me/:id" component={HireMePage} />
          <Route path="/job-details/:jobpostId" component={JobDetailsPage} />

          <Route
            path="/drivers/public-profile/:id"
            component={DriverPublicProfileView}
          />

          <PrivateRoutes path="/inbox-pages" component={InboxPage} />
          {/* <Route component={PageNotFound} /> */}
          {/* EMPLOYER PAGES */}

          {/* PROFILE */}
        </Switch>

        <Switch>
          {/* <div className="main-profile">
            <div>
              <EmployerSideBar />
            </div>
            <div> */}
          <PrivateRoutes path="/employer-profile" component={ViewProfilePage} />
          <PrivateRoutes
            path="/employer-edit-profile"
            component={EditEmployerProfilePage}
          />
          <PrivateRoutes
            path="/post-photo-view/:post_id"
            component={ViewPostPhotoPage}
          />
          <PrivateRoutes
            path="/post-with-photo/:post_id"
            component={PostWithPhotoView}
          />
          <PrivateRoutes
            path="/post-video-view/:key"
            component={ViewPostVideoPage}
          />
          <PrivateRoutes
            path="/post-with-video/:key"
            component={PostWithVideoView}
          />

          {/* VACCANCY */}

          <PrivateRoutes
            path="/employer-recruitment"
            component={RecruitmentPage}
          />
          <PrivateRoutes path="/search-driver" component={SearchDrivers} />
          <PrivateRoutes
            path="/employer-driver-profile-page"
            component={EmployerDriverProfilePage}
          />
          <PrivateRoutes
            path="/employer-driver-profile-page-1"
            component={EmployerDriverProfilePage1}
          />
          <PrivateRoutes
            path="/employer-driver-profile-preview/:id"
            component={EmployerView}
          />

          <PrivateRoutes
            path="/drivers-job-application-page"
            component={JobVaccancyAdsPage}
          />

          <PrivateRoutes path="/driver-profile" component={DriverProfilePage} />
          <PrivateRoutes path="/no-driver-profile" component={NotFound} />
          <PrivateRoutes
            path="/driver-profile-preview"
            component={ProfilePreviewPage}
          />
          <PrivateRoutes
            path="/driver/profile/status"
            component={ProfileStatusPage}
          />
          <PrivateRoutes
            path="/driver/profile/freeze"
            component={FreezeProfilePage}
          />
          <PrivateRoutes
            path="/my-instradriver"
            component={MyInstradriverPage}
          />

          <PrivateRoutes
            path="/employer-applied-candidates-page"
            component={AppliedCandidatesPage}
          />
          <PrivateRoutes
            path="/employer-shortlisted-candidates-page"
            component={ShortListedCandidatesPage}
          />
          <PrivateRoutes
            path="/employer-hired-candidates-page"
            component={HiredCandidatesPage}
          />
          <PrivateRoutes
            path="/employer-rejected-candidates-page"
            path="/employer-applied-candidates-page/:jobId"
            component={AppliedCandidatesPage}
          />
          <PrivateRoutes
            path="/employer-shortlisted-candidates-page/:jobId"
            component={ShortListedCandidatesPage}
          />
          <PrivateRoutes
            path="/employer-hired-candidates-page/:jobId"
            component={HiredCandidatesPage}
          />
          <PrivateRoutes
            path="/employer-rejected-candidates-page/:jobId"
            component={RejectedCandidatesPage}
          />
          <PrivateRoutes
            path="/employer-job-card-ad/:jobId"
            component={JobCardReportPage}
          />

          {/* JOBS */}

          <PrivateRoutes
            path="/driver-job-more-info-page"
            component={MoreInfoPage}
          />
          {/* <PrivateRoutes path="/my-driver-posts-reposts-page" component={DriverPostsRepostsPage} /> */}
          <PrivateRoutes
            path="/my-driver-posts-reposts-page"
            component={OrganizationPage}
          />

          {/* MANAGE POSTS */}

          <PrivateRoutes
            path="/employer-manage-posts"
            component={ManagePostsPage}
          />
          <PrivateRoutes
            path="/employer-manage-posts-1"
            component={ManagePostsPage1}
          />
          <PrivateRoutes
            path="/employer-manage-posts-2"
            component={ManagePostsPage2}
          />
          <PrivateRoutes
            path="/employer-manage-posts-3"
            component={ManagePostsPage3}
          />
          <PrivateRoutes
            path="/employer-manage-posts-4"
            component={ManagePostsPage4}
          />
          <PrivateRoutes
            path="/employer-manage-posts-5"
            component={ManagePostsPage5}
          />

          {/* DRIVER CARDS */}

          <PrivateRoutes
            path="/driver-card-create"
            component={CreateJobCardPage}
          />

          <PrivateRoutes
            path="/employer-driver-card/:id"
            component={DriverCardsPage}
          />
          <PrivateRoutes
            path="/employer-driver-advertisement-cards"
            component={DriverAdvertCardPage}
          />

          {/* APPLICANTS */}

          <PrivateRoutes
            path="/employer-applicants"
            component={ApplicantsPage}
          />
          <PrivateRoutes
            path="/employer-applied-applicants"
            component={AppliedApplicantsPage}
          />
          <PrivateRoutes
            path="/employer-shortlisted-applicants"
            component={ShortlistedApplicantsPage}
          />
          <PrivateRoutes
            path="/employer-hired-applicants"
            component={HiredApplicantsPage}
          />
          <PrivateRoutes
            path="/employer-rejected-applicants"
            component={RejectedApplicantsPage}
          />

          {/* ON BOARD YOUR VEHICLES */}

          {/* <PrivateRoutes
            path="/employer-onboarding"
            component={OnboardPage}
          /> */}
          <PrivateRoutes
            path="/employer-onboarding"
            component={OrganizationPage}
          />

          {/* MY ORGANIZATION */}

          <PrivateRoutes
            path="/employer-organization"
            component={OrganizationPage}
          />

          {/* SOCIAL PAGES */}
          {/* SOCIAL */}

          <PrivateRoutes path="/social" component={SocialPage} />
          {/* <PrivateRoutes path="/user-social" component={Social2Page} /> */}
          <PrivateRoutes path="/user-social" component={ComingSoon} />
          <PrivateRoutes path="/social-post" component={SocialPostPage} />
          <PrivateRoutes
            path="/social-post-comments"
            component={SocialPost1Page}
          />
          <PrivateRoutes
            path="/social-post-comments-1"
            component={SocialPost2Page}
          />
          <PrivateRoutes
            path="/instadriver-group"
            component={InstadriverGroupsPage}
          />
          <PrivateRoutes
            path="/instadriver-group-comment"
            component={InstadriverGroups1Page}
          />
          <PrivateRoutes
            path="/instadriver-group-comment-reply"
            component={InstadriverGroups2Page}
          />
          <PrivateRoutes
            path="/instadriver-group-comment-reply-1"
            component={InstadriverGroups3Page}
          />
          <PrivateRoutes path="/about-group" component={AboutGroupPage} />
          <PrivateRoutes path="/group-members" component={MembersGroupPage} />
          <PrivateRoutes
            path="/group-announcements"
            component={GroupAnnouncementsPage}
          />
          <PrivateRoutes
            path="/group-media-files-photos"
            component={GroupMediaFilesPage}
          />
          <PrivateRoutes
            path="/group-media-files-videos"
            component={GroupMediaFiles1Page}
          />
          <PrivateRoutes
            path="/group-media-files-docs"
            component={GroupMediaFiles2Page}
          />
          <PrivateRoutes path="/group-photo-post" component={GroupPhotoPage} />
          <PrivateRoutes path="/group-video-post" component={GroupVideosPage} />
          <PrivateRoutes path="/launch-group" component={GroupFormPage} />
          <PrivateRoutes path="/video-chat" component={VideoChatPage} />
          <PrivateRoutes path="/gaming-page" component={GamingPage} />
          {/* <PrivateRoutes
            path="/notifications"
            component={NotificationsPage}
          /> */}
          <PrivateRoutes path="/notifications" component={OrganizationPage} />
          <PrivateRoutes path="/group-video-chat" component={GroupVideoChat} />
          <PrivateRoutes path="/livestream-home" component={LivestreamHome} />
          <PrivateRoutes
            path="/livestream-live-create"
            component={LivestreamLive}
          />
          <PrivateRoutes path="/video-chat-new" component={VideoChatNew} />

          {/* </div>
          </div> */}
        </Switch>
        <PrivateRoutes path="/join-chat-room" component={ChatRoomPage} />
        <PrivateRoutes
          path="/room-participants"
          component={RoomParticipantsPage}
        />
      </DefaultLayout>

      <EmployerLayout>
        {/*************************** PUBLIC PAGES ***************************/}
        {/*************************** PRIVATE PAGES ***************************/}
      </EmployerLayout>
    </Switch>
  );
}
