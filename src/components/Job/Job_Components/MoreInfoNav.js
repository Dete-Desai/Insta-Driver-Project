import React from "react";

const MoreInfoNav = () => {
  return (
    <div>
      <div className="list-nav">
        <div className=" row col-md-12" style={{left:300, bottom:10}}>
        <div className="col-md-3">
          <button className="more-info-btn more-info-btn-state more-info-btn-hover" href="#">Attachment 1</button>
        </div>
        <div className="col-md-3">
          <button className="more-info-btn more-info-btn-state more-info-btn-hover more-info-btn-active" href="#">Attachment 2</button>
        </div>
        <div className="col-md-3">
          <button className="more-info-btn more-info-btn-state more-info-btn-hover" href="#">Attachment 3</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfoNav;
