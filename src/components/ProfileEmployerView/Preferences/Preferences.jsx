import React from 'react';

const Preferences = () => {
  return (
    <div className="preferences section__style pr-2 pb-3 pt-5 bg-white mt-3">
      <div className="col-md-10 m-auto px-5">
        <h5 className="form__heading">My Preferences or Special Requests</h5>
      </div>
      <div className="col-md-10 m-auto px-5 py-3 ">
        <div
          style={{ width: "100%", background: "#EDF5FA", borderRadius: "0px 30px" }}
          className="p-4">
          <span className="text-gray">I'm a young person who has goals of owning a tour firm.In 2 years time id like to do a part time course in fleet management that includes study of modern integrated systems in regards to managing a number of vehicle whether in public or private practice.</span>
        </div>
      </div>
    </div >
  );
};

export default Preferences;