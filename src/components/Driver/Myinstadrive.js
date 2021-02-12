import React from "react";
import DriverSideBarFunction from "../Layout/MainSideBar/Driver/DriverSideBarFunction";
import ComingSoonAlert from "./DriverComponents/ComingSoonAlert";

const Myinstadrive = () => {
  return (
    <div id="content">
      <div className="search-driver-container px-5">
        <div className="row ml-auto">
          <DriverSideBarFunction />
          <div className="col-xl-9 mt-5 pt-5">
            <h3>My InstaDrive</h3>
            <p style={{ fontSize: "16px" }}>
              Store your documents securely. Instadriver gives you one unified
              platform for your crucial needs in your career and life. Store
              your driving documents, ID's, contracts, even ppictures of your
              cars. And important photos related to your transport business.
            </p>{" "}
            <br />
            <div className="text-right">
              <ComingSoonAlert/>
            </div>
            <div className="row d-flex justify-content-between mt-5">
              <div className="col-md-6 col-lg-5 mb-4">
                <div
                  class="card"
                  style={{
                    backgroundColor: "#F0F0F0",
                    border: "1px solid #fed136",
                  }}
                >
                  <div class="card-body">
                    <h5 style={{ color: "#6B6565" }}>
                      <img
                        id="preview_image"
                        height={40}
                        src={process.env.PUBLIC_URL + "/images/folder.png"}
                        alt=""
                      />{" "}
                      &nbsp; Your Professional Documents
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-5">
                <div
                  class="card "
                  style={{
                    backgroundColor: "#F0F0F0",
                    border: "1px solid #fed136",
                  }}
                >
                  <div class="card-body">
                    <h5 style={{ color: "#6B6565" }}>
                      <img
                        id="preview_image"
                        height={40}
                        src={process.env.PUBLIC_URL + "/images/folder.png"}
                        alt=""
                      />
                      &nbsp;&nbsp;&nbsp;&nbsp;Your Professional Documents
                    </h5>
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
export default Myinstadrive;
