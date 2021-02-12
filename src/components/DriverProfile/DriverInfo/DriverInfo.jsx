import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import get from "lodash/get";
import map from "lodash/map";
import includes from "lodash/includes";
import Modal from "react-modal";
import { updateDriverInfo } from "../../../redux/actions/driver_actions/driver_profile_actions";
import closeBtn from "../../../dist/icons/closeBtn.png";

import { PostRoute } from "../../../Api/index";
const { Post, Get } = PostRoute();

const customStyles = {
  content: {
    top: "60%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const DriverInfo = ({
  userInfo,
  handleChange,
  formStaticDataProp,
  session_token,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  let drinkFlagProp = get(userInfo, "personalInformation.drink");
  const [drinkCheck, setDrinkCheck] = useState(drinkFlagProp);
  let smokeFlagProp = get(userInfo, "personalInformation.smoke");
  const [smokeCheck, setSmokeCheck] = useState(smokeFlagProp);
  let nationalityProp = get(userInfo, "personalInformation.nationality");
  const [citylist, setCitylist] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setDrinkCheck(drinkFlagProp);
    setSmokeCheck(smokeFlagProp);

    //async method to get city list as per country
    (async () => {
      let cityListResponse = await Get(`users/city/${nationalityProp}`);
      setCitylist(cityListResponse.data.response_data);
    })();
  }, [drinkFlagProp, smokeFlagProp, nationalityProp]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleBlur(e) {
    
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation()
    closeModal();
  }

  function handlePersonalInfoSubmit(e) {
    e.preventDefault();

    //special check for radio buttons
    if (
      get(userInfo, "personalInformation.drink") === undefined ||
      !get(userInfo, "personalInformation.smoke") === undefined
    ) {
      alert("check smoking & drinking ");
      return;
    }

    //data object created for request with the help of lodash's get
    let data = {
      residentialLocation: get(
        userInfo,
        "personalInformation.residentialLocation"
      ),
      country: get(userInfo, "personalInformation.nationality"),
      city: get(userInfo, "personalInformation.city"),
      nationality: get(userInfo, "personalInformation.nationality"),
      languagesSpoken: get(userInfo, "personalInformation.languagesSpoken"),
      yearBorn: get(userInfo, "personalInformation.yearBorn"),
      gender: get(userInfo, "personalInformation.gender"),
      maritialStatus: get(userInfo, "personalInformation.maritialStatus"),
      drink: get(userInfo, "personalInformation.drink"),
      smoke: get(userInfo, "personalInformation.smoke"),
    };
    //dispatching api action
    dispatch(updateDriverInfo(session_token, data));
    alert("personal info submitted");
  }

  return (
    <div className="driver__info section__style px-5 pb-3 pt-5 bg-white mt-3">
      <h5 className="form__heading mb-5">Personal Information</h5>
      <form className="row mt-2" onSubmit={handlePersonalInfoSubmit}>
        <div className="col-md-6">
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="name">
              Full Name
            </label>
            <div className="col-sm-7">
              <input
                value={
                  get(userInfo, "firstName")
                    ? `${get(userInfo, "firstName")} ${get(
                      userInfo,
                      "lastName"
                    )}`
                    : ""
                }
                onClick={openModal}
                type="text"
                className="form-control inputIcon-none"
                // disabled
                name="name"
                id="name"
              />
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                overlayClassName="Overlay"
                className="Modal"
              >
                <div className="fullName__Modal d-flex flex-column justify-content-center align-items-center border">
                  <div className="text-right w-100">
                    <button
                      onClick={closeModal}
                      className=" w-25 btn closeModalBtn"
                    >
                      <img src={closeBtn} alt="" />
                    </button>
                  </div>
                  <div className="px-5 pb-4 pt-0">
                    <div className="modal__content text-justify">
                      <p>
                        Hey! This is a one-time entry. Put your real name so
                        that employers and friends can recognize you. Once you
                        add your name, you cannot change it again. Put your full
                        name and confirm the spelling is ok.
                      </p>
                    </div>
                    <div className="modal__footer w-100 m-auto">
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-6 pr-1">
                            <input
                              onBlur={handleBlur}
                              placeholder="First Name"
                              type="text"
                              className="form-control inputIcon-none w-100 text-center mb-3"
                              name="firstName"
                              id="FirstName"
                              value={get(userInfo,"firstName")|| ""}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-6 pl-1">
                            <input
                              onBlur={handleBlur}
                              placeholder="Last Name"
                              type="text"
                              className="form-control inputIcon-none w-100 text-center mb-3"
                              name="lastName"
                              id="LastName"
                              value={get(userInfo,"lastName")|| ""}
                              onChange={handleChange}

                            />
                          </div>
                        </div>                       
                        <button
                          type="submit"
                          className="btn btn-border w-100 submitBtn"
                        >
                          Add Name
                        </button>{" "}
                      </form>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="phone">
              Contact Phone Number
            </label>
            <div className="col-sm-7">
              <input
                type="number"
                className="form-control inputIcon-none"
                name="mobileNumber"
                id="phone"
                value={get(userInfo, "mobileNumber") || ""}
                onChange={handleChange}
                disabled
              />
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="email">
              Email Registered
            </label>
            <div className="col-sm-7">
              <input
                type="email"
                className="form-control inputIcon-none"
                name="email"
                required={true}
                id="email"
                aria-describedby="emailHelp"
                value={get(userInfo, "email") || ""}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="location">
              Residential Location
            </label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control inputIcon-none"
                name="personalInformation.residentialLocation"
                id="location"
                required={true}
                value={
                  get(userInfo, "personalInformation.residentialLocation") || ""
                }
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label
              className="col-sm-5 text-left label__style"
              for="nationality"
            >
              Nationality
            </label>
            <div className="col-sm-7">
              <select
                className="form-control inputIcon-none"
                id="location"
                name="personalInformation.nationality"
                onChange={handleChange}
                data-dropup-auto="false"
                value={get(userInfo, "personalInformation.nationality") || ""}
                required
              >
                {!get(userInfo, "personalInformation.nationality") && (
                  <option key={"Select"} value={""}>
                    {"Select"}
                  </option>
                )}
                {map(get(formStaticDataProp, "countries"), (country, i) => (
                  <option key={i} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="city">
              County/City
            </label>
            <div className="col-sm-7">
              <select
                className="form-control inputIcon-none"
                id="location"
                name="personalInformation.city"
                onChange={handleChange}
                data-dropup-auto="false"
                value={get(userInfo, "personalInformation.city") || ""}
                required
              >
                {(!get(userInfo, "personalInformation.city") ||
                  !includes(
                    citylist,
                    get(userInfo, "personalInformation.city")
                  )) && (
                    <option key={"Select"} value={""}>
                      {"Select"}
                    </option>
                  )}
                {map(citylist, (city, i) => (
                  <option key={i} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="language">
              Languages Spoken
            </label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control inputIcon-none"
                name="personalInformation.languagesSpoken"
                id="language"
                pattern="^[a-zA-Z,]*$"
                required={true}
                placeholder="e.g english,spanish"
                value={
                  get(userInfo, "personalInformation.languagesSpoken") || ""
                }
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="born">
              Year Born
            </label>
            <div className="col-sm-7">
              <input
                type="number"
                className="form-control inputIcon-none"
                name="personalInformation.yearBorn"
                id="born"
                required={true}
                value={get(userInfo, "personalInformation.yearBorn") || ""}
                onChange={handleChange}
                min="0"
              />
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="gender">
              Gender
            </label>
            <div className="col-sm-7">
              <select
                className="form-control inputIcon-none"
                id="gender"
                name="personalInformation.gender"
                value={get(userInfo, "personalInformation.gender") || ""}
                onChange={handleChange}
                required
              >
                {!get(userInfo, "personalInformation.gender") && (
                  <option key={"Select"} value={""}>
                    {"Select"}
                  </option>
                )}
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
              </select>
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="marital">
              Marital Status
            </label>
            <div className="col-sm-7">
              <select
                className="form-control inputIcon-none"
                id="location"
                name="personalInformation.maritialStatus"
                onChange={handleChange}
                value={
                  get(userInfo, "personalInformation.maritialStatus") || ""
                }
                required
              >
                {!get(userInfo, "personalInformation.maritialStatus") && (
                  <option key={"Select"} value={""}>
                    {"Select"}
                  </option>
                )}
                {map(
                  get(formStaticDataProp, "maritialStatus"),
                  (statusValue, key) => (
                    <option key={key} value={statusValue}>
                      {statusValue}
                    </option>
                  )
                )}
              </select>
            </div>
          </div>
          <div className="form-group row align-items-center my-4">
            <label
              className="col-sm-5 text-left label__style"
              for="nationality"
            >
              Do you drink?
            </label>
            <div className="col-sm-7">
              <div id="RadioStyle" className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="personalInformation.drink"
                  id="inlineRadio1"
                  value={true}
                  onChange={(e) => {
                    if (drinkCheck !== true) {
                      handleChange(e);
                      setDrinkCheck(!drinkCheck);
                    }
                  }}
                  checked={drinkCheck === true ? true : false}
                />
                <label className="form-check-label ml-3" for="inlineRadio1">
                  Yes
                </label>
              </div>
              <div id="RadioStyle" className="form-check form-check-inline  ml-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="personalInformation.drink"
                  id="inlineRadio2"
                  value={false}
                  onChange={(e) => {
                    if (drinkCheck !== false) {
                      handleChange(e);
                      setDrinkCheck(!drinkCheck);
                    }
                  }}
                  checked={drinkCheck === false ? true : false}
                />
                <label className="form-check-label ml-3" for="inlineRadio2">
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="form-group row align-items-center mt-4">
            <label
              className="col-sm-5 text-left label__style"
              for="nationality"
            >
              Do you smoke?
            </label>
            <div  className="col-sm-7">
              <div id="RadioStyle" className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="personalInformation.smoke"
                  id="inlineRadio3"
                  value={true}
                  onChange={(e) => {
                    if (smokeCheck !== true) {
                      handleChange(e);
                      setSmokeCheck(!smokeCheck);
                    }
                  }}
                  checked={smokeCheck === true ? true : false}
                />
                <label className="form-check-label ml-3" for="inlineRadio3">
                  Yes
                </label>
              </div>
              <div id="RadioStyle" className="form-check form-check-inline  ml-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="personalInformation.smoke"
                  id="inlineRadio4"
                  value={false}
                  onChange={(e) => {
                    if (smokeCheck !== false) {
                      handleChange(e);
                      setSmokeCheck(!smokeCheck);
                    }
                  }}
                  checked={smokeCheck === false ? true : false}
                />
                <label className="form-check-label ml-3" for="inlineRadio4">
                  No
                </label>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="btn submitBtn ml-auto">
          Save
        </button>
      </form>
    </div>
  );
};

export default DriverInfo;
