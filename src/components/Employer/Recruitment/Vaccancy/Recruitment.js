import React, { useState, useEffect } from "react";
import { addJobPost } from "../../../../redux/actions/employer_actions/employer_recruitment_actions";
import { useDispatch, useSelector } from "react-redux";
import get from "lodash/get";
import set from "lodash/set";
import map from "lodash/map";
import { getDriverStaticFormData } from "../../../../Api/index";
import EmployerSideBarFunction from "../../../Layout/MainSideBar/Employer/EmployerSideBarFunction";
import VaccancyAddCard from "./VaccancyComponents/Recruitment/VaccancyAddCard";
import UploadImageInput from "./VaccancyComponents/Recruitment/UploadImageInput";
import UploadFileInput from "./VaccancyComponents/Recruitment/UploadFileInput";
import SalaryInput from "./VaccancyComponents/Recruitment/SalaryInput";
import SalaryAmountInput from "./VaccancyComponents/Recruitment/SalaryAmountInput";
import PreferredDriverLocationInput from "./VaccancyComponents/Recruitment/PreferredDriverLocationInput";
import DrivingLicenceInput from "./VaccancyComponents/Recruitment/DrivingLicenceInput";
import DrivingExperienceInput from "./VaccancyComponents/Recruitment/DrivingExperienceInput";
import SecondDriverCategoryInput from "./VaccancyComponents/Recruitment/SecondDriverCategoryInput";
import FirstDriverCategoryInput from "./VaccancyComponents/Recruitment/FirstDriverCategoryInput";
import CustomMessageInput from "./VaccancyComponents/Recruitment/CustomMessageInput";
import TemplateMessageInput from "./VaccancyComponents/Recruitment/TemplateMessageInput";
import AdTypeInput from "./VaccancyComponents/Recruitment/AdTypeInput";
import HeadingDetails from "./VaccancyComponents/Recruitment/HeadingDetails";
import JobDescriptionTemplate from "../../../Job/Job_Components/JobDescriptionTemplate";

