import React from "react";
import { useHistory } from "react-router-dom";
import SearchBox from "../../../DriverSearch/AllDriverSearch/SearchBox";
import EmployerSideBar from "../../../Layout/MainSideBar/Employer/EmployerSideBar";
import searchBig from "../../../../dist/icons/searchBig.svg";

const SearchDriver = () => {
  const history = useHistory();
  const directToSearch = () => {
    let route = "/search";
    history.push(route);
  };

  return (
    <div className="search-driver-container">
      <div className="row ml-auto">
        <div className="col-2">
          <EmployerSideBar />
        </div>
        <div className="col-xl-10 mt-5 pt-5">
          <div className="row">
            <div className="col-xl-10 m-auto">
              <div className="row m-auto">
                <div className="col-md-5">
                  <SearchBox />
                </div>
                <div className="col-md-1 d-flex justify-content-center align-items-center">
                  <h1>Or</h1>
                </div>
                <div className="col-md-5">
                  <div className="blackbox">
                    <div
                      style={{ marginBottom: "15px" }}
                      className="intro-lead-in text-white text-center"
                    >
                      Find and Hire A Driver
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={searchBig} alt="" className="img-fluid" />
                    </div>
                    <div className="mt-3 text-center">
                      <button
                        onClick={() => directToSearch()}
                        style={{
                          width: "80%",
                          backgroundColor: "#fed136",
                          borderColor: "#fed136",
                          fontFamily: "Rubik",
                          fontSize: "18px",
                          fontWeight: "400",
                          height: "50px",
                          borderRadius: "5px",
                        }}
                        className="tap-express"
                      >
                        Tap To Go To The Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDriver;
