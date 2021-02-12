import React from 'react';
import get from 'lodash/get'

const Preferences = ({userInfo}) => {
  return (
    <div className="preferences section__style pr-2 pb-3 pt-5 bg-white mt-3">
      <div className="col-md-10 m-auto px-5">
        <h5 className="form__heading">My Preferences or Special Requests</h5>
      </div>
      <div className="col-md-10 m-auto px-5 py-3 ">
        <div
          style={{ width: "100%", background: "#EDF5FA", borderRadius: "0px 30px" }}
          className="p-4">
          <span className="text-gray">
            {get(userInfo,"preferences")||""}
          </span>
        </div>
      </div>
    </div >
  );
};

export default Preferences;