const Recruitment = (props) => {
  const session_token = useSelector(
    (state) => state.user_reducers.user_credentials.token
  );

  const dispatch = useDispatch();
  const [jobDetails, setJobDetails] = useState({});
  const [imgObj, setImgObj] = useState(undefined);
  const [fileObjs, setFileObjs] = useState([{}]);
  const [preferedLocation, setPreferedLocation] = useState({});
  const [checkLocation, setCheckLocation] = useState(false);

  const [formDataStatic, setFormSDataStatic] = useState({});
  let formdatastatictemp;
  useEffect(() => {
    const formReq = async () => {
      formdatastatictemp = await getDriverStaticFormData();
      setFormSDataStatic(formdatastatictemp);
      console.log(
        "added static form data for job post recruitment",
        formdatastatictemp
      );
    };
    formReq();
  }, [formdatastatictemp]);

  //Handler for the names and values of the form inputs
  const handleChange = (e) => {
    let tempJobDetails = { ...jobDetails };
    set(tempJobDetails, e.target.name, e.target.value);
    setJobDetails(tempJobDetails);
    console.log("==jobDetails", jobDetails);
    console.log("==jobDetails", tempJobDetails);

    console.log("==preferedLocation", preferedLocation);

    let categoryList = [
      jobDetails.driver_category1,
      jobDetails.driver_category2,
    ];
    console.log("==categoryList", categoryList);
  };
  console.log(" file obj rec page", fileObjs);

  //Submition Handler
  const handleJobDetailsSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    var future = new Date();
    future.setDate(future.getDate() + 30);
    console.log("img obj recieved ", preferedLocation);

    if (!preferedLocation.location) {
      alert("enter location");
      return;
    }
    if (!imgObj) {
      alert("upload one image");
      return;
    }

    let location = {
      title: preferedLocation.location,
      latitude: preferedLocation.latitude,
      longitude: preferedLocation.longitude,
    };

    console.log("loc object ==== ", location);

    let salary = { min: 2, max: 3 };

    let categoryList = [
      jobDetails.driver_category1,
      jobDetails.driver_category2,
    ];

    let formData = new FormData();

    formData.append("title", "string title");
    formData.append("description", jobDetails.description);
    formData.append("file", imgObj);
    formData.append("adType", jobDetails.adType);
    formData.append("vehicleRegNo", "KKV007");
    formData.append("category", categoryList);
    formData.append("currency", jobDetails.currency);
    formData.append("experience", parseInt(jobDetails.experience, 10));
    formData.append("licenseAge", parseInt(jobDetails.licenseAge, 10));
    formData.append("location", location);
    formData.append("salary", salary);
    formData.append("expireAt", future);

    map(
      fileObjs,
      (file, i) => file.path && formData.append(`attachment${i + 1}`, file)
    );
    // fileObjs[0].path && formData.append("attachment1", fileObjs[0])

    // fileObjs[1].path && formData.append("attachment2", fileObjs[1])

    // fileObjs[2].path && formData.append("attachment3", fileObjs[2])

    console.log("formData ", formData.get("file"));

    // let body = {
    //   title: "string",
    //   description: jobDetails.description,
    //   file: formData,
    //   adType: jobDetails.adType,
    //   vehicleRegNo: "1234567",
    //   category: [jobDetails.driver_category1, jobDetails.driver_category2],
    //   currency: jobDetails.currency,
    //   experience: parseInt(jobDetails.experience, 10),
    //   licenseAge: parseInt(jobDetails.licenseAge, 10),
    //   location: {
    //     title: jobDetails.location,
    //     latitude: 0,
    //     longitude: 0,
    //   },

    //   salary: { min: 2, max: 3 },
    //   // attachment1: fileObjs[0],
    //   // attachment2: fileObjs[1],
    //   // attachment3: fileObjs[2],
    //   // status: "active",
    //   expireAt: future,
    // }
    // let body = {
    //   name: "string",
    //   imageUrl: "https://instadrivers3bucket.s3.ap-south-1.amazonaws.com/photo5877513181386093449.jpg",
    //   description: "string",
    //   mobileNumber: "9993339993",
    //   type: [
    //     jobDetails.driver_category1,
    //     jobDetails.driver_category2
    //   ],
    //   experience: parseInt(jobDetails.experience, 10),
    //   licenseAge: parseInt(jobDetails.licenseAge, 10),
    //   location: {
    //     title: jobDetails.location,
    //     latitude: 0,
    //     longitude: 0
    //   },
    //   salary: {
    //     min: parseInt(jobDetails.min, 10),
    //     max: parseInt(jobDetails.max, 10)
    //   }
    // }

    console.log("body ====== ", formData.entries);

    dispatch(addJobPost(session_token, formData));

    setJobDetails({});
    setImgObj(undefined);
    setFileObjs([{}]);
    setPreferedLocation({});
    setCheckLocation(false);

    // const [jobDetails, setJobDetails] = useState({});
    // const [imgObj, setImgObj] = useState(undefined);
    // const [fileObjs, setFileObjs] = useState([{}]);
    // const [preferedLocation, setPreferedLocation] = useState({});
    // const [checkLocation, setCheckLocation] = useState(false);
  };

  const handleSalaryFocus = () => {
    if (Object.keys(preferedLocation).length === 0) {
      setCheckLocation(true);
    }
  };

  console.log("Currency is------", jobDetails.currency);

  return (
    <div>
      <div id="content">
        <div className="row">
          <EmployerSideBarFunction />
          <div className="col-md-10 ml-auto">
            <main
              role="main"
              className="col-md-11 ml-sm-auto col-lg-11 px-4 padding_left_10 padding_right_40"
            >
              <div className="cus-space" />
              <HeadingDetails />
              <div className="cus-space" />
              <div className="cus-space" />
              <div className="container">
                <div className="row">
                  <div className="col-sm">
                    <form
                      id="frmProfile1"
                      // encType="multipart/form-data"
                      onSubmit={handleJobDetailsSubmit}
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <AdTypeInput
                            handleChange={handleChange}
                            jobDetails={jobDetails}
                          />
                          <div className="cus-space" />
                          <JobDescriptionTemplate
                            jobDetails={jobDetails}
                            setJobDetails={setJobDetails}
                            handleChange={handleChange}
                          />
                          <div className="space" style={{ height: 90 }} />
                          <CustomMessageInput
                            jobDetails={jobDetails}
                            handleChange={handleChange}
                          />
                          <div className="cus-space" />
                          <div className="cus-space" />
                          <FirstDriverCategoryInput
                            formDataStatic={formDataStatic}
                            handleChange={handleChange}
                            jobDetails={jobDetails}
                          />
                          <br />
                          <SecondDriverCategoryInput
                            handleChange={handleChange}
                            formDataStatic={formDataStatic}
                            jobDetails={jobDetails}
                          />
                          <div className="cus-space" />
                          <DrivingExperienceInput
                            jobDetails={jobDetails}
                            handleChange={handleChange}
                          />
                          <div className="cus-space" />
                          <DrivingLicenceInput
                            jobDetails={jobDetails}
                            handleChange={handleChange}
                          />
                          <div className="cus-space" />

                          <PreferredDriverLocationInput
                            handleChange={handleChange}
                            preferedLocation={preferedLocation}
                            setPreferedLocation={setPreferedLocation}
                            setCheckLocation={setCheckLocation}
                            jobDetails={jobDetails}
                            setJobDetails={setJobDetails}
                          />
                          <div className="cus-space" />
                          {/* <SalaryInput
                            handleChange={handleChange}
                            jobDetails={jobDetails}
                          /> */}
                          <br />
                          <SalaryAmountInput
                            handleChange={handleChange}
                            jobDetails={jobDetails}
                            checkLocation={checkLocation}
                            handleSalaryFocus={handleSalaryFocus}
                            currency={jobDetails.currency}
                          />
                          <br />
                          <br />
                          <UploadImageInput
                            handleChange={handleChange}
                            imgObj={imgObj}
                            setImgObj={setImgObj}
                          />
                          <br />
                          <UploadFileInput
                            handleChange={handleChange}
                            fileObjs={fileObjs}
                            setFileObjs={setFileObjs}
                          />
                          <br />
                          <br />
                        </div>
                        <div className="col-md-6">
                          <VaccancyAddCard
                            jobDetails={jobDetails}
                            imgObj={imgObj}
                            preferedLocation={preferedLocation}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

Recruitment.propTypes = {};

export default Recruitment;
