import React from "react";
import PropTypes from "prop-types";

const FilterCard = (props) => {
  return (
    <div>
      <div className="modal fade" id="filterModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <br />
            <br />
            <br />
            <br />
            <form className="padding_left_85">
              <div className="col-md-3">
                <button
                  className="systemdropdownbutton1 dropdownbuttonhover1"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Time Appled &nbsp; &nbsp;
                  <i className="fa fa-chevron-down" aria-hidden="true"></i>
                </button>
                <div
                  className="dropdown-menu dropdown-filter-menu-center1"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li className="dropdown-item"> Last Hour</li>
                  <li className="dropdown-item"> 12 hrs Ago</li>
                  <li className="dropdown-item"> Today</li>
                  <li className="dropdown-item"> Today</li>
                  <li className="dropdown-item"> This Week</li>
                  <li className="dropdown-item"> This Month</li>
                  <li className="dropdown-item"> This Year</li>
                </div>
              </div>
              <br />
              <div className="col-md-3">
                <button
                  className="systemdropdownbutton1 dropdownbuttonhover1"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Time Rejected &nbsp; &nbsp;
                  <i className="fa fa-chevron-down" aria-hidden="true"></i>
                </button>
                <div
                  className="dropdown-menu dropdown-filter-menu-center2"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li className="dropdown-item"> Last Hour</li>
                  <li className="dropdown-item"> 12 hrs Ago</li>
                  <li className="dropdown-item"> Today</li>
                  <li className="dropdown-item"> Today</li>
                  <li className="dropdown-item"> This Week</li>
                  <li className="dropdown-item"> This Month</li>
                  <li className="dropdown-item"> This Year</li>
                </div>
              </div>
              <br />
              <div className="col-md-3">
                <button
                  className="systemdropdownbutton1 dropdownbuttonhover1"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Application Method &nbsp; &nbsp;
                  <i className="fa fa-chevron-down" aria-hidden="true"></i>
                </button>
                <div
                  className="dropdown-menu dropdown-filter-menu-center3 "
                  aria-labelledby="dropdownMenuButton"
                >
                  <li className="dropdown-item"> Vacancy Ads</li>
                  <li className="dropdown-item"> Driver Cards</li>
                  <li className="dropdown-item"> Vacancy ads & Driver Cards</li>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <div className="col-md-3">
                <button
                  type="submit"
                  className="system-filter-button1 system-filter-button1 system-filter-button1-hover"
                >
                  Apply Filters
                </button>
              </div>
            </form>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

FilterCard.propTypes = {};

export default FilterCard;
