import React, { useEffect, useState } from "react";
import filter from "../../dist/icons/filter.svg";
import PropTypes from "prop-types";
// import { validNumber } from "./helpers";
import FilterPlacesJob from "./Job_Components/FilterPlacesJob";

import moment from "moment";
import FilterSalaryInput from "./FilterSalaryInput";
const EmployersJobsFilter = ({
  formstaticData,
  setJobFilterApplied,
  Empfilter,
  setFilteredJobList,
  jobList,
  filteredJobList,
}) => {
  const [driverCategory, setDriverCategory] = useState("");
  const [drivingExperience, setDrivingExperience] = useState(0);
  const [licenseAge, setLicenseAge] = useState(0);
  const [location, setLocation] = useState("");
  const [currency, setCurrency] = useState("");
  const [salaryMin, setSalaryMin] = useState("");
  const [salaryMax, setSalaryMax] = useState("");
  const [timePosted, setTimePosted] = useState("");
  const [errors, setErrors] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [checkLocation, setCheckLocation] = useState(false);

  console.log("========rendered emp filter ", Empfilter);

  useEffect(() => {
    setErrors("");
  }, []);

  // useEffect(() => {
  //   if (checkLocation) {
  //     setTimeout(() => {
  //       setCheckLocation(false);
  //     }, 5000);
  //   }
  // }, []);

  const handleSalaryFocus = () => {
    if (location.length === 0) {
      setCheckLocation(true);
    }
  };

  // const handleMaxSalaryFocus = (val)=>{
  //   if (location.length === 0){
  //     setCheckLocation(true)
  //   }else{
  //     setSalaryMin(val)
  //   }
  // }

  // useEffect(() => {
  //   console.log("apply driver exp filter");

  //   let tempList = jobList.filter((job) => job.experience >= drivingExperience);
  //   console.log("og list ===", jobList);
  //   console.log("exp temp filter list ===", tempList);

  //   // setFilteredJobList(tempList)
  //   console.log("exp filter list ===", filteredJobList);
  // }, [drivingExperience]);

  // const validate = () => {
  //   var error = "";
  //   if (!validNumber(salaryMin)) {
  //     error += "Salary min must be a number. \n";
  //   }

  //   if (!validNumber(salaryMax)) {
  //     error += "Salary Max must be number. \n";
  //   }

  //   if (!validNumber(licenseAge)) {
  //     error += "License Period must be a positive number. \n";
  //   }

  //   if (!validNumber(drivingExperience)) {
  //     error += "Driving period must be a number. \n";
  //   }

  //   if (
  //     validNumber(salaryMin) &&
  //     validNumber(salaryMax) &&
  //     salaryMin > salaryMax
  //   ) {
  //     error += "Salary minimum cannot be greater than salary max. \n";
  //   }

  //   return error;
  // };
  const onFilter = () => {
    // const err = validate();
    // if (err !== "") {
    //   setIsValid(false);
    //   setErrors(err);
    // } else {
    //   const filter = {
    //     currency: currency,
    //     gender: gender,
    //     drivingExperience: drivingExperience,
    //     salaryMin: salaryMin,
    //     salaryMax: salaryMax,
    //     licenseAge: licenseAge,
    //   };
    //   setErrors("");
    //   setIsValid(true);
    //   props.onFilter(filter);
    // }

    console.log("joblists------", jobList);
    console.log("emp job cateory filter ", driverCategory);
    let tempList = [...jobList];

    if (driverCategory !== "") {
      tempList = tempList.filter((job) => {
        let upperCategories = job.category.map((cat) => cat.toUpperCase());
        let filteredLCat = upperCategories.filter((LC) =>
          LC.includes(driverCategory)
        );
        if (filteredLCat.length > 0) {
          return job;
        }
      });
    }

    if (drivingExperience > 0) {
      tempList = tempList.filter((job) => job.experience >= drivingExperience);
    }

    if (licenseAge > 0) {
      tempList = tempList.filter((job) => job.licenseAge >= licenseAge);
    }

    // if (salaryMin!="") {
    //   tempList = tempList.filter((driverCard) => driverCard.salary.min >= salaryMin);
    //   console.log("minumum salary added");
    // }

    // if (salaryMax!="") {
    //   tempList = tempList.filter((driverCard) => driverCard.salary.max <= salaryMax);
    //   console.log("max salary added");
    // }
    if (timePosted) {
      tempList = tempList.filter((driverCard) => {
        var now = moment(new Date()); //todays date
        var end = moment(driverCard.createdAt); // another date
        var duration = moment.duration(now.diff(end));
        var days = duration.asDays();
        console.log("---days difference", days);
        console.log("---days timePosted", timePosted);

        if (days <= timePosted) {
          console.log("---- valid card", driverCard);
          return driverCard;
        }
      });
    }

    // let joblistsTemp = jobList.map((job)=> job.category.includes(driverCategory) )

    // let joblistsTemp = jobList.map((job)=> job.category.includes(driverCategory) )
    console.log("og emp job list -- ", jobList);

    console.log("applying emp job filter -- ", tempList);
    setFilteredJobList(tempList);
    setJobFilterApplied(true);
  };

  return (
    <div className="modal fade show" id="jobsfilterModal" aria-modal="true">
      <div className="modal-dialog">
        <div className="modal-content">
          {/* <!-- Modal Header --> */}
          <div className="modal-header filter-header">
            <h4 className="modal-title">Driving Jobs Filter</h4>
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
          </div>
          <form
            method="get"
            novalidate="novalidate"
            className="form-group p-3 text-left"
          >
            <div className="select selectbox mb-3">
              <select
                className="form-control valid"
                id="driver-category"
                name="driver-category"
                value={driverCategory}
                onChange={(e) => setDriverCategory(e.target.value)}
              >
                <option value="">Select driver category</option>
                {formstaticData &&
                  formstaticData.driverCategory.map((Dcategory, i) => (
                    <option key={i} value={Dcategory.category}>
                      {Dcategory.category}
                    </option>
                  ))}
                {/* <option value="personal driver">Personal Driver</option>
                <option value="public commuter driver">
                  Public commuter driver e.g bus,ambulance
                </option>
                <option value="ride-sharing driver">
                  Ride-sharing driver e.g Uber,Bolt
                </option>
                <option value="school bus driver">School bus driver</option>
                <option value="truck driver">Truck driver</option>
                <option value="folklift driver">Folklift driver</option>
                <option value="on-demand driver">On-demand driver</option> */}
              </select>
              <div className="select__arrow"></div>
            </div>
            <div className="select selectbox mb-3">
              <select
                className="form-control valid"
                id="driver-experience"
                name="driver-experience"
                value={drivingExperience}
                onChange={(e) => setDrivingExperience(e.target.value)}
              >
                <option value="0">Select years of driving experience</option>
                <option value="1">Atleast 1 year driving experience</option>
                <option value="2">Atleast 2 year driving experience</option>
                <option value="3">Atleast 3 year driving experience</option>
                <option value="4">Atleast 4 year driving experience</option>
                <option value="5">Atleast 5 year driving experience</option>
                <option value="6">Atleast 6 year driving experience</option>
                <option value="7">Atleast 7 year driving experience</option>
                <option value="8">Atleast 8 year driving experience</option>
                <option value="9">Atleast 9 year driving experience</option>
                <option value="10">Atleast 10 year driving experience</option>
              </select>
              <div className="select__arrow"></div>
            </div>
            <div className="select selectbox mb-3">
              <select
                className="form-control valid"
                id="driver-license-age"
                name="driver-license-age"
                value={licenseAge}
                onChange={(e) => setLicenseAge(e.target.value)}
              >
                <option value="0">Select years of driving license</option>
                <option value="1">Atleast 1 year driving license</option>
                <option value="2">Atleast 2 year driving license</option>
                <option value="3">Atleast 3 year driving license</option>
                <option value="4">Atleast 4 year driving license</option>
                <option value="5">Atleast 5 year driving license</option>
                <option value="6">Atleast 6 year driving license</option>
                <option value="7">Atleast 7 year driving license</option>
                <option value="8">Atleast 8 year driving license</option>
                <option value="9">Atleast 9 year driving license</option>
                <option value="10">Atleast 10 year driving license</option>
              </select>
              <div className="select__arrow"></div>
            </div>

            <div className="input input-box mb-3">
              {/* <input className="form-control" /> */}
              <FilterPlacesJob
                location={location}
                setLocation={setLocation}
                setCurrency={setCurrency}
                setCheckLocation={setCheckLocation}
              />
            </div>
            {/* <div className="form-row"> */}
            <div className="form-group mb-3">
              <div className="row ">
                {/* <div className="col-2">
                  <label>
                    {location !== "" ? currency : "Select location"}
                  </label>
                </div> */}
                <div className="col-6">
                  <FilterSalaryInput
                    id="min"
                    name="min"
                    value={salaryMin}
                    placeholder="Minimum Salary"
                    onChange={(e) => setSalaryMin(e.target.value)}
                    checkLocation={handleSalaryFocus}
                    disable={checkLocation}
                    currency={currency}
                  />

                  {/* <input
                    type="text"
                    className="form-control inputIcon-none"
                    id="min"
                    name="min"
                    placeholder="Minimum Salary"
                    maxlength="15"
                    value={salaryMin}
                    onChange={(e) => setSalaryMin(e.target.value)}
                  /> */}
                </div>
                <div className=" col-6">
                  <FilterSalaryInput
                    id="max"
                    name="max"
                    value={salaryMax}
                    placeholder="Maximum Salary"
                    onChange={(e) => setSalaryMax(e.target.value)}
                    checkLocation={handleSalaryFocus}
                    disable={checkLocation}
                    currency={currency}
                  />

                  {/* <input
                    type="text"
                    className="form-control inputIcon-none"
                    id="max"
                    name="max"
                    placeholder="Maximum Salary"
                    maxlength="15"
                    value={salaryMax}
                    onChange={(e) => setSalaryMax(e.target.value)}
                  /> */}
                </div>
              </div>
              {checkLocation && (
                <p
                  style={{
                    color: "red",
                    textAlign: "left",
                    margin: "10px 0px 0px 0px",
                    padding: "0px",
                  }}
                >
                  Please select location to get currency for your range.
                </p>
              )}
            </div>
            <div className="select selectbox mb-3">
              <select
                className="form-control valid"
                id="job-driver-post-date"
                name="job-driver-post-date"
                value={timePosted}
                onChange={(e) => setTimePosted(e.target.value)}
              >
                <option value="">Select time posted</option>
                <option value="1">Today</option>
                <option value="2">Past 48 hours</option>
                <option value="3">Past 72 hours</option>
              </select>
              <div className="select__arrow"></div>
            </div>
            <div className="alert alert-success mb-3">
              You may consider editing your filters or watering down your
              filters for fast search. Otherwise, go with the selected filters.
            </div>
            <div className="modal-footer text-center ">
              <button
                style={{ border: "none" }}
                type="button"
                className="btn btn-primary bg-orange pr-3 pl-3"
                onClick={onFilter}
                data-dismiss="modal"
              >
                Apply Filters
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

EmployersJobsFilter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default EmployersJobsFilter;
