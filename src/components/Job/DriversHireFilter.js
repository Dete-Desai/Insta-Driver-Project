import React, { useEffect, useState } from "react";
import styled from "styled-components";
import filter from "../../dist/icons/filter.svg";
import { GetCurrencyFromAddress } from "../../Util/GetCurrency";
import FilterPlacesDriver from "./Job_Components/FilterPlacesDriver";
import PropTypes from "prop-types";
import moment from "moment";
import FilterSalaryInput from "./FilterSalaryInput";
// import { validNumber } from "./helpers";

const DriversHireFilterUi = styled.div``;

const DriversHireFilter = ({
  Driverfilter,
  filteredDriverCardList,
  setFilteredDriverCardList,
  setDriverFilterApplied,
  formstaticData,
  driverCardList,
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

  console.log("-----", Driverfilter);

  useEffect(() => {
    setErrors("");
  }, []);

  // let tempcards = [
  //   {
  //     location: {
  //       latitude: 0,
  //       longitude: 0,
  //       city: "Adilabad",
  //       country: "India",
  //     },
  //     salary: {
  //       min: 1,
  //       max: 1,
  //     },
  //     category: ["PUBLIC COMMUTER DRIVER", "SCHOOL BUS DRIVER"],
  //     experience: 13,
  //     licenseAge: 2,
  //     status: "ACTIVE",
  //     _id: "6022b0f31a8ef786598872ec",
  //     name: "abc efg ",
  //     description:
  //       "I am Looking for a driving job. I am a competent driver. I am also very responsible and will take care of your car. Check out my profile and hire me.",
  //     mobileNumber: "254999912391",
  //     expireAt: "2021-02-12T15:57:38.993Z",
  //     user: {
  //       _id: "5ff47c9276f33c08fa6d2e56",
  //       firstName: "abc",
  //       lastName: "efg",
  //       avatar:
  //         "https://instadrivers3bucket.s3.ap-south-1.amazonaws.com/dsd3.jpg",
  //     },
  //     imageUrl:
  //       "https://instadrivers3bucket.s3.ap-south-1.amazonaws.com/dsd3.jpg",
  //     createdAt: "2021-02-09T15:57:39.464Z",
  //     updatedAt: "2021-02-09T15:57:39.464Z",
  //     __v: 0,
  //   },
  //   {
  //     location: {
  //       latitude: 0,
  //       longitude: 0,
  //       city: "Nairobi",
  //       country: "Kenya",
  //     },
  //     salary: {
  //       min: 30000,
  //       max: 100000,
  //     },
  //     category: ["TRUCK DRIVER", "FORK LIFT DRIVER"],
  //     experience: 3,
  //     licenseAge: 4,
  //     status: "ACTIVE",
  //     _id: "602268dbfdba3f71a876444f",
  //     name: "driver driver1 ",
  //     description:
  //       "I am a competent and hardworking driver I am a competent and hardworking driver I am a competent and hardworking driver I am a competent and hardworking driver I am a competent and hardworking driver ",
  //     mobileNumber: "6658574967468",
  //     expireAt: "2021-02-12T10:50:01.640Z",
  //     user: {
  //       _id: "6012d1cf26abd555dcac7168",
  //       firstName: "driver",
  //       lastName: "driver1",
  //       avatar:
  //         "https://instadrivers3bucket.s3.ap-south-1.amazonaws.com/bmw.jpeg",
  //     },
  //     imageUrl:
  //       "https://instadrivers3bucket.s3.ap-south-1.amazonaws.com/bmw.jpeg",
  //     createdAt: "2021-02-09T10:50:03.231Z",
  //     updatedAt: "2021-02-09T10:50:03.231Z",
  //     __v: 0,
  //   },
  //   {
  //     location: {
  //       latitude: 0,
  //       longitude: 0,
  //       city: "Mumbai",
  //       country: "India",
  //     },
  //     salary: {
  //       min: 11111,
  //       max: 111011,
  //     },
  //     category: ["Personal Driver", "On-Demand Driver"],
  //     experience: 11,
  //     licenseAge: 11,
  //     status: "ACTIVE",
  //     _id: "601f730cfd201c463f89512e",
  //     name: "tempnew xyz ",
  //     description:
  //       "I am very honest and responsible. I promise to take care of the car given to me and ensure my safety as well as that of my employer. Hire me for top notch service.",
  //     mobileNumber: "254999333999",
  //     expireAt: "2021-02-10T04:56:44.109Z",
  //     user: {
  //       _id: "6019e4b0b9b2dcd5798b3918",
  //       firstName: "tempnew",
  //       lastName: "xyz",
  //       avatar:
  //         "https://instadrivers3bucket.s3.ap-south-1.amazonaws.com/deadpool-01.png",
  //     },
  //     imageUrl:
  //       "https://instadrivers3bucket.s3.ap-south-1.amazonaws.com/deadpool-01.png",
  //     createdAt: "2021-02-07T04:56:44.211Z",
  //     updatedAt: "2021-02-07T04:56:44.211Z",
  //     __v: 0,
  //   },
  //   {
  //     location: {
  //       latitude: 0,
  //       longitude: 0,
  //       city: "Pune",
  //       country: "India",
  //     },
  //     salary: {
  //       min: 0,
  //       max: 0,
  //     },
  //     category: ["Personal Driver", "Truck Driver"],
  //     experience: 2,
  //     licenseAge: 3,
  //     status: "ACTIVE",
  //     _id: "60181d900d1d5aba357c5704",
  //     name: "xyzdriverupdated xyzupdated ",
  //     description:
  //       "I am very honest and responsible. I promise to take care of the car given to me and ensure my safety as well as that of my employer. Hire me for top notch service.",
  //     mobileNumber: "2547899090",
  //     expireAt: "2021-02-04T15:26:07.484Z",
  //     user: {
  //       _id: "5ff8ccc0fceafa32f5c2ef4b",
  //       firstName: "xyzdriverupdated",
  //       lastName: "xyzupdated",
  //       avatar:
  //         "https://instadrivers3bucket.s3.ap-south-1.amazonaws.com/pexels-tim-gouw-52608.jpg",
  //     },
  //     imageUrl:
  //       "https://instadrivers3bucket.s3.ap-south-1.amazonaws.com/pexels-tim-gouw-52608.jpg",
  //     createdAt: "2021-02-01T15:26:08.778Z",
  //     updatedAt: "2021-02-01T15:26:08.778Z",
  //     __v: 0,
  //   },
  //   {
  //     location: {
  //       latitude: 0,
  //       longitude: 0,
  //       city: "Toronto",
  //       country: "Canada",
  //     },
  //     salary: {
  //       min: 0,
  //       max: 0,
  //     },
  //     category: ["Personal Driver", "Truck Driver"],
  //     experience: 2,
  //     licenseAge: 3,
  //     status: "ACTIVE",
  //     _id: "60181d180d1d5aba357c5703",
  //     name: "xyzdriverupdated xyzupdated ",
  //     description:
  //       "I am very honest and responsible. I promise to take care of the car given to me and ensure my safety as well as that of my employer. Hire me for top notch service.",
  //     mobileNumber: "2547899090",
  //     expireAt: "2021-02-04T15:24:08.039Z",
  //     user: {
  //       _id: "5ff8ccc0fceafa32f5c2ef4b",
  //       firstName: "xyzdriverupdated",
  //       lastName: "xyzupdated",
  //       avatar:
  //         "https://instadrivers3bucket.s3.ap-south-1.amazonaws.com/pexels-tim-gouw-52608.jpg",
  //     },
  //     imageUrl:
  //       "https://instadrivers3bucket.s3.ap-south-1.amazonaws.com/pexels-tim-gouw-52608.jpg",
  //     createdAt: "2021-02-01T15:24:08.838Z",
  //     updatedAt: "2021-02-01T15:24:08.838Z",
  //     __v: 0,
  //   },
  // ];

  const handleSalaryFocus = (val) => {
    if (location.length === 0) {
      setCheckLocation(true);
    }
  };

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
  const onFilter = async () => {
    // const err = validate();
    // if (err !== "") {
    //   setIsValid(false);
    //   setErrors(err);
    // } else {
    //   const filter = {
    //     category: driverCategory,
    //     currency: currency,
    //     drivingExperience: drivingExperience,
    //     salaryMin: salaryMin,
    //     salaryMax: salaryMax,
    //     licenseAge: licenseAge,
    //     location: location,
    //   };
    //   setErrors("");
    //   setIsValid(true);
    //   props.onFilter(filter);
    // }

    let tempList = [...driverCardList];

    console.log("card listdrvier=================", tempList);

    if (driverCategory !== "") {
      tempList = tempList.filter((driverCard) => {
        let upperCategories = driverCard.category.map((cat) =>
          cat.toUpperCase()
        );
        console.log("cats ", upperCategories);
        console.log("cat driver card", driverCategory);
        let filteredLCat = upperCategories.filter((LC) =>
          LC.includes(driverCategory)
        );

        if (filteredLCat.length > 0) {
          return driverCard;
        }
      });
    }

    if (drivingExperience > 0) {
      tempList = tempList.filter(
        (driverCard) => driverCard.experience >= drivingExperience
      );
    }

    if (licenseAge > 0) {
      tempList = tempList.filter(
        (driverCard) => driverCard.licenseAge >= licenseAge
      );
    }

    if (salaryMin != "") {
      tempList = tempList.filter(
        (driverCard) => driverCard.salary.min >= salaryMin
      );
      console.log("minumum salary added");
    }

    if (salaryMax != "") {
      tempList = tempList.filter(
        (driverCard) => driverCard.salary.max <= salaryMax
      );
      console.log("max salary added");
    }
    if (timePosted) {
      tempList = tempList.filter((driverCard) => {
        var now = moment(new Date()); //todays date
        var end = moment(driverCard.createdAt); // another date
        var duration = moment.duration(now.diff(end));
        var days = duration.asDays();
        console.log("---days difference", days);
        console.log("---timePosted", timePosted);

        if (days <= timePosted) {
          console.log("---- valid card", driverCard);
          return driverCard;
        }
      });
      console.log("timePosted added", timePosted);
    }

    if (location != "") {
      console.log("temp list og loc filter -- ", tempList);
      let selectedCurrency = await GetCurrencyFromAddress(location);
      console.log("selectedCurrency-- ", selectedCurrency);
      let arrayLocation = location.toLowerCase().trim().split(",");
      console.log("array ---", arrayLocation);

      if (arrayLocation.length === 1) {
        console.log("search for country");
        tempList = tempList.filter((driverCard) => {
          console.log(
            "card location country----",
            driverCard.location.country.toLowerCase().trim()
          );
          if (
            driverCard.location.country.toLowerCase().trim() == arrayLocation[0]
          ) {
            return driverCard;
          }
        });

        console.log("filter country cards ---- ", tempList);
      } else {
        console.log("search for city");
        tempList = tempList.filter((driverCard) => {
          console.log(
            "card location country----",
            driverCard.location.city.toLowerCase().trim()
          );

          let driverCity = driverCard.location.city.toLowerCase().trim();

          if (arrayLocation.includes(driverCity)) {
            return driverCard;
          }
        });
      }
    }

    // let joblistsTemp = jobList.map((job)=> job.category.includes(driverCategory) )

    // let joblistsTemp = jobList.map((job)=> job.category.includes(driverCategory) )

    console.log("og list driver list -- ", driverCardList);

    console.log("after applying driver list filter --------- ", tempList);
    setFilteredDriverCardList(tempList);
    setDriverFilterApplied(true);
  };

  return (
    <div className="modal fade show" id="driverfilterModal" aria-modal="true">
      <div className="modal-dialog">
        <div className="modal-content">
          {/* <!-- Modal Header --> */}
          <div className="modal-header filter-header">
            <h4 className="modal-title">Drivers Filter</h4>
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
              {/* <input className="form-control" 
              placeholder="Nairobi, Kenya" /> */}
              <FilterPlacesDriver
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
                    placeholder="Minimum"
                    maxlength="15"
                    value={salaryMin}
                    onChange={(e) => setSalaryMin(e.target.value)}
                  /> */}
                </div>
                <div className="col-6">
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
                    placeholder="Maximum"
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

// DriversHireFilter.propTypes = {
//   onFilter: PropTypes.func.isRequired,
// };

export default DriversHireFilter;
