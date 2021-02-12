import React from 'react';
import { Link } from 'react-router-dom';

const ChatHistory = ({ status, statusIcon }) => {
  return (
    <div className="chatDetailStyle">
      <p className="text-gray font-24 mb-0 pb-2">Started: <span className="font-weight-bold">20 min ago</span></p>
      <p className="text-gray font-24 mb-0 pb-2">Room Ends: <span className="font-weight-bold">Unspecified</span></p>
      <p className="text-gray font-24 mb-0 pb-2">Room Members:  <span className="font-weight-bold">20</span></p>
      <p className="text-gray font-24 mb-0 pb-2 "> Room Status:
        <span className="font-weight-bold"> {status}</span>
        <span className="ml-3"><img style={{ weight: "35px", height: "35px" }} src={statusIcon} alt="" /></span>
      </p>
      <div className="mb-2">
        <span className="text-gray font-24">Participants & Their Locations:</span> <br />
        <span className="text-gray font-24 font-weight-bold"> Westlands, South C,  <span className="text-orange">4 drivers</span> </span> <br />
        <span className="text-gray font-24 mb-0 pb-2 font-weight-bold"> Nairobi West, Roadside, <span className="text-orange">3 drivers</span></span>
      </div>
      <Link to="room-participants">
        <small style={{ fontSize: "15px" }} className="text-orange">View More Room Participants & Their Locations</small>
      </Link>
      <p className="text-gray font-24 mb-0 pb-2"> Room Creator:  <span className="text-orange font-weight-bold">@sakll</span></p>
    </div>
  );
};

export default ChatHistory;