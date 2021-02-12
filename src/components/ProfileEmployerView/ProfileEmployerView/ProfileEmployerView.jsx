import React, { useState, useEffect } from "react";
import DriverCategory from "../DriverCategory/DriverCategory";
import DriverInfo from "../DriverInfo/DriverInfo";
import Platform from "../Platform/Platform";
import DriverQualifications from "../DriverQualifications/DriverQualifications";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import History from "../History/History";
import DailyTarget from "../DailyTarget/DailyTarget";
import SalaryRange from "../SalaryRange/SalaryRange";
import Preferences from "../Preferences/Preferences";
import HireReason from "../HireReason/HireReason";
import SocialHistory from "../SocialHistory/SocialHistory";
import MoreInform from "../MoreInform/MoreInform";
import ProfilePreview from "../ProfilePreview/ProfilePreview";
import PreviousHistory from "../PreviousHistory/PreviousHistory";
import Upload from "../Upload/Upload";
import HourlyRange from "../HourlyRange/HourlyRange";
import { connect } from "react-redux";
import { getDriverProfile } from "../../../redux/actions/employer_actions/employer_recruitment_actions";
import { Data } from "@react-google-maps/api";
import EmployerSideBarFunction from "../../Layout/MainSideBar/Employer/EmployerSideBarFunction";
import EmployerApplicantActions from "../../Employer/Recruitment/Vaccancy/EmployerApplicantActions";

// EmployerSideBarFunction

const DriverPublicProfileView = (props) => {
  const [data, setData] = useState({});

  useEffect(async () => {
    const response_data = await props.getDriverProfile(props.id);
    console.log(response_data);
    setData(response_data);
  }, []);

  const getImages = (data) => {
    if (data) {
      let output = {};
      output.name = `${data.firstName} ${data.lastName}`;
      output.phone = data.mobileNumber;
      let images = [];
      if (data.avatar) {
        images.push(data.avatar);
      } else {
        images.push("https://instadriver.co/img/profiledefault.svg");
      }
      if (data.otherImages) {
        if (data.otherImages.imageOne) {
          images.push(data.otherImages.imageOne);
        } else {
          images.push("https://instadriver.co/img/profiledefault.svg");
        }

        if (data.otherImages.imageTwo) {
          images.push(data.otherImages.imageTwo);
        } else {
          images.push("https://instadriver.co/img/profiledefault.svg");
        }

        if (data.otherImages.imageThree) {
          images.push(data.otherImages.imageThree);
        } else {
          images.push("https://instadriver.co/img/profiledefault.svg");
        }
      }
      output.lastSeen = new Date();
      output.availableForHire = data.availableforHire;
      output.images = images;
      return output;
    }
  };

  const stringifyArray = (arr) => {
    let s = "";
    for (var i = 0; i < arr.length; i++) {
      if (s.length > 0) {
        s += " ," + arr[i];
      } else {
        s += arr[i];
      }
    }
    return s;
  };

  const getPersonalInfo = (data) => {
    if (data) {
      let output = {};
      output.name = `${data.firstName} ${data.lastName}`;
      if (data.personalInformation) {
        output.location = data.personalInformation.residentialLocation;
        output.countCity = data.personalInformation.city;
        output.nationality = data.personalInformation.nationality;
        output.languages = stringifyArray(
          data.personalInformation.languagesSpoken
        );
        output.yearBorn = data.personalInformation.yearBorn;
        output.gender = data.personalInformation.gender;
        output.maritalStatus = data.personalInformation.maritialStatus;
        output.drink = data.personalInformation.drink;
        output.smoke = data.personalInformation.smoke;
      }
      return output;
    }
  };

  const getDriverQualifications = (data) => {
    if (data) {
      let output;
      if (data.qualification) {
        output = {
          ...data.qualification,
          uniqueSkills: stringifyArray(data.qualification.anyUniqueSkills),
        };
        // return output;
      }
      // console.log(output);
      return output;
    }
  };

  return (
    <div
      style={{ background: "#F5F9FC" }}
      className="DriverProfilePreview container-fluid"
    >
      <div className="row">
        <EmployerSideBarFunction />
        <div className="profile__mainBody col-md-10 px-2 px-5 py-3">
          <EmployerApplicantActions />
          <div className="container-fluid px-0">
            <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0">
              <ProfilePhoto data={getImages(data)} />
            </div>
            <div className="col-md-12 px-0">
              <DriverInfo data={getPersonalInfo(data)} />
            </div>
            <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0">
              <DriverQualifications data={getDriverQualifications(data)} />
            </div>
            <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0">
              <DriverCategory
                data={data && data.driverCategories}
                breakDownData={data && data.experienceBreakdown}
              />
            </div>
            <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0">
              <Platform data={data && data.rideHailingPlatforms} />
            </div>
            <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0">
              <Upload
                data={data && data.myUploads}
                visibility={data && data.uploadsVisibility}
              />
            </div>
            <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0">
              <DailyTarget
                data={data && data.dailyTargetPayout}
                currency={data && data.currency}
              />
            </div>
            <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0">
              <History />
            </div>
            <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0">
              <Preferences />
            </div>
            <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0">
              <HourlyRange />
            </div>
            <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0">
              <SalaryRange
                data={data && data.salaryRangeforFullTime}
                currency={data && data.currency}
              />
            </div>
            <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0">
              <PreviousHistory />
            </div>
            <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0">
              <HireReason data={data && data.considerToHire} />
            </div>
            <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0">
              <SocialHistory data={data && data.showSocialSummary} />
            </div>
            <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0">
              <MoreInform data={data && data.willProfileMoreInformation} />
            </div>
            <div style={{ marginTop: "3.5rem" }} className="col-md-12 px-0">
              <ProfilePreview />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { getDriverProfile })(DriverPublicProfileView);
