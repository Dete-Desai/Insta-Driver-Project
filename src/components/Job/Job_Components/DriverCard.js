import React from "react";
import { useHistory } from "react-router-dom";
import member2 from "../../../dist/images/user2.png";

const DriverCard = ({cardValues}) => {
  const history=useHistory();
  const gotoDetails=()=>{
     history.push(`/drivers/public-profile/${cardValues.userId}`);
    console.log('cardvalues',cardValues);
  }
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-3 col-6 p-0 mb-5">
        <div className="text-center">
          <div className="mb-2">
            <img
              src={cardValues? cardValues.avatar : member2}
              className="rounded-circle"
              height="85px"
              width="85px"
              alt="members"
              onClick={gotoDetails}
            />
          </div>
          <h6 className="mb-0 textHeading">
            {cardValues ? cardValues.firstName + ' ' + cardValues.lastName : `John Doe`}
          </h6>
          <span className="text-muted textStyle"> {cardValues ? cardValues.username : '@JohntheD'} &nbsp; {cardValues? cardValues.lastSeen : '5d'}</span>
          <hr
            style={{
              width: "50%",
              marginTop: 4,
              marginBottom: 1,
            }}
          />
          <h6 className="textStyle mt-1">
            {cardValues ? `${cardValues.licenseAge} +years licence` : `NA`}
          </h6>
          <h6 className="textStyle">
            {cardValues ? `${cardValues.experience} +years experience` : `NA`}
          </h6>
        </div>
      </div>
    </>
  );
};

export default DriverCard;
