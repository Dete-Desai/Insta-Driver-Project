import React, { useState, useCallback, useEffect } from "react";
import HomeFilter from "../../Home/HomeFilter";
import DriverDetails from "./DriverDetails";
import { useDispatch, useSelector } from "react-redux";
import {
  searchDriver,
  setSearchResultPage,
} from "../../../redux/actions/driver_search_actions";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import NoResultsFound from "./NoResultsFound";

const PAGE_SIZE = process.env.MAX_SEARCH_RESULT_PAGE_SIZE || 10;

const PageLinkItem = (props) => {
  const [enabled, setEnabled] = useState(true);
  const click = () => {
    setEnabled(false);
    props.pageChange(props.page);
  };
  return (
    <li className="page-item" key={props.page} id={props.page}>
      <button
        type="button"
        className="page-link btn btn-link"
        disabled={!enabled}
        onClick={click}
      >
        {props.page}
      </button>
    </li>
  );
};

PageLinkItem.propTypes = {
  page: PropTypes.number.isRequired,
  pageChange: PropTypes.func.isRequired,
};

//helper functions
const resultPageSelector = (state) => {
  const { currentPage } = state.driver_search_reducers;
  const allResults = state.driver_search_reducers.driver_search_results;

  if (allResults) {
    /*if the items are less than or equal to the size of page
      return the entire array*/
    if (allResults.length <= PAGE_SIZE) {
      return allResults;
    }
    //set the lower limit index
    const lowerLimit = (currentPage - 1) * PAGE_SIZE;
    //upper limit
    const upperLimit = lowerLimit + PAGE_SIZE;
    /**the case where this is the tail-end of the results array
     * have to account for the fact that Array.slice(start,end)
     * does NOT include the element at the last index
     */
    if (allResults.length <= upperLimit) {
      return allResults.slice(lowerLimit, allResults.length + 1);
    }
    //else
    return allResults.slice(lowerLimit, upperLimit + 1);
  }
  //else the array is empty if the allResults is empty or undefined or null
  return [];
};

const getPagesCount = (resultCount) => {
  if (resultCount <= PAGE_SIZE) return 1;
  //else
  return Math.ceil(resultCount / PAGE_SIZE);
};

