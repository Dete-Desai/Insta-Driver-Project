import React from 'react';
import member from '../../../../../dist/images/user1.svg';
import crossIcon from '../../../../../dist/icons/crossIcon.svg';


const MemberProfile = () => {
  return (
    <div className="text-center">
      <div className="position-relative justify-content-center mb-2">
        <img
          src={member}
          className="rounded-circle"
          height="100px"
          width="100px"
          alt="members"
        />
        <button className="btn iconBtn position-absolute crossIcon">
          <img className="mr-3" src={crossIcon} alt="" />
        </button>
      </div>

      <h6 className="mb-0">Karry John</h6>
      <span className="text-muted"> @JohntheD</span>
      <hr
        style={{
          width: "50%",
          marginTop: 4,
          marginBottom: 1,
        }}
      />
      <h6 className="text-orange">New York, USA</h6>
    </div>
  );
};

export default MemberProfile;