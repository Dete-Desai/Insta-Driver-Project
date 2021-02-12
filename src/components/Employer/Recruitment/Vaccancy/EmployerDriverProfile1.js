import React, { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import EmployerSideBarFunction from "../../../Layout/MainSideBar/Employer/EmployerSideBarFunction";

const EmployerDriverProfile1 = (props) => {
  const [data, setData] = useState({});
  const history = useHistory();

  const jobAdvert = () => {
    let route = `employer-job-card-ad`;
    history.push(route);
  };

  const specificJobAdvert = () => {
    let route = `employer-manage-posts`;
    history.push(route);
  };

  return (
    <div>
      <div id="content">
        <div className="row">
          <EmployerSideBarFunction />
          <div className="col-md-10">
            <br />
            <main
              role="main"
              className="col-md-9 ml-sm-auto col-lg-12 driver-profile-position"
            >
              <div className="row">
                <div className="col-md-6">
                  <button className="yellowbutton yellowbutton1">
                    <i className="fa fa-arrow-left"></i> &nbsp; Back To Your
                    Adds
                  </button>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-2">
                  <button className="driver-profile-button driver-profile-button1 driver-profile-button-1">
                    Driver Card 659XG
                  </button>
                </div>
                <div className="col-md-2">
                  <button className="driver-profile-button driver-profile-button2 driver-profile-button-2">
                    View Card
                  </button>
                </div>
                <div className="col-md-4" />
                <div className="col-md-3">
                  <button
                    // onClick={onTapShortlist}
                    className="tap-to-shortlist tap-to-shortlist1 tap-to-shortlist-1"
                  >
                    Tap To Shortlist
                  </button>
                </div>
              </div>
              <br />
              <br />
              <div className="row">
                <div className="col-md-12">
                  <section className="searchbg title pb-3">
                    <div className>
                      <div className="container mt-4">
                        <div className="row lineheight30 pt-3">
                          <div className="col-lg-3 mb-3">
                            <img
                              id="preview_image"
                              src="https://instadriver.co/images/uploads/user/thumb/IMG_2781605519486.jpg"
                              className="w-90"
                              alt
                            />
                            <br />
                            <i
                              id="loading"
                              className="fa fa-spinner fa-spin fa-3x fa-fw"
                              style={{
                                position: "absolute",
                                left: "40%",
                                top: "40%",
                                display: "none",
                              }}
                            />
                            <a
                              href="javascript:profile_photo()"
                              className="text-center"
                            >
                              <small>Add passport size photo</small>
                            </a>
                            <br />
                            <strong>Lamech Dete</strong>&nbsp; <br /> 0712787921
                            <br />
                            <span className="text-success lineheight2">
                              <small>Last seen</small> <br />
                              26 Nov, 2020 14:39 PM
                            </span>
                          </div>
                          <div className="col-lg-3 text-center">
                            <img
                              id="preview_photo_1"
                              src="https://instadriver.co/img/profiledefault.svg"
                              className="img-fluid img-profile"
                            />
                            <br />
                            <i
                              id="loading1"
                              className="fa fa-spinner fa-spin fa-3x fa-fw"
                              style={{
                                position: "absolute",
                                left: "40%",
                                top: "40%",
                                display: "none",
                              }}
                            />
                          </div>
                          <div className="col-lg-3 text-center">
                            <img
                              id="preview_photo_2"
                              src="https://instadriver.co/img/profiledefault.svg"
                              className="img-fluid img-profile"
                            />
                            <br />
                            <i
                              id="loading2"
                              className="fa fa-spinner fa-spin fa-3x fa-fw"
                              style={{
                                position: "absolute",
                                left: "40%",
                                top: "40%",
                                display: "none",
                              }}
                            />
                          </div>
                          <div className="col-lg-3 text-center">
                            <img
                              id="preview_photo_3"
                              src="https://instadriver.co/img/profiledefault.svg"
                              className="img-fluid img-profile"
                            />
                            <br />
                            <i
                              id="loading3"
                              className="fa fa-spinner fa-spin fa-3x fa-fw"
                              style={{
                                position: "absolute",
                                left: "40%",
                                top: "40%",
                                display: "none",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="pb-5 pt-5">
                    <form
                      method="POST"
                      id="frmProfile"
                      name="frmProfile"
                      action="https://instadriver.co/driver/profile/update"
                      noValidate="novalidate"
                    >
                      <input
                        type="hidden"
                        name="_token"
                        defaultValue="IpEdhXy5pfCf9cFGtDw3UZtnA2sb5SeW8JTRpBwN"
                      />{" "}
                      <input
                        type="hidden"
                        id="photo_1"
                        name="photo_1"
                        defaultValue
                      />
                      <input
                        type="hidden"
                        id="photo_2"
                        name="photo_2"
                        defaultValue
                      />
                      <input
                        type="hidden"
                        id="photo_3"
                        name="photo_3"
                        defaultValue
                      />
                      <input
                        type="hidden"
                        id="profile_photo"
                        name="profile_photo"
                        defaultValue="IMG_2781605519486.jpg"
                      />
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-12 p-0 mb-3">
                            <h3>Personal Information</h3>
                          </div>
                          <div className="col-lg-12 formoutside pt-4  pb-4">
                            <div className="form-row">
                              <div className="form-group col-md-4">
                                <label htmlFor="name">Full Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="name"
                                  name="name"
                                  defaultValue="Lamech Dete"
                                />
                              </div>
                              <div className="form-group col-md-4">
                                <label htmlFor="contact_no">
                                  Primary Phone
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="contact_no"
                                  name="contact_no"
                                  defaultValue={"0712787921"}
                                />
                              </div>
                              <div className="form-group col-md-4">
                                <label htmlFor="email">Email Address</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="email"
                                  name="email"
                                  defaultValue="lamechtechtest@gmail.com"
                                  readOnly="readonly"
                                />
                              </div>
                              <div className="form-group col-md-4">
                                <label htmlFor="location">
                                  Residential Location
                                </label>
                                <input
                                  type="text"
                                  className="form-control pac-target-input"
                                  id="location"
                                  name="location"
                                  defaultValue="Nairobi, Kenya"
                                  placeholder="Enter a Location"
                                  autoComplete="off"
                                />
                              </div>
                              <div className="form-group col-md-4">
                                <label htmlFor="country">County/City</label>
                                <input
                                  type="text"
                                  className="form-control pac-target-input"
                                  id="country"
                                  name="country"
                                  defaultValue="Nairobi, Kenya"
                                  placeholder="Enter a Location"
                                  autoComplete="off"
                                />
                              </div>
                              <div className="form-group col-md-4">
                                <label htmlFor="language">
                                  Languages Spoken
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="language"
                                  name="language"
                                  defaultValue="English"
                                />
                              </div>
                              <div className="form-group col-md-4">
                                <label htmlFor="nationality">Nationality</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="nationality"
                                  name="nationality"
                                  defaultValue="Kenyan"
                                />
                              </div>
                              <div className="form-group col-md-4">
                                <label htmlFor="year_born">Year Born</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="year_born"
                                  name="year_born"
                                  defaultValue={1995}
                                  maxLength={4}
                                />
                              </div>
                              <div className="form-group col-md-4">
                                <label htmlFor="gender">Gender</label>
                                <div className="select mb-0">
                                  <select
                                    className="form-control"
                                    id="gender"
                                    name="gender"
                                  >
                                    <option value>Select</option>
                                    <option value="Male" selected="selected">
                                      Male
                                    </option>
                                    <option value="Female">Female</option>
                                  </select>
                                  <div className="select__arrow" />
                                </div>
                              </div>
                              <div className="form-group col-md-4">
                                <label htmlFor="marital_status">
                                  Marital Status
                                </label>
                                <div className="select mb-0">
                                  <select
                                    className="form-control"
                                    id="marital_status"
                                    name="marital_status"
                                  >
                                    <option value>Select</option>
                                    <option
                                      value="unmarried"
                                      selected="selected"
                                    >
                                      Unmarried
                                    </option>
                                    <option value="married">Married</option>
                                  </select>
                                  <div className="select__arrow" />
                                </div>
                              </div>
                              <div className="form-group col-md-4">
                                <label htmlFor="is_drink">Do you drink?</label>
                                <div className="row col-lg-12 mt-2">
                                  <label className="control control--radio  col-lg-4">
                                    Yes
                                    <input
                                      type="radio"
                                      name="is_drink"
                                      id="is_drink"
                                      defaultValue="Y"
                                    />
                                    <div className="control__indicator" />
                                  </label>
                                  <label className="control control--radio col-lg-4">
                                    No
                                    <input
                                      type="radio"
                                      name="is_drink"
                                      id="is_drink"
                                      defaultValue="N"
                                      defaultChecked
                                    />
                                    <div className="control__indicator" />
                                  </label>
                                </div>
                              </div>
                              <div className="form-group col-md-4">
                                <label htmlFor="is_smoke">Do you smoke?</label>
                                <div className="row col-lg-12 mt-2">
                                  <label className="control control--radio  col-lg-4">
                                    Yes
                                    <input
                                      type="radio"
                                      name="is_smoke"
                                      id="is_smoke"
                                      defaultValue="Y"
                                    />
                                    <div className="control__indicator" />
                                  </label>
                                  <label className="control control--radio col-lg-4">
                                    No
                                    <input
                                      type="radio"
                                      name="is_smoke"
                                      id="is_smoke"
                                      defaultValue="N"
                                      defaultChecked
                                    />
                                    <div className="control__indicator" />
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12 p-0 mb-3 mt-5">
                            <h3>Qualification</h3>
                          </div>
                          <div className="col-lg-12 formoutside pt-4  pb-4">
                            <div className="form-row">
                              <div className="form-group col-md-4">
                                <label htmlFor="level_of_education">
                                  Level Of Education
                                </label>
                                <div className="select mb-0">
                                  <select
                                    className="form-control"
                                    id="level_of_education"
                                    name="level_of_education"
                                  >
                                    <option value>Select</option>
                                    <option value="Unspecified">
                                      Unspecified
                                    </option>
                                    <option value="Primary Education">
                                      Primary Education
                                    </option>
                                    <option value="Secondary Education">
                                      Secondary Education
                                    </option>
                                    <option
                                      value="Higher Education"
                                      selected="selected"
                                    >
                                      Higher Education
                                    </option>
                                  </select>
                                  <div className="select__arrow" />
                                </div>
                              </div>
                              <div className="form-group col-md-4">
                                <label htmlFor="driving_experience">
                                  Driving Experience (Years)
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="driving_experience"
                                  name="driving_experience"
                                  defaultValue={5}
                                  maxLength={3}
                                />
                              </div>
                              <div className="form-group col-md-4">
                                <label htmlFor="driving_licence_period">
                                  Driving Licence Period (Years)
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="driving_licence_period"
                                  name="driving_licence_period"
                                  defaultValue={2}
                                  maxLength={3}
                                />
                              </div>
                              <div className="form-group col-md-12">
                                <label htmlFor="inputEmail4">
                                  Any Unique Skills
                                </label>
                                <br />
                                <label className="text-left graycolor">
                                  What other skills you have other than driving.
                                  e.g. Electrician, Motorcyclist, Speaks French
                                  et cetera
                                </label>
                              </div>
                              <div className="form-group col-md-4">
                                <label htmlFor="skill1">Skill 1</label>
                                <input
                                  type="text"
                                  className="form-control skillInfo"
                                  id="skill1"
                                  name="skill[]"
                                  defaultValue="computing"
                                />
                              </div>
                              <div className="form-group col-md-4">
                                <label htmlFor="skill2">Skill 2</label>
                                <input
                                  type="text"
                                  className="form-control skillInfo"
                                  id="skill2"
                                  name="skill[]"
                                  defaultValue="training dogs"
                                />
                              </div>
                              <input
                                type="hidden"
                                defaultValue={2}
                                id="skill_cnt"
                                name="skill_cnt"
                              />
                              <span id="divSkill" />
                              <div className="col-lg-12">
                                <a
                                  href="javascript:void(0);"
                                  onclick="get_skills(skill_cnt.value)"
                                  className="text-success"
                                >
                                  <strong>+ Add Skills</strong>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12 p-0 mb-3 mt-5">
                            <h3>Driver Category (ies)</h3>
                          </div>
                          <div className="col-lg-12 formoutside pt-4  pb-4">
                            <div className="form-row">
                              <div className="form-group col-md-12">
                                <label className="text-left graycolor">
                                  Tick the categories you will like to be hired
                                  from. The more categories, the higher the odds
                                  of getting employed. Choose categories you
                                  truly are competent in.
                                </label>
                              </div>
                              <div className="form-group col-md-6">
                                <label className="control control--checkbox">
                                  Personal Driver
                                  <input
                                    type="checkbox"
                                    defaultValue={1}
                                    name="category[]"
                                    className="catInfo"
                                    id="category1"
                                  />
                                  <div className="control__indicator" />
                                </label>
                              </div>
                              <div className="form-group col-md-6">
                                <label className="control control--checkbox">
                                  Public Commuter Driver (e.g. Bus, Ambulance)
                                  <input
                                    type="checkbox"
                                    defaultValue={2}
                                    name="category[]"
                                    className="catInfo"
                                    id="category2"
                                    defaultChecked="checked"
                                  />
                                  <div className="control__indicator" />
                                </label>
                              </div>
                              <div className="form-group col-md-6">
                                <label className="control control--checkbox">
                                  Ride-Sharing Driver e.g Uber, Taxify
                                  <input
                                    type="checkbox"
                                    defaultValue={3}
                                    name="category[]"
                                    className="catInfo"
                                    id="category3"
                                  />
                                  <div className="control__indicator" />
                                </label>
                              </div>
                              <div className="form-group col-md-6">
                                <label className="control control--checkbox">
                                  School Bus Driver
                                  <input
                                    type="checkbox"
                                    defaultValue={4}
                                    name="category[]"
                                    className="catInfo"
                                    id="category4"
                                  />
                                  <div className="control__indicator" />
                                </label>
                              </div>
                              <div className="form-group col-md-6">
                                <label className="control control--checkbox">
                                  Truck Driver
                                  <input
                                    type="checkbox"
                                    defaultValue={5}
                                    name="category[]"
                                    className="catInfo"
                                    id="category5"
                                  />
                                  <div className="control__indicator" />
                                </label>
                              </div>
                              <div className="form-group col-md-6">
                                <label className="control control--checkbox">
                                  Forklift Driver
                                  <input
                                    type="checkbox"
                                    defaultValue={6}
                                    name="category[]"
                                    className="catInfo"
                                    id="category6"
                                  />
                                  <div className="control__indicator" />
                                </label>
                              </div>
                              <div className="form-group col-md-6">
                                <label className="control control--checkbox">
                                  On-Demand Driver
                                  <input
                                    type="checkbox"
                                    defaultValue={7}
                                    name="category[]"
                                    className="catInfo"
                                    id="category7"
                                  />
                                  <div className="control__indicator" />
                                </label>
                              </div>
                            </div>
                          </div>
                          <div id="DivPlatform" style={{ display: "none" }}>
                            <div className="col-lg-12 p-0 mb-3 mt-5">
                              <h3>Platforms Am On In Ride-hailing</h3>
                            </div>
                            <div className="col-lg-12 formoutside pt-4  pb-4">
                              <div className="form-row">
                                <div className="form-group col-md-12">
                                  <label className="graycolor">
                                    For ride-hailing category, tick the
                                    platforms you are in.
                                  </label>
                                </div>
                                <div className="form-group col-md-3">
                                  <label className="control control--checkbox">
                                    Uber
                                    <input
                                      type="checkbox"
                                      defaultValue={1}
                                      className="platformInfo"
                                      name="platform[]"
                                      id="platform1"
                                    />
                                    <div className="control__indicator" />
                                  </label>
                                </div>
                                <div className="form-group col-md-3">
                                  <label className="control control--checkbox">
                                    Little Cab
                                    <input
                                      type="checkbox"
                                      defaultValue={2}
                                      className="platformInfo"
                                      name="platform[]"
                                      id="platform2"
                                    />
                                    <div className="control__indicator" />
                                  </label>
                                </div>
                                <div className="form-group col-md-3">
                                  <label className="control control--checkbox">
                                    Lyft
                                    <input
                                      type="checkbox"
                                      defaultValue={3}
                                      className="platformInfo"
                                      name="platform[]"
                                      id="platform3"
                                    />
                                    <div className="control__indicator" />
                                  </label>
                                </div>
                                <div className="form-group col-md-3">
                                  <label className="control control--checkbox">
                                    Taxify
                                    <input
                                      type="checkbox"
                                      defaultValue={4}
                                      className="platformInfo"
                                      name="platform[]"
                                      id="platform4"
                                    />
                                    <div className="control__indicator" />
                                  </label>
                                </div>
                                <div className="form-group col-md-3">
                                  <label className="control control--checkbox">
                                    Swvl
                                    <input
                                      type="checkbox"
                                      defaultValue={5}
                                      className="platformInfo"
                                      name="platform[]"
                                      id="platform5"
                                    />
                                    <div className="control__indicator" />
                                  </label>
                                </div>
                                <div className="form-group col-md-3">
                                  <label className="control control--checkbox">
                                    Gojek
                                    <input
                                      type="checkbox"
                                      defaultValue={6}
                                      className="platformInfo"
                                      name="platform[]"
                                      id="platform6"
                                    />
                                    <div className="control__indicator" />
                                  </label>
                                </div>
                                <div className="form-group col-md-3">
                                  <label className="control control--checkbox">
                                    Didi
                                    <input
                                      type="checkbox"
                                      defaultValue={8}
                                      className="platformInfo"
                                      name="platform[]"
                                      id="platform8"
                                    />
                                    <div className="control__indicator" />
                                  </label>
                                </div>
                                <div className="form-group col-md-3">
                                  <label className="control control--checkbox">
                                    Via
                                    <input
                                      type="checkbox"
                                      defaultValue={9}
                                      className="platformInfo"
                                      name="platform[]"
                                      id="platform9"
                                    />
                                    <div className="control__indicator" />
                                  </label>
                                </div>
                                <div className="form-group col-md-3">
                                  <label className="control control--checkbox">
                                    Oga
                                    <input
                                      type="checkbox"
                                      defaultValue={10}
                                      className="platformInfo"
                                      name="platform[]"
                                      id="platform10"
                                    />
                                    <div className="control__indicator" />
                                  </label>
                                </div>
                                <div className="form-group col-md-3">
                                  <label className="control control--checkbox">
                                    Gett
                                    <input
                                      type="checkbox"
                                      defaultValue={11}
                                      className="platformInfo"
                                      name="platform[]"
                                      id="platform11"
                                    />
                                    <div className="control__indicator" />
                                  </label>
                                </div>
                                <div className="form-group col-md-3">
                                  <label className="control control--checkbox">
                                    Curb
                                    <input
                                      type="checkbox"
                                      defaultValue={12}
                                      className="platformInfo"
                                      name="platform[]"
                                      id="platform12"
                                    />
                                    <div className="control__indicator" />
                                  </label>
                                </div>
                                <div className="form-group col-md-3">
                                  <label className="control control--checkbox">
                                    Grab
                                    <input
                                      type="checkbox"
                                      defaultValue={13}
                                      className="platformInfo"
                                      name="platform[]"
                                      id="platform13"
                                    />
                                    <div className="control__indicator" />
                                  </label>
                                </div>
                                <div className="form-group col-md-3">
                                  <label className="control control--checkbox">
                                    Careem
                                    <input
                                      type="checkbox"
                                      defaultValue={14}
                                      className="platformInfo"
                                      name="platform[]"
                                      id="platform14"
                                    />
                                    <div className="control__indicator" />
                                  </label>
                                </div>
                                <div className="form-group col-md-3">
                                  <label className="control control--checkbox">
                                    Ola
                                    <input
                                      type="checkbox"
                                      defaultValue={15}
                                      className="platformInfo"
                                      name="platform[]"
                                      id="platform15"
                                    />
                                    <div className="control__indicator" />
                                  </label>
                                </div>
                                <div className="form-group col-md-3">
                                  <label className="control control--checkbox">
                                    Yandex Taxi
                                    <input
                                      type="checkbox"
                                      defaultValue={16}
                                      className="platformInfo"
                                      name="platform[]"
                                      id="platform16"
                                    />
                                    <div className="control__indicator" />
                                  </label>
                                </div>
                                <div className="form-group col-md-3">
                                  <label className="control control--checkbox">
                                    Zimride
                                    <input
                                      type="checkbox"
                                      defaultValue={17}
                                      className="platformInfo"
                                      name="platform[]"
                                      id="platform17"
                                    />
                                    <div className="control__indicator" />
                                  </label>
                                </div>
                                <div className="form-group col-md-3">
                                  <label className="control control--checkbox">
                                    Nopia
                                    <input
                                      type="checkbox"
                                      defaultValue={18}
                                      className="platformInfo"
                                      name="platform[]"
                                      id="platform18"
                                    />
                                    <div className="control__indicator" />
                                  </label>
                                </div>
                                <div className="clearfix" />
                                <div className="form-group col-md-12">
                                  <label
                                    htmlFor="other_platform"
                                    className="graycolor"
                                  >
                                    Others, Specify. Use comma to separate
                                    platforms
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="other_platform"
                                    name="other_platform"
                                    defaultValue
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="DivEmpHistory" style={{ display: "none" }}>
                            <div className="col-lg-12 p-0 mb-3 mt-5">
                              <h3>
                                Your Previous Employment History For
                                Ride-Sharing Taxis
                              </h3>
                            </div>
                            <div className="col-lg-12 formoutside pt-4  pb-4">
                              <div className="form-row">
                                <label className="col-lg-12 text-left mb-4 graycolor">
                                  Partner is a car-owner, cars or management
                                  company for ride-hailing cars
                                </label>
                                <div className="col-md-12 row">
                                  <div className="form-group col-md-6">
                                    <label htmlFor="how_many_partners_have_you_worked_for">
                                      How many partners have you worked for?
                                    </label>
                                  </div>
                                  <div className="form-group col-md-6">
                                    <div className="select mb-0">
                                      <select
                                        id="how_many_partners_have_you_worked_for"
                                        name="how_many_partners_have_you_worked_for"
                                      >
                                        <option value>Select</option>
                                        <option value="No Employment History">
                                          No Employment History
                                        </option>
                                        <option value="1 Partner">
                                          1 Partner
                                        </option>
                                        <option value="2 Partners">
                                          2 Partners
                                        </option>
                                        <option value="3 Partners">
                                          3 Partners
                                        </option>
                                        <option value="4 Partners">
                                          4 Partners
                                        </option>
                                        <option value="5 Partners">
                                          5 Partners
                                        </option>
                                        <option value="6 Partners">
                                          6 Partners
                                        </option>
                                        <option value="7 Partners">
                                          7 Partners
                                        </option>
                                        <option value="8 Partners">
                                          8 Partners
                                        </option>
                                        <option value="9 Partners">
                                          9 Partners
                                        </option>
                                        <option value="10 Partners">
                                          10 Partners
                                        </option>
                                        <option value="11 Partners">
                                          11 Partners
                                        </option>
                                        <option value="12 Partners">
                                          12 Partners
                                        </option>
                                        <option value="13 Partners">
                                          13 Partners
                                        </option>
                                        <option value="14 Partners">
                                          14 Partners
                                        </option>
                                        <option value="15 Partners">
                                          15 Partners
                                        </option>
                                        <option value="16 Partners">
                                          16 Partners
                                        </option>
                                        <option value="17 Partners">
                                          17 Partners
                                        </option>
                                        <option value="18 Partners">
                                          18 Partners
                                        </option>
                                        <option value="19 Partners">
                                          19 Partners
                                        </option>
                                        <option value="20 Partners">
                                          20 Partners
                                        </option>
                                        <option value="More than 20 partners">
                                          More than 20 partners
                                        </option>
                                      </select>
                                      <div className="select__arrow" />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12 row" id="Emp1">
                                  <div className="form-group col-md-6">
                                    <label htmlFor="how_long_did_you_work_with_the_last_partner">
                                      How long did you work with the last
                                      partner?
                                    </label>
                                  </div>
                                  <div className="form-group col-md-6">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="how_long_did_you_work_with_the_last_partner"
                                      name="how_long_did_you_work_with_the_last_partner"
                                      defaultValue
                                    />
                                  </div>
                                </div>
                                <div className="col-md-12 row" id="Emp2">
                                  <div className="form-group col-md-6">
                                    <label htmlFor="why_did_you_leave_your_last_partner">
                                      Why did you leave your last partner
                                    </label>
                                  </div>
                                  <div className="form-group col-md-6">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="why_did_you_leave_your_last_partner"
                                      name="why_did_you_leave_your_last_partner"
                                      defaultValue
                                    />
                                  </div>
                                </div>
                                <div className="col-md-12 row" id="Emp3">
                                  <div className="form-group col-md-6">
                                    <label htmlFor="how_long_did_you_work_with_the_2nd_last_partner">
                                      How long did you work with the 2nd last
                                      partner?
                                    </label>
                                  </div>
                                  <div className="form-group col-md-6">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="how_long_did_you_work_with_the_2nd_last_partner"
                                      name="how_long_did_you_work_with_the_2nd_last_partner"
                                      defaultValue
                                    />
                                  </div>
                                </div>
                                <div className="col-md-12 row" id="Emp4">
                                  <div className="form-group col-md-6">
                                    <label htmlFor="why_did_you_leave_your_2nd_last_partner">
                                      Why did you leave your 2nd last partner?
                                    </label>
                                  </div>
                                  <div className="form-group col-md-6">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="why_did_you_leave_your_2nd_last_partner"
                                      name="why_did_you_leave_your_2nd_last_partner"
                                      defaultValue
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12 p-0 mb-3 mt-5">
                            <h3>My Uploads</h3>
                          </div>
                          <div className="col-lg-12 formoutside pt-4  pb-4">
                            <label className="graycolor">
                              Upload the following documents or their
                              equivalents. You will have an option to make them
                              public or private.
                            </label>
                            <div className="form-row mt-3">
                              <div className="form-group col-md-12">
                                <div>
                                  <a
                                    href="javascript:void(0);"
                                    onclick="driving_license();"
                                  >
                                    <img
                                      className="img-up"
                                      src="https://instadriver.co/img/upload-icon.png"
                                    />
                                    &nbsp;Click to upload Driving License
                                  </a>
                                  <span id="dlSpn">
                                    <img src="https://instadriver.co/img/tick.svg" />
                                  </span>
                                </div>
                                <input
                                  type="hidden"
                                  id="driving_license"
                                  name="driving_license"
                                  defaultValue="DL_2781605519749.jpg"
                                />
                              </div>
                              <div className="form-group col-md-12">
                                <div>
                                  <a
                                    href="javascript:void(0);"
                                    onclick="public_service_vehicle_license();"
                                  >
                                    <img
                                      className="img-up"
                                      src="https://instadriver.co/img/upload-icon.png"
                                    />
                                    &nbsp;Click to upload Public Service Vehicle
                                    (PSV) License
                                  </a>
                                  <span id="psvSpn" />
                                </div>
                                <input
                                  type="hidden"
                                  id="public_service_vehicle_license"
                                  name="public_service_vehicle_license"
                                  defaultValue
                                />
                              </div>
                              <div className="form-group col-md-12">
                                <div>
                                  <a
                                    href="javascript:void(0);"
                                    onclick="certificate_of_good_conduct();"
                                  >
                                    <img
                                      className="img-up"
                                      src="https://instadriver.co/img/upload-icon.png"
                                    />
                                    &nbsp;Click to upload Certificate of Good
                                    Conduct
                                  </a>
                                  <span id="codcSpn" />
                                </div>
                                <input
                                  type="hidden"
                                  id="certificate_of_good_conduct"
                                  name="certificate_of_good_conduct"
                                  defaultValue
                                />
                              </div>
                              <div className="form-group col-md-12">
                                <div className="row col-lg-12 mt-3">
                                  <label htmlFor="is_my_upload_public">
                                    Make My Uploads Public : &nbsp;
                                  </label>
                                  <label className="switch">
                                    <input
                                      type="checkbox"
                                      className="primary"
                                      defaultValue="Y"
                                      name="is_my_upload_public"
                                      id="is_my_upload_public"
                                    />
                                    <span className="slider round" />
                                  </label>
                                </div>
                                <div className="graycolor">
                                  By default, your uploads will be private
                                  meaning no one can view them on your profile
                                  page. It will only show "Uploads Private
                                  Contact driver for access". When you turn the
                                  Upload public, employers who search your
                                  profile will we able to view them. Turn your
                                  uploads public if you have no issues making
                                  them public. Some employers would be
                                  interested to see your driving documents.
                                </div>{" "}
                              </div>
                            </div>
                          </div>
                          <div id="DivTarget" style={{ display: "none" }}>
                            <div className="col-lg-12 p-0 mb-3 mt-5">
                              <h3>
                                State The Daily Target Payout For Ride-hailing
                                Taxis
                              </h3>
                            </div>
                            <div className="col-lg-12 formoutside pt-4  pb-4">
                              <label className="text-left graycolor">
                                The Daily Target Payout is the daily amount a
                                driver submits to the employer/partner. State
                                the min and max amount you will be fine with.
                              </label>
                              <div className="form-row mt-3">
                                <div className="form-group col-md-12">
                                  <label htmlFor="daily_target_payout_currency">
                                    Select currency used in your country
                                  </label>
                                  <div className="select mb-0">
                                    <select
                                      className="form-control"
                                      id="daily_target_payout_currency"
                                      name="daily_target_payout_currency"
                                    >
                                      <option value>Select Currency</option>
                                      <option value="AFN">
                                        Afghan Afghani
                                      </option>
                                      <option value="ALL">Albanian Lek</option>
                                      <option value="DZD">
                                        Algerian Dinar
                                      </option>
                                      <option value="EUR">Andorra Euro</option>
                                      <option value="AOA">
                                        Angolan Kwanza
                                      </option>
                                      <option value="XCD">
                                        East Caribbean Dolla
                                      </option>
                                      <option value="XCD">
                                        East Caribbean Dolla
                                      </option>
                                      <option value="ARS">
                                        Argentine Peso
                                      </option>
                                      <option value="AMD">Armenian Dram</option>
                                      <option value="AWG">Aruban Florin</option>
                                      <option value="AUD">
                                        Australian Dollar
                                      </option>
                                      <option value="EUR">Austria Euro</option>
                                      <option value="AZN">
                                        Azerbaijani Manat
                                      </option>
                                      <option value="BHD">
                                        Bahraini Dinar
                                      </option>
                                      <option value="BDT">
                                        Bangladeshi Taka
                                      </option>
                                      <option value="BBD">
                                        Barbadian Dollar
                                      </option>
                                      <option value="BYR">
                                        Belarusian Ruble
                                      </option>
                                      <option value="EUR">Belgium Euro</option>
                                      <option value="BZD">Belize Dollar</option>
                                      <option value="XOF">
                                        West African CFA Fra
                                      </option>
                                      <option value="BMD">
                                        Bermudian Dollar
                                      </option>
                                      <option value="BTN">
                                        Bhutanese Ngultrum
                                      </option>
                                      <option value="BWP">Botswana Pula</option>
                                      <option value="BRL">
                                        Brazilian Real
                                      </option>
                                      <option value="BGN">Bulgarian Lev</option>
                                      <option value="XOF">
                                        West African CFA Fra
                                      </option>
                                      <option value="BIF">
                                        Burundian Franc
                                      </option>
                                      <option value="KHR">
                                        Cambodian Riel
                                      </option>
                                      <option value="XAF">
                                        Central African CFA{" "}
                                      </option>
                                      <option value="CAD">
                                        Canadian Dollar
                                      </option>
                                      <option value="CVE">
                                        Cape Verdean Escudo
                                      </option>
                                      <option value="KYD">
                                        Cayman Islands Dolla
                                      </option>
                                      <option value="XAF">
                                        Central African CFA{" "}
                                      </option>
                                      <option value="CLP">Chilean Peso</option>
                                      <option value="CNY">Chinese Yuan</option>
                                      <option value="COP">
                                        Colombian Peso
                                      </option>
                                      <option value="KMF">
                                        Comorian Franc
                                      </option>
                                      <option value="NZD">
                                        New Zealand Dollar
                                      </option>
                                      <option value="CRC">
                                        Costa Rican Colón
                                      </option>
                                      <option value="XOF">
                                        West African CFA Fra
                                      </option>
                                      <option value="HRK">Croatian Kuna</option>
                                      <option value="CUC">
                                        Cuban Convertible Pe
                                      </option>
                                      <option value="EUR">Cyprus Euro</option>
                                      <option value="CZK">Czech Koruna</option>
                                      <option value="DKK">Danish Krone</option>
                                      <option value="DJF">
                                        Djiboutian Franc
                                      </option>
                                      <option value="XCD">
                                        East Caribbean Dolla
                                      </option>
                                      <option value="DOP">
                                        Dominican Peso
                                      </option>
                                      <option value="USD">
                                        United States Dollar
                                      </option>
                                      <option value="EGP">
                                        Egyptian Pound
                                      </option>
                                      <option value="USD">
                                        United States Dollar
                                      </option>
                                      <option value="XAF">
                                        Central African CFA{" "}
                                      </option>
                                      <option value="ERN">
                                        Eritrean Nakfa
                                      </option>
                                      <option value="EUR">Estonia Euro</option>
                                      <option value="ETB">
                                        Ethiopian Birr
                                      </option>
                                      <option value="DKK">Danish Krone</option>
                                      <option value="FJD">Fijian Dollar</option>
                                      <option value="EUR">Finland Euro</option>
                                      <option value="EUR">France Euro</option>
                                      <option value="XPF">CFP Franc</option>
                                      <option value="XAF">
                                        Central African CFA{" "}
                                      </option>
                                      <option value="GEL">Georgian Lari</option>
                                      <option value="EUR">Germany Euro</option>
                                      <option value="GHS">Ghana Cedi</option>
                                      <option value="GIP">
                                        Gibraltar Pound
                                      </option>
                                      <option value="EUR">Greece Euro</option>
                                      <option value="XCD">
                                        East Caribbean Dolla
                                      </option>
                                      <option value="GTQ">
                                        Guatemalan Quetzal
                                      </option>
                                      <option value="GBP">British Pound</option>
                                      <option value="GNF">Guinean Franc</option>
                                      <option value="XOF">
                                        West African CFA Fra
                                      </option>
                                      <option value="GYD">
                                        Guyanese Dollar
                                      </option>
                                      <option value="HTG">
                                        Haitian Gourde
                                      </option>
                                      <option value="HNL">
                                        Honduran Lempira
                                      </option>
                                      <option value="HKD">
                                        Hong Kong Dollar
                                      </option>
                                      <option value="HUF">
                                        Hungarian Forint
                                      </option>
                                      <option value="ISK">
                                        Icelandic Króna
                                      </option>
                                      <option value="INR">Indian Rupee</option>
                                      <option value="IDR">
                                        Indonesian Rupiah
                                      </option>
                                      <option value="IQD">Iraqi Dinar</option>
                                      <option value="EUR">Ireland Euro</option>
                                      <option value="GBP">British Pound</option>
                                      <option value="ILS">
                                        Israeli New Shekel
                                      </option>
                                      <option value="EUR">Italy Euro</option>
                                      <option value="JMD">
                                        Jamaican Dollar
                                      </option>
                                      <option value="JPY">Japanese Yen</option>
                                      <option value="GBP">British Pound</option>
                                      <option value="JOD">
                                        Jordanian Dinar
                                      </option>
                                      <option value="KZT">
                                        Kazakhstani Tenge
                                      </option>
                                      <option value="KES">
                                        Kenyan Shilling
                                      </option>
                                      <option value="AUD">
                                        Australian Dollar
                                      </option>
                                      <option value="KWD">Kuwaiti Dinar</option>
                                      <option value="KGS">
                                        Kyrgyzstani Som
                                      </option>
                                      <option value="LAK">Lao Kip</option>
                                      <option value="EUR">Latvia Euro</option>
                                      <option value="LBP">
                                        Lebanese Pound
                                      </option>
                                      <option value="LSL">Lesotho Loti</option>
                                      <option value="LRD">
                                        Liberian Dollar
                                      </option>
                                      <option value="CHF">Swiss Franc</option>
                                      <option value="EUR">
                                        Lithuania Euro
                                      </option>
                                      <option value="EUR">
                                        Luxembourg Euro
                                      </option>
                                      <option value="MGA">
                                        Malagasy Ariary
                                      </option>
                                      <option value="MWK">
                                        Malawian Kwacha
                                      </option>
                                      <option value="MYR">
                                        Malaysian Ringgit
                                      </option>
                                      <option value="MVR">
                                        Maldivian Rufiyaa
                                      </option>
                                      <option value="XOF">
                                        West African CFA Fra
                                      </option>
                                      <option value="EUR">Malta Euro</option>
                                      <option value="USD">
                                        United States Dollar
                                      </option>
                                      <option value="MRO">
                                        Mauritanian Ouguiya
                                      </option>
                                      <option value="MUR">
                                        Mauritian Rupee
                                      </option>
                                      <option value="MXN">Mexican Peso</option>
                                      <option value="MDL">Moldovan Leu</option>
                                      <option value="EUR">Monaco Euro</option>
                                      <option value="MNT">
                                        Mongolian Tögrög
                                      </option>
                                      <option value="EUR">
                                        Montenegro Euro
                                      </option>
                                      <option value="XCD">
                                        East Caribbean Dolla
                                      </option>
                                      <option value="MAD">
                                        Moroccan Dirham
                                      </option>
                                      <option value="MZN">
                                        Mozambican Metical
                                      </option>
                                      <option value="MMK">Burmese Kyat</option>
                                      <option value="NAD">
                                        Namibian Dollar
                                      </option>
                                      <option value="AUD">
                                        Australian Dollar
                                      </option>
                                      <option value="NPR">
                                        Nepalese Rupee
                                      </option>
                                      <option value="EUR">
                                        Netherlands Euro
                                      </option>
                                      <option value="XPF">CFP Franc</option>
                                      <option value="NZD">
                                        New Zealand Dollar
                                      </option>
                                      <option value="NIO">
                                        Nicaraguan Córdoba
                                      </option>
                                      <option value="XOF">
                                        West African CFA Fra
                                      </option>
                                      <option value="NGN">
                                        Nigerian Naira
                                      </option>
                                      <option value="NZD">
                                        New Zealand Dollar
                                      </option>
                                      <option value="NOK">
                                        Norwegian Krone
                                      </option>
                                      <option value="OMR">Omani Rial</option>
                                      <option value="PKR">
                                        Pakistani Rupee
                                      </option>
                                      <option value="PAB">
                                        Panamanian Balboa
                                      </option>
                                      <option value="PGK">
                                        Papua New Guinean Ki
                                      </option>
                                      <option value="PYG">
                                        Paraguayan Guaraní
                                      </option>
                                      <option value="PEN">
                                        Peruvian Nuevo Sol
                                      </option>
                                      <option value="PHP">
                                        Philippine Peso
                                      </option>
                                      <option value="PLN">Polish Z?oty</option>
                                      <option value="EUR">Portugal Euro</option>
                                      <option value="QAR">Qatari Riyal</option>
                                      <option value="RON">Romanian Leu</option>
                                      <option value="RUB">Russian Ruble</option>
                                      <option value="RWF">Rwandan Franc</option>
                                      <option value="XCD">
                                        East Caribbean Dolla
                                      </option>
                                      <option value="WST">Samoan</option>
                                      <option value="EUR">
                                        San Marino Euro
                                      </option>
                                      <option value="SAR">Saudi Riyal</option>
                                      <option value="XOF">
                                        West African CFA Fra
                                      </option>
                                      <option value="RSD">Serbian Dinar</option>
                                      <option value="SCR">
                                        Seychellois Rupee
                                      </option>
                                      <option value="SLL">
                                        Sierra Leonean Leone
                                      </option>
                                      <option value="BND">Brunei Dollar</option>
                                      <option value="EUR">Slovakia Euro</option>
                                      <option value="EUR">Slovenia Euro</option>
                                      <option value="SBD">
                                        Solomon Islands Doll
                                      </option>
                                      <option value="SOS">
                                        Somali Shilling
                                      </option>
                                      <option value="ZAR">
                                        South African Rand
                                      </option>
                                      <option value="EUR">Spain Euro</option>
                                      <option value="LKR">
                                        Sri Lankan Rupee
                                      </option>
                                      <option value="SDG">
                                        Sudanese Pound
                                      </option>
                                      <option value="SRD">
                                        Surinamese Dollar
                                      </option>
                                      <option value="SZL">
                                        Swazi Lilangeni
                                      </option>
                                      <option value="SEK">Swedish Krona</option>
                                      <option value="CHF">Swiss Franc</option>
                                      <option value="TWD">
                                        New Taiwan Dollar
                                      </option>
                                      <option value="TJS">
                                        Tajikistani Somoni
                                      </option>
                                      <option value="THB">Thai Baht</option>
                                      <option value="XOF">
                                        West African CFA Fra
                                      </option>
                                      <option value="TOP">
                                        Tongan Pa?anga
                                      </option>
                                      <option value="TTD">
                                        Trinidad And Tobago{" "}
                                      </option>
                                      <option value="TND">
                                        Tunisian Dinar
                                      </option>
                                      <option value="TRY">Turkish Lira</option>
                                      <option value="TMT">
                                        Turkmenistan Manat
                                      </option>
                                      <option value="AUD">
                                        Australian Dollar
                                      </option>
                                      <option value="UGX">
                                        Ugandan Shilling
                                      </option>
                                      <option value="UAH">
                                        Ukrainian Hryvnia
                                      </option>
                                      <option value="AED">
                                        United Arab Emirates
                                      </option>
                                      <option value="GBP">British Pound</option>
                                      <option value="USD">
                                        United States Dollar
                                      </option>
                                      <option value="UYU">
                                        Uruguayan Peso
                                      </option>
                                      <option value="UZS">
                                        Uzbekistani Som
                                      </option>
                                      <option value="VUV">Vanuatu Vatu</option>
                                      <option value="VND">
                                        Vietnamese ??ng
                                      </option>
                                      <option value="XPF">CFP Franc</option>
                                      <option value="YER">Yemeni Rial</option>
                                      <option value="ZMW">
                                        Zambian Kwacha
                                      </option>
                                      <option value="BWP">Botswana Pula</option>
                                    </select>
                                    <div className="select__arrow" />
                                  </div>
                                </div>
                                <div className="form-group col-md-6">
                                  <label htmlFor="minimum_daily_target_payout">
                                    Minimum
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="minimum_daily_target_payout"
                                    name="minimum_daily_target_payout"
                                    defaultValue
                                  />
                                </div>
                                <div className="form-group col-md-6">
                                  <label htmlFor="maximum_daily_target_payout">
                                    Maximum
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="maximum_daily_target_payout"
                                    name="maximum_daily_target_payout"
                                    defaultValue
                                  />
                                </div>
                                <div className="form-group col-md-12">
                                  <label htmlFor="preferences_or_special_request">
                                    Your Preferences or Special Requests in
                                    ride-hailing sector
                                  </label>
                                  <label className="text-left graycolor">
                                    Tell us anything about your preferences,
                                    tastes etc. Something like type of car you
                                    prefer, work-period or day-offs, or anything
                                    that concerns you. To increase chances of
                                    getting hired, don't give narrow choices,
                                    strict or unreasonable requests. Just try to
                                    be general and easy-going.
                                  </label>
                                  <textarea
                                    id="preferences_or_special_request"
                                    name="preferences_or_special_request"
                                    rows={3}
                                    cols={50}
                                    className="form-control"
                                    placeholder="Maximum. 300 Characters"
                                    maxLength={301}
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="DivDemandDriver" style={{ display: "none" }}>
                            <div className="col-lg-12 p-0 mb-3 mt-5">
                              <h3>
                                State The Hourly Rate For On-Demand Driver
                              </h3>
                            </div>
                            <div className="col-lg-12 formoutside pt-4 pb-4 text-left">
                              <label className="text-left graycolor">
                                Dont be greedy. If you indicate a high hourly
                                rate, you may reduce the odds of getting hired.
                                It would be wonderful if you know the standard
                                salary for your profession, and use that one to
                                set hourly rate range
                              </label>
                              <div className="form-row mt-3">
                                <div className="form-group col-md-12">
                                  <label htmlFor="hourly_rate_currency">
                                    Select currency used in your country
                                  </label>
                                  <div className="select mb-0">
                                    <select
                                      className="form-control"
                                      id="hourly_rate_currency"
                                      name="hourly_rate_currency"
                                    >
                                      <option value>Select Currency</option>
                                      <option value="AFN">
                                        Afghan Afghani
                                      </option>
                                      <option value="ALL">Albanian Lek</option>
                                      <option value="DZD">
                                        Algerian Dinar
                                      </option>
                                      <option value="EUR">Andorra Euro</option>
                                      <option value="AOA">
                                        Angolan Kwanza
                                      </option>
                                      <option value="XCD">
                                        East Caribbean Dolla
                                      </option>
                                      <option value="XCD">
                                        East Caribbean Dolla
                                      </option>
                                      <option value="ARS">
                                        Argentine Peso
                                      </option>
                                      <option value="AMD">Armenian Dram</option>
                                      <option value="AWG">Aruban Florin</option>
                                      <option value="AUD">
                                        Australian Dollar
                                      </option>
                                      <option value="EUR">Austria Euro</option>
                                      <option value="AZN">
                                        Azerbaijani Manat
                                      </option>
                                      <option value="BHD">
                                        Bahraini Dinar
                                      </option>
                                      <option value="BDT">
                                        Bangladeshi Taka
                                      </option>
                                      <option value="BBD">
                                        Barbadian Dollar
                                      </option>
                                      <option value="BYR">
                                        Belarusian Ruble
                                      </option>
                                      <option value="EUR">Belgium Euro</option>
                                      <option value="BZD">Belize Dollar</option>
                                      <option value="XOF">
                                        West African CFA Fra
                                      </option>
                                      <option value="BMD">
                                        Bermudian Dollar
                                      </option>
                                      <option value="BTN">
                                        Bhutanese Ngultrum
                                      </option>
                                      <option value="BWP">Botswana Pula</option>
                                      <option value="BRL">
                                        Brazilian Real
                                      </option>
                                      <option value="BGN">Bulgarian Lev</option>
                                      <option value="XOF">
                                        West African CFA Fra
                                      </option>
                                      <option value="BIF">
                                        Burundian Franc
                                      </option>
                                      <option value="KHR">
                                        Cambodian Riel
                                      </option>
                                      <option value="XAF">
                                        Central African CFA{" "}
                                      </option>
                                      <option value="CAD">
                                        Canadian Dollar
                                      </option>
                                      <option value="CVE">
                                        Cape Verdean Escudo
                                      </option>
                                      <option value="KYD">
                                        Cayman Islands Dolla
                                      </option>
                                      <option value="XAF">
                                        Central African CFA{" "}
                                      </option>
                                      <option value="CLP">Chilean Peso</option>
                                      <option value="CNY">Chinese Yuan</option>
                                      <option value="COP">
                                        Colombian Peso
                                      </option>
                                      <option value="KMF">
                                        Comorian Franc
                                      </option>
                                      <option value="NZD">
                                        New Zealand Dollar
                                      </option>
                                      <option value="CRC">
                                        Costa Rican Colón
                                      </option>
                                      <option value="XOF">
                                        West African CFA Fra
                                      </option>
                                      <option value="HRK">Croatian Kuna</option>
                                      <option value="CUC">
                                        Cuban Convertible Pe
                                      </option>
                                      <option value="EUR">Cyprus Euro</option>
                                      <option value="CZK">Czech Koruna</option>
                                      <option value="DKK">Danish Krone</option>
                                      <option value="DJF">
                                        Djiboutian Franc
                                      </option>
                                      <option value="XCD">
                                        East Caribbean Dolla
                                      </option>
                                      <option value="DOP">
                                        Dominican Peso
                                      </option>
                                      <option value="USD">
                                        United States Dollar
                                      </option>
                                      <option value="EGP">
                                        Egyptian Pound
                                      </option>
                                      <option value="USD">
                                        United States Dollar
                                      </option>
                                      <option value="XAF">
                                        Central African CFA{" "}
                                      </option>
                                      <option value="ERN">
                                        Eritrean Nakfa
                                      </option>
                                      <option value="EUR">Estonia Euro</option>
                                      <option value="ETB">
                                        Ethiopian Birr
                                      </option>
                                      <option value="DKK">Danish Krone</option>
                                      <option value="FJD">Fijian Dollar</option>
                                      <option value="EUR">Finland Euro</option>
                                      <option value="EUR">France Euro</option>
                                      <option value="XPF">CFP Franc</option>
                                      <option value="XAF">
                                        Central African CFA{" "}
                                      </option>
                                      <option value="GEL">Georgian Lari</option>
                                      <option value="EUR">Germany Euro</option>
                                      <option value="GHS">Ghana Cedi</option>
                                      <option value="GIP">
                                        Gibraltar Pound
                                      </option>
                                      <option value="EUR">Greece Euro</option>
                                      <option value="XCD">
                                        East Caribbean Dolla
                                      </option>
                                      <option value="GTQ">
                                        Guatemalan Quetzal
                                      </option>
                                      <option value="GBP">British Pound</option>
                                      <option value="GNF">Guinean Franc</option>
                                      <option value="XOF">
                                        West African CFA Fra
                                      </option>
                                      <option value="GYD">
                                        Guyanese Dollar
                                      </option>
                                      <option value="HTG">
                                        Haitian Gourde
                                      </option>
                                      <option value="HNL">
                                        Honduran Lempira
                                      </option>
                                      <option value="HKD">
                                        Hong Kong Dollar
                                      </option>
                                      <option value="HUF">
                                        Hungarian Forint
                                      </option>
                                      <option value="ISK">
                                        Icelandic Króna
                                      </option>
                                      <option value="INR">Indian Rupee</option>
                                      <option value="IDR">
                                        Indonesian Rupiah
                                      </option>
                                      <option value="IQD">Iraqi Dinar</option>
                                      <option value="EUR">Ireland Euro</option>
                                      <option value="GBP">British Pound</option>
                                      <option value="ILS">
                                        Israeli New Shekel
                                      </option>
                                      <option value="EUR">Italy Euro</option>
                                      <option value="JMD">
                                        Jamaican Dollar
                                      </option>
                                      <option value="JPY">Japanese Yen</option>
                                      <option value="GBP">British Pound</option>
                                      <option value="JOD">
                                        Jordanian Dinar
                                      </option>
                                      <option value="KZT">
                                        Kazakhstani Tenge
                                      </option>
                                      <option value="KES">
                                        Kenyan Shilling
                                      </option>
                                      <option value="AUD">
                                        Australian Dollar
                                      </option>
                                      <option value="KWD">Kuwaiti Dinar</option>
                                      <option value="KGS">
                                        Kyrgyzstani Som
                                      </option>
                                      <option value="LAK">Lao Kip</option>
                                      <option value="EUR">Latvia Euro</option>
                                      <option value="LBP">
                                        Lebanese Pound
                                      </option>
                                      <option value="LSL">Lesotho Loti</option>
                                      <option value="LRD">
                                        Liberian Dollar
                                      </option>
                                      <option value="CHF">Swiss Franc</option>
                                      <option value="EUR">
                                        Lithuania Euro
                                      </option>
                                      <option value="EUR">
                                        Luxembourg Euro
                                      </option>
                                      <option value="MGA">
                                        Malagasy Ariary
                                      </option>
                                      <option value="MWK">
                                        Malawian Kwacha
                                      </option>
                                      <option value="MYR">
                                        Malaysian Ringgit
                                      </option>
                                      <option value="MVR">
                                        Maldivian Rufiyaa
                                      </option>
                                      <option value="XOF">
                                        West African CFA Fra
                                      </option>
                                      <option value="EUR">Malta Euro</option>
                                      <option value="USD">
                                        United States Dollar
                                      </option>
                                      <option value="MRO">
                                        Mauritanian Ouguiya
                                      </option>
                                      <option value="MUR">
                                        Mauritian Rupee
                                      </option>
                                      <option value="MXN">Mexican Peso</option>
                                      <option value="MDL">Moldovan Leu</option>
                                      <option value="EUR">Monaco Euro</option>
                                      <option value="MNT">
                                        Mongolian Tögrög
                                      </option>
                                      <option value="EUR">
                                        Montenegro Euro
                                      </option>
                                      <option value="XCD">
                                        East Caribbean Dolla
                                      </option>
                                      <option value="MAD">
                                        Moroccan Dirham
                                      </option>
                                      <option value="MZN">
                                        Mozambican Metical
                                      </option>
                                      <option value="MMK">Burmese Kyat</option>
                                      <option value="NAD">
                                        Namibian Dollar
                                      </option>
                                      <option value="AUD">
                                        Australian Dollar
                                      </option>
                                      <option value="NPR">
                                        Nepalese Rupee
                                      </option>
                                      <option value="EUR">
                                        Netherlands Euro
                                      </option>
                                      <option value="XPF">CFP Franc</option>
                                      <option value="NZD">
                                        New Zealand Dollar
                                      </option>
                                      <option value="NIO">
                                        Nicaraguan Córdoba
                                      </option>
                                      <option value="XOF">
                                        West African CFA Fra
                                      </option>
                                      <option value="NGN">
                                        Nigerian Naira
                                      </option>
                                      <option value="NZD">
                                        New Zealand Dollar
                                      </option>
                                      <option value="NOK">
                                        Norwegian Krone
                                      </option>
                                      <option value="OMR">Omani Rial</option>
                                      <option value="PKR">
                                        Pakistani Rupee
                                      </option>
                                      <option value="PAB">
                                        Panamanian Balboa
                                      </option>
                                      <option value="PGK">
                                        Papua New Guinean Ki
                                      </option>
                                      <option value="PYG">
                                        Paraguayan Guaraní
                                      </option>
                                      <option value="PEN">
                                        Peruvian Nuevo Sol
                                      </option>
                                      <option value="PHP">
                                        Philippine Peso
                                      </option>
                                      <option value="PLN">Polish Z?oty</option>
                                      <option value="EUR">Portugal Euro</option>
                                      <option value="QAR">Qatari Riyal</option>
                                      <option value="RON">Romanian Leu</option>
                                      <option value="RUB">Russian Ruble</option>
                                      <option value="RWF">Rwandan Franc</option>
                                      <option value="XCD">
                                        East Caribbean Dolla
                                      </option>
                                      <option value="WST">Samoan</option>
                                      <option value="EUR">
                                        San Marino Euro
                                      </option>
                                      <option value="SAR">Saudi Riyal</option>
                                      <option value="XOF">
                                        West African CFA Fra
                                      </option>
                                      <option value="RSD">Serbian Dinar</option>
                                      <option value="SCR">
                                        Seychellois Rupee
                                      </option>
                                      <option value="SLL">
                                        Sierra Leonean Leone
                                      </option>
                                      <option value="BND">Brunei Dollar</option>
                                      <option value="EUR">Slovakia Euro</option>
                                      <option value="EUR">Slovenia Euro</option>
                                      <option value="SBD">
                                        Solomon Islands Doll
                                      </option>
                                      <option value="SOS">
                                        Somali Shilling
                                      </option>
                                      <option value="ZAR">
                                        South African Rand
                                      </option>
                                      <option value="EUR">Spain Euro</option>
                                      <option value="LKR">
                                        Sri Lankan Rupee
                                      </option>
                                      <option value="SDG">
                                        Sudanese Pound
                                      </option>
                                      <option value="SRD">
                                        Surinamese Dollar
                                      </option>
                                      <option value="SZL">
                                        Swazi Lilangeni
                                      </option>
                                      <option value="SEK">Swedish Krona</option>
                                      <option value="CHF">Swiss Franc</option>
                                      <option value="TWD">
                                        New Taiwan Dollar
                                      </option>
                                      <option value="TJS">
                                        Tajikistani Somoni
                                      </option>
                                      <option value="THB">Thai Baht</option>
                                      <option value="XOF">
                                        West African CFA Fra
                                      </option>
                                      <option value="TOP">
                                        Tongan Pa?anga
                                      </option>
                                      <option value="TTD">
                                        Trinidad And Tobago{" "}
                                      </option>
                                      <option value="TND">
                                        Tunisian Dinar
                                      </option>
                                      <option value="TRY">Turkish Lira</option>
                                      <option value="TMT">
                                        Turkmenistan Manat
                                      </option>
                                      <option value="AUD">
                                        Australian Dollar
                                      </option>
                                      <option value="UGX">
                                        Ugandan Shilling
                                      </option>
                                      <option value="UAH">
                                        Ukrainian Hryvnia
                                      </option>
                                      <option value="AED">
                                        United Arab Emirates
                                      </option>
                                      <option value="GBP">British Pound</option>
                                      <option value="USD">
                                        United States Dollar
                                      </option>
                                      <option value="UYU">
                                        Uruguayan Peso
                                      </option>
                                      <option value="UZS">
                                        Uzbekistani Som
                                      </option>
                                      <option value="VUV">Vanuatu Vatu</option>
                                      <option value="VND">
                                        Vietnamese ??ng
                                      </option>
                                      <option value="XPF">CFP Franc</option>
                                      <option value="YER">Yemeni Rial</option>
                                      <option value="ZMW">
                                        Zambian Kwacha
                                      </option>
                                      <option value="BWP">Botswana Pula</option>
                                    </select>
                                    <div className="select__arrow" />
                                  </div>
                                </div>
                                <div className="form-group col-md-6">
                                  <label htmlFor="minimum_hourly_rate_for_on_demand_driver">
                                    Minimum
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="minimum_hourly_rate_for_on_demand_driver"
                                    name="minimum_hourly_rate_for_on_demand_driver"
                                    defaultValue
                                  />
                                </div>
                                <div className="form-group col-md-6">
                                  <label htmlFor="maximum_hourly_rate_for_on_demand_driver">
                                    Maximum
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="maximum_hourly_rate_for_on_demand_driver"
                                    name="maximum_hourly_rate_for_on_demand_driver"
                                    defaultValue
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12 p-0 mb-3 mt-5">
                            <h3>
                              State The Salary Range For Full Time Employment
                            </h3>
                          </div>
                          <div className="col-lg-12 formoutside pt-4 pb-4 text-left">
                            <label className="text-left graycolor">
                              Dont be greedy. If you indicate a high salary, you
                              may reduce the odds of getting hired. It would be
                              wonderful if you know the standard salary for your
                              profession, and use that one to set salary range.
                            </label>
                            <div className="form-row mt-3">
                              <div className="form-group col-md-12">
                                <label htmlFor="salary_range_currency">
                                  Select currency used in your country
                                </label>
                                <div className="select mb-0">
                                  <select
                                    className="form-control"
                                    id="salary_range_currency"
                                    name="salary_range_currency"
                                  >
                                    <option value>Select Currency</option>
                                    <option value="AFN">Afghan Afghani</option>
                                    <option value="ALL">Albanian Lek</option>
                                    <option value="DZD">Algerian Dinar</option>
                                    <option value="EUR">Andorra Euro</option>
                                    <option value="AOA">Angolan Kwanza</option>
                                    <option value="XCD">
                                      East Caribbean Dolla
                                    </option>
                                    <option value="XCD">
                                      East Caribbean Dolla
                                    </option>
                                    <option value="ARS">Argentine Peso</option>
                                    <option value="AMD">Armenian Dram</option>
                                    <option value="AWG">Aruban Florin</option>
                                    <option value="AUD">
                                      Australian Dollar
                                    </option>
                                    <option value="EUR">Austria Euro</option>
                                    <option value="AZN">
                                      Azerbaijani Manat
                                    </option>
                                    <option value="BHD">Bahraini Dinar</option>
                                    <option value="BDT">
                                      Bangladeshi Taka
                                    </option>
                                    <option value="BBD">
                                      Barbadian Dollar
                                    </option>
                                    <option value="BYR">
                                      Belarusian Ruble
                                    </option>
                                    <option value="EUR">Belgium Euro</option>
                                    <option value="BZD">Belize Dollar</option>
                                    <option value="XOF">
                                      West African CFA Fra
                                    </option>
                                    <option value="BMD">
                                      Bermudian Dollar
                                    </option>
                                    <option value="BTN">
                                      Bhutanese Ngultrum
                                    </option>
                                    <option value="BWP">Botswana Pula</option>
                                    <option value="BRL">Brazilian Real</option>
                                    <option value="BGN">Bulgarian Lev</option>
                                    <option value="XOF">
                                      West African CFA Fra
                                    </option>
                                    <option value="BIF">Burundian Franc</option>
                                    <option value="KHR">Cambodian Riel</option>
                                    <option value="XAF">
                                      Central African CFA{" "}
                                    </option>
                                    <option value="CAD">Canadian Dollar</option>
                                    <option value="CVE">
                                      Cape Verdean Escudo
                                    </option>
                                    <option value="KYD">
                                      Cayman Islands Dolla
                                    </option>
                                    <option value="XAF">
                                      Central African CFA{" "}
                                    </option>
                                    <option value="CLP">Chilean Peso</option>
                                    <option value="CNY">Chinese Yuan</option>
                                    <option value="COP">Colombian Peso</option>
                                    <option value="KMF">Comorian Franc</option>
                                    <option value="NZD">
                                      New Zealand Dollar
                                    </option>
                                    <option value="CRC">
                                      Costa Rican Colón
                                    </option>
                                    <option value="XOF">
                                      West African CFA Fra
                                    </option>
                                    <option value="HRK">Croatian Kuna</option>
                                    <option value="CUC">
                                      Cuban Convertible Pe
                                    </option>
                                    <option value="EUR">Cyprus Euro</option>
                                    <option value="CZK">Czech Koruna</option>
                                    <option value="DKK">Danish Krone</option>
                                    <option value="DJF">
                                      Djiboutian Franc
                                    </option>
                                    <option value="XCD">
                                      East Caribbean Dolla
                                    </option>
                                    <option value="DOP">Dominican Peso</option>
                                    <option value="USD">
                                      United States Dollar
                                    </option>
                                    <option value="EGP">Egyptian Pound</option>
                                    <option value="USD">
                                      United States Dollar
                                    </option>
                                    <option value="XAF">
                                      Central African CFA{" "}
                                    </option>
                                    <option value="ERN">Eritrean Nakfa</option>
                                    <option value="EUR">Estonia Euro</option>
                                    <option value="ETB">Ethiopian Birr</option>
                                    <option value="DKK">Danish Krone</option>
                                    <option value="FJD">Fijian Dollar</option>
                                    <option value="EUR">Finland Euro</option>
                                    <option value="EUR">France Euro</option>
                                    <option value="XPF">CFP Franc</option>
                                    <option value="XAF">
                                      Central African CFA{" "}
                                    </option>
                                    <option value="GEL">Georgian Lari</option>
                                    <option value="EUR">Germany Euro</option>
                                    <option value="GHS">Ghana Cedi</option>
                                    <option value="GIP">Gibraltar Pound</option>
                                    <option value="EUR">Greece Euro</option>
                                    <option value="XCD">
                                      East Caribbean Dolla
                                    </option>
                                    <option value="GTQ">
                                      Guatemalan Quetzal
                                    </option>
                                    <option value="GBP">British Pound</option>
                                    <option value="GNF">Guinean Franc</option>
                                    <option value="XOF">
                                      West African CFA Fra
                                    </option>
                                    <option value="GYD">Guyanese Dollar</option>
                                    <option value="HTG">Haitian Gourde</option>
                                    <option value="HNL">
                                      Honduran Lempira
                                    </option>
                                    <option value="HKD">
                                      Hong Kong Dollar
                                    </option>
                                    <option value="HUF">
                                      Hungarian Forint
                                    </option>
                                    <option value="ISK">Icelandic Króna</option>
                                    <option value="INR">Indian Rupee</option>
                                    <option value="IDR">
                                      Indonesian Rupiah
                                    </option>
                                    <option value="IQD">Iraqi Dinar</option>
                                    <option value="EUR">Ireland Euro</option>
                                    <option value="GBP">British Pound</option>
                                    <option value="ILS">
                                      Israeli New Shekel
                                    </option>
                                    <option value="EUR">Italy Euro</option>
                                    <option value="JMD">Jamaican Dollar</option>
                                    <option value="JPY">Japanese Yen</option>
                                    <option value="GBP">British Pound</option>
                                    <option value="JOD">Jordanian Dinar</option>
                                    <option value="KZT">
                                      Kazakhstani Tenge
                                    </option>
                                    <option value="KES" selected="true">
                                      Kenyan Shilling
                                    </option>
                                    <option value="AUD">
                                      Australian Dollar
                                    </option>
                                    <option value="KWD">Kuwaiti Dinar</option>
                                    <option value="KGS">Kyrgyzstani Som</option>
                                    <option value="LAK">Lao Kip</option>
                                    <option value="EUR">Latvia Euro</option>
                                    <option value="LBP">Lebanese Pound</option>
                                    <option value="LSL">Lesotho Loti</option>
                                    <option value="LRD">Liberian Dollar</option>
                                    <option value="CHF">Swiss Franc</option>
                                    <option value="EUR">Lithuania Euro</option>
                                    <option value="EUR">Luxembourg Euro</option>
                                    <option value="MGA">Malagasy Ariary</option>
                                    <option value="MWK">Malawian Kwacha</option>
                                    <option value="MYR">
                                      Malaysian Ringgit
                                    </option>
                                    <option value="MVR">
                                      Maldivian Rufiyaa
                                    </option>
                                    <option value="XOF">
                                      West African CFA Fra
                                    </option>
                                    <option value="EUR">Malta Euro</option>
                                    <option value="USD">
                                      United States Dollar
                                    </option>
                                    <option value="MRO">
                                      Mauritanian Ouguiya
                                    </option>
                                    <option value="MUR">Mauritian Rupee</option>
                                    <option value="MXN">Mexican Peso</option>
                                    <option value="MDL">Moldovan Leu</option>
                                    <option value="EUR">Monaco Euro</option>
                                    <option value="MNT">
                                      Mongolian Tögrög
                                    </option>
                                    <option value="EUR">Montenegro Euro</option>
                                    <option value="XCD">
                                      East Caribbean Dolla
                                    </option>
                                    <option value="MAD">Moroccan Dirham</option>
                                    <option value="MZN">
                                      Mozambican Metical
                                    </option>
                                    <option value="MMK">Burmese Kyat</option>
                                    <option value="NAD">Namibian Dollar</option>
                                    <option value="AUD">
                                      Australian Dollar
                                    </option>
                                    <option value="NPR">Nepalese Rupee</option>
                                    <option value="EUR">
                                      Netherlands Euro
                                    </option>
                                    <option value="XPF">CFP Franc</option>
                                    <option value="NZD">
                                      New Zealand Dollar
                                    </option>
                                    <option value="NIO">
                                      Nicaraguan Córdoba
                                    </option>
                                    <option value="XOF">
                                      West African CFA Fra
                                    </option>
                                    <option value="NGN">Nigerian Naira</option>
                                    <option value="NZD">
                                      New Zealand Dollar
                                    </option>
                                    <option value="NOK">Norwegian Krone</option>
                                    <option value="OMR">Omani Rial</option>
                                    <option value="PKR">Pakistani Rupee</option>
                                    <option value="PAB">
                                      Panamanian Balboa
                                    </option>
                                    <option value="PGK">
                                      Papua New Guinean Ki
                                    </option>
                                    <option value="PYG">
                                      Paraguayan Guaraní
                                    </option>
                                    <option value="PEN">
                                      Peruvian Nuevo Sol
                                    </option>
                                    <option value="PHP">Philippine Peso</option>
                                    <option value="PLN">Polish Z?oty</option>
                                    <option value="EUR">Portugal Euro</option>
                                    <option value="QAR">Qatari Riyal</option>
                                    <option value="RON">Romanian Leu</option>
                                    <option value="RUB">Russian Ruble</option>
                                    <option value="RWF">Rwandan Franc</option>
                                    <option value="XCD">
                                      East Caribbean Dolla
                                    </option>
                                    <option value="WST">Samoan</option>
                                    <option value="EUR">San Marino Euro</option>
                                    <option value="SAR">Saudi Riyal</option>
                                    <option value="XOF">
                                      West African CFA Fra
                                    </option>
                                    <option value="RSD">Serbian Dinar</option>
                                    <option value="SCR">
                                      Seychellois Rupee
                                    </option>
                                    <option value="SLL">
                                      Sierra Leonean Leone
                                    </option>
                                    <option value="BND">Brunei Dollar</option>
                                    <option value="EUR">Slovakia Euro</option>
                                    <option value="EUR">Slovenia Euro</option>
                                    <option value="SBD">
                                      Solomon Islands Doll
                                    </option>
                                    <option value="SOS">Somali Shilling</option>
                                    <option value="ZAR">
                                      South African Rand
                                    </option>
                                    <option value="EUR">Spain Euro</option>
                                    <option value="LKR">
                                      Sri Lankan Rupee
                                    </option>
                                    <option value="SDG">Sudanese Pound</option>
                                    <option value="SRD">
                                      Surinamese Dollar
                                    </option>
                                    <option value="SZL">Swazi Lilangeni</option>
                                    <option value="SEK">Swedish Krona</option>
                                    <option value="CHF">Swiss Franc</option>
                                    <option value="TWD">
                                      New Taiwan Dollar
                                    </option>
                                    <option value="TJS">
                                      Tajikistani Somoni
                                    </option>
                                    <option value="THB">Thai Baht</option>
                                    <option value="XOF">
                                      West African CFA Fra
                                    </option>
                                    <option value="TOP">Tongan Pa?anga</option>
                                    <option value="TTD">
                                      Trinidad And Tobago{" "}
                                    </option>
                                    <option value="TND">Tunisian Dinar</option>
                                    <option value="TRY">Turkish Lira</option>
                                    <option value="TMT">
                                      Turkmenistan Manat
                                    </option>
                                    <option value="AUD">
                                      Australian Dollar
                                    </option>
                                    <option value="UGX">
                                      Ugandan Shilling
                                    </option>
                                    <option value="UAH">
                                      Ukrainian Hryvnia
                                    </option>
                                    <option value="AED">
                                      United Arab Emirates
                                    </option>
                                    <option value="GBP">British Pound</option>
                                    <option value="USD">
                                      United States Dollar
                                    </option>
                                    <option value="UYU">Uruguayan Peso</option>
                                    <option value="UZS">Uzbekistani Som</option>
                                    <option value="VUV">Vanuatu Vatu</option>
                                    <option value="VND">Vietnamese ??ng</option>
                                    <option value="XPF">CFP Franc</option>
                                    <option value="YER">Yemeni Rial</option>
                                    <option value="ZMW">Zambian Kwacha</option>
                                    <option value="BWP">Botswana Pula</option>
                                  </select>
                                  <div className="select__arrow" />
                                </div>
                              </div>
                              <div className="form-group col-md-6">
                                <label htmlFor="minimum_salary_range_for_full_time_employment">
                                  Minimum
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="minimum_salary_range_for_full_time_employment"
                                  name="minimum_salary_range_for_full_time_employment"
                                  defaultValue={30000}
                                />
                              </div>
                              <div className="form-group col-md-6">
                                <label htmlFor="maximum_salary_range_for_full_time_employment">
                                  Maximum
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="maximum_salary_range_for_full_time_employment"
                                  name="maximum_salary_range_for_full_time_employment"
                                  defaultValue={50000}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12 p-0 mb-3 mt-5">
                            <h3>
                              Two Previous Driving History Other Than
                              Ride-hailing Employment
                            </h3>
                          </div>
                          <div className="col-lg-12 formoutside pt-4 pb-4 text-left">
                            <label className="text-left graycolor">
                              This is important if , besides ride-hailing
                              driving, you are also considering getting hired in
                              other categories such as personal driver, school
                              bus driver, public commuter driver, truck driver
                              and forklift driver.
                            </label>
                            <div className="form-group col-md-12">
                              <div className="row col-lg-12 mt-2">
                                <label className="control control--radio  col-lg-5">
                                  I have driving employment history
                                  <input
                                    type="radio"
                                    name="is_driving_employment_history"
                                    id="is_driving_employment_history"
                                    defaultValue="Y"
                                    defaultChecked
                                  />
                                  <div className="control__indicator" />
                                </label>
                                <label className="control control--radio col-lg-5">
                                  I have no driving employment history
                                  <input
                                    type="radio"
                                    name="is_driving_employment_history"
                                    id="is_driving_employment_history"
                                    defaultValue="N"
                                  />
                                  <div className="control__indicator" />
                                </label>
                              </div>
                            </div>
                            <div className="clearfix" />
                            <div
                              className="form-row mt-3"
                              id="DivPrevEmpHistory"
                            >
                              <div className="form-group col-md-4">
                                <label htmlFor="driving_history_employer_1">
                                  Employer One
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="driving_history_employer_1"
                                  name="driving_history_employer_1"
                                  defaultValue="MCBC"
                                />
                              </div>
                              <div className="form-group col-md-4">
                                <label htmlFor="driving_history_category_1">
                                  Category
                                </label>
                                <div className="select mb-0">
                                  <select
                                    id="driving_history_category_1"
                                    name="driving_history_category_1"
                                  >
                                    <option value>Select</option>
                                    <option value={1}>Personal Driver</option>
                                    <option value={2} selected="selected">
                                      Public Commuter Driver (e.g. Bus,
                                      Ambulance)
                                    </option>
                                    <option value={3}>
                                      Ride-Sharing Driver e.g Uber, Taxify
                                    </option>
                                    <option value={4}>School Bus Driver</option>
                                    <option value={5}>Truck Driver</option>
                                    <option value={6}>Forklift Driver</option>
                                    <option value={7}>On-Demand Driver</option>
                                  </select>
                                  <div className="select__arrow" />
                                </div>
                              </div>
                              <div className="form-group col-md-4">
                                <label htmlFor="driving_history_period_worked_1">
                                  Period Worked
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="driving_history_period_worked_1"
                                  name="driving_history_period_worked_1"
                                  defaultValue={2}
                                />
                              </div>
                              <div className="form-group col-md-4">
                                <label htmlFor="driving_history_employer_2">
                                  Employer Two
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="driving_history_employer_2"
                                  name="driving_history_employer_2"
                                  defaultValue="Coast Bus"
                                />
                              </div>
                              <div className="form-group col-md-4">
                                <label htmlFor="driving_history_category_2">
                                  Category
                                </label>
                                <div className="select mb-0">
                                  <select
                                    id="driving_history_category_2"
                                    name="driving_history_category_2"
                                  >
                                    <option value>Select</option>
                                    <option value={1}>Personal Driver</option>
                                    <option value={2} selected="selected">
                                      Public Commuter Driver (e.g. Bus,
                                      Ambulance)
                                    </option>
                                    <option value={3}>
                                      Ride-Sharing Driver e.g Uber, Taxify
                                    </option>
                                    <option value={4}>School Bus Driver</option>
                                    <option value={5}>Truck Driver</option>
                                    <option value={6}>Forklift Driver</option>
                                    <option value={7}>On-Demand Driver</option>
                                  </select>
                                  <div className="select__arrow" />
                                </div>
                              </div>
                              <div className="form-group col-md-4">
                                <label htmlFor="driving_history_period_worked_2">
                                  Period Worked
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="driving_history_period_worked_2"
                                  name="driving_history_period_worked_2"
                                  defaultValue={3}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12 p-0 mb-3 mt-5">
                            <h3>Why I Should Be Considered For Hire</h3>
                          </div>
                          <div className="col-lg-12 formoutside pt-4 pb-4 text-left">
                            <label className="text-left graycolor">
                              In this limited space, give in summary, two
                              reasons why the employer should consider hiring
                              you and not the other thousands of profiles. Be
                              sincere and original.
                            </label>
                            <div className="form-row mt-3">
                              <div className="form-group col-md-12">
                                <label htmlFor="why_i_should_be_considered_for_hire_1">
                                  Point One/Reason One
                                </label>
                                <textarea
                                  rows={3}
                                  cols={50}
                                  className="form-control"
                                  id="why_i_should_be_considered_for_hire_1"
                                  name="why_i_should_be_considered_for_hire_1"
                                  placeholder="Maximum. 300 Characters"
                                  maxLength={301}
                                  defaultValue={
                                    "I have 5 years experience and never cost an accident"
                                  }
                                />
                              </div>
                              <div className="form-group col-md-12">
                                <label htmlFor="why_i_should_be_considered_for_hire_2">
                                  Point Two/Reason One
                                </label>
                                <textarea
                                  rows={3}
                                  cols={50}
                                  className="form-control"
                                  id="why_i_should_be_considered_for_hire_2"
                                  name="why_i_should_be_considered_for_hire_2"
                                  placeholder="Maximum. 300 Characters"
                                  maxLength={301}
                                  defaultValue={"Good Customer relations"}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12 p-0 mb-3 mt-5">
                            <h3>Have you been verified by Instadriver?</h3>
                          </div>
                          <div className="col-lg-12 formoutside pt-4 pb-4 text-left">
                            <label className="text-left graycolor">
                              Some employers prefer to hire verified drivers,
                              you may want to get verified. Click{" "}
                              <a
                                href="https://instadriver.co/verified_search"
                                target="_blank"
                              >
                                here
                              </a>
                              to learn more about verified feature. Otherwise,
                              if you are not verified, select "No" option and
                              continue.
                            </label>
                            <div className="form-row mt-3">
                              <div className="form-group col-md-12">
                                <div className="row col-lg-12 mt-2">
                                  <label className="control control--radio  col-lg-1">
                                    Yes
                                    <input
                                      type="radio"
                                      name="is_user_verified"
                                      id="is_user_verified"
                                      defaultValue="Y"
                                    />
                                    <div className="control__indicator" />
                                  </label>
                                  <label className="control control--radio col-lg-1">
                                    No
                                    <input
                                      type="radio"
                                      name="is_user_verified"
                                      id="is_user_verified"
                                      defaultValue="N"
                                      defaultChecked
                                    />
                                    <div className="control__indicator" />
                                  </label>
                                </div>
                              </div>
                              <div className="clearfix" />
                              <div
                                className="form-group col-md-4"
                                id="div_verification_number"
                                style={{ display: "none" }}
                              >
                                <label htmlFor="verification_number">
                                  Enter the Verification number
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="verification_number"
                                  name="verification_number"
                                  defaultValue
                                  maxLength={20}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12 p-0 mb-3 mt-5">
                            <h3>
                              Would You Be Willing To Provide More Information
                              Upon Request?
                            </h3>
                          </div>
                          <div className="col-lg-12 formoutside text-left mb-4">
                            <div className="form-row mt-3">
                              <div className="form-group col-md-12">
                                <div className="row col-lg-12 mt-2">
                                  <label className="control control--radio  col-lg-1">
                                    Yes
                                    <input
                                      type="radio"
                                      name="is_provide_more_information_upon_request"
                                      id="is_provide_more_information_upon_request"
                                      defaultValue="Y"
                                      defaultChecked
                                    />
                                    <div className="control__indicator" />
                                  </label>
                                  <label className="control control--radio col-lg-1">
                                    No
                                    <input
                                      type="radio"
                                      name="is_provide_more_information_upon_request"
                                      id="is_provide_more_information_upon_request"
                                      defaultValue="N"
                                    />
                                    <div className="control__indicator" />
                                  </label>
                                </div>
                              </div>
                              <div className="clearfix" />
                            </div>
                          </div>
                          <button type="submit" className="btn btn-dark ">
                            Save Changes
                          </button>
                          <div className="col-lg-12 mt-4">
                            Get a Url for this profile and share in relevant
                            platforms e.g. on social media
                            <br />
                            <a
                              href="#"
                              data-target="#profileUrlModal"
                              data-toggle="modal"
                              className="text-success"
                            >
                              Click here to get URL
                            </a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </section>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerDriverProfile1;