//custom hook
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
const AllDriverSearch = () => {
  let query = useQuery();
  const [category, setCategory] = useState(query.get("category"));
  const [driverType, setDriverType] = useState(query.get("driverType"));
  const [location, setLocation] = useState(query.get("location"));
  const [salaryMin, setSalaryMin] = useState(query.get("salaryMin"));
  const [salaryMax, setSalaryMax] = useState(query.get("salaryMax"));
  const [gender, setGender] = useState(query.get("gender"));
  const [drivingExperience, setDrivingExperience] = useState(
    query.get("drivingExperience")
  );
  const [licenseAge, setLicenseAge] = useState(query.get("licenseAge"));
  const [currency, setCurrency] = useState(query.get("currency"));
  const [error, setError] = useState("");
  const [hasError, setHasError] = useState(false);
  const [prevEnabled, setPrevEnabled] = useState(true);
  const [nextEnabled, setNextEnabled] = useState(true);
  const dispatch = useDispatch();
  const totalCount = useSelector(
    (state) => state.driver_search_reducers.total_count
  );
  const currentPage = useSelector(
    (state) => state.driver_search_reducers.current_page
  );
  const loading = useSelector((state) => state.driver_search_reducers.loading);

  useEffect(() => {
    if (category === "" || location === "" || driverType === "") {
      setHasError(true);
      var errors = `Fill/Select these required fields: ${
        category === "" ? "Category," : ""
      } ${location === "" ? "Location," : ""} ${
        driverType === "" ? "Driver Type" : ""
      }`;
      setError(errors);
      return;
    }
    setHasError(false);
    var extraFilter = {
      currency: currency,
      salaryMin: salaryMin,
      salaryMax: salaryMax,
      gender: gender,
      licenseAge: licenseAge,
      drivingExperience: drivingExperience,
    };
    var subFilter = {
      category: category,
      location: location,
      driverType: driverType,
    };
    const fullFilter = { ...subFilter, ...extraFilter };
    console.log("useEffect alldriver search", fullFilter);
    dispatch(searchDriver(fullFilter));
  }, [dispatch]);
  //define the selector
  const currentPageItems = useSelector(resultPageSelector);

  console.log("inside allDriverSearch : currentPageItems");
  console.log(currentPageItems);
  console.log(totalCount);

  const onSearch = useCallback(() => {
    if (category === "" || location === "" || driverType === "") {
      setHasError(true);
      var errors = `Fill/Select these required fields: ${
        category === "" ? "Category," : ""
      } ${location === "" ? "Location," : ""} ${
        driverType === "" ? "Driver Type" : ""
      }`;
      setError(errors);
      return;
    }
    setHasError(false);
    var extraFilter = {
      currency: currency,
      salaryMin: salaryMin,
      salaryMax: salaryMax,
      gender: gender,
      licenseAge: licenseAge,
      drivingExperience: drivingExperience,
    };
    console.log("allDriverSearch xtrafilter", extraFilter);
    var subFilter = {
      category: category,
      location: location,
      driverType: driverType,
    };
    const fullFilter = { ...subFilter, ...extraFilter };
    console.log("allDriverSearch fullfilter", fullFilter);
    dispatch(searchDriver(fullFilter));
  }, [dispatch, category, location, driverType]);

  const onCategorySelectionChange = (e) => {
    setCategory(e.target.value);
  };

  const onDriverTypeSelectionChange = (e) => {
    setDriverType(e.target.value);
  };

  const onSearchLocationChange = (e) => {
    setLocation(e.target.value);
  };

  useEffect(() => {
    if (getPagesCount(totalCount) === 1) {
      setNextEnabled(false);
      setPrevEnabled(false);
    }
  }, [totalCount]);

  const generatePageLinks = () => {
    var pages = totalCount <= PAGE_SIZE ? 1 : getPagesCount(totalCount);
    var pageNumbers = [];
    for (var i = 1; i <= pages; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers.map((number) => (
      <PageLinkItem page={number} pageChange={onPageChange} />
    ));
  };

  const onPageChange = (page) => {
    dispatch(setSearchResultPage(page));
  };

  const onPrev = () => {
    if (currentPage - 1 === 0) {
      dispatch(setSearchResultPage(1));
      setPrevEnabled(false);
    }

    dispatch(setSearchResultPage(currentPage - 1));
  };

  const onNext = () => {
    if (currentPage + 1 > getPagesCount(totalCount)) {
      dispatch(setSearchResultPage(getPagesCount(totalCount)));
      setNextEnabled(false);
    }
    dispatch(setSearchResultPage(currentPage));
  };

  const onFilter = (xtraFilter) => {
    setCurrency(xtraFilter.currency);
    setGender(xtraFilter.gender);
    setDrivingExperience(xtraFilter.drivingExperience);
    setLicenseAge(xtraFilter.licenseAge);
    setSalaryMin(xtraFilter.salaryMin);
    setSalaryMax(xtraFilter.salaryMax);
  };
  return (
    <div className="search-container">
      <section className="searchbg title">
        <div className="container">
          <div className="">Search Results</div>
        </div>
      </section>
      <div className="container">
        <div className="col-lg-12 text-center mt-3 mb-3 border-bottom pb-3">
          You can search verified only drivers at the field "Select Search Type"
          and pick "Search Verified Drivers" option. <br />
          <a href="https://instadriver.co/verified_search">Click here</a> to
          learn more about Verified Search feature. Otherwise, you can continue
          with Free Search option.
        </div>
      </div>
      <div className="container">
        {hasError && (
          <div className="alert alert-danger">
            <span>{error}</span>
          </div>
        )}
        <form method="get" id="frmSearch" name="frmSearch">
          <div className="form-row">
            <div className="col-lg-1">
              <h5 className="pt-2">Drivers</h5>
            </div>
            <div className="col-lg-3">
              <div className="select">
                <select
                  id="cid"
                  name="cid"
                  value={category}
                  onChange={onCategorySelectionChange}
                >
                  <option value="">Select Category</option>
                  <option value="PERSONAL DRIVER">Personal Driver</option>
                  <option value="CAB">Cab Driver</option>
                  <option value="COMMUTER DRIVER">
                    Public Commuter Driver (e.g. Bus, Ambulance)
                  </option>
                  <option value="RIDE SHARING DRIVER">
                    Ride-Sharing Driver e.g Uber, Taxify
                  </option>
                  <option value="SCHOOL BUS DRIVER">School Bus Driver</option>
                  <option value="TRUCK DRIVER">Truck Driver</option>
                  <option value="FORK LIFT DRIVER">Forklift Driver</option>
                  <option value="ON-DEMAND DRIVER">On-Demand Driver</option>
                </select>
                <div className="select__arrow"></div>
              </div>
            </div>
            <div className="col-lg-3">
              <input
                type="text"
                className="form-control select pac-target-input inputIcon-none"
                id="loc"
                name="loc"
                value={location}
                placeholder="Enter a location"
                autocomplete="off"
                onChange={onSearchLocationChange}
              />
            </div>
            <div className="col-lg-3">
              <div className="select">
                <select
                  id="sty"
                  name="sty"
                  onChange={onDriverTypeSelectionChange}
                  value={driverType}
                >
                  <option value="">Select Driver Type</option>
                  <option value="ALL DRIVERS" selected="selected">
                    All Drivers
                  </option>
                  <option value="VERIFIED DRIVERS">Verified Drivers</option>
                </select>
                <div className="select__arrow"></div>
              </div>
            </div>
            <div className="col-lg-1 text-center col-2">
              <HomeFilter onFilter={onFilter} />
            </div>
            <div className="col-lg-1 col-10">
              <button
                style={{ border: "none" }}
                onClick={onSearch}
                type="button"
                className="btn btn-primary bg-orange"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="container mb-5">
        <div className="row">
          {loading && (
            <div className="row" role="status">
              <div className="col-md-12">
                <span className="sr-only">Loading...</span>
                <br />
              </div>
            </div>
          )}
          {!loading && totalCount === 0 ? (
            <NoResultsFound />
          ) : (
            !hasError &&
            currentPageItems &&
            currentPageItems.map((driver) => (
              <DriverDetails driver={driver} key={driver.id} />
            ))
          )}
        </div>
      </div>
      <div className="col-lg-12 mt-3 border-top">
        {currentPageItems && currentPageItems.length > 0 && (
          <div className="d-flex justify-content-center">
            <ul className="pagination mt-4">
              <div>
                <ul className="pagination">
                  <li className="page-item">
                    <button
                      type="button"
                      className="page-link btn btn-link"
                      disabled={!prevEnabled}
                      aria-label="Previous"
                      onClick={onPrev}
                    >
                      ‹
                    </button>
                  </li>
                  {generatePageLinks()}
                  <li className="page-item">
                    <button
                      type="button"
                      className="page-link btn btn-link"
                      disabled={!nextEnabled}
                      aria-label="Next"
                      onClick={onNext}
                    >
                      ›
                    </button>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllDriverSearch;
