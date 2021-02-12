import React from 'react';

const MoreInform = ({driver}) => {
  return (
    <div className="more__info section__style pr-2 pb-3 pt-5 bg-white mt-3">
      <div className="col-md-10 m-auto px-5">
        <h5 className="form__heading">About Giving More Information</h5>
      </div>
      <div className="col-md-10 m-auto px-5 py-3 ">
        <div
          style={{ width: "100%", background: "#EDF5FA", borderRadius: "0px 30px" }}
          className="p-4">
          {driver && driver.willProfileMoreInformation?<span className="text-gray">
            I Would Be Willing to Provide More Information upon request</span>:null}
        </div>
      </div>
    </div >
  );
};

export default MoreInform;