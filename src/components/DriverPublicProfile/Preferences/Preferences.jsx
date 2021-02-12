import React from "react";

const Preferences = ({ driver }) => {
  return (
    <div className="preferences section__style pr-2 pb-3 pt-5 bg-white mt-3">
      <div className="col-md-10 m-auto px-5">
        <h5 className="form__heading">My Preferences or Special Requests</h5>
      </div>
      <div className="col-md-10 m-auto px-5 py-3 ">
        <div
          style={{
            width: "100%",
            background: "#EDF5FA",
            borderRadius: "0px 30px",
          }}
          className="p-4"
        >
          {driver && driver.preferences ? (
            <span className="text-gray">{driver.preferences}</span>
          ) : (
            <span className="alert-warning">
              Preferences information not available
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Preferences;
