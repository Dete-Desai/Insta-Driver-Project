import React from "react";
import get from "lodash/get";
import SocialHistorySummary from "../../DriverProfile/SocialHistory/SocialHistorySummary";

const SocialHistory = (props) => {
  return (
    <div className="socialHistory section__style pb-3 pt-5 pr-2 bg-white mt-3">
      <div className="col-md-12 m-auto px-5 pb-3">
        <h5 className="form__heading">My “Get Social” History</h5>
      </div>
      {props && props.data ? (
        <div>
          <div className="col-md-12 mb-4">
            <div className="">
              <SocialHistorySummary />
            </div>
          </div>
          <div className="col-md-10 m-auto px-5">
            <div className="col-md-12 px-4 py-2 currencyInfo my-4">
              <p style={{ color: "#969393" }}>
                Get Social is the social media for drivers. Drivers connect to
                fellow drivers, inbox each other, join groups to discuss
                challenges, share opportunities, join group video calls for fun
                and for getting traffic info, play online multiplayer games, etc
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="col-md-8 px-4 p-4 currencyInfo my-4">
          <p style={{ color: "#969393" }}>
            This driver has not made his “Get Social” history public to
            non-drivers. You have to be a driver and have registered a driver
            account to view his “Get Social” history. <br /> <br />
            Get Social is the social media for drivers. Drivers connect to
            fellow drivers, inbox each other, join groups to discuss challenges,
            share opportunies, join group video calls for fun and for getting
            traffic info, play online multiplayer games, etc
          </p>
        </div>
      )}
    </div>
  );
};

export default SocialHistory;
