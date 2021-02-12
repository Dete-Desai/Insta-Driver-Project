import React from 'react';
import fileIcon from '../../../dist/icons/fileIcon.png';

const Upload = () => {
  return (
    <div className="upload section__style px-5 pb-3 pt-5 bg-white mt-3">
      <div className="row">
        <div className="col-md-12">
          <h5 className="form__heading">My Uploads</h5>
        </div>
        <div className="col-md-6 mt-4">
          <div className="d-flex align-items-center pb-3 pl-0">
            <img className="mr-3" src={fileIcon} alt="" />
            <span className="text-gray"> Driving License</span>
          </div>
          <div className="d-flex align-items-center pb-3 pl-0">
            <img className="mr-3" src={fileIcon} alt="" />
            <span className="text-gray"> Certificate of Good Conduct</span>
          </div>
        </div>
        <div className="col-md-6 mt-4">
          <div className="d-flex align-items-center pb-3 pl-0">
            <img className="mr-3" src={fileIcon} alt="" />
            <span className="text-gray">Public Service Vehicle (PSV) License</span>
          </div>
        </div>
        <div className="col-md-12 my-2 mt-3">
          <p style={{ color: "#969393" }}>The driver has made his uploads public. Click the Icons to view the attached doc in a new window.</p>
        </div>
      </div>

    </div>
  );
};

export default Upload;