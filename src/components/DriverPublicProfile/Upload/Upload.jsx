import React from 'react';
import fileIcon from '../../../dist/icons/fileIcon.png';
import DriverExperience from '../../DriverProfilePreview/DriverExperience/DriverExperience';

const Upload = ({driver}) => {
  return (
    <div className="upload section__style px-5 pb-3 pt-5 bg-white mt-3">
      <div className="row">
        <div className="col-md-12">
          <h5 className="form__heading">My Uploads</h5>
        </div>
        <div className="col-md-6 mt-4">
        {driver && driver.myUploads && driver.myUploads[0]?<div className="d-flex align-items-center pb-3 pl-0">
            <img className="mr-3" src={fileIcon} alt="" />
            <span className="text-gray"> <a href={driver.myUploads[0].doc}
            >{driver && driver.myUploads[0] && driver.myUploads[0].title? driver.myUploads[0].title: "Driving License"}</a></span>
          </div>:null}
          {driver && driver.myUploads && driver.myUploads[1]?
          <div className="d-flex align-items-center pb-3 pl-0">
            <img className="mr-3" src={fileIcon} alt="" />
            <span className="text-gray"> <a href={driver.myUploads[1].doc}
            >{driver && driver.myUploads[1] && driver.myUploads[1].title?driver.myUploads[1].title: "Certificate Of Good Conduct"}</a> </span>
          </div>: null }
        </div>
        {driver && driver.myUploads && driver.myUploads[2]?
        <div className="col-md-6 mt-4">
          <div className="d-flex align-items-center pb-3 pl-0">
            <img className="mr-3" src={fileIcon} alt="" />
            <span className="text-gray">
            <a href={driver.myUploads[2].doc}
            >{driver && driver.myUploads[2] && driver.myUploads[2].title?driver.myUploads[2].title:"Public Service Vehicle (PSV) License"}</a></span>
          </div>
        </div>: null }
        <div className="col-md-12 my-2 mt-3">
          <p style={{ color: "#969393" }}>The driver has made his uploads public. Click the Icons to view the attached doc in a new window.</p>
        </div>
      </div>
    </div>
  );
};

export default Upload;