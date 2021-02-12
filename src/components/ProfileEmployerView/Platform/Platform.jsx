import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import checked from "../../../dist/icons/checked.png";

const Platform = (props) => {
  return (
    <div className="driver__platform section__style px-5 pb-3 pt-5 bg-white mt-3">
      <h5 className="form__heading">Platforms Am On In Ride-hailing</h5>
      <form className="row mt-5">
        <div className="col-md-6">
          {props.data &&
            props.data.map((d, idx) => (
              <div className="d-flex align-items-center pb-3 pl-0">
                <img className="mr-3" src={checked} alt="" />
                <span className="text-gray">{d}</span>
              </div>
            ))}

          {/* <div className="d-flex align-items-center pb-3 pl-0">
            <img className="mr-3" src={checked} alt="" />
            <span className="text-gray">Swvl</span>
          </div> */}
        </div>
        {/* <div className="col-md-6">
          <div className="d-flex align-items-center pb-3 pl-0">
            <img className="mr-3" src={checked} alt="" />
            <span className="text-gray">Uber</span>
          </div>
          <div className="d-flex align-items-center pb-3 pl-0">
            <img className="mr-3" src={checked} alt="" />
            <span className="text-gray">Bolt</span>
          </div>
        </div> */}
      </form>
    </div>
  );
};

export default Platform;
