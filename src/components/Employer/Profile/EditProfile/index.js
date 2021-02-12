import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import EmployerProfile from "../EmployerProfile";
import MapContainer from "./MapContainer";
import MainSideBar from "../../../Layout/MainSideBar/Employer/EmployerSideBarFunction";
import HandlerPopUp from "./HandlePopUp";
import "./index.css";
import {
  addBussinesName,
  addAboutBusiness,
  addContactInfo,
  addContactVisibility,
  addHandle,
  addLocation,
  addTagLine,
  addWebsite,
  updateEmployerProfile,
} from "../../../../redux/actions/employer_actions/employer_profile_actions";
import BussinessPopUp from "./BusinessPopup";

const EditEmployerProfile = () => {
  const role = useSelector(
    (state) => state.user_reducers.user_credentials.role
  );

  const history = useHistory();
  if (role !== "EMPLOYER" && role === "DRIVER") {
    //go to employer driver profile
    let route = "/driver-profile";
    history.push(route);
  }

  const employer_profile = useSelector(
    (state) => state.employer_reducers.employer_profile
  );
  const [formData, setFormData] = useState(employer_profile);
  const [showHandlePopUp, setShowHandlePopUp] = useState(false);
  const [showBusinessPopup, setShowBusinessPopup] = useState(false);

  const { token } = useSelector(
    (state) => state.user_reducers.user_credentials
  );

  let {
    businessName,
    handle,
    website,
    tagLine,
    aboutBusiness,
    businessLocation: { title, latitude, longitude },
    mobileNumber,
    email,
    contactVisibility,
  } = formData;

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getLocation = (title, latitude, longitude) => {
    setFormData({
      ...formData,
      businessLocation: { title, latitude, longitude },
    });
  };

  const openBusinessPopUp = () => {
    setShowBusinessPopup(true);
  };

  const closeBusinessPopUp = () => {
    setShowBusinessPopup(false);
  };

  const openHandlePopUp = () => {
    setShowHandlePopUp(true);
  };

  const closeHandlePopUp = () => {
    setShowHandlePopUp(false);
  };

  const saveBusinessName = (useHandler) => {
    if (useHandler) {
      dispatch(addBussinesName(token, businessName));
      // alert("Business Name Submitted...");
    } else {
      alert("Business Name not Submitted");
      // console.log("Handler not saved");
    }
    closeBusinessPopUp();
  };

  const saveHandler = (useHandler) => {
    if (useHandler) {
      dispatch(addHandle(token, handle));

      alert("Handle Submitted...");
    } else {
      alert("Handle not Submitted");
      // console.log("Handler not saved");
    }
    closeHandlePopUp();
  };

  // const handleBusinessNameSubmit = async (e) => {
  //   e.preventDefault();
  //  await dispatch(addBussinesName(token, businessName));
  // };

  return (
    <React.Fragment>
      <div className="row main-row-employer-view">
        <MainSideBar />
        <div className="col-md-10 ml-auto">
          <EmployerProfile />
          <div className="row custom-mt">
            <div className="col-sm-12 col-md-8 col-lg-7 mx-auto pos-relative">
              <div className="card card-body business-name py-4 mt-5">
                <h6 className="custom-h6">Name of your business</h6>
                <p className="faded-color">
                  This is the brand or company name. If your company is Tesla
                  Automakers Limited, it is advisable you use the first name
                  “Tesla” as the business name. If your business is not
                  registered or has no brand name, you can just type something
                  like “John’s Hustle” Or “Mary Taxis” assuming your name is
                  Mary and you are in taxi business. Hey! you are free to be
                  creative and come up with anything you want.
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();

                    openBusinessPopUp();
                  }}
                >
                  <div>
                    <input
                      type="text"
                      name="businessName"
                      id="businessName"
                      value={businessName}
                      required
                      disabled={
                        employer_profile.updatedBusinessName ? true : false
                      }
                      maxLength={30}
                      onChange={(e) => handleChange(e)}
                      placeholder="[Maximum of 30 character]"
                      className="form-control custom-bg-input"
                    />
                    <div className="text-right">
                      <span>
                        {businessName
                          ? businessName.length
                          : employer_profile.businessName
                          ? employer_profile.businessName.length
                          : "0"}
                        &nbsp;/ 30
                      </span>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className={`custombtn float-right ${
                      employer_profile.updatedBusinessName &&
                      "custombtn-disabled"
                    }`}
                    disabled={
                      employer_profile.updatedBusinessName ? true : false
                    }
                  >
                    Save
                  </button>
                </form>
              </div>

              <div className="card card-body instahandler py-4 mt-5 ">
                <h6 className="custom-h6">Instadriver handle for employees</h6>
                <p className="faded-color">
                  This is a unique business handle for your business. When
                  people click this unique url, they will be redirected to your
                  business page.
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    openHandlePopUp();
                  }}
                >
                  <div>
                    <div className="insta-web">
                      <span>www.instadriver.com/business/</span>
                      <input
                        type="text"
                        name="handle"
                        placeholder="[Maximum 30 characters]"
                        value={handle}
                        required
                        disabled={employer_profile.handleUpdated ? true : false}
                        maxLength={30}
                        onChange={(e) => handleChange(e)}
                        id="handle"
                        className="form-control"
                      />
                    </div>
                    <div className="text-right">
                      <span>
                        {handle
                          ? handle.length
                          : employer_profile.handle
                          ? employer_profile.handle.length
                          : "0"}
                        &nbsp;/ 30
                      </span>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className={`custombtn float-right ${
                      employer_profile.handleUpdated && "custombtn-disabled"
                    }`}
                    disabled={employer_profile.handleUpdated ? true : false}
                  >
                    Save
                  </button>
                </form>
              </div>

              <div className="card card-body business-website py-4 mt-5 ">
                <h6 className="custom-h6">Website for your business</h6>
                <p className="faded-color">
                  If you do not have a website, dont sweat over it. Just use our
                  Instadriver business handle above. If you do have a website,
                  please show it to the visitors.
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(addWebsite(token, website));
                  }}
                >
                  <div>
                    <div className="insta-web">
                      <input
                        type="text"
                        name="website"
                        value={website}
                        onChange={(e) => handleChange(e)}
                        id="website"
                        required
                        placeholder="[Maximum 30 characters]"
                        maxLength={30}
                        className="form-control"
                      />
                    </div>
                    <div className="text-right">
                      <span>{website ? website.length : "0"}/100</span>
                    </div>
                  </div>
                  <button type="submit" className="custombtn float-right">
                    Save
                  </button>
                </form>
              </div>

              <div className="card card-body business-tagline py-4 mt-5 ">
                <h6 className="custom-h6">Your business tagline</h6>
                <p className="faded-color">
                  Give us a one-liner that summarises your company, vision,
                  mission etc. What is your business mantra? Tell people who you
                  are and what you stand for in a few succinct words. For Uber,
                  they may have their tagline as “We ignite opportunity by
                  setting the world in motion”. Whats your tagline?
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(addTagLine(token, tagLine));
                  }}
                >
                  <div>
                    <input
                      type="text"
                      name="tagLine"
                      id="tagLine"
                      value={tagLine}
                      onChange={(e) => handleChange(e)}
                      className="form-control custom-bg-input"
                      required
                      maxLength={50}
                      placeholder="Maximum 50 Characters"
                    />
                    <div className="text-right">
                      <span>{tagLine ? tagLine.length : "0"}/50</span>
                    </div>
                  </div>
                  <button type="submit" className="custombtn float-right">
                    Save
                  </button>
                </form>
              </div>

              <div className="card card-body business-about py-4 mt-5 ">
                <h6 className="custom-h6">About your business</h6>
                <p className="faded-color">
                  Let people know about your business and what it does.
                  Potential clients, partners, and hires would love to get an
                  idea of your business. Provide a brief description here.
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(addAboutBusiness(token, aboutBusiness));
                  }}
                >
                  <div>
                    <textarea
                      name="aboutBusiness"
                      id="aboutBusiness"
                      required
                      minLength={300}
                      maxLength={500}
                      value={aboutBusiness}
                      onChange={(e) => handleChange(e)}
                      cols="20"
                      rows="10"
                      placeholder="(Minimum of 300 and Maximum of 500 characters)"
                    ></textarea>
                    <div className="text-right">
                      <span>
                        {aboutBusiness ? aboutBusiness.length : "0"}&nbsp;/ 500
                      </span>
                    </div>
                  </div>
                  <button type="submit" className="custombtn float-right">
                    Save
                  </button>
                </form>
              </div>

              <div className="card card-body business-location py-4 mt-5 ">
                <h6 className="custom-h6">Enter business location</h6>
                <p className="faded-color">
                  By default, the location displayed will be of your city you
                  first registered an account. You can choose a specific
                  location if you want the visitors to know the physical
                  location of your business.
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(addLocation(token, title, latitude, longitude));
                  }}
                >
                  <input type="hidden" name="location" value={title} />
                  <div>
                    <MapContainer
                      getLocation={getLocation}
                      title={title}
                      lat={latitude}
                      lng={longitude}
                    />
                  </div>
                  <button type="submit" className="custombtn float-right">
                    Save Location
                  </button>
                </form>
              </div>

              <div className="card card-body business-contact py-4 mt-5 ">
                <h6 className="custom-h6">Contact Information</h6>
                <p className="faded-color">
                  Those with reservations with providing contact information,
                  don’t worry, we have privacy settings to protect you. For the
                  rest, to get clients, partners, amazing people to hire, et
                  cetera, you need to provide contact information for your
                  business. Please insert your contact information here, you
                  will decide to show them publicly or not in the next section.
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(addContactInfo(token, email, mobileNumber));
                  }}
                >
                  <div className="business-cat-info">
                    <div>
                      <label htmlFor="phone">Your Phone Number</label>
                      <input
                        type="text"
                        name="mobileNumber"
                        value={mobileNumber}
                        onChange={(e) => handleChange(e)}
                        id="mobileNumber"
                        className="form-control custom-bg-input"
                        required
                        placeholder="Insert Your Phone Number"
                      />
                    </div>
                    <div>
                      <label htmlFor="email">Your Phone Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => handleChange(e)}
                        id="email"
                        className="form-control custom-bg-input"
                        required
                        placeholder="Insert Your Email Address"
                      />
                    </div>
                  </div>
                  <button type="submit" className="custombtn float-right">
                    Save
                  </button>
                </form>
              </div>

              <div className="card card-body visiblity py-4 mt-5 mb-5">
                <h6 className="custom-h6">
                  Visibility settings for your contact information
                </h6>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(addContactVisibility(token, contactVisibility));
                  }}
                >
                  <div className="visibility-row">
                    <div className="form-check upper">
                      <input
                        type="radio"
                        name="contactVisibility"
                        value={true}
                        onChange={(e) => handleChange(e)}
                        checked={
                          contactVisibility === true ||
                          contactVisibility === "true"
                        }
                        id="radio1"
                        className="form-check-input"
                      />
                      <label htmlFor="radio1"></label>
                    </div>
                    <div>
                      <h6>Make my contact information public</h6>
                      <p className="faded-color">
                        By making your contact information public, your phone
                        number and email address you inserted above will be
                        visible on your business page and on your vacancy ads.
                      </p>
                    </div>
                  </div>
                  <div className="visibility-row">
                    <div className="form-check upper">
                      <input
                        type="radio"
                        name="contactVisibility"
                        value={false}
                        onChange={(e) => handleChange(e)}
                        checked={
                          contactVisibility === false ||
                          contactVisibility === "false"
                        }
                        id="radio2"
                        className="form-check-input"
                      />
                      <label htmlFor="radio2"></label>
                    </div>
                    <div>
                      <h6>
                        Do NOT make my contact information public instead show
                        “DM The Business” button
                      </h6>
                      <p className="faded-color">
                        By choosing this option, your phone number and email
                        address you inserted above will NOT be visible on your
                        business page and on your vacancy ads. Instead we will
                        show “DM The Business” button, and visitors will have to
                        send a text message and you will receive the messages on
                        your inbox section of your Instadriver account.
                      </p>
                    </div>
                  </div>
                  <button type="submit" className="custombtn float-right">
                    Save
                  </button>
                </form>
              </div>
              {showHandlePopUp && (
                <HandlerPopUp
                  closeHandlePopUp={closeHandlePopUp}
                  saveHandler={saveHandler}
                  instahandler={handle}
                />
              )}

              {showBusinessPopup && (
                <BussinessPopUp
                  closeBusinessPopUp={closeBusinessPopUp}
                  saveBusinessName={saveBusinessName}
                  name={businessName}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditEmployerProfile;
