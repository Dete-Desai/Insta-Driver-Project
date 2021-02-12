import React from 'react';
import member from '../../../../../dist/images/user1.svg';


const ParticipantsProfile = () => {
  return (
    <div className="text-center memberCard py-3">
      <div className="position-relative justify-content-center mb-2">
        <img
          src={member}
          className="rounded-circle"
          height="100px"
          width="100px"
          alt="members"
        />
      </div>

      <h6 className="mb-0">Karry John</h6>
      <span className="text-muted hoverColor"> @JohntheD</span>
      <hr
        style={{
          width: "50%",
          marginTop: 4,
          marginBottom: 1,
        }}
      />
      <h6 className="text-orange hoverColor">New York, USA</h6>
    </div>
  );
};

export default ParticipantsProfile;