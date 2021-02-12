import React from "react";
import DownloadCard from "./Job_Components/DownloadCard";
import MoreInfoNav from "./Job_Components/MoreInfoNav";

const MoreInfo = () => {
  return (
    <div className="row">
      <div className="row col-md-12">
        <MoreInfoNav />
      </div>
      <div className="row col-md-12">
        <div className="list-nav-body">
          <div className="row">
            <div className="cus-space col-md-8"/>
            <div className="col-md-1">
                <span style={{ fontSize: 22, color: "white" }}><b>1/2</b></span>
            </div>
            <div className="col-md-1">
                <i className="fa fa-download" style={{ fontSize: 22, color: "white" }}/>
            </div>
            <div className="col-md-1">
                <i className="fa fa-print" aria-hidden="true" style={{ fontSize: 22, color: "white" }}/>
            </div>
          </div>
          <div className="row">
            <main role="main" className="col-lg-12  px-1" style={{ left: 240 }}>
                <DownloadCard/>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
