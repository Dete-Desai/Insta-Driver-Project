import React from "react";
import "../../../dist/css/driverpostreposts.css";
import MoreLiveVideos from "./MoreLiveVideos";

const LivestreamTrendsCard = () => {
  return (
    <div className="trending-streams">
      <div className="row">
        <span className="tab-header">
          <b>Trending Streams</b>
        </span>
      </div>
      <div
        className="row"
        style={{
          borderTop: "2px solid grey ",
          marginLeft: 20,
          marginRight: 20,
        }}
      ></div>
      <br />
      <div className="row">
        <div className="col-md-8" style={{ marginLeft: 130, bottom:40 }}>
          <MoreLiveVideos />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-8" style={{ marginLeft: 130, bottom:160 }}>
          <MoreLiveVideos />
        </div>
      </div>
    </div>
  );
};

export default LivestreamTrendsCard;
