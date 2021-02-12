import React from "react";
import car from "../../../dist/images/redmastung.png";

const DownloadCard = () => {
  return (
    <div className="more-info-card">
      <div className="col-md-12" style={{top:34, left:90}}>
        <img src={car} alt="Avatar" style={{ width: "1140px", height: "574px" }} />
      </div>
    </div>
  );
};

export default DownloadCard;